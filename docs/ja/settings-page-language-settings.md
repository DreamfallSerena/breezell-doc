---
title: 言語設定
description: Box で Breezell のインターフェース言語を変更する方法と、エディター自体の表示言語を変更する方法を説明します。
---

# 言語設定

Breezell のインターフェースは、<BzWenben jian="general.language.en" />、<BzWenben jian="general.language.ja" />、<BzWenben jian="general.language.ko" />、<BzWenben jian="general.language.es" />、<BzWenben jian="general.language.ptBR" />、<BzWenben jian="general.language.ru" />、<BzWenben jian="general.language.zh" />、<BzWenben jian="general.language.zhTW" /> の 8 つの言語で利用できます。言語は Breezell のインストール時に選択でき、その後もいつでも変更できます。

::: tip このページの画面について
以下の Breezell の画面は、Breezell のソースコードをもとに HTML で再現したものです。表示テキストはこのページの言語に従います。このページの言語メニューは実際に操作でき、Breezell と同じように、そのメニューが属する画面の表示を切り替えます。
:::

## 2 種類の言語

Breezell のウィンドウは 2 つの層でできており、それぞれに独自の言語設定があります。

| 層 | 対象 | 変更する場所 |
| --- | --- | --- |
| **Breezell のインターフェース** | Box、チャット、モデルとモードの選択メニュー、その他の Breezell パネル | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **エディターの表示言語** | Code – OSS に由来する部分（メニューバー、コマンドパレット、組み込みの設定エディターとキーボードショートカットエディター） | `Configure Display Language` と言語パック |

普段使う機能のほとんどは Breezell のインターフェースに含まれるため、通常は 1 つ目の設定だけで十分です。

## Breezell のインターフェース言語を変更する

### 1. Box を開く

タイトルバー左側の切り替えで **Box** をクリックします。右上の歯車メニューから <BzWenben jian="box.title" /> を選ぶか、コマンドパレットで `Breezell: Open Settings` を実行して開くこともできます。

<BzBiaotilan gaoliang="box" />

### 2.「一般 & 言語」を開く

Box のサイドバーで <BzWenben jian="box.title" /> グループを開き、<BzWenben jian="tab.general" /> をクリックします。

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. 言語を選ぶ

ページの最初のカードは <BzWenben jian="general.language.title" /> です。その行の右側にあるメニューを開き、言語を選びます。ここで試してみてください。

<BzChangguiye gaoliang="yuyan" biaoji="3" />

カードの説明には、選んだ後にどうなるかが書かれています：<BzWenben jian="general.language.desc" />

各言語はその言語自身の名前で表示されます。そのため、現在のインターフェースが読めない言語になっていても、自分の言語を必ず見つけられます。

## エディターの表示言語を変更する

メニューバー、コマンドパレットなど、Code – OSS に由来する部分は、エディターの表示言語に従います。変更するには次の手順を行います。

1. `Ctrl+Shift+P`（macOS では `Cmd+Shift+P`）を押して、コマンドパレットを開きます。
2. `Configure Display Language` を実行します。
3. 言語を選びます。まだインストールされていない場合は、インストールを選択します。Breezell が拡張機能マーケットプレイスから言語パックをダウンロードします。
4. 再起動を求められたら、Breezell を再起動します。

2 つの設定は互いに独立しています。たとえば、エディターは英語のままにして、Breezell は <BzWenben jian="general.language.zhTW" /> で使うこともできます。

## 一般 & 言語ページのその他の項目

同じページには、さらに 2 つのカードがあります。

- <BzWenben jian="general.dataManagement.title" />：Breezell の設定（<BzWenben jian="general.tabs.settings" />）とチャット履歴（<BzWenben jian="general.tabs.chats" />）をインポート、エクスポート、リセットできます。設定は `.json` ファイルとして、チャットは各会話の添付ファイルとチェックポイントも含む `.zip` としてエクスポートされます。チャットをインポートするときは、現在のチャットとマージするか、置き換えるかを Breezell が確認します。リセットでは、何かを削除する前にもう一度クリックするよう求められます。
- <BzWenben jian="general.tabs.ide" />：エディター自体の設定、キーボードショートカット、カラーテーマへのショートカットです。

## まとめ

1. タイトルバーの **Box** をクリックします。
2. <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> を開きます。
3. <BzWenben jian="general.language.title" /> カードで言語を選びます。変更はすぐに反映されます。
4. メニューやコマンドパレットもその言語で表示したい場合は、`Configure Display Language` を実行して再起動します。
