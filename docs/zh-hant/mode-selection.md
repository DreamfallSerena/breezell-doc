---
title: 模式選擇
description: Breezell 各模式（Chat、Plan、Analyze、Entanglement、Agent、Teams 和 DarkSelene）可以讀取、變更和執行哪些內容，Plan 卡片與模式切換如何運作，以及該選擇哪個模式。
---

# 模式選擇

模式決定 AI 如何處理你的下一則訊息：它可以讀取什麼、可以變更什麼，以及可以執行什麼。請在輸入框左下角的模式膠囊按鈕中選擇。**Agent** 是預設模式，適合大多數工作。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成，文字會跟著本頁的語言顯示。將游標移到選單中的模式上，即可閱讀它們的說明；卡片上的選單和開關都可以點選。
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

無論使用哪種語言，選單中的模式名稱都以英文顯示。你選擇的模式會從下一則訊息開始生效；當你以不同的模式傳送訊息時，對話中會出現一行 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" />，標示這次切換。選單本身的介紹請參閱[選擇模式](/dialog-box-overview#mode)。

## 各模式可以做什麼 {#compare}

| 模式 | 讀取專案 | 變更檔案 | 執行命令 | MCP 工具 |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | 僅限它自己的計畫 | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓（第二步，經過審查） | ✓（第二步） | 第二步 |

AI 在每個模式中都可以使用你的技能。檔案編輯和命令是否需要你核准，由[功能選項](/feature-options-overview)中的工具權限決定。

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" />。

Chat 適合用來提問、請 AI 解釋、比較想法或起草文字。AI 會根據對話內容和你附加的上下文來回答；它不會自行開啟專案檔案，也不會執行任何東西。當你請它記住某件事時，它仍然可以儲存記憶。

<BzLiaotian moshi="normal" wen="debounce 和 throttle 有什麼差別？" da="兩者都會限制函式執行的頻率。debounce 會等到呼叫停下來一段時間後才執行一次；throttle 則在呼叫持續期間，每個間隔最多執行一次。邊輸入邊搜尋適合用 debounce，捲動或調整視窗大小的事件處理函式適合用 throttle。" />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />。<BzWenben jian="chatMode.planExplain" />。

1. AI 會讀取它需要的程式碼，但不會修改任何內容。
2. 它會在對話中以卡片的形式寫出計畫：包含標題、簡短的概述和待辦事項清單。這份計畫是一個 `.plan.md` 檔案，Breezell 會把它保存在你的專案之外。
3. 點選 <BzWenben jian="planCard.actions.viewPlan" /> 即可閱讀和編輯計畫。在對話中提出修改要求，AI 就會修訂同一份計畫。
4. 點選 <BzWenben jian="planCard.actions.execute" />（`Ctrl+Enter`）即可執行計畫。之後卡片會顯示 <BzWenben jian="planCard.actions.executed" />，待辦事項也會隨著工作進展逐一勾選。

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="在設定頁面加入深色模式切換開關。" da="計畫如下。它會保留目前的主題邏輯，並新增一項設定。" jihuabiaoti="設定頁面的深色模式切換開關" jihuazhaiyao="在 SettingsPage.vue 中加入深色模式開關，儲存使用者的選擇，透過根元素上的主題 class 套用，並在使用者選擇模式之前跟隨系統設定。" />

<BzWenben jian="planCard.actions.skip" /> 會捨棄這份計畫。卡片上的 <BzWenben jian="planCard.actions.auto" /> 開關與功能選項中的 <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> 是同一項設定：開啟後，新的計畫不需點選就會直接執行。

### Agent 建議切換到 Plan 時 {#plan-switch}

在 Agent 模式中，AI 可能會判斷某項任務需要先制定計畫。這時它會停下來，並顯示一張說明原因的卡片：

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="重寫儲存層，讓它可以同步到伺服器。" da="這會牽涉到儲存格式、每個呼叫端和離線快取。" qiehuanka="這項變更橫跨多個模組和資料格式；先就計畫達成共識，可以避免高風險的重寫。" />

- <BzWenben jian="planSwitch.switch" />（`Ctrl+Enter`）會將對話移到 Plan 模式；<BzWenben jian="planSwitch.skip" /> 則讓 AI 繼續以 Agent 模式工作。
- 左下角的選單用來設定下次的處理方式：<BzWenben jian="planSwitch.alwaysAsk" />、<BzWenben jian="planSwitch.never" /> 或 <BzWenben jian="planSwitch.alwaysRun" />。它與功能選項中的 <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> 是同一項設定。
- 選擇 <BzWenben jian="planSwitch.alwaysAsk" /> 時，卡片下方的進度條會跑兩輪，每輪 30 秒。如果你沒有回應，就會略過這次切換，AI 會繼續工作。

