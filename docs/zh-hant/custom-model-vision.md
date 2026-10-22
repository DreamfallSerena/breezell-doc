---
title: 自訂模型視覺
description: 透過視覺代理，讓純文字模型也能處理圖片：由另一個模型替它讀取圖片。
---

# 自訂模型視覺

有些模型只能讀取文字。設定**視覺代理**後，這類模型依然可以處理螢幕截圖和其他圖片：先由另一個看得懂圖片的模型讀取圖片，Breezell 再把它寫出的描述交給純文字模型。

::: tip 關於本頁的畫面
下方的 Breezell 畫面是根據 Breezell 原始碼以 HTML 重新繪製而成。畫面文字會跟著本頁的語言顯示。視覺代理對話框中的模型選單可以互動。
:::

## 何時需要它

Breezell 知道哪些模型無法接收圖片。在 Box ▸ <BzWenben jian="tab.models" /> 中，這些模型的第一個能力圖示（<BzWenben jian="box.models.filter.vision" />）是灰色的，而且只有這些模型的 **⋯** 選單中會出現 <BzWenben jian="models.visionProxy" /> 項目。

舉例來說，在 DeepSeek 提供者上，`deepseek-v4-pro`、`deepseek-chat` 和 `deepseek-reasoner` 是純文字模型，而 Flash 模型可以自行讀取圖片。所有 Claude 模型都原生支援讀取圖片，Breezell 模型也從來不需要代理。

在沒有代理的情況下為純文字模型附加圖片，會發生什麼事取決於提供者：

| 提供者 | 沒有視覺代理時 |
| --- | --- |
| 官方 API 提供者（DeepSeek、OpenAI 等） | 訊息不會送出，輸入框上方會出現 <BzWenben jian="chat.visionProxyHint.requiredTitle" /> 提示。 |
| OpenAI 相容槽位 | 圖片會原封不動地送到中轉站，因為許多中轉站會自行接上視覺模型。只有在你的中轉站無法處理圖片時，才需要設定代理。 |

## 運作方式

1. 你向純文字模型送出一則附有圖片的訊息。
2. Breezell 會先把圖片送到你選擇的圖片辨識模型，要求它逐字轉錄所有可見的文字，並描述與你的請求相關的版面配置、控制項、狀態、顏色和錯誤，不得捏造它看不到的細節。
3. 在送給純文字模型的請求中，這段描述會取代圖片，模型接著照常回答。

在 Breezell 執行期間，每張圖片對每個辨識模型只會描述一次，之後便重複使用這段描述，所以同一張螢幕截圖不會被分析兩次。辨識請求由辨識模型的提供者計費。

## 設定視覺代理

本範例為 `deepseek-v4-pro`（純文字）設定代理：`claude-sonnet-5-5`。

### 1. 開啟模型選單

1. 開啟 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />，選擇 <BzWenben jian="box.models.group.api" />，再選取 **DeepSeek**。
2. 如果 `deepseek-v4-pro` 尚未啟用，請將它開啟。它的 <BzWenben jian="box.models.filter.vision" /> 圖示是灰色的。
3. 點選該列最右側的 **⋯**，然後選擇 <BzWenben jian="models.visionProxy" />。

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. 選擇圖片辨識模型

<BzWenben jian="models.visionProxy" /> 對話框會在標題下方顯示你正在設定的模型。

1. 開啟 <BzWenben jian="models.visionProxyModel" />。這份清單看起來和對話頁的模型選擇器一樣，有搜尋功能和提供者分組，但只會列出能讀取圖片的模型。
2. 選擇一個模型，例如 `claude-sonnet-5-5`。
3. 點選 <BzWenben jian="common.save" />。

你可以在這裡試用這個選單：

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

任何能讀取圖片的模型都可以使用。`claude-sonnet-5-5` 能為內容繁雜的螢幕截圖提供詳盡的描述；`claude-haiku-5-5` 則更快、更便宜，適合簡單的圖片。

### 3. 傳送圖片

在對話輸入框下方選擇 `deepseek-v4-pro`，將圖片貼上或拖曳到輸入框中，然後送出訊息。

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

現在，純文字模型就能針對圖片回答：

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="為什麼我啟動應用程式時會出現這個錯誤？" da="這張螢幕截圖顯示：Error: Cannot find module './config.json'（位於 loadConfig，src/config.ts 第 4 行）。應用程式會在編譯後的檔案旁尋找 config.json，但建置過程沒有把它複製過去。請將 config.json 加入建置時要複製的檔案，或改用相對於專案根目錄的路徑載入它。" />

## Breezell 要求設定視覺代理時

如果你在官方提供者上為純文字模型附加圖片，而該模型還沒有代理，Breezell 不會送出圖片，並會在輸入框上方顯示以下提示：

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

點選 <BzWenben jian="chat.visionProxyHint.configureAction" /> 開啟 Box，依照上述步驟設定代理，然後再送出一次。

你也可能看到：

| 提示或錯誤 | 代表的意思 | 處理方式 |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | 被選為代理的模型同樣無法讀取圖片。 | 重新開啟對話框，選擇能讀取圖片的模型。 |
| `The configured vision proxy (…) could not analyze the image.` | 辨識請求失敗，例如代理模型的提供者尚未設定，或拒絕了請求。 | 檢查代理模型的提供者，或改選其他代理。 |

如果你沒有設定代理就繼續對話，先前的圖片會從後續訊息中略去，讓對話得以繼續進行。

## 變更或移除代理

再次從模型的 **⋯** 選單開啟 <BzWenben jian="models.visionProxy" />。選擇其他模型，或選擇清單頂端的 <BzWenben jian="models.visionProxyNotConfigured" /> 以移除代理，然後點選 <BzWenben jian="common.save" />。設定代理後，該列的 **⋯** 按鈕上會顯示一個小圓點。

## 總結

1. Box ▸ <BzWenben jian="tab.models" />：找到純文字模型（<BzWenben jian="box.models.filter.vision" /> 圖示為灰色）。
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />。
3. 在 <BzWenben jian="models.visionProxyModel" /> 中選擇能讀取圖片的模型，然後儲存。
4. 照常將圖片傳送給純文字模型。
