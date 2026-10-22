---
title: 新規ユーザーを招待する方法
description: 5 回の協力で Entanglement と Teams を解除するためのチュートリアルです。エディターへのサインイン、breezell.com での招待リンクの生成、友達に協力してもらう手順、進捗の確認までを順を追って説明します。
---

# 新規ユーザーを招待する方法

Entanglement と Teams は、すべての有料プランに含まれています。Free プランでも、個人用の招待リンクから 5 人の Breezell ユーザーに協力してもらうと、2 つのモードを**永久に**解除できます。このページでは、サインインからモードを使い始めるまでの流れを、短いチュートリアルに分けて説明します。

::: tip このページの画面について
以下の画面は、Breezell と breezell.com のソースコードをもとに HTML で再現したもので、一部のボタンはクリックできます。breezell.com は英語でのみ提供されているため、サイトの画面はこのガイドのどの言語でも英語で表示されます。一方、Breezell の画面はこのページの言語に従います。サイトの各画面の上部にあるバーには、開いているページのアドレスが表示されます。画面内の名前、メールアドレス、リンク、コードは一例です。
:::

## チュートリアルの一覧 {#overview}

| # | チュートリアル | 対象 | 場所 |
| --- | --- | --- | --- |
| 1 | [エディターで Breezell にサインインする](#sign-in-editor) | あなた | Breezell とブラウザー |
| 2 | [解除カードを見つける](#find-card) | あなた | breezell.com |
| 3 | [招待リンクを生成してコピーする](#generate) | あなた | breezell.com |
| 4 | [リンクを共有する](#share) | あなた | 任意のチャットアプリまたはメール |
| 5 | [友達として協力する](#assist) | 友達 | breezell.com |
| 6 | [進捗を確認する](#progress) | あなた | breezell.com と Breezell |
| 7 | [Entanglement と Teams を使う](#use) | あなた | Breezell |
| – | [メッセージと対処法](#messages) | 全員 | |

## 解除の仕組み {#rules}

- **5 回の協力**で Entanglement と Teams が解除されます。解除は永久に有効で、今後どのプランを利用していてもアカウントに残ります。
- **有料プラン**には、有効な間は両方のモードが含まれており、協力は必要ありません。Free 以外のすべてのプラン、買い切りのカスタム API ライセンス、有効なチームのシートが対象です。5 回の協力が集まる前にプランが終了すると、モードは再びロックされます。
- **1 つの Breezell アカウントが協力できるのは 1 人だけです**。同じ人に 2 回協力しても、2 回とは数えられません。
- **1 台のデバイスで協力できるのは 1 回だけです**。どのアカウントでサインインしていても同じです。
- **自分自身に協力することはできません**。
- **招待リンクの有効期限は 30 日です**。新しいリンクを生成すると以前のリンクは使えなくなりますが、すでに集まった協力はそのまま残ります。
- **解除は Breezell アカウントに紐づきます**。breezell.com とエディターでは同じアカウントを使ってください。

## チュートリアル 1：エディターで Breezell にサインインする {#sign-in-editor}

エディターは、サインインしている Breezell アカウントで解除状態を確認します。サインインしていない間は、サイトでの進捗にかかわらず Entanglement と Teams はロックされたままで、モードメニューには <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0|5" /> と表示されます。Box のサイドバー下部にあるアカウントカードにすでに自分の名前が表示されている場合は、[チュートリアル 2](#find-card) に進んでください。

### ステップ 1：アカウントカードを開く {#sign-in-card}

Breezell の設定ページである Box を開きます。タイトルバー左側の切り替えで **Box** をクリックします（ほかの開き方は [カスタム API（BYOK）](/custom-api) で紹介しています）。サイドバー下部のアカウントカードには <BzWenben jian="box.account.notSignedIn" /> と表示されています。これをクリックします。

<BzHezi zu="none" zhanghu="weidenglu" zhanghugaoliang="ka" biaoji="1" />

### ステップ 2：「ログイン」をクリックする {#sign-in-button}

カードの上にアカウントパネルが開きます。<BzWenben jian="box.account.signIn" /> をクリックします。Breezell が既定のブラウザーで breezell.com のサインインページを開きます。

<BzHezi zu="none" zhanghu="weidenglu" zhanghukai zhanghugaoliang="denglu" biaoji="2" />

### ステップ 3：サイトでサインインする {#sign-in-website}

このブラウザーでまだ breezell.com にサインインしていない場合は、サインインページが表示されます。メールアドレスとパスワードを入力して **Sign In** をクリックするか、**Continue with GitHub** を使います。アカウントをまだ持っていない場合は、下部の **Sign Up** をクリックし、3 つのステップでアカウントを作成します（[アカウントを作成する](#assist-register) を参照）。

<BzWangzhan ye="denglu" laiyuan="bianjiqi" gaoliang="denglu" biaoji="3" />

ブラウザーですでにサインインしている場合、サイトはこのステップを省略し、そのまま確認画面に進みます。

### ステップ 4：デスクトップのサインインを確認する {#sign-in-confirm}

サイトに、Breezell があなたのアカウントでサインインしてよいかを確認する画面が表示されます。カードの名前とメールアドレスを確かめてから、**Sign in** をクリックします。別のアカウントを使う場合は、代わりに **or sign in with another account** をクリックします。

<BzWangzhan ye="zhuomian" gaoliang="queren" biaoji="4" />

続いて、Breezell を開いてよいかをブラウザーが尋ねます。**Open** を選びます。このページで確認するのは、自分で Breezell からサインインを始めた直後だけにしてください。

### ステップ 5：Breezell に戻る {#sign-in-done}

ページにサインインの完了が表示されたら、タブを閉じてかまいません。

<BzWangzhan ye="zhuomian" zhuangtai="wancheng" />

Breezell が自動的に続行しない場合は、ページの案内に従い、表示されたコードをコピーして Breezell のサインインページに貼り付けます。

Breezell に戻ると、アカウントカードにあなたの名前、プラン、メールアドレスが表示されます。クリックすると、プランと残高を確認できます。

<BzHezi zu="none" zhanghu="yidenglu" zhanghukai />

Breezell はサインインの完了を最大 5 分間待ちます。それ以上かかった場合は、もう一度 <BzWenben jian="box.account.signIn" /> をクリックします。

## チュートリアル 2：解除カードを見つける {#find-card}

解除カードは、breezell.com のアカウント設定にあります。

1. [breezell.com](https://breezell.com) を開き、エディターと**同じアカウント**でサインインします。右上のアバターをクリックし、**Profile** をクリックします。

<BzWangzhan ye="caidan" gaoliang="profile" biaoji="1" />

2. アカウントのページで、左側のサイドバーにある **Settings** をクリックします。サイドバー下部にある自分の名前のメニューを開き、**Account settings** をクリックしても開けます。

<BzWangzhan ye="yonghucaidan" gaoliang="zhanghushezhi" biaoji="2" />

3. Settings には、アカウントの詳細、チーム、解除カード **Unlock Entanglement and Teams Modes**、サインアウトのオプションが表示されます。カードには、集まった協力の数が表示されます。

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="ka" biaoji="3" />

有料プランを利用している場合は、代わりにカードに **Entanglement and Teams modes are included in your plan** と表示され、何もする必要はありません。[チュートリアル 7](#use) に進んでください。

## チュートリアル 3：招待リンクを生成してコピーする {#generate}

1. 解除カードで **Generate invite link** をクリックします。

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="shengcheng" biaoji="1" />

2. ボタンの下にリンクが表示されます。最初のボタンは **Regenerate** に変わり、その横に **Copy link** が表示されます。**Copy link** をクリックすると、ボタンに一瞬 **Copied** と表示されます。ここで試してみてください。

<BzWangzhan ye="shezhi" :jindu="0" lianjie gaoliang="fuzhi" biaoji="2" />

3. クリップボードには、短いメッセージとリンクが入っています。

```text
"Can you help me unlock this? I'm waiting in the Breezell editor."
https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN
```

上記のトークンはプレースホルダーです。ご自身のアカウントで生成されたテキストを送ってください。

::: warning リンクは一度だけ生成し、テキストを保管する
カードにリンクが表示されるのは、ページを離れるまでです。ページに戻ると再び **Generate invite link** が表示され、生成すると**新しい**リンクが作成されます。その時点で、すでに送ったリンクは使えなくなります。コピーしたテキストを保管し、5 人の友達全員に同じリンクを送ってください。新しいリンクを生成するのは、30 日が過ぎてリンクの有効期限が切れた場合や、送るべきでない人にリンクが渡った場合だけにしてください。
:::

## チュートリアル 4：リンクを共有する {#share}

- コピーしたテキストを任意のチャットアプリやメールに貼り付け、5 人に送ります。
- 友達はそれぞれ自分の Breezell アカウントが必要です。登録は無料で、リンクから直接行えます。
- 友達にはそれぞれ自分のパソコンやスマートフォンを使ってもらってください。すでに協力に使われたデバイスでは、もう一度協力することはできません。
- 招待ページには、あなたの名前が最初と最後の文字だけに短縮されて表示されます。たとえば Alex なら **A\*\*\*x** です。友達がすぐにわかるよう、リンクがあなたからのものだと伝えておきましょう。
- リンクを持っている人なら誰でもあなたに協力できるので、知り合いにだけ送ってください。
- 招待ページは英語です。友達に [チュートリアル 5](#assist) へのリンクを送れば、友達は自分の言語で手順を確認しながら進められます。

## チュートリアル 5：友達として協力する {#assist}

このチュートリアルは、あなたが招待する友達向けです。リンクを開いたあとに表示される画面を説明します。

### ステップ 1：リンクを開く {#assist-open}

招待ページには、あなたを招待した人の名前が表示されます。breezell.com にサインインしていない場合は、先にサインインまたは登録するよう求められます。

<BzWangzhan ye="yaoqing" zhuangtai="weidenglu" gaoliang="zhuce" biaoji="1" />

- Breezell アカウントをまだ持っていない場合は **Register** をクリックし、ステップ 2 に進みます。
- アカウントを持っている場合は **Sign in** をクリックします。メールアドレスとパスワード、または GitHub でサインインし、ステップ 3 に進みます。
- すでにサインインしている場合は、ページに **Assist** ボタンが直接表示されます。ステップ 3 に進みます。

### ステップ 2：アカウントを作成する {#assist-register}

**Register** をクリックすると **Create Account** が開きます。登録は 3 つのステップに分かれており、上部の番号で示されます。ここで **Next** と **Previous** をクリックして、各ステップを確認できます。

<BzWangzhan ye="denglu" zhuangtai="zhuce" laiyuan="yaoqing" gaoliang="xiayibu" biaoji="2" />

1. **Username**：ユーザー名を決め、**Next** をクリックします。
2. **Email** と **Verification Code**：メールアドレスを入力し、**Get Code** をクリックします。届いたメールに記載されたコードを入力し、**Next** をクリックします。
3. **Password** と **Confirm Password**：パスワードは 8 文字以上で、大文字、数字、特殊文字をそれぞれ 1 つ以上含める必要があります。**Create Account** をクリックします。

フォームを使わずに **Continue with GitHub** で進むこともできます。サインインまたは登録が終わると、ページに **Success!** と表示され、約 1 秒後に招待ページに戻ります。

### ステップ 3：Assist をクリックする {#assist-click}

招待ページに戻ったら、**Assist** をクリックします。

<BzWangzhan ye="yaoqing" gaoliang="zhuli" biaoji="3" />

### ステップ 4：完了 {#assist-done}

ページに協力が完了したことと、あなたを招待した人の新しい進捗が表示されます。この例では 5 回中 3 回です。

<BzWangzhan ye="yaoqing" zhuangtai="chenggong" :jindu="3" />

**View my account** をクリックすると、自分のアカウントページが開きます。あとでもう一度リンクを開くと、ページに **You already completed this assist** と表示されます。

## チュートリアル 6：進捗を確認する {#progress}

### サイトで {#progress-website}

解除カードは、15 秒ごとと、ブラウザーのタブに戻るたびに自動で更新されます。すぐに確認したい場合は、カード右上の更新ボタンをクリックします。

<BzWangzhan ye="shezhi" :jindu="3" gaoliang="jindu" biaoji="1" />

### エディターで {#progress-editor}

チャット入力欄の下にあるモードメニューを開き、**Entanglement** または **Teams** にマウスを合わせます。メニューの横に <BzWenben jian="chatMode.entanglementUnlockTitle" /> と進捗が表示されます。この例では <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="3|5" /> です。

<BzLiaotian tanchu="moshi" moshi="agent" suoding :jiesuojindu="3" />

モードメニューを開くたびに、Breezell は解除状態を改めて確認します。

### 5 回目の協力が届いたら {#progress-unlocked}

カードに緑のチェックマークと **Entanglement and Teams modes are unlocked** が表示されます。進捗バーと招待ボタンは表示されなくなります。

<BzWangzhan ye="shezhi" :jindu="5" />

## チュートリアル 7：Entanglement と Teams を使う {#use}

1. Breezell で、チャット入力欄の下にあるモードメニューを開きます。メニューを開くと解除状態が確認され、鍵アイコンが消えます。
2. **Entanglement** または **Teams** を選びます。

<BzLiaotian tanchu="moshi" moshi="entanglement" />

各モードの使い方については、[Entanglement モード](/entanglement-mode-overview) と [Teams](/mode-selection#teams) を参照してください。モードがまだロックされている場合は、Box のサイドバー下部にあるアカウントカードを確認してください。モードを解除したアカウントが表示されている必要があります（[チュートリアル 1](#sign-in-editor) を参照）。そのうえで、モードメニューを閉じてからもう一度開きます。

## メッセージと対処法 {#messages}

### 招待ページ {#messages-invite}

| メッセージ | 意味 | 対処法 |
| --- | --- | --- |
| **This invite link is invalid or expired** | リンクが不完全か、30 日以上前のものか、新しいリンクに置き換えられています。 | 最新のリンクを送ってもらってください。 |
| **Each account can assist only one unlock** | このアカウントはすでに別の人に協力しています。 | ほかの友達に協力してもらう必要があります。 |
| **You already completed this assist** | このアカウントはすでにこの人に協力しています。協力はカウントされています。 | 対応は不要です。 |
| **You cannot assist yourself** | リンクの持ち主のアカウントでリンクが開かれました。 | 友達にリンクを送ってください。 |
| **This user already completed the unlock** | あなたを招待した人は、すでに両方のモードを解除しています。 | 対応は不要です。 |
| **This device has already completed an unlock assist** | このデバイスでは、すでに協力が行われています（別のアカウントによる場合もあります）。 | 別のデバイスから協力してください。 |
| **Unable to verify this device. Refresh the page and try again.** | ページがデバイスを確認できませんでした。 | ページを再読み込みしてもう一度試すか、別のブラウザーを試してください。 |

無効または期限切れのリンクの場合：

<BzWangzhan ye="yaoqing" zhuangtai="wuxiao" />

すでに別の人に協力したアカウントの場合：

<BzWangzhan ye="yaoqing" zhuangtai="taren" />

すでに協力に使われたデバイスの場合。メッセージは **Assist** をクリックしたあと、ボタンの下に表示されます。

<BzWangzhan ye="yaoqing" zhuangtai="shebei" />

### 解除カード {#messages-card}

| メッセージ | 意味 | 対処法 |
| --- | --- | --- |
| **Sign in to view unlock progress** | breezell.com にサインインしていません。 | サインインしてください。 |
| **Unable to load unlock status** | サイトが解除状態を読み込めませんでした。 | **Retry** をクリックします。それでも解決しない場合は、サイトから一度サインアウトし、もう一度サインインしてください。 |
| **Entanglement and Teams modes are included in your plan** | ご利用の有料プランに両方のモードが含まれています。 | 対応は不要です。 |
| **Your Entanglement and Teams modes are unlocked. Welcome!** | Breezell チームがあなたのアカウントで両方のモードを解除しました。 | 対応は不要です。 |

<BzWangzhan ye="shezhi" zhuangtai="bukeyong" gaoliang="chongshi" biaoji="1" />

### エディター {#messages-editor}

| 表示内容 | 原因 | 対処法 |
| --- | --- | --- |
| サイトではそれ以上の進捗が表示されているのに、モードメニューに <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0;5" /> と表示される | Breezell がサインインしていないか、別のアカウントでサインインしています。 | 正しいアカウントでサインインしてください（[チュートリアル 1](#sign-in-editor)）。 |
| モードメニューの進捗がサイトより遅れている | Breezell は、モードメニューを開いたときに状態を確認します。 | モードメニューを閉じてから、もう一度開いてください。 |
| ロックされたモードを選ぶと <BzWenben jian="chatMode.entanglementSendBlocked" /> と表示される | モードがまだ解除されていません。 | 5 回の協力を集めるか、いずれかのプランを購入してください。 |
| サイトでサインインしても何も起こらない | ブラウザーが Breezell を開きませんでした。 | サイトに表示されたコードを Breezell のサインインページに貼り付けるか、もう一度 <BzWenben jian="box.account.signIn" /> をクリックしてください。 |

## 招待制の理由 {#why}

Breezell のインフラ、保守、開発には継続的な資金が必要です。友達を招待すれば、プランを購入しなくても高度なモードを解除でき、Breezell の成長を後押しすることにもなります。ご支援いただきありがとうございます。バージョン 1.2.8 での変更点については、[バージョン 1.2.8 の利用方法に関するお知らせ](/version-1-2-8-access-update) を参照してください。
