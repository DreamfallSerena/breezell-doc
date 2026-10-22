---
title: Mode Selection
description: What each Breezell mode — Chat, Plan, Analyze, Entanglement, Agent, Teams and DarkSelene — may read, change and run, how Plan cards and mode switches work, and which mode to pick.
---

# Mode Selection

The mode decides how the AI works on your next message: what it may read, what it may change and what it may run. Pick it in the mode capsule at the bottom left of the input box. **Agent** is the default and the right choice for most work.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page. Hover the modes in the menu to read their descriptions; the cards' menus and switches can be clicked.
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

The menu shows the mode names in English in every language. The mode you pick applies from your next message; when you send in a different mode, a <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> line marks the change in the conversation. See [Choose a mode](/dialog-box-overview#mode) for the menu itself.

## What each mode can do {#compare}

| Mode | Reads the project | Changes files | Runs commands | MCP tools |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | Only its own plan | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓ (step two, reviewed) | ✓ (step two) | step two |

The AI can use your skills in every mode. Whether file edits and commands need your approval is set under Tool Permissions in [Feature Options](/feature-options-overview).

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" />.

Use Chat for questions, explanations, comparing ideas or drafting text. The AI answers from the conversation and the context you attach; it does not open project files on its own or run anything. It can still save a memory when you ask it to remember something.

<BzLiaotian moshi="normal" wen="What is the difference between a debounce and a throttle?" da="Both limit how often a function runs. A debounce waits until the calls stop for a moment and then runs once; a throttle runs at most once per interval while the calls continue. Use a debounce for search-as-you-type, a throttle for scroll or resize handlers." />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />. <BzWenben jian="chatMode.planExplain" />.

1. The AI reads the code it needs, but does not change any of it.
2. It writes the plan as a card in the chat: a title, a short overview and a list of to-dos. The plan is a `.plan.md` file that Breezell keeps outside your project.
3. Click <BzWenben jian="planCard.actions.viewPlan" /> to read and edit the plan. Ask for changes in the chat and the AI revises the same plan.
4. Click <BzWenben jian="planCard.actions.execute" /> (`Ctrl+Enter`) to carry it out. The card then shows <BzWenben jian="planCard.actions.executed" />, and the to-dos are ticked off as the work progresses.

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="Add a dark mode toggle to the settings page." da="Here is a plan. It keeps the current theme logic and adds one setting." jihuabiaoti="Dark mode toggle for the settings page" jihuazhaiyao="Add a Dark mode switch to SettingsPage.vue, store the choice, apply it with a theme class on the root element, and follow the system setting until the user picks a mode." />

<BzWenben jian="planCard.actions.skip" /> dismisses the plan. The <BzWenben jian="planCard.actions.auto" /> switch on the card is the same setting as <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> in Feature Options: when it is on, new plans run without a click.

### When Agent suggests Plan {#plan-switch}

In Agent mode, the AI may decide that a task needs a plan first. It then stops and shows a card with its reason:

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="Rewrite the storage layer so it can sync to the server." da="This touches the storage format, every caller and the offline cache." qiehuanka="The change spans several modules and the data format; agreeing on a plan first avoids a risky rewrite." />

- <BzWenben jian="planSwitch.switch" /> (`Ctrl+Enter`) moves the conversation to Plan mode; <BzWenben jian="planSwitch.skip" /> lets the AI continue in Agent mode.
- The menu at the bottom left sets what happens next time: <BzWenben jian="planSwitch.alwaysAsk" />, <BzWenben jian="planSwitch.never" /> or <BzWenben jian="planSwitch.alwaysRun" />. It is the same setting as <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> in Feature Options.
- With <BzWenben jian="planSwitch.alwaysAsk" />, the bar under the card runs twice for 30 seconds. If you do not answer, the switch is skipped and the AI continues.

In Plan mode, the AI can offer the reverse switch with the same kind of card, back to the mode you came from.

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />. <BzWenben jian="chatMode.analyzeExplain" />.

Use Analyze to find the cause of a bug, review a design or understand unfamiliar code before you decide what to change. The AI searches and reads until it can answer, then stops; it can use MCP tools for information. If something needs fixing, it describes the fix in its answer instead of applying it.

<BzLiaotian moshi="analyze" wen="Why does the task counter show the wrong number after deleting a task?" da="deleteTask() removes the item from a copy of the array, but renderCounters() reads the original tasks array, so the count never drops. Fix: let deleteTask() update the shared tasks array and call renderCounters() afterwards." />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />. <BzWenben jian="chatMode.agentExplain" />.

Agent is the default. It gathers the context it needs, edits files, runs commands and checks the result before it reports back. It can suggest a [switch to Plan](#plan-switch) when a task is large, and it can use MCP tools, the browser and your skills.

On Windows and macOS, when desktop control is enabled, Agent and Entanglement are the only modes that may operate apps on your computer.

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.entanglementDetail" />: <BzWenben jian="chatMode.entanglementExplain" />

Entanglement has all of Agent's abilities and adds explicit, structured causal reasoning. The AI keeps track of its hypotheses, uses each tool call to confirm or rule one out, and can stop to confirm a step with you before it continues. A panel above the chat shows this state as it develops (<BzWenben jian="featureOptions.entanglement.enable" /> in Feature Options).

Use it for hard bugs, architecture decisions, refactors, performance or security work. It uses more tokens than Agent. How it works in detail: [Entanglement Mode](/entanglement-mode-overview).

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />. <BzWenben jian="chatMode.agentTeamsExplain" />.

- The lead decides whether a team is worth it. Simple requests are answered directly.
- For large work, the lead splits the task and starts teammates that work in parallel, then collects and checks their results.
- Before a team starts, Breezell asks you to approve it, unless <BzWenben jian="featureOptions.toolPermissions.teams" /> is on in Feature Options. Teammates for design and for bug fixing can run on their own models (<BzWenben jian="models.teamDesignModel.title" />, <BzWenben jian="models.teamBugfixModel.title" />).
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />. Parallel teammates can also get in each other's way when they work on the same files, so give them clearly separate parts.

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.darkSeleneDetail" />.

DarkSelene works in two steps:

1. **Take the question apart.** Read-only, like Analyze: the AI studies the request and the code and writes a brief of what must be done and what to expect.
2. **Carry it out under review.** The brief goes to Agent. While it works, independent model calls review its reads outside the expected files and every edit, and their findings come back to it as evidence. Risky edits are checked by three reviewers in parallel.

During step two the AI does not switch modes, write plan cards or stop to ask questions. <BzWenben jian="chatMode.darkSeleneTokenWarning" />

## Locked modes {#locked}

Entanglement and Teams are available once five friends have helped you unlock them, or with any plan. Until then they show a lock in the menu, and hovering them shows your progress, for example <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />. <BzWenben jian="chatMode.entanglementUnlockHint" /> See [Invite New Users](/invite-new-users).

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Choosing a mode {#choosing}

| You want to… | Mode |
| --- | --- |
| Ask a question or think something through | Chat |
| Agree on the approach before anything changes | Plan |
| Understand code or find a cause, without changes | Analyze |
| Get a task done: edit, run, verify | Agent |
| Solve a hard problem step by step, with evidence | Entanglement |
| Move several independent parts of a large job forward at once | Teams |
| Have the request taken apart first and every change reviewed | DarkSelene |

When in doubt, stay in Agent: it switches to Plan by itself when a task needs it.
