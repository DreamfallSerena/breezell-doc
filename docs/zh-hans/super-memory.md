---
title: 超级记忆
description: 介绍 Breezell 的超级记忆如何把对话提炼为记忆、技能、经验、轨迹和资源，如何把它们召回到之后的请求中，以及如何在 Box 中整理它们。
---

# 超级记忆

**超级记忆**是 Breezell 自有的长期记忆。在你工作时，它会从对话中提炼值得保留的内容（决定、偏好、工作方法、解决问题时得到的教训、被修改过的文件），并在之后的请求中召回相关的部分，在新对话中也是如此。

- 提取由两个 Breezell 内置模型完成。它不使用你配置的模型，也不消耗该模型的 Token。被召回到某次请求中的记忆，会成为这次请求上下文的一部分。
- 使用超级记忆需要 Breezell 账号，并且所用套餐包含超级记忆。
- 它存储的所有内容都可以在 Box ▸ <BzWenben jian="box.memory.group" /> 中浏览、更正和删除。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言，其中的记忆只是示例。在记忆库中，你可以展开条目、更改优先级，以及将条目设为常驻。
:::

## 工作原理 {#how-it-works}

打开 Box，在左侧的 Console 分组中展开 <BzWenben jian="box.memory.group" />。它包含四个页面：<BzWenben jian="box.memory.overview" />、<BzWenben jian="box.memory.library" />、<BzWenben jian="box.memory.context" /> 和 <BzWenben jian="box.memory.maintenance" />。

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" /> 页面的开头是一张循环示意图，并附有实时数字：

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**：你与模型之间的每一轮往来。
2. **<BzWenben jian="box.memory.flow.extract" />**：<BzWenben jian="box.memory.flow.extractSub1" />；<BzWenben jian="box.memory.flow.extractSub2" />。
3. **<BzWenben jian="box.memory.flow.store" />**：条目存放的地方，包括活跃和休眠的条目。
4. **<BzWenben jian="box.memory.flow.project" />**：从你的代码库中汇总出的知识，例如入口点、命令和依赖项。
5. 回到对话：常驻条目会注入到每一次请求中，相关条目则在请求需要时被召回。

示意图下方的卡片显示：共有多少条目、其中多少条常驻、与完整加载每个条目相比紧凑索引节省了多少，以及上一次注入了什么。再往下依次是：各类别的占比、优先级分布、条目的新鲜度、汇总出的项目知识的健康状况、使用最多的条目，以及即将过期的条目。

## 五种记忆 {#kinds}

超级记忆会根据条目日后的使用方式，把每个条目归入合适的类别：

| 类别 | 保存的内容 | 示例 |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | 长期有效的事实、偏好、长期指令和决定 | “用繁体中文回答；代码保留英文” |
| <BzWenben jian="superMemory.catSkill" /> | 可以再次解决同类问题的可复用方法 | 如何安全地恢复损坏的 localStorage 数据 |
| <BzWenben jian="superMemory.catExperience" /> | 一条教训：对根本原因的推理，以及如何验证 | “多个功能同时失效时，先修复共享状态” |
| <BzWenben jian="superMemory.catTrajectory" /> | 一项任务的实际经过：目标、工具调用、错误和恢复 | 一次修复的 14 个步骤 |
| <BzWenben jian="superMemory.catResource" /> | 被修改的具体文件和位置 | <BzWenben jian="superMemory.editAction.edit" /> test.html |

并不是每段对话都会产生所有类别。修复一个 bug 通常会得到一条技能、一条经验、一条轨迹和若干资源，但不会产生普通记忆，因为其中没有长期有效的个人偏好。这让召回保持精确：之后的任务可以单独调用方法、教训、历史或文件记录。

## 优先级与生命周期 {#priorities}

| 优先级 | 有效期 |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | 永不过期。常驻条目始终为 P0。 |
| <BzWenben jian="superMemory.p190Days" /> | 如果没有再次被确认，30 天后过期。 |
| <BzWenben jian="superMemory.p230Days" /> | 如果没有再次被确认，7 天后过期。文件修改之类的短期细节一开始就处于这一级。 |

过期的条目不会被删除，而是变为 **<BzWenben jian="superMemory.dormant" />**。休眠条目仍然可以搜索，也可以恢复。当一条 P1 条目证明了自己的价值时，Breezell 会在它所在的行上显示 **↑P0** 按钮，建议将它设为永久。

## 记忆库 {#library}

<BzWenben jian="box.memory.library" />：<BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **筛选**：先搜索，再按优先级（P0 / P1 / P2）、按类别，以及按 <BzWenben jian="superMemory.active" /> 或 <BzWenben jian="superMemory.dormant" /> 缩小范围。
- **计数栏**：已加载的条目数、常驻配额，以及每个类别的活跃预算。使用 <BzWenben jian="superMemory.batchSelect" /> 可以勾选多个条目，一并删除。
- **条目行**：彩色圆点表示类别。标题后面依次是优先级标记、常驻条目的 **<BzWenben jian="superMemory.residentBadge" />** 徽标，以及最近 24 小时内新增条目的 **NEW** 徽标。第二行显示最后更新时间、类别、标签数量和来源。
- **展开一行**可以查看它的标签、<BzWenben jian="superMemory.l1Overview" />、<BzWenben jian="superMemory.whyRemembered" />、被确认和使用的次数，以及过期时间。<BzWenben jian="box.memory.showFull" /> 会再显示 <BzWenben jian="superMemory.l2Full" />。
- **优先级标记**（1）：点击它可以选择 <BzWenben jian="superMemory.p0Permanent" />、<BzWenben jian="superMemory.p190Days" /> 或 <BzWenben jian="superMemory.p230Days" />。
- 图钉用于将条目设为常驻；垃圾桶用于删除条目。

