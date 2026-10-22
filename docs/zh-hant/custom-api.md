---
title: 自訂 API（BYOK）
description: 在 Breezell 中使用自己的 API 金鑰，透過 Anthropic 官方 API 或任何相容的中轉站執行 Claude 模型。
---

# 自訂 API（BYOK）

BYOK 是 **Bring Your Own Key**（自帶金鑰）的意思。Breezell 不使用官方額度，而是用你自己的 API 金鑰把請求送到模型提供者，由該提供者直接向你收費。

本指南以 Claude 模型為例，帶你走完整個設定流程：`claude-opus-5-5`、`claude-sonnet-5-5`、`claude-haiku-5-5` 和 `claude-fable-5-1`。

::: tip 關於本頁的畫面
本頁沒有任何螢幕截圖。下方所有 Breezell 畫面，都是根據 Breezell 原始碼以 HTML 重新繪製而成。文字會跟著本頁的語言顯示，顏色則跟著本站的淺色／深色切換（Breezell Light / Breezell Dark）。

橘色外框和數字標記用來指出要點選的位置，並不屬於 Breezell 介面。部分畫面可以互動：你可以切換通訊協定、編輯 Base URL、按下 **Claude 1M**、開關推理，以及拖動強度滑桿。
:::

## 開始之前

你需要準備三樣東西：

1. **Custom API 或更高方案的 Breezell 帳號。** 用自己的金鑰使用第三方模型屬於付費功能。沒有這個方案時，提供者頁面不會顯示表單，而是顯示 <BzWenben jian="box.models.gate.planRequired" />；如果尚未登入，則會顯示 <BzWenben jian="box.models.gate.signIn" />。
2. **一把金鑰。** 可以是從 Anthropic Console 取得的 Anthropic API 金鑰（以 `sk-ant-` 開頭），也可以是中轉站、閘道或自架代理的 Base URL 與金鑰。
3. **中轉站使用的通訊協定。** 請向提供者確認它提供的是 Anthropic Messages API（`/v1/messages`）、OpenAI Chat Completions API（`/v1/chat/completions`），還是兩者都有。

## 選擇路線

| 路線 | 適用情況 | 在 Breezell 中的位置 | 通訊協定 |
| --- | --- | --- | --- |
| **A. Anthropic API** | 你有 Anthropic Console 發出的金鑰 | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages（內建） |
| **B. 相容槽位 + Anthropic 通訊協定** | 你的中轉站提供 `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › 任一槽位 | Anthropic |
| **C. 相容槽位 + OpenAI 通訊協定** | 你的中轉站只提供 `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › 任一槽位 | OpenAI |

使用 Claude 時，建議優先選擇 **A** 或 **B**。Breezell 本身也在槽位表單中這樣建議：<BzWenben jian="settings.apiFormat.anthropicTip" />

## 步驟 1：開啟 Box（Breezell 設定）

Breezell 設定位於 **Box** 頁面。進入 Box 時，它會取代活動列、側邊欄、編輯器區域和面板；點選 **Agent** 即可回到你的程式碼。

開啟方式有三種：

- 點選標題列左側切換器中的 **Box**。
- 點選右上角的齒輪圖示，再選擇 <BzWenben jian="box.title" />。
- 開啟命令選擇區，執行 `Breezell: Open Settings`。

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## 步驟 2：前往「模型」頁面

在 Box 側邊欄中，展開 <BzWenben jian="box.title" /> 群組，再點選 <BzWenben jian="tab.models" />。Box 開啟時通常就停在這一頁。

<BzHezi gaoliang="moxing" />

頁面頂端有四個檢視：<BzWenben jian="box.usage.tab.models" />、<BzWenben jian="box.usage.tab.cache" />、<BzWenben jian="box.usage.tab.tokens" /> 和 <BzWenben jian="box.usage.tab.breezell" />。請停留在第一個。

下方的提供者分類把提供者分成四組：

| 分類 | 內容 |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Breezell 官方模型，使用你的 Breezell 額度，不需要金鑰。 |
| <BzWenben jian="box.models.group.signin" /> | 以帳號登入的提供者，例如 Codex 或 Copilot。 |
| <BzWenben jian="box.models.group.api" /> | 使用你自己金鑰的各廠商官方 API，包括 Anthropic。 |
| <BzWenben jian="box.models.group.compat" /> | 最多 50 個自訂槽位，用於中轉站、閘道和自架代理。 |

## 路線 A：Anthropic API

### A1. 選擇 Anthropic

