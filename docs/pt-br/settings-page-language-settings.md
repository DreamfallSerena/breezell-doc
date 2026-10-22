---
title: Configurações de idioma
description: Altere o idioma da interface do Breezell no Box e o idioma de exibição do próprio editor.
---

# Configurações de idioma

A interface do Breezell está disponível em oito idiomas: <BzWenben jian="general.language.en" />, <BzWenben jian="general.language.ja" />, <BzWenben jian="general.language.ko" />, <BzWenben jian="general.language.es" />, <BzWenben jian="general.language.ptBR" />, <BzWenben jian="general.language.ru" />, <BzWenben jian="general.language.zh" /> e <BzWenben jian="general.language.zhTW" />. Você pode escolher um deles durante a instalação do Breezell e alterá-lo a qualquer momento depois.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto acompanha o idioma desta página; o menu de idiomas desta página é interativo e muda o idioma da tela em que está, assim como no Breezell.
:::

## Dois tipos de idioma

Uma janela do Breezell tem duas camadas, e cada uma tem a sua própria configuração de idioma:

| Camada | O que abrange | Onde alterar |
| --- | --- | --- |
| **Interface do Breezell** | O Box, o chat, os seletores de modelo e de modo e os outros painéis do Breezell | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **Idioma de exibição do editor** | As partes que vêm do Code – OSS: a barra de menus, a Paleta de Comandos e os editores integrados de configurações e de atalhos de teclado | `Configure Display Language` mais um pacote de idioma |

A maior parte do que você usa no dia a dia é a interface do Breezell, então a primeira configuração costuma ser tudo de que você precisa.

## Alterar o idioma da interface do Breezell

### 1. Abrir o Box

Clique em **Box** no alternador à esquerda da barra de título. Você também pode escolher <BzWenben jian="box.title" /> no menu de engrenagem do canto superior direito ou executar `Breezell: Open Settings` na Paleta de Comandos.

<BzBiaotilan gaoliang="box" />

### 2. Abrir Geral e idioma

Na barra lateral do Box, abra o grupo <BzWenben jian="box.title" /> e clique em <BzWenben jian="tab.general" />.

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. Escolher o idioma

O primeiro card da página é <BzWenben jian="general.language.title" />. Abra o menu à direita da linha dele e escolha um idioma. Experimente aqui:

<BzChangguiye gaoliang="yuyan" biaoji="3" />

A descrição do card diz o que acontece em seguida: <BzWenben jian="general.language.desc" />

Cada idioma aparece com o próprio nome, então você sempre encontra o seu, mesmo que a interface esteja no momento em um idioma que você não consegue ler.

## Alterar o idioma de exibição do editor

A barra de menus, a Paleta de Comandos e as outras partes que vêm do Code – OSS seguem o idioma de exibição do editor. Para alterá-lo:

1. Pressione `Ctrl+Shift+P` (`Cmd+Shift+P` no macOS) para abrir a Paleta de Comandos.
2. Execute `Configure Display Language`.
3. Escolha o seu idioma. Se ele ainda não estiver instalado, escolha instalá-lo; o Breezell baixa o pacote de idioma do marketplace de extensões.
4. Reinicie o Breezell quando ele pedir.

As duas configurações são independentes. Você pode, por exemplo, manter o editor em inglês e usar o Breezell em <BzWenben jian="general.language.zhTW" />.

## Mais na página Geral e idioma

A mesma página tem mais dois cards:

- <BzWenben jian="general.dataManagement.title" />: importe, exporte ou redefina as suas configurações do Breezell (<BzWenben jian="general.tabs.settings" />) e o seu histórico de chats (<BzWenben jian="general.tabs.chats" />). As configurações são exportadas como um arquivo `.json`; os chats, como um `.zip` que também inclui os anexos e os checkpoints de cada conversa. Ao importar chats, o Breezell pergunta se você quer mesclá-los com os chats atuais ou substituí-los. A redefinição pede um segundo clique antes de apagar qualquer coisa.
- <BzWenben jian="general.tabs.ide" />: atalhos para as configurações, os atalhos de teclado e o tema de cores do próprio editor.

## Resumo

1. Clique em **Box** na barra de título.
2. Abra <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />.
3. Escolha um idioma no card <BzWenben jian="general.language.title" />. A mudança vale na hora.
4. Se você também quiser os menus e a Paleta de Comandos nesse idioma, execute `Configure Display Language` e reinicie.
