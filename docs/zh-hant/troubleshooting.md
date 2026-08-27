---
title: 問題解決
description: Breezell 常見安裝與啟動問題的解決方法，包括 macOS 提示應用程式已損壞。
---

# 問題解決

這裡集中整理 Breezell 常見安裝與啟動問題的處理方法。後續發現新的典型問題時會繼續補充。

## 在 macOS 上安裝 Breezell

1. 開啟 Breezell 下載頁面，切換到 **macOS**。
2. 如果 Mac 使用 M1、M2、M3 或更新的 Apple 晶片，請下載 **Apple Silicon** 版本。
3. 開啟下載好的安裝映像檔，將 **Breezell.app** 拖入 **應用程式（Applications）**，等待複製完成，然後從 **Finder → 應用程式** 啟動。

## 提示「Breezell.app 已損壞」或「無法驗證開發者」

macOS 可能會為從 App Store 以外下載的應用程式加入隔離屬性。出現此提示不一定代表應用程式檔案真的損壞。

![macOS 安裝 Breezell 及應用程式損壞提示解決方法](/troubleshooting/macos-installation-guide.png)

### 1. 開啟終端機

按 **Command（⌘）+ 空白鍵**，搜尋並開啟 **終端機（Terminal）**。也可以前往 **應用程式 → 工具程式 → 終端機**。

### 2. 移除 Breezell 的隔離屬性

貼上下列指令並按 **Return（輸入）**：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

依提示輸入 Mac 管理員密碼，再按一次 **Return**。輸入密碼時畫面不會顯示字元。如果指令結束後沒有輸出，通常代表執行成功。

此指令只移除 **Breezell.app** 的隔離屬性，不會關閉 Gatekeeper，也不會改變其他應用程式的安全檢查。

### 3. 重新開啟 Breezell

返回 **應用程式** 資料夾，再次啟動 Breezell。

::: warning 安全提示
僅對從 Breezell 官方網站下載的 Breezell 使用此指令。不要為來源不可信的應用程式移除隔離屬性。
:::

## 提示「No such file or directory」

請先將 Breezell 移入 **應用程式**，並確認名稱正好是 **Breezell.app**。如果安裝在其他位置，請將 `/Applications/Breezell.app` 替換為實際路徑。
