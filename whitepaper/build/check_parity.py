#!/usr/bin/env python3
"""Check that the publication PDF contains exactly the text of the authoritative Markdown.

Compares the word sequence of the Markdown (front matter and body) with the
PDF text, after removing layout-only material: the cover labels, running
header, page numbers, the contents list and figure captions repeated from
alt text. Reports every inserted or deleted word run. Exit code 1 on any
difference beyond the known layout labels.

Usage: python3 check_parity.py   (requires pdftotext)
"""

import difflib
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "AI-Trust-Graph-Whitepaper-v1.0.md"
PDF = ROOT / "AI-Trust-Graph-Whitepaper-v1.0.pdf"


def words(text):
    text = text.replace("→", "->").replace("’", "'").replace("“", '"').replace("”", '"')
    text = text.lower().replace("-", "")  # pdftotext joins words hyphenated at line ends
    return re.sub(r"[^a-z0-9]+", " ", text).split()


md = MD.read_text(encoding="utf-8")
# Markdown -> plain words: drop image syntax (captions are compared separately),
# link targets, emphasis and table rules.
md_plain = re.sub(r"!\[([^\]]*)\]\([^)]*\)", r"\1", md)
md_plain = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r"\1", md_plain)
md_plain = re.sub(r"^\|[\s:|-]+\|?\s*$", " ", md_plain, flags=re.M)  # table separator rows only
md_words = words(md_plain)

pages = int(re.search(r"Pages:\s+(\d+)", subprocess.run(["pdfinfo", str(PDF)], capture_output=True, text=True).stdout).group(1))
chunks = []
for i in range(1, pages + 1):
    t = subprocess.run(["pdftotext", "-f", str(i), "-l", str(i), str(PDF), "-"], capture_output=True, text=True).stdout
    if i == 1:  # cover: layout labels only
        continue
    if i == 3:  # contents page: generated from the headings
        assert re.search(r"^Contents$", t, flags=re.M), "page 3 is not the contents page"
        continue
    # running header and page number
    t = re.sub(r"AI Trust Graph · Whitepaper version 1\.0", " ", t)
    t = re.sub(r"DOI 10\.5281/zenodo\.\d+", " ", t)
    # Footer page number: the body is numbered from 1 on PDF page 2. Remove the
    # last line equal to this page's own number (pdftotext may not place it last).
    lines = t.rstrip().split("\n")
    own = str(i - 1)
    for k in range(len(lines) - 1, -1, -1):
        if lines[k].strip() == own:
            del lines[k]
            break
    t = "\n".join(lines)
    chunks.append(t)
pdf_text = "\n".join(chunks)
pdf_words = words(pdf_text)

# Layout labels on the publication-details page, not present as such in the Markdown.
LABELS = {"publication", "details", "title", "author", "version", "doi", "methodology", "baseline",
          "manifest", "blob", "how", "to", "cite", "licence", "whitepaper", "1", "0", "october", "2026"}

# Text drawn inside the SVG figures, and table header rows that the layout
# repeats when a table continues on a new page: allowed as insertions only.
svg_words = set()
for svg in (ROOT / "figures").glob("*.svg"):
    svg_words |= set(words(re.sub(r"<[^>]+>", " ", svg.read_text(encoding="utf-8"))))
header_rows = [words(m) for m in re.findall(r"^(\|[^\n]+\|)\n\|[\s:|-]+\|", md, flags=re.M)]

def allowed_insert(b):
    if all(w in LABELS for w in b) or all(w in svg_words for w in b):
        return True
    i = 0
    while i < len(b):  # one or more repeated header rows
        for h in header_rows:
            if b[i:i + len(h)] == h:
                i += len(h)
                break
        else:
            return False
    return True

sm = difflib.SequenceMatcher(None, md_words, pdf_words, autojunk=False)
problems = []
for op, a1, a2, b1, b2 in sm.get_opcodes():
    if op == "equal":
        continue
    a = md_words[a1:a2]
    b = pdf_words[b1:b2]
    if op == "insert" and allowed_insert(b):
        continue
    problems.append((op, " ".join(a)[:160], " ".join(b)[:160]))




if problems:
    print(f"PARITY: {len(problems)} difference(s)")
    for op, a, b in problems:
        print(f"  {op}: markdown=[{a}] pdf=[{b}]")
    sys.exit(1)
print(f"PARITY OK: {len(md_words)} Markdown words match the PDF text (layout labels excluded).")
