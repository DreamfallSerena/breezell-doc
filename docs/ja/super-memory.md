---
title: スーパーメモリー
description: Breezell のスーパーメモリーが会話を記憶、スキル、経験、軌跡、リソースに蒸留して後のリクエストに呼び出す仕組みと、Box でそれらを整理する方法を説明します。
---

# スーパーメモリー

**スーパーメモリー**は、Breezell 独自の長期記憶です。作業中の会話から、残す価値のあるもの（決定事項、好み、作業の進め方、問題を直したときの教訓、変更したファイルなど）を蒸留し、関連する部分を後のリクエストに呼び出します。新しい会話でも呼び出されます。

- 抽出には、Breezell に組み込まれた 2 つのモデルが使われます。設定したモデルは使わず、そのトークンも消費しません。ただし、リクエストに呼び出された記憶は、そのリクエストのコンテキストの一部になります。
- スーパーメモリーを使うには、スーパーメモリーを含むプランの Breezell アカウントが必要です。
- 保存された内容はすべて、Box ▸ <BzWenben jian="box.memory.group" /> で閲覧、修正、削除できます。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。画面内の記憶は例です。メモリーライブラリでは、行を開いたり、優先度を変更したり、常駐に設定したりできます。
:::

## 仕組み {#how-it-works}

Box を開き、左側の Console グループにある <BzWenben jian="box.memory.group" /> を展開します。<BzWenben jian="box.memory.overview" />、<BzWenben jian="box.memory.library" />、<BzWenben jian="box.memory.context" />、<BzWenben jian="box.memory.maintenance" /> の 4 つのページがあります。

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" /> の最初には、このサイクルを表す図があり、実際の数値が表示されます。

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**：ユーザーとモデルの間でやり取りされるすべてのターンです。
2. **<BzWenben jian="box.memory.flow.extract" />**：<BzWenben jian="box.memory.flow.extractSub1" />。<BzWenben jian="box.memory.flow.extractSub2" />。
3. **<BzWenben jian="box.memory.flow.store" />**：エントリが保存される場所です。アクティブなエントリも休止中のエントリもここにあります。
4. **<BzWenben jian="box.memory.flow.project" />**：コードベースからコンパイルされた知識です。エントリポイント、コマンド、依存関係などが含まれます。
5. 会話に戻る：常駐エントリはすべてのリクエストに注入され、関連するエントリはリクエストが必要とするときに呼び出されます。

図の下のカードには、エントリの件数、常駐エントリの件数、すべてのエントリを全文で読み込む場合と比べてコンパクトなインデックスでどれだけ節約できているか、直近に注入された内容が表示されます。さらに下には、種類の内訳、優先度、エントリの鮮度、コンパイル済みのプロジェクト知識の状態、よく使われるエントリ、まもなく期限切れになるエントリが表示されます。

## 5 種類の記憶 {#kinds}

スーパーメモリーは、後でどのように使われるかに応じて、各エントリを適切な種類に分類します。

| 種類 | 内容 | 例 |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | 永続的な事実、好み、継続的な指示、決定事項 | 「繁体字中国語で回答し、コードは英語のままにする」 |
| <BzWenben jian="superMemory.catSkill" /> | 同じ種類の問題をもう一度解決するための、再利用できる方法 | 破損した localStorage データを安全に復元する方法 |
| <BzWenben jian="superMemory.catExperience" /> | 教訓：根本原因の考え方と、その確認方法 | 「複数の機能が同時に壊れたら、まず共有状態を直す」 |
| <BzWenben jian="superMemory.catTrajectory" /> | タスクが実際にどう進んだか：目標、ツール呼び出し、エラー、回復 | 修復の 14 ステップ |
| <BzWenben jian="superMemory.catResource" /> | 変更された具体的なファイルと箇所 | <BzWenben jian="superMemory.editAction.edit" /> test.html |

すべての会話から、すべての種類が作られるわけではありません。バグ修正からは通常、スキル、経験、軌跡、リソースが作られますが、一般的な記憶は作られません。永続的な個人の好みにあたる内容が含まれていないためです。これにより、呼び出しが的確になります。後のタスクでは、方法、教訓、経緯、ファイルの記録を、それぞれ単独で取り込めます。

## 優先度とライフサイクル {#priorities}

