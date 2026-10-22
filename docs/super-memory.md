---
title: Super Memory
description: How Breezell's Super Memory distills conversations into memories, skills, experiences, trajectories and resources, recalls them into later requests, and how to curate them in Box.
---

# Super Memory

**Super Memory** is Breezell's own long-term memory. While you work, it distills what is worth keeping from your conversations — decisions, preferences, working methods, lessons from fixing problems, the files that were changed — and recalls the relevant parts into later requests, also in new conversations.

- Extraction runs on two built-in Breezell models. It does not use your configured model and does not spend its tokens. Memories that are recalled into a request do become part of that request's context.
- Super Memory needs a Breezell account with a plan that includes it.
- Everything it stores can be browsed, corrected and deleted in Box ▸ <BzWenben jian="box.memory.group" />.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page; the memories in them are examples. In the memory library you can open rows, change priorities and pin residents.
:::

## How it works {#how-it-works}

Open Box and expand <BzWenben jian="box.memory.group" /> in the Console group on the left. It has four pages: <BzWenben jian="box.memory.overview" />, <BzWenben jian="box.memory.library" />, <BzWenben jian="box.memory.context" /> and <BzWenben jian="box.memory.maintenance" />.

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" /> starts with a diagram of the loop, with live numbers:

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**: every turn you and the model exchange.
2. **<BzWenben jian="box.memory.flow.extract" />**: <BzWenben jian="box.memory.flow.extractSub1" />; <BzWenben jian="box.memory.flow.extractSub2" />.
3. **<BzWenben jian="box.memory.flow.store" />**: where the entries live, active or dormant.
4. **<BzWenben jian="box.memory.flow.project" />**: knowledge compiled from your codebase, such as entry points, commands and dependencies.
5. Back into the conversation: resident entries are injected into every request, and relevant ones are recalled when a request needs them.

Below the diagram, the cards show how many entries there are, how many are resident, how much the compact index saves compared with loading every entry in full, and what was injected last. Further down: the mix of kinds, the priorities, how fresh the entries are, the health of the compiled project knowledge, the most used entries and those about to expire.

## Five kinds of memory {#kinds}

Super Memory files each entry under the kind that fits how it will be used later:

| Kind | Holds | Example |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | Lasting facts, preferences, standing instructions and decisions | "Answer in Traditional Chinese; keep code in English" |
| <BzWenben jian="superMemory.catSkill" /> | A reusable method for solving a kind of problem again | How to restore corrupted localStorage data safely |
| <BzWenben jian="superMemory.catExperience" /> | A lesson: the root-cause reasoning and how to verify it | "When several features fail together, fix the shared state first" |
| <BzWenben jian="superMemory.catTrajectory" /> | How a task actually went: goal, tool calls, errors and recovery | The 14 steps of a repair |
| <BzWenben jian="superMemory.catResource" /> | The concrete files and places that were changed | <BzWenben jian="superMemory.editAction.edit" /> test.html |

Not every conversation produces every kind. A bug fix usually yields a skill, an experience, a trajectory and resources, but no general memory, because nothing in it is a lasting personal preference. That keeps recall precise: a later task can pull in the method, the lesson, the history or the file record on its own.

## Priorities and lifecycle {#priorities}

| Priority | Lifetime |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | Never expires. Resident entries are always P0. |
| <BzWenben jian="superMemory.p190Days" /> | Expires after 30 days unless it is confirmed again. |
| <BzWenben jian="superMemory.p230Days" /> | Expires after 7 days unless it is confirmed again. Short-lived details such as file edits start here. |

An expired entry is not deleted: it becomes **<BzWenben jian="superMemory.dormant" />**. Dormant entries stay searchable and can be restored. When a P1 entry proves itself, Breezell suggests making it permanent with a **↑P0** button on its row.

## The memory library {#library}

<BzWenben jian="box.memory.library" />: <BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **Filters**: search, then narrow by priority (P0 / P1 / P2), by kind, and by <BzWenben jian="superMemory.active" /> or <BzWenben jian="superMemory.dormant" />.
- **Count bar**: how many entries are loaded, the resident quota and the active budget per kind. <BzWenben jian="superMemory.batchSelect" /> lets you tick several entries and delete them together.
- **Rows**: the colored dot is the kind. After the title come the priority chip, **<BzWenben jian="superMemory.residentBadge" />** for residents and **NEW** for entries from the last 24 hours. The second line shows when it was last updated, the kind, the number of tags and where it came from.
- **Open a row** to see its tags, the <BzWenben jian="superMemory.l1Overview" />, <BzWenben jian="superMemory.whyRemembered" />, how often it was confirmed and used, and when it expires. <BzWenben jian="box.memory.showFull" /> adds the <BzWenben jian="superMemory.l2Full" />.
- **Priority chip** (1): click it to choose <BzWenben jian="superMemory.p0Permanent" />, <BzWenben jian="superMemory.p190Days" /> or <BzWenben jian="superMemory.p230Days" />.
- The pin sets an entry resident; the bin deletes it.

