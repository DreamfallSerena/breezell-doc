---
title: 邀请新用户教程
description: 一组分步教程，教你借助 5 次助力解锁 Entanglement 和 Teams：在编辑器中登录，在 breezell.com 上生成邀请链接，指导好友为你助力，并查看你的进度。
---

# 邀请新用户教程

所有付费套餐都包含 Entanglement 和 Teams。使用 Free 套餐时，你也可以**永久**解锁它们：只要有 5 名 Breezell 用户通过你的专属邀请链接为你助力即可。本页通过一组简短的教程，带你走完从登录到使用这两种模式的完整流程。

::: tip 关于本页的界面示意
本页的界面都是依照 Breezell 和 breezell.com 的源码用 HTML 重新搭建的，其中部分按钮可以点击。breezell.com 只提供英文版，因此在本指南的所有语言版本中，官网界面都显示英文，而 Breezell 的界面则跟随本页的语言。每个官网界面顶部的地址栏会显示你当前所在的网址。界面中的名称、邮箱地址、链接和代码均为示例。
:::

## 教程一览 {#overview}

| # | 教程 | 操作者 | 在哪里操作 |
| --- | --- | --- | --- |
| 1 | [在编辑器中登录 Breezell](#sign-in-editor) | 你 | Breezell 和你的浏览器 |
| 2 | [找到解锁卡片](#find-card) | 你 | breezell.com |
| 3 | [生成并复制邀请链接](#generate) | 你 | breezell.com |
| 4 | [分享链接](#share) | 你 | 任意聊天应用或邮件 |
| 5 | [以好友身份助力](#assist) | 你的好友 | breezell.com |
| 6 | [查看进度](#progress) | 你 | breezell.com 和 Breezell |
| 7 | [使用 Entanglement 和 Teams](#use) | 你 | Breezell |
| – | [提示信息与解决方法](#messages) | 所有人 | |

## 解锁规则 {#rules}

- **5 次助力**即可解锁 Entanglement 和 Teams。解锁永久有效：无论你之后使用哪种套餐，它都会保留在你的账号上。
- **付费套餐**在有效期内包含这两种模式，无需助力。这包括 Free 以外的所有套餐、一次性买断的自定义 API 许可，以及有效团队中的席位。如果套餐在你集齐 5 次助力之前到期，这两种模式会重新锁定。
- **每个 Breezell 账号只能为一个人助力**。为同一个人助力两次也不会重复计数。
- **每台设备只能用于一次助力**，无论设备上登录的是哪个账号。
- **你不能为自己助力**。
- **邀请链接的有效期为 30 天**。生成新链接后，之前的链接会失效；已获得的助力会保留。
- **解锁归属于你的 Breezell 账号**。请在 breezell.com 和编辑器中使用同一个账号。

## 教程 1：在编辑器中登录 Breezell {#sign-in-editor}

编辑器会通过当前登录的 Breezell 账号检查你的解锁状态。未登录时，无论你在网站上的进度如何，Entanglement 和 Teams 都会保持锁定，模式菜单显示 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0|5" />。如果 Box 侧边栏底部的账号卡片已经显示你的名字，请直接前往[教程 2](#find-card)。

### 步骤 1：打开账号卡片 {#sign-in-card}

打开 Box，也就是 Breezell 设置所在的页面：在标题栏左侧的切换按钮中点击 **Box**（更多打开方式参见[自定义 API（BYOK）](/custom-api)）。侧边栏底部的账号卡片上显示 <BzWenben jian="box.account.notSignedIn" />，点击这张卡片。

<BzHezi zu="none" zhanghu="weidenglu" zhanghugaoliang="ka" biaoji="1" />

### 步骤 2：点击登录 {#sign-in-button}

账号面板会在卡片上方打开。点击 <BzWenben jian="box.account.signIn" />，Breezell 会在你的默认浏览器中打开 breezell.com 的登录页面。

<BzHezi zu="none" zhanghu="weidenglu" zhanghukai zhanghugaoliang="denglu" biaoji="2" />

### 步骤 3：在网站上登录 {#sign-in-website}

如果这个浏览器还没有登录 breezell.com，就会显示登录页面。输入你的邮箱和密码后点击 **Sign In**，或者使用 **Continue with GitHub**。如果你还没有账号，请点击底部的 **Sign Up**，按三个步骤创建一个账号（参见[创建账号](#assist-register)）。

<BzWangzhan ye="denglu" laiyuan="bianjiqi" gaoliang="denglu" biaoji="3" />

如果浏览器已经登录，网站会跳过这一步，直接进入确认页面。

### 步骤 4：确认桌面端登录 {#sign-in-confirm}

网站会请你确认是否允许 Breezell 使用你的账号登录。核对卡片上的名称和邮箱，然后点击 **Sign in**。如果要使用其他账号，请改为点击 **or sign in with another account**。

<BzWangzhan ye="zhuomian" gaoliang="queren" biaoji="4" />

随后，浏览器会询问是否允许打开 Breezell。请选择 **Open**。只有在你刚刚亲自从 Breezell 发起登录时，才应确认此页面。

### 步骤 5：返回 Breezell {#sign-in-done}

页面会确认登录成功，你可以关闭这个标签页：

<BzWangzhan ye="zhuomian" zhuangtai="wancheng" />

如果 Breezell 没有自动继续，请按照页面上的说明，复制页面上显示的代码，并粘贴到 Breezell 的登录页面中。

回到 Breezell，账号卡片上现在会显示你的名字、套餐和邮箱。点击卡片即可查看你的套餐和余额：

<BzHezi zu="none" zhanghu="yidenglu" zhanghukai />

Breezell 最多会等待 5 分钟来完成登录。如果超过这个时间，请再次点击 <BzWenben jian="box.account.signIn" />。

## 教程 2：找到解锁卡片 {#find-card}

解锁卡片位于 breezell.com 的账号设置中。

1. 打开 [breezell.com](https://breezell.com)，使用与编辑器中**相同的账号**登录。点击右上角的头像，然后点击 **Profile**。

<BzWangzhan ye="caidan" gaoliang="profile" biaoji="1" />

2. 进入账号页面后，点击左侧边栏中的 **Settings**。你也可以打开侧边栏底部显示你名字的菜单，然后点击 **Account settings**：

<BzWangzhan ye="yonghucaidan" gaoliang="zhanghushezhi" biaoji="2" />

3. Settings 页面会显示你的账号详情、你的团队、解锁卡片 **Unlock Entanglement and Teams Modes** 以及退出登录选项。卡片上会显示你已获得的助力次数：

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="ka" biaoji="3" />

如果你使用的是付费套餐，卡片上会改为显示 **Entanglement and Teams modes are included in your plan**，你无需进行任何操作。请直接前往[教程 7](#use)。

## 教程 3：生成并复制邀请链接 {#generate}

1. 在解锁卡片上点击 **Generate invite link**。

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="shengcheng" biaoji="1" />

2. 你的链接会显示在按钮下方。第一个按钮会变为 **Regenerate**，旁边会出现 **Copy link**。点击 **Copy link**，按钮会短暂显示 **Copied**。可以在这里试一试：

<BzWangzhan ye="shezhi" :jindu="0" lianjie gaoliang="fuzhi" biaoji="2" />

3. 剪贴板中现在有一段简短的消息和你的链接：

```text
"Can you help me unlock this? I'm waiting in the Breezell editor."
https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN
```

上面的 token 只是占位符：请发送你自己的账号生成的文字。

::: warning 只生成一次，然后保存好这段文字
卡片只会在你离开页面之前显示你的链接。再次回到页面时，卡片会重新提供 **Generate invite link**，而生成操作会创建一个**新**链接：你已经发出的链接将会失效。请保存好复制的文字，并把同一个链接发给全部 5 位好友。只有在链接已超过 30 天而过期，或者落到了不该收到它的人手中时，才需要重新生成。
:::

## 教程 4：分享链接 {#share}

- 把复制的文字粘贴到任意聊天应用或邮件中，发送给 5 个人。
- 每位好友都需要有自己的 Breezell 账号。注册是免费的，可以直接通过链接完成。
- 每位好友都应使用自己的电脑或手机：已经用于助力的设备不能再次助力。
- 邀请页面会把你的名字缩写为首尾两个字母，例如 Alex 会显示为 **A\*\*\*x**。请告诉好友这个链接是你发的，方便他们辨认。
- 任何拿到链接的人都可以为你助力，所以请只发给你认识的人。
- 邀请页面是英文的。你可以把[教程 5](#assist)的链接发给好友，方便他们对照自己语言的说明操作。

## 教程 5：以好友身份助力 {#assist}

本教程面向你邀请的好友：介绍他们打开你的链接后会看到什么。

### 步骤 1：打开链接 {#assist-open}

邀请页面会显示邀请你的人的名字。如果你还没有登录 breezell.com，页面会请你先登录或注册：

<BzWangzhan ye="yaoqing" zhuangtai="weidenglu" gaoliang="zhuce" biaoji="1" />

- 如果你还没有 Breezell 账号，请点击 **Register**，然后继续步骤 2。
- 如果你已经有账号，请点击 **Sign in**。使用邮箱和密码或 GitHub 登录，然后继续步骤 3。
- 如果你已经登录，页面会直接显示 **Assist** 按钮。请继续步骤 3。

### 步骤 2：创建账号 {#assist-register}

点击 **Register** 会打开 **Create Account**。注册分为三步，顶部的数字会显示当前所在的步骤。你可以在这里点击 **Next** 和 **Previous** 来切换步骤：

<BzWangzhan ye="denglu" zhuangtai="zhuce" laiyuan="yaoqing" gaoliang="xiayibu" biaoji="2" />

1. **Username**：设置一个用户名，然后点击 **Next**。
2. **Email** 和 **Verification Code**：输入你的邮箱并点击 **Get Code**。输入你收到的邮件中的验证码，然后点击 **Next**。
3. **Password** 和 **Confirm Password**：密码至少需要 8 个字符，并包含一个大写字母、一个数字和一个特殊字符。点击 **Create Account**。

你也可以使用 **Continue with GitHub** 跳过表单。登录或注册后，页面会显示 **Success!** 并在大约一秒后带你回到邀请页面。

### 步骤 3：点击 Assist {#assist-click}

回到邀请页面，点击 **Assist**：

<BzWangzhan ye="yaoqing" gaoliang="zhuli" biaoji="3" />

### 步骤 4：完成 {#assist-done}

页面会确认助力成功，并显示邀请你的人的最新进度，这里是 3/5：

<BzWangzhan ye="yaoqing" zhuangtai="chenggong" :jindu="3" />

**View my account** 会打开你自己的账号页面。如果你之后再次打开这个链接，页面会显示 **You already completed this assist**。

## 教程 6：查看进度 {#progress}

### 在网站上 {#progress-website}

解锁卡片每 15 秒会自动更新一次，每次你回到这个浏览器标签页时也会更新。如果想立即查看，请点击卡片右上角的刷新按钮。

<BzWangzhan ye="shezhi" :jindu="3" gaoliang="jindu" biaoji="1" />

### 在编辑器中 {#progress-editor}

打开对话输入框下方的模式菜单，将鼠标悬停在 **Entanglement** 或 **Teams** 上。菜单旁边会显示 <BzWenben jian="chatMode.entanglementUnlockTitle" /> 和你的进度，这里是 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="3|5" />。

<BzLiaotian tanchu="moshi" moshi="agent" suoding :jiesuojindu="3" />

每次打开模式菜单时，Breezell 都会重新检查你的解锁状态。

### 收到第 5 次助力时 {#progress-unlocked}

卡片上会显示一个绿色对勾和 **Entanglement and Teams modes are unlocked**。进度条和邀请按钮会随之消失。

<BzWangzhan ye="shezhi" :jindu="5" />

## 教程 7：使用 Entanglement 和 Teams {#use}

1. 在 Breezell 中，打开对话输入框下方的模式菜单。打开菜单时会检查你的解锁状态，锁会随之消失。
2. 选择 **Entanglement** 或 **Teams**。

<BzLiaotian tanchu="moshi" moshi="entanglement" />

要了解这些模式如何工作，请参见[Entanglement 模式](/entanglement-mode-overview)和[Teams](/mode-selection#teams)。如果这两种模式仍然处于锁定状态，请检查 Box 侧边栏底部的账号卡片：它必须显示你用来解锁的那个账号（参见[教程 1](#sign-in-editor)）。然后关闭模式菜单并重新打开。

## 提示信息与解决方法 {#messages}

### 在邀请页面上 {#messages-invite}

| 提示信息 | 含义 | 解决方法 |
| --- | --- | --- |
| **This invite link is invalid or expired** | 链接不完整、已超过 30 天，或者已被更新的链接取代。 | 向对方索取当前的链接。 |
| **Each account can assist only one unlock** | 这个账号已经为其他人助力过。 | 需要由另一位好友来助力。 |
| **You already completed this assist** | 这个账号已经为此人助力过，该助力已计入。 | 无需操作。 |
| **You cannot assist yourself** | 链接是用其所属的账号打开的。 | 把链接发给好友。 |
| **This user already completed the unlock** | 邀请你的人已经解锁了这两种模式。 | 无需操作。 |
| **This device has already completed an unlock assist** | 这台设备上已经进行过一次助力，可能使用的是其他账号。 | 换一台设备助力。 |
| **Unable to verify this device. Refresh the page and try again.** | 页面无法验证这台设备。 | 刷新页面后重试，或者换一个浏览器试试。 |

无效或已过期的链接：

<BzWangzhan ye="yaoqing" zhuangtai="wuxiao" />

已经为其他人助力过的账号：

<BzWangzhan ye="yaoqing" zhuangtai="taren" />

已经用于助力的设备。点击 **Assist** 后，提示信息会显示在按钮下方：

<BzWangzhan ye="yaoqing" zhuangtai="shebei" />

### 在解锁卡片上 {#messages-card}

| 提示信息 | 含义 | 解决方法 |
| --- | --- | --- |
| **Sign in to view unlock progress** | 你没有在 breezell.com 上登录。 | 请登录。 |
| **Unable to load unlock status** | 网站无法读取你的解锁状态。 | 点击 **Retry**。如果仍然无效，请退出网站后重新登录。 |
| **Entanglement and Teams modes are included in your plan** | 你的付费套餐包含这两种模式。 | 无需操作。 |
| **Your Entanglement and Teams modes are unlocked. Welcome!** | Breezell 团队已经为你的账号解锁了这两种模式。 | 无需操作。 |

<BzWangzhan ye="shezhi" zhuangtai="bukeyong" gaoliang="chongshi" biaoji="1" />

### 在编辑器中 {#messages-editor}

| 你看到的情况 | 原因 | 解决方法 |
| --- | --- | --- |
| 网站上显示的进度更高，模式菜单却显示 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0;5" /> | Breezell 没有登录，或者登录的是另一个账号。 | 使用正确的账号登录（[教程 1](#sign-in-editor)）。 |
| 模式菜单中的进度落后于网站 | Breezell 会在你打开模式菜单时检查你的状态。 | 关闭模式菜单并重新打开。 |
| 选择已锁定的模式时，显示 <BzWenben jian="chatMode.entanglementSendBlocked" /> | 这两种模式尚未解锁。 | 集齐 5 次助力，或者开通任意套餐。 |
| 在网站上登录后没有任何反应 | 浏览器没有打开 Breezell。 | 把网站上的代码粘贴到 Breezell 的登录页面中，或者再次点击 <BzWenben jian="box.account.signIn" />。 |

## 为什么采用邀请制 {#why}

Breezell 的基础设施、维护和开发都需要持续的资金投入。通过邀请好友，你无需购买套餐也能解锁高级模式，同时还能帮助 Breezell 发展壮大。感谢你的支持。1.2.8 版本的具体变化参见[1.2.8 版本调整说明](/version-1-2-8-access-update)。
