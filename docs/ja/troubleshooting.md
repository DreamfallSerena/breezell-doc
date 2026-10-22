---
title: トラブルシューティング
description: macOS・Windows・Linux 向けに正しい Breezell のダウンロードを選ぶ方法と、macOS で表示される「Breezell.app は壊れています」「開発元を確認できません」という警告の解決方法を説明します。
---

# トラブルシューティング

このページでは、インストールや起動時によくある問題の解決方法をまとめています。確認された事例は順次追加します。

::: tip このページの画面について
以下のダウンロードページは、英語で提供されている breezell.com のソースコードをもとに HTML で再現したものです。macOS のダイアログとターミナル（Terminal）のウィンドウは、Mac で表示される画面がわかるように描いたものです。
:::

## 正しいダウンロードを選ぶ {#download}

[breezell.com/download](https://breezell.com/download) でダウンロードページを開きます。ページ上部にはお使いのコンピューターに合ったビルドが推奨され、その下でプラットフォームを選ぶとすべてのビルドが表示されます。ここでタブをクリックすると、各ビルドを比較できます。

<BzXiazai gaoliang="fenye" biaoji="1" />

| プラットフォーム | ビルド | 対象 |
| --- | --- | --- |
| macOS | Apple Silicon | M1、M2、M3、M4 以降のチップを搭載した Mac |
| macOS | Intel | Intel プロセッサを搭載した以前の Mac |
| macOS | Universal | 両方に対応する従来型のビルド |
| Windows | x64 · System / ARM64 · System | コンピューターのすべてのユーザー向けにインストールします。管理者権限が必要です |
| Windows | x64 · User / ARM64 · User | 自分のユーザーだけにインストールします。管理者権限は不要です |
| Linux | .deb | Ubuntu、Debian とその派生ディストリビューション（x64、ARM64、ARM32） |
| Linux | .rpm | Fedora、RHEL、CentOS とその派生ディストリビューション（x64、ARM64、ARM32） |

Mac のチップを確認するには、Apple メニュー ▸ **このMacについて**（About This Mac）を開きます。以前のリリースは、ダウンロードページ下部の **View past versions** に一覧表示されます。

## macOS に Breezell をインストールする {#install-macos}

1. ダウンロードページから、お使いの Mac に合ったビルドをダウンロードします。
2. ダウンロードしたディスクイメージを開き、**Breezell.app** を **アプリケーション**（Applications）にドラッグします。コピーが完了するまで待ちます。
3. **Finder ▸ アプリケーション** から Breezell を起動します。

## 「Breezell.app は壊れています」または「開発元を確認できません」 {#damaged}

macOS は、App Store 以外からダウンロードしたアプリに隔離属性を付けます。そのため一部の Mac では、アプリが破損していないにもかかわらず、macOS が次のような警告を表示して Breezell を開かないことがあります。

<BzXiazai ye="jinggao" />

**ゴミ箱に入れる**（Move to Trash）ではなく **キャンセル**（Cancel）をクリックし、以下の手順を一度だけ実行してください。ダウンロードページで macOS を選んだときにも、同じ手順が表示されます。

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. ターミナルを開く {#open-terminal}

**Command（⌘）+ Space** を押して Spotlight を開き、**ターミナル**と入力して **Return** キーを押します。**アプリケーション ▸ ユーティリティ ▸ ターミナル**（Applications ▸ Utilities ▸ Terminal）からも開けます。

### 2. Breezell の隔離属性を削除する {#remove-quarantine}

次のコマンドを貼り付けて **Return** キーを押します。

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

ターミナルに Mac の管理者パスワードを求められます。パスワードを入力して **Return** キーを押します。入力中の文字は表示されません。

<BzXiazai ye="zhongduan" />

何も出力されなければ、通常はコマンドが成功しています。このコマンドは **Breezell.app** の隔離属性だけを削除します。Gatekeeper と、ほかのアプリに対するセキュリティチェックはそのまま変わりません。

### 3. Breezell をもう一度開く {#reopen}

**アプリケーション**に戻り、Breezell を起動します。

::: warning セキュリティ
この手順は、公式サイトからダウンロードした Breezell に対してのみ実行してください。入手元を信頼できないアプリから隔離属性を削除しないでください。
:::

## 「No such file or directory」と表示される場合 {#no-such-file}

コマンドが `/Applications/Breezell.app` にアプリを見つけられませんでした。Breezell を **アプリケーション**に移動し、名前が正確に **Breezell.app** になっていることを確認してください。別の場所に置いている場合は、コマンド内の `/Applications/Breezell.app` を実際のパスに置き換えてください。

## それでも解決しない場合 {#contact}

[既知の問題](/known-issues) を確認するか、[お問い合わせページ](https://breezell.com/contact) からご連絡ください。その際は、お使いのオペレーティングシステム、Breezell のバージョン、表示されたメッセージをそのままお知らせください。
