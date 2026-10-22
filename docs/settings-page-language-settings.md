---
title: Language Settings
description: Change the language of the Breezell interface in Box, and the display language of the editor itself.
---

# Language Settings

Breezell's interface is available in eight languages: <BzWenben jian="general.language.en" />, <BzWenben jian="general.language.ja" />, <BzWenben jian="general.language.ko" />, <BzWenben jian="general.language.es" />, <BzWenben jian="general.language.ptBR" />, <BzWenben jian="general.language.ru" />, <BzWenben jian="general.language.zh" /> and <BzWenben jian="general.language.zhTW" />. You can pick one while installing Breezell and change it at any time afterwards.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page; the language menu on this page is interactive and switches the screen it belongs to, just like in Breezell.
:::

## Two kinds of language

A Breezell window has two layers, and each has its own language setting:

| Layer | What it covers | Where to change it |
| --- | --- | --- |
| **Breezell interface** | Box, the chat, the model and mode pickers, and the other Breezell panels | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **Editor display language** | The parts that come from Code – OSS: the menu bar, the Command Palette, the built-in settings and keyboard shortcut editors | `Configure Display Language` plus a language pack |

Most of what you use every day is the Breezell interface, so the first setting is usually all you need.

## Change the Breezell interface language

### 1. Open Box

Click **Box** in the switch at the left of the title bar. You can also choose <BzWenben jian="box.title" /> from the gear menu at the top right, or run `Breezell: Open Settings` from the Command Palette.

<BzBiaotilan gaoliang="box" />

### 2. Open General & Language

In the Box sidebar, open the <BzWenben jian="box.title" /> group and click <BzWenben jian="tab.general" />.

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. Pick your language

The first card on the page is <BzWenben jian="general.language.title" />. Open the menu on the right of its row and choose a language. Try it here:

<BzChangguiye gaoliang="yuyan" biaoji="3" />

The card's description says what happens next: <BzWenben jian="general.language.desc" />

Each language appears under its own name, so you can always find yours even if the interface is currently in a language you cannot read.

## Change the editor display language

The menu bar, the Command Palette and the other parts that come from Code – OSS follow the editor's display language. To change it:

1. Press `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS) to open the Command Palette.
2. Run `Configure Display Language`.
3. Choose your language. If it is not installed yet, choose to install it; Breezell downloads the language pack from the extension marketplace.
4. Restart Breezell when it asks you to.

The two settings are independent. You can, for example, keep the editor in English and use Breezell in <BzWenben jian="general.language.zhTW" />.

## More on the General & Language page

The same page holds two more cards:

- <BzWenben jian="general.dataManagement.title" />: import, export or reset your Breezell settings (<BzWenben jian="general.tabs.settings" />) and your chat history (<BzWenben jian="general.tabs.chats" />). Settings export as a `.json` file; chats export as a `.zip` that also carries the attachments and checkpoints of each conversation. When you import chats, Breezell asks whether to merge them with your current chats or replace them. Reset asks you to click a second time before it deletes anything.
- <BzWenben jian="general.tabs.ide" />: shortcuts to the editor's own settings, keyboard shortcuts and color theme.

## Summary

1. Click **Box** in the title bar.
2. Open <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />.
3. Choose a language in the <BzWenben jian="general.language.title" /> card. It applies at once.
4. If you also want the menus and the Command Palette in that language, run `Configure Display Language` and restart.
