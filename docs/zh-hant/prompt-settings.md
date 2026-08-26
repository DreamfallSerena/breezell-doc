---
title: 提示詞和技能設定
description: 在工作區或全域範圍內設定規則、記憶、技能及相關 AI 行為。
---

# 提示詞和技能設定

提示詞和技能設定用於集中管理 Breezell 可以使用的指令、長期資訊和可重複使用的工作流程。

## 開啟提示詞和技能設定

圖片中的箭頭指向右上角工具列中的 **Rules, Memories & Skills（規則、記憶和技能）** 按鈕。它位於 **New Chat（新增對話）**（+）按鈕右側。

![提示詞和技能設定入口](/prompt-settings/prompt-and-skill-settings-button.png)

點擊該按鈕即可開啟設定面板。

## 工作區與全域範圍

左側目錄將設定分為兩個範圍：

- **Workspace（工作區）：** 僅對目前專案生效。設定檔儲存在專案的 **.breezell** 目錄中，可以隨工作區一同管理。
- **Global（全域）：** 對所有工作區生效，適合在每個專案中都要使用的個人偏好和通用工作流程。

請先選擇範圍，再選擇 **Rules（規則）**、**Memories（記憶）**、**Skills（技能）** 或 **Commit（提交）**。頁面標題旁的標籤會顯示目前生效範圍。

## 規則

規則是 Breezell 在所選範圍內需要持續遵循的自訂 AI 指令，可用於規定程式碼規範、必用工具、輸出格式、專案限制及其他行為要求。

![工作區規則設定](/prompt-settings/rules-settings.png)

工作區規則儲存在 **{workspace}/.breezell/rules/breezell.md**。建議使用具體且互不衝突的指令。右上角的 **Clear（清除）** 會刪除目前規則範圍內的內容。

## 記憶

記憶用於儲存需要在後續對話中繼續使用的事實、偏好、決定和專案背景。**Memories（記憶）** 右側的數字表示目前範圍內已有的記憶數量。

![工作區記憶編輯器](/prompt-settings/memory-settings.png)

每次輸入一條清楚、獨立的記憶，然後點擊 **Save（儲存）** 或按 **Ctrl+Enter**。工作區記憶儲存在 **{workspace}/.breezell/memories/workspace_memories.md**。只有需要跨專案使用的資訊才建議儲存到全域記憶。

## 技能

技能是可重複使用的指令套件，用於教 Breezell 完成特定任務或工作流程。請在所需範圍下開啟 **Skills（技能）** 進行建立和管理。

![建立工作區技能](/prompt-settings/skill-creation.png)

建立技能時：

1. 輸入唯一的技能名稱，只能使用小寫字母和連字號。
2. 填寫簡短描述，明確說明該技能的用途和適用情境。
3. 在主要編輯區域中撰寫技能指令、執行步驟、限制條件和預期輸出。
4. 點擊 **Create Skill（建立技能）**。

工作區技能儲存在 `{workspace}/.breezell/skills/<name>/SKILL.md`。每個技能應只負責一種可重複執行的任務，方便 Breezell 準確選擇並穩定呼叫。

## 提交資訊

**Commit（提交）** 用於自訂 Breezell 產生 Git 提交資訊時使用的提示詞。

![工作區提交資訊設定](/prompt-settings/commit-message-settings.png)

- **自訂提示詞：** 編輯區域中存在內容時，它會完全取代 Breezell 內建的 Conventional Commits 提示詞。
- **範圍優先順序：** Workspace（工作區）提交提示詞的優先順序高於 Global（全域）。儲存庫專用規範應放在工作區，跨專案通用的預設要求應放在全域。
- **自動上下文：** Breezell 仍會自動向模型提供目前差異、所在分支和近期提交記錄，因此自訂提示詞只需規定所需的風格、語言、格式和限制。
- **恢復預設設定：** 點擊 **Clear（清除）** 會刪除自訂內容並恢復內建提示詞。

工作區提交提示詞儲存在 **{workspace}/.breezell/rules/commit_prompt.md**。
