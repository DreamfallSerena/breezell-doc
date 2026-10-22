---
title: 超級記憶
description: 介紹 Breezell 的超級記憶如何把對話提煉成記憶、技能、經驗、軌跡和資源，如何在之後的請求中召回它們，以及如何在 Box 中整理這些內容。
---

# 超級記憶

**超級記憶**是 Breezell 自有的長期記憶。你工作時，它會從對話中提煉值得保留的內容，例如決定、偏好、工作方法、修正問題時學到的教訓，以及被修改過的檔案，並把相關的部分召回到之後的請求中，新對話也不例外。

- 提煉由 Breezell 內建的兩個模型執行，不會使用你設定的模型，也不會消耗它的 token。不過，被召回到請求中的記憶會成為該請求上下文的一部分。
- 使用超級記憶需要 Breezell 帳號，以及包含超級記憶的方案。
- 它儲存的所有內容，都可以在 Box ▸ <BzWenben jian="box.memory.group" /> 中瀏覽、修正和刪除。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成，文字會跟著本頁的語言顯示；畫面中的記憶只是範例。在記憶庫中，你可以展開各列、變更優先級，以及設定常駐記憶。
:::

## 運作方式 {#how-it-works}

開啟 Box，在左側的 Console 群組中展開 <BzWenben jian="box.memory.group" />。它包含四個頁面：<BzWenben jian="box.memory.overview" />、<BzWenben jian="box.memory.library" />、<BzWenben jian="box.memory.context" /> 和 <BzWenben jian="box.memory.maintenance" />。

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" /> 一開頭是這個循環的流程圖，上面的數字都是即時的：

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**：你和模型之間來回的每一輪。
2. **<BzWenben jian="box.memory.flow.extract" />**：<BzWenben jian="box.memory.flow.extractSub1" />；<BzWenben jian="box.memory.flow.extractSub2" />。
3. **<BzWenben jian="box.memory.flow.store" />**：條目存放的地方，包括啟用中和休眠中的條目。
4. **<BzWenben jian="box.memory.flow.project" />**：從你的程式碼庫編譯出來的知識，例如進入點、命令和相依套件。
5. 回到對話：常駐條目會注入每一次請求，相關條目則會在請求需要時被召回。

流程圖下方的卡片會顯示條目總數、常駐條目數、精簡索引相較於完整載入每個條目省下了多少，以及最近一次注入了什麼。再往下則是各類型的構成、優先級分佈、條目的新鮮度、已編譯專案知識的健康度、最常使用的條目，以及即將過期的條目。

## 五種記憶 {#kinds}

超級記憶會依照每個條目日後的使用方式，把它歸入合適的類型：

| 類型 | 存放的內容 | 範例 |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | 長期有效的事實、偏好、常設指令和決定 | 「用繁體中文回答；程式碼保持英文」 |
| <BzWenben jian="superMemory.catSkill" /> | 可重複使用的方法，用來再次解決同一類問題 | 如何安全地還原損壞的 localStorage 資料 |
| <BzWenben jian="superMemory.catExperience" /> | 一個教訓：對根本原因的推理，以及如何驗證 | 「多個功能同時出錯時，先修正共用狀態」 |
| <BzWenben jian="superMemory.catTrajectory" /> | 任務實際的進行過程：目標、工具呼叫、錯誤和恢復 | 一次修復的 14 個步驟 |
| <BzWenben jian="superMemory.catResource" /> | 被修改的具體檔案和位置 | <BzWenben jian="superMemory.editAction.edit" /> test.html |

並不是每段對話都會產生所有類型。一次錯誤修正通常會產生技能、經驗、軌跡和資源，但不會產生一般記憶，因為其中沒有任何長期的個人偏好。這能讓召回保持精準：之後的任務可以單獨取用其中的方法、教訓、歷程或檔案紀錄。

## 優先級與生命週期 {#priorities}

