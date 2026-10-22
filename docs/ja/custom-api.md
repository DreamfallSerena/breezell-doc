---
title: カスタム API（BYOK）
description: 自分の API キーを Breezell に登録し、Anthropic 公式 API または互換の中継サーバーを通じて Claude モデルを利用する方法を説明します。
---

# カスタム API（BYOK）

BYOK は **Bring Your Own Key**、つまり「自分のキーを持ち込む」という意味です。Breezell の公式クォータを使う代わりに、Breezell はあなた自身の API キーでモデルプロバイダーにリクエストを送り、料金はそのプロバイダーから直接請求されます。

このガイドでは、Claude モデル（`claude-opus-5-5`、`claude-sonnet-5-5`、`claude-haiku-5-5`、`claude-fable-5-1`）を例に、設定の全手順を説明します。

::: tip このページの画面について
このページにはスクリーンショットがありません。以下の Breezell の画面はすべて、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に、配色はこのサイトのライト / ダーク切り替え（Breezell Light / Breezell Dark）に従います。

オレンジ色の枠と番号付きのバッジは、クリックする場所を示すためのもので、Breezell 本体には含まれません。一部の画面は実際に操作できます。プロトコルの切り替え、ベース URL の編集、**Claude 1M** の押下、推論のオン / オフ、強度スライダーのドラッグを試してみてください。
:::

## 始める前に

必要なものは 3 つです。

1. **Custom API プラン以上の Breezell アカウント。** 自分のキーでサードパーティモデルを使うのは有料機能です。プランがない場合、プロバイダーのページにはフォームの代わりに <BzWenben jian="box.models.gate.planRequired" /> と表示され、サインインしていない場合は <BzWenben jian="box.models.gate.signIn" /> と表示されます。
2. **キー。** Anthropic Console で発行した Anthropic API キー（`sk-ant-` で始まります）か、中継サーバー（リレー）、ゲートウェイ、セルフホストのプロキシのベース URL とキーのどちらかです。
3. **中継サーバーが対応しているプロトコル。** Anthropic Messages API（`/v1/messages`）、OpenAI Chat Completions API（`/v1/chat/completions`）、またはその両方のどれに対応しているか、プロバイダーに確認してください。

## 接続方法を選ぶ

| 方法 | 使う場面 | Breezell での場所 | プロトコル |
| --- | --- | --- | --- |
| **A. Anthropic API** | Anthropic Console で発行したキーがある | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages（組み込み） |
| **B. 互換スロット + Anthropic プロトコル** | 中継サーバーが `/v1/messages` を提供している | <BzWenben jian="box.models.group.compat" /> › スロット | Anthropic |
| **C. 互換スロット + OpenAI プロトコル** | 中継サーバーが `/v1/chat/completions` しか提供していない | <BzWenben jian="box.models.group.compat" /> › スロット | OpenAI |

Claude には **A** または **B** をおすすめします。Breezell 自身も、スロットのフォームで次のように推奨しています：<BzWenben jian="settings.apiFormat.anthropicTip" />

## ステップ 1：Box（Breezell 設定）を開く

Breezell の設定は **Box** ページにまとめられています。Box を開いている間は、アクティビティバー、サイドバー、エディター領域、パネルが Box に置き換わります。コードに戻るには **Agent** をクリックします。

開き方は 3 通りあります。

- タイトルバー左側の切り替えで **Box** をクリックする。
- 右上の歯車アイコンをクリックし、<BzWenben jian="box.title" /> を選ぶ。
- コマンドパレットを開き、`Breezell: Open Settings` を実行する。

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## ステップ 2：モデルページに移動する

Box のサイドバーで <BzWenben jian="box.title" /> グループを開き、<BzWenben jian="tab.models" /> をクリックします。通常、Box を開くと最初にこのページが表示されます。

<BzHezi gaoliang="moxing" />

ページ上部には <BzWenben jian="box.usage.tab.models" />、<BzWenben jian="box.usage.tab.cache" />、<BzWenben jian="box.usage.tab.tokens" />、<BzWenben jian="box.usage.tab.breezell" /> の 4 つのビューがあります。最初のビューのままにしておきます。

