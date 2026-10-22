---
title: 模式选择
description: Breezell 各模式（Chat、Plan、Analyze、Entanglement、Agent、Teams 和 DarkSelene）分别可以读取、修改和运行什么，计划卡片和模式切换如何工作，以及应该选择哪种模式。
---

# 模式选择

模式决定了 AI 如何处理你的下一条消息：它可以读取什么、修改什么、运行什么。在输入框左下角的模式胶囊中选择模式。**Agent** 是默认模式，也适合大多数工作。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。将鼠标悬停在菜单中的模式上，即可查看它们的说明；卡片上的菜单和开关都可以点击。
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

菜单中的模式名称在所有语言下都显示为英文。所选模式从你的下一条消息开始生效；当你用不同的模式发送消息时，对话中会出现一行 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" />，标记这次切换。菜单本身的介绍参见[选择模式](/dialog-box-overview#mode)。

## 各模式能做什么 {#compare}

| 模式 | 读取项目 | 修改文件 | 运行命令 | MCP 工具 |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | 仅限它自己的计划 | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓（第二步，经过审查） | ✓（第二步） | 第二步 |

在所有模式下，AI 都可以使用你的技能。文件编辑和命令是否需要你批准，在[功能选项](/feature-options-overview)的工具权限中设置。

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" />。

Chat 适合提问、解释概念、比较想法或起草文字。AI 根据对话内容和你附加的上下文作答；它不会自行打开项目文件，也不会运行任何东西。不过，当你让它记住某件事时，它仍然可以保存一条记忆。

<BzLiaotian moshi="normal" wen="防抖和节流有什么区别？" da="两者都用来限制函数的执行频率。防抖会等调用停下片刻后再执行一次；节流则在调用持续期间，每个时间间隔内最多执行一次。边输入边搜索适合用防抖，滚动或窗口尺寸变化的处理函数适合用节流。" />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />。<BzWenben jian="chatMode.planExplain" />。

1. AI 会读取它需要的代码，但不会修改其中任何内容。
2. 它会在对话中以卡片的形式写出计划：包括标题、简短概述和待办事项列表。计划是一个 `.plan.md` 文件，Breezell 将它保存在你的项目之外。
3. 点击 <BzWenben jian="planCard.actions.viewPlan" /> 即可阅读和编辑计划。在对话中提出修改意见，AI 会修订同一份计划。
4. 点击 <BzWenben jian="planCard.actions.execute" />（`Ctrl+Enter`）执行计划。随后卡片会显示 <BzWenben jian="planCard.actions.executed" />，待办事项会随着工作推进逐项勾选。

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="为设置页面添加一个深色模式开关。" da="这是一份计划。它保留现有的主题逻辑，只新增一项设置。" jihuabiaoti="设置页面的深色模式开关" jihuazhaiyao="在 SettingsPage.vue 中添加一个深色模式开关，保存用户的选择，通过根元素上的主题类来应用它，并在用户选择模式之前跟随系统设置。" />

<BzWenben jian="planCard.actions.skip" /> 会忽略这份计划。卡片上的 <BzWenben jian="planCard.actions.auto" /> 开关与功能选项中的 <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> 是同一项设置：开启后，新计划无需点击就会自动执行。

### Agent 建议切换到 Plan 时 {#plan-switch}

在 Agent 模式下，AI 可能会判断某个任务需要先制定计划。此时它会停下来，显示一张说明理由的卡片：

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="重写存储层，让它能够同步到服务器。" da="这会涉及存储格式、所有调用方以及离线缓存。" qiehuanka="这项改动横跨多个模块和数据格式；先就计划达成一致，可以避免一次高风险的重写。" />

- <BzWenben jian="planSwitch.switch" />（`Ctrl+Enter`）会把对话转到 Plan 模式；<BzWenben jian="planSwitch.skip" /> 则让 AI 继续以 Agent 模式工作。
- 左下角的菜单决定下一次如何处理：<BzWenben jian="planSwitch.alwaysAsk" />、<BzWenben jian="planSwitch.never" /> 或 <BzWenben jian="planSwitch.alwaysRun" />。它与功能选项中的 <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> 是同一项设置。
- 选择 <BzWenben jian="planSwitch.alwaysAsk" /> 时，卡片下方的进度条会运行两次，每次 30 秒。如果你没有回应，就会跳过这次切换，AI 继续工作。

