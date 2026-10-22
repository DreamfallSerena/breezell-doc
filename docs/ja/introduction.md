---
title: はじめに
description: Code – OSS を基盤とする AI コードエディター Breezell を紹介し、インストールから AI による最初の変更までの流れを説明します。
---

# はじめに

Breezell は VS Code（Code – OSS）を基盤とした AI コードエディターです。エディター、拡張機能、キーバインドはこれまでどおりに使えます。そしてその隣には、プロジェクトを読み、ファイルを編集し、コマンドを実行し、ツールを自律的に使える AI がいます。

::: tip このページの画面について
このガイドに掲載している Breezell の画面は、スクリーンショットではなく、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に、配色はこのサイトのライト / ダーク切り替えに従います。番号付きのオレンジ色のバッジは、このガイド用のラベルにすぎません。
:::

## Breezell のウィンドウ

<BzChuangti wen="起動時に設定ファイルを一度だけ読み込んで、キャッシュしてください。" da="完了しました。config.ts はファイルを一度だけ読み込んで解析結果を保持し、index.ts はサーバーの起動前に loadConfig() を呼び出すようになりました。" />

| | 構成要素 | 説明 |
| --- | --- | --- |
| 1 | **Box \| Agent** | ウィンドウ全体を **Agent** ページ（コードと AI）と **Box** ページ（設定とデータ）の間で切り替えます。 |
| 2 | エディター | タブ、ファイルエクスプローラー、検索、Git、拡張機能を備えた Code – OSS のエディターです。 |
| 3 | チャット | AI と会話する場所です。チャットは、コードの隣にエディタータブとして開くこともできます。 |
| 4 | モード | この会話で AI にどこまで任せるかを、通常のチャットから自律的なエージェントまでの範囲で決めます。[モード](#modes) を参照してください。 |
| 5 | モデル | どのモデルが回答するかを選びます。コンテキスト、推論、速度のオプションも設定できます。 |

### Agent と Box

**Agent** は作業をする場所で、エディターとチャットが横に並んで表示されます。

**Box** は管理用のページです。サイドバーには <BzWenben jian="box.title" />（モデルとプロバイダー、機能オプション、一般設定と言語設定、MCP とスキル、プライバシー、実験的機能）のほか、作業に関わるデータとして <BzWenben jian="box.review.group" />、<BzWenben jian="box.memory.group" />、<BzWenben jian="box.storage.group" />、<BzWenben jian="box.perf.group" />、<BzWenben jian="box.database.group" />、<BzWenben jian="box.vault.group" /> がまとめられています。Box を開いている間も、チャットは開いたままです。

<BzHezi />

## モード {#modes}

チャット入力欄の左下にあるモードのピルで、AI に何を許可するかが決まります。入力欄は、モードごとに固有の色で表示されます。

| モード | Breezell での説明 |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement と Teams は、友達 5 人の協力を得るか、いずれかの有料プランに加入すると使えるようになります。Teams と DarkSelene は、ほかのモードよりもはるかに多くのトークンを消費します。どの場面でどのモードを使うかは、[モードの選択](/mode-selection) で説明しています。

## モデル

Breezell では、モデルが 4 種類のプロバイダーに分けられています。

- **Breezell**：Breezell の公式モデルです。利用分は Breezell のクォータから差し引かれます。
- **サインイン**：ChatGPT（Codex）、GitHub Copilot、Kimi、Grok、Gemini、DeepSeek、MiniMax、OpenRouter など、すでに持っているアカウントで使います。
- **API プロバイダー**：Anthropic、OpenAI、Gemini、DeepSeek など、各ベンダーの公式 API を自分のキーで使います。
- **OpenAI 互換**：中継サーバー、ゲートウェイ、セルフホストのプロキシ用に、最大 50 個のスロットを使えます。

Breezell モデル以外はすべて、自分のキーまたはアカウントで動作します。[カスタム API（BYOK）](/custom-api) では、Claude モデルを例に手順を説明しています。

## Breezell のその他の機能

- **スーパーメモリー**：会話をまたいで記憶を保つ長期メモリーです。閲覧・編集できるメモリーライブラリも備えています。[スーパーメモリー](/super-memory) を参照してください。
- **Breezell Mind**：古い履歴を作業メモにまとめることで、長い会話をトークン予算内に収めます。元の記録はディスクに残ります。
- **コードレビュー**：AI による変更を確認するためのレビューページです。ファイルごとの差分を確認でき、ワンクリックで変更を元に戻せます。
- **Breezell Browser**：AI が開き、内容を読み取り、操作できる組み込みブラウザーです。
- **MCP とスキル**：Model Context Protocol を通じて外部ツールに接続し、スキルを複数のプロジェクトで再利用できます。[プロンプトとスキルの設定](/prompt-settings) を参照してください。
- **データベース**：SQLite、MySQL、PostgreSQL、SQL Server、Oracle、MariaDB、MongoDB、Redis にエディター内から接続できます。
- **金庫**：中継サーバーのアドレスやキーをシステムのキーチェーンに保管し、必要な場所に自動で入力します。
- **Image Studio**：画像や動画を生成します。
- **ホットアップデート**：新しいバージョンはエディター内でダウンロードされ、再インストールしなくても再起動後に反映されます。

## 使い始める

1. お使いのプラットフォーム向けの Breezell をダウンロードし、インストールします。
2. Breezell アカウントにサインインします。
3. インターフェースの言語を選びます。[言語設定](/settings-page-language-settings) を参照してください。
4. モデルを選びます。Breezell モデルをすぐに使うか、[カスタム API（BYOK）](/custom-api) で自分のキーを使います。
5. プロジェクトフォルダーを開き、チャット入力欄の下でモードとモデルを選んでから、やりたいことを入力して送信します。

> Breezell は Code – OSS（MIT License）を基盤としています。VS Code および Visual Studio Code は Microsoft Corporation の商標です。Breezell は Microsoft と提携しておらず、Microsoft の承認も受けていません。