1. 點選 <BzWenben jian="box.models.group.api" />。
2. 在 <BzWenben jian="box.models.searchProvidersPlaceholder" /> 中輸入 `Anthropic`。
3. 點選 **Anthropic** 卡片。選取的提供者會出現在下方，狀態為 <BzWenben jian="box.models.notConfigured" />。
4. 點選 <BzWenben jian="box.models.editConfig" />，開啟它的設定。

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. 貼上 Anthropic 金鑰

設定中只有一個欄位：API 金鑰。

1. 點選 **Get your API Key** 卡片，瀏覽器會開啟 Anthropic Console（`console.anthropic.com/settings/keys`）。
2. 建立一把金鑰並複製，格式類似 `sk-ant-api03-...`。
3. 貼到欄位中。點選眼睛圖示可以顯示或隱藏金鑰。

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell 使用金鑰前會先清理它：移除空白、前後的引號、開頭的 `Bearer `，以及複製時常被一併帶入的不可見字元。Anthropic 提供者沒有 Base URL 欄位；Breezell 一律使用 `https://api.anthropic.com`。

### A3. 開啟想用的 Claude 模型

金鑰一儲存，狀態就會變成 <BzWenben jian="box.models.configured" />，清單中會列出 Breezell 內建的 Claude 模型，最新的排在最前面。

預設只有前五個是啟用的：`claude-fable-5-1`、`claude-fable-5`、`claude-opus-5`、`claude-opus-5-5` 和 `claude-opus-4-8`。打開該列最右側的開關，即可把模型加入對話頁的模型選擇器，例如 `claude-sonnet-5-5` 和 `claude-haiku-5-5`。

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

表格各欄的意思如下：

| 欄位 | 說明 |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | 送給 API 的模型 ID。綠點表示該模型已啟用。 |
| <BzWenben jian="box.models.context" /> | 模型完整的上下文視窗。所有 Claude 5 模型都是 1M。 |
| <BzWenben jian="box.models.capabilities" /> | 四個圖示：<BzWenben jian="box.models.filter.vision" />、<BzWenben jian="box.models.filter.tools" />、<BzWenben jian="box.models.filter.reasoning" />、<BzWenben jian="box.models.filter.web" />。圖示亮起表示模型具備該能力。 |
| <BzWenben jian="models.pricing" /> | 以美元計、<BzWenben jian="box.models.price" /> 的輸入／輸出價格，取自 Breezell 內建的價目表。實際金額以 Anthropic 的帳單為準。 |
| <BzWenben jian="box.mcp.colEnabled" /> | 在對話頁的模型選擇器中顯示或隱藏此模型。 |

表格變窄時，Breezell 會先隱藏 <BzWenben jian="box.models.context" /> 欄，再隱藏 <BzWenben jian="box.models.capabilities" /> 欄；這兩欄的數值會移到模型名稱的工具提示中。

如果 Anthropic 推出了清單中還沒有的模型，請點選 <BzWenben jian="box.models.fetch" />。Breezell 會用你的金鑰讀取 `https://api.anthropic.com/v1/models`，讓你新增新的 ID。你也可以在 <BzWenben jian="box.models.addModelPlaceholder" /> 中輸入 ID，再點選 <BzWenben jian="box.models.add" />。

