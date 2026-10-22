---
title: プロンプトとスキルの設定
description: プロジェクトごと、またはすべてのプロジェクト共通で、Breezell に常に適用する指示、メモリー、再利用可能なスキル、コミットメッセージのスタイルを設定します。
---

# プロンプトとスキルの設定

Breezell では、AI に常に与えておく 4 種類の指示を、**Rules, Memories & Skills** という 1 つのパネルで管理します。

| | 内容 | 使われるタイミング |
| --- | --- | --- |
| **Rules** | AI が必ず従う指示。コーディング規約や回答の言語など | すべてのリクエスト |
| **Memories** | 日付付きのメモ。会話をまたいで残しておきたい事実や決定事項 | 背景情報のメモとして使われます。最新のリクエストが優先されます |
| **Skills** | 特定の作業のための手順書。リリースノートの作成など | タスクが一致したときに AI が読み込みます |
| **Commit** | AI が生成する Git コミットメッセージの書き方 | コミットメッセージを生成するとき |

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。パネル内のナビゲーションは実際に操作できます。Rules、Memories、Skills、Commit などのラベルは、Breezell 本体でも英語で表示されます。
:::

## パネルを開く

チャットパネル上部の **New Chat**（+）と **Chat History** の間にある **Skills & Memory** ボタン（ノートのアイコン）をクリックします。

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" /> から開くこともできます。このページの最初のカードが <BzWenben jian="box.mcp.openSkillsMemory" /> です。

## ワークスペースとグローバル

パネルの左側には 2 つのグループがあります。

- <BzWenben jian="common.workspace" />：開いているプロジェクトだけに適用されます。ファイルはプロジェクトの `.breezell` フォルダーに保存されるため、コミットしてチームと共有できます。フォルダーを開いていないときは、このグループはグレー表示になります。
- <BzWenben jian="common.global" />：このコンピューター上のすべてのプロジェクトに適用されます。ファイルはホームフォルダーの `.breezell` に保存されます。

左側で範囲と種類を選びます。ヘッダーには編集中の項目が表示され、下部のパスには保存先のファイルが表示されます。

<BzGuize />

パネルの内容は、ページを切り替えたとき、エディターからフォーカスを外したとき、またはパネルを閉じたときに保存されます。右上の <BzWenben jian="rulesMemories.clear" /> は現在のページを空にします。確定するには 2 回クリックします。

## Rules

ルールはプレーンな Markdown で書きます。互いに矛盾しない、短く具体的な指示にしてください。たとえば次のように書きます。

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| 範囲 | ファイル |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning ワークスペースのルールはグローバルのルールを置き換えます
開いているプロジェクトにワークスペースのルールがある場合、Breezell はそのルールを送信し、グローバルのルールは送信しません。グローバルのルールが使われるのは、ワークスペースのルールがないプロジェクトだけです。グローバルのルールの一部がそのプロジェクトでも必要な場合は、プロジェクトのワークスペースのルールにコピーしてください。
:::

複数のフォルダーを含むワークスペースでは、すべてのフォルダーのルールが使われます。Breezell は保存済みのファイルを読み込むため、保存していない下書きが AI に送られることはありません。

## Memories

メモリーは、決定事項、好み、プロジェクトの構成などを記録する、日付付きの短いメモです。AI 自身も `update_memory` ツールを使って、ここにメモを追加できます。

Breezell はメモリーをルールではなくメモとして扱います。メモリーが最新のリクエストや現在のコードと食い違う場合、AI はリクエストとコードに従い、代わりにメモリーの更新を提案します。常に守らせたいことは Rules に書いてください。

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. <BzWenben jian="common.workspace" /> ▸ Memories（または <BzWenben jian="common.global" /> ▸ Memories）を開きます。
2. <BzWenben jian="rulesMemories.addMemory" /> をクリックします。
3. 1 つのメモリーに 1 つの事実を書き、`Ctrl+Enter` を押します（または Save をクリックします）。

メモリーはそれぞれ日付付きのカードとして表示されます。カードにマウスを合わせると削除できます。左側のリストで Memories の横にある数字は、メモリーの件数です。