Breezell 发给 AI 的是每个条目的一行简短描述（L0），只有在需要时才加载概览或完整内容。总览页上的 <BzWenben jian="superMemory.tokenSavings" /> 就来源于此。

## 常驻记忆 {#resident}

常驻条目会注入到**每一次**请求中，无论这次请求是否与它有关。它适合 AI 必须始终记住的内容，例如架构规则、必须遵循的工作流程或明确的偏好。

1. 打开 <BzWenben jian="box.memory.library" />，找到该条目。
2. 点击该行上的图钉（<BzWenben jian="superMemory.residentOn" />）。

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- 该条目会变为 P0，获得 <BzWenben jian="superMemory.residentBadge" /> 徽标，计数栏会显示新的总数，例如 <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />。
- 最多可以有 12 个常驻条目。达到上限时，Breezell 会提示：<BzWenben jian="superMemory.residentLimitReached" />
- 要降低常驻条目的优先级，请先再次点击图钉（<BzWenben jian="superMemory.residentOff" />）；该条目会恢复到之前的优先级。

常驻条目应当简短，并且真正通用。临时的文件位置或一次性的任务细节不适合放在这里：它们会被添加到每一次请求中。

## 对话中的记忆 {#in-chat}

当超级记忆向某次请求注入条目时，你的消息下方会出现一行提示。点击它即可查看用到了哪些条目：

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="用繁体中文回答；代码和标识符保留英文" gaoliang="zhuru" biaoji="1" wen="你好" da="你好！今天想做些什么？" />

在这个例子中，一段全新的对话里只有一句“你好”，却注入了一个条目：常驻记忆。当请求需要时，还会加入相关条目：

<BzLiaotian zhuru="3|1|2" zhuruwen="用繁体中文回答；代码和标识符保留英文|通过带防护的 JSON 解析恢复损坏的 localStorage 状态|任务、筛选和计数器同时出错时，先修复共享状态" zhurukai wen="test2.html 里的阅读列表在重新加载后会丢失书籍，请修复它。" da="这和任务管理器里的故障是同一个问题：列表是用 String() 而不是 JSON.stringify 保存的。我会给解析加上防护、丢弃已损坏的值，并为每本书分配一个稳定的 id。" />

只有在确实注入了内容时，才会出现这一行。如果检索未能完成，这一轮会使用已有的内容继续，这一行也会注明这一点。

## 上下文注入 {#context}

<BzWenben jian="box.memory.context" />：<BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| 卡片 | 显示的内容 |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | 所选轮次的状态、注入了多少常驻条目和相关条目、它们的类别和范围，以及每个条目的详细程度（L0 / L1 / L2）和得分。 |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | 下一次请求将收到的紧凑索引，按类别分组，并附有估算的 Token 数。 |
| <BzWenben jian="superMemory.convTurns" /> | 当前对话的各个轮次。点击某一轮即可查看它的注入情况，并跳转到对话中的对应位置。 |

## 预算与维护 {#maintenance}

<BzWenben jian="box.memory.maintenance" />：<BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />：<BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />：<BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />：<BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />：以 `.zip` 的形式把整个记忆库迁移到另一台电脑。<BzWenben jian="box.memory.archiveImportDesc" />

## 示例：一次修复，在另一个应用中复用 {#example}

上面界面中的条目就是这样产生的。

1. **修复。** 在 `test.html` 中，一个小型任务管理器无法可靠地添加、删除、完成、筛选或保存任务。Breezell 把这些故障追溯到同一个共享状态模型，修复了它，并在浏览器中检查了整个流程。超级记忆首先把 `test.html` 中被修改的部分记录为 **P2 资源**，把修复的经过记录为一条 **P2 轨迹**。
2. **教训。** 当被问到“你从中学到了什么？”时，AI 列出了可复用的教训：修复共享状态的所有者，而不是逐个处理症状；用稳定的 id 来定位列表项；把保存的数据视为必须校验的边界。超级记忆存储了一条 **P1 技能**（带防护地保存和加载 localStorage 数据）和一条 **P1 经验**（先诊断共享状态，再进行端到端验证）。在更长或更有价值的修复中，它无需询问就会记录这类教训。
3. **复用。** 第一段对话已被删除。在一段新对话中，另一个应用（`test2.html` 中的阅读列表）出现了同一类 bug。Breezell 召回了这条技能和资源记录，把方法应用到新的 `books` 数据上，而不是照搬旧补丁，并验证了结果。

删除对话并不会删除超级记忆从中提取的内容，而且在一个应用中学到的方法被带到了另一个应用中。

## 每日额度用完时 {#quota}

超级记忆有每日额度。额度用完后，所有超级记忆页面都会显示 <BzWenben jian="box.memory.quotaPausedTitle" />。在额度恢复之前，对话不会再自动创建新条目；已有条目仍然可以查看和删除，你在 [Rules, Memories & Skills](/prompt-settings) 中自己编写的规则和记忆也不受影响。

如果套餐不包含超级记忆，这些页面会显示：

<BzJiyi ye="suoding" />

## 总结

- 超级记忆把对话提炼为记忆、技能、经验、轨迹和资源，并且不消耗你所用模型的 Token。
- 相关条目会被召回到之后的请求中；常驻条目（最多 12 个，始终为 P0）会进入每一次请求。
- 如果没有再次被确认，P1 保留 30 天，P2 保留 7 天；过期的条目会转入休眠，并且可以恢复。
- Box ▸ <BzWenben jian="box.memory.group" /> 包含总览、记忆库、上下文注入视图和维护页面。
