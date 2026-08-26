---
title: 提示词和技能设置
description: 在工作区或全局范围内配置规则、记忆、技能及相关 AI 行为。
---

# 提示词和技能设置

提示词和技能设置用于集中管理 Breezell 可以使用的指令、长期信息和可复用工作流程。

## 打开提示词和技能设置

图片中的箭头指向右上角工具栏中的 **Rules, Memories & Skills（规则、记忆和技能）** 按钮。它位于 **New Chat（新建对话）**（+）按钮右侧。

![提示词和技能设置入口](/prompt-settings/prompt-and-skill-settings-button.png)

点击该按钮即可打开设置面板。

## 工作区与全局范围

左侧目录将配置分为两个范围：

- **Workspace（工作区）：** 仅对当前项目生效。配置文件保存在项目的 **.breezell** 目录中，可以随工作区一同管理。
- **Global（全局）：** 对所有工作区生效，适合在每个项目中都要使用的个人偏好和通用工作流程。

请先选择范围，再选择 **Rules（规则）**、**Memories（记忆）**、**Skills（技能）** 或 **Commit（提交）**。页面标题旁的标签会显示当前生效范围。

## 规则

规则是 Breezell 在所选范围内需要持续遵循的自定义 AI 指令，可用于规定代码规范、必用工具、输出格式、项目限制及其他行为要求。

![工作区规则设置](/prompt-settings/rules-settings.png)

工作区规则保存在 **{workspace}/.breezell/rules/breezell.md**。建议使用具体且互不冲突的指令。右上角的 **Clear（清除）** 会删除当前规则范围内的内容。

## 记忆

记忆用于保存需要在后续对话中继续使用的事实、偏好、决定和项目背景。**Memories（记忆）** 右侧的数字表示当前范围内已有的记忆数量。

![工作区记忆编辑器](/prompt-settings/memory-settings.png)

每次输入一条清晰、独立的记忆，然后点击 **Save（保存）** 或按 **Ctrl+Enter**。工作区记忆保存在 **{workspace}/.breezell/memories/workspace_memories.md**。只有需要跨项目使用的信息才建议保存到全局记忆。

## 技能

技能是可复用的指令包，用于教 Breezell 完成特定任务或工作流程。请在所需范围下打开 **Skills（技能）** 进行创建和管理。

![创建工作区技能](/prompt-settings/skill-creation.png)

创建技能时：

1. 输入唯一的技能名称，只能使用小写字母和连字符。
2. 填写简短描述，明确说明该技能的用途和适用场景。
3. 在主编辑区域中编写技能指令、执行步骤、限制条件和预期输出。
4. 点击 **Create Skill（创建技能）**。

工作区技能保存在 **{workspace}/.breezell/skills/<name>/SKILL.md**。每个技能应只负责一种可重复执行的任务，便于 Breezell 准确选择并稳定调用。

## 提交

**Commit（提交）** 用于分别管理工作区和全局范围内与提交相关的配置。项目专用要求应放在工作区，跨项目复用的偏好应放在全局。
