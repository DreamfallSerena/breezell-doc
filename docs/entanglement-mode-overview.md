---
title: Entanglement Mode Overview
description: A technical overview of Breezell's Entanglement mode, including causal state tracking, validation constraints, visualization, and converged memory.
---

# Entanglement Mode Overview

> Entanglement is a causal-reasoning enhancement mode for complex problems.

## Summary

Breezell's Entanglement mode is neither a quantum algorithm nor a collaboration mode that automatically launches multiple models.
Its actual implementation combines Agent capabilities, a causal state machine, prediction/intervention/verification constraints, a visualization panel, and converged memory.
It does not suddenly make the underlying model smarter. Instead, it continuously preserves and reinjects the hypotheses, evidence, experiments, and conclusions involved in complex tasks.

## 1. Core Conclusions

Entanglement is not a complete replacement for Agent. It is a stateful enhancement for complex problems.

- **Tool capabilities:** Entanglement inherits Agent's file, terminal, search, MCP, and code-index capabilities.
- **Reasoning organization:** Entanglement additionally maintains stages, root causes, hypotheses, evidence, predictions, verification, and confidence.
- **Execution efficiency:** Standard Agent is usually faster for well-defined tasks; Entanglement adds context and token overhead.
- **Best fit:** Entanglement is better suited to unknown bugs, cross-module failures, and problems that require experimental validation.
- **Capability boundary:** There is no separate Entanglement model, quantum-computing module, or default path for parallel execution across multiple models.

## 2. How It Works

### 1. Mode Selection

The frontend mode list includes `normal`, `plan`, `analyze`, `entanglement`, `agent`, and `agent_teams`.
After Entanglement is selected, subsequent conversation turns enable causal-state tracking.

### 2. Inheriting Agent Capabilities

Backend mode resolution maps `entanglement` to the Agent type, so it can continue to call file tools, the terminal, search, MCP, and the code index.
This is also what distinguishes it from analysis-only modes: Entanglement can still modify the project and run verification.

### 3. Injecting the Current Causal State

Each request carries the current thread's causal state and uses Agent-level active-file, workspace, and tool context.

### 4. The Same Model and Tool Loop

Entanglement and Agent use the same model and tool-execution capabilities.
It is therefore not the same as Agent Teams, and it does not create multiple independent AIs by default. Additional subtasks or tool calls can appear only when the model actively uses the relevant tools.

### 5. Parsing the Model Response

After the model responds, the system parses the stage, root cause, hypotheses, evidence, predictions, and verification results, then saves them to the current thread.
The next turn continues to use this state; the interface displays the structured state block as “Causal Trace Complete”.

### 6. Visualization and Real-Time Parsing

The Entanglement panel component `G1` displays the current stage, confidence, root cause, hypotheses, evidence, causal graph, fix, verification, and system corrections.
During streaming model output, the frontend reparses the state based on text growth or time intervals. During non-LLM output phases, it clears temporary parse results.

### 7. Memory After Convergence

When the state reaches a high-confidence `CONVERGE` stage and a clear root cause exists, the system organizes the problem into a Memory Bank node with the `causal-case` tag.
The memory includes symptoms, root cause, mechanism, decisive evidence, fix, causal graph, rejected hypotheses, and verification results.

### Data Flow

```text
Select Entanglement from the mode menu
        ↓
Set global chatMode = "entanglement"
        ↓
Read the current thread's causalState
        ↓
Inject causal context while keeping the standard LLM/tool loop
        ↓
Parse the model's returned stage, hypotheses, evidence, and verification results
        ↓
Write the state back to the thread and refresh the dashboard
        ↓
Write a causal-case memory after high-confidence convergence
```

## 3. Causal State Machine

### 1. Stages

| Stage | Meaning |
| --- | --- |
| `OBSERVE` | Collect phenomena and evidence while the root cause is not yet clear. |
| `INTERVENE` | Propose an action that requires a tool or experiment for validation. |
| `CONVERGE` | Gradually close the loop between the root cause, fix, and verification. |
| `BACKTRACK` | The current hypothesis has been rejected and the reasoning must return to an earlier point. |

### 2. State Fields

Core thread state includes `phase`, `rootCause`, `mechanism`, `confidence`, `hypotheses`, `evidenceLog`, `evidenceSummary`, `causalGraph`, `causalGraphEdges`, `counterfactual`, `fix`, `verify`, `pendingPrediction`, `turnCount`, `stuckTurns`, and `corrections`.

### 3. Hypothesis Management

Hypotheses use identifiers such as `H1` and `H2` and record a `testing`, `confirmed`, or `rejected` status.
The system also stores the Kill Criterion, Lesson, creation turn, and most recently touched turn to prevent already-rejected reasoning from being adopted again.

