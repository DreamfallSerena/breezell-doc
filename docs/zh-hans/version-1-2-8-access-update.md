---
title: 1.2.8 版本调整说明
description: 从 1.2.8 版本开始，Entanglement 和 Teams 需要 5 位好友助力或开通任意付费套餐才能解锁。Agent 模式和自定义 API 不受影响。
---

# 1.2.8 版本调整说明

为了支持 Breezell 的长期运营，从 1.2.8 版本开始，Entanglement 和 Teams 改为通过邀请解锁。

::: tip 关于本页的界面示意
下面的 Breezell 界面是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。
:::

## 有哪些变化 {#changes}

- **Entanglement 和 Teams** 需要 5 名 Breezell 用户通过你的邀请链接为你助力后才能解锁，解锁永久有效。参见[邀请新用户教程](/invite-new-users)。
- **付费套餐**包含这两种模式，无需邀请。
- **Custom API 套餐用户**同样无需邀请。如果这两种模式对你来说仍处于锁定状态，请联系管理员。

在解锁之前，这两种模式在模式菜单中会显示一把锁，将鼠标悬停在上面会显示你的进度：

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

选择锁定的模式时，会显示 <BzWenben jian="chatMode.entanglementSendBlocked" />

## 保持不变的内容 {#unchanged}

- **Agent 模式**以及其他所有模式都和以前一样可以使用。
- **自定义 API（BYOK）** 依然免费，不会因为此次调整而收费。参见[自定义 API（BYOK）](/custom-api)。
- 其他所有功能均保持不变。

## 感谢支持 {#thanks}

感谢大家的理解与支持。我们会继续维护和完善 Breezell，让它能够长期稳定运行，同时尽可能减少对现有用户的影响。
