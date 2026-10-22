---
title: Feature Options Overview
description: Every switch on Breezell's Feature Options page — dedicated models, follow-up suggestions, tool permissions, editor behavior, notifications, plan mode, web search and file access — with its default and what it does.
---

# Feature Options Overview

**Feature Options** is the page in Box where you decide which model each side feature runs on and how far the agent may act on its own. It has five groups: <BzWenben jian="featureOptions.group.models" />, <BzWenben jian="featureOptions.group.execution" />, <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" /> and <BzWenben jian="featureOptions.group.system" />.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page. Every switch and menu starts at Breezell's default value, and you can click them to see how a row changes.
:::

## Open Feature Options

1. Open Box (the **Box** side of the switch in the title bar, or **Breezell: Open Settings** from the Command Palette).
2. In the <BzWenben jian="box.title" /> group on the left, click <BzWenben jian="tab.featureOptions" />.

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

Every change is saved the moment you make it, and applies to all workspaces. To jump straight to one option, type part of its name into the search box at the top of the Box sidebar: Breezell scrolls to the row and highlights it.

Autocomplete is not on this page. Its switch, model and protocol have their own page: <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />.

## Models

<BzWenben jian="featureOptions.dedicatedModels.desc" /> Every model row in this group works the same way:

- Switch **off** (default): the row shows <BzWenben jian="models.analysisModel.followChat" />, and the feature uses the model selected under the chat input.
- Switch **on**: the row shows <BzWenben jian="models.analysisModel.custom" />, and a model picker appears under it. The feature always uses the model you pick there, whatever the chat uses.

If the dedicated model is later removed or turned off in <BzWenben jian="tab.models" />, the feature quietly goes back to the Chat model.

### Dedicated models

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| Row | Used for |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | The subagents the agent starts to explore and analyze code for it |
| <BzWenben jian="models.teamDesignModel.title" /> | Team members doing UI, visual and page polish in Teams mode |
| <BzWenben jian="models.teamBugfixModel.title" /> | Team members locating, reproducing and fixing bugs in Teams mode |
| <BzWenben jian="models.scmModel.title" /> | The commit message generated in Source Control |

A common setup: chat with `claude-opus-5`, and give the side jobs a smaller model. In the example above, <BzWenben jian="models.scmModel.title" /> is switched to <BzWenben jian="models.scmModel.custom" /> and runs on `claude-haiku-5-5`, which writes commit messages faster and for less. The style of those messages comes from the Commit page in [Prompt & Skill Settings](/prompt-settings#commit-message).

### Follow-up suggestions

<BzWenben jian="featureOptions.followUp.desc" /> This is off by default.

| Option | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | Off | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 2, 3 or 4 suggestion cards under each reply. |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> sends the suggestion right away; <BzWenben jian="featureOptions.followUp.clickInsert" /> lets you edit it first. <BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | A small, fast model such as `claude-haiku-5-5` is enough here. |

### Optimize prompt

<BzWenben jian="featureOptions.promptOptimize.desc" /> The card only has the model row: <BzWenben jian="models.promptOptimizeModel.title" />.

### Selection assist

When you highlight text in a chat reply, a small pill appears with Quote and Copy. Selection assist adds Translate and Search to it.

| Option | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | On | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> or <BzWenben jian="featureOptions.selectionAssist.pillAbove" /> the selection. <BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | On | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | On | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | On | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | The model that translates. |

## Execution

<BzWenben jian="featureOptions.toolPermissions.desc" /> When a switch is off, the agent stops before that kind of action and waits for you to approve or reject it in the chat. Tools that only read, such as reading files, searching the code or web search, never wait for approval.

<BzGongneng zu="execution" />

| Switch | Default | Covers |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | On | Editing, writing, renaming and deleting files and folders |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | Off | Terminal commands, and scripts the agent writes and runs |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | On | Running statements and creating connections or databases with Breezell's database tools |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | Off | Generating images |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | On | Tools from the MCP servers you added |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | Off | <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> in Teams mode |

::: warning Auto-approve terminal
With <BzWenben jian="featureOptions.toolPermissions.terminal" /> on, the agent runs any command it decides on, such as installs, builds or deleting files, without asking. Turn it on only in projects where that is safe, for example with a clean Git state you can return to.
:::

Even with <BzWenben jian="featureOptions.toolPermissions.edits" /> on, edits still appear as changes you can review, unless you also turn on <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> below.

## Editor

<BzGongneng zu="editor" />

### Code Behavior

| Switch | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | On | After each edit, the lint errors that the edit introduced are sent back to the AI with the result, so it fixes them in the same turn. |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | Off | AI edits are kept right away, with no accept / reject step in the editor. |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | Off | Opens each file in the editor when the AI edits it. |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | On | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | Off | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | On | When you select code in the editor, small buttons appear next to it for adding the code to the chat or editing it. |

### Notifications

| Option | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | On | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | Off | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | Off | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | Off | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | Off | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

Choosing a sound plays it once, and so does turning on one of the sound switches. The sounds stay silent until you turn on at least one of the background or current-chat switches.

## Intelligence

<BzGongneng zu="intelligence" />

### Context Management

| Option | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | Off | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Lets the model use its provider's built-in web search. See below. |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> decides when the provider's own search is added to a request. Breezell normally searches with its own web tools, which need you to be signed in.

| Choice | What happens |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Breezell's search tools are used. Only when they cannot run (for example when you are not signed in) does the model search with its provider instead. |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | The provider's search is added to every request, next to Breezell's tools. |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | The provider's search is never used. |

Built-in search exists only on some providers: Anthropic (Claude), OpenAI, Gemini with an API key, xAI, Perplexity, OpenRouter, Qwen and Zhipu. For other models this option has no effect.

### Modes & skills

| Switch | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | On | <BzWenben jian="featureOptions.superpowers.desc" /> These are the built-in skills listed in [Prompt & Skill Settings](/prompt-settings#use-skills-in-a-chat). |
| <BzWenben jian="featureOptions.entanglement.enable" /> | On | <BzWenben jian="featureOptions.entanglement.enableDesc" /> See [Entanglement Mode](/entanglement-mode-overview). |

## System

<BzGongneng zu="system" />

### External File Access

| Switch | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | On | Tools may read files outside the open workspace, for example a library's source or a config file in your home folder. |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | On | Tools may change files outside the open workspace. Turn this off if the agent should only ever touch the project. |

### Terminal network speed

| Switch | Default | What it does |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | On | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | Off | Windows only. <BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## Summary

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />; changes save immediately.
- <BzWenben jian="featureOptions.group.models" />: side features follow the Chat model until you give them a dedicated one.
- <BzWenben jian="featureOptions.group.execution" />: what the agent may do without asking. Terminal commands ask by default.
- <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />: lint fixes, notifications, plan cards, web search, Superpowers skills and file access outside the workspace.
