---
title: モードの選択
description: Breezell の各モード（Chat、Plan、Analyze、Entanglement、Agent、Teams、DarkSelene）が読み取り、変更、実行できる範囲、プランカードとモード切り替えの仕組み、そしてどのモードを選ぶべきかを説明します。
---

# モードの選択

モードは、次のメッセージで AI がどのように作業するか、つまり何を読み取り、何を変更し、何を実行してよいかを決めます。入力欄の左下にあるカプセル型のモードボタンで選択します。**Agent** が既定のモードで、ほとんどの作業に適しています。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。メニューのモードにマウスを合わせると、その説明が表示されます。カードのメニューとスイッチはクリックできます。
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

メニューのモード名は、どの言語でも英語で表示されます。選んだモードは次のメッセージから適用されます。別のモードで送信すると、会話の中に <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> という行が表示され、切り替えたことがわかります。メニュー自体については [モードを選ぶ](/dialog-box-overview#mode) を参照してください。

## 各モードでできること {#compare}

| モード | プロジェクトの読み取り | ファイルの変更 | コマンドの実行 | MCP ツール |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | 自身のプランのみ | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓（ステップ 2、レビュー付き） | ✓（ステップ 2） | ステップ 2 |

AI はどのモードでもスキルを使用できます。ファイルの編集とコマンドの実行に承認が必要かどうかは、機能オプションの「ツール権限」で設定します（[機能オプションの概要](/feature-options-overview) を参照）。

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />：<BzWenben jian="chatMode.normalExplain" />。

Chat は、質問、説明、アイデアの比較、文章の下書きに使います。AI は会話の内容と添付したコンテキストをもとに回答し、自分からプロジェクトのファイルを開いたり、何かを実行したりすることはありません。ただし、何かを覚えておくように頼めば、メモリーを保存することはできます。

<BzLiaotian moshi="normal" wen="デバウンスとスロットルの違いは何ですか？" da="どちらも関数が実行される頻度を制限します。デバウンスは呼び出しがしばらく止まるまで待ってから 1 回だけ実行し、スロットルは呼び出しが続いている間、一定の間隔ごとに最大 1 回だけ実行します。入力しながら検索する機能にはデバウンスを、スクロールやリサイズのハンドラーにはスロットルを使います。" />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />。<BzWenben jian="chatMode.planExplain" />。

1. AI は必要なコードを読み取りますが、一切変更しません。
2. AI はプランをチャット内のカードとして作成します。カードにはタイトル、短い概要、To-Do リストが含まれます。プランは `.plan.md` ファイルで、Breezell がプロジェクトの外に保管します。
3. <BzWenben jian="planCard.actions.viewPlan" /> をクリックすると、プランを読んで編集できます。チャットで変更を依頼すると、AI は同じプランを修正します。
4. <BzWenben jian="planCard.actions.execute" />（`Ctrl+Enter`）をクリックすると、プランが実行されます。カードには <BzWenben jian="planCard.actions.executed" /> と表示され、作業が進むにつれて To-Do にチェックが付いていきます。

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="設定ページにダークモードの切り替えスイッチを追加してください。" da="プランを作成しました。現在のテーマのロジックはそのままにして、設定を 1 つ追加します。" jihuabiaoti="設定ページのダークモード切り替えスイッチ" jihuazhaiyao="SettingsPage.vue にダークモードのスイッチを追加して選択内容を保存し、ルート要素のテーマクラスで適用します。ユーザーがモードを選ぶまでは、システムの設定に従います。" />

<BzWenben jian="planCard.actions.skip" /> をクリックすると、プランを見送ります。カードの <BzWenben jian="planCard.actions.auto" /> スイッチは、機能オプションの <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> と同じ設定です。オンにすると、新しいプランはクリックしなくても実行されます。

### Agent が Plan を提案するとき {#plan-switch}

Agent モードでは、タスクにはまずプランが必要だと AI が判断することがあります。その場合、AI は作業を止め、理由を記したカードを表示します。

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="サーバーと同期できるように、ストレージ層を書き直してください。" da="この変更は、ストレージの形式、すべての呼び出し元、オフラインキャッシュに影響します。" qiehuanka="変更が複数のモジュールとデータ形式にまたがります。先にプランを決めておけば、リスクの高い書き直しを避けられます。" />

- <BzWenben jian="planSwitch.switch" />（`Ctrl+Enter`）を押すと、会話が Plan モードに移ります。<BzWenben jian="planSwitch.skip" /> を押すと、AI は Agent モードのまま作業を続けます。
- 左下のメニューで、次回以降の動作を設定します。選択肢は <BzWenben jian="planSwitch.alwaysAsk" />、<BzWenben jian="planSwitch.never" />、<BzWenben jian="planSwitch.alwaysRun" /> です。これは機能オプションの <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> と同じ設定です。
- <BzWenben jian="planSwitch.alwaysAsk" /> の場合、カードの下のバーが 30 秒のカウントダウンを 2 回行います。応答しないと切り替えはスキップされ、AI は作業を続けます。

Plan モードでは、AI が同じ種類のカードで逆方向の切り替え、つまり元のモードに戻ることを提案する場合があります。

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />。<BzWenben jian="chatMode.analyzeExplain" />。

Analyze は、何を変更するか決める前に、バグの原因を突き止めたり、設計をレビューしたり、見慣れないコードを理解したりするときに使います。AI は回答できるようになるまで検索と読み取りを行い、そこで止まります。情報を得るために MCP ツールを使うこともできます。修正が必要な箇所があれば、修正を適用するのではなく、回答の中で修正方法を説明します。

<BzLiaotian moshi="analyze" wen="タスクを削除すると、タスクのカウンターに間違った数が表示されるのはなぜですか？" da="deleteTask() は配列のコピーから項目を削除していますが、renderCounters() は元の tasks 配列を読み取っているため、件数が減りません。修正方法：deleteTask() で共有の tasks 配列を更新し、その後に renderCounters() を呼び出します。" />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />。<BzWenben jian="chatMode.agentExplain" />。

Agent は既定のモードです。必要なコンテキストを集め、ファイルを編集し、コマンドを実行し、結果を確認してから報告します。タスクが大きい場合は [Plan への切り替え](#plan-switch) を提案することがあり、MCP ツール、ブラウザー、スキルも使用できます。

Windows と macOS でデスクトップ操作が有効になっている場合、コンピューター上のアプリを操作できるのは Agent と Entanglement のみです。

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.entanglementDetail" />：<BzWenben jian="chatMode.entanglementExplain" />

Entanglement は Agent のすべての機能を備え、さらに明示的で構造化された因果推論を加えます。AI は自分の仮説を記録し続け、ツールを呼び出すたびに仮説を 1 つ確かめるか除外します。また、先に進む前に作業を止めて、次のステップをあなたに確認することもあります。この状態の推移は、チャットの上にあるパネルに表示されます（機能オプションの <BzWenben jian="featureOptions.entanglement.enable" />）。

難しいバグ、アーキテクチャの判断、リファクタリング、パフォーマンスやセキュリティの作業に使います。Agent よりも多くのトークンを使用します。詳しい仕組みは [Entanglement モード](/entanglement-mode-overview) を参照してください。

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />。<BzWenben jian="chatMode.agentTeamsExplain" />。

- チームを使う価値があるかどうかは、リードが判断します。簡単なリクエストには直接回答します。
- 大きな作業では、リードがタスクを分割し、並列で作業するチームメイトを起動して、その結果を集めて確認します。
- 機能オプションで <BzWenben jian="featureOptions.toolPermissions.teams" /> がオンになっていない限り、チームを開始する前に Breezell が承認を求めます。デザイン担当とバグ修正担当のチームメイトは、それぞれ専用のモデルで実行できます（<BzWenben jian="models.teamDesignModel.title" />、<BzWenben jian="models.teamBugfixModel.title" />）。
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />。また、並列のチームメイトが同じファイルで作業すると互いの妨げになることがあるため、はっきりと分かれた部分を割り当ててください。

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />。<BzWenben jian="chatMode.darkSeleneDetail" />。

DarkSelene は 2 つのステップで作業します。

1. **問いを分解する。** Analyze と同じく読み取り専用です。AI はリクエストとコードを調べ、何をすべきか、どのような結果が見込まれるかをまとめた作業概要を作成します。
2. **レビューを受けながら実行する。** 作業概要は Agent に渡されます。Agent の作業中は、独立したモデル呼び出しが、想定されたファイル以外の読み取りとすべての編集をレビューし、その指摘が証拠として Agent に返されます。リスクの高い編集は、3 つのレビュアーが並列でチェックします。

ステップ 2 の間、AI はモードを切り替えたり、プランカードを作成したり、作業を止めて質問したりすることはありません。<BzWenben jian="chatMode.darkSeleneTokenWarning" />

## ロックされたモード {#locked}

Entanglement と Teams は、5 人の友達に解除を手伝ってもらうか、いずれかのプランを購入すると使えるようになります。それまではメニューに鍵アイコンが表示され、マウスを合わせると <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" /> のように進捗が表示されます。<BzWenben jian="chatMode.entanglementUnlockHint" /> [新規ユーザーを招待する方法](/invite-new-users) を参照してください。

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## モードの選び方 {#choosing}

| やりたいこと | モード |
| --- | --- |
| 質問したい、じっくり考えたい | Chat |
| 何かを変更する前に進め方を決めたい | Plan |
| 変更を加えずに、コードを理解したい、原因を突き止めたい | Analyze |
| タスクを完了させたい（編集、実行、検証） | Agent |
| 難しい問題を、証拠に基づいて一歩ずつ解決したい | Entanglement |
| 大きな作業の独立した複数の部分を同時に進めたい | Teams |
| まずリクエストを分解してもらい、すべての変更をレビューしてほしい | DarkSelene |

迷ったときは Agent のままにしておきましょう。タスクに必要な場合は、Agent が自分で Plan に切り替えます。
