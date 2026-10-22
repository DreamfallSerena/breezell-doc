---
title: 对话框概览
description: 全面介绍 Breezell 对话面板：编写与发送消息、模式、模型、@ 和 / 菜单、托盘按钮、上下文用量与压缩、排队消息以及撤回。
---

# 对话框概览

Breezell **Agent** 一侧的对话面板是你与 AI 交流的地方：你在这里写下请求，选择 AI 的工作方式和所用的模型，附加上下文，并跟进它的进度。本页会逐一介绍其中的每个部分。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。其中一些会像真实面板一样响应操作：将鼠标悬停在模式菜单、Context 列表或已发送的消息上，或者点击开关和星标试试。
:::

## 对话面板的组成部分

<BzLiaotian biaotilan quanbiao wen="为设置页面添加一个深色模式开关。" da="我会在 SettingsPage.vue 中添加一个开关，用来切换页面上的主题类，并记住你的选择。我先看看设置是怎样存储的。" />

| | 部分 | 作用 |
| --- | --- | --- |
| 1 | 顶部按钮 | **New Chat**（+）、**Skills & Memory**（笔记本图标）和 **Chat History**（时钟图标）。Skills & Memory 会打开 [Rules, Memories & Skills](/prompt-settings) 面板。 |
| 2 | 输入框 | 在这里输入内容。输入框为空时显示 <BzWenben jian="chat.input.placeholder" />。 |
| 3 | 模式 | AI 处理这条消息的方式：只聊天、制定计划、只读分析、编辑文件等。参见[选择模式](#mode)。 |
| 4 | 模型 | 负责回答的模型，后面跟着它的上下文窗口和推理强度，例如 `200K Medium`。参见[选择模型](#model)。 |
| 5 | 上下文圆环 | 显示上下文窗口的占用程度。点击它可查看详情并手动压缩。参见[上下文用量](#context)。 |
| 6 | **@** | 把文件、文件夹或以往的对话添加到消息中。参见[用 @ 添加上下文](#mention)。 |
| 7 | 发送 | 发送消息。AI 回答期间，它会变成停止按钮。 |
| 8 | 托盘 | 输入框下方的一排按钮：Breezell Browser、上传文件/图片、快捷指令、优化提示词、MCP 和技能。参见[托盘](#tray)。 |

## 编写并发送消息 {#send}

1. 点击输入框，写下你的请求。说清楚你想要什么、要改哪里，例如具体的文件或页面。
2. 按 `Enter` 发送。按 `Shift+Enter` 则会换行。

输入框中一有文字，发送按钮就会从灰色变成白色：

<BzLiaotian shuru="为设置页面添加一个深色模式开关。" />

要添加图片，可以把它粘贴到输入框中，或者直接拖进去。要添加其他文件，请使用托盘中的回形针按钮。在编辑器中选中代码后按 `Ctrl+L`（macOS 上为 `Cmd+L`），即可把选中的内容添加到对话中。

### AI 回答期间

发送按钮会变成一个带方块的白色停止按钮。点击它即可停止回答。

在此期间你仍然可以继续输入。回答进行中发送的消息不会丢失：它们会在输入框上方的 <BzWenben jian="chat.queue.queued" canshu="2" /> 下排队等待，等 AI 空闲后依次发送。

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="顺便更新 README|然后运行测试" wen="为设置页面添加一个深色模式开关。" da="我会在 SettingsPage.vue 中添加一个开关，用来切换页面上的主题类。" />

每条排队的消息都有这些按钮：<BzWenben jian="chat.queue.moveUp" /> 和 <BzWenben jian="chat.queue.moveDown" />（有多条消息时显示）、<BzWenben jian="common.edit" />（放回输入框）、<BzWenben jian="chat.queue.sendNow" />（停止当前回答并发送这一条）以及 <BzWenben jian="common.delete" />。你也可以拖动它们来调整顺序。如果某条排队的消息无法发送，原因会显示在它下方，例如 <BzWenben jian="chat.queue.notSent.turnError" />

## 选择模式 {#mode}

点击输入框左下角的模式胶囊。将鼠标悬停在某个模式上，即可查看它的作用：

<BzLiaotian tanchu="moshi" moshi="agent" />

| 模式 | 简介 |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent 是默认模式，适合大多数任务。所选模式从你的下一条消息开始生效；当你用不同的模式发送消息时，对话中会出现一行 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" />，标记这次切换。

Entanglement 和 Teams 默认处于锁定状态，需要 5 位好友助力，或者购买任意套餐后才能解锁。被锁定的模式在菜单中会显示一把锁，它的说明中会显示你的解锁进度：

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 选择模型 {#model}

点击模式旁边的模型名称。模型选择器包含一个搜索框、各个模型来源，以及每个模型各自的设置（上下文窗口、推理强度、Fast）。[自定义 API（BYOK）](/custom-api#use-claude-in-chat)中有分步说明。

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

模型名称后面的文字是这些设置的简要摘要：`200K Medium` 表示 200K 上下文窗口和 Medium 推理强度；`1M High Fast` 表示 1M 窗口、High 推理强度并开启 Fast。参见[上下文、推理与 Fast](/custom-api#context-reasoning-and-fast)。

## 用 @ 添加上下文 {#mention}

在输入框中输入 `@`，或者点击 **@** 按钮。菜单会在输入框正上方打开：

<BzLiaotian tanchu="tiji" shuru="@" />

| 条目 | 添加的内容 |
| --- | --- |
| files | 工作区中的一个文件。 |
| folders | 整个文件夹。 |
| chats | 一段之前的对话。AI 拿到的是指向其对话记录的引用，需要时才会去读取，因此可以同时带上多段对话，而不会占满上下文。 |

你不必先打开某个类别：在 `@` 后面直接输入，Breezell 就会同时搜索文件和文件夹。已打开的文件排在最前面，并标有 `Recent`。可以用方向键和 `Enter` 选择，也可以直接点击。

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

在 files 和 folders 中，菜单标题栏里有一个小标签，可以在 <BzWenben jian="inputToolbar.filterOn" /> 和 <BzWenben jian="inputToolbar.filterOff" /> 之间切换：<BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />。如果没有匹配的结果，Breezell 会列出有未提交更改的文件，并标为 `Changed`。

每个选中的项目都会成为消息中的一个标签，这样 AI 就能准确知道你指的是哪个文件、文件夹或对话。

## 用 / 调用技能和快捷指令 {#slash}

在输入框开头输入 `/`，即可在同一个列表中看到你的[快捷指令](#quick-phrases)和技能：

<BzLiaotian tanchu="xiegang" shuru="/" />

- 选择一条快捷指令，会执行该指令设定的操作：插入文本、直接发送，或者在终端中运行。
- 选择一个技能，会把它添加到消息中，让 AI 在这次请求中使用该技能。
- 已关闭的技能显示为灰色，所在行带有一个开关；在这里直接打开它即可使用。

## 输入框下方的托盘 {#tray}

输入框下方的虚线托盘中有六个按钮。将鼠标悬停在按钮上即可看到它的名称。

| 按钮 | 作用 |
| --- | --- |
| Breezell Browser（地球图标） | 打开 Breezell 内置浏览器的面板。 |
| <BzWenben jian="inputToolbar.attach" />（回形针图标） | 把电脑中的文件附加到消息中。 |
| <BzWenben jian="inputToolbar.quickPhrases" /> | 你保存的常用文本和命令。 |
| <BzWenben jian="inputToolbar.optimizePrompt" />（魔杖图标） | 把你写的内容改写成更清晰的提示词。 |
| MCP | 开启或关闭 MCP 服务器。 |
| <BzWenben jian="inputToolbar.skills" />（图层图标） | 开启或关闭技能。 |

MCP 或技能按钮上出现绿色小圆点，表示至少开启了一项。对话面板较窄时，Breezell Browser 会移到 **⋯**（<BzWenben jian="inputToolbar.more" />）菜单中。当你引用了 Chat History 中的某段对话时，托盘中会出现一个蓝色的 <BzWenben jian="inputToolbar.referenced" /> 按钮；点击它即可移除这个引用。

### Breezell Browser {#browser}

Breezell Browser 是 Breezell 内置的浏览器。网页会在编辑器标签页中打开，就在你的代码旁边。

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- 尚未打开浏览器时，面板显示 <BzWenben jian="browserPanel.readyToLaunch" />。点击 <BzWenben jian="browserPanel.open" />，或者在输入栏（<BzWenben jian="browserPanel.searchPlaceholder" />）中输入链接或搜索词，然后按 `Enter`。
- 打开网页后，面板会以标签的形式列出它们：点击某个标签即可切换过去，所在行上的按钮可将它静音或关闭。标题栏中的按钮可将所有标签静音。

AI 自己使用的浏览器工具默认在后台运行，不显示画面。如果想看它们如何操作，请在[功能选项](/feature-options-overview)中关闭 <BzWenben jian="featureOptions.codeBehavior.browserHeadless" />。

### 快捷指令 {#quick-phrases}

快捷指令是你经常使用的文本和命令。这个按钮会打开你的常用指令；点击其中一条即可使用。

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

点击 <BzWenben jian="quickPhrases.manage" /> 打开管理界面。左侧列出所有指令，右侧是你的常用指令，也就是按钮中显示的那些。

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- 点击某条指令上的星标，或者选中它后点击中间的箭头，即可将它加入 <BzWenben jian="quickPhrases.favorites" />。也可以直接把它拖到右侧。常用指令上的 **×** 只会把它从常用中移除。
- 常用指令上的铅笔图标用于编辑它；左侧的垃圾桶图标会删除这条指令。
- 顶部的 <BzWenben jian="common.add" /> 会打开新指令的编辑界面：

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

每条指令都有名称、内容和操作类型：

| 类型 | 选择该指令时 |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | 内容会放入输入框，发送前你仍可以编辑。 |
| <BzWenben jian="quickPhrases.send" /> | 内容会立即作为消息发送。 |
| <BzWenben jian="quickPhrases.terminal" /> | 内容会作为命令在终端中运行。可选的 <BzWenben jian="quickPhrases.workingDirectory" /> 用于设置命令在哪个文件夹中运行。 |

快捷指令也会出现在 [`/` 菜单](#slash)中。

### 优化提示词 {#optimize}

先写一个粗略的请求，然后点击魔杖按钮。Breezell 会把它改写成更清晰的提示词，并先展示结果；不会发送任何内容。

<BzLiaotian tanchu="youhua" shuru="设置页面加个深色模式" youhuawen="为设置页面添加一个深色模式开关。保存用户的选择，使其在重新加载后依然生效；通过切换根元素上的主题类来应用该模式；在用户选择模式之前，跟随系统偏好设置。" tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> 会把新文本放入输入框。在你修改这段文本之前，再次点击魔杖就是 <BzWenben jian="promptOptimize.undo" />，会恢复你的原文。
- <BzWenben jian="promptOptimize.retrySame" /> 会再写一个版本；<BzWenben jian="promptOptimize.dismiss" /> 会关闭面板。
- 输入框为空时，魔杖只会显示 <BzWenben jian="inputToolbar.optimizePromptEmpty" />。

改写默认使用对话模型，除非你在[功能选项](/feature-options-overview)中为它指定了专用模型（<BzWenben jian="models.promptOptimizeModel.title" />）。

### MCP {#mcp}

MCP 面板会列出你的 MCP 服务器及其状态：绿色表示已连接，红色表示出错，灰色表示已关闭或未启动。

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- 开关用于为 AI 开启或关闭某个服务器。标题栏会显示已开启的数量，例如 `2/3`。
- 箭头按钮（<BzWenben jian="inputToolbar.referenceMcpServer" />）会把该服务器添加到你的消息中，让 AI 在这次请求中使用它的工具。
- **+**（<BzWenben jian="mcp.addServer" />）会打开 `mcp.json`，服务器就在这个文件中添加。

### 技能 {#skills}

技能按钮的用法与此相同，只是对象换成了技能，面板中有 <BzWenben jian="skills.builtinTab" /> 和 <BzWenben jian="skills.myTab" /> 两个标签页。参见[在对话中使用技能](/prompt-settings#use-skills-in-a-chat)。

::: warning 在长对话开始前设置好 MCP 服务器和技能
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## 上下文用量与压缩 {#context}

随着对话占用模型的上下文窗口，**@** 旁边的圆环会逐渐填满。将鼠标悬停在圆环上可以查看具体数字，例如 `47.0% - 94.2K / 200.0K context used`；点击它则会打开 **Context** 面板：

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

条形图和列表按类型拆分已使用的 token。将鼠标悬停在某一行上，即可在条形图中突出显示它对应的部分。

| 类别 | 统计内容 |
| --- | --- |
| System prompt | Breezell 针对当前模式的指令 |
| Tools | AI 可以调用的工具的描述 |
| Rules | 你的工作区规则或全局规则 |
| Memories | 随请求一起发送的记忆 |
| Skills | 已开启技能的列表 |
| MCP | 已开启的 MCP 服务器提供的工具 |
| Subagents | 子代理完成的工作 |
| Conversation | 你的消息、AI 的回答和工具结果 |

### 自动压缩与手动压缩

当对话用到可用上下文窗口的约 90% 时，Breezell 会自动压缩：较早的消息会被替换为一份摘要，对话照常继续。你无需进行任何操作。

如果想提前腾出空间，请在 Context 面板中点击 <BzWenben jian="contextUsage.compress" />（<BzWenben jian="contextUsage.compressTooltip" />）。压缩期间，按钮会显示 <BzWenben jian="contextUsage.compressing" /> 和百分比。完成后，面板会显示以下提示之一：

| 提示 | 含义 |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | 已完成。 |
| <BzWenben jian="contextUsage.nothingToCompress" /> | 对话太短，无法压缩。 |
| <BzWenben jian="contextUsage.errorBusy" /> | 请先停止回答，再进行压缩。 |
| <BzWenben jian="contextUsage.errorNoModel" /> | 请先在输入框下方选择一个模型。 |

切换到上下文窗口更小的模型后，圆环可能会显示 <BzWenben jian="contextUsage.converting" />，此时 Breezell 正在把对话调整到新的窗口大小。

## 编辑或撤回已发送的消息 {#edit}

将鼠标悬停在你已发送的某条消息上。它的左上角会出现一个铅笔图标，右侧会出现一个返回箭头：

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="为设置页面添加一个深色模式开关。" da="完成了。SettingsPage.vue 现在有了深色模式开关，你的选择会被保存；在你手动更改之前，页面会跟随系统设置。" />

- **编辑**：点击消息或铅笔图标，修改文本后重新发送。
- **撤回**（<BzWenben jian="editor.revertToThisPoint" />）：点击箭头并确认。之后的消息会被删除，它们改动过的文件也会恢复到这条消息时的状态。

<BzLiaotian huigun wen="为设置页面添加一个深色模式开关。" da="完成了。SettingsPage.vue 现在有了深色模式开关，你的选择会被保存；在你手动更改之前，页面会跟随系统设置。" />

撤回后无法在编辑器中撤销，因此点击 <BzWenben jian="editor.revertConfirmDo" /> 之前，请仔细查看对话框中的内容。如果 AI 仍在这段对话中回答，箭头会变暗；请先停止回答。

## 键盘快捷键 {#shortcuts}

| 按键 | 操作 |
| --- | --- |
| `Enter` | 发送消息 |
| `Shift+Enter` | 换行 |
| `@` | 打开提及菜单 |
| 在开头输入 `/` | 打开技能和快捷指令 |
| `↑` `↓` 后按 `Enter` | 在打开的菜单中移动并选择 |
| `Esc` | 关闭当前打开的面板或菜单 |
| `Ctrl+L` / `Cmd+L` | 把编辑器中选中的内容添加到对话 |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | 开始新对话 |

## 使用提示

- Agent 适合大多数工作。只有在需要特定工作流时才切换模式，例如先制定计划，或者只分析而不编辑。
- 用 `@` 把 AI 引导到正确的位置：直接指定文件或文件夹，比长篇描述某样东西在哪里更有效。
- 借助上下文圆环让长时间进行的对话保持良好状态：压缩会自动进行，想自己腾出空间时也可以手动压缩。
- 把反复输入的请求保存为快捷指令，并用终端类型运行项目命令。
- 在长对话开始前就设置好 MCP 服务器和技能，而不是在对话进行到一半时再调整。
