---
title: 問題解決
description: 為 macOS、Windows 或 Linux 選擇正確的 Breezell 下載版本，並解決 macOS 的「Breezell.app 已損毀」和「未識別的開發者」警告。
---

# 問題解決

本頁整理常見安裝與啟動問題的解決方法。日後遇到新的情況時會繼續補充。

::: tip 關於本頁的畫面
下方的下載頁面是根據 breezell.com 的原始碼以 HTML 重新繪製而成，官網為英文。macOS 對話框和終端機（Terminal）視窗則是依照你在 Mac 上會看到的樣子繪製。
:::

## 選擇正確的下載版本 {#download}

在 [breezell.com/download](https://breezell.com/download) 開啟下載頁面。頁面最上方會推薦適合你電腦的版本；在下方選擇你的平台，即可查看所有版本。點選這裡的分頁即可比較：

<BzXiazai gaoliang="fenye" biaoji="1" />

| 平台 | 版本 | 適用於 |
| --- | --- | --- |
| macOS | Apple Silicon | 搭載 M1、M2、M3、M4 或更新晶片的 Mac |
| macOS | Intel | 較舊的 Intel 架構 Mac |
| macOS | Universal | 兩者皆適用，屬於舊式版本 |
| Windows | x64 · System / ARM64 · System | 為這台電腦的所有使用者安裝；需要系統管理員權限 |
| Windows | x64 · User / ARM64 · User | 只為你自己的使用者帳號安裝；不需要系統管理員權限 |
| Linux | .deb | Ubuntu、Debian 及其衍生發行版（x64、ARM64、ARM32） |
| Linux | .rpm | Fedora、RHEL、CentOS 及其衍生發行版（x64、ARM64、ARM32） |

若要查看 Mac 使用的晶片，請打開蘋果選單 ▸ **關於這台 Mac（About This Mac）**。較舊的版本列在下載頁面底部的 **View past versions** 中。

## 在 macOS 上安裝 Breezell {#install-macos}

1. 從下載頁面下載適合你 Mac 的版本。
2. 開啟下載的映像檔，將 **Breezell.app** 拖到 **應用程式（Applications）**，並等待複製完成。
3. 從 **Finder ▸ 應用程式** 啟動 Breezell。

## 「Breezell.app 已損毀」或「未識別的開發者」 {#damaged}

macOS 會為從 App Store 以外下載的應用程式加上隔離屬性。在某些 Mac 上，即使應用程式並未損毀，macOS 也會因此拒絕開啟 Breezell，並顯示類似下面的警告：

<BzXiazai ye="jinggao" />

請點選 **取消（Cancel）**，而不是 **丟到垃圾桶（Move to Trash）**，然後依照下列步驟操作一次。在下載頁面選擇 macOS 時，也會顯示相同的步驟：

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. 開啟終端機 {#open-terminal}

按 **Command（⌘）+ 空白鍵** 開啟 Spotlight，輸入 **終端機** 並按 **Return** 鍵。也可以在 **應用程式 ▸ 工具程式（Utilities）▸ 終端機** 中找到它。

### 2. 移除 Breezell 的隔離屬性 {#remove-quarantine}

貼上這行指令，然後按 **Return** 鍵：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

終端機會要求輸入你的 Mac 管理者密碼。輸入密碼後按 **Return** 鍵；輸入時畫面不會顯示字元。

<BzXiazai ye="zhongduan" />

沒有任何輸出通常代表指令已成功執行。它只會移除 **Breezell.app** 的隔離屬性；Gatekeeper 和其他應用程式的安全檢查都會維持原狀。

### 3. 再次開啟 Breezell {#reopen}

回到 **應用程式**，啟動 Breezell。

::: warning 安全提示
只對從官方網站下載的 Breezell 這樣做。不要為來源不可信的應用程式移除隔離屬性。
:::

## 「No such file or directory」 {#no-such-file}

指令在 `/Applications/Breezell.app` 找不到應用程式。請將 Breezell 移到 **應用程式**，並確認它的名稱正好是 **Breezell.app**。如果你把它放在其他位置，請將指令中的 `/Applications/Breezell.app` 替換成它的實際路徑。

## 仍然無法解決？ {#contact}

請查看[已知問題回報](/known-issues)，或透過[聯絡頁面](https://breezell.com/contact)與我們聯絡，並提供你的作業系統、Breezell 版本，以及你看到的確切訊息。
