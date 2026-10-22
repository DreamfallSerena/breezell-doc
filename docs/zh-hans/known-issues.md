---
title: 已知问题反馈
description: Breezell 1.2.8 中发现的问题及其状态。所有问题均已修复。
---

# 已知问题反馈

以下问题是在 Breezell 1.2.8 版本中发现的，目前已全部修复。如果你仍然遇到其中某个问题，请更新到最新版本。

| 问题 | 状态 | 说明 |
| --- | --- | --- |
| 部分对话无法加载 | 已修复 | 没有任何数据丢失：这些对话及其内容都是安全的。 |
| Entanglement 的输出格式不正确 | 已修复 | 参见 [Entanglement 模式](/entanglement-mode-overview)。 |
| 意外崩溃 | 已修复 | |
| 内置浏览器显示空白页面 | 已修复 | 参见 [Breezell Browser](/dialog-box-overview#browser)。 |
| Analyze 模式可能在回答末尾残留标签 | 已修复 | 参见 [Analyze](/mode-selection#analyze)。 |
| 自定义上下文窗口未应用到 Codex 模型 | 已修复 | 将 `gpt-5.6-sol` 设置为 512K 后，新对话中显示的上限仍为 272K。现在 Breezell 会应用并显示所配置的窗口。参见[上下文、推理与 Fast](/custom-api#context-reasoning-and-fast)。 |
| Grok 账号登录显示的额度有误 | 已修复 | |
| 切换上下文窗口后自动压缩未运行 | 已修复 | 对话会再次按预期进行压缩。参见[上下文用量与压缩](/dialog-box-overview#context)。 |
| 下拉菜单显示原生样式且边框过窄 | 已修复 | |
| Kimi 模型的推理强度设置不起作用 | 已修复 | |
| 发送消息时对话界面可能卡顿 | 已修复 | |

如果某项功能没有按照本指南所述正常工作，请参见[问题解决](/troubleshooting)，或联系我们，并告知你的 Breezell 版本和你看到的情况。

感谢你的耐心与反馈。