| 優先度 | 保持期間 |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | 期限切れになりません。常駐エントリは常に P0 です。 |
| <BzWenben jian="superMemory.p190Days" /> | 再確認されない限り、30 日後に期限切れになります。 |
| <BzWenben jian="superMemory.p230Days" /> | 再確認されない限り、7 日後に期限切れになります。ファイルの編集のような短期的な詳細は、ここから始まります。 |

期限切れになったエントリは削除されず、**<BzWenben jian="superMemory.dormant" />** になります。休止中のエントリは引き続き検索でき、復元もできます。P1 のエントリが役立つことが確かめられると、Breezell はその行に **↑P0** ボタンを表示し、永続にするよう提案します。

## メモリーライブラリ {#library}

<BzWenben jian="box.memory.library" />：<BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **フィルター**：検索してから、優先度（P0 / P1 / P2）、種類、<BzWenben jian="superMemory.active" /> または <BzWenben jian="superMemory.dormant" /> で絞り込みます。
- **件数バー**：読み込まれたエントリの件数、常駐枠、種類ごとのアクティブ予算が表示されます。<BzWenben jian="superMemory.batchSelect" /> を使うと、複数のエントリにチェックを付けてまとめて削除できます。
- **行**：色付きの点は種類を表します。タイトルの後ろには優先度チップが続き、常駐エントリには **<BzWenben jian="superMemory.residentBadge" />**、過去 24 時間以内のエントリには **NEW** が付きます。2 行目には、最終更新日時、種類、タグの数、出どころが表示されます。
- **行を開く**と、タグ、<BzWenben jian="superMemory.l1Overview" />、<BzWenben jian="superMemory.whyRemembered" />、確認された回数と使われた回数、期限が表示されます。<BzWenben jian="box.memory.showFull" /> を押すと、<BzWenben jian="superMemory.l2Full" /> も表示されます。
- **優先度チップ**（1）：クリックすると、<BzWenben jian="superMemory.p0Permanent" />、<BzWenben jian="superMemory.p190Days" />、<BzWenben jian="superMemory.p230Days" /> から選べます。
- ピンでエントリを常駐に設定し、ゴミ箱で削除します。

Breezell は AI に各エントリの短い 1 行（L0）を送り、概要や全文は必要なときだけ読み込みます。概要ページの <BzWenben jian="superMemory.tokenSavings" /> は、この仕組みによるものです。

## 常駐記憶 {#resident}

常駐エントリは、リクエストの内容に関係なく、**すべての**リクエストに注入されます。アーキテクチャのルール、必須のワークフロー、譲れない好みなど、AI が常に念頭に置いておくべき内容に使います。

1. <BzWenben jian="box.memory.library" /> を開き、エントリを探します。
2. その行のピンをクリックします（<BzWenben jian="superMemory.residentOn" />）。

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- エントリは P0 になり、<BzWenben jian="superMemory.residentBadge" /> バッジが付きます。件数バーには新しい合計が表示されます（例：<BzWenben jian="superMemory.residentCapacity" canshu="1|12" />）。
- 常駐にできるエントリは最大 12 件です。上限に達すると、Breezell に次のメッセージが表示されます：<BzWenben jian="superMemory.residentLimitReached" />
- 常駐エントリの優先度を下げるには、先にもう一度ピンをクリックします（<BzWenben jian="superMemory.residentOff" />）。エントリは以前の優先度に戻ります。

常駐エントリは短く、本当にどの場面にも当てはまる内容にしてください。一時的なファイルの場所や、一度きりのタスクの詳細は、ここに置くべきではありません。すべてのリクエストに追加されてしまいます。

## チャット内の記憶 {#in-chat}

スーパーメモリーがリクエストにエントリを注入すると、メッセージの下に 1 行が表示されます。クリックすると、どのエントリが使われたかを確認できます。

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="繁体字中国語で回答し、コードと識別子は英語のままにする" gaoliang="zhuru" biaoji="1" wen="こんにちは" da="こんにちは！今日はどのような作業をしましょうか？" />

この例では、新しい会話には「こんにちは」しかありませんが、1 件のエントリが注入されています。常駐記憶です。関連するエントリは、リクエストが必要とするときに追加されます。

