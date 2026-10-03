# SPDX-License-Identifier: Apache-2.0
"""The tool's vocabulary must match the canonical artifacts word for word."""

import re
import unittest
from pathlib import Path

from atg_graph import schema

REPO = Path(__file__).resolve().parents[3]
ONTOLOGY = (REPO / "docs" / "12-ontology-specification.md").read_text(encoding="utf-8")
CCM = (REPO / "docs" / "02-core-conceptual-model.md").read_text(encoding="utf-8")
LIBRARY = (REPO / "docs" / "05-master-control-library.md").read_text(encoding="utf-8")
WHITEPAPER = (REPO / "whitepaper" / "AI-Trust-Graph-Whitepaper-v1.0.md").read_text(encoding="utf-8")


def appendix(start: str, end: str) -> str:
    return ONTOLOGY.split(start, 1)[1].split(end, 1)[0]


class SchemaMatchesCanon(unittest.TestCase):
    def test_entity_types_are_in_appendix_a(self):
        a = appendix("# Appendix A. Canonical Entity Registry", "# Appendix B.")
        for t in schema.ENTITY_TYPES:
            self.assertRegex(a, rf"(?m)^\| {t} \|", t)

    def test_predicates_are_in_appendix_c(self):
        c = appendix("# Appendix C. Canonical Relationship Registry", "\n# D.1")
        for p in schema.PREDICATES:
            self.assertRegex(c, rf"(?m)^\| {p} \|", p)

    def test_authority_classes_match_artifact_2_in_order(self):
        section = CCM.split("# 5.2  Authority taxonomy", 1)[1].split("# 5.3", 1)[0]
        classes = re.findall(r"(?m)^\| ([A-Z][a-z]+) \| ", section)
        self.assertEqual(tuple(c for c in classes if c != "Class"), schema.AUTHORITY_CLASSES)

    def test_path_state_definition(self):
        self.assertIn("| Topological | A traversal exists in the represented graph. |", ONTOLOGY)

    def test_control_titles_match_artifact_5(self):
        for cid, title in schema.CONTROLS.items():
            self.assertIn(f"# {cid}  {title}\n", LIBRARY, cid)

    def test_questions_are_verbatim_from_the_whitepaper(self):
        e4 = WHITEPAPER.split("### E.4", 1)[1].split("### E.5", 1)[0]
        e9 = WHITEPAPER.split("### E.9", 1)[1].split("# Research question", 1)[0]
        for ref, text in schema.QUESTIONS.items():
            section, n = (e4, ref[-1]) if ref.startswith("E.4") else (e9, ref[-1])
            self.assertIn(f"{n}. {text}", section, ref)


if __name__ == "__main__":
    unittest.main()