その下のプロバイダーカテゴリーで、プロバイダーが 4 つのグループに分けられています。

| カテゴリー | 内容 |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Breezell クォータで使う Breezell 公式モデル。キーは不要です。 |
| <BzWenben jian="box.models.group.signin" /> | Codex や Copilot など、アカウントでサインインして使うプロバイダー。 |
| <BzWenben jian="box.models.group.api" /> | 自分のキーで使う各ベンダーの公式 API（Anthropic を含む）。 |
| <BzWenben jian="box.models.group.compat" /> | 中継サーバー、ゲートウェイ、セルフホストのプロキシ用のカスタムスロット（最大 50 個）。 |

## 方法 A：Anthropic API

### A1. Anthropic を選ぶ

1. <BzWenben jian="box.models.group.api" /> をクリックします。
2. <BzWenben jian="box.models.searchProvidersPlaceholder" /> に `Anthropic` と入力します。
3. **Anthropic** のタイルをクリックします。選択したプロバイダーが下に表示され、ステータスは <BzWenben jian="box.models.notConfigured" /> になっています。
4. <BzWenben jian="box.models.editConfig" /> をクリックして設定を開きます。

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Anthropic のキーを貼り付ける

設定項目は API キーの 1 つだけです。

1. **Get your API Key** カードをクリックします。ブラウザーで Anthropic Console（`console.anthropic.com/settings/keys`）が開きます。
2. キーを作成してコピーします。`sk-ant-api03-...` のような形式です。
3. 入力欄に貼り付けます。目のアイコンで表示 / 非表示を切り替えられます。

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell はキーを使う前に整形します。スペース、前後の引用符、先頭の `Bearer `、そしてコピー時に紛れ込みがちな不可視文字を取り除きます。Anthropic プロバイダーにはベース URL の入力欄がなく、Breezell は常に `https://api.anthropic.com` を使います。

### A3. 使いたい Claude モデルをオンにする

キーを保存するとすぐにステータスが <BzWenben jian="box.models.configured" /> に変わり、Breezell に組み込まれた Claude モデルが新しい順に一覧表示されます。

最初から有効になっているのは先頭の 5 つ（`claude-fable-5-1`、`claude-fable-5`、`claude-opus-5`、`claude-opus-5-5`、`claude-opus-4-8`）だけです。行の末尾にあるスイッチをオンにすると、そのモデルがチャットのモデル選択メニューに追加されます。たとえば `claude-sonnet-5-5` や `claude-haiku-5-5` をオンにしてみましょう。

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

表の見方は次のとおりです。

| 列 | 意味 |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | API に送られるモデル ID。緑の点はモデルが有効であることを示します。 |
| <BzWenben jian="box.models.context" /> | モデルのコンテキストウィンドウ全体のサイズ。Claude 5 のモデルはすべて 1M です。 |
| <BzWenben jian="box.models.capabilities" /> | <BzWenben jian="box.models.filter.vision" />、<BzWenben jian="box.models.filter.tools" />、<BzWenben jian="box.models.filter.reasoning" />、<BzWenben jian="box.models.filter.web" /> の 4 つのアイコン。点灯しているアイコンは、モデルがその機能を備えていることを示します。 |
| <BzWenben jian="models.pricing" /> | Breezell の組み込みカタログによる入力 / 出力の価格（米ドル、<BzWenben jian="box.models.price" />）。正式な金額は Anthropic の請求に従います。 |
| <BzWenben jian="box.mcp.colEnabled" /> | チャットのモデル選択メニューにモデルを表示するかどうかを切り替えます。 |

表の幅が狭くなると、Breezell はまず <BzWenben jian="box.models.context" /> 列を、次に <BzWenben jian="box.models.capabilities" /> 列を非表示にします。それらの値はモデル名のツールチップに移ります。

Anthropic が一覧にまだないモデルをリリースした場合は、<BzWenben jian="box.models.fetch" /> をクリックします。Breezell があなたのキーで `https://api.anthropic.com/v1/models` を読み込み、新しい ID を追加できるようになります。<BzWenben jian="box.models.addModelPlaceholder" /> に ID を入力して <BzWenben jian="box.models.add" /> をクリックすることもできます。

