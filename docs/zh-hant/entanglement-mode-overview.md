---
title: Entanglement 模式
description: Breezell 的 Entanglement 模式如何透過可追蹤的假設和證據調查棘手的問題、如何閱讀它的因果面板，以及它的嚴格驗證與人機互動選項。
---

# Entanglement 模式

**Entanglement** 是 <BzWenben jian="chatMode.breezellOriginalMode" />：<BzWenben jian="chatMode.entanglementDetail" />。它具備 Agent 的所有能力（讀取、編輯、執行命令），並加入明確、結構化的因果推理。AI 會提出假設，利用每一次工具呼叫來證實或排除其中一個假設，並且只有在原因得到證據支持之後，才會修改程式碼。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成。因果面板的標籤在 Breezell 中同樣以英文顯示；面板中的調查內容只是範例。點選面板中的箭頭，即可展開或收合它的詳細資訊。
:::

## 何時使用 {#when}

當原因並不明顯、直接給出的答案只會是猜測時，就使用 Entanglement：

- 原因不明的 Bug 或回歸問題；
- 橫跨多個檔案、模組或系統的問題；
- 需要在多種可能的解釋或設計之間做出決定；
- 結果必須經過驗證的效能、安全性或架構工作。

對於明確、範圍有限的修改，Agent 速度更快，使用的 token 也更少。此外，處理同一個請求時，Entanglement 消耗的 token 也比 Agent 多。

## 開始調查 {#start}

1. 在輸入框下方的模式選單中選擇 **Entanglement**。如果它顯示鎖頭圖示，請參閱[鎖定的模式](/mode-selection#locked)。
2. 描述症狀、你預期的結果，以及任何限制（不能修改的檔案、必須通過的測試）。
3. 傳送。因果面板會出現在對話上方，並隨著調查的進展即時更新。

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="計數器未更新" yinguowen="計數器讀取的陣列，和 deleteTask() 修改的不是同一個。|Root cause: deleteTask() 篩選的是 tasks 陣列的副本|Predict: 修正後，Active 篩選的計數也會減一" wen="刪除任務後，計數器還是顯示原本的數字。請找出原因並修正。" da="我正在檢查 deleteTask() 修改的陣列，是否就是 renderCounters() 讀取的那一個。" />

在回答中，調查每次更新時都會出現一行 **Tracing Causal Pathways**；點選它即可閱讀這次更新背後的推理。調查完成後，這一行會顯示 **Causal Trace Complete**。

## 閱讀因果面板 {#panel}

面板最上面的一列顯示調查目前進行到哪裡：

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| 部分 | 意義 |
| --- | --- |
| **Locate → Verify → Fix** | 各個階段：找出原因、證明它，然後修改程式碼。勾號表示已完成的階段，閃爍的圓點表示目前的階段。如果證據推翻了目前的解釋，第一個階段會變成琥珀色，並顯示 **Relocate**。 |
| 狀態 | 原因尚未確定時為 **Investigating**；做了修改但尚未檢查時為 **Modified · unverified**；檢查成功後為 **Verified**；工作完成時為 **Resolved**。 |
| **Confidence** | Low、Medium 或 High，以訊號格圖示顯示。它是根據目前為止收集到的證據來判定。 |

下方那一行每隔幾秒就會輪流顯示目前的狀態：目前的評估、正在測試的假設、最新的發現。將游標移到上面即可暫停輪播。

### 詳細資訊 {#details}

點選右側的箭頭即可展開詳細資訊：

<BzJiuchan jieduan="verify" zhankai />

| 區塊 | 內容 |
| --- | --- |
| Completion contract | 任務是什麼（**Target**），以及何時算是完成（**Done**）。 |
| Root cause | 目前的解釋，包括 **Mechanism**（原因如何導致症狀）和 **Counterfactual**（如果沒有這個原因，會發生什麼事）。 |
| Hypotheses | 每個假設及其 id 和狀態：testing、confirmed 或 rejected。testing 中的假設附有 **Kill** 條件，也就是能夠排除它的觀察結果。rejected 的假設會保留從中學到的 **Lesson**，並列在 **Resolved** 下方。 |
| Evidence | 依輪次（t2、t3……）列出的最新發現及其權重：雙向上箭頭代表直接觀察，向上箭頭代表支持，波浪號代表未經驗證的推理，向下箭頭代表反對。徽章標示產生這項證據的工具。 |
| Open prediction | AI 預期在自己的解釋正確時會看到的結果，正等待檢查。 |
| Fix | 修改的內容，以及將如何驗證（**Verify**）。 |
| Causal graph | 從原因到症狀的因果鏈。 |

修正完成並通過驗證後，面板會顯示如下：

<BzJiuchan jieduan="resolved" zhankai />

若要隱藏面板，請關閉 <BzWenben jian="featureOptions.entanglement.enable" />（位於 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />）。調查本身不受影響。

## 嚴格驗證（實驗性） {#strict}

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> 中有一個更嚴格的版本：**<BzWenben jian="experimental.entanglementStrict.title" />**。

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

開啟後，面板會多出一列 **<BzWenben jian="causalGate.title" />**：<BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" />，並附上用來重現 Bug 的命令，以及信心度的依據。

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

當修正前失敗的同一個命令在修正後通過時，這一列會顯示 <BzWenben jian="causalGate.proven" />。在 <BzWenben jian="experimental.entanglementStrict.model" /> 中，你可以讓嚴格模式使用與對話不同的模型。

### 人機互動模式 {#human-in-the-loop}

開啟嚴格驗證後，你還可以開啟 **<BzWenben jian="experimental.humanLoop.title" />**：<BzWenben jian="experimental.humanLoop.desc" />

在你確認之前，AI 只會讀取。如果你的下一則訊息是在延續已確認的任務（「還是失敗」、「繼續」），工作會直接進行，不會再次詢問；新的請求則會先和你核對。

## 提示 {#tips}

- 精確描述症狀：你做了什麼、看到了什麼、預期會發生什麼。能夠重現問題的命令是最好的起點。
- 先讓 AI 完成 Verify 階段，再要求它修正；已確認的原因能帶來更小、更安全的修改。
- 在仰賴重要的修改之前，請先檢查面板的結論和驗證結果。面板是協助你做決定，而不是取代你的審查。
- 遇到全新且不相關的問題時，請開始新的對話，以免舊的調查和新的調查混在一起。

另請參閱：[模式選擇](/mode-selection#entanglement)，了解 Entanglement 與其他模式的比較。
