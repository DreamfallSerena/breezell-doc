---
title: プラグイン
description: Breezell のマーケットからプラグインを入れる方法と、Breezell API で自作する方法。
---

# プラグイン

Breezell のプラグインは VS Code 拡張機能で、`vscode.breezell` も備えているため、Breezell 本体（チャット、Agent、モデル選択、エディター自身の画面）と連携できます。プラグインは Breezell にサインインしている間だけ動作し、サインアウトすると停止します。

## インストールと管理

**Box ▸ プラグイン** を開きます。マーケットには公開済みのプラグインがすべて並び、検索、カテゴリでの絞り込み、オープンソースとクローズドソースの切り替え、ページ送りができます。各カードには「インストール」「開く」、有効スイッチ、「アンインストール」があります。

- **インストール済み**：プラグインごとに 1 行で、状態、バージョン、提供元、ライセンス、ID と、「ウィンドウ」「追加するもの」「権限」のカードを表示します。
- **開発**：テンプレートからプラグインを作成し、コードからマーケット公開までの手順を示します。
- **ローカルの .vsix をインストール**：自分でパッケージしたものをインストールします。チェックサムが公開版と一致しないパッケージはインストールされません。

パネルやウィンドウを追加するプラグインは、Box のサイドバーの「プラグイン」にも表示されます。

## プラグインの種類

| 種類 | 内容 | 例 |
|---|---|---|
| Pack | コードなし：`package.json` で宣言したスキル、AI のルール、MCP サーバー、テーマ | Starter Pack |
| Panel | Breezell 内に独自ページを開き、会話に追随する | Focus Player |
| AI | ユーザーのチャットモデルを使うコマンド | Doc Writer |
| Window | 独自のウィンドウ。エディターを開かずに起動できる | Focus Timer |
| Conversation | 会話を読み、メッセージを送り、ツール呼び出しを承認し、サブエージェントを開始・メッセージ送信・終了する | Chat Mirror |
| Screens | Breezell 自身の画面にボタン、ページ、差し替え、コードフェンス、モードを追加する | Desk Pet |
| Companion | 入力欄の上で AI の動きに合わせる相棒 | Desk Pet |
| Long-running | 完了まで会話を続け、上限と独自ページを持つ | Goal |

種類は組み合わせられます。1 つのプラグインがスキル、パネル、AI コマンド、ウィンドウを同時に提供することもあります。設定ページ、GitHub Release からのデータ取得、システムへのコンポーネント導入を備えた大きめの例は Breezell IME を参照してください。

## プラグインを作る

Breezell で **Box ▸ プラグイン ▸ 開発** を開き、ID と名前を入力し、テンプレート（Pack、Panel、AI command、Window、Minimal）とオープン／クローズドソースを選び、フォルダーを指定して新しいウィンドウで開きます。**F5** で実行できます。

コマンドラインから作る場合（Node.js 18 以降）：

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| コマンド | 内容 |
|---|---|
| `npm run build` / `npm run watch` | esbuild で `src/extension.ts` を `dist/extension.js` にまとめる |
| `npm run typecheck` | TypeScript の型チェック |
| `npm run validate` | `package.json` を検証する |
| `npm run package:open` | オープンソースとしてパッケージ化：ソースと source map も含める |
| `npm run package:closed` | クローズドソースとしてパッケージ化：圧縮済みコードのみ、ソースと source map は含めない |
| `npm run submit -- --market` | パッケージをマーケットに追加する |

## プラグインにできること

プラグインは必要な権限を `package.json` で宣言し、宣言していないことは拒否されます。会話の開始・終了を知るといった日常的な権限は既定で許可されます。チャットモデルの使用、会話の読み取り、メッセージの送信、ツール呼び出しの承認、コードや入力欄の読み取り、送信前のメッセージ変更、カスタム API キーの読み取りといったリスクのある権限は、プラグインが初めて使うときに確認され、回答は記憶されます。

プラグインはアカウント、プラン、クォータ、請求、カスタム API 設定、権限ダイアログ、ツール承認、プラグイン管理画面には触れられません。ユーザーの操作が必要なものはプラグインの画面の上に表示され、Breezell に追加されたボタンには「プラグインから：名前」と表示されます。

### サブエージェント

1.4.56 より新しい Breezell では、プラグインはサブエージェントも扱えます。サブエージェントは、Agent またはエンタングルメントモードの会話が開始する独立した会話で、その会話のモードのまま動作し、終わると報告します。`chat.read` を持つプラグインは会話のサブエージェントを一覧し、どの会話がサブエージェントで、それぞれ何をしているかが分かります。`chat.send` を持つプラグインはタスクを渡してサブエージェントを開始し、メッセージを送り、終了できます。この方法でプラグインが送った内容は必ずプラグインのものとして表示され、あなたやメインのエージェントの言葉としては扱われません。プラグインがサブエージェントを開始・終了したときは、メインのエージェントにも伝わります。詳しくは開発者向けガイドの [Subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md#subagents-chatread-chatsend) を参照してください。

## 公開

[BreezellCode リポジトリ](https://github.com/BreezellCode/BreezellCode) を fork し、プラグインをパッケージして（`npm run package:open` または `npm run package:closed`）、`npm run submit -- --market` を実行し、pull request を作成します。マーケットのチェックが走り、メンテナーがレビューします。クローズドソースのプラグインは圧縮済みコードのみを含みます。

## 開発者向けガイド全文

`package.json`、各権限、API のすべての呼び出し、エラー、上限、チャット、モデルとプロバイダー、Agent、Breezell の画面、ウィンドウ、再起動、翻訳、セキュリティ、公開、レシピを含む完全なガイドはリポジトリにあります。

- [プラグインの概要](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [はじめかた](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [API リファレンス](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [権限](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [会話とサブエージェント](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md)
- [公開](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

テンプレートから作ったプラグインには AI スキル（`.agents/skills/breezell-plugin/`）も付属し、これらのページを参照資料として使うため、AI アシスタントも同じガイドに沿って開発できます。
