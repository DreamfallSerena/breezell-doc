---
title: 语言设置
description: 在 Box 中更改 Breezell 界面的语言，以及编辑器本身的显示语言。
---

# 语言设置

Breezell 的界面提供八种语言：<BzWenben jian="general.language.en" />、<BzWenben jian="general.language.ja" />、<BzWenben jian="general.language.ko" />、<BzWenben jian="general.language.es" />、<BzWenben jian="general.language.ptBR" />、<BzWenben jian="general.language.ru" />、<BzWenben jian="general.language.zh" /> 和 <BzWenben jian="general.language.zhTW" />。你可以在安装 Breezell 时选择一种语言，之后也可以随时更改。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的。界面文字跟随本页语言；本页中的语言菜单可以直接操作，并且会像在 Breezell 中一样切换它所在的界面。
:::

## 两种语言设置

Breezell 窗口分为两层，每一层都有各自的语言设置：

| 层级 | 涵盖范围 | 更改位置 |
| --- | --- | --- |
| **Breezell 界面** | Box、对话、模型和模式选择器，以及其他 Breezell 面板 | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **编辑器显示语言** | 来自 Code – OSS 的部分：菜单栏、命令面板、内置的设置编辑器和键盘快捷键编辑器 | `Configure Display Language` 加语言包 |

日常使用的大部分内容都属于 Breezell 界面，因此通常只需要更改第一项设置。

## 更改 Breezell 界面语言

### 1. 打开 Box

在标题栏左侧的切换按钮中点击 **Box**。也可以从右上角的齿轮菜单中选择 <BzWenben jian="box.title" />，或者在命令面板中运行 `Breezell: Open Settings`。

<BzBiaotilan gaoliang="box" />

### 2. 打开通用 & 语言页面

在 Box 侧栏中展开 <BzWenben jian="box.title" /> 分组，点击 <BzWenben jian="tab.general" />。

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. 选择语言

页面上的第一张卡片是 <BzWenben jian="general.language.title" />。打开该行右侧的菜单，选择一种语言。可以在这里试一试：

<BzChangguiye gaoliang="yuyan" biaoji="3" />

卡片的说明文字告诉你接下来会发生什么：<BzWenben jian="general.language.desc" />

每种语言都以它自己的名称显示，因此即使当前界面使用的是你看不懂的语言，你也总能找到自己的语言。

## 更改编辑器显示语言

菜单栏、命令面板以及其他来自 Code – OSS 的部分跟随编辑器的显示语言。更改方法如下：

1. 按 `Ctrl+Shift+P`（macOS 上为 `Cmd+Shift+P`）打开命令面板。
2. 运行 `Configure Display Language`。
3. 选择你的语言。如果该语言尚未安装，选择安装即可，Breezell 会从扩展市场下载对应的语言包。
4. 按照提示重启 Breezell。

这两项设置相互独立。例如，你可以让编辑器保持英文，同时将 Breezell 设为 <BzWenben jian="general.language.zhTW" />。

## 通用 & 语言页面的其他内容

同一页面上还有两张卡片：

- <BzWenben jian="general.dataManagement.title" />：导入、导出或重置你的 Breezell 设置（<BzWenben jian="general.tabs.settings" />）和对话历史（<BzWenben jian="general.tabs.chats" />）。设置导出为 `.json` 文件；对话导出为 `.zip` 文件，其中还包含每个对话的附件和检查点。导入对话时，Breezell 会询问是与当前对话合并，还是覆盖当前对话。重置时需要再点击一次进行确认，然后才会删除任何内容。
- <BzWenben jian="general.tabs.ide" />：通往编辑器自身的设置、键盘快捷键和颜色主题的快捷入口。

## 总结

1. 点击标题栏中的 **Box**。
2. 打开 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />。
3. 在 <BzWenben jian="general.language.title" /> 卡片中选择一种语言，设置会立即生效。
4. 如果还希望菜单和命令面板也使用该语言，运行 `Configure Display Language` 并重启。
