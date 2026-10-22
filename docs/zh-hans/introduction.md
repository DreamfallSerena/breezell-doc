---
title: 介绍
description: 认识 Breezell，一款基于 Code – OSS 构建的 AI 代码编辑器，从安装开始，完成你的第一次 AI 辅助修改。
---

# 介绍

Breezell 是基于 VS Code（Code – OSS）构建的 AI 代码编辑器。编辑器、你的扩展和快捷键都和你熟悉的一样；在它们旁边，还有一个能够自主读取项目、编辑文件、运行命令和使用工具的 AI。

::: tip 关于本页的界面示意
本指南中的 Breezell 界面并非截图，而是依照 Breezell 源码用 HTML 重新搭建的。界面文字跟随本页语言，配色跟随本站的浅色 / 深色切换。带编号的橙色角标只是本指南添加的标注。
:::

## Breezell 窗口

<BzChuangti wen="启动时只加载一次配置文件，并把结果缓存起来。" da="已完成。config.ts 现在只读取一次文件并保留解析结果，index.ts 会在服务器启动前调用 loadConfig()。" />

| | 部分 | 说明 |
| --- | --- | --- |
| 1 | **Box \| Agent** | 在 **Agent** 页面（你的代码和 AI）与 **Box** 页面（设置和数据）之间切换整个窗口。 |
| 2 | 编辑器 | Code – OSS 编辑器，包括标签页、文件资源管理器、搜索、Git 和扩展。 |
| 3 | 对话 | 你与 AI 交流的地方。对话也可以作为编辑器标签页，在代码旁边打开。 |
| 4 | 模式 | AI 在这次对话中可以做多少事，从普通聊天到自主运行的 Agent。参见[模式](#modes)。 |
| 5 | 模型 | 由哪个模型来回答，以及它的上下文、推理和速度选项。 |

### Agent 和 Box

**Agent** 是你工作的地方：编辑器和对话并排显示。

**Box** 是管理页面。它的侧栏中包含 <BzWenben jian="box.title" />（模型与提供商、功能选项、通用与语言设置、MCP 与技能、隐私、实验性功能），以及与你的工作相关的数据：<BzWenben jian="box.review.group" />、<BzWenben jian="box.memory.group" />、<BzWenben jian="box.storage.group" />、<BzWenben jian="box.perf.group" />、<BzWenben jian="box.database.group" /> 和 <BzWenben jian="box.vault.group" />。在 Box 页面时，对话依然保持打开。

<BzHezi />

## 模式 {#modes}

对话输入框左下角的模式胶囊决定了 AI 可以做什么。每种模式在输入框中都有自己的颜色：

| 模式 | Breezell 中的说明 |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" />——<BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" />——<BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" />——<BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" />——<BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" />——<BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement 和 Teams 需要 5 个好友助力后解锁，开通任意付费套餐也可以解锁。Teams 和 DarkSelene 消耗的 token 远多于其他模式。[模式选择](/mode-selection)介绍了不同模式的适用场景。

## 模型

Breezell 将模型分为四类提供商：

- **Breezell**：Breezell 官方模型，消耗你的 Breezell 额度。
- **账号登录**：你已有的账号，例如 ChatGPT（Codex）、GitHub Copilot、Kimi、Grok、Gemini、DeepSeek、MiniMax 或 OpenRouter。
- **API 提供商**：使用你自己密钥的各厂商官方 API，例如 Anthropic、OpenAI、Gemini 或 DeepSeek。
- **OpenAI 兼容**：最多 50 个槽位，用于中转站、网关和自建代理。

除 Breezell 模型外，其他模型都使用你自己的密钥或账号。[自定义 API（BYOK）](/custom-api)以 Claude 模型为例完整介绍了配置过程。

## Breezell 的其他功能

- **超级记忆**：跨对话的长期记忆，并附带一个可浏览、可编辑的记忆库。参见[超级记忆](/super-memory)。
- **Breezell Mind**：把较早的历史折叠成工作笔记，让长对话始终控制在预算之内，原始记录仍完整保存在磁盘上。
- **代码审查**：用于审查 AI 所做更改的页面，提供逐文件差异对比和一键回滚。
- **Breezell Browser**：内置浏览器，AI 可以打开、读取并操作它。
- **MCP 与技能**：通过 Model Context Protocol 连接外部工具，并在不同项目之间复用技能。参见[提示词和技能设置](/prompt-settings)。
- **数据库**：直接在编辑器中连接 SQLite、MySQL、PostgreSQL、SQL Server、Oracle、MariaDB、MongoDB 和 Redis。
- **保险箱**：把中转站地址和密钥保存在系统钥匙串中，并在需要的地方自动填入。
- **Image Studio**：生成图片和视频。
- **热更新**：新版本直接在编辑器内下载，重启后即可生效，无需重新安装。

## 快速开始

1. 下载适用于你所用平台的 Breezell 并安装。
2. 登录你的 Breezell 账号。
3. 选择界面语言。参见[语言设置](/settings-page-language-settings)。
4. 选择模型：可以直接使用 Breezell 模型，也可以通过[自定义 API（BYOK）](/custom-api)使用你自己的密钥。
5. 打开一个项目文件夹，在对话输入框下方选择模式和模型，描述你想要完成的事，然后发送。

> Breezell 基于 Code – OSS（MIT 许可证）构建。VS Code 和 Visual Studio Code 是 Microsoft Corporation 的商标。Breezell 与 Microsoft 没有关联，也未获得 Microsoft 的认可。
