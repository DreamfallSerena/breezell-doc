---
title: Git
description: "Git in Breezell 1.4.59: IntelliJ IDEA-style commit, log, shelf, branches popup and push, on the Agents page and in the IDE. How to open it, which project it shows, checking files and hunks to commit, changes grouped by AI conversation, merge conflicts, the log and interactive rebase, the shelf, pushing, the branches popup, Update Project, the IDE's Git tab and keys, and the current limits."
---

# Git

Breezell 1.4.59 adds Git in the style of IntelliJ IDEA: check the files to commit, or only parts of a file; files changed by AI conversations are grouped by conversation; see the branch graph, shelve changes, see what a push sends before it goes, rebase interactively, and use a branches popup to check out, compare and merge. It works on the [Agents page](/agents-page) and in the IDE.

| Term | Meaning |
| --- | --- |
| Check | Include in the next commit. Unchecked changes stay in the working tree and are not committed. |
| Hunk | One continuous piece of change in a file. You can check only some hunks of a file. |
| Shelve | Put changes aside so the working tree is clean, and bring them back later. |
| Upstream | The remote branch the current branch follows, for example `origin/main`. |

## Opening it {#open}

- **Agents page:** "Git" at the top of the list on the left; the number beside it is how many files of this project have changed. Click it to open Git in the middle of the page; the arrow at the top left ("Back to the conversation") or `Esc` takes you back.
- **IDE:** run `Git: Commit…`, `Git: Push…`, `Git: Update Project`, `Git: Show Log`, `Git: Show Shelf` or `Git: Branches…` from the Command Palette (`Ctrl+Shift+P`) to open a tab named "Git", the same as on the Agents page.
- Wherever you are, `` Alt+` `` opens "Git operations": "Commit…", "Push…", "Update Project", "Branches…", "Log", "Shelf", "Fetch".

## Which project it shows {#project}

- Git follows the conversation you are looking at: for a conversation of this window's project it is that repository; for another project's conversation it is that project's repository, and its name shows at the top (hover text "Git of "*project name*", from its window"). WSL and SSH projects work the same way.
- When that project has no open window, Breezell opens one in the background without showing it; meanwhile the page says "Reaching the window of "*project name*"…".
- When a project has several repositories, click the repository name ("Switch repository") to pick one.
- A folder that is not a Git repository yet shows "This project is not a Git repository yet." and an "Initialize Repository" button.

The row at the top, from left to right:

- The branch name: opens the [branches popup](#branches). The sync status beside it is the one on the IDE's status bar and does the same when clicked.
- "Update Project" (the down arrow): see [Update Project](#update).
- "Push…" (the up arrow): see [Pushing](#push).
- "More Git actions" (⋯): the same as the "⋯" menu of the IDE's Source Control, for example pull, remotes, tags and worktrees.

Below are three tabs: "Commit" (with the number of changes), "Log" and "Shelf".

## Commit {#commit}

### Checking what to commit {#check}

- Every file has a checkbox: "Check: include in the next commit", "Uncheck: leave out of the next commit". The checkbox on a group's title checks or unchecks the whole group; when only some files are checked, it shows a dash.
- To commit only part of a file, click the arrow before its name ("Show hunks (commit part of the file)") and check the hunks you want ("Check this hunk: include it in the next commit"). New, deleted and binary files have no hunks and are checked as a whole.
- Click a file's name to see its changes: on the right side of the page on the Agents page, in the editor area in the IDE.
- Right-click a file for the IDE's own file actions (such as discarding changes), plus "Shelve…" and "Show History" (the Log, showing only that file's commits).

### Groups {#changelists}

- **Agent · *conversation title*:** files changed by AI conversations, one group per conversation. A file changed by several conversations is in the group of the most recent one. So you can commit just what one conversation did.
- **Changes:** the other changed files.
- **Unversioned Files:** new files Git does not track yet, folded at first.

### Message and commit {#message}

- Write the message in "Commit message" and click "Commit" (`Ctrl+Enter`, on macOS `Cmd+Enter`). "Commit and Push…" opens [Push](#push) after the commit.
- The two buttons beside the box: "Commit message history" (pick a message you used before) and "Write the commit message with AI (from the checked changes)".
- "Amend": when checked, the checked changes go into the last commit instead of a new one, and its message comes into the box.
- "Shelve Changes…": puts the checked files (all changes when nothing is checked) on the [shelf](#shelf).
- "AI review of the checked changes": opens a new conversation with the review request already in its message box, for you to read and send. The AI points out problems and does not change files.

### Merge conflicts {#conflicts}

When a merge, rebase, cherry-pick or revert runs into conflicts, the top of the "Commit" tab shows "Merge conflicts" with the number of files:

- "Resolve…" beside each file opens the merge editor. Files of another project are resolved in its window ("Resolve in its window…").
- "Let AI resolve the conflicts": opens a new conversation asking the AI to keep what both sides should keep and remove the conflict markers. It does not commit, and does not continue the merge or rebase by itself.
- When all are resolved, click "Continue". A rebase or cherry-pick can also "Skip" the current commit; "Abort" goes back to how things were before it started.

## Log {#log}

- Commits with the branch graph; scrolling down loads older ones.
- Filters at the top: "Text or hash", "Author", "Path", and which branch's history to show ("Which branch's history"): "All branches", "Current branch" or one branch.
- Click a commit to see its details and changed files beside the list; click a file to see what that commit changed in it. "Compare with Local" lists instead the files that differ between that commit and your working tree.

Right-click a commit:

| Item | What it does |
| --- | --- |
| "Copy Revision Number" | Copies the commit's hash. |
| "Checkout Revision" | Checks out that commit (on no branch). |
| "New Branch…", "New Tag…" | Creates a branch or a tag starting at that commit. |
| "Cherry-Pick" | Applies that commit's changes to the current branch. |
| "Revert Commit" | Adds a commit that undoes that commit's changes. |
| "Reset Current Branch to Here" | "Soft: keep the changes, checked", "Mixed: keep the changes, unchecked", "Hard: discard the changes" (asks again). |
| "Undo Commit" | Only on the newest commit of the current branch: removes it, its changes come back checked and its message comes back into the box. |
| "Edit Commit Message…", "Drop Commit…" | Changes that commit's message, or removes it, with an [interactive rebase](#rebase). |
| "Interactively Rebase from Here…" | See [Interactive rebase](#rebase). |

When you pick "Compare with" the current branch in the [branches popup](#branches), the Log shows only the commits that branch has and the current one lacks ("In "*branch*", not in "*current branch*""); "Show the branch again" brings the usual Log back.

### Interactive rebase {#rebase}

- "Interactively Rebase from Here…" in the Log lists every commit from that one to the newest.
- Choose what to do with each: "Pick", "Reword", "Squash", "Fixup" or "Drop", and change the order with "Move up" and "Move down". For reword and squash you can write the "New message" or the "Message of the squashed commit" right there.
- Click "Start Rebasing". Changes you have not committed are put aside first and brought back afterwards. If conflicts come up, handle them as in [Merge conflicts](#conflicts).

## Shelf {#shelf}

- Lists the shelved changes and their files.
- "Unshelve": brings the changes back into the working tree and removes them from the shelf.
- "Apply, Keep on Shelf": brings them back and keeps a copy on the shelf.
- "Delete": throws them away (asks again; deleted changes are lost).

## Pushing {#push}

- "Push…" first lists the commits that will be pushed. When the current branch has no remote branch yet, it is marked "new branch".
- When the remote has commits that are not here, it warns that the push may be refused; you can click "Update Project" first.
- Options: "Push tags", and "Force push (with lease)", which forces the push only while the remote is still where you last saw it, so it never overwrites commits someone else just pushed.
- When there is nothing to push, it says "Nothing to push: the branch is up to date with its remote."

## Branches popup {#branches}

Click the branch name at the top, run `Git: Branches…`, or choose "Branches…" in "Git operations":

- The common actions come first: "Update Project", "Commit…", "Push…", "New Branch…", "Checkout Tag or Revision…".
- Then "Recent", "Local" and "Remote". The star beside a local branch is "Add to favorites"; favorites come first among the local branches.
- A branch shows how far it is from its remote (↑ commits not pushed yet, ↓ commits not pulled yet); "upstream gone" when its remote branch was deleted.

Pick a branch to see what you can do with it:

- "Checkout": a remote branch is checked out as a local branch of the same name.
- "New Branch from "*branch*"…", "Checkout and Rebase onto "*current branch*"", "Compare with "*current branch*"", "Show Diff of "*branch*" with the Working Tree".
- "Rebase "*current branch*" onto "*branch*"", "Merge "*branch*" into "*current branch*"".
- "Rename…" and "Delete"; for a remote branch, "Delete from the Remote". Deleting a branch that is not fully merged asks once more.

When a checkout would overwrite your local changes, Breezell offers "Smart Checkout": shelve the changes, check out, and bring them back.

## Update Project {#update}

"Update Project" fetches, then brings the current branch up to date with its upstream; changes you have not committed are put aside meanwhile and brought back. It ends with "Updated: N commits came in." or "Already up to date."

It merges by default. To rebase instead, search Settings for `breezell.git` and set Update Method to rebase.

## Keys in the IDE {#keys}

For IntelliJ IDEA's Git keys, search Settings for `breezell.git` and check Idea Keymap (off by default):

| Key | Action |
| --- | --- |
| `Ctrl+K` | Commit |
| `Ctrl+Shift+K` | Push |
| `Ctrl+T` | Update Project |
| `Alt+9` | Log |
| `Alt+0` | Commit |

On macOS, `Cmd` takes the place of `Ctrl`; Log and Commit are `Cmd+9` and `Cmd+0`, and "Git operations" is `Ctrl+V`. With these keys on, they take the place of the IDE's own `Ctrl+K` chords and `Ctrl+T`. `` Alt+` `` needs no setting and always works.

## Current limits {#limits}

- Very large files and binary files do not show their changes; files that are too large cannot be split into hunks and are checked as a whole.
- When very many files have changed, only part of them is listed and the rest are counted; the full list is in the IDE's Source Control.
- An interactive rebase is not possible when merge commits are in its range; the first commit cannot be squashed or fixed up into an earlier one, and cannot be undone.
- Another project's Git goes through that project's window. When that window has closed, the page says "The window of "*project name*" has closed."; click "Try Again" to reach it again.
- Source control other than Git has a simple view: "Commit message", "Commit" and the list of changes.
