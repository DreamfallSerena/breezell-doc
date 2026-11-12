---
title: 插件
description: 從 Breezell 市集安裝插件，或用 Breezell API 自己寫一個。
---

# 插件

Breezell 插件是一種 VS Code 擴充功能，另外附帶 `vscode.breezell`，因此能與 Breezell 本身互動：對話、Agent、模型選擇器，以及編輯器自己的畫面。插件只在你登入 Breezell 時執行；登出後就會停用。

## 安裝與管理

打開 **Box ▸ 插件**。市集會列出所有已上架的插件：可以搜尋、依分類篩選、切換開源與閉源，也能一頁一頁瀏覽。每張卡片都有「安裝」、「開啟」、啟用開關與「解除安裝」。

- **已安裝**：每個插件一列，顯示狀態、版本、來源、授權、識別碼，以及「視窗」、「加入的內容」、「權限」三張卡片。
- **開發**：從範本建立插件，並列出從程式碼到上架的步驟。
- **安裝本機 .vsix**：安裝你自己打包的套件；檢查碼與已上架版本不一致的套件不會安裝。

加入面板或視窗的插件，也會出現在 Box 側邊欄的「插件」底下。

## 插件的種類

| 種類 | 內容 | 範例 |
|---|---|---|
| Pack | 沒有程式碼：在 `package.json` 宣告技能、AI 規則、MCP 伺服器與主題 | Starter Pack |
| Panel | 在 Breezell 內開啟自己的頁面，並跟著對話走 | Focus Player |
| AI | 使用你的對話模型的指令 | Doc Writer |
| Window | 自己的視窗，也可以不開編輯器單獨啟動 | Focus Timer |
| Conversation | 讀取對話、傳送訊息、核准工具呼叫，以及開啟、傳話給、關閉子代理 | Chat Mirror |
| Screens | 在 Breezell 自己的畫面上加入按鈕、頁面、替換區塊、程式碼區塊與模式 | Desk Pet |
| Companion | 浮在對話框上、跟著 AI 動作的小夥伴 | Desk Pet |
| Long-running | 讓對話持續進行到完成，有次數限制與自己的頁面 | Goal |

這些種類可以組合：同一個插件可以同時提供技能、面板、AI 指令與視窗。若想看包含設定頁面、從 GitHub Release 下載資料，以及在系統中安裝元件的較大插件，請參考 Breezell IME。

## 開發插件

在 Breezell 中打開 **Box ▸ 插件 ▸ 開發**，填入識別碼與名稱，選擇範本（Pack、Panel、AI command、Window 或 Minimal）以及開源或閉源，再選擇資料夾並在新視窗開啟。按 **F5** 即可執行。

從命令列建立（需要 Node.js 18 以上）：

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| 指令 | 作用 |
|---|---|
| `npm run build`／`npm run watch` | 用 esbuild 把 `src/extension.ts` 打包成 `dist/extension.js` |
| `npm run typecheck` | TypeScript 型別檢查 |
| `npm run validate` | 檢查 `package.json` |
| `npm run package:open` | 以開源方式打包：原始碼與 source map 一併放進套件 |
| `npm run package:closed` | 以閉源方式打包：只放壓縮後的程式碼，沒有原始碼與 source map |
| `npm run submit -- --market` | 把套件加入市集 |

## 插件能做什麼

插件要在 `package.json` 宣告它需要的權限；沒有宣告的一律不能用。日常權限（例如知道對話何時開始、結束）預設開啟。有風險的權限（例如使用你的對話模型、讀取對話、傳送訊息、核准工具呼叫、讀取你的程式碼或對話框、在訊息送出前修改它、讀取自訂 API 金鑰）會在插件第一次用到時詢問，並記住你的回答。

插件碰不到你的帳號、方案、額度、計費、自訂 API 設定、權限對話框、工具核准與插件管理畫面。需要你處理的提示一律顯示在插件畫面之上；插件加進 Breezell 的按鈕會標示「來自插件：名稱」。

### 子代理

從比 1.4.56 新的 Breezell 開始，插件也能操作子代理：子代理是「代理」或「糾纏」模式的對話開出的獨立對話，沿用那段對話的模式，做完會回報給它。有 `chat.read` 的插件可以列出一段對話的子代理，看出哪些對話是子代理、各自在做什麼；有 `chat.send` 的插件可以用一項任務開子代理、傳話給它、關閉它。插件這樣送出的內容一律標示為插件的，不會當成你或主 agent 說的話；插件開啟或關閉子代理時，主 agent 也會收到通知。詳見開發者指南的 [Subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md#subagents-chatread-chatsend)。

## 發佈

Fork [BreezellCode 儲存庫](https://github.com/BreezellCode/BreezellCode)，打包插件（`npm run package:open` 或 `npm run package:closed`），執行 `npm run submit -- --market`，再開一個 pull request。市集檢查會先跑過，接著由維護者審查。閉源插件只會包含壓縮後的程式碼。

## 完整開發者指南

完整的指南（`package.json`、每一項權限、API 的每個呼叫、錯誤、限制、對話、模型與供應商、Agent、Breezell 的畫面、視窗、重新啟動、翻譯、安全性、發佈與範例）位於儲存庫中：

- [插件總覽](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [開始開發](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [API 參考](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [權限](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [對話與子代理](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md)
- [發佈](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

從範本建立的插件也會附上 AI 技能（`.agents/skills/breezell-plugin/`），並以這些頁面作為參考資料，因此 AI 助理也能照著同一份指南開發。
