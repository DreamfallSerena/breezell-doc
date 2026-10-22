---
title: 對話方塊總覽
description: 完整介紹 Breezell 對話面板：撰寫與傳送訊息、模式、模型、@ 與 / 選單、工具列按鈕、上下文用量與壓縮、佇列中的訊息，以及還原。
---

# 對話方塊總覽

Breezell **Agent** 那一側的對話面板，是你和 AI 交談的地方：你在這裡撰寫請求、選擇 AI 的工作方式和使用的模型、附加上下文，並追蹤它的進度。本頁會逐一介紹面板的每個部分。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成，文字會跟著本頁的語言顯示。其中部分畫面會像真正的面板一樣回應：你可以將游標移到模式選單、Context 清單或已傳送的訊息上，也可以點選開關和星號。
:::

## 對話面板的組成

<BzLiaotian biaotilan quanbiao wen="在設定頁面加入深色模式切換開關。" da="我會在 SettingsPage.vue 中加入一個開關，用來切換頁面上的主題 class，並記住你的選擇。我先看看設定是怎麼儲存的。" />

| | 項目 | 作用 |
| --- | --- | --- |
| 1 | 標頭按鈕 | **New Chat**（+）、**Skills & Memory**（筆記本圖示）和 **Chat History**（時鐘圖示）。Skills & Memory 會開啟 [Rules, Memories & Skills](/prompt-settings) 面板。 |
| 2 | 輸入框 | 撰寫訊息的地方。空白時會顯示 <BzWenben jian="chat.input.placeholder" />。 |
| 3 | 模式 | AI 處理這則訊息的方式：只對話、規劃、唯讀分析、編輯檔案等。請參閱[選擇模式](#mode)。 |
| 4 | 模型 | 負責回答的模型，後面接著它的上下文視窗和推理強度，例如 `200K Medium`。請參閱[選擇模型](#model)。 |
| 5 | 上下文圓環 | 上下文視窗的使用程度。點選它即可查看詳細資訊並手動壓縮。請參閱[上下文用量](#context)。 |
| 6 | **@** | 將檔案、資料夾或過去的對話加入訊息。請參閱[使用 @ 加入上下文](#mention)。 |
| 7 | 傳送 | 傳送訊息。AI 回答期間，它會變成停止按鈕。 |
| 8 | 工具列 | 輸入框下方的一排按鈕：Breezell Browser、附件、快速片語、優化提示詞、MCP 和技能。請參閱[工具列](#tray)。 |

## 撰寫並傳送訊息 {#send}

1. 點選輸入框並寫下你的請求。說明你想做什麼，以及要在哪裡做，例如哪個檔案或哪個頁面。
2. 按 `Enter` 傳送。按 `Shift+Enter` 則會換行。

只要輸入了文字，傳送按鈕就會從灰色變成白色：

<BzLiaotian shuru="在設定頁面加入深色模式切換開關。" />

若要加入圖片，請將它貼上或拖曳到輸入框中。若要加入其他檔案，請使用工具列中的迴紋針按鈕。在編輯器中選取程式碼後按 `Ctrl+L`（macOS 上為 `Cmd+L`），即可將選取內容加入對話。

### AI 回答期間

傳送按鈕會變成帶有方塊的白色停止按鈕。點選它即可停止回答。

在此期間你可以繼續撰寫。回答進行中傳送的訊息不會遺失：它們會在輸入框上方、<BzWenben jian="chat.queue.queued" canshu="2" /> 下方等待，並在 AI 空閒時依序傳送。

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="順便更新 README|然後執行測試" wen="在設定頁面加入深色模式切換開關。" da="我會在 SettingsPage.vue 中加入一個開關，用來切換頁面上的主題 class。" />

每則佇列中的訊息都有以下按鈕：<BzWenben jian="chat.queue.moveUp" /> 和 <BzWenben jian="chat.queue.moveDown" />（有多則訊息時）、<BzWenben jian="common.edit" />（放回輸入框）、<BzWenben jian="chat.queue.sendNow" />（停止目前的回答並傳送這則訊息）以及 <BzWenben jian="common.delete" />。你也可以拖曳它們來調整順序。如果某則佇列中的訊息無法傳送，原因會顯示在它下方，例如 <BzWenben jian="chat.queue.notSent.turnError" />

## 選擇模式 {#mode}

點選輸入框左下角的模式膠囊按鈕。將游標移到某個模式上，即可查看它的作用：

<BzLiaotian tanchu="moshi" moshi="agent" />

| 模式 | 簡介 |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent 是預設模式，適合大多數任務。你選擇的模式會從下一則訊息開始生效；當你以不同的模式傳送訊息時，對話中會出現一行 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" />，標示這次切換。

在五位好友協助你解鎖，或你購買任意方案之前，Entanglement 和 Teams 都是鎖定的。鎖定的模式在選單中會顯示鎖頭圖示，其說明則會顯示你的解鎖進度：

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 選擇模型 {#model}

點選模式旁的模型名稱。模型選擇器包含搜尋框、模型來源，以及各模型的設定（上下文視窗、推理強度、Fast）。[自訂 API（BYOK）](/custom-api#use-claude-in-chat)中有逐步說明。

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

模型名稱後面的文字是這些設定的簡短摘要：`200K Medium` 表示 200K 上下文視窗和中等推理強度；`1M High Fast` 表示 1M 視窗、高推理強度和 Fast。請參閱 [Context、Reasoning 與 Fast](/custom-api#context-reasoning-and-fast)。

## 使用 @ 加入上下文 {#mention}

在輸入框中輸入 `@`，或點選 **@** 按鈕。選單會在輸入框正上方開啟：

<BzLiaotian tanchu="tiji" shuru="@" />

| 項目 | 加入的內容 |
| --- | --- |
| files | 工作區中的一個檔案。 |
| folders | 整個資料夾。 |
| chats | 先前的一段對話。AI 只會取得該段對話紀錄的位置，需要時才去讀取，因此可以帶上好幾段對話，而不會塞滿上下文。 |

你不必先開啟某個類別：直接在 `@` 後面輸入，Breezell 就會同時搜尋檔案和資料夾。已開啟的檔案會排在最前面，並標示為 `Recent`。使用方向鍵和 `Enter` 選擇，或直接點選。

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

在 files 和 folders 中，選單標頭裡的一個小標籤可在 <BzWenben jian="inputToolbar.filterOn" /> 和 <BzWenben jian="inputToolbar.filterOff" /> 之間切換：<BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />。如果沒有符合的結果，Breezell 會改為列出有未提交變更的檔案，並標示為 `Changed`。

每個選取的項目都會成為訊息中的一個標籤，讓 AI 確切知道你指的是哪個檔案、資料夾或對話。

## 使用 / 叫出技能和快速片語 {#slash}

在輸入框開頭輸入 `/`，即可在同一份清單中看到你的[快速片語](#quick-phrases)和技能：

<BzLiaotian tanchu="xiegang" shuru="/" />

- 選擇快速片語會執行該片語設定的動作：插入文字、直接傳送，或在終端機中執行。
- 選擇技能會把它加入訊息，讓 AI 在這次請求中使用該技能。
- 已停用的技能會呈現灰色，該列上會有一個開關；直接在這裡開啟它即可使用。

## 輸入框下方的工具列 {#tray}

輸入框下方的虛線工具列中有六個按鈕。將游標移到按鈕上即可看到它的名稱。

| 按鈕 | 作用 |
| --- | --- |
| Breezell Browser（地球圖示） | 開啟 Breezell 內建瀏覽器的面板。 |
| <BzWenben jian="inputToolbar.attach" />（迴紋針圖示） | 將電腦中的檔案附加到訊息。 |
| <BzWenben jian="inputToolbar.quickPhrases" /> | 你儲存的片語和命令。 |
| <BzWenben jian="inputToolbar.optimizePrompt" />（魔杖圖示） | 將你寫的內容改寫成更清楚的提示詞。 |
| MCP | 開啟或關閉 MCP 伺服器。 |
| <BzWenben jian="inputToolbar.skills" />（圖層圖示） | 開啟或關閉技能。 |

MCP 或技能按鈕上的綠色小圓點，表示至少有一項已開啟。對話面板較窄時，Breezell Browser 會移到 **⋯**（<BzWenben jian="inputToolbar.more" />）選單中。當你引用了 Chat History 中的對話時，工具列會出現藍色的 <BzWenben jian="inputToolbar.referenced" /> 按鈕；點選它即可移除引用。

### Breezell Browser {#browser}

Breezell Browser 是 Breezell 內建的瀏覽器。網頁會在編輯器分頁中開啟，就在你的程式碼旁邊。

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- 尚未開啟瀏覽器時，面板會顯示 <BzWenben jian="browserPanel.readyToLaunch" />。點選 <BzWenben jian="browserPanel.open" />，或在欄位（<BzWenben jian="browserPanel.searchPlaceholder" />）中輸入連結或搜尋字詞，然後按 `Enter`。
- 開啟網頁後，面板會以分頁的形式列出它們：點選其中一個即可切換過去，使用該列上的按鈕可將它靜音或關閉。標頭中的按鈕會將所有分頁靜音。

AI 自己使用的瀏覽器工具預設在螢幕外執行。如果想看著它們運作，請在[功能選項](/feature-options-overview)中關閉 <BzWenben jian="featureOptions.codeBehavior.browserHeadless" />。

### 快速片語 {#quick-phrases}

快速片語是你常用的文字和命令。這個按鈕會開啟你的常用片語；點選其中一個即可使用。

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

點選 <BzWenben jian="quickPhrases.manage" /> 即可開啟管理介面。左側列出所有片語，右側則是你的常用片語，也就是按鈕中顯示的那些。

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- 點選片語上的星號，或選取它後點選中間的箭頭，即可將它加入 <BzWenben jian="quickPhrases.favorites" />。你也可以把它拖曳到右側。常用片語上的 **×** 只會將它從常用中移除。
- 常用片語上的鉛筆圖示用來編輯它；左側的垃圾桶圖示會刪除該片語。
- 頂端的 <BzWenben jian="common.add" /> 會開啟新片語的編輯器：

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

每個片語都有名稱、內容和動作類型：

| 類型 | 選擇該片語時 |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | 內容會放進輸入框，讓你在傳送前還能編輯。 |
| <BzWenben jian="quickPhrases.send" /> | 內容會立即作為訊息傳送。 |
| <BzWenben jian="quickPhrases.terminal" /> | 內容會在終端機中作為命令執行。選填的 <BzWenben jian="quickPhrases.workingDirectory" /> 用來設定命令執行時所在的資料夾。 |

快速片語也會出現在 [`/` 選單](#slash)中。

### 優化提示詞 {#optimize}

先寫下大致的請求，再點選魔杖按鈕。Breezell 會將它改寫成更清楚的提示詞，並先顯示結果；不會傳送任何內容。

<BzLiaotian tanchu="youhua" shuru="設定頁面弄個深色模式" youhuawen="在設定頁面加入深色模式切換開關。儲存使用者的選擇，讓它在重新載入後仍然保留；透過切換根元素上的主題 class 來套用；在使用者選擇模式之前，跟隨系統的偏好設定。" tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> 會把新文字放進輸入框。在你修改文字之前，再次點選魔杖按鈕就是 <BzWenben jian="promptOptimize.undo" />，會帶回你原本的內容。
- <BzWenben jian="promptOptimize.retrySame" /> 會再寫一個版本；<BzWenben jian="promptOptimize.dismiss" /> 會關閉面板。
- 輸入框為空時，魔杖按鈕只會顯示 <BzWenben jian="inputToolbar.optimizePromptEmpty" />。

改寫會使用對話模型，除非你在[功能選項](/feature-options-overview)中為它指定專用模型（<BzWenben jian="models.promptOptimizeModel.title" />）。

### MCP {#mcp}

MCP 面板會列出你的 MCP 伺服器及其狀態：綠色表示已連線，紅色表示發生錯誤，灰色表示已關閉或尚未啟動。

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- 開關用來為 AI 開啟或關閉伺服器。標頭會顯示已開啟的數量，例如 `2/3`。
- 箭頭（<BzWenben jian="inputToolbar.referenceMcpServer" />）會把伺服器加入你的訊息，讓 AI 在這次請求中使用它的工具。
- **+**（<BzWenben jian="mcp.addServer" />）會開啟 `mcp.json`，伺服器就是在這裡新增的。

### 技能 {#skills}

技能按鈕以相同的方式管理技能，並有 <BzWenben jian="skills.builtinTab" /> 和 <BzWenben jian="skills.myTab" /> 兩個分頁。請參閱[在對話中使用技能](/prompt-settings#use-skills-in-a-chat)。

::: warning 在長對話開始前切換好 MCP 伺服器和技能
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## 上下文用量與壓縮 {#context}

隨著對話使用模型的上下文視窗，**@** 旁的圓環會逐漸填滿。將游標移到圓環上即可查看數字，例如 `47.0% - 94.2K / 200.0K context used`；點選它則會開啟 **Context** 面板：

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

長條和清單會依類型拆分已使用的 token。將游標移到某一列上，即可突顯它在長條中所佔的部分。

| 類別 | 計算的內容 |
| --- | --- |
| System prompt | Breezell 針對目前模式的指令 |
| Tools | AI 可以呼叫的工具的說明 |
| Rules | 你的工作區或全域規則 |
| Memories | 隨請求一起送出的記憶 |
| Skills | 已開啟的技能清單 |
| MCP | 已開啟的 MCP 伺服器所提供的工具 |
| Subagents | 子代理完成的工作 |
| Conversation | 你的訊息、AI 的回答和工具結果 |

### 自動壓縮與手動壓縮

當對話用到可用上下文視窗的約 90% 時，Breezell 會自動壓縮：較早的訊息會被替換成摘要，對話則繼續進行。你不需要做任何事。

若想提早騰出空間，請在 Context 面板中點選 <BzWenben jian="contextUsage.compress" />（<BzWenben jian="contextUsage.compressTooltip" />）。執行期間，按鈕會顯示 <BzWenben jian="contextUsage.compressing" /> 和百分比。完成後，面板會顯示下列其中一項：

| 訊息 | 意義 |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | 已完成。 |
| <BzWenben jian="contextUsage.nothingToCompress" /> | 對話太短，無法壓縮。 |
| <BzWenben jian="contextUsage.errorBusy" /> | 請先停止回答，再進行壓縮。 |
| <BzWenben jian="contextUsage.errorNoModel" /> | 請先在輸入框下方選擇模型。 |

切換到上下文視窗較小的模型後，在 Breezell 將對話調整到新視窗的期間，圓環可能會顯示 <BzWenben jian="contextUsage.converting" />。

## 編輯或還原已傳送的訊息 {#edit}

將游標移到你已傳送的某則訊息上。訊息左上角會出現鉛筆圖示，右側則會出現返回箭頭：

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="在設定頁面加入深色模式切換開關。" da="完成了。SettingsPage.vue 現在有一個深色模式開關，你的選擇會被儲存；在你變更之前，頁面會跟隨系統設定。" />

- **編輯**：點選訊息或鉛筆圖示，修改文字後再次傳送。
- **還原**（<BzWenben jian="editor.revertToThisPoint" />）：點選箭頭並確認。之後的訊息會被移除，它們所修改的檔案也會回到該則訊息當時的狀態。

<BzLiaotian huigun wen="在設定頁面加入深色模式切換開關。" da="完成了。SettingsPage.vue 現在有一個深色模式開關，你的選擇會被儲存；在你變更之前，頁面會跟隨系統設定。" />

還原後無法從編輯器復原，因此在點選 <BzWenben jian="editor.revertConfirmDo" /> 之前，請先看清楚確認對話方塊的內容。如果 AI 仍在這段對話中回答，箭頭會呈現暗淡狀態；請先停止回答。

## 鍵盤快速鍵 {#shortcuts}

| 按鍵 | 動作 |
| --- | --- |
| `Enter` | 傳送訊息 |
| `Shift+Enter` | 換行 |
| `@` | 開啟提及選單 |
| 開頭的 `/` | 開啟技能和快速片語 |
| `↑` `↓` 後按 `Enter` | 在開啟的選單中移動並選取 |
| `Esc` | 關閉目前開啟的面板或選單 |
| `Ctrl+L` / `Cmd+L` | 將編輯器中的選取內容加入對話 |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | 開始新的對話 |

## 使用提示

- Agent 是適合大多數工作的模式。只有在需要特定工作流程時才切換，例如先制定計畫，或只分析而不編輯。
- 使用 `@` 把 AI 指向正確的位置：直接指定檔案或資料夾，比用一大段文字描述東西在哪裡更好。
- 利用上下文圓環讓長時間的對話維持良好狀態；壓縮會自動進行，想自行騰出空間時也可以手動壓縮。
- 將一再輸入的請求儲存為快速片語，並使用終端機類型執行專案命令。
- 在長對話開始前就設定好 MCP 伺服器和技能，而不要在對話途中切換。
