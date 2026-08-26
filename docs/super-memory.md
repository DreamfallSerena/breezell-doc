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

## Active and dormant memories

Active memories remain available for relevant recall. Dormant memories are retained but separated from the active set, helping keep current context focused while preserving information that may still be useful later.