### 4. Evidence and Causal Graphs

Evidence supports five levels: `++`, `+`, `~`, `-`, and `--`. The source tool can also be recorded.
The parser retains the 20 most recent detailed evidence items and compresses older content into a summary. Causal edges support `A -> B`, `A -x B`, and optional weights, and are deduplicated.
These evidence levels and causal edges are structured records of content proposed by the model, not conclusions calculated automatically by an independent statistical engine.

### 5. Confidence Thresholds

The system applies a heuristic threshold to `HIGH` confidence:

- A clear root cause must exist; it cannot remain `UNKNOWN`.
- At least two positive pieces of evidence rated `+` or `++` are required.
- If the `CONVERGE` stage does not meet the high-confidence threshold, it is downgraded to `INTERVENE`.

Confidence changes are kept in history. If confidence does not increase for several turns, `stuckTurns` increases and the dashboard shows a stalled state.

## 4. The Prediction–Intervention–Verification Loop

When the model proposes an `Intervention` and a prediction, the system saves `pendingPrediction`.
After the tool runs, the model must provide a verification result. The pending prediction closes only after a `Verdict` is parsed.

The system also checks whether the stated commitment matches the actual tool call:

- If the model says it will perform an intervention but does not call a tool, the system records `no_tool_recovery` and requests another execution.
- If the model says it will call tool A but actually calls tool B, the system records `wrong_tool_recovery` and requests realignment.
- Causal recovery has a limited retry budget; the current implementation uses a budget of 3.

This means Entanglement does more than ask the model to write an analysis. It requires the model to turn that analysis into verifiable tool actions.

## 5. Where It Is Stronger Than Agent

### 1. Better for Unknown Root Causes

Agent may guess a cause and start editing immediately. Entanglement keeps the cause as a hypothesis and requires an explanation of how it could be falsified.

### 2. Better for Multi-Turn Investigation

The current stage, evidence, rejected hypotheses, and pending predictions enter the next turn's context, reducing the chance of losing investigation progress as the conversation grows.

### 3. Better at Finding Wrong Directions

`BACKTRACK`, `rejected`, Kill Criterion, and Lesson work together to provide a recovery path.

### 4. Easier to Supervise Manually

The dashboard compresses the model's working state into stages, confidence, root cause, evidence, and correction records, so users can notice when the model is going in circles.

### 5. Able to Preserve Successful Cases

After high-confidence convergence, the system writes a `causal-case` memory that can theoretically be recalled as experience for similar problems later.

## 6. Where It Is Not Necessarily Stronger Than Agent

### 1. Slower for Well-Defined Tasks

State parsing, causal summaries, and the verification protocol add process overhead that simple changes do not need.

### 2. Higher Token Consumption

Each turn carries additional mode context, causal state, evidence history, and standardized summaries.

### 3. Still Depends on Model-Reported Information

The model primarily proposes the root cause, evidence levels, and causal graph. The system parses, stores, displays, and applies limited corrections to them.

### 4. Protocol Misclassification Is Possible

If the model does not output recognizable causal fields, the system may reuse old state, lower confidence, increase the number of stuck turns, or trigger recovery.

### 5. Not a Formal Proof

`HIGH` is only a heuristic judgment based on a clear root cause plus at least two positive pieces of evidence. It is not equivalent to a mathematical proof or genuine causal validation.

## 7. Choosing Between Modes

| Task type | Recommended mode | Reason |
| --- | --- | --- |
| Clear small changes, style updates, or simple interface fields | Agent | Its tool capabilities are sufficient and the workflow is shorter. |
| Unknown bugs, regressions, or cross-module failures | Entanglement | These need a closed loop of hypotheses, evidence, intervention, and verification. |
| Analyze a solution without executing changes yet | Plan or Analyze | Reduces direct modification and execution. |
| Process multiple independent modules in parallel | Agent Teams | This is the dedicated multi-AI collaboration mode. |

## 8. Final Assessment

If “powerful” means tool permissions, Entanglement is broadly as capable as Agent. If it means reasoning organization, state continuity, and verification for complex problems, Entanglement is stronger.
If it means speed, token efficiency, and direct execution for simple tasks, standard Agent is more suitable.
The most accurate positioning is therefore:

> **Entanglement = Agent + causal-state tracking + prediction/intervention/verification constraints + visualization + converged memory.**

It is not a complete replacement for Agent. It is an enhancement mode designed for complex debugging and uncertain problems.

## 9. Important Note

“Causal Trace Complete” in the user interface means that the structured state block has been parsed. It does not mean that the root cause has been independently proven.