| 優先級 | 存續期間 |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | 永不過期。常駐條目一律為 P0。 |
| <BzWenben jian="superMemory.p190Days" /> | 除非再次被確認，否則 30 天後過期。 |
| <BzWenben jian="superMemory.p230Days" /> | 除非再次被確認，否則 7 天後過期。檔案編輯之類的短期細節會從這裡開始。 |

過期的條目不會被刪除，而是轉為 **<BzWenben jian="superMemory.dormant" />** 狀態。休眠的條目仍可搜尋，也可以恢復。當某個 P1 條目證明了自己的價值時，Breezell 會在它那一列上顯示 **↑P0** 按鈕，建議你把它設為永久。

## 記憶庫 {#library}

<BzWenben jian="box.memory.library" />：<BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **篩選**：先搜尋，再依優先級（P0 / P1 / P2）、類型，以及 <BzWenben jian="superMemory.active" /> 或 <BzWenben jian="superMemory.dormant" /> 縮小範圍。
- **計數列**：已載入的條目數、常駐配額，以及每種類型的活躍預算。<BzWenben jian="superMemory.batchSelect" /> 可讓你勾選多個條目並一次刪除。
- **列**：彩色圓點代表類型。標題後面接著優先級膠囊；常駐條目會顯示 **<BzWenben jian="superMemory.residentBadge" />**，過去 24 小時內的條目則會顯示 **NEW**。第二行顯示最後更新時間、類型、標籤數量和來源。
- **展開某一列**，即可查看它的標籤、<BzWenben jian="superMemory.l1Overview" />、<BzWenben jian="superMemory.whyRemembered" />、被確認和使用的次數，以及到期時間。<BzWenben jian="box.memory.showFull" /> 會再加上 <BzWenben jian="superMemory.l2Full" />。
- **優先級膠囊**（1）：點選它即可選擇 <BzWenben jian="superMemory.p0Permanent" />、<BzWenben jian="superMemory.p190Days" /> 或 <BzWenben jian="superMemory.p230Days" />。
- 圖釘用來把條目設為常駐；垃圾桶則會刪除它。

Breezell 只會為每個條目傳給 AI 一行簡短的文字（L0），需要時才載入概覽或完整內容。總覽頁面上的 <BzWenben jian="superMemory.tokenSavings" /> 就是這樣來的。

## 常駐記憶 {#resident}

常駐條目會注入**每一次**請求，不論該請求是否與它有關。請用它來存放 AI 必須隨時記住的事項，例如架構規則、必須遵循的工作流程，或明確的偏好。

1. 開啟 <BzWenben jian="box.memory.library" />，找到該條目。
2. 點選該列上的圖釘（<BzWenben jian="superMemory.residentOn" />）。

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- 該條目會變成 P0 並加上 <BzWenben jian="superMemory.residentBadge" /> 徽章，計數列也會顯示新的總數，例如 <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />。
- 最多可以有 12 個常駐條目。達到上限時，Breezell 會顯示 <BzWenben jian="superMemory.residentLimitReached" />
- 若要降低常駐條目的優先級，請先再次點選圖釘（<BzWenben jian="superMemory.residentOff" />）；該條目會回到原本的優先級。

常駐條目請保持簡短，而且要真正適用於所有情況。暫時的檔案位置或一次性的任務細節不應放在這裡，因為它們會被加入每一次請求。

## 對話中的記憶 {#in-chat}

當超級記憶將條目注入請求時，你的訊息下方會出現一行文字。點選它即可查看使用了哪些條目：

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="用繁體中文回答；程式碼和識別碼保持英文" gaoliang="zhuru" biaoji="1" wen="你好" da="你好！今天想處理什麼呢？" />

在這個範例中，全新的對話裡只有一句「你好」，卻注入了一個條目，也就是那條常駐記憶。相關條目則會在請求需要時加入：

