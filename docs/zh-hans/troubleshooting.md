---
title: 问题解决
description: Breezell 常见安装与启动问题的解决方法，包括 macOS 提示应用已损坏。
---

# 问题解决

这里集中整理 Breezell 常见安装与启动问题的处理方法。后续发现新的典型问题时会继续补充。

## 在 macOS 上安装 Breezell

1. 打开 Breezell 下载页面，切换到 **macOS**。
2. 如果 Mac 使用 M1、M2、M3 或更新的 Apple 芯片，请下载 **Apple Silicon** 版本。
3. 打开下载好的安装镜像，将 **Breezell.app** 拖入 **应用程序（Applications）**，等待复制完成，然后从 **访达 → 应用程序** 启动。

## 提示“Breezell.app 已损坏”或“无法验证开发者”

macOS 可能会为从 App Store 以外下载的应用添加隔离属性。出现该提示并不一定代表应用文件真的损坏。

![macOS 安装 Breezell 及应用损坏提示解决方法](/troubleshooting/macos-installation-guide.png)

### 1. 打开终端

按 **Command（⌘）+ 空格键**，搜索并打开 **终端（Terminal）**。也可以前往 **应用程序 → 实用工具 → 终端**。

### 2. 移除 Breezell 的隔离属性

粘贴下面的命令并按 **Return（回车）**：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

按提示输入 Mac 管理员密码，再按一次 **Return**。输入密码时屏幕不会显示字符。如果命令结束后没有输出，通常表示执行成功。

该命令只移除 **Breezell.app** 的隔离属性，不会关闭 Gatekeeper，也不会改变其他应用的安全检查。

### 3. 重新打开 Breezell

返回 **应用程序** 文件夹，再次启动 Breezell。

::: warning 安全提示
仅对从 Breezell 官方网站下载的 Breezell 使用该命令。不要为来源不可信的应用移除隔离属性。
:::

## 提示“No such file or directory”

请先把 Breezell 移入 **应用程序**，并确认名称正好是 **Breezell.app**。如果安装在其他位置，请把 `/Applications/Breezell.app` 替换为实际路径。
