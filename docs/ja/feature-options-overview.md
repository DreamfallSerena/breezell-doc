---
title: 機能オプションの概要
description: Breezell の機能オプションページにあるすべてのスイッチ（専用モデル、フォローアップ提案、ツール権限、エディターの動作、通知、Plan モード、ウェブ検索、ファイルアクセス）について、既定値と役割を説明します。
---

# 機能オプションの概要

**機能オプション**は、Box の中で、各補助機能をどのモデルで動かすか、そしてエージェントがどこまで自分の判断で操作してよいかを決めるページです。<BzWenben jian="featureOptions.group.models" />、<BzWenben jian="featureOptions.group.execution" />、<BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" />、<BzWenben jian="featureOptions.group.system" /> の 5 つのグループで構成されています。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。すべてのスイッチとメニューは Breezell の既定値で表示されており、クリックすると行の表示がどう変わるかを確認できます。
:::

## 機能オプションを開く

1. Box を開きます（タイトルバーの切り替えで **Box** 側をクリックするか、コマンドパレットから **Breezell: Open Settings** を実行します）。
2. 左側の <BzWenben jian="box.title" /> グループで <BzWenben jian="tab.featureOptions" /> をクリックします。

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

変更は操作した時点で保存され、すべてのワークスペースに適用されます。特定のオプションにすぐ移動したい場合は、Box サイドバー上部の検索ボックスに名前の一部を入力してください。Breezell がその行までスクロールし、ハイライト表示します。

自動補完はこのページにはありません。そのスイッチ、モデル、プロトコルは専用のページにあります：<BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />。

## モデル

<BzWenben jian="featureOptions.dedicatedModels.desc" /> このグループのモデル行は、すべて同じように動作します。

- スイッチが**オフ**（既定）：行に <BzWenben jian="models.analysisModel.followChat" /> と表示され、その機能はチャット入力欄の下で選択されているモデルを使います。
- スイッチが**オン**：行に <BzWenben jian="models.analysisModel.custom" /> と表示され、その下にモデル選択メニューが現れます。チャットでどのモデルを使っていても、その機能は常にここで選んだモデルを使います。

専用モデルがあとで <BzWenben jian="tab.models" /> で削除またはオフにされた場合、その機能は通知なしでチャットのモデルに戻ります。

### 専用モデル

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| 行 | 用途 |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | エージェントがコードの調査や分析のために起動するサブエージェント |
| <BzWenben jian="models.teamDesignModel.title" /> | Teams モードで UI、ビジュアル、ページの仕上げを担当するチームメンバー |
| <BzWenben jian="models.teamBugfixModel.title" /> | Teams モードでバグの特定、再現、修正を担当するチームメンバー |
| <BzWenben jian="models.scmModel.title" /> | ソース管理で生成されるコミットメッセージ |

