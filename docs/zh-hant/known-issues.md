---
title: 已知問題回報
description: Breezell 1.2.8 中發現的問題及其狀態。所有問題皆已修復。
---

# 已知問題回報

以下問題是在 Breezell 1.2.8 版本中發現的。所有問題皆已修復；如果你仍遇到其中任何一個，請更新到最新版本。

| 問題 | 狀態 | 詳細資訊 |
| --- | --- | --- |
| 部分對話無法載入 | 已修復 | 沒有遺失任何資料：對話及其內容都安全無虞。 |
| Entanglement 的輸出格式不正確 | 已修復 | 請參閱 [Entanglement 模式](/entanglement-mode-overview)。 |
| 意外當機 | 已修復 | |
| 內建瀏覽器顯示空白頁面 | 已修復 | 請參閱 [Breezell Browser](/dialog-box-overview#browser)。 |
| Analyze 模式可能在回答結尾留下殘餘的標籤 | 已修復 | 請參閱 [Analyze](/mode-selection#analyze)。 |
| 自訂上下文視窗未套用到 Codex 模型 | 已修復 | 將 `gpt-5.6-sol` 設為 512K 後，新對話仍顯示最大值為 272K。Breezell 現在會套用並顯示已設定的視窗。請參閱 [Context、Reasoning 與 Fast](/custom-api#context-reasoning-and-fast)。 |
| Grok 帳號登入顯示錯誤的額度 | 已修復 | |
| 切換上下文視窗後未執行自動壓縮 | 已修復 | 對話已恢復依預期壓縮。請參閱[上下文用量與壓縮](/dialog-box-overview#context)。 |
| 下拉選單顯示原生樣式且邊框過窄 | 已修復 | |
| Kimi 模型的推理強度設定無效 | 已修復 | |
| 傳送訊息時聊天介面可能卡頓 | 已修復 | |

如果有功能未依本指南所述運作，請參閱[問題解決](/troubleshooting)，或提供你的 Breezell 版本和你看到的情況，與我們聯絡。

感謝你的耐心等待與問題回報。
