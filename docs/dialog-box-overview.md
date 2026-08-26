---
title: Dialog Box Overview
description: Overview of the Breezell dialog box, including mentions, context usage, mode selection, model controls, and quick actions.
---

# Dialog Box Overview

The Breezell dialog box is the main place where you write prompts, choose a working mode, select a model, attach context, and control how the agent handles the current request.

This page explains the visible controls shown in the dialog box screenshots.

## Default Input State

The default input state is the normal starting point for a new message. It keeps the prompt field and essential controls visible.

![Default input state](/dialog-box/input-default.png)

Type your request, choose the mode and model if needed, then send the message to Breezell.

## Mode Selector Menu

The pointer highlights the mode selector menu. This menu lists the available working modes.

![Mode selector menu](/dialog-box/mode-selector.png)

Available modes include:

- [**Chat**](/mode-selection#chat) for quick questions and answers
- [**Plan**](/mode-selection#plan) for implementation planning before editing
- [**Analyze**](/mode-selection#analyze) for read-only investigation
- [**Entanglement**](/mode-selection#entanglement) for deeper causal reasoning
- [**Agent**](/mode-selection#agent) for autonomous file edits and tool usage
- [**Teams**](/mode-selection#teams) for parallel AI teammates on complex tasks

For more details, see [Mode Selection](/mode-selection). Choose the mode that matches the amount of autonomy and depth you need.

## Model Selector

The pointer highlights the model selector. The selector shows the current model and lets you switch to another available model before sending the message.

![Model selector](/dialog-box/input-compact-controls.png)

Use this when you want to choose a model with different speed, reasoning, or capability characteristics.

## File Upload

The pointer highlights the file upload control.

![File upload control](/dialog-box/input-model-controls.png)

Click this control to attach local files to the current message before sending it to Breezell. Uploaded files become part of the request context, so Breezell can inspect or reference them while answering.

## ~~Advanced Exploration~~

> **Deprecated after version 1.2.5.** The dedicated Advanced Exploration control is no longer available. When a request requires deeper research, Breezell automatically invokes the related capabilities for active learning, broader investigation, and more thorough exploration.

![Advanced Exploration control](/dialog-box/input-tools-expanded.png)

## Breezell Browser

The pointer highlights the **Breezell Browser** control.

![Breezell Browser control](/dialog-box/input-agent-basic.png)

Breezell Browser is Breezell's built-in browser tool. Use it to open webpages, view online content, search for information, and help AI retrieve and analyze web content without leaving the dialog box.

## Context Usage Breakdown

The pointer highlights the context usage indicator. Opening it shows a detailed breakdown of how the current context window is being used.

![Context usage breakdown](/dialog-box/context-usage-breakdown.png)

The breakdown separates usage into categories such as system prompt, tools, rules, memories, skills, MCP, subagents, and conversation content. Use it to understand which parts of the session are consuming the most tokens.

## Context Manual Compression

The pointer highlights the **Manual compress** control in the context panel. This action summarizes earlier conversation content so the session can keep useful information while reducing context usage.

![Context panel with manual compression](/dialog-box/context-manual-compress.png)

Manual compression is useful during long conversations, especially when the context window is becoming large but you still want to continue in the same session.

## Quick Phrases

The pointer highlights the **Quick Phrases** button in the input tray. Quick Phrases let you save frequently used prompts or instructions and reuse them in new messages without typing them again.

![Quick Phrases button in the input tray](/dialog-box/quick-phrases-button.png)

Open **Quick Phrases** to view and organize saved phrases. Use **Add** to create a phrase. The **All phrases** pane contains every saved phrase; drag a phrase to **Favorites** on the right to keep frequently used items close at hand. Drag it back to remove it from Favorites.

Select a saved phrase to insert it into the current input. You can still edit the text before sending the message.

![Quick Phrases manager](/dialog-box/quick-phrases-manager.png)

## MCP Servers

The pointer highlights the **MCP** button in the input tray. Open it to view configured MCP servers and control whether each server is available to Breezell.

![MCP server controls](/dialog-box/mcp-server-controls.png)

Each server row includes:

- **Invocation arrow:** inserts `/mcp:<server-name>` into the current input. Send the request with this reference to let the AI call the selected MCP server.
- **On/off switch:** enables or disables an existing MCP server. A disabled server is unavailable to the AI until it is enabled again.
- **Health indicator:** a green dot means the MCP server is connected and healthy. A red dot means it is unavailable or unhealthy; check its configuration or process before invoking it.

![MCP reference inserted into the input](/dialog-box/mcp-invocation-reference.png)

## Skills

The pointer highlights the **Skills** button in the input tray. Open it to manage the skills that Breezell can use.

![Built-in skills panel](/dialog-box/skills-built-in.png)

The panel separates skills into two tabs:

- **Built-in:** official skills included with Breezell. They are available without creating or configuring a personal skill.
- **My Skills:** skills that you configure or create yourself.

![My Skills panel](/dialog-box/skills-my-skills.png)

Skills in either tab can be controlled individually:

- **Invocation arrow:** inserts `@<skill-name>` into the current input. Send the request with this mention to let the AI invoke the selected skill.
- **On/off switch:** enables or disables the skill. A disabled skill is unavailable to the AI until it is enabled again.

![Skill mention inserted into the input](/dialog-box/skill-invocation-reference.png)

## Message Capacity

The pointer highlights the **Message Capacity** button in the input tray. Message Capacity analyzes the local storage used by saved conversations. It is a storage report, not the model context window or the application's live memory usage.

![Message Capacity button](/dialog-box/message-capacity-button.png)

The dashboard provides:

- **Scope and time range:** switch between the current workspace and all workspaces, and review the last 7, 30, or 90 days.
- **Current usage and trend:** view total storage use, its change over the selected period, and a chart of storage growth.
- **Storage breakdown:** compare message content, images and attachments, tool results, and checkpoints. The dashed line represents reclaimable space.
- **Summary metrics:** see the number of conversations and messages, the largest conversation, and the amount of reclaimable space.
- **Conversation inspection:** search, sort, filter, and select conversations. Each row shows its message count, storage size, and notable storage type; active or queued conversations are clearly identified.
- **Safe cleanup:** reclaim storage that the panel marks as eligible for cleanup. Review the current scope, filters, and selections before running it.

![Message Capacity dashboard](/dialog-box/message-capacity-dashboard.png)

## Mention Menu

The pointer highlights the quick context area used to open the mention menu. The mention menu lets you add files, folders, MCP tools, and skills to the current message.

![Mention menu in the Breezell dialog box](/dialog-box/mention-menu.png)

Use this when your request depends on specific workspace content or an external capability. Adding the right context helps Breezell understand what it should inspect or use before answering.

## Usage Tips

- Add file or folder context when the request depends on specific project content.
- Agent is the default mode and the recommended automatic workflow for most tasks.
- Change modes only when you need a specific workflow, such as planning first or analyzing without editing.
- Context compression runs automatically. Use manual compression only when you prefer strict manual control or have a special requirement.
- Review the selected model when accuracy, speed, or reasoning depth matters.