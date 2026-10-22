---
title: 功能选项概览
description: 逐项说明 Breezell 功能选项页面上的每个开关：专用模型、后续建议、工具权限、编辑器行为、通知、计划模式、联网搜索和文件访问，包括默认值和作用。
---

# 功能选项概览

**功能选项**是 Box 中的一个页面，用来决定各项辅助功能使用哪个模型，以及 Agent 可以在多大程度上自主行动。页面分为五组：<BzWenben jian="featureOptions.group.models" />、<BzWenben jian="featureOptions.group.execution" />、<BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" /> 和 <BzWenben jian="featureOptions.group.system" />。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。所有开关和菜单都处于 Breezell 的默认值，你可以点击它们，看看每一行会怎样变化。
:::

## 打开功能选项

1. 打开 Box（点击标题栏切换按钮中的 **Box** 一侧，或在命令面板中运行 **Breezell: Open Settings**）。
2. 在左侧的 <BzWenben jian="box.title" /> 分组中，点击 <BzWenben jian="tab.featureOptions" />。

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

每项更改都会在你操作的同时保存，并对所有工作区生效。如果想直接跳到某个选项，在 Box 侧栏顶部的搜索框中输入它名称的一部分：Breezell 会滚动到该行并将其高亮。

自动补全不在本页。它的开关、模型和协议有单独的页面：<BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />。

## 模型

<BzWenben jian="featureOptions.dedicatedModels.desc" />本组中每个模型行的用法都相同：

- 开关**关闭**（默认）：该行显示 <BzWenben jian="models.analysisModel.followChat" />，功能使用对话输入框下方选中的模型。
- 开关**开启**：该行显示 <BzWenben jian="models.analysisModel.custom" />，下方会出现一个模型选择器。无论对话使用哪个模型，该功能始终使用你在这里选的模型。

如果之后在 <BzWenben jian="tab.models" /> 中删除或关闭了这个专用模型，该功能会不加提示地改回使用对话模型。

### 专用模型

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| 行 | 用途 |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | Agent 为探索和分析代码而启动的子代理 |
| <BzWenben jian="models.teamDesignModel.title" /> | Teams 模式中负责 UI、视觉和页面打磨的团队成员 |
| <BzWenben jian="models.teamBugfixModel.title" /> | Teams 模式中负责定位、复现和修复 Bug 的团队成员 |
| <BzWenben jian="models.scmModel.title" /> | 在源代码管理中生成的提交信息 |