<BzLiaotian zhuru="3|1|2" zhuruwen="用繁體中文回答；程式碼和識別碼保持英文|用加上防護的 JSON 解析還原損壞的 localStorage 狀態|任務、篩選和計數器同時壞掉時，先修正共用狀態" zhurukai wen="test2.html 中的閱讀清單在重新載入後書目就不見了，請修正。" da="這和任務管理工具的問題相同：清單是用 String() 而不是 JSON.stringify 儲存的。我會為解析加上防護、捨棄已損壞的值，並給每本書一個穩定的 id。" />

只有在注入了內容時，才會出現這一行。如果檢索無法完成，這一輪會以可用的內容繼續進行，這一行也會註明這一點。

## 上下文注入 {#context}

<BzWenben jian="box.memory.context" />：<BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| 卡片 | 顯示的內容 |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | 所選輪次的狀態、注入了多少常駐條目和相關條目、它們的類型和範圍，以及每個條目的詳細程度（L0 / L1 / L2）和分數。 |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | 下一次請求會收到的精簡索引，依類型分組，並附上估算的 token 數。 |
| <BzWenben jian="superMemory.convTurns" /> | 目前對話的各個輪次。點選其中一輪，即可檢查它的注入內容，並跳到對話中的該處。 |

## 預算與維護 {#maintenance}

<BzWenben jian="box.memory.maintenance" />：<BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />：<BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />：<BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />：<BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />：以 `.zip` 將整個記憶庫搬到另一台電腦。<BzWenben jian="box.memory.archiveImportDesc" />

## 範例：一次修復，在另一個應用程式中再次派上用場 {#example}

以下說明上方畫面中的條目是怎麼來的。

1. **修復**：在 `test.html` 中，一個小型的任務管理工具無法穩定地新增、刪除、完成、篩選或儲存任務。Breezell 追查出這些故障都源自同一個共用的狀態模型，修正它之後，在瀏覽器中檢查了整個工作流程。超級記憶先把 `test.html` 中被編輯的部分記錄為 **P2 資源**，並把修復的過程記錄為 **P2 軌跡**。
2. **教訓**：被問到「你從這次修復中學到了什麼？」時，AI 列出了可重複使用的教訓：修正共用狀態的擁有者，而不是逐一處理每個症狀；以穩定的 id 定位項目；把儲存的資料視為必須驗證的邊界。超級記憶儲存了一項 **P1 技能**（加上防護地儲存和載入 localStorage 資料）和一項 **P1 經驗**（先診斷共用狀態，再進行端對端驗證）。在較長或較有價值的修復中，即使沒有人要求，它也會記錄這類教訓。
3. **重複使用**：第一段對話已被刪除。在新的對話中，另一個應用程式（`test2.html` 中的閱讀清單）出現了同一類錯誤。Breezell 召回了這項技能和資源紀錄，把方法套用到新的 `books` 資料上，而不是照抄舊的修補，並驗證了結果。

刪除對話並不會刪除超級記憶從中提煉出的內容，而在一個應用程式中學到的方法，也延續到了另一個應用程式。

## 每日額度用完時 {#quota}

超級記憶有每日額度。額度用完時，每個超級記憶頁面都會顯示 <BzWenben jian="box.memory.quotaPausedTitle" />。在額度恢復之前，對話不會再自動建立新條目；既有的條目仍可檢視和刪除，而你在 [Rules, Memories & Skills](/prompt-settings) 中自行撰寫的規則和記憶也不受影響。

沒有包含超級記憶的方案時，頁面會顯示：

<BzJiyi ye="suoding" />

## 總結

- 超級記憶會把對話提煉成記憶、技能、經驗、軌跡和資源，而且不會使用你模型的 token。
- 相關條目會被召回到之後的請求中；常駐條目（最多 12 個，一律為 P0）則會進入每一次請求。
- 除非再次被確認，P1 會保留 30 天、P2 保留 7 天；過期的條目會轉為休眠，並且可以恢復。
- Box ▸ <BzWenben jian="box.memory.group" /> 包含總覽、記憶庫、上下文注入檢視和維護。