Breezell sends the AI a short line per entry (L0) and loads the overview or the full content only when it is needed. That is where the <BzWenben jian="superMemory.tokenSavings" /> on the overview page comes from.

## Resident memories {#resident}

A resident entry is injected into **every** request, whether or not the request is about it. Use it for things the AI must always keep in mind, such as an architecture rule, a mandatory workflow or a firm preference.

1. Open <BzWenben jian="box.memory.library" /> and find the entry.
2. Click the pin on its row (<BzWenben jian="superMemory.residentOn" />).

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- The entry becomes P0, gets the <BzWenben jian="superMemory.residentBadge" /> badge, and the count bar shows the new total, for example <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />.
- Up to 12 entries can be resident. At the limit, Breezell shows <BzWenben jian="superMemory.residentLimitReached" />
- To lower a resident entry's priority, click the pin again first (<BzWenben jian="superMemory.residentOff" />); the entry returns to the priority it had before.

Keep residents short and truly universal. Temporary file locations or one-off task details do not belong here: they would be added to every request.

## Memories in the chat {#in-chat}

When Super Memory injects entries into a request, a line appears under your message. Click it to see which entries were used:

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="Answer in Traditional Chinese; keep code and identifiers in English" gaoliang="zhuru" biaoji="1" wen="Hello" da="Hello! What would you like to work on today?" />

In this example a brand-new conversation contains only "Hello", yet one entry was injected: the resident memory. Relevant entries are added when a request needs them:

<BzLiaotian zhuru="3|1|2" zhuruwen="Answer in Traditional Chinese; keep code and identifiers in English|Restore corrupted localStorage state with guarded JSON parsing|When tasks, filters and counters break together, fix the shared state first" zhurukai wen="The reading list in test2.html loses its books after a reload. Fix it." da="This is the same failure as in the task manager: the list is saved with String() instead of JSON.stringify. I'll guard the parsing, drop the corrupted value, and give every book a stable id." />

The line only appears when something was injected. If retrieval could not finish, the turn continues with what is available and the line says so.

## Context injection {#context}

<BzWenben jian="box.memory.context" />: <BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| Card | What it shows |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | For the selected turn: the status, how many resident and relevant entries were injected, their kinds and scopes, and each entry with its detail level (L0 / L1 / L2) and score. |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | The compact index the next request will receive, grouped by kind, with an estimated token count. |
| <BzWenben jian="superMemory.convTurns" /> | The turns of the current conversation. Click one to inspect its injection and jump to it in the chat. |

## Budget & maintenance {#maintenance}

<BzWenben jian="box.memory.maintenance" />: <BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />: <BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />: <BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />: <BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />: move your whole memory bank to another computer as a `.zip`. <BzWenben jian="box.memory.archiveImportDesc" />

## Example: one repair, reused in another app {#example}

This is how the entries in the screens above came about.

1. **The repair.** In `test.html`, a small task manager could not add, delete, complete, filter or save tasks reliably. Breezell traced the failures to one shared state model, fixed it and checked the whole workflow in the browser. Super Memory first recorded the edited parts of `test.html` as **P2 resources** and the course of the repair as a **P2 trajectory**.
2. **The lessons.** Asked "What did you learn from this?", the AI named the reusable lessons: repair the owner of shared state instead of each symptom, address items by a stable id, treat saved data as a boundary that must be validated. Super Memory stored a **P1 skill** (guarded saving and loading of localStorage data) and a **P1 experience** (diagnose shared state first, then verify end to end). In longer or more valuable fixes it records such lessons without being asked.
3. **The reuse.** The first conversation was deleted. In a new conversation, a different app — a reading list in `test2.html` — had the same family of bugs. Breezell recalled the skill and the resource records, applied the method to the new `books` data instead of copying the old patch, and verified the result.

Deleting a conversation does not delete what Super Memory extracted from it, and a method learned in one app carried over to another.

## When the daily allowance is used up {#quota}

Super Memory has a daily allowance. When it is used up, every Super Memory page shows <BzWenben jian="box.memory.quotaPausedTitle" />. Until it renews, chats stop creating new entries on their own; existing entries can still be viewed and deleted, and the rules and memories you write yourself in [Rules, Memories & Skills](/prompt-settings) are not affected.

Without a plan that includes Super Memory, the pages show:

<BzJiyi ye="suoding" />

## Summary

- Super Memory distills conversations into memories, skills, experiences, trajectories and resources, without using your model's tokens.
- Relevant entries are recalled into later requests; residents (up to 12, always P0) go into every request.
- P1 lasts 30 days and P2 seven days unless confirmed again; expired entries become dormant and can be restored.
- Box ▸ <BzWenben jian="box.memory.group" /> has the overview, the library, the context injection view and maintenance.