一种常见的配置是：用 `claude-opus-5` 对话，把这些辅助任务交给更小的模型。在上面的示例中，<BzWenben jian="models.scmModel.title" /> 已切换为 <BzWenben jian="models.scmModel.custom" />，并运行在 `claude-haiku-5-5` 上，这样生成提交信息更快，也更省钱。这些提交信息的风格由[提示词和技能设置](/prompt-settings#commit-message)中的 Commit 页面决定。

### 后续建议

<BzWenben jian="featureOptions.followUp.desc" />此功能默认关闭。

| 选项 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | 关闭 | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 每条回复下方显示 2、3 或 4 张建议卡片。 |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | 选择 <BzWenben jian="featureOptions.followUp.clickSend" /> 会立即发出建议；选择 <BzWenben jian="featureOptions.followUp.clickInsert" /> 则可以先编辑。<BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | 这里用 `claude-haiku-5-5` 这类小而快的模型就够了。 |

### 优化提示词

<BzWenben jian="featureOptions.promptOptimize.desc" />这张卡片只有一个模型行：<BzWenben jian="models.promptOptimizeModel.title" />。

### 划词助手

在对话回复中选中文字时，会弹出一个带有“引用”和“复制”的小浮条。划词助手会在其中加入“翻译”和“搜索”。

| 选项 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | 开启 | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | 浮条显示在选中文字的 <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> 或 <BzWenben jian="featureOptions.selectionAssist.pillAbove" />。<BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | 开启 | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | 开启 | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | 开启 | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | 负责翻译的模型。 |

## 执行

<BzWenben jian="featureOptions.toolPermissions.desc" />开关关闭时，Agent 在执行这类操作前会停下来，等你在对话中批准或拒绝。只读的工具（例如读取文件、搜索代码或联网搜索）从不需要等待批准。

<BzGongneng zu="execution" />

| 开关 | 默认值 | 涵盖范围 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | 开启 | 编辑、写入、重命名和删除文件及文件夹 |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | 关闭 | 终端命令，以及 Agent 编写并运行的脚本 |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | 开启 | 使用 Breezell 的数据库工具执行语句、创建连接或数据库 |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | 关闭 | 生成图片 |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | 开启 | 来自你添加的 MCP 服务器的工具 |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | 关闭 | 在 Teams 模式下，<BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> |

::: warning 自动批准终端
开启 <BzWenben jian="featureOptions.toolPermissions.terminal" /> 后，Agent 会直接运行它决定执行的任何命令，例如安装、构建或删除文件，不会先询问你。只在这样做安全的项目中开启它，例如 Git 状态干净、可以随时回退的项目。
:::

即使开启了 <BzWenben jian="featureOptions.toolPermissions.edits" />，修改仍会以可审阅的更改形式显示，除非你同时开启下方的 <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" />。

## 编辑器

<BzGongneng zu="editor" />

### 代码行为

| 开关 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | 开启 | 每次编辑后，这次编辑引入的 Lint 错误会随结果一并发回给 AI，让它在同一轮中修复。 |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | 关闭 | AI 的修改会立即保留，编辑器中不再有接受 / 拒绝这一步。 |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | 关闭 | AI 编辑某个文件时，在编辑器中打开该文件。 |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | 开启 | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | 关闭 | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | 开启 | 在编辑器中选中代码时，旁边会出现几个小按钮，用于把代码添加到对话或编辑这段代码。 |

### 通知

| 选项 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | 开启 | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | 关闭 | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | 关闭 | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | 关闭 | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | 关闭 | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

选择一种声音时会播放一次，开启任一声音开关时也会播放一次。在你至少开启一个后台或当前页开关之前，这些声音都不会响起。

## 智能

<BzGongneng zu="intelligence" />

### 上下文管理

| 选项 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | 关闭 | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | 允许模型使用其提供商内置的联网搜索，详见下文。 |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> 决定何时在请求中加入提供商自带的搜索。Breezell 通常使用自己的联网工具进行搜索，这些工具需要你登录。

| 选择 | 结果 |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | 使用 Breezell 的搜索工具。只有在这些工具无法运行时（例如你未登录），模型才会改用其提供商的搜索。 |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | 每次请求都会加入提供商的搜索，与 Breezell 的工具同时提供。 |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | 从不使用提供商的搜索。 |

只有部分提供商具备内置搜索：Anthropic（Claude）、OpenAI、使用 API 密钥接入的 Gemini、xAI、Perplexity、OpenRouter、Qwen 和 Zhipu。对于其他模型，此选项不起作用。

### 模式与技能

| 开关 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | 开启 | <BzWenben jian="featureOptions.superpowers.desc" />这些就是[提示词和技能设置](/prompt-settings#use-skills-in-a-chat)中列出的内置技能。 |
| <BzWenben jian="featureOptions.entanglement.enable" /> | 开启 | <BzWenben jian="featureOptions.entanglement.enableDesc" />参见 [Entanglement 模式](/entanglement-mode-overview)。 |

## 系统

<BzGongneng zu="system" />

### 外部文件访问

| 开关 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | 开启 | 工具可以读取已打开工作区之外的文件，例如某个库的源码或主目录中的配置文件。 |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | 开启 | 工具可以修改已打开工作区之外的文件。如果希望 Agent 只操作当前项目，请关闭此项。 |

### 终端网络速度

| 开关 | 默认值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | 开启 | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | 关闭 | 仅限 Windows。<BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## 小结

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />；更改会立即保存。
- <BzWenben jian="featureOptions.group.models" />：辅助功能默认跟随对话模型，直到你为它们指定专用模型。
- <BzWenben jian="featureOptions.group.execution" />：Agent 无需询问即可执行哪些操作。终端命令默认会先询问。
- <BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" />、<BzWenben jian="featureOptions.group.system" />：Lint 修复、通知、计划卡片、联网搜索、Superpowers 技能，以及工作区之外的文件访问。
