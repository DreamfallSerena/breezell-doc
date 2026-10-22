---
title: 提示词和技能设置
description: 为 Breezell 设置长期指令、记忆、可复用技能和提交信息风格，既可以只针对当前项目，也可以对所有项目生效。
---

# 提示词和技能设置

Breezell 把给 AI 的四类长期指令集中放在一个面板中，即 **Rules, Memories & Skills**：

| | 是什么 | 使用方式 |
| --- | --- | --- |
| **Rules** | AI 必须遵守的指令，例如编码规范或回答所用的语言 | 每次请求都会使用 |
| **Memories** | 带日期的笔记：需要跨对话保留的事实和决定 | 作为背景笔记；以你最新的要求为准 |
| **Skills** | 针对特定工作的分步操作指南，例如撰写发布说明 | 任务匹配时由 AI 加载 |
| **Commit** | AI 生成的 Git 提交信息应有的样式 | 生成提交信息时使用 |

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。面板中的导航可以直接操作。Rules、Memories、Skills、Commit 等标签在 Breezell 中同样是英文。
:::

## 打开面板

点击对话面板顶部的 **Skills & Memory** 按钮（笔记本图标），它位于 **New Chat**（+）和 **Chat History** 之间。

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

也可以从 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" /> 打开：该页面的第一张卡片就是 <BzWenben jian="box.mcp.openSkillsMemory" />。

## 工作区与全局

面板左侧分为两组：

- <BzWenben jian="common.workspace" />：只对当前打开的项目生效。文件保存在项目的 `.breezell` 文件夹中，因此可以提交到仓库，与团队共享。没有打开文件夹时，这一组显示为灰色。
- <BzWenben jian="common.global" />：对这台电脑上的所有项目生效。文件保存在用户主目录下的 `.breezell` 中。

在左侧选择范围和类别。顶部标题会显示你正在编辑的是哪一项，底部的路径则显示它保存在哪个文件中。

<BzGuize />

切换页面、离开编辑框或关闭面板时，内容会自动保存。右上角的 <BzWenben jian="rulesMemories.clear" /> 会清空当前页面；需要点击两次进行确认。

## 规则

规则就是普通的 Markdown。请写简短、具体且互不矛盾的指令，例如：

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| 范围 | 文件 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning 工作区规则会取代全局规则
当打开的项目有工作区规则时，Breezell 只发送工作区规则，不再附带全局规则。全局规则只用于没有工作区规则的项目。如果某个项目也需要部分全局规则，请把它们复制到该项目的工作区规则中。
:::

在包含多个文件夹的工作区中，每个文件夹的规则都会生效。Breezell 读取的是已保存的文件，因此未保存的草稿永远不会发送给 AI。

## 记忆

记忆是简短、带日期的笔记，记录决定、偏好以及项目的搭建方式等。AI 也可以通过它的 `update_memory` 工具自行在这里添加笔记。

Breezell 把记忆当作笔记，而不是规则。当某条记忆与你最新的要求或当前代码不一致时，AI 会以你的要求和代码为准，并主动提出更新这条记忆。必须始终遵守的内容请写进 Rules。

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. 打开 <BzWenben jian="common.workspace" /> ▸ Memories（或 <BzWenben jian="common.global" /> ▸ Memories）。
2. 点击 <BzWenben jian="rulesMemories.addMemory" />。
3. 每条记忆只写一件事，然后按 `Ctrl+Enter`（或点击 Save）。

每条记忆都是一张带日期的卡片。将鼠标悬停在卡片上即可删除它。左侧列表中 Memories 旁边的数字表示记忆的条数。

| 范围 | 文件 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

记忆功能需要包含超级记忆的套餐。没有该套餐时，页面会显示 <BzWenben jian="superMemory.proRequired" />。关于 AI 自动收集的记忆，请参阅[超级记忆](/super-memory)。

## 技能

技能是一个包含 `SKILL.md` 文件的文件夹。Breezell 会把每个已开启技能的名称和描述提供给 AI；当某个任务与描述相符时，AI 会加载该技能的完整指令并按其执行。因此，好的描述应当写清**何时**使用这个技能。

### 创建技能

1. 打开 <BzWenben jian="common.workspace" /> ▸ Skills（或 <BzWenben jian="common.global" /> ▸ Skills），然后点击 <BzWenben jian="skills.newSkill" />。
2. 输入名称：只能使用小写字母和连字符，例如 `release-notes`。
3. 输入一行描述，说明这个技能的用途。
4. 编写指令：步骤、规则和预期结果。
5. 点击 <BzWenben jian="skills.createSkill" />。

<BzGuize fenye="xinjineng" />

| 范围 | 文件夹 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

技能还可以在 `SKILL.md` 旁边附带更多文件（参考资料、脚本）。技能详情页会列出这些文件，点击即可打开。

### 导入技能

把文件拖到技能列表上即可导入，列表中会显示 <BzWenben jian="skills.dropZipPrompt" />。一个 `.zip` 可以同时包含多个技能文件夹；单个 `.md` 文件会成为一个以文件名命名的技能。

### 在对话中使用技能

点击对话输入框下方那一行中的 **Skills** 按钮（图层图标）：

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />：Breezell 自带的技能，例如 `brainstorming` 或 `requesting-code-review`。它们受 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" /> 中的 **Superpowers Skills** 开关控制。
- <BzWenben jian="skills.myTab" />：你的工作区技能和全局技能。
- 开关用于开启或关闭某个技能。已关闭的技能不会提供给 AI。
- 箭头按钮（<BzWenben jian="inputToolbar.referenceSkill" />）会把该技能添加到你的消息中，让 AI 在这次请求中使用它。

也可以在输入框中输入 `/` 打开技能菜单。

开启或关闭技能或 MCP 服务器会改变提示词的开头部分，可能导致提供商的提示词缓存失效。最好在开始长对话之前就设置好所需内容，而不是在对话进行到一半时再调整。

## 提交信息

Commit 页面决定了你生成 Git 提交信息时，Breezell 会怎样撰写它。

<BzGuize fenye="commit" />

- 页面为空时，使用 Breezell 内置的 Conventional Commits 提示词。
- 页面中的文字会完全**取代**内置提示词。Breezell 仍会向模型提供 diff、分支和近期提交，所以你只需描述风格：语言、格式、长度。
- <BzWenben jian="common.workspace" /> 提示词优先于 <BzWenben jian="common.global" /> 提示词。
- <BzWenben jian="rulesMemories.clear" /> 会恢复内置提示词。

| 范围 | 文件 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## 小结

- Rules：AI 必须始终做到的事。工作区规则会取代全局规则。
- Memories：需要记住的事实，每张卡片一条。
- Skills：任务与描述相符时由 AI 加载的操作指南；可在对话输入框下方开启或关闭。
- Commit：你的提交信息风格，会取代内置提示词。