在 Plan 模式中，AI 也可能以同樣的卡片提議反向切換，回到你原本所在的模式。

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />。<BzWenben jian="chatMode.analyzeExplain" />。

Analyze 適合用來找出 Bug 的原因、審查設計，或在決定要修改什麼之前先理解不熟悉的程式碼。AI 會持續搜尋和閱讀，直到能夠回答為止，然後停下來；它可以使用 MCP 工具取得資訊。如果有需要修正的地方，它會在回答中說明修正方式，而不是直接套用。

<BzLiaotian moshi="analyze" wen="為什麼刪除任務後，任務計數器顯示的數字不對？" da="deleteTask() 是從陣列的副本中移除項目，但 renderCounters() 讀取的是原本的 tasks 陣列，所以數字一直不會減少。修正方式：讓 deleteTask() 更新共用的 tasks 陣列，之後再呼叫 renderCounters()。" />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />。<BzWenben jian="chatMode.agentExplain" />。

Agent 是預設模式。它會收集所需的上下文、編輯檔案、執行命令，並在回報之前檢查結果。任務規模較大時，它可以建議[切換到 Plan](#plan-switch)；它也可以使用 MCP 工具、瀏覽器和你的技能。

在 Windows 和 macOS 上啟用桌面控制後，只有 Agent 和 Entanglement 模式可以操作你電腦上的應用程式。

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.entanglementDetail" />：<BzWenben jian="chatMode.entanglementExplain" />

Entanglement 具備 Agent 的所有能力，並加入明確、結構化的因果推理。AI 會追蹤自己的假設，利用每一次工具呼叫來證實或排除其中一個假設，也可以先停下來和你確認某個步驟，再繼續進行。對話上方的面板會隨著進展即時顯示這些狀態（功能選項中的 <BzWenben jian="featureOptions.entanglement.enable" />）。

它適合用於棘手的 Bug、架構決策、重構，以及效能或安全性相關的工作。它消耗的 token 比 Agent 多。詳細的運作方式請參閱 [Entanglement 模式](/entanglement-mode-overview)。

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />。<BzWenben jian="chatMode.agentTeamsExplain" />。

- 由主控判斷是否值得組成團隊。簡單的請求會直接回答。
- 面對大型工作時，主控會拆分任務並啟動平行工作的隊友，再收集並檢查他們的結果。
- 除非你已在功能選項中開啟 <BzWenben jian="featureOptions.toolPermissions.teams" />，否則 Breezell 會在團隊開始工作前請你核准。負責設計和修正 Bug 的隊友可以使用各自的模型（<BzWenben jian="models.teamDesignModel.title" />、<BzWenben jian="models.teamBugfixModel.title" />）。
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />。平行工作的隊友在處理相同的檔案時也可能互相干擾，因此請為他們分配界線清楚的不同部分。

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.darkSeleneDetail" />。

DarkSelene 分兩個步驟進行：

1. **拆解問題。** 和 Analyze 一樣是唯讀的：AI 會研究請求和程式碼，並寫出一份任務說明，列出需要完成的事項和預期的結果。
2. **在審查下執行。** 任務說明會交給 Agent。在它工作期間，獨立的模型呼叫會審查它在預期檔案之外的讀取以及每一次編輯，審查結果會作為證據回饋給它。有風險的編輯會由三個審查者平行檢查。

在第二步期間，AI 不會切換模式、撰寫計畫卡片，也不會停下來提問。<BzWenben jian="chatMode.darkSeleneTokenWarning" />。

## 鎖定的模式 {#locked}

只要有五位好友協助你解鎖，或購買任意方案，就能使用 Entanglement 和 Teams。在此之前，它們在選單中會顯示鎖頭圖示，將游標移到上面即可查看你的進度，例如 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />。<BzWenben jian="chatMode.entanglementUnlockHint" />請參閱[邀請新使用者教學](/invite-new-users)。

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 如何選擇模式 {#choosing}

| 你想要…… | 模式 |
| --- | --- |
| 提出問題，或把事情想清楚 | Chat |
| 在任何變更之前，先就做法達成共識 | Plan |
| 理解程式碼或找出原因，但不做任何變更 | Analyze |
| 完成一項任務：編輯、執行、驗證 | Agent |
| 依據證據，逐步解決困難的問題 | Entanglement |
| 同時推進大型工作中多個獨立的部分 | Teams |
| 先拆解請求，並審查每一項變更 | DarkSelene |

如果拿不定主意，就留在 Agent：任務需要時，它會自行切換到 Plan。
