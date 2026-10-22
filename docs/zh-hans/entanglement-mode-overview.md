---
title: Entanglement 模式
description: Breezell 的 Entanglement 模式如何借助持续跟踪的假设和证据调查棘手的问题，如何读懂它的因果面板，以及它的严格验证和人机互动选项。
---

# Entanglement 模式

**Entanglement** 是一种 <BzWenben jian="chatMode.breezellOriginalMode" />：<BzWenben jian="chatMode.entanglementDetail" />。它具备 Agent 的全部能力——读取、编辑、运行命令——并加入了明确、结构化的因果推理。AI 会提出假设，用每一次工具调用来证实或排除其中一个，并且只有在原因得到证据支持之后才修改代码。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的。因果面板的标签在 Breezell 中同样是英文；面板中展示的调查只是一个示例。点击面板中的箭头，即可展开或收起详情。
:::

## 什么时候使用 {#when}

当原因并不明显、直接给出的答案只能算是猜测时，请使用 Entanglement：

- 原因不明的 Bug 或回归问题；
- 横跨多个文件、模块或系统的问题；
- 需要在几种可能的解释或设计之间做出选择；
- 结果必须经过验证的性能、安全或架构工作。

对于明确、范围有限的修改，Agent 速度更快，消耗的 token 也更少。即使是同一个请求，Entanglement 消耗的 token 也比 Agent 多。

## 开始一次调查 {#start}

1. 在输入框下方的模式菜单中选择 **Entanglement**。如果它显示一把锁，请参见[锁定的模式](/mode-selection#locked)。
2. 描述症状、你预期的结果，以及各种限制（不能改动的文件、必须通过的测试）。
3. 发送。因果面板会出现在对话上方，并全程跟进这次调查。

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="计数器未更新" yinguowen="计数器读取的数组与 deleteTask() 修改的并不是同一个。|Root cause: deleteTask() 过滤的是 tasks 数组的副本|Predict: 修复后，Active 筛选项的计数也会减一" wen="删除任务后，计数器仍然显示原来的数字。找出原因并修复它。" da="我在检查 deleteTask() 修改的数组是否就是 renderCounters() 读取的那个。" />

在回答中，调查每更新一次，就会出现一行 **Tracing Causal Pathways**；点击它可以查看背后的推理。调查完成后，这一行会显示为 **Causal Trace Complete**。

## 读懂因果面板 {#panel}

面板的第一行显示调查进行到了哪一步：

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| 部分 | 含义 |
| --- | --- |
| **Locate → Verify → Fix** | 各个阶段：找到原因、证明它，然后修改代码。对勾表示已完成的阶段，闪动的圆点表示当前阶段。如果证据推翻了当前的解释，第一个阶段会变成琥珀色，并显示 **Relocate**。 |
| 状态 | 原因尚未查明时显示 **Investigating**；做了修改但尚未检查时显示 **Modified · unverified**；检查通过后显示 **Verified**；工作完成时显示 **Resolved**。 |
| **Confidence** | Low、Medium 或 High，以信号强度条的形式显示。它基于目前收集到的证据。 |

下面一行每隔几秒轮流显示当前的状态：当前的判断、正在检验的假设、最新的发现。将鼠标悬停在上面即可暂停轮播。

### 详情 {#details}

点击右侧的箭头即可展开详情：

<BzJiuchan jieduan="verify" zhankai />

| 区块 | 内容 |
| --- | --- |
| Completion contract | 任务是什么（**Target**），以及达到什么条件才算完成（**Done**）。 |
| Root cause | 当前的解释，包括 **Mechanism**（原因如何导致症状）和 **Counterfactual**（如果没有这个原因会怎样）。 |
| Hypotheses | 每个假设及其编号和状态——testing、confirmed 或 rejected。处于 testing 状态的假设带有一条 **Kill** 标准：能够排除它的观察结果。状态为 rejected 的假设会保留从中得到的 **Lesson**，并列在 **Resolved** 下方。 |
| Evidence | 按轮次（t2、t3……）列出的最新发现及其权重：双上箭头表示直接观察，上箭头表示支持，波浪线表示未经验证的推理，下箭头表示反对。徽标标明产生这条证据的工具。 |
| Open prediction | 如果 AI 的解释正确，它预期会看到的结果，正等待检验。 |
| Fix | 所做的修改，以及将如何验证它（**Verify**）。 |
| Causal graph | 从原因到症状的链条。 |

修复落实并通过验证后，面板会这样显示：

<BzJiuchan jieduan="resolved" zhankai />

要隐藏面板，请关闭 <BzWenben jian="featureOptions.entanglement.enable" />，它位于 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />。调查本身不受影响。

## 严格验证（实验性） {#strict}

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> 中有一个更严格的变体：**<BzWenben jian="experimental.entanglementStrict.title" />**。

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

开启后，面板中会多出 **<BzWenben jian="causalGate.title" />** 这一行：<BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" />，并附上用来重现 Bug 的命令以及置信度的依据。

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

当修复前失败的同一个命令在修复后通过时，这一行会显示 <BzWenben jian="causalGate.proven" />。在 <BzWenben jian="experimental.entanglementStrict.model" /> 中，你可以让严格模式使用与对话不同的模型。

### 人机互动 {#human-in-the-loop}

开启严格验证后，你还可以开启 **<BzWenben jian="experimental.humanLoop.title" />**：<BzWenben jian="experimental.humanLoop.desc" />

在你确认之前，AI 只会读取。如果你的下一条消息是在延续已确认的任务（例如“还是失败”“继续”），工作会直接继续，不再重复询问；如果是新的请求，则会先跟你核对。

## 使用建议 {#tips}

- 准确描述症状：你做了什么、看到了什么、预期的是什么。能够重现问题的命令是最好的起点。
- 在要求修复之前，先让 AI 完成 Verify 阶段；原因得到确认后，修改会更小、更安全。
- 在依赖一项重要的修改之前，请检查面板的结论和验证结果。面板用于辅助你做决定，而不能代替你的审查。
- 遇到一个新的、无关的问题时，请开始新的对话，以免旧的调查与新的调查混在一起。

另请参阅：[模式选择](/mode-selection#entanglement)，了解 Entanglement 与其他模式的比较。
