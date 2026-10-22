---
title: 提示詞和技能設定
description: 為 Breezell 設定長期有效的指令、記憶、可重複使用的技能和提交訊息風格，可套用於單一專案或所有專案。
---

# 提示詞和技能設定

Breezell 把給 AI 的四種長期指令集中在同一個面板 **Rules, Memories & Skills** 中：

| | 說明 | 使用時機 |
| --- | --- | --- |
| **Rules** | AI 必須遵守的指令，例如程式碼規範或回答使用的語言 | 每次請求都會使用 |
| **Memories** | 附有日期的筆記：需要跨對話保留的事實和決定 | 作為背景筆記；以你最新的要求為準 |
| **Skills** | 針對特定工作的逐步操作手冊，例如撰寫版本說明 | 任務符合時由 AI 載入 |
| **Commit** | AI 產生的 Git 提交訊息應該呈現的樣式 | 產生提交訊息時 |

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成，文字會跟著本頁的語言顯示。面板中的導覽可以互動。Rules、Memories、Skills 和 Commit 等標籤在 Breezell 中同樣是英文。
:::

## 開啟面板

點選對話面板頂端的 **Skills & Memory** 按鈕（筆記本圖示），它位於 **New Chat**（+）和 **Chat History** 之間。

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

你也可以從 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" /> 開啟：該頁的第一張卡片就是 <BzWenben jian="box.mcp.openSkillsMemory" />。

## 工作區與全域

面板左側分為兩組：

- <BzWenben jian="common.workspace" />：只套用於目前開啟的專案。檔案存放在專案的 `.breezell` 資料夾中，因此可以提交到版本控制並與團隊共用。沒有開啟資料夾時，這一組會呈現灰色。
- <BzWenben jian="common.global" />：套用於這台電腦上的所有專案。檔案存放在使用者主資料夾的 `.breezell` 中。

請在左側選擇範圍和類型。標頭會顯示你正在編輯的項目，底部的路徑則顯示它所儲存的檔案。

<BzGuize />

切換頁面、離開編輯器或關閉面板時，面板都會自動儲存。右上角的 <BzWenben jian="rulesMemories.clear" /> 會清空目前頁面；需要點選兩次以確認。

## 規則

規則使用純 Markdown 撰寫。請寫簡短、具體且互不矛盾的指令，例如：

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| 範圍 | 檔案 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning 工作區規則會取代全域規則
目前開啟的專案有工作區規則時，Breezell 只會送出這些規則，不會帶上全域規則。全域規則只會用在沒有工作區規則的專案中。如果某個專案也需要部分全域規則，請把它們複製到該專案的工作區規則中。
:::

在包含多個資料夾的工作區中，每個資料夾的規則都會被使用。Breezell 讀取的是已儲存的檔案，因此未儲存的草稿永遠不會傳給 AI。

## 記憶

記憶是附有日期的簡短筆記，例如決定、偏好，以及專案的設定方式。AI 也可以透過它的 `update_memory` 工具自行在這裡新增筆記。

Breezell 把記憶當作筆記，而不是規則。當某條記憶與你最新的要求或目前的程式碼不一致時，AI 會遵循你的要求和程式碼，並改為提議更新該記憶。任何必須始終成立的內容，請放進 Rules。

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. 開啟 <BzWenben jian="common.workspace" /> ▸ Memories（或 <BzWenben jian="common.global" /> ▸ Memories）。
2. 點選 <BzWenben jian="rulesMemories.addMemory" />。
3. 每條記憶只寫一項事實，然後按 `Ctrl+Enter`（或點選 Save）。

每條記憶都是一張標有日期的卡片。將游標移到卡片上即可刪除它。左側清單中 Memories 旁的數字代表記憶的數量。

| 範圍 | 檔案 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

記憶功能需要包含超級記憶的方案。沒有這類方案時，頁面會顯示 <BzWenben jian="superMemory.proRequired" />。關於 AI 自行收集的記憶，請參閱[超級記憶](/super-memory)。

## 技能

技能是一個包含 `SKILL.md` 檔案的資料夾。Breezell 會把每個已啟用技能的名稱和描述提供給 AI；當任務符合某個描述時，AI 會載入該技能的完整指令並照著執行。因此，好的描述應該說明**何時**使用這個技能。

### 建立技能

1. 開啟 <BzWenben jian="common.workspace" /> ▸ Skills（或 <BzWenben jian="common.global" /> ▸ Skills），然後點選 <BzWenben jian="skills.newSkill" />。
2. 輸入名稱：只使用小寫字母和連字號，例如 `release-notes`。
3. 輸入一行描述，說明這個技能的用途。
4. 撰寫指令：步驟、規則和預期結果。
5. 點選 <BzWenben jian="skills.createSkill" />。

<BzGuize fenye="xinjineng" />

| 範圍 | 資料夾 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

技能可以在 `SKILL.md` 旁附帶更多檔案（參考資料、指令碼）。技能的詳細資訊頁會列出這些檔案，點選即可開啟。

### 匯入技能

將檔案拖曳到技能清單上：<BzWenben jian="skills.dropZipPrompt" />。一個 `.zip` 可以一次包含多個技能資料夾；單個 `.md` 會成為一個以檔名命名的技能。

### 在對話中使用技能 {#use-skills-in-a-chat}

點選對話輸入框下方那一列中的 **Skills** 按鈕（圖層圖示）：

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />：Breezell 隨附的技能，例如 `brainstorming` 或 `requesting-code-review`。它們跟隨 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" /> 中的 **Superpowers Skills** 開關。每個內建技能預設都是關閉的，請開啟你需要的；你自己的技能預設開啟。
- <BzWenben jian="skills.myTab" />：你的工作區技能和全域技能。
- 開關用來啟用或停用技能。停用的技能不會提供給 AI。
- 箭頭按鈕（<BzWenben jian="inputToolbar.referenceSkill" />）會把技能加入你的訊息，讓 AI 在這次請求中使用它。

你也可以在輸入框中輸入 `/` 來開啟技能選單。

啟用或停用技能或 MCP 伺服器會改變提示詞的開頭，可能讓你失去提供者的提示詞快取。請在開始長對話之前設定好需要的項目，而不要在對話途中切換。

## 提交訊息 {#commit-message}

Commit 會改變 Breezell 在你產生 Git 提交訊息時的寫法。

<BzGuize fenye="commit" />

- 頁面為空時，會使用 Breezell 內建的 Conventional Commits 提示詞。
- 頁面上的文字會完全**取代**內建提示詞。Breezell 仍會把 diff、分支和最近的提交提供給模型，因此只需描述風格：語言、格式、長度。
- <BzWenben jian="common.workspace" /> 的提示詞優先於 <BzWenben jian="common.global" /> 的提示詞。
- <BzWenben jian="rulesMemories.clear" /> 會還原內建提示詞。

| 範圍 | 檔案 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## 總結

- Rules：AI 必須始終遵守的事項。工作區規則會取代全域規則。
- Memories：需要記住的事實，每張卡片一項。
- Skills：任務符合其描述時由 AI 載入的操作手冊；可在對話輸入框下方啟用或停用。
- Commit：你的提交訊息風格，會取代內建提示詞。
