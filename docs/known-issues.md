---
title: Known Issues
description: Issues found in Breezell 1.2.8 and their status. All of them are fixed.
---

# Known Issues

These issues were found in Breezell version 1.2.8. All of them are fixed; update to the latest version if you still see one of them.

| Issue | Status | Details |
| --- | --- | --- |
| Some conversations did not load | Fixed | No data was lost: the conversations and their content are safe. |
| Entanglement output was formatted incorrectly | Fixed | See [Entanglement Mode](/entanglement-mode-overview). |
| Unexpected crashes | Fixed | |
| The built-in browser showed a blank page | Fixed | See [Breezell Browser](/dialog-box-overview#browser). |
| Analyze mode could show leftover tags at the end of an answer | Fixed | See [Analyze](/mode-selection#analyze). |
| A custom context window was not applied to Codex models | Fixed | After setting `gpt-5.6-sol` to 512K, new conversations still showed a 272K maximum. Breezell now applies and shows the configured window. See [Context, reasoning and Fast](/custom-api#context-reasoning-and-fast). |
| Grok sign-in showed the wrong quota | Fixed | |
| Automatic compression did not run after switching the context window | Fixed | Conversations are compressed again as expected. See [Context usage and compression](/dialog-box-overview#context). |
| Dropdown menus showed native styling and narrow borders | Fixed | |
| Reasoning-level settings of Kimi models did not work | Fixed | |
| The chat could stutter when sending messages | Fixed | |

If something does not work as described in this guide, see [Troubleshooting](/troubleshooting) or contact us with your Breezell version and what you see.

Thank you for your patience and your reports.