路線 A 到此完成，請接著閱讀[在對話中使用 Claude](#use-claude-in-chat)。

## 路線 B：使用 Anthropic 通訊協定的相容槽位

如果你的中轉站、API 閘道或自架代理是透過 Anthropic Messages API 提供 Claude，請走這條路線。

### B1. 開啟相容槽位

1. 點選 <BzWenben jian="box.models.group.compat" />。
2. 點選槽位卡片。Slot 1 一定存在；新的槽位會在名稱下方顯示 <BzWenben jian="settings.noEndpoint" />。
3. 如果要分開管理多個中轉站，請為每個中轉站各點一次 <BzWenben jian="box.models.addCompat" />。Breezell 共有 50 個槽位，每個槽位都是獨立的通道，各自擁有位址、金鑰、通訊協定和模型。
4. 點選 <BzWenben jian="box.models.editConfig" />。

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. 填寫槽位

每個槽位的表單都一樣。你可以直接在下方試試：修改 Base URL 或通訊協定，<BzWenben jian="settings.requestUrl" /> 就會跟著更新，和在 Breezell 中完全相同。

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />：最多 30 個字元的名稱，例如 `Claude Relay`。它會成為「模型」頁面上的卡片標題，以及對話頁模型選擇器中的群組名稱。
- <BzWenben jian="settings.baseUrl" />：提供者給你的位址，必須以 `http://` 或 `https://` 開頭，例如 `https://relay.example.com` 或 `http://127.0.0.1:8080`。

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />：中轉站的金鑰。輸入後會遮蔽顯示，點選眼睛圖示即可查看。

**<BzWenben jian="settings.sectionProtocol" />**

請選擇 **Anthropic**。這三個按鈕決定請求格式：

| 按鈕 | 請求格式 | 適合 Claude 嗎？ |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | 只在中轉站沒有 `/v1/messages` 時使用（路線 C）。 |
| Responses | OpenAI Responses | 否。這是給 GPT 模型用的。 |
| **Anthropic** | Anthropic Messages | **是。** Breezell 建議 Claude 使用這個選項。 |

接著確認 <BzWenben jian="settings.endpointPreset" />。使用 Anthropic 通訊協定時有兩個預設：

| 預設 | 路徑 | 適用對象 |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | 幾乎所有中轉站。保留這個即可。 |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | 僅適用於火山 Agent Plan。 |

### B3. 確認請求地址

預設下方的 <BzWenben jian="settings.requestUrl" /> 就是 Breezell 實際會呼叫的完整位址。Breezell 會把 Base URL 與預設路徑接在一起，並移除重複的部分，所以常見的 Base URL 寫法都能正常運作：

| 你輸入的 Base URL | 預設 | 請求地址 |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

請將結果與提供者的文件比對。如果提供者把 API 放在特殊的路徑下，請調整 Base URL，讓請求地址的結尾與提供者文件所寫的完全一致。

### B4. 自訂請求標頭與 Claude 1M（選填）

<BzWenben jian="settings.customHeaders" /> 會在這個槽位的每個請求中加上 HTTP 標頭。除非提供者有特別要求，否則保持 `{}` 即可。

這個值必須是合法的 JSON：鍵和值都要用雙引號，不能有註解，也不能有尾隨逗號。

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

**Claude 1M** 按鈕填入的正是這個標頭。如果你的中轉站需要這個 beta 標頭才能接受超過 200K 的提示，就使用它。Breezell 的對話仍會讓每個 Claude 模型從 200K 開始；要改用 1M，請在對話頁的模型選擇器中逐一為模型切換（請參閱 [Context、Reasoning 與 Fast](#context-reasoning-and-fast)）。

在請求標頭下方，你會看到 <BzWenben jian="settings.accountPool" /> 卡片。帳號池可以在同一個槽位上輪替多把金鑰或多條線路。初次設定時用不到它。

### B5. 新增 Claude 模型

新的槽位沒有任何模型，你可以用以下兩種方式新增。

**擷取清單。** 點選 <BzWenben jian="box.models.fetch" />。Breezell 會向中轉站查詢有哪些模型，再以勾選清單列出。勾選 Claude 模型後，點選 <BzWenben jian="box.models.addSelected" />。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**輸入 ID。** 在 <BzWenben jian="box.models.addModelPlaceholder" /> 中輸入模型 ID，再點選 <BzWenben jian="box.models.add" />。ID 必須與中轉站的命名完全一致，例如 `claude-opus-5-5`。中轉站沒有提供模型清單時，就用這個方法。

### B6. 檢測槽位

點選 <BzWenben jian="box.models.health.checkSlot" />，對這個槽位送出一個簡短的請求。失敗的模型會標上 <BzWenben jian="box.models.health.ribbonFail" />，回應太慢的會標上 <BzWenben jian="box.models.health.ribbonTimeout" />；完全連不上的槽位，則會在卡片上標示 <BzWenben jian="box.models.health.ribbonDown" />。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

如果想更仔細地檢查，請點選槽位卡片上方的 <BzWenben jian="box.models.checkConnectivity" />。它可以一次檢測多個槽位和模型，而 <BzWenben jian="box.models.health.checkStreaming" /> 會告訴你中轉站是逐段串流回覆（<BzWenben jian="box.models.health.stream.streaming" />）、壓住了推理過程（<BzWenben jian="box.models.health.stream.heldThinking" />），還是等到最後才一次送出全部內容（<BzWenben jian="box.models.health.stream.buffered" />）。

## 路線 C：使用 OpenAI 通訊協定的相容槽位

有些中轉站只透過 OpenAI Chat Completions 格式提供 Claude。請依照路線 B 設定槽位，但有以下不同：

1. 在 <BzWenben jian="settings.sectionProtocol" /> 中選擇 **OpenAI**。
2. 保留預設 <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" />（`/v1/chat/completions`）。
3. 以中轉站使用的 ID 新增模型。許多中轉站使用 `claude-opus-5-5`，有些則會加上廠商前綴，例如 `anthropic/claude-opus-5-5`。

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell 會依名稱辨識 Claude 模型，所以 `anthropic/claude-opus-5-5` 或 `claude-opus-5.5` 都會套用和 `claude-opus-5-5` 相同的限制。請留意表單本身的提示：「<BzWenben jian="settings.apiFormat.openaiTip3" />」。此外，在 OpenAI 通訊協定下，Breezell 也無法為 Claude Opus 提供 **Fast**。如果你的中轉站同時提供 `/v1/messages`，請把槽位切換成 **Anthropic**。

## 管理你的 Claude 模型

### 列選單

每個模型列都有一個 **⋯** 按鈕。對相容槽位上的 Claude 模型，它提供 <BzWenben jian="box.models.pin" />、<BzWenben jian="box.models.advanced" /> 和 <BzWenben jian="box.models.remove" />。將滑鼠游標移到某一列上，模型名稱旁就會出現複製圖示。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 設定價格

Breezell 知道 Anthropic 官方 API 的定價，但不知道你的中轉站怎麼收費。在相容槽位上，價格欄會顯示 <BzWenben jian="box.models.editPrice" />。點選後，輸入中轉站每百萬 token 的美元價格：輸入、輸出、快取命中，以及 Claude 會用到的 5 分鐘與 1 小時快取建立。之後 <BzWenben jian="box.usage.tab.tokens" /> 檢視除了 token 數，也會顯示費用。沒有填寫價格時，Breezell 仍會統計 token，只是不計算金額。

### 進階設定

本指南中的每個 Claude 模型 ID，Breezell 都能辨識並自動填入限制，所以大多數人根本不需要開啟這個對話框。只有在中轉站把模型改了名（例如 `my-claude`）、Breezell 顯示無法辨識該模型，或中轉站的限制比較嚴格時，才需要開啟它。

請先開啟 <BzWenben jian="models.enableCustomSettings" />；在那之前，所有卡片都是灰色的唯讀狀態。

<BzGaoji />

Breezell 對 Claude 5 模型使用的數值如下：

| 設定 | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| 上下文視窗（短檔／長檔） | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | 關 | 關 | 關 | **開** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | 關 | **開** | 關 | 關 |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

上表是使用 Anthropic 通訊協定的相容槽位。在 Anthropic 提供者（路線 A）上，系統訊息改為 `separated`；兩種方式 Claude 都能正常運作。**Fast** 只在 Anthropic 提供者，以及使用 Anthropic 通訊協定的槽位上提供。

接受 token 數量的欄位可以加上 `k` 或 `m` 後綴：`128k` 會變成 `128000`，`1m` 會變成 `1000000`。上下文或輸出大小不要設得比中轉站允許的還大，否則請求會失敗。

在使用 **OpenAI** 通訊協定的槽位上，<BzWenben jian="models.systemMessage" /> 可選 `system-role` 或 `developer-role`，<BzWenben jian="models.toolFormat" /> 可選 `OpenAI Style` 或 `None (XML)`。使用 Claude 時請保持 `OpenAI Style`，工具呼叫才能正常運作。

## 在對話中使用 Claude {#use-claude-in-chat}

### 選擇模型

對話會在 Box 旁邊保持開啟；如果也想叫回編輯器，請點選標題列中的 **Agent**。在對話輸入框下方點選模型名稱，即可開啟模型選擇器。

- <BzWenben jian="box.models.group.api" /> 分頁會列出你在 Anthropic 提供者（路線 A）上啟用的 Claude 模型，並附上定價。
- 切換到選擇器底部的 **OpenAI-Compatible**，就能看到相容槽位（路線 B 和 C）。每個槽位都是一個群組，以它的暱稱作為標題。

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context、Reasoning 與 Fast {#context-reasoning-and-fast}

將滑鼠游標移到選擇器中的模型上，就會開啟它的選項。這個面板可以互動，不妨動手試試。

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**：`200K`（標示為 <BzWenben jian="inputToolbar.contextDefault" />）或 `1M`。Breezell 會讓每個 Claude 模型從 200K 開始，只有在你選擇 `1M` 之後，才會改用較大的上下文額度。
- **Reasoning**：Claude Fable、Opus 和 Sonnet 5.x 一律會推理，所以這個開關鎖定為開啟。`claude-haiku-5-5` 則可以關閉推理，換取更快的回答。
- **Effort**：`Low`、`Medium`、`High`、`Extra High` 和 `Max`，從 **Faster** 到 **Smarter**。滑桿拉到 `Max` 時會變成紫色。
- **Fast**：只在 `claude-opus-5-5`（以及 Opus 5／Opus 4.8）上提供。費用為 2 倍，回答速度約快 2.5 倍。

你的選擇會顯示在輸入框下方的模型名稱旁，例如 `claude-opus-5-5 200K Medium` 或 `claude-opus-5-5 1M High Fast`。每個模型都會各自記住設定。

### 傳送訊息

輸入訊息並送出。如果一切都設定正確，回覆就會透過你自己的金鑰傳回來。

<BzLiaotian moxing="claude-opus-5-5" wen="你好！你是哪個模型？" da="你好！我是 Claude Opus 5.5，正透過你自己的 API 金鑰在 Breezell 中執行。今天我們要一起做些什麼？" />

BYOK 設定到此全部完成。

## 該用哪個 Claude 模型

| 模型 ID | 上下文 | 輸入／輸出價格（每百萬 token） | 預設強度 | 可關閉推理 | Fast | 適合用途 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | 否 | 否 | 最困難的問題和大型重構 |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | 否 | 是（2×） | 日常 Agent 工作：預設首選 |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | 否 | 否 | 兼顧速度與成本 |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | 是 | 否 | 快速提問和小幅修改 |

以上價格是 Breezell 內建價目表中 Anthropic API 的定價，中轉站則會自行定價。`claude-haiku-5-5` 的提示超過 100K token 時，會以 5 倍費率計費。

## 疑難排解

| 你看到的狀況 | 代表的意思 | 處理方式 |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | 你的方案不包含自訂提供者。 | 升級到 Custom API 或更高方案。 |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | 這個槽位還沒有 Base URL。 | 填寫 <BzWenben jian="settings.baseUrl" />。 |
| <BzWenben jian="box.models.fetchNeedsKey" /> | 金鑰欄位是空的。 | 貼上金鑰。 |
| <BzWenben jian="box.models.fetchAuthFailed" /> | 提供者回傳了 401 / 403。 | 重新複製金鑰，確認它屬於這個提供者，並檢查它的方案和 IP 白名單。 |
| <BzWenben jian="box.models.fetchFailed" /> … | 中轉站沒有模型清單，或位址有誤。 | 檢查 <BzWenben jian="settings.requestUrl" />，或手動新增模型 ID。 |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | 中轉站回傳的所有模型都已經在這個槽位中。 | 不需要做任何處理。 |
| <BzWenben jian="box.models.health.errTimeout" /> | 請求逾時。 | 檢查位址、代理和網路線路。 |
| <BzWenben jian="box.models.health.errConnect" /> | 無法連上主機。 | 檢查位址、DNS 和代理。 |
| <BzWenben jian="box.models.health.errHttp" /> | 中轉站回應了 HTTP 錯誤。 | 最常見的原因是路徑或通訊協定錯誤：請將 <BzWenben jian="settings.requestUrl" /> 和通訊協定與提供者的文件比對。 |
| 請求地址中出現 `/v1/v1`，或少了 `/v1` | Base URL 和預設搭配不起來。 | 修正 Base URL，直到 <BzWenben jian="settings.requestUrl" /> 正確為止。 |
| 等了很久之後，回覆才一次全部出現 | 中轉站緩衝了串流。 | 執行 <BzWenben jian="box.models.health.checkStreaming" />。如果結果是 <BzWenben jian="box.models.health.stream.heldThinking" />，調低強度可以縮短等待時間。 |
| 超過 200K 的請求失敗 | 中轉站需要 1M beta 標頭，或不支援 1M 上下文。 | 在 <BzWenben jian="settings.customHeaders" /> 中按下 **Claude 1M**，或讓模型維持在 `200K`。 |
| 擷取後模型清單仍然是空的 | 清單沒有載入。 | 重新啟動 Breezell 後再擷取一次，或手動新增 ID。 |

## 常見問題

**可以同時使用 Anthropic 官方金鑰和中轉站嗎？**
可以。路線 A 和每個相容槽位都彼此獨立。對話頁的模型選擇器會把它們並列顯示，你可以在每個對話中個別切換。

**可以儲存多個中轉站和金鑰嗎？**
可以。每個中轉站使用一個槽位（最多 50 個）。如果要在同一個中轉站上輪替多把金鑰，請使用該槽位的 <BzWenben jian="settings.accountPool" />。Box 側邊欄中的 <BzWenben jian="box.vault.group" /> 會把中轉站位址和金鑰保存在系統鑰匙圈中，也能幫你自動填入槽位。

**由誰向我收費？**
由你所使用金鑰的那個提供者收費。這些請求不會扣除你的 Breezell 額度。<BzWenben jian="box.usage.tab.tokens" /> 檢視會顯示你用了多少 token；在相容槽位上設定價格後，也能看到費用。