| 範囲 | ファイル |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

メモリーを使うには、Super Memory を含むプランが必要です。プランがない場合、ページには <BzWenben jian="superMemory.proRequired" /> と表示されます。AI が自動的に収集するメモリーについては、[Super Memory](/super-memory) を参照してください。

## Skills

スキルは、`SKILL.md` ファイルを含むフォルダーです。Breezell は、オンになっているすべてのスキルの名前と説明を AI に渡します。タスクが説明に一致すると、AI はそのスキルの指示全体を読み込んで従います。そのため、よい説明には、スキルを**いつ**使うかを書きます。

### スキルを作成する

1. <BzWenben jian="common.workspace" /> ▸ Skills（または <BzWenben jian="common.global" /> ▸ Skills）を開き、<BzWenben jian="skills.newSkill" /> をクリックします。
2. 名前を入力します。小文字とハイフンだけを使います（例：`release-notes`）。
3. スキルが何のためのものかを、1 行の説明として入力します。
4. 指示を書きます。手順、ルール、期待する結果を含めます。
5. <BzWenben jian="skills.createSkill" /> をクリックします。

<BzGuize fenye="xinjineng" />

| 範囲 | フォルダー |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

スキルには、`SKILL.md` と同じ場所に追加のファイル（参考資料やスクリプトなど）を含めることができます。スキルの詳細ページにはそれらが一覧表示され、クリックするとファイルが開きます。

### スキルをインポートする

スキルの一覧にファイルをドラッグします：<BzWenben jian="skills.dropZipPrompt" />。`.zip` には複数のスキルフォルダーをまとめて含めることができます。単一の `.md` は、ファイル名を名前とする 1 つのスキルになります。

### チャットでスキルを使う {#use-skills-in-a-chat}

チャット入力欄の下の行にある **Skills** ボタン（レイヤーのアイコン）をクリックします。

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />：Breezell に付属するスキルです（`brainstorming` や `requesting-code-review` など）。これらは <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" /> の **Superpowers Skills** スイッチに従います。組み込みスキルは最初はすべてオフなので、使いたいものをオンにしてください。自分で作成したスキルは最初からオンです。
- <BzWenben jian="skills.myTab" />：ワークスペースとグローバルのスキルです。
- スイッチでスキルのオン / オフを切り替えます。オフのスキルは AI に提示されません。
- 矢印ボタン（<BzWenben jian="inputToolbar.referenceSkill" />）を押すとスキルがメッセージに追加され、AI はこのリクエストでそのスキルを使います。

入力欄に `/` を入力して、スキルメニューを開くこともできます。

スキルや MCP サーバーのオン / オフを切り替えるとプロンプトの先頭が変わるため、プロバイダーのプロンプトキャッシュが効かなくなることがあります。必要なものは、長い会話の途中ではなく、始める前に設定してください。

## コミットメッセージ {#commit-message}

Commit では、Git のコミットメッセージを生成するときに、Breezell がどのように書くかを変更できます。

<BzGuize fenye="commit" />

- ページが空の場合は、Breezell に組み込まれている Conventional Commits プロンプトが使われます。
- ページにテキストを入力すると、組み込みプロンプトが完全に**置き換えられます**。Breezell は引き続き差分、ブランチ、最近のコミットをモデルに渡すので、言語、形式、長さといったスタイルだけを記述してください。
- <BzWenben jian="common.workspace" /> のプロンプトが <BzWenben jian="common.global" /> のプロンプトより優先されます。
- <BzWenben jian="rulesMemories.clear" /> を押すと、組み込みプロンプトに戻ります。

| 範囲 | ファイル |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## まとめ

- Rules：AI が常に守るべきこと。ワークスペースのルールはグローバルのルールを置き換えます。
- Memories：覚えておくべき事実。1 枚のカードに 1 つずつ記録します。
- Skills：説明にタスクが一致したときに AI が読み込む手順書。チャット入力欄の下でオン / オフを切り替えます。
- Commit：組み込みプロンプトに代わる、コミットメッセージのスタイル。
