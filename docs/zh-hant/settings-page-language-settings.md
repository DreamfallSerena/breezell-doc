---
title: 語言設定
description: 在 Box 中變更 Breezell 介面的語言，以及編輯器本身的顯示語言。
---

# 語言設定

Breezell 的介面提供八種語言：<BzWenben jian="general.language.en" />、<BzWenben jian="general.language.ja" />、<BzWenben jian="general.language.ko" />、<BzWenben jian="general.language.es" />、<BzWenben jian="general.language.ptBR" />、<BzWenben jian="general.language.ru" />、<BzWenben jian="general.language.zh" /> 和 <BzWenben jian="general.language.zhTW" />。你可以在安裝 Breezell 時選擇其中一種，之後也能隨時變更。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成。畫面文字會跟著本頁的語言顯示；本頁的語言選單可以互動，切換後會改變它所屬的那個畫面，就和在 Breezell 中一樣。
:::

## 兩種語言

Breezell 視窗分成兩層，每一層都有各自的語言設定：

| 層級 | 涵蓋範圍 | 變更位置 |
| --- | --- | --- |
| **Breezell 介面** | Box、對話、模型與模式選擇器，以及其他 Breezell 面板 | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **編輯器顯示語言** | 來自 Code – OSS 的部分：功能表列、命令選擇區、內建的設定編輯器與鍵盤快速鍵編輯器 | `Configure Display Language` 加上語言套件 |

你每天用到的大多是 Breezell 介面，所以通常只需要調整第一項設定。

## 變更 Breezell 介面語言

### 1. 開啟 Box

點選標題列左側切換器中的 **Box**。你也可以從右上角的齒輪選單選擇 <BzWenben jian="box.title" />，或在命令選擇區中執行 `Breezell: Open Settings`。

<BzBiaotilan gaoliang="box" />

### 2. 開啟「一般 & 語言」

在 Box 側邊欄中，展開 <BzWenben jian="box.title" /> 群組，再點選 <BzWenben jian="tab.general" />。

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. 選擇語言

頁面上的第一張卡片是 <BzWenben jian="general.language.title" />。開啟該列右側的選單，然後選擇一種語言。你可以直接在這裡試試看：

<BzChangguiye gaoliang="yuyan" biaoji="3" />

卡片的說明會告訴你接下來的變化：<BzWenben jian="general.language.desc" />

每種語言都以該語言本身的名稱顯示，因此即使目前的介面是你看不懂的語言，也一定找得到你要的語言。

## 變更編輯器顯示語言

功能表列、命令選擇區，以及其他來自 Code – OSS 的部分，會跟著編輯器的顯示語言。變更方式如下：

1. 按下 `Ctrl+Shift+P`（macOS 為 `Cmd+Shift+P`）開啟命令選擇區。
2. 執行 `Configure Display Language`。
3. 選擇你的語言。如果尚未安裝，請選擇安裝；Breezell 會從擴充功能市集下載語言套件。
4. 出現提示時，重新啟動 Breezell。

這兩項設定彼此獨立。例如，你可以讓編輯器維持英文，同時以 <BzWenben jian="general.language.zhTW" /> 使用 Breezell。

## 「一般 & 語言」頁面的其他內容

同一頁還有另外兩張卡片：

- <BzWenben jian="general.dataManagement.title" />：匯入、匯出或重設你的 Breezell 設定（<BzWenben jian="general.tabs.settings" />）與聊天紀錄（<BzWenben jian="general.tabs.chats" />）。設定會匯出為 `.json` 檔案；聊天則會匯出為 `.zip`，其中也包含每段對話的附件與檢查點。匯入聊天時，Breezell 會詢問要與目前的聊天合併，還是取代它們。重設時需要再點選一次確認，才會刪除任何資料。
- <BzWenben jian="general.tabs.ide" />：通往編輯器本身的設定、鍵盤快速鍵與色彩佈景主題的捷徑。

## 摘要

1. 點選標題列中的 **Box**。
2. 開啟 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />。
3. 在 <BzWenben jian="general.language.title" /> 卡片中選擇一種語言，設定會立即生效。
4. 如果也想讓功能表和命令選擇區使用該語言，請執行 `Configure Display Language` 並重新啟動。