<BzLiaotian zhuru="3|1|2" zhuruwen="繁体字中国語で回答し、コードと識別子は英語のままにする|破損した localStorage の状態をガード付きの JSON 解析で復元する|タスク、フィルター、カウンターが同時に壊れたら、まず共有状態を直す" zhurukai wen="test2.html の読書リストで、再読み込みすると本が消えてしまいます。修正してください。" da="タスクマネージャーと同じ不具合です。リストが JSON.stringify ではなく String() で保存されています。解析にガードを入れ、破損した値を破棄し、すべての本に安定した ID を付けます。" />

この行は、何かが注入されたときだけ表示されます。検索を完了できなかった場合は、利用できる内容でターンが続行され、この行にその旨が表示されます。

## コンテキスト注入 {#context}

<BzWenben jian="box.memory.context" />：<BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| カード | 表示内容 |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | 選択したターンについて、状態、注入された常駐エントリと関連エントリの件数、その種類と範囲、各エントリの詳細レベル（L0 / L1 / L2）とスコアが表示されます。 |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | 次のリクエストが受け取るコンパクトなインデックスです。種類ごとにまとめられ、推定トークン数も表示されます。 |
| <BzWenben jian="superMemory.convTurns" /> | 現在の会話のターンです。ターンをクリックすると、その注入内容を確認し、チャット内のそのターンに移動できます。 |

## 予算とメンテナンス {#maintenance}

<BzWenben jian="box.memory.maintenance" />：<BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />：<BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />：<BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />：<BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />：メモリーバンク全体を `.zip` にして、別のコンピューターに移せます。<BzWenben jian="box.memory.archiveImportDesc" />

## 例：1 つの修復を別のアプリで再利用する {#example}

上の画面のエントリは、次のようにして作られました。

1. **修復。** `test.html` の小さなタスクマネージャーでは、タスクの追加、削除、完了、絞り込み、保存が正しく動作しませんでした。Breezell はこれらの不具合の原因が 1 つの共有状態モデルにあることを突き止めて修正し、ブラウザーでワークフロー全体を確認しました。スーパーメモリーはまず、`test.html` の編集箇所を **P2 のリソース**として、修復の経過を **P2 の軌跡**として記録しました。
2. **教訓。** 「ここから何を学びましたか？」と尋ねると、AI は再利用できる教訓を挙げました。症状を一つずつ直すのではなく共有状態の持ち主を直すこと、項目を安定した ID で指定すること、保存データを検証が必要な境界として扱うことです。スーパーメモリーは **P1 のスキル**（localStorage データのガード付きの保存と読み込み）と **P1 の経験**（まず共有状態を診断し、次にエンドツーエンドで検証する）を保存しました。より長い修正や価値の高い修正では、尋ねなくてもこうした教訓が記録されます。
3. **再利用。** 最初の会話は削除されました。新しい会話で、別のアプリ（`test2.html` の読書リスト）に同じ系統の不具合がありました。Breezell はスキルとリソースの記録を呼び出し、古いパッチをコピーするのではなく、その方法を新しい `books` データに適用して、結果を検証しました。

会話を削除しても、スーパーメモリーがそこから抽出した内容は削除されません。また、あるアプリで学んだ方法が、別のアプリにも引き継がれました。

## 1 日の利用枠を使い切ったとき {#quota}

スーパーメモリーには 1 日あたりの利用枠があります。使い切ると、スーパーメモリーのすべてのページに <BzWenben jian="box.memory.quotaPausedTitle" /> と表示されます。枠が更新されるまで、チャットから新しいエントリが自動的に作られることはありません。既存のエントリは引き続き閲覧・削除でき、[Rules, Memories & Skills](/prompt-settings) で自分で書いたルールやメモリーにも影響はありません。

スーパーメモリーを含むプランがない場合、ページには次のように表示されます。

<BzJiyi ye="suoding" />

## まとめ

- スーパーメモリーは、モデルのトークンを使わずに、会話を記憶、スキル、経験、軌跡、リソースに蒸留します。
- 関連するエントリは後のリクエストに呼び出されます。常駐エントリ（最大 12 件、常に P0）はすべてのリクエストに含まれます。
- P1 は 30 日、P2 は 7 日で、再確認されなければ期限切れになります。期限切れのエントリは休止中になり、復元できます。
- Box ▸ <BzWenben jian="box.memory.group" /> には、概要、ライブラリ、コンテキスト注入の表示、メンテナンスのページがあります。
