---
title: 功能選項總覽
description: Breezell 功能選項頁面上的每個開關，包括專用模型、後續建議、工具權限、編輯器行為、通知、計畫模式、網頁搜尋和檔案存取，以及各自的預設值與作用。
---

# 功能選項總覽

**功能選項**是 Box 中的一個頁面，用來決定各項附加功能使用哪個模型，以及 Agent 可以自主執行到什麼程度。它分為五個群組：<BzWenben jian="featureOptions.group.models" />、<BzWenben jian="featureOptions.group.execution" />、<BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" /> 和 <BzWenben jian="featureOptions.group.system" />。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成，文字會跟著本頁的語言顯示。每個開關和選單都從 Breezell 的預設值開始，你可以點選它們，看看該列會如何變化。
:::

## 開啟功能選項

1. 開啟 Box（點選標題列切換器中的 **Box** 那一側，或從命令選擇區執行 **Breezell: Open Settings**）。
2. 在左側的 <BzWenben jian="box.title" /> 群組中，點選 <BzWenben jian="tab.featureOptions" />。

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

每項變更都會在你操作的當下立即儲存，並套用到所有工作區。若要直接跳到某個選項，請在 Box 側邊欄頂端的搜尋框中輸入它的部分名稱：Breezell 會捲動到該列並醒目標示。

自動補全不在這個頁面上。它的開關、模型和通訊協定有自己的頁面：<BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />。

## 模型

<BzWenben jian="featureOptions.dedicatedModels.desc" /> 這個群組中的每個模型列都以相同的方式運作：

- 開關**關閉**（預設）：該列顯示 <BzWenben jian="models.analysisModel.followChat" />，這項功能會使用對話輸入框下方所選的模型。
- 開關**開啟**：該列顯示 <BzWenben jian="models.analysisModel.custom" />，下方會出現模型選擇器。無論對話使用哪個模型，這項功能一律使用你在這裡選擇的模型。

如果之後在 <BzWenben jian="tab.models" /> 中移除或停用了這個專用模型，這項功能會自動改回使用對話模型，不會另外提示。

### 專用模型

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| 項目 | 用途 |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | Agent 啟動來替它探索與分析程式碼的子代理 |
| <BzWenben jian="models.teamDesignModel.title" /> | Teams 模式中負責 UI、視覺和頁面打磨的團隊成員 |
| <BzWenben jian="models.teamBugfixModel.title" /> | Teams 模式中負責定位、重現和修正 Bug 的團隊成員 |
| <BzWenben jian="models.scmModel.title" /> | 原始檔控制中產生的提交訊息 |

