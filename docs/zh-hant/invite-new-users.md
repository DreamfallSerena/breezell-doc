---
title: 邀請新使用者教學
description: 一系列分步驟教學，說明如何透過五次助力解鎖 Entanglement 和 Teams：在編輯器中登入、在 breezell.com 產生你的邀請連結、協助好友為你助力，並追蹤你的進度。
---

# 邀請新使用者教學

所有付費方案都包含 Entanglement 和 Teams。使用 Free 方案時，你也可以**永久**解鎖這兩個模式：只要有五位 Breezell 使用者透過你的專屬邀請連結為你助力即可。本頁以一系列簡短的教學，帶你走完從登入到使用這兩個模式的完整流程。

::: tip 關於本頁的畫面
這些畫面是根據 Breezell 和 breezell.com 的原始碼以 HTML 重新繪製而成，其中部分按鈕可以點選。breezell.com 只提供英文版，因此在本指南的所有語言中，官網畫面都以英文顯示；Breezell 的畫面則會跟著本頁的語言顯示。每個官網畫面頂端的列會顯示你目前所在的網址。畫面中的名稱、電子郵件地址、連結和代碼都只是範例。
:::

## 教學一覽 {#overview}

| # | 教學 | 對象 | 位置 |
| --- | --- | --- | --- |
| 1 | [在編輯器中登入 Breezell](#sign-in-editor) | 你 | Breezell 和你的瀏覽器 |
| 2 | [找到解鎖卡片](#find-card) | 你 | breezell.com |
| 3 | [產生並複製你的邀請連結](#generate) | 你 | breezell.com |
| 4 | [分享連結](#share) | 你 | 任何聊天應用程式或電子郵件 |
| 5 | [以好友身分助力](#assist) | 你的好友 | breezell.com |
| 6 | [追蹤你的進度](#progress) | 你 | breezell.com 和 Breezell |
| 7 | [使用 Entanglement 和 Teams](#use) | 你 | Breezell |
| – | [訊息與解決方法](#messages) | 所有人 | |

## 解鎖方式 {#rules}

- **五次助力**即可解鎖 Entanglement 和 Teams。解鎖是永久的：無論你之後使用哪種方案，它都會保留在你的帳號中。
- **付費方案**在有效期間內就包含這兩個模式，不需要任何助力。這包括 Free 以外的任何方案、一次性付費的 Custom API 授權，以及有效團隊中的席位。如果方案在你累積五次助力之前結束，這兩個模式會再次鎖定。
- **每個 Breezell 帳號只能為一個人助力。** 為同一個人助力兩次，也不會重複計算。
- **每台裝置只能用於一次助力**，無論裝置上登入的是哪個帳號。
- **你不能為自己助力。**
- **邀請連結的有效期限為 30 天。** 產生新連結後，先前的連結就會失效；你已經獲得的助力會保留下來。
- **解鎖屬於你的 Breezell 帳號。** 請在 breezell.com 和編輯器中使用同一個帳號。

## 教學 1：在編輯器中登入 Breezell {#sign-in-editor}

編輯器會依據它所登入的 Breezell 帳號檢查你的解鎖狀態。尚未登入時，無論你在官網上的進度如何，Entanglement 和 Teams 都會保持鎖定，模式選單也會顯示 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0|5" />。如果 Box 側邊欄底部的帳號卡片已經顯示你的名稱，請直接前往[教學 2](#find-card)。

### 步驟 1：開啟帳號卡片 {#sign-in-card}

開啟 Box，也就是 Breezell 設定所在的頁面：點選標題列左側切換器中的 **Box**（其他開啟方式請參閱[自訂 API（BYOK）](/custom-api)）。側邊欄底部的帳號卡片會顯示 <BzWenben jian="box.account.notSignedIn" />。請點選它。

<BzHezi zu="none" zhanghu="weidenglu" zhanghugaoliang="ka" biaoji="1" />

### 步驟 2：點選登入 {#sign-in-button}

帳號面板會在卡片上方開啟。點選 <BzWenben jian="box.account.signIn" />，Breezell 就會在你的預設瀏覽器中開啟 breezell.com 的登入頁面。

<BzHezi zu="none" zhanghu="weidenglu" zhanghukai zhanghugaoliang="denglu" biaoji="2" />

### 步驟 3：在官網上登入 {#sign-in-website}

如果這個瀏覽器尚未登入 breezell.com，就會出現登入頁面。輸入你的電子郵件和密碼，然後點選 **Sign In**，或使用 **Continue with GitHub**。如果你還沒有帳號，請點選底部的 **Sign Up**，再透過三個步驟建立帳號（請參閱[建立帳號](#assist-register)）。

<BzWangzhan ye="denglu" laiyuan="bianjiqi" gaoliang="denglu" biaoji="3" />

如果瀏覽器已經登入，官網會略過這個步驟，直接進入確認畫面。

### 步驟 4：確認桌面版登入 {#sign-in-confirm}

官網會請你確認是否允許 Breezell 以你的帳號登入。請檢查卡片上的名稱和電子郵件，然後點選 **Sign in**。若要改用其他帳號，請改為點選 **or sign in with another account**。

<BzWangzhan ye="zhuomian" gaoliang="queren" biaoji="4" />

接著，瀏覽器會詢問是否可以開啟 Breezell。請選擇 **Open**。只有在你剛剛親自從 Breezell 發起登入時，才確認這個頁面。

### 步驟 5：回到 Breezell {#sign-in-done}

頁面會確認登入已完成，你可以關閉這個分頁：

<BzWangzhan ye="zhuomian" zhuangtai="wancheng" />

如果 Breezell 沒有自動繼續，請依照頁面上的說明，複製頁面顯示的代碼，貼到 Breezell 的登入頁面中。

回到 Breezell 後，帳號卡片會顯示你的名稱、方案和電子郵件。點選它即可查看你的方案和餘額：

<BzHezi zu="none" zhanghu="yidenglu" zhanghukai />

Breezell 最多會等待五分鐘讓登入完成。如果超過這個時間，請再次點選 <BzWenben jian="box.account.signIn" />。

## 教學 2：找到解鎖卡片 {#find-card}

解鎖卡片位於 breezell.com 的帳號設定中。

1. 開啟 [breezell.com](https://breezell.com)，並使用與編輯器中**相同的帳號**登入。點選右上角的頭像，再點選 **Profile**。

<BzWangzhan ye="caidan" gaoliang="profile" biaoji="1" />

2. 進入帳號頁面後，點選左側邊欄中的 **Settings**。你也可以開啟側邊欄底部顯示你名稱的選單，再點選 **Account settings**：

<BzWangzhan ye="yonghucaidan" gaoliang="zhanghushezhi" biaoji="2" />

3. Settings 會顯示你的帳號資料、你的團隊、解鎖卡片 **Unlock Entanglement and Teams Modes** 以及登出選項。卡片上會顯示你已獲得幾次助力：

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="ka" biaoji="3" />

如果你使用付費方案，卡片會改為顯示 **Entanglement and Teams modes are included in your plan**，你不需要做任何事。請直接前往[教學 7](#use)。

## 教學 3：產生並複製你的邀請連結 {#generate}

1. 在解鎖卡片上，點選 **Generate invite link**。

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="shengcheng" biaoji="1" />

2. 你的連結會出現在按鈕下方。第一個按鈕會變成 **Regenerate**，旁邊則會出現 **Copy link**。點選 **Copy link** 後，按鈕會短暫顯示 **Copied**。你可以在這裡試試看：

<BzWangzhan ye="shezhi" :jindu="0" lianjie gaoliang="fuzhi" biaoji="2" />

3. 剪貼簿中現在有一段簡短的訊息和你的連結：

```text
"Can you help me unlock this? I'm waiting in the Breezell editor."
https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN
```

上面的 token 只是預留位置：請傳送你自己的帳號所產生的文字。

::: warning 只產生一次，然後保留這段文字
卡片只會在你離開頁面之前顯示你的連結。當你回來時，卡片會再次提供 **Generate invite link**，而產生連結會建立一個**新的**連結：你已經傳送出去的連結將會失效。請保留複製的文字，並將同一個連結傳送給所有五位好友。只有在連結超過 30 天已過期，或流傳到不該收到的人手中時，才產生新的連結。
:::

## 教學 4：分享連結 {#share}

- 將複製的文字貼到任何聊天應用程式或電子郵件中，傳送給五個人。
- 每位好友都需要有自己的 Breezell 帳號。註冊是免費的，而且可以直接從連結完成。
- 每位好友都應該使用自己的電腦或手機：已經用於助力的裝置無法再次助力。
- 邀請頁面會將你的名稱縮短為首尾兩個字母，例如 Alex 會顯示為 **A\*\*\*x**。請告訴好友這個連結是你傳的，讓他們能認出來。
- 任何拿到連結的人都可以為你助力，所以請只傳給你認識的人。
- 邀請頁面是英文的。你可以把[教學 5](#assist)的連結傳給好友，讓他們以自己的語言跟著操作。

## 教學 5：以好友身分助力 {#assist}

這篇教學是寫給你邀請的好友看的：說明他們開啟你的連結後會看到什麼。

### 步驟 1：開啟連結 {#assist-open}

邀請頁面會顯示邀請你的人。如果你尚未登入 breezell.com，頁面會請你先登入或註冊：

<BzWangzhan ye="yaoqing" zhuangtai="weidenglu" gaoliang="zhuce" biaoji="1" />

- 如果你還沒有 Breezell 帳號，請點選 **Register**，然後繼續步驟 2。
- 如果你已經有帳號，請點選 **Sign in**。使用電子郵件和密碼或 GitHub 登入，然後繼續步驟 3。
- 如果你已經登入，頁面會直接顯示 **Assist** 按鈕。請繼續步驟 3。

### 步驟 2：建立帳號 {#assist-register}

**Register** 會開啟 **Create Account**。註冊共有三個步驟，以頂端的數字表示。你可以在這裡點選 **Next** 和 **Previous** 逐步瀏覽：

<BzWangzhan ye="denglu" zhuangtai="zhuce" laiyuan="yaoqing" gaoliang="xiayibu" biaoji="2" />

1. **Username**：選擇一個使用者名稱，然後點選 **Next**。
2. **Email** 和 **Verification Code**：輸入你的電子郵件，然後點選 **Get Code**。輸入你收到的電子郵件中的驗證碼，然後點選 **Next**。
3. **Password** 和 **Confirm Password**：密碼至少需要 8 個字元，並包含一個大寫字母、一個數字和一個特殊字元。點選 **Create Account**。

你也可以使用 **Continue with GitHub** 略過表單。登入或註冊後，頁面會顯示 **Success!**，約一秒後帶你回到邀請頁面。

### 步驟 3：點選 Assist {#assist-click}

回到邀請頁面後，點選 **Assist**：

<BzWangzhan ye="yaoqing" gaoliang="zhuli" biaoji="3" />

### 步驟 4：完成 {#assist-done}

頁面會確認助力已完成，並顯示邀請你的人最新的進度，此例為 3/5：

<BzWangzhan ye="yaoqing" zhuangtai="chenggong" :jindu="3" />

**View my account** 會開啟你自己的帳號頁面。如果你之後再次開啟這個連結，頁面會顯示 **You already completed this assist**。

## 教學 6：追蹤你的進度 {#progress}

### 在官網上 {#progress-website}

解鎖卡片每 15 秒會自動更新一次，你回到這個瀏覽器分頁時也會更新。若要立即查看，請點選卡片右上角的重新整理按鈕。

<BzWangzhan ye="shezhi" :jindu="3" gaoliang="jindu" biaoji="1" />

### 在編輯器中 {#progress-editor}

開啟對話輸入框下方的模式選單，將游標移到 **Entanglement** 或 **Teams** 上。選單旁會顯示 <BzWenben jian="chatMode.entanglementUnlockTitle" /> 和你的進度，此例為 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="3|5" />。

<BzLiaotian tanchu="moshi" moshi="agent" suoding :jiesuojindu="3" />

每次開啟模式選單時，Breezell 都會重新檢查你的解鎖狀態。

### 第五次助力完成時 {#progress-unlocked}

卡片會顯示綠色勾號和 **Entanglement and Teams modes are unlocked**。進度條和邀請按鈕會隨之消失。

<BzWangzhan ye="shezhi" :jindu="5" />

## 教學 7：使用 Entanglement 和 Teams {#use}

1. 在 Breezell 中，開啟對話輸入框下方的模式選單。開啟選單時會檢查你的解鎖狀態，鎖頭圖示隨即消失。
2. 選擇 **Entanglement** 或 **Teams**。

<BzLiaotian tanchu="moshi" moshi="entanglement" />

若要了解這些模式如何運作，請參閱 [Entanglement 模式](/entanglement-mode-overview) 和 [Teams](/mode-selection#teams)。如果模式仍然處於鎖定狀態，請檢查 Box 側邊欄底部的帳號卡片：它必須顯示你用來解鎖的帳號（請參閱[教學 1](#sign-in-editor)）。接著關閉模式選單，再重新開啟。

## 訊息與解決方法 {#messages}

### 在邀請頁面上 {#messages-invite}

| 訊息 | 代表的意思 | 處理方式 |
| --- | --- | --- |
| **This invite link is invalid or expired** | 連結不完整、已超過 30 天，或已被較新的連結取代。 | 請對方提供目前的連結。 |
| **Each account can assist only one unlock** | 這個帳號已經為其他人助力過。 | 需要由另一位好友助力。 |
| **You already completed this assist** | 這個帳號已經為這個人助力過，這次助力會計入。 | 不需要處理。 |
| **You cannot assist yourself** | 開啟連結時使用的正是連結所屬的帳號。 | 把連結傳給好友。 |
| **This user already completed the unlock** | 邀請你的人已經解鎖這兩個模式。 | 不需要處理。 |
| **This device has already completed an unlock assist** | 這台裝置上已經完成過一次助力，可能是用其他帳號完成的。 | 改用其他裝置助力。 |
| **Unable to verify this device. Refresh the page and try again.** | 頁面無法檢查這台裝置。 | 重新整理頁面後再試一次，或改用其他瀏覽器。 |

無效或已過期的連結：

<BzWangzhan ye="yaoqing" zhuangtai="wuxiao" />

已經為其他人助力過的帳號：

<BzWangzhan ye="yaoqing" zhuangtai="taren" />

已經用於助力的裝置。點選 **Assist** 後，訊息會顯示在按鈕下方：

<BzWangzhan ye="yaoqing" zhuangtai="shebei" />

### 在解鎖卡片上 {#messages-card}

| 訊息 | 代表的意思 | 處理方式 |
| --- | --- | --- |
| **Sign in to view unlock progress** | 你尚未登入 breezell.com。 | 請登入。 |
| **Unable to load unlock status** | 官網無法讀取你的解鎖狀態。 | 點選 **Retry**。如果仍然無效，請登出官網後再重新登入。 |
| **Entanglement and Teams modes are included in your plan** | 你的付費方案已包含這兩個模式。 | 不需要處理。 |
| **Your Entanglement and Teams modes are unlocked. Welcome!** | Breezell 團隊已為你的帳號解鎖這兩個模式。 | 不需要處理。 |

<BzWangzhan ye="shezhi" zhuangtai="bukeyong" gaoliang="chongshi" biaoji="1" />

### 在編輯器中 {#messages-editor}

| 你看到的情況 | 原因 | 處理方式 |
| --- | --- | --- |
| 官網顯示的進度較多，模式選單卻顯示 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0;5" /> | Breezell 尚未登入，或登入的是其他帳號。 | 使用正確的帳號登入（[教學 1](#sign-in-editor)）。 |
| 模式選單中的進度落後於官網 | Breezell 會在你開啟模式選單時檢查狀態。 | 關閉模式選單，再重新開啟。 |
| 選擇鎖定的模式時顯示 <BzWenben jian="chatMode.entanglementSendBlocked" /> | 這兩個模式尚未解鎖。 | 累積五次助力，或選擇任一方案。 |
| 在官網上登入後沒有任何反應 | 瀏覽器沒有開啟 Breezell。 | 將官網上的代碼貼到 Breezell 的登入頁面，或再次點選 <BzWenben jian="box.account.signIn" />。 |

## 為什麼採用邀請制 {#why}

Breezell 需要持續的資金來支應基礎設施、維護和開發。邀請好友讓你不必購買方案也能解鎖進階模式，同時幫助 Breezell 成長。感謝你的支持。1.2.8 版本的變更內容，請參閱[1.2.8 版本調整說明](/version-1-2-8-access-update)。
