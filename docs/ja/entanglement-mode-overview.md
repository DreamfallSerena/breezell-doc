---
title: Entanglement モード
description: Breezell の Entanglement モードが仮説と証拠を記録しながら難しい問題を調査する仕組み、因果パネルの読み方、そして厳格検証とヒューマン・イン・ザ・ループのオプションについて説明します。
---

# Entanglement モード

**Entanglement** は <BzWenben jian="chatMode.breezellOriginalMode" /> の 1 つで、<BzWenben jian="chatMode.entanglementDetail" /> を行います。Agent でできること（読み取り、編集、コマンドの実行）をすべて備え、さらに明示的で構造化された因果推論を加えます。AI は仮説を立て、ツールを呼び出すたびに仮説を 1 つ確かめるか除外し、原因が証拠で裏付けられてはじめてコードを変更します。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。因果パネルのラベルは Breezell でも英語で表示されます。パネルに表示されている調査内容は一例です。パネルの矢印をクリックすると、詳細を開いたり閉じたりできます。
:::

## 使用する場面 {#when}

原因がはっきりせず、すぐに答えを出しても推測にしかならない場合は、Entanglement を使います。たとえば次のような場合です。

- 原因がわからないバグやリグレッション
- 複数のファイル、モジュール、システムにまたがる問題
- 考えられる複数の説明や設計の中から 1 つを選ぶ判断
- 結果を検証する必要があるパフォーマンス、セキュリティ、アーキテクチャの作業

明確で範囲の限られた変更には、Agent の方が速く、使用するトークンも少なく済みます。同じリクエストでも、Entanglement は Agent より多くのトークンを使用します。

## 調査を始める {#start}

1. 入力欄の下にあるモードメニューで **Entanglement** を選びます。鍵アイコンが表示されている場合は、[ロックされたモード](/mode-selection#locked) を参照してください。
2. 症状、期待していた結果、制約（変更してはいけないファイル、成功する必要があるテストなど）を書きます。
3. 送信します。会話の上に因果パネルが表示され、調査の進行に合わせて更新されます。

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="カウンター未更新" yinguowen="カウンターは、deleteTask() が変更する配列とは別の配列を読み取っている。|Root cause: deleteTask() は tasks 配列のコピーをフィルターしている|Predict: 修正後は、Active フィルターの件数も 1 つ減る" wen="タスクを削除しても、カウンターに古い数が表示されたままです。原因を調べて修正してください。" da="renderCounters() が読み取る配列と、deleteTask() が変更する配列が同じかどうかを確認しています。" />

回答の中では、調査が更新されるたびに **Tracing Causal Pathways** という行が表示されます。クリックすると、その更新の背景にある推論を読めます。調査が完了すると、この行は **Causal Trace Complete** に変わります。

## 因果パネルの見方 {#panel}

パネルの一番上の行には、調査が現在どこまで進んでいるかが表示されます。

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| 部分 | 意味 |
| --- | --- |
| **Locate → Verify → Fix** | 調査の段階です。原因を見つけ、それを証明してから、コードを変更します。完了した段階にはチェックマークが付き、現在の段階には点滅する点が表示されます。証拠によって現在の説明が成り立たなくなると、最初の段階が琥珀色に変わり、**Relocate** と表示されます。 |
| ステータス | 原因が未確定の間は **Investigating**、まだ確認していない変更を加えた後は **Modified · unverified**、確認が成功した後は **Verified**、作業が終わると **Resolved** と表示されます。 |
| **Confidence** | Low、Medium、High のいずれかで、信号メーターの形で表示されます。これまでに集めた証拠に基づいて決まります。 |

その下の行は、数秒ごとに現在の状態を切り替えて表示します。表示されるのは、現在の評価、検証中の仮説、最新の発見です。マウスを合わせると、切り替えが一時停止します。

### 詳細 {#details}

右側の矢印をクリックすると、詳細が開きます。

<BzJiuchan jieduan="verify" zhankai />

| セクション | 内容 |
| --- | --- |
| Completion contract | タスクの内容（**Target**）と、完了とみなす条件（**Done**）です。 |
| Root cause | 現在の説明です。**Mechanism**（原因がどのように症状につながるか）と **Counterfactual**（その原因がなければどうなるか）が含まれます。 |
| Hypotheses | 各仮説の ID とステータス（testing、confirmed、rejected）です。testing の仮説には **Kill** 条件があります。これは、その仮説を除外することになる観察結果です。rejected の仮説には得られた **Lesson** が残り、**Resolved** の下に表示されます。 |
| Evidence | ターンごと（t2、t3…）の最新の発見と、その重みです。二重の上矢印は直接の観察、上矢印は裏付け、波線は未検証の推論、下矢印は反証を表します。バッジには、その発見をもたらしたツールの名前が表示されます。 |
| Open prediction | 説明が正しければ見えるはずだと AI が予想している結果で、まだ確認を待っている状態です。 |
| Fix | 変更の内容と、その検証方法（**Verify**）です。 |
| Causal graph | 原因から症状までのつながりです。 |

修正が適用されて検証が済むと、パネルにそのことが表示されます。

<BzJiuchan jieduan="resolved" zhankai />

パネルを非表示にするには、<BzWenben jian="featureOptions.entanglement.enable" /> をオフにします（Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />）。調査自体には影響しません。

## 厳格検証（実験的機能） {#strict}

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> には、より厳格なバリエーションである **<BzWenben jian="experimental.entanglementStrict.title" />** があります。

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

オンにすると、パネルに **<BzWenben jian="causalGate.title" />** の行が加わります。<BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" /> の順に進み、バグの再現に使ったコマンドと、確信度の根拠も表示されます。

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

修正前に失敗したのと同じコマンドが修正後に成功すると、この行に <BzWenben jian="causalGate.proven" /> と表示されます。<BzWenben jian="experimental.entanglementStrict.model" /> では、チャットとは別のモデルで厳格モードを実行できます。

### ヒューマン・イン・ザ・ループ {#human-in-the-loop}

厳格検証をオンにすると、さらに **<BzWenben jian="experimental.humanLoop.title" />** もオンにできます。<BzWenben jian="experimental.humanLoop.desc" />

あなたが確認するまで、AI は読み取りしか行いません。次のメッセージが確認済みのタスクの続き（「まだ失敗する」「続けて」など）であれば、改めて確認することなく作業が続きます。新しい依頼の場合は、先にあなたと確認します。

## ヒント {#tips}

- 症状は正確に伝えてください。何をしたのか、何が起きたのか、何を期待していたのかを書きます。問題を再現できるコマンドがあれば、最良の出発点になります。
- 修正を頼む前に、AI に Verify の段階を最後まで終わらせましょう。原因が確定していれば、変更はより小さく、より安全になります。
- 重要な変更を採用する前に、パネルの結論と検証結果を確認してください。パネルはあなたの判断を支えるものであり、あなた自身のレビューに代わるものではありません。
- 関係のない新しい問題に取り組むときは、新しい会話を始めてください。以前の調査が新しい調査と混ざらずに済みます。

Entanglement とほかのモードとの比較については、[モードの選択](/mode-selection#entanglement) を参照してください。
