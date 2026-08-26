---
title: Super Memory
description: Learn how Breezell extracts, organizes, and manages reusable memories without consuming your configured model tokens.
---

# Super Memory

**Super Memory** is an independently developed Breezell memory system. It uses two built-in Breezell models to extract useful information from conversations. The exact model names are not disclosed.

Memory extraction is handled by Breezell's internal model pipeline and does not consume tokens from the model configured by the user or reduce the user's model token quota.

## What Super Memory can extract

Super Memory can organize extracted information into several types:

- **Memory:** Stable facts, preferences, standing instructions, and decisions that may be useful later.
- **Skill:** Reusable methods or workflows discovered during a task.
- **Experience:** Outcomes, lessons, and practical knowledge from previous work.
- **Trajectory:** The progression of a task, decision, or goal over time.
- **Resource:** Useful files, links, tools, or reference material associated with the work.

The system extracts and classifies these items automatically from conversations so they can be recalled as relevant context in later interactions.

## Browse and filter memories

![Super Memory panel](/super-memory/super-memory-panel.png)

The panel provides the following views and controls:

- **Memories, Context, and Insights:** Switch between extracted memory entries, assembled context, and higher-level memory insights.
- **Search:** Find stored entries using text.
- **Priority:** Filter by **P0**, **P1**, or **P2**, or show all priorities.
- **Type:** Filter by Memory, Skill, Experience, Trajectory, or Resource.
- **State:** Separate **Active** entries from **Dormant** entries.
- **Capacity counters:** Review the total item count and the current capacity used by resident entries, memories, skills, and experiences.
- **Select:** Enter selection mode to choose specific entries for management.

When no entries exist, the panel shows that memories will be extracted automatically from conversations. As conversations continue, useful items can appear here without requiring the user to write them manually.

## Key advantages

Super Memory combines automatic extraction with efficient and highly controllable retrieval:

- **Powerful extraction:** Two internal Breezell models analyze conversations and convert useful information into structured Memory, Skill, Experience, Trajectory, and Resource entries without requiring manual entry.
- **Efficient retrieval:** Type, priority, state, freshness, and the compiled memory index help narrow recall to information relevant to the current task instead of treating every stored item equally.
- **Controllable context injection:** The Context view exposes the current-turn injection snapshot, the next-turn memory index preview, and its estimated token size.
- **Explicit lifecycle control:** P0 permanent, P1 30-day, and P2 7-day priorities work with Active and Dormant states so important knowledge can remain available while temporary information naturally receives a shorter lifecycle.
- **Observable knowledge health:** Compilation status, source and compiler versions, stale resources, failures, verification, correction, freshness, and unsynced counts make the memory system inspectable.
- **Token awareness:** Extraction does not consume the user's configured model tokens. Recalled memory that is injected into a request becomes part of that request's context; the preview and savings statistics help make this usage visible.

## Context and retrieval control

![Super Memory Context view](/super-memory/super-memory-context.png)

The **Context** view shows how memory participates in conversations:

- **Current Turn Injection:** Displays the memory snapshot injected into the current conversation turn. Before a snapshot exists, the panel clearly shows an empty state.
- **Memory Index Preview:** Previews the index prepared for the next turn and estimates its token size, making retrieval volume easier to review.
- **Conversation Turns:** Shows the number of turns in the current thread and provides a place to inspect turn-level memory activity.

These controls make retrieval observable and manageable: users can see whether memory was injected, what is being prepared next, and the approximate context cost.

## Insights and system health

![Super Memory Insights view](/super-memory/super-memory-insights.png)

The **Insights** view summarizes the state and effectiveness of the memory system:

- **Project Knowledge Health:** Shows the last compilation, compiler and source versions, stale resources, failed compilations, and verified or corrected totals.
- **Token Savings:** Reports token savings when enough activity has been recorded.
- **Viking Filesystem:** Displays counts for Memories, Skills, Experiences, Trajectories, Resources, and Unsynced items.
- **Priority Distribution:** Shows the balance of P0 permanent, P1 30-day, and P2 7-day entries.
- **Freshness Pulse:** Groups knowledge updated within 24 hours, 7 days, 30 days, or an older period.

Together, Context and Insights provide a transparent view of what Super Memory extracts, what it may retrieve, and how healthy and current the stored knowledge remains.

## Active and dormant memories

Active memories remain available for relevant recall. Dormant memories are retained but separated from the active set, helping keep current context focused while preserving information that may still be useful later.

## Demonstration: turning a repair into reusable memory

This example uses an intentionally broken HTML Task Manager to demonstrate how Super Memory changes a short repair session into reusable knowledge.

The repair request asks the AI to inspect the entire codebase and fix task creation, deletion, completion, filtering, counters, localStorage persistence, keyboard input, and clearing completed tasks without changing the intended interface or behavior.

### 1. Inspect and repair the Task Manager

Breezell inspects the code, identifies the shared root causes, repairs the implementation, and verifies the complete workflow rather than treating each visible symptom as an independent bug.

![Breezell repairing the Task Manager](/super-memory/task-manager-repair.png)

The repair covers serialization and parsing, duplicate loading, malformed saved data, empty-task validation, stable task identities, keyboard handling, completion toggling, targeted deletion, filters, counters, and clearing completed tasks.

### 2. Initial P2 resource records

Because this is a small test and the first result mainly describes concrete file edits, Super Memory initially records two edited sections of **test.html** as **P2 Resource** entries.

![P2 resource records created from the repair](/super-memory/p2-resource-records.png)

These entries preserve what changed and where it changed. P2 gives this short-lived implementation detail a lower priority without discarding the repair trace, making it available if the AI later needs to recall which file regions were modified.

### 3. Prompt deeper reflection

For this compact demonstration, the user asks:

> What lessons did you learn from solving this issue?

![AI summarizing lessons from the repair](/super-memory/repair-lessons.png)

The answer identifies reusable engineering lessons: repair the owner of shared state rather than every symptom, address collection items by stable identity, recompute derived state on every render path, treat persistence as a validated data boundary, review Boolean predicates carefully, terminate invalid input paths, avoid timestamp-only identities, and verify features through a realistic end-to-end workflow.

### 4. Extract structured repair knowledge

After the repair is examined at a deeper level, Super Memory adds higher-value structured entries:

- A **P1 Experience** about repairing shared task state and stable identity.
- A **P1 Skill** for repairing corrupted localStorage persistence with guarded serialization and parsing.
- A **P2 Trajectory** that summarizes the multi-bug Task Manager problem and its resolution path.
- The original **P2 Resource** records that preserve the edited file locations.

![Structured repair memories after reflection](/super-memory/structured-repair-memories.png)

### What this demonstrates

- **Extraction depth adapts to value:** Small edits may begin as P2 resources, while reusable root-cause knowledge can be promoted into P1 skills and experiences.
- **Different memory types have different jobs:** Resource and Trajectory preserve what happened; Skill and Experience preserve how and why the problem was solved.
- **Priority remains controllable:** P1 retains the more reusable repair knowledge longer, while P2 keeps short-term implementation details available without giving them permanent weight.
- **Memory becomes useful to future AI work:** Later tasks can retrieve the relevant file history, repair method, or engineering lesson instead of relying only on the original conversation transcript.
- **Manual reflection is not normally required:** The follow-up question is used here to make a very small test produce an obvious result. For longer-running or high-value bugs, Super Memory can automatically identify and record durable repair experience without requiring the user to ask this question.

