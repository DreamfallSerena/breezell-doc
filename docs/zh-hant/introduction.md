---
title: 介紹
description: 認識以 Code – OSS 為基礎打造的 AI 程式碼編輯器 Breezell，從安裝一路走到第一次由 AI 協助完成的修改。
---

# 介紹

Breezell 是基於 VS Code（Code – OSS）建構的 AI 程式碼編輯器。編輯器、你的擴充功能和鍵盤快速鍵都和你熟悉的一樣運作；在它們旁邊，還有一個能讀取你的專案、編輯檔案、執行命令，並自行使用工具的 AI。

::: tip 關於本頁的畫面
本指南中的 Breezell 畫面不是螢幕截圖，而是根據 Breezell 原始碼以 HTML 重新繪製而成。畫面文字會跟著本頁的語言顯示，顏色則跟著本站的淺色／深色切換。橘色的數字標記只是本指南加上的標示。
:::

## Breezell 視窗

<BzChuangti wen="啟動時只載入一次設定檔，並把結果快取起來。" da="完成。config.ts 現在只會讀取一次檔案並保留解析結果，index.ts 也會在伺服器啟動前呼叫 loadConfig()。" />

| | 區域 | 說明 |
| --- | --- | --- |
| 1 | **Box \| Agent** | 讓整個視窗在 **Agent** 頁面（你的程式碼和 AI）與 **Box** 頁面（設定和資料）之間切換。 |
| 2 | 編輯器 | Code – OSS 編輯器，包含分頁、檔案總管、搜尋、Git 和擴充功能。 |
| 3 | 對話 | 你和 AI 交談的地方。對話也可以用編輯器分頁的形式，開在程式碼旁邊。 |
| 4 | 模式 | AI 在這個對話中可以做多少事，從單純聊天到自主運作的 Agent。請參閱[模式](#modes)。 |
| 5 | 模型 | 由哪個模型回答，以及它的上下文、推理和速度選項。 |

### Agent 與 Box

**Agent** 是你工作的地方：編輯器和對話並排顯示。

**Box** 是管理頁面。它的側邊欄包含 <BzWenben jian="box.title" />（模型與提供者、功能選項、一般與語言設定、MCP 與技能、隱私、實驗性功能），以及與你的工作相關的資料：<BzWenben jian="box.review.group" />、<BzWenben jian="box.memory.group" />、<BzWenben jian="box.storage.group" />、<BzWenben jian="box.perf.group" />、<BzWenben jian="box.database.group" /> 和 <BzWenben jian="box.vault.group" />。你待在 Box 時，對話仍會保持開啟。

<BzHezi />

## 模式 {#modes}

對話輸入框左下角的模式按鈕，決定 AI 可以做哪些事。每種模式在輸入框中都有自己的顏色：

| 模式 | Breezell 的說明 |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement 和 Teams 需要 5 位好友助力才會解鎖，購買任何付費方案也能直接開通。Teams 和 DarkSelene 消耗的 token 比其他模式多得多。各模式的使用時機，請參閱[模式選擇](/mode-selection)。

## 模型

Breezell 把模型分成四類提供者：

- **Breezell**：Breezell 官方模型，費用從你的 Breezell 額度扣除。
- **帳號登入**：你已經擁有的帳號，例如 ChatGPT（Codex）、GitHub Copilot、Kimi、Grok、Gemini、DeepSeek、MiniMax 或 OpenRouter。
- **API 提供者**：使用你自己金鑰的各廠商官方 API，例如 Anthropic、OpenAI、Gemini 或 DeepSeek。
- **OpenAI 相容**：最多 50 個槽位，用於中轉站、閘道和自架代理。

除了 Breezell 模型之外，其他都使用你自己的金鑰或帳號。[自訂 API（BYOK）](/custom-api)會以 Claude 模型為例，帶你走完整個設定流程。

## Breezell 的其他功能

- **超級記憶**：跨對話的長期記憶，並附有可瀏覽、可編輯的記憶庫。請參閱[超級記憶](/super-memory)。
- **Breezell Mind**：把較早的歷史摺疊成工作筆記，讓長對話維持在預算之內，原始紀錄則保留在磁碟上。
- **程式碼審查**：用來審查 AI 所做變更的頁面，提供逐檔差異比對和一鍵還原。
- **Breezell Browser**：內建瀏覽器，AI 可以自行開啟、讀取並操作它。
- **MCP 與技能**：透過 Model Context Protocol 連接外部工具，並在不同專案之間重複使用技能。請參閱[提示詞和技能設定](/prompt-settings)。
- **資料庫**：直接在編輯器中連接 SQLite、MySQL、PostgreSQL、SQL Server、Oracle、MariaDB、MongoDB 和 Redis。
- **保險箱**：把中轉站位址和金鑰保存在系統鑰匙圈中，並在需要的地方自動填入。
- **Image Studio**：生成圖像和影片。
- **熱更新**：新版本會在編輯器內下載，重新啟動後即可生效，不需要重新安裝。

## 開始使用

1. 下載適用於你平台的 Breezell 並安裝。
2. 登入你的 Breezell 帳號。
3. 選擇介面語言。請參閱[語言設定](/settings-page-language-settings)。
4. 選擇模型：直接使用 Breezell 模型，或透過[自訂 API（BYOK）](/custom-api)使用自己的金鑰。
5. 開啟專案資料夾，在對話輸入框下方選擇模式和模型，描述你想做的事，然後送出。

> Breezell 以 Code – OSS（MIT 授權條款）為基礎建構。VS Code 與 Visual Studio Code 是 Microsoft Corporation 的商標。Breezell 與 Microsoft 沒有任何關聯，也未獲得 Microsoft 背書。
