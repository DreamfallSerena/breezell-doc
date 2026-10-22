---
title: Entanglement Mode
description: How Breezell's Entanglement mode investigates hard problems with tracked hypotheses and evidence, how to read its causal panel, and its strict verification and human-in-the-loop options.
---

# Entanglement Mode

**Entanglement** is a <BzWenben jian="chatMode.breezellOriginalMode" />: <BzWenben jian="chatMode.entanglementDetail" />. It has everything Agent can do — read, edit, run commands — and adds explicit, structured causal reasoning. The AI forms hypotheses, uses each tool call to confirm or rule one out, and only changes code once the cause is supported by evidence.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. The labels of the causal panel are English in Breezell as well; the investigation shown in it is an example. Click the arrow in the panel to open or close its details.
:::

## When to use it {#when}

Use Entanglement when the cause is not obvious and a direct answer would be a guess:

- a bug or regression whose cause is unknown;
- a problem that crosses several files, modules or systems;
- a decision between several possible explanations or designs;
- performance, security or architecture work where the result must be verified.

For clear, limited edits, Agent is faster and uses fewer tokens. Entanglement also uses more tokens than Agent for the same request.

## Start an investigation {#start}

1. Choose **Entanglement** in the mode menu under the input box. If it shows a lock, see [Locked modes](/mode-selection#locked).
2. Describe the symptom, what you expected, and any limits (files not to touch, tests that must pass).
3. Send. The causal panel appears above the conversation and follows the investigation.

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="Counter stale" yinguowen="The counter reads a different array than the one deleteTask() changes.|Root cause: deleteTask() filters a copy of the tasks array|Predict: after the fix, the Active filter count also drops by one" wen="After I delete a task, the counter still shows the old number. Find out why and fix it." da="I'm checking whether deleteTask() changes the same array that renderCounters() reads." />

In the answer, a **Tracing Causal Pathways** line marks each update of the investigation; click it to read the reasoning behind it. When the investigation is complete, the line reads **Causal Trace Complete**.

## Read the causal panel {#panel}

The top row of the panel shows where the investigation stands:

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| Part | Meaning |
| --- | --- |
| **Locate → Verify → Fix** | The stages: find the cause, prove it, then change the code. A tick marks a finished stage, the pulsing dot the current one. If the evidence breaks the current explanation, the first stage turns amber and reads **Relocate**. |
| Status | **Investigating** while the cause is open; **Modified · unverified** after a change that is not yet checked; **Verified** after a successful check; **Resolved** when the work is done. |
| **Confidence** | Low, Medium or High, shown as a signal meter. It is based on the evidence collected so far. |

The line below rotates through the current state every few seconds: the current assessment, the hypothesis being tested, the latest finding. Hover it to pause it.

### Details {#details}

Click the arrow on the right to open the details:

<BzJiuchan jieduan="verify" zhankai />

| Section | Content |
| --- | --- |
| Completion contract | What the task is (**Target**) and when it counts as done (**Done**). |
| Root cause | The current explanation, with the **Mechanism** (how the cause leads to the symptom) and a **Counterfactual** (what would happen without it). |
| Hypotheses | Each hypothesis with its id and status — testing, confirmed or rejected. A testing hypothesis has a **Kill** criterion: the observation that would rule it out. Rejected ones keep the **Lesson** learned and are listed under **Resolved**. |
| Evidence | The latest findings by turn (t2, t3…), with their weight: double up arrow for a direct observation, up arrow for support, a wave for unverified reasoning, down arrows against. The badge names the tool that produced it. |
| Open prediction | What the AI expects to see if its explanation is right, waiting to be checked. |
| Fix | The change, and how it will be verified (**Verify**). |
| Causal graph | The chain from cause to symptom. |

When the fix is in and verified, the panel shows it:

<BzJiuchan jieduan="resolved" zhankai />

To hide the panel, turn off <BzWenben jian="featureOptions.entanglement.enable" /> in Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />. The investigation itself is not affected.

## Strict verification (experimental) {#strict}

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> has a stricter variant: **<BzWenben jian="experimental.entanglementStrict.title" />**.

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

With it on, the panel gets a **<BzWenben jian="causalGate.title" />** row: <BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" />, with the command used to reproduce the bug and the basis for the confidence.

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

When the same command that failed before the fix passes after it, the row reads <BzWenben jian="causalGate.proven" />. Under <BzWenben jian="experimental.entanglementStrict.model" /> you can run strict mode on a different model than the chat.

### Human-in-the-loop {#human-in-the-loop}

Once strict verification is on, you can also turn on **<BzWenben jian="experimental.humanLoop.title" />**: <BzWenben jian="experimental.humanLoop.desc" />

Until you confirm, the AI only reads. When your next message continues the confirmed task ("it still fails", "continue"), the work goes on without asking again; a new request is checked with you first.

## Tips {#tips}

- Give the symptom precisely: what you did, what you saw, what you expected. A command that reproduces the problem is the best start.
- Let the AI finish the Verify stage before asking for the fix; a confirmed cause leads to a smaller, safer change.
- Check the panel's conclusions and the verification before you rely on an important change. The panel supports your decision, it does not replace your review.
- For a new, unrelated problem, start a new conversation, so the old investigation does not mix with the new one.

See also: [Mode Selection](/mode-selection#entanglement) for how Entanglement compares with the other modes.
