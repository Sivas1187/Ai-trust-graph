# SPDX-License-Identifier: Apache-2.0
import unittest

from atg_graph.classify import classify_aws_action, classify_capability, tokens


class Capabilities(unittest.TestCase):
    def check(self, name, expected, annotations=None):
        classes, basis, _ = classify_capability(name, annotations)
        self.assertEqual(classes, expected, f"{name}: {basis}")

    def test_tokens(self):
        self.assertEqual(tokens("createPullRequest"), ["create", "pull", "request"])
        self.assertEqual(tokens("get-file_contents.v2"), ["get", "file", "contents", "v2"])

    def test_verbs(self):
        self.check("list_issues", ["Read"])
        self.check("delete_branch", ["Delete"])
        self.check("run_shell", ["Execute"])
        self.check("send_email", ["Disclose"])
        self.check("issue_refund", ["Transact"])
        self.check("create_or_update_file", ["Modify"])

    def test_publishing_adds_disclose_but_merging_does_not(self):
        self.check("create_pull_request", ["Modify", "Disclose"])
        self.check("add_issue_comment", ["Modify", "Disclose"])
        self.check("merge_pull_request", ["Modify"])

    def test_annotations(self):
        self.check("frobnicate", ["Read"], {"readOnlyHint": True})
        self.check("frobnicate", ["Modify"], {"readOnlyHint": False})
        self.check("frobnicate", ["Delete"], {"readOnlyHint": False, "destructiveHint": True})

    def test_unknown_stays_unknown(self):
        classes, _, _ = classify_capability("summarize")
        self.assertEqual(classes, [])

    def test_flags(self):
        _, _, f = classify_capability("list_issues", {"readOnlyHint": True})
        self.assertTrue(f["untrusted_read"])
        _, _, f = classify_capability("fetch", {"readOnlyHint": True, "openWorldHint": True})
        self.assertTrue(f["untrusted_read"] and f["open_world"])
        _, _, f = classify_capability("get_file_contents", {"readOnlyHint": True})
        self.assertTrue(f["sensitive_read"])
        self.assertFalse(f["untrusted_read"])


class AwsActions(unittest.TestCase):
    def test_actions(self):
        self.assertEqual(classify_aws_action("s3:GetObject"), ["Read"])
        self.assertEqual(classify_aws_action("s3:DeleteObject"), ["Delete"])
        self.assertEqual(classify_aws_action("ec2:TerminateInstances"), ["Delete"])
        self.assertEqual(classify_aws_action("ssm:SendCommand"), ["Execute"])
        self.assertEqual(classify_aws_action("iam:PassRole"), ["Modify"])
        self.assertEqual(classify_aws_action("ec2:Describe*"), ["Read"])
        self.assertEqual(set(classify_aws_action("s3:*")), {"Read", "Modify", "Delete", "Execute"})
        self.assertEqual(set(classify_aws_action("*")), {"Read", "Modify", "Delete", "Execute"})
        self.assertEqual(classify_aws_action("foo:Frobnicate"), [])


if __name__ == "__main__":
    unittest.main()
