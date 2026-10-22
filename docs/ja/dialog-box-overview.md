---
title: ダイアログボックスの概要
description: Breezell のチャットパネルを一通り紹介します。メッセージの作成と送信、モード、モデル、@ メニューと / メニュー、トレイのボタン、コンテキストの使用量と圧縮、キューに入ったメッセージ、巻き戻しについて説明します。
---

# ダイアログボックスの概要

Breezell の **Agent** 側にあるチャットパネルは、AI と対話する場所です。ここでリクエストを書き、AI の作業方法と使用するモデルを選び、コンテキストを添付して、作業の進み具合を確認します。このページでは、パネルの各部分を順に説明します。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。一部の画面は実際のパネルと同じように動作します。モードメニュー、Context の一覧、送信済みのメッセージにマウスを合わせたり、スイッチや星をクリックしたりしてみてください。
:::

## チャットパネルの構成

<BzLiaotian biaotilan quanbiao wen="設定ページにダークモードの切り替えスイッチを追加してください。" da="SettingsPage.vue に、ページのテーマクラスを切り替えて選択内容を記憶するトグルを追加します。まず、設定がどのように保存されているかを確認します。" />

| | 部分 | 役割 |
| --- | --- | --- |
| 1 | ヘッダーのボタン | **New Chat**（+）、**Skills & Memory**（ノート）、**Chat History**（時計）です。Skills & Memory をクリックすると [Rules, Memories & Skills](/prompt-settings) パネルが開きます。 |
| 2 | 入力欄 | メッセージを書く場所です。空のときは <BzWenben jian="chat.input.placeholder" /> と表示されます。 |
| 3 | モード | このメッセージで AI がどのように作業するかを決めます。会話のみ、計画、読み取り専用の分析、ファイルの編集などがあります。[モードを選ぶ](#mode) を参照してください。 |
| 4 | モデル | 回答するモデルです。後ろにコンテキストウィンドウと推論の強度が続きます（例：`200K Medium`）。[モデルを選ぶ](#model) を参照してください。 |
| 5 | コンテキストリング | コンテキストウィンドウの使用率を示します。クリックすると詳細が表示され、手動で圧縮することもできます。[コンテキストの使用量](#context) を参照してください。 |
| 6 | **@** | ファイル、フォルダー、過去のチャットをメッセージに追加します。[@ でコンテキストを追加する](#mention) を参照してください。 |
| 7 | 送信 | メッセージを送信します。AI の回答中は停止ボタンに変わります。 |
| 8 | トレイ | 入力欄の下に並ぶボタンです。Breezell Browser、添付、クイックフレーズ、プロンプトを最適化、MCP、スキルがあります。[入力欄の下のトレイ](#tray) を参照してください。 |

## メッセージを書いて送信する {#send}

1. 入力欄をクリックしてリクエストを書きます。何をしたいのか、どこが対象なのか（ファイルやページなど）を書いてください。
2. `Enter` を押すと送信されます。`Shift+Enter` を押すと、送信せずに改行します。

テキストを入力すると、送信ボタンがグレーから白に変わります。

<BzLiaotian shuru="設定ページにダークモードの切り替えスイッチを追加してください。" />

画像を追加するには、入力欄に貼り付けるかドラッグします。その他のファイルは、トレイのクリップアイコンから追加します。エディターでコードを選択して `Ctrl+L`（macOS では `Cmd+L`）を押すと、選択範囲がチャットに追加されます。

### AI の回答中

送信ボタンが、四角形の入った白い停止ボタンに変わります。クリックすると回答を停止します。

その間も入力を続けられます。回答中に送信したメッセージは失われません。入力欄の上の <BzWenben jian="chat.queue.queued" canshu="2" /> の下で待機し、AI の手が空くと順番に送信されます。

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="README も更新してください|そのあとテストを実行してください" wen="設定ページにダークモードの切り替えスイッチを追加してください。" da="SettingsPage.vue に、ページのテーマクラスを切り替えるトグルを追加します。" />

キューに入った各メッセージには、次のボタンがあります：<BzWenben jian="chat.queue.moveUp" /> と <BzWenben jian="chat.queue.moveDown" />（複数あるとき）、<BzWenben jian="common.edit" />（入力欄に戻します）、<BzWenben jian="chat.queue.sendNow" />（現在の回答を停止して、このメッセージを送信します）、<BzWenben jian="common.delete" />。ドラッグして順番を入れ替えることもできます。キューのメッセージを送信できなかった場合は、その下に理由が表示されます。例：<BzWenben jian="chat.queue.notSent.turnError" />

## モードを選ぶ {#mode}

入力欄の左下にあるカプセル型のモードボタンをクリックします。モードにマウスを合わせると、その説明が表示されます。

<BzLiaotian tanchu="moshi" moshi="agent" />

| モード | 概要 |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent が既定のモードで、ほとんどのタスクに適しています。選んだモードは次のメッセージから適用されます。別のモードで送信すると、会話の中に <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> という行が表示され、切り替えたことがわかります。

Entanglement と Teams は、5 人の友達に解除を手伝ってもらうか、いずれかのプランを購入するまでロックされています。ロックされたモードはメニューに鍵アイコンが付き、説明欄に解除の進捗が表示されます。

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## モデルを選ぶ {#model}

モードの横にあるモデル名をクリックします。モデル選択メニューには、検索ボックス、モデルの提供元、モデルごとの設定（コンテキストウィンドウ、推論の強度、Fast）があります。手順は [カスタム API（BYOK）](/custom-api#use-claude-in-chat) で詳しく説明しています。

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

モデル名の後ろのテキストは、これらの設定の短い要約です。`200K Medium` は 200K のコンテキストウィンドウと中程度の推論の強度を、`1M High Fast` は 1M のウィンドウ、高い強度、Fast を表します。[Context、Reasoning、Fast](/custom-api#context-reasoning-and-fast) を参照してください。

## @ でコンテキストを追加する {#mention}

入力欄で `@` を入力するか、**@** ボタンをクリックします。入力欄のすぐ上にメニューが開きます。

<BzLiaotian tanchu="tiji" shuru="@" />

| 項目 | 追加される内容 |
| --- | --- |
| files | ワークスペース内のファイル。 |
| folders | フォルダー全体。 |
| chats | 以前の会話。AI にはその記録への参照が渡され、必要なときに AI が読み込みます。そのため、複数のチャットを添付してもコンテキストを圧迫しません。 |

先にカテゴリーを開く必要はありません。`@` の直後に続けて入力すると、Breezell がファイルとフォルダーをまとめて検索します。開いているファイルが先頭に表示され、`Recent` のマークが付きます。矢印キーと `Enter` で選ぶか、クリックします。

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

files と folders の中では、メニューのヘッダーにあるチップで <BzWenben jian="inputToolbar.filterOn" /> と <BzWenben jian="inputToolbar.filterOff" /> を切り替えられます（<BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />）。一致するものがない場合は、コミットされていない変更のあるファイルが候補に表示され、`Changed` のマークが付きます。

選んだ項目はメッセージ内のタグになるため、どのファイル、フォルダー、チャットを指しているのかが AI に正確に伝わります。

## / でスキルとクイックフレーズを使う {#slash}

入力欄の先頭で `/` を入力すると、[クイックフレーズ](#quick-phrases) とスキルが 1 つの一覧に表示されます。

<BzLiaotian tanchu="xiegang" shuru="/" />

- クイックフレーズを選ぶと、そのフレーズに設定された動作（テキストの挿入、送信、ターミナルでの実行）が行われます。
- スキルを選ぶとメッセージに追加され、AI はこのリクエストでそのスキルを使います。
- オフになっているスキルはグレー表示になり、行にスイッチが付きます。ここでオンにすれば、そのまま使えます。

## 入力欄の下のトレイ {#tray}

入力欄の下にある点線のトレイには、6 つのボタンがあります。ボタンにマウスを合わせると名前が表示されます。

| ボタン | 役割 |
| --- | --- |
| Breezell Browser（地球儀） | Breezell の組み込みブラウザーのパネルを開きます。 |
| <BzWenben jian="inputToolbar.attach" />（クリップ） | パソコン上のファイルをメッセージに添付します。 |
| <BzWenben jian="inputToolbar.quickPhrases" /> | 保存したフレーズとコマンドです。 |
| <BzWenben jian="inputToolbar.optimizePrompt" />（魔法の杖） | 書いた内容を、より明確なプロンプトに書き直します。 |
| MCP | MCP サーバーのオン / オフを切り替えます。 |
| <BzWenben jian="inputToolbar.skills" />（レイヤー） | スキルのオン / オフを切り替えます。 |

MCP またはスキルのボタンに小さな緑の点が付いている場合は、少なくとも 1 つがオンになっています。チャットパネルの幅が狭いときは、Breezell Browser が **⋯**（<BzWenben jian="inputToolbar.more" />）メニューの中に移動します。Chat History の会話を参照しているときは、トレイに青い <BzWenben jian="inputToolbar.referenced" /> ボタンが表示されます。クリックすると参照を解除できます。

### Breezell Browser {#browser}

Breezell Browser は Breezell に組み込まれたブラウザーです。ページはエディターのタブとして、コードのすぐ隣に開きます。

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- ブラウザーが開いていないとき、パネルには <BzWenben jian="browserPanel.readyToLaunch" /> と表示されます。<BzWenben jian="browserPanel.open" /> をクリックするか、入力フィールド（<BzWenben jian="browserPanel.searchPlaceholder" />）にリンクや検索語を入力して `Enter` を押します。
- ページを開くと、パネルにタブとして一覧表示されます。タブをクリックするとそのタブに切り替わり、行のボタンでミュートしたり閉じたりできます。ヘッダーのボタンを押すと、すべてのタブがミュートされます。

AI 自身が使うブラウザーツールは、既定では画面外で動作します。動作の様子を見たい場合は、[機能オプション](/feature-options-overview) で <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> をオフにします。

### クイックフレーズ {#quick-phrases}

クイックフレーズは、よく使うテキストやコマンドを登録しておく機能です。ボタンを押すと、よく使うフレーズが表示されます。クリックするとそのフレーズを使えます。

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

<BzWenben jian="quickPhrases.manage" /> をクリックすると管理画面が開きます。左側にはすべてのフレーズが、右側にはよく使うフレーズが表示されます。ボタンに表示されるのは右側のフレーズです。

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- フレーズの星をクリックするか、フレーズを選択して中央の矢印をクリックすると、<BzWenben jian="quickPhrases.favorites" /> に追加されます。右側へドラッグして追加することもできます。よく使うフレーズの **×** は、そのフレーズをよく使うから外すだけです。
- よく使うフレーズの鉛筆アイコンで編集します。左側のごみ箱アイコンでフレーズを削除します。
- 上部の <BzWenben jian="common.add" /> をクリックすると、新しいフレーズのエディターが開きます。

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

各フレーズには、名前、内容、アクションの種類があります。

| 種類 | フレーズを選んだときの動作 |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | 内容が入力欄に入ります。送信する前に編集することもできます。 |
| <BzWenben jian="quickPhrases.send" /> | 内容がすぐにメッセージとして送信されます。 |
| <BzWenben jian="quickPhrases.terminal" /> | 内容がターミナルでコマンドとして実行されます。任意の <BzWenben jian="quickPhrases.workingDirectory" /> で、実行するフォルダーを指定できます。 |

クイックフレーズは [`/` メニュー](#slash) にも表示されます。

### プロンプトを最適化 {#optimize}

大まかなリクエストを書いてから、魔法の杖をクリックします。Breezell がそれをより明確なプロンプトに書き直し、まず結果を表示します。この時点では何も送信されません。

<BzLiaotian tanchu="youhua" shuru="設定ページ ダークモードにしたい" youhuawen="設定ページにダークモードの切り替えスイッチを追加してください。選択内容はページを再読み込みしても保持されるように保存し、ルート要素のテーマクラスを切り替えて適用してください。ユーザーがモードを選ぶまでは、システムの設定に従ってください。" tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> を押すと、新しいテキストが入力欄に入ります。テキストを変更するまでは、もう一度魔法の杖をクリックすると <BzWenben jian="promptOptimize.undo" /> になり、元のテキストに戻ります。
- <BzWenben jian="promptOptimize.retrySame" /> を押すと別の案が作成されます。<BzWenben jian="promptOptimize.dismiss" /> を押すとパネルが閉じます。
- 入力欄が空のときは、魔法の杖を押しても <BzWenben jian="inputToolbar.optimizePromptEmpty" /> と表示されるだけです。

書き直しには Chat のモデルが使われます。[機能オプション](/feature-options-overview) で専用のモデル（<BzWenben jian="models.promptOptimizeModel.title" />）を指定することもできます。

### MCP {#mcp}

MCP パネルには、MCP サーバーとその状態が一覧表示されます。緑は接続済み、赤はエラー、グレーはオフまたは未起動を表します。

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- スイッチで、AI がそのサーバーを使えるかどうかを切り替えます。ヘッダーにはオンになっているサーバーの数が表示されます（例：`2/3`）。
- 矢印（<BzWenben jian="inputToolbar.referenceMcpServer" />）を押すとサーバーがメッセージに追加され、AI はこのリクエストでそのサーバーのツールを使います。
- **+**（<BzWenben jian="mcp.addServer" />）を押すと `mcp.json` が開きます。サーバーはここで追加します。

### スキル {#skills}

スキルボタンも、スキルに対して同じように動作します。タブは <BzWenben jian="skills.builtinTab" /> と <BzWenben jian="skills.myTab" /> の 2 つです。[チャットでスキルを使う](/prompt-settings#use-skills-in-a-chat) を参照してください。

::: warning MCP サーバーとスキルは長い会話の前に切り替える
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## コンテキストの使用量と圧縮 {#context}

**@** の横にあるリングは、会話がモデルのコンテキストウィンドウを使うにつれて埋まっていきます。マウスを合わせると `47.0% - 94.2K / 200.0K context used` のように数値が表示され、クリックすると **Context** パネルが開きます。

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

バーと一覧は、使用中のトークンを種類別に分けて示します。行にマウスを合わせると、バーの中の該当部分が強調されます。

| カテゴリー | 含まれるもの |
| --- | --- |
| System prompt | 現在のモードに対する Breezell の指示 |
| Tools | AI が呼び出せるツールの説明 |
| Rules | ワークスペースまたはグローバルのルール |
| Memories | リクエストとともに送信されるメモリー |
| Skills | オンになっているスキルの一覧 |
| MCP | オンになっている MCP サーバーのツール |
| Subagents | サブエージェントが行った作業 |
| Conversation | あなたのメッセージ、AI の回答、ツールの実行結果 |

### 自動圧縮と手動圧縮

会話が使用可能なコンテキストウィンドウの約 90% に達すると、Breezell が自動的に圧縮します。古いメッセージが要約に置き換えられ、会話はそのまま続きます。特に操作は必要ありません。

早めに空き容量を確保したい場合は、Context パネルで <BzWenben jian="contextUsage.compress" /> をクリックします（<BzWenben jian="contextUsage.compressTooltip" />）。実行中、ボタンには <BzWenben jian="contextUsage.compressing" /> と進捗率が表示されます。完了すると、パネルに次のいずれかが表示されます。

| メッセージ | 意味 |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | 完了しました。 |
| <BzWenben jian="contextUsage.nothingToCompress" /> | 会話が短すぎて圧縮できません。 |
| <BzWenben jian="contextUsage.errorBusy" /> | 先に回答を停止してから圧縮してください。 |
| <BzWenben jian="contextUsage.errorNoModel" /> | 先に入力欄の下でモデルを選択してください。 |

コンテキストウィンドウの小さいモデルに切り替えた後は、Breezell が会話を新しいウィンドウに収めている間、リングに <BzWenben jian="contextUsage.converting" /> と表示されることがあります。

## 送信済みメッセージを編集する・巻き戻す {#edit}

送信済みのメッセージにマウスを合わせます。左上に鉛筆アイコン、右側に戻る矢印が表示されます。

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="設定ページにダークモードの切り替えスイッチを追加してください。" da="完了しました。SettingsPage.vue にダークモードのスイッチを追加しました。選択内容は保存され、変更するまではシステムの設定に従います。" />

- **編集**：メッセージまたは鉛筆アイコンをクリックし、テキストを変更してもう一度送信します。
- **巻き戻し**（<BzWenben jian="editor.revertToThisPoint" />）：矢印をクリックして確定します。それ以降のメッセージが削除され、それらのメッセージで変更されたファイルも、そのメッセージの時点の状態に戻ります。

<BzLiaotian huigun wen="設定ページにダークモードの切り替えスイッチを追加してください。" da="完了しました。SettingsPage.vue にダークモードのスイッチを追加しました。選択内容は保存され、変更するまではシステムの設定に従います。" />

巻き戻しはエディターの元に戻す操作では取り消せないため、<BzWenben jian="editor.revertConfirmDo" /> をクリックする前にダイアログの内容を確認してください。この会話で AI がまだ回答している間は、矢印が薄く表示されます。先に回答を停止してください。

## キーボードショートカット {#shortcuts}

| キー | 操作 |
| --- | --- |
| `Enter` | メッセージを送信する |
| `Shift+Enter` | 改行する |
| `@` | メンションメニューを開く |
| 先頭で `/` | スキルとクイックフレーズを開く |
| `↑` `↓` の後に `Enter` | 開いているメニュー内を移動して選択する |
| `Esc` | 開いているパネルやメニューを閉じる |
| `Ctrl+L` / `Cmd+L` | エディターで選択した内容をチャットに追加する |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | 新しいチャットを開始する |

## ヒント

- ほとんどの作業には Agent が適しています。先に計画を立てたい、編集せずに分析したいなど、特定のワークフローが必要なときだけ切り替えてください。
- `@` で AI に正しい場所を示しましょう。どこにあるかを長々と説明するより、ファイルやフォルダーを指定するほうが確実です。
- 長く続く会話は、コンテキストリングで状態を確認しましょう。圧縮は自動で行われ、自分で空きを作りたいときは手動圧縮も使えます。
- 何度も入力するリクエストはクイックフレーズとして保存し、プロジェクトのコマンドは種類を「ターミナル」にしたフレーズで実行しましょう。
- MCP サーバーとスキルは、長い会話の途中ではなく、始める前に設定しておきましょう。