方法 A はこれで完了です。[チャットで Claude を使う](#use-claude-in-chat) に進んでください。

## 方法 B：Anthropic プロトコルの互換スロット

Anthropic Messages API で Claude を提供している中継サーバー、API ゲートウェイ、セルフホストのプロキシには、この方法を使います。

### B1. 互換スロットを開く

1. <BzWenben jian="box.models.group.compat" /> をクリックします。
2. スロットのタイルをクリックします。Slot 1 は常に用意されています。新しいスロットでは、名前の下に <BzWenben jian="settings.noEndpoint" /> と表示されます。
3. 複数の中継サーバーを分けて管理したい場合は、それぞれについて <BzWenben jian="box.models.addCompat" /> をクリックします。Breezell には 50 個のスロットがあり、各スロットはアドレス、キー、プロトコル、モデルをそれぞれ持つ独立したチャネルです。
4. <BzWenben jian="box.models.editConfig" /> をクリックします。

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. スロットを設定する

フォームはどのスロットでも同じです。下で試してみてください。ベース URL やプロトコルを変えると、Breezell と同じように <BzWenben jian="settings.requestUrl" /> の表示が更新されます。

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />：`Claude Relay` のような 30 文字以内の名前です。モデルページではタイルのタイトルに、チャットのモデル選択メニューではグループ名になります。
- <BzWenben jian="settings.baseUrl" />：プロバイダーから提供されたアドレスです。`http://` または `https://` で始まる必要があります（例：`https://relay.example.com`、`http://127.0.0.1:8080`）。

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />：中継サーバーのキーです。伏せ字で表示され、目のアイコンで内容を確認できます。

**<BzWenben jian="settings.sectionProtocol" />**

**Anthropic** を選びます。3 つのボタンでリクエスト形式が決まります。

| ボタン | リクエスト形式 | Claude に使う？ |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | 中継サーバーに `/v1/messages` がない場合のみ（方法 C）。 |
| Responses | OpenAI Responses | いいえ。GPT モデル向けです。 |
| **Anthropic** | Anthropic Messages | **はい。** Breezell は Claude にこの形式を推奨しています。 |

次に <BzWenben jian="settings.endpointPreset" /> を確認します。Anthropic プロトコルには 2 つのプリセットがあります。

| プリセット | パス | 用途 |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | ほぼすべての中継サーバー。通常はこのままにします。 |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Volcengine Agent Plan 専用。 |

### B3. リクエスト URL を確認する

プリセットの下にある <BzWenben jian="settings.requestUrl" /> が、Breezell が実際に呼び出すアドレスです。Breezell はベース URL とプリセットのパスを結合し、重複した部分を取り除くため、よく使われる 2 通りのベース URL の書き方のどちらでも動作します。

| 入力したベース URL | プリセット | リクエスト URL |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

結果をプロバイダーのドキュメントと照らし合わせてください。プロバイダーが API を一般的でないパスに置いている場合は、リクエスト URL がプロバイダーの指定どおりに終わるようにベース URL を入力します。

### B4. カスタムヘッダーと Claude 1M（任意）

<BzWenben jian="settings.customHeaders" /> は、このスロットのすべてのリクエストに HTTP ヘッダーを追加します。プロバイダーから指示がない限り、`{}` のままにしておきます。

値は有効な JSON でなければなりません。キーと値には二重引用符を使い、コメントや末尾のカンマは入れないでください。

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

**Claude 1M** ボタンを押すと、まさにこのヘッダーが入力されます。200K を超えるプロンプトを受け付けるために中継サーバーがこのベータヘッダーを必要とする場合に使います。なお、Breezell のチャットでは各 Claude モデルが 200K から始まります。1M への切り替えは、チャットのモデル選択メニューでモデルごとに行います（[Context、Reasoning、Fast](#context-reasoning-and-fast) を参照）。

ヘッダーの下には <BzWenben jian="settings.accountPool" /> カードがあります。アカウントプールは、1 つのスロットで複数のキーやルートをローテーションする機能です。最初の設定では必要ありません。

### B5. Claude モデルを追加する

新しいスロットにはモデルがありません。次のどちらかの方法で追加します。

**一覧を取得する。** <BzWenben jian="box.models.fetch" /> をクリックします。Breezell が中継サーバーに利用可能なモデルを問い合わせ、チェックリストに表示します。Claude モデルにチェックを入れて <BzWenben jian="box.models.addSelected" /> をクリックします。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**ID を入力する。** <BzWenben jian="box.models.addModelPlaceholder" /> にモデル ID を入力し、<BzWenben jian="box.models.add" /> をクリックします。ID は中継サーバーでの名前どおりに入力してください（例：`claude-opus-5-5`）。中継サーバーがモデル一覧を提供していない場合は、この方法を使います。

### B6. スロットを検査する

<BzWenben jian="box.models.health.checkSlot" /> をクリックすると、このスロットに短いリクエストが送られます。失敗したモデルには <BzWenben jian="box.models.health.ribbonFail" /> バッジが、応答の遅いモデルには <BzWenben jian="box.models.health.ribbonTimeout" /> バッジが付きます。まったく到達できないスロットは、タイルに <BzWenben jian="box.models.health.ribbonDown" /> と表示されます。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

さらに詳しく調べるには、スロットのタイルの上にある <BzWenben jian="box.models.checkConnectivity" /> をクリックします。複数のスロットとモデルをまとめて検査でき、<BzWenben jian="box.models.health.checkStreaming" /> を使うと、中継サーバーが応答を少しずつ送っているか（<BzWenben jian="box.models.health.stream.streaming" />）、推論を保留しているか（<BzWenben jian="box.models.health.stream.heldThinking" />）、最後にまとめて送っているか（<BzWenben jian="box.models.health.stream.buffered" />）がわかります。

## 方法 C：OpenAI プロトコルの互換スロット

中継サーバーによっては、Claude を OpenAI Chat Completions 形式でしか提供していません。方法 B と同じようにスロットを設定し、次の点だけを変えます。

1. <BzWenben jian="settings.sectionProtocol" /> で **OpenAI** を選びます。
2. プリセットは <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" />（`/v1/chat/completions`）のままにします。
3. 中継サーバーが使っている ID でモデルを追加します。多くの中継サーバーは `claude-opus-5-5` を使いますが、`anthropic/claude-opus-5-5` のようにベンダー名を先頭に付けるものもあります。

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell は Claude モデルを名前で識別するため、`anthropic/claude-opus-5-5` や `claude-opus-5.5` にも `claude-opus-5-5` と同じ上限が適用されます。ただし、フォーム自体にも「<BzWenben jian="settings.apiFormat.openaiTip3" />」と表示されている点に注意してください。また、OpenAI プロトコルでは Claude Opus の **Fast** も使えません。中継サーバーが `/v1/messages` も提供している場合は、スロットを **Anthropic** に切り替えてください。

## Claude モデルを管理する

### 行メニュー

各モデルの行には **⋯** ボタンがあります。互換スロット上の Claude モデルでは、<BzWenben jian="box.models.pin" />、<BzWenben jian="box.models.advanced" />、<BzWenben jian="box.models.remove" /> を選べます。行にマウスを合わせると、モデル名の横にコピーアイコンが表示されます。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 価格を設定する

Breezell は Anthropic 公式 API の定価を把握していますが、中継サーバーの価格は把握していません。互換スロットでは、価格列に <BzWenben jian="box.models.editPrice" /> と表示されます。これをクリックし、中継サーバーの価格を 100 万トークンあたりの米ドルで入力します。入力、出力、キャッシュヒットに加え、Claude が使う 5 分と 1 時間のキャッシュ作成の価格です。すると <BzWenben jian="box.usage.tab.tokens" /> ビューに、トークン数とあわせて費用も表示されるようになります。価格を入力しなくてもトークン数は集計されますが、金額は計算されません。

### 詳細設定

Breezell はこのガイドに登場するすべての Claude モデル ID を認識し、上限値を自動で設定するため、ほとんどの方はこのダイアログを開く必要がありません。中継サーバーがモデル名を変えている場合（例：`my-claude`）、Breezell がモデルを認識できないと表示した場合、中継サーバーがより小さい上限を課している場合に開いてください。

まず <BzWenben jian="models.enableCustomSettings" /> をオンにします。オンにするまでは、すべてのカードがグレー表示で読み取り専用です。

<BzGaoji />

Breezell が Claude 5 のモデルに使う値は次のとおりです。

| 設定 | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| コンテキストウィンドウ（短 / 長） | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | オフ | オフ | オフ | **オン** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | オフ | **オン** | オフ | オフ |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

この表は、Anthropic プロトコルの互換スロットの場合です。Anthropic プロバイダー（方法 A）では、システムメッセージが `separated` になりますが、どちらも Claude で問題なく動作します。**Fast** を使えるのは、Anthropic プロバイダーと Anthropic プロトコルのスロットだけです。

トークン数を入力する欄では `k` や `m` の接尾辞を使えます。`128k` は `128000` に、`1m` は `1000000` になります。中継サーバーが許容する以上のコンテキストや出力サイズは設定しないでください。リクエストが失敗します。

**OpenAI** プロトコルのスロットでは、<BzWenben jian="models.systemMessage" /> で `system-role` または `developer-role`、<BzWenben jian="models.toolFormat" /> で `OpenAI Style` または `None (XML)` を選べます。ツール呼び出しが正しく動作するよう、Claude では `OpenAI Style` のままにしてください。

## チャットで Claude を使う {#use-claude-in-chat}

### モデルを選ぶ

チャットは Box の横に開いたままです。エディターも表示したい場合は、タイトルバーの **Agent** をクリックします。チャット入力欄の下にあるモデル名をクリックすると、モデル選択メニューが開きます。

- <BzWenben jian="box.models.group.api" /> タブには、Anthropic プロバイダー（方法 A）で有効にした Claude モデルが定価とともに表示されます。
- メニュー下部で **OpenAI-Compatible** に切り替えると、互換スロット（方法 B・C）が表示されます。各スロットは、そのニックネームを見出しとするグループとして表示されます。

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context、Reasoning、Fast {#context-reasoning-and-fast}

モデル選択メニューでモデルにマウスを合わせると、そのモデルのオプションが開きます。このパネルは実際に操作できるので、試してみてください。

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**：`200K`（<BzWenben jian="inputToolbar.contextDefault" /> と表示）または `1M`。Breezell はどの Claude モデルも 200K で開始し、`1M` を選んだときだけ大きい枠で送信します。
- **Reasoning**：Claude Fable、Opus、Sonnet 5.x は常に推論するため、スイッチはオンのまま固定されています。`claude-haiku-5-5` では、素早く回答させたいときに推論をオフにできます。
- **Effort**：**Faster** 寄りの `Low` から **Smarter** 寄りの `Max` まで、`Low`、`Medium`、`High`、`Extra High`、`Max` から選べます。`Max` にするとスライダーが紫色になります。
- **Fast**：`claude-opus-5-5`（および Opus 5 / Opus 4.8）のみ。料金は 2 倍になり、応答は約 2.5 倍速くなります。

選んだ内容は、入力欄の下のモデル名の横に表示されます（例：`claude-opus-5-5 200K Medium`、`claude-opus-5-5 1M High Fast`）。設定はモデルごとに記憶されます。

### メッセージを送る

メッセージを入力して送信します。設定がすべて正しければ、あなた自身のキーを通じて返信が届きます。

<BzLiaotian moxing="claude-opus-5-5" wen="こんにちは！あなたはどのモデルですか？" da="こんにちは！Claude Opus 5.5 です。あなた自身の API キーを使って Breezell 上で動いています。今日は何を作りましょうか？" />

これで BYOK の設定は完了です。

## 使う Claude モデルの選び方

| モデル ID | コンテキスト | 価格 入力 / 出力（100 万トークンあたり） | デフォルト強度 | 推論オフ | Fast | 向いている用途 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | 不可 | なし | 最も難しい問題や大規模なリファクタリング |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | 不可 | あり（2×） | 日々の Agent 作業。迷ったらこれ |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | 不可 | なし | 速度とコストのバランス重視 |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | 可 | なし | ちょっとした質問や小さな編集 |

価格は、Breezell の組み込みカタログに記載された Anthropic API の定価です。中継サーバーは独自に価格を設定しています。`claude-haiku-5-5` では、100K トークンを超えるプロンプトは 5 倍の料金で課金されます。

## トラブルシューティング

| 表示される内容 | 意味 | 対処法 |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | ご利用のプランにカスタムプロバイダーが含まれていません。 | Custom API プラン以上にアップグレードしてください。 |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | スロットにまだベース URL が設定されていません。 | <BzWenben jian="settings.baseUrl" /> を入力してください。 |
| <BzWenben jian="box.models.fetchNeedsKey" /> | キーの入力欄が空です。 | キーを貼り付けてください。 |
| <BzWenben jian="box.models.fetchAuthFailed" /> | プロバイダーが 401 / 403 を返しました。 | キーをコピーし直し、このプロバイダーのキーであること、プランと IP 許可リストを確認してください。 |
| <BzWenben jian="box.models.fetchFailed" /> … | 中継サーバーにモデル一覧がないか、アドレスが間違っています。 | <BzWenben jian="settings.requestUrl" /> を確認するか、モデル ID を手動で追加してください。 |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | 中継サーバーが返したモデルはすべてスロットに追加済みです。 | 対応は不要です。 |
| <BzWenben jian="box.models.health.errTimeout" /> | リクエストがタイムアウトしました。 | アドレス、プロキシ、ネットワーク経路を確認してください。 |
| <BzWenben jian="box.models.health.errConnect" /> | ホストに到達できませんでした。 | アドレス、DNS、プロキシを確認してください。 |
| <BzWenben jian="box.models.health.errHttp" /> | 中継サーバーが HTTP エラーを返しました。 | 多くの場合、パスかプロトコルの誤りです。<BzWenben jian="settings.requestUrl" /> とプロトコルを、プロバイダーのドキュメントと比較してください。 |
| リクエスト URL に `/v1/v1` が含まれる、または `/v1` が抜けている | ベース URL とプリセットが合っていません。 | <BzWenben jian="settings.requestUrl" /> が正しくなるまでベース URL を修正してください。 |
| 長く待った後に返信が一度に表示される | 中継サーバーがストリームをバッファリングしています。 | <BzWenben jian="box.models.health.checkStreaming" /> を実行してください。<BzWenben jian="box.models.health.stream.heldThinking" /> と判定された場合は、強度を下げると待ち時間が短くなります。 |
| 200K を超えるリクエストが失敗する | 中継サーバーが 1M ベータヘッダーを必要としているか、1M コンテキストに対応していません。 | <BzWenben jian="settings.customHeaders" /> で **Claude 1M** を押すか、モデルを `200K` のままにしてください。 |
| 取得後もモデル一覧が空のまま | 一覧が読み込まれていません。 | Breezell を再起動してもう一度取得するか、ID を手動で追加してください。 |

## よくある質問

**Anthropic 公式のキーと中継サーバーを同時に使えますか？**
はい。方法 A と各互換スロットはそれぞれ独立しています。チャットのモデル選択メニューにはこれらが並んで表示され、会話ごとに切り替えられます。

**複数の中継サーバーやキーを保存できますか？**
はい。中継サーバーごとに 1 つのスロットを使います（最大 50 個）。同じ中継サーバーで複数のキーをローテーションするには、そのスロットの <BzWenben jian="settings.accountPool" /> を使います。Box のサイドバーにある <BzWenben jian="box.vault.group" /> は、中継サーバーのアドレスとキーをシステムのキーチェーンに保管し、スロットへ自動入力することもできます。

**料金はどこから請求されますか？**
使っているキーのプロバイダーから請求されます。これらのリクエストで Breezell クォータが消費されることはありません。<BzWenben jian="box.usage.tab.tokens" /> ビューで使用したトークン数を確認できます。費用も確認したい場合は、互換スロットで価格を設定してください。
