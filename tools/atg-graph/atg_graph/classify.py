# SPDX-License-Identifier: Apache-2.0
"""Heuristic authority classification for tools, MCP capabilities and cloud actions.

Everything here is inference. Each result carries the basis it was inferred
from, and anything the rules cannot classify is left UNKNOWN rather than
guessed (UNKNOWN is never treated as safe or zero).
"""

from __future__ import annotations

import re

# Verb tokens -> Artifact #2 §5.2 authority class. Checked in this order.
_VERB_RULES = (
    ("Delete", {"delete", "remove", "destroy", "drop", "purge", "terminate", "wipe", "erase", "truncate", "rm"}),
    ("Transact", {"pay", "payment", "refund", "transfer", "purchase", "charge", "invoice", "checkout", "withdraw"}),
    ("Approve", {"approve", "authorize", "authorise", "grant"}),
    ("Execute", {"run", "exec", "execute", "shell", "command", "cmd", "invoke", "deploy", "launch", "eval", "evaluate", "script", "trigger"}),
    ("Disclose", {"send", "email", "post", "publish", "share", "reply", "message", "notify", "upload", "tweet", "broadcast"}),
    ("Modify", {"create", "update", "write", "edit", "put", "set", "add", "patch", "insert", "upsert", "rename", "move",
                "commit", "push", "merge", "fork", "assign", "label", "close", "reopen", "save", "modify", "change", "replace"}),
    ("Read", {"get", "list", "read", "search", "fetch", "describe", "find", "query", "view", "show", "download",
              "browse", "lookup", "retrieve", "inspect", "check", "count"}),
)

# Objects whose creation makes content visible to other people (a write is also a disclosure).
_PUBLISHED_OBJECTS = {"issue", "issues", "pull", "comment", "comments", "post", "message", "email", "gist", "page", "review", "tweet", "reply"}

# Verbs that put new or changed content in front of other people (merging or closing does not).
_PUBLISHING_VERBS = {"create", "add", "open", "submit", "post", "reply", "comment", "write", "update", "edit"}

# Content that people outside the agent's control can author (an influence channel).
_UNTRUSTED_OBJECTS = {"issue", "issues", "comment", "comments", "email", "emails", "mail", "inbox", "message", "messages",
                      "web", "url", "page", "browse", "fetch", "post", "posts", "notification", "notifications", "pull", "review", "reviews"}

# Content likely to be private or internal.
_SENSITIVE_OBJECTS = {"file", "files", "contents", "content", "repository", "repo", "document", "documents", "secret", "secrets",
                      "database", "db", "record", "records", "customer", "customers", "private", "drive", "table"}


def tokens(name: str) -> list[str]:
    """Split snake_case, kebab-case, dotted and camelCase names into lower-case tokens."""
    spaced = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", name)
    return [t for t in re.split(r"[^A-Za-z0-9]+", spaced.lower()) if t]


def classify_capability(name: str, annotations: dict | None = None) -> tuple[list[str], list[str], dict]:
    """Return (authority classes, basis notes, flags) for an MCP tool or agent tool.

    flags: open_world (bool), untrusted_read (bool), sensitive_read (bool).
    An empty class list means the authority is UNKNOWN.
    """
    annotations = annotations or {}
    toks = tokens(name)
    classes: list[str] = []
    basis: list[str] = []

    first = toks[0] if toks else ""
    for cls, verbs in _VERB_RULES:
        # The leading verb decides; later tokens may add (e.g. delete_and_send).
        if first in verbs or (cls in ("Delete", "Transact", "Execute") and verbs.intersection(toks)):
            if cls not in classes:
                classes.append(cls)
                basis.append(f"name token {first if first in verbs else sorted(verbs.intersection(toks))[0]!r} -> {cls}")

    if "Modify" in classes and first in _PUBLISHING_VERBS and _PUBLISHED_OBJECTS.intersection(toks):
        classes.append("Disclose")
        basis.append("creates content others can read -> Disclose")

    ro = annotations.get("readOnlyHint")
    destructive = annotations.get("destructiveHint")
    open_world = bool(annotations.get("openWorldHint"))
    if ro is True:
        if any(c != "Read" for c in classes):
            basis.append("readOnlyHint=true conflicts with the name; kept both for review")
        if "Read" not in classes:
            classes.insert(0, "Read")
            basis.append("annotation readOnlyHint=true -> Read")
    if ro is False and destructive is True and "Delete" not in classes:
        classes.append("Delete")
        basis.append("annotation destructiveHint=true -> Delete")
    if ro is False and not classes:
        classes.append("Modify")
        basis.append("annotation readOnlyHint=false -> Modify")
    if open_world:
        basis.append("annotation openWorldHint=true")
        if "Modify" in classes and "Disclose" not in classes:
            classes.append("Disclose")
            basis.append("writes to an open-world system -> Disclose")

    reads = "Read" in classes
    flags = {
        "open_world": open_world,
        "untrusted_read": reads and (open_world or bool(_UNTRUSTED_OBJECTS.intersection(toks))),
        "sensitive_read": reads and bool(_SENSITIVE_OBJECTS.intersection(toks)),
    }
    return classes, basis, flags


# AWS IAM action verb prefixes -> authority classes.
_AWS_PREFIX = (
    ("Delete", ("Delete", "Terminate", "Remove", "Destroy", "Purge", "Deregister", "Revoke")),
    ("Execute", ("Invoke", "Run", "Execute", "Start", "SendCommand", "Trigger")),
    ("Disclose", ("Share", "Publish", "SendEmail", "SendRawEmail", "Export")),
    ("Modify", ("Put", "Create", "Update", "Modify", "Attach", "Tag", "Untag", "Set", "Add", "Associate", "Enable",
                "Replace", "Copy", "Upload", "Restore", "Reboot", "Stop", "Pass", "Import", "Change", "Write", "Detach", "Disable", "BatchWrite")),
    ("Read", ("Get", "List", "Describe", "Head", "Scan", "Query", "Select", "BatchGet", "Lookup", "Download", "Search", "View")),
)


def classify_aws_action(action: str) -> list[str]:
    """Classify one IAM action pattern such as 's3:DeleteObject', 's3:*' or '*'."""
    verb = action.split(":", 1)[1] if ":" in action else action
    if verb == "*" or verb == "":
        return ["Read", "Modify", "Delete", "Execute"]
    if verb.endswith("*") and len(verb) > 1:
        stem = verb[:-1]
        hits = [cls for cls, prefixes in _AWS_PREFIX if any(p.startswith(stem) or stem.startswith(p) for p in prefixes)]
        return hits or ["Read", "Modify", "Delete", "Execute"]
    for cls, prefixes in _AWS_PREFIX:
        if verb.startswith(prefixes):
            return [cls]
    return []
