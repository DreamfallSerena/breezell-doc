---
title: トラブルシューティング
description: macOS の「アプリが破損しています」警告を含む、Breezell の一般的なインストールと起動問題の解決方法です。
---

# トラブルシューティング

Breezell のインストールや起動時に発生する一般的な問題の解決方法を案内します。確認された事例は順次追加します。

## macOS に Breezell をインストールする

1. Breezell のダウンロードページで **macOS** を選びます。
2. M1、M2、M3 またはそれ以降の Apple チップを搭載した Mac では **Apple Silicon** をダウンロードします。
3. ダウンロードしたイメージを開き、**Breezell.app** を **アプリケーション** にドラッグします。コピー完了後、**Finder → アプリケーション** から起動します。

## 「Breezell.app は破損しています」または「開発元を確認できません」

macOS は App Store 以外からダウンロードしたアプリに隔離属性を付けることがあります。この警告は、必ずしもアプリのファイルが破損していることを意味しません。

![macOS での Breezell インストールと破損警告の解決方法](/troubleshooting/macos-installation-guide.png)

### 1. ターミナルを開く

**Command（⌘）+ Space** を押し、**ターミナル**を検索して起動します。**アプリケーション → ユーティリティ → ターミナル** からも開けます。

### 2. Breezell の隔離属性を削除する

次のコマンドを貼り付け、**Return** を押します。

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Mac の管理者パスワードを入力し、もう一度 **Return** を押します。入力中のパスワードは表示されません。出力なしで終了した場合は、通常は成功しています。

このコマンドは **Breezell.app** の隔離属性だけを削除します。Gatekeeper やほかのアプリのセキュリティ確認は変更しません。

### 3. Breezell をもう一度開く

**アプリケーション** に戻り、Breezell を再度起動します。

::: warning セキュリティ
Breezell 公式サイトからダウンロードしたものにだけ使用してください。入手元を信頼できないアプリには使用しないでください。
:::

## 「No such file or directory」と表示される場合

Breezell を **アプリケーション** に移動し、名前が正確に **Breezell.app** であることを確認します。別の場所にある場合は `/Applications/Breezell.app` を実際のパスに置き換えてください。
