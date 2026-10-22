---
title: カスタムモデルの視覚機能
description: テキストしか読み取れないモデルでも、代わりに画像を読み取る 2 つ目のモデル（ビジョンプロキシ）を通じて画像を扱えるようにする方法を説明します。
---

# カスタムモデルの視覚機能

モデルによっては、テキストしか読み取れないものがあります。**ビジョンプロキシ**を使えば、そうしたモデルでもスクリーンショットなどの画像を扱えます。画像を認識できる 2 つ目のモデルが先に画像を読み取り、Breezell がその説明文をテキスト専用モデルに渡します。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。ビジョンプロキシダイアログのモデルメニューは実際に操作できます。
:::

## 必要になる場面

Breezell は、どのモデルが画像を受け付けないかを把握しています。Box ▸ <BzWenben jian="tab.models" /> では、そうしたモデルの最初の機能アイコン（<BzWenben jian="box.models.filter.vision" />）がグレーで表示され、**⋯** メニューに <BzWenben jian="models.visionProxy" /> の項目が表示されるのもそれらのモデルだけです。

たとえば DeepSeek プロバイダーでは、`deepseek-v4-pro`、`deepseek-chat`、`deepseek-reasoner` はテキスト専用ですが、Flash モデルは自身で画像を読み取れます。Claude モデルはすべてネイティブに画像を読み取れ、Breezell のモデルにプロキシが必要になることはありません。

プロキシを設定せずにテキスト専用モデルに画像を添付した場合の動作は、プロバイダーによって異なります。

| プロバイダー | ビジョンプロキシがない場合 |
| --- | --- |
| 公式 API プロバイダー（DeepSeek、OpenAI など） | メッセージは送信されません。入力欄の上に <BzWenben jian="chat.visionProxyHint.requiredTitle" /> という通知が表示されます。 |
| OpenAI 互換スロット | 多くの中継サーバーは独自のビジョンモデルを組み込んでいるため、画像はそのまま中継サーバーに送られます。中継サーバーが画像を処理できない場合にのみ、プロキシを設定してください。 |

## 仕組み

1. 画像付きのメッセージをテキスト専用モデルに送信します。
2. Breezell はまず、選択した画像認識モデルに画像を送ります。その際、表示されているテキストをすべて正確に書き起こすこと、そしてリクエストに関係するレイアウト、コントロール、状態、色、エラーを説明することをそのモデルに求めます。見えない細部を推測で付け加えないことも指示します。
3. テキスト専用モデルへのリクエストでは、画像の代わりにこの説明文が使われ、モデルはいつもどおり回答します。

Breezell の起動中は、各画像の説明は認識モデルごとに 1 回だけ作成されて再利用されるため、同じスクリーンショットが 2 回分析されることはありません。認識リクエストの料金は、認識モデルのプロバイダーから請求されます。

## ビジョンプロキシを設定する

この例では、`deepseek-v4-pro`（テキスト専用）にプロキシとして `claude-sonnet-5-5` を設定します。

### 1. モデルのメニューを開く

1. Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" /> を開き、<BzWenben jian="box.models.group.api" /> を選んで **DeepSeek** を選択します。
2. `deepseek-v4-pro` がまだ有効になっていない場合は、オンにします。<BzWenben jian="box.models.filter.vision" /> アイコンはグレーになっています。
3. 行の末尾にある **⋯** をクリックし、<BzWenben jian="models.visionProxy" /> を選びます。

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. 画像認識モデルを選ぶ

<BzWenben jian="models.visionProxy" /> ダイアログでは、タイトルの下に設定中のモデルが表示されます。

1. <BzWenben jian="models.visionProxyModel" /> を開きます。一覧はチャットのモデル選択メニューと同じく検索欄とプロバイダーごとのグループを備えていますが、表示されるのは画像を読み取れるモデルだけです。
2. モデルを選びます（例：`claude-sonnet-5-5`）。
3. <BzWenben jian="common.save" /> をクリックします。

ここでメニューを試してみてください。

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

画像を読み取れるモデルであれば、どれでも使えます。`claude-sonnet-5-5` は情報量の多いスクリーンショットも詳しく説明でき、`claude-haiku-5-5` はシンプルな画像なら高速かつ低コストです。

### 3. 画像を送信する

チャット入力欄の下で `deepseek-v4-pro` を選択し、画像を入力欄に貼り付けるかドラッグして、メッセージを送信します。

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

これで、テキスト専用モデルが画像の内容について回答します。

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="アプリを起動するとこのエラーが出るのはなぜですか？" da="スクリーンショットには Error: Cannot find module './config.json'（src/config.ts の 4 行目、loadConfig 内）と表示されています。アプリはコンパイル後のファイルと同じ場所で config.json を探しますが、ビルド時にこのファイルがコピーされていません。ビルドでコピーするファイルに config.json を追加するか、プロジェクトのルートからの相対パスで読み込むようにしてください。" />

## Breezell からビジョンプロキシを求められた場合

公式プロバイダーのテキスト専用モデルに画像を添付したとき、そのモデルにまだプロキシが設定されていなければ、Breezell は画像を送信せず、入力欄の上に次の通知を表示します。

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

<BzWenben jian="chat.visionProxyHint.configureAction" /> をクリックすると Box が開くので、上記の手順でプロキシを設定してから、もう一度送信してください。

次のような表示が出ることもあります。

| 通知またはエラー | 意味 | 対処法 |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | プロキシとして選んだモデルも画像を読み取れません。 | ダイアログをもう一度開き、画像を読み取れるモデルを選んでください。 |
| `The configured vision proxy (…) could not analyze the image.` | 認識リクエストが失敗しました。たとえば、プロキシのプロバイダーが設定されていないか、リクエストを拒否した場合です。 | プロキシモデルのプロバイダーを確認するか、別のプロキシを選んでください。 |

プロキシを設定せずに会話を続けた場合、チャットを続行できるよう、以前の画像は以降のメッセージから除外されます。

## プロキシを変更・削除する

モデルの **⋯** メニューから <BzWenben jian="models.visionProxy" /> をもう一度開きます。別のモデルを選ぶか、プロキシを削除する場合は一覧の先頭にある <BzWenben jian="models.visionProxyNotConfigured" /> を選び、<BzWenben jian="common.save" /> をクリックします。プロキシが設定されている場合、その行の **⋯** ボタンに小さな点が表示されます。

## まとめ

1. Box ▸ <BzWenben jian="tab.models" />：テキスト専用モデル（<BzWenben jian="box.models.filter.vision" /> アイコンがグレー）を探します。
2. **⋯** ▸ <BzWenben jian="models.visionProxy" /> を開きます。
3. <BzWenben jian="models.visionProxyModel" /> で画像を読み取れるモデルを選び、保存します。
4. いつもどおり、テキスト専用モデルに画像を送信します。
