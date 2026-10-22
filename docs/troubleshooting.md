---
title: Troubleshooting
description: Pick the right Breezell download for macOS, Windows or Linux, and fix the macOS “Breezell.app is damaged” and “unidentified developer” warnings.
---

# Troubleshooting

This page collects solutions for common installation and startup problems. More cases will be added as they come up.

::: tip About the screens on this page
The download page below is rebuilt in HTML from the source code of breezell.com, which is in English. The macOS dialog and the Terminal window are drawn to show what you will see on a Mac.
:::

## Choose the right download {#download}

Open the download page at [breezell.com/download](https://breezell.com/download). It recommends the build for your computer at the top; below, pick your platform to see all builds. Click the tabs here to compare them:

<BzXiazai gaoliang="fenye" biaoji="1" />

| Platform | Build | For |
| --- | --- | --- |
| macOS | Apple Silicon | Macs with an M1, M2, M3, M4 or newer chip |
| macOS | Intel | Older Intel-based Macs |
| macOS | Universal | Both, as a legacy build |
| Windows | x64 · System / ARM64 · System | Installs for all users of the computer; needs administrator rights |
| Windows | x64 · User / ARM64 · User | Installs for your user only; no administrator rights needed |
| Linux | .deb | Ubuntu, Debian and derivatives (x64, ARM64, ARM32) |
| Linux | .rpm | Fedora, RHEL, CentOS and derivatives (x64, ARM64, ARM32) |

To check your Mac's chip, open the Apple menu ▸ **About This Mac**. Older releases are listed under **View past versions** at the bottom of the download page.

## Install Breezell on macOS {#install-macos}

1. Download the build for your Mac from the download page.
2. Open the downloaded image and drag **Breezell.app** into **Applications**. Wait until the copy has finished.
3. Start Breezell from **Finder ▸ Applications**.

## “Breezell.app is damaged” or “unidentified developer” {#damaged}

macOS marks apps downloaded outside the App Store with a quarantine flag. On some Macs this makes macOS refuse to open Breezell with a warning like this one, even though the app is not damaged:

<BzXiazai ye="jinggao" />

Click **Cancel**, not **Move to Trash**, and follow the steps below once. The same steps are shown on the download page when macOS is selected:

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. Open Terminal {#open-terminal}

Press **Command (⌘) + Space** to open Spotlight, type **Terminal** and press **Return**. You can also find it in **Applications ▸ Utilities ▸ Terminal**.

### 2. Remove Breezell's quarantine flag {#remove-quarantine}

Paste this command and press **Return**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Terminal asks for your Mac administrator password. Type it and press **Return**; the characters are not shown while you type.

<BzXiazai ye="zhongduan" />

No output usually means the command worked. It removes the quarantine flag from **Breezell.app** only; Gatekeeper and the security checks for other apps stay as they are.

### 3. Open Breezell again {#reopen}

Go back to **Applications** and start Breezell.

::: warning Security
Do this only for Breezell downloaded from the official website. Do not remove the quarantine flag from apps whose source you do not trust.
:::

## “No such file or directory” {#no-such-file}

The command could not find the app at `/Applications/Breezell.app`. Move Breezell into **Applications** and check that it is named exactly **Breezell.app**. If you keep it somewhere else, replace `/Applications/Breezell.app` in the command with its actual path.

## Still stuck? {#contact}

Check [Known Issues](/known-issues), or contact us through the [contact page](https://breezell.com/contact) with your operating system, the Breezell version and the exact message you see.