常見的設定方式是：用 `claude-opus-5` 對話，把附帶的工作交給較小的模型。在上方的範例中，<BzWenben jian="models.scmModel.title" /> 已切換為 <BzWenben jian="models.scmModel.custom" />，並使用 `claude-haiku-5-5` 執行，撰寫提交訊息更快也更省錢。這些訊息的風格來自[提示詞和技能設定](/prompt-settings#commit-message)中的 Commit 頁面。

### 後續建議

<BzWenben jian="featureOptions.followUp.desc" /> 此功能預設為關閉。

| 選項 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | 關閉 | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 每則回覆下方顯示 2、3 或 4 張建議卡片。 |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> 會立即送出建議；<BzWenben jian="featureOptions.followUp.clickInsert" /> 可讓你先編輯再送出。<BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | 這裡用 `claude-haiku-5-5` 這類小而快的模型就足夠了。 |

### 優化提示詞

<BzWenben jian="featureOptions.promptOptimize.desc" /> 這張卡片只有一個模型列：<BzWenben jian="models.promptOptimizeModel.title" />。

### 劃詞助手

在對話回覆中選取文字時，會出現一個小浮條，上面有引用和複製。劃詞助手會再加上翻譯和搜尋。

| 選項 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | 開啟 | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | 顯示在選取文字的 <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> 或 <BzWenben jian="featureOptions.selectionAssist.pillAbove" />。<BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | 開啟 | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | 開啟 | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | 開啟 | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | 負責翻譯的模型。 |

## 執行

<BzWenben jian="featureOptions.toolPermissions.desc" /> 開關關閉時，Agent 會在執行該類動作前停下來，等你在對話中核准或拒絕。只會讀取的工具（例如讀取檔案、搜尋程式碼或網頁搜尋）永遠不需要等待核准。

<BzGongneng zu="execution" />

| 開關 | 預設值 | 涵蓋範圍 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | 開啟 | 編輯、寫入、重新命名和刪除檔案與資料夾 |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | 關閉 | 終端機指令，以及 Agent 自行撰寫並執行的指令碼 |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | 開啟 | 使用 Breezell 的資料庫工具執行陳述式，以及建立連線或資料庫 |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | 關閉 | 產生圖片 |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | 開啟 | 來自你所新增 MCP 伺服器的工具 |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | 關閉 | 在 Teams 模式中 <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> |

::: warning 自動核准終端機
開啟 <BzWenben jian="featureOptions.toolPermissions.terminal" /> 後，Agent 會直接執行它決定的任何指令（例如安裝、建置或刪除檔案），不會先詢問你。請只在這樣做很安全的專案中開啟，例如 Git 狀態乾淨、隨時可以還原的專案。
:::

即使開啟了 <BzWenben jian="featureOptions.toolPermissions.edits" />，編輯內容仍會以可供審查的變更形式呈現，除非你也開啟下方的 <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" />。

## 編輯器

<BzGongneng zu="editor" />

### 程式碼行為

| 開關 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | 開啟 | 每次編輯後，該次編輯引入的 lint 錯誤會隨結果一起回傳給 AI，讓它在同一輪中修正。 |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | 關閉 | AI 的編輯會立即保留，編輯器中不會出現接受／拒絕的步驟。 |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | 關閉 | AI 編輯某個檔案時，在編輯器中開啟該檔案。 |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | 開啟 | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | 關閉 | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | 開啟 | 在編輯器中選取程式碼時，旁邊會出現小按鈕，可將程式碼加入對話或進行編輯。 |

### 通知

| 選項 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | 開啟 | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | 關閉 | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | 關閉 | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | 關閉 | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | 關閉 | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

選擇聲音時會播放一次，開啟任一聲音開關時也會播放一次。在你至少開啟一個背景或目前頁面的開關之前，這些聲音都不會響起。

## 智能

<BzGongneng zu="intelligence" />

### 上下文管理

| 選項 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | 關閉 | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | 讓模型使用其提供者內建的網頁搜尋。詳見下文。 |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> 決定何時在請求中加入提供者自己的搜尋。Breezell 通常會用自己的網頁工具進行搜尋，這些工具需要你先登入。

| 選項 | 結果 |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | 使用 Breezell 的搜尋工具。只有在這些工具無法執行時（例如你尚未登入），模型才會改用其提供者的搜尋。 |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | 每個請求都會加入提供者的搜尋，與 Breezell 的工具並用。 |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | 永遠不使用提供者的搜尋。 |

只有部分提供者具備內建搜尋：Anthropic（Claude）、OpenAI、使用 API 金鑰的 Gemini、xAI、Perplexity、OpenRouter、Qwen 和 Zhipu。對其他模型而言，此選項沒有作用。

### 模式與技能

| 開關 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | 開啟 | <BzWenben jian="featureOptions.superpowers.desc" /> 這些就是[提示詞和技能設定](/prompt-settings#use-skills-in-a-chat)中列出的內建技能。 |
| <BzWenben jian="featureOptions.entanglement.enable" /> | 開啟 | <BzWenben jian="featureOptions.entanglement.enableDesc" /> 請參閱 [Entanglement 模式](/entanglement-mode-overview)。 |

## 系統

<BzGongneng zu="system" />

### 外部檔案存取

| 開關 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | 開啟 | 工具可以讀取已開啟工作區以外的檔案，例如某個函式庫的原始碼，或使用者主目錄中的設定檔。 |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | 開啟 | 工具可以修改已開啟工作區以外的檔案。如果 Agent 只應該動到專案本身，請關閉此開關。 |

### 終端機網路速度

| 開關 | 預設值 | 作用 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | 開啟 | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | 關閉 | 僅限 Windows。<BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## 總結

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />；變更會立即儲存。
- <BzWenben jian="featureOptions.group.models" />：附加功能會跟隨對話模型，直到你為它們指定專用模型為止。
- <BzWenben jian="featureOptions.group.execution" />：Agent 不必詢問就能做哪些事。終端機指令預設會先詢問。
- <BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" />、<BzWenben jian="featureOptions.group.system" />：lint 修正、通知、計畫卡片、網頁搜尋、Superpowers 技能，以及工作區以外的檔案存取。
