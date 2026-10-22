---
title: 问题解决
description: 为 macOS、Windows 或 Linux 选择合适的 Breezell 下载版本，并解决 macOS 上的“Breezell.app 已损坏”和“身份不明的开发者”警告。
---

# 问题解决

本页汇总了常见安装与启动问题的解决方法。遇到新的情况时，我们会继续补充。

::: tip 关于本页的界面示意
下面的下载页面是依照 breezell.com 的源码用 HTML 重新搭建的，页面为英文。macOS 对话框和终端（Terminal）窗口则是按照你在 Mac 上会看到的样子绘制的。
:::

## 选择合适的下载版本 {#download}

打开下载页面 [breezell.com/download](https://breezell.com/download)。页面顶部会推荐适合你电脑的版本；在下方选择你的平台，即可看到全部版本。点击这里的标签页可以对比它们：

<BzXiazai gaoliang="fenye" biaoji="1" />

| 平台 | 版本 | 适用于 |
| --- | --- | --- |
| macOS | Apple Silicon | 搭载 M1、M2、M3、M4 或更新芯片的 Mac |
| macOS | Intel | 较旧的 Intel 芯片 Mac |
| macOS | Universal | 两者通用，属于旧版构建 |
| Windows | x64 · System / ARM64 · System | 为这台电脑的所有用户安装；需要管理员权限 |
| Windows | x64 · User / ARM64 · User | 仅为你自己的用户账户安装；无需管理员权限 |
| Linux | .deb | Ubuntu、Debian 及其衍生发行版（x64、ARM64、ARM32） |
| Linux | .rpm | Fedora、RHEL、CentOS 及其衍生发行版（x64、ARM64、ARM32） |

要查看 Mac 使用的芯片，请打开苹果菜单 ▸ **关于本机（About This Mac）**。较早的版本列在下载页面底部的 **View past versions** 中。

## 在 macOS 上安装 Breezell {#install-macos}

1. 从下载页面下载适合你 Mac 的版本。
2. 打开下载好的磁盘映像，将 **Breezell.app** 拖入 **应用程序（Applications）**。等待复制完成。
3. 从 **访达（Finder） ▸ 应用程序** 启动 Breezell。

## 提示“Breezell.app 已损坏”或“身份不明的开发者” {#damaged}

macOS 会给从 App Store 以外下载的应用加上隔离属性。在某些 Mac 上，这会导致 macOS 拒绝打开 Breezell，并显示类似下面的警告，尽管应用本身并没有损坏：

<BzXiazai ye="jinggao" />

请点击 **取消（Cancel）**，而不是 **移到废纸篓（Move to Trash）**，然后按照下面的步骤操作一次。在下载页面选择 macOS 时，也会显示同样的步骤：

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. 打开终端 {#open-terminal}

按下 **Command（⌘）+ 空格键** 打开聚焦（Spotlight），输入 **终端**，然后按下 **Return** 键。你也可以在 **应用程序 ▸ 实用工具（Utilities） ▸ 终端** 中找到它。

### 2. 移除 Breezell 的隔离属性 {#remove-quarantine}

粘贴这条命令，然后按下 **Return** 键：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

终端会要求输入 Mac 的管理员密码。输入密码后按下 **Return** 键；输入时字符不会显示出来。

<BzXiazai ye="zhongduan" />

没有任何输出通常表示命令执行成功。它只会移除 **Breezell.app** 的隔离属性；Gatekeeper 以及其他应用的安全检查都保持不变。

### 3. 再次打开 Breezell {#reopen}

回到 **应用程序**，启动 Breezell。

::: warning 安全提示
仅对从官方网站下载的 Breezell 执行此操作。不要为来源不可信的应用移除隔离属性。
:::

## 提示“No such file or directory” {#no-such-file}

命令在 `/Applications/Breezell.app` 找不到应用。请把 Breezell 移入 **应用程序**，并确认它的名称正好是 **Breezell.app**。如果你把它放在其他位置，请将命令中的 `/Applications/Breezell.app` 替换为它的实际路径。

## 仍然无法解决？ {#contact}

请查看[已知问题反馈](/known-issues)，或通过[联系页面](https://breezell.com/contact)联系我们，并附上你的操作系统、Breezell 版本以及你看到的确切提示信息。