よくある構成は、チャットには `claude-opus-5` を使い、補助的な作業には小さめのモデルを割り当てるというものです。上の例では、<BzWenben jian="models.scmModel.title" /> が <BzWenben jian="models.scmModel.custom" /> に切り替えられ、`claude-haiku-5-5` で動作しています。これにより、コミットメッセージをより速く、より低コストで作成できます。メッセージのスタイルは、[プロンプトとスキルの設定](/prompt-settings#commit-message) の Commit ページで設定します。

### フォローアップ提案

<BzWenben jian="featureOptions.followUp.desc" /> 既定ではオフです。

| オプション | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | オフ | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 各返信の下に 2、3、または 4 枚の提案カードを表示します。 |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> は提案をすぐに送信し、<BzWenben jian="featureOptions.followUp.clickInsert" /> は送信前に編集できます。<BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | ここでは `claude-haiku-5-5` のような小型で高速なモデルで十分です。 |

### プロンプトを最適化

<BzWenben jian="featureOptions.promptOptimize.desc" /> このカードにあるのは、モデルの行 <BzWenben jian="models.promptOptimizeModel.title" /> だけです。

### 選択アシスタント

チャットの返信でテキストを選択すると、引用とコピーを備えた小さな選択バーが表示されます。選択アシスタントは、このバーに翻訳と検索を追加します。

| オプション | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | オン | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | 選択範囲の <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> または <BzWenben jian="featureOptions.selectionAssist.pillAbove" /> に表示します。<BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | オン | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | オン | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | オン | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | 翻訳に使うモデルです。 |

## 実行

<BzWenben jian="featureOptions.toolPermissions.desc" /> スイッチがオフの場合、エージェントはその種類の操作の前で止まり、チャット上で承認または拒否されるまで待機します。ファイルの読み取り、コードの検索、ウェブ検索など、読み取りだけを行うツールは承認を待ちません。

<BzGongneng zu="execution" />

| スイッチ | 既定値 | 対象 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | オン | ファイルやフォルダーの編集、書き込み、名前変更、削除 |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | オフ | ターミナルコマンドと、エージェントが作成して実行するスクリプト |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | オン | Breezell のデータベースツールによるステートメントの実行、接続やデータベースの作成 |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | オフ | 画像の生成 |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | オン | 追加した MCP サーバーのツール |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | オフ | Teams モードで <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> |

::: warning ターミナルの自動承認
<BzWenben jian="featureOptions.toolPermissions.terminal" /> をオンにすると、エージェントはインストール、ビルド、ファイルの削除など、自分で判断したコマンドを確認なしで実行します。たとえばいつでも戻せるクリーンな Git の状態があるなど、それが安全なプロジェクトでのみオンにしてください。
:::

<BzWenben jian="featureOptions.toolPermissions.edits" /> がオンでも、下の <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> もオンにしない限り、編集はレビューできる変更として表示されます。

## エディター

<BzGongneng zu="editor" />

### コード動作

| スイッチ | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | オン | 編集のたびに、その編集で発生した Lint エラーが結果と一緒に AI へ返されるため、AI は同じターン内でそれを修正します。 |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | オフ | AI の編集はすぐに確定され、エディターでの承認 / 拒否の手順がなくなります。 |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | オフ | AI がファイルを編集するたびに、そのファイルをエディターで開きます。 |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | オン | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | オフ | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | オン | エディターでコードを選択すると、その横に、コードをチャットに追加したり編集したりするための小さなボタンが表示されます。 |

### 通知

| オプション | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | オン | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | オフ | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | オフ | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | オフ | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | オフ | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

音を選ぶと一度だけ再生されます。音のスイッチのいずれかをオンにしたときも同様です。バックグラウンドまたは表示中のスイッチを 1 つ以上オンにするまで、音は鳴りません。

## インテリジェンス

<BzGongneng zu="intelligence" />

### コンテキスト管理

| オプション | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | オフ | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | モデルがプロバイダーの組み込みウェブ検索を使えるようにします。詳しくは下記を参照してください。 |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> は、プロバイダー自身の検索をどのような場合にリクエストへ追加するかを決めます。Breezell は通常、独自のウェブツールで検索しますが、これを使うにはサインインが必要です。

| 選択肢 | 動作 |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Breezell の検索ツールが使われます。それらを実行できない場合（たとえばサインインしていない場合）にのみ、代わりにモデルがプロバイダーの検索を使います。 |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | Breezell のツールに加えて、すべてのリクエストにプロバイダーの検索が追加されます。 |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | プロバイダーの検索は使われません。 |

組み込み検索を備えているのは一部のプロバイダーだけです：Anthropic（Claude）、OpenAI、Gemini（API キー使用時）、xAI、Perplexity、OpenRouter、Qwen、Zhipu。それ以外のモデルでは、このオプションは効果がありません。

### モードとスキル

| スイッチ | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | オン | <BzWenben jian="featureOptions.superpowers.desc" /> これらは [プロンプトとスキルの設定](/prompt-settings#use-skills-in-a-chat) に一覧表示されている組み込みスキルです。 |
| <BzWenben jian="featureOptions.entanglement.enable" /> | オン | <BzWenben jian="featureOptions.entanglement.enableDesc" /> [Entanglement モード](/entanglement-mode-overview) を参照してください。 |

## システム

<BzGongneng zu="system" />

### 外部ファイルアクセス

| スイッチ | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | オン | ツールは、開いているワークスペースの外にあるファイルを読み取れます。たとえば、ライブラリのソースや、ホームフォルダーにある設定ファイルなどです。 |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | オン | ツールは、開いているワークスペースの外にあるファイルを変更できます。エージェントにプロジェクト内だけを操作させたい場合は、これをオフにしてください。 |

### ターミナルのネットワーク速度

| スイッチ | 既定値 | 内容 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | オン | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | オフ | Windows のみ。<BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## まとめ

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />：変更はすぐに保存されます。
- <BzWenben jian="featureOptions.group.models" />：補助機能は、専用モデルを指定するまでチャットのモデルに従います。
- <BzWenben jian="featureOptions.group.execution" />：エージェントが確認なしで実行できる操作です。ターミナルコマンドは既定で確認を求めます。
- <BzWenben jian="featureOptions.group.editor" />、<BzWenben jian="featureOptions.group.intelligence" />、<BzWenben jian="featureOptions.group.system" />：Lint の修正、通知、プランカード、ウェブ検索、Superpowers スキル、ワークスペース外のファイルアクセス。