在 Plan 模式下，AI 也可以用同样的卡片提出反向切换，回到你之前所用的模式。

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />。<BzWenben jian="chatMode.analyzeExplain" />。

Analyze 适合查找 Bug 的原因、审查设计，或者在决定修改什么之前先理解陌生的代码。AI 会不断搜索和阅读，直到能够给出答案，然后停止；它可以使用 MCP 工具获取信息。如果有需要修复的地方，它会在回答中描述修复方法，而不会直接应用。

<BzLiaotian moshi="analyze" wen="为什么删除任务后，任务计数器显示的数字不对？" da="deleteTask() 是从数组的一个副本中移除该项的，而 renderCounters() 读取的是原始的 tasks 数组，所以计数始终不会减少。修复方法：让 deleteTask() 更新共享的 tasks 数组，然后再调用 renderCounters()。" />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />。<BzWenben jian="chatMode.agentExplain" />。

Agent 是默认模式。它会收集所需的上下文、编辑文件、运行命令，并在汇报之前检查结果。任务较大时，它可以建议[切换到 Plan](#plan-switch)；它还可以使用 MCP 工具、浏览器和你的技能。

在 Windows 和 macOS 上，启用桌面控制后，只有 Agent 和 Entanglement 模式可以操作你电脑上的应用。

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.entanglementDetail" />：<BzWenben jian="chatMode.entanglementExplain" />

Entanglement 具备 Agent 的全部能力，并加入了明确、结构化的因果推理。AI 会持续跟踪自己的假设，用每一次工具调用来证实或排除其中一个，并且可以在继续之前停下来与你确认某一步。对话上方的面板会随时展示这一状态的变化（功能选项中的 <BzWenben jian="featureOptions.entanglement.enable" />）。

它适合处理棘手的 Bug、架构决策、重构、性能或安全相关的工作。它消耗的 token 比 Agent 更多。详细的工作原理参见 [Entanglement 模式](/entanglement-mode-overview)。

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />。<BzWenben jian="chatMode.agentTeamsExplain" />。

- 由主导者判断是否值得组建团队。简单的请求会直接回答。
- 对于大型工作，主导者会拆分任务，启动并行工作的队友，然后汇总并检查它们的结果。
- 团队开始工作前，Breezell 会请你批准，除非你在功能选项中开启了 <BzWenben jian="featureOptions.toolPermissions.teams" />。负责设计和修复 Bug 的队友可以使用各自的模型（<BzWenben jian="models.teamDesignModel.title" />、<BzWenben jian="models.teamBugfixModel.title" />）。
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />。并行的队友在处理同一批文件时也可能互相干扰，因此请为它们分配界限清晰、互不重叠的部分。

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.darkSeleneDetail" />。

DarkSelene 分两步工作：

1. **拆解问题。** 只读，与 Analyze 相同：AI 研究请求和代码，写出一份简报，说明需要做什么以及预期会得到什么结果。
2. **在审查下执行。** 简报会交给 Agent。在它工作期间，独立的模型调用会审查它在预期文件之外的读取操作以及每一次编辑，审查结果会作为证据反馈给它。有风险的编辑会由三个审查者并行检查。

在第二步中，AI 不会切换模式、编写计划卡片，也不会停下来提问。<BzWenben jian="chatMode.darkSeleneTokenWarning" />。

## 锁定的模式 {#locked}

Entanglement 和 Teams 需要 5 位好友助力解锁，或者购买任意套餐后才能使用。在此之前，它们在菜单中会显示一把锁，将鼠标悬停在上面会显示你的进度，例如 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />。<BzWenben jian="chatMode.entanglementUnlockHint" />参见[邀请新用户教程](/invite-new-users)。

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 如何选择模式 {#choosing}

| 你想要…… | 模式 |
| --- | --- |
| 提个问题，或者把某件事想清楚 | Chat |
| 在做任何修改之前，先就做法达成一致 | Plan |
| 理解代码或查找原因，但不做修改 | Analyze |
| 完成一项任务：编辑、运行、验证 | Agent |
| 依据证据，一步步解决棘手的问题 | Entanglement |
| 同时推进大型工作中几个相互独立的部分 | Teams |
| 先把请求拆解清楚，并让每一处修改都经过审查 | DarkSelene |

拿不准时，就留在 Agent：任务需要时，它会自行切换到 Plan。
