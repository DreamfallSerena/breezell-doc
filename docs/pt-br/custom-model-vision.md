---
title: Visão para modelos personalizados
description: Permita que um modelo somente de texto trabalhe com imagens por meio de um proxy de visão, um segundo modelo que lê a imagem por ele.
---

# Visão para modelos personalizados

Alguns modelos só conseguem ler texto. Com um **proxy de visão**, um modelo assim ainda consegue trabalhar com capturas de tela e outras imagens: um segundo modelo, que enxerga, lê a imagem primeiro, e o Breezell entrega a descrição escrita ao modelo somente de texto.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto acompanha o idioma desta página. O menu de modelos da caixa de diálogo do proxy de visão é interativo.
:::

## Quando você precisa dele

O Breezell sabe quais modelos não aceitam imagens. Em Box ▸ <BzWenben jian="tab.models" />, o primeiro ícone de capacidade (<BzWenben jian="box.models.filter.vision" />) desses modelos fica cinza, e só esses modelos ganham a opção <BzWenben jian="models.visionProxy" /> no menu **⋯**.

Por exemplo, no provedor DeepSeek, `deepseek-v4-pro`, `deepseek-chat` e `deepseek-reasoner` são somente texto, enquanto os modelos Flash leem imagens por conta própria. Todos os modelos Claude leem imagens nativamente, e os modelos do Breezell nunca precisam de proxy.

O que acontece quando você anexa uma imagem a um modelo somente de texto sem proxy depende do provedor:

| Provedor | Sem proxy de visão |
| --- | --- |
| Provedores de API oficiais (DeepSeek, OpenAI, …) | A mensagem não é enviada. O aviso <BzWenben jian="chat.visionProxyHint.requiredTitle" /> aparece acima da caixa de entrada. |
| Slots compatíveis com OpenAI | A imagem é enviada ao relay como está, porque muitos relays acoplam o próprio modelo de visão. Defina um proxy só se o seu relay não conseguir lidar com imagens. |

## Como funciona

1. Você envia uma mensagem com uma imagem ao modelo somente de texto.
2. Primeiro, o Breezell envia a imagem ao modelo de reconhecimento de imagem que você escolheu. Ele pede a esse modelo que transcreva com exatidão todo o texto visível e descreva o layout, os controles, os estados, as cores e os erros relevantes para a sua solicitação, sem inventar detalhes que ele não consegue ver.
3. A descrição ocupa o lugar da imagem na solicitação ao seu modelo somente de texto, que então responde normalmente.

Enquanto o Breezell está em execução, cada imagem é descrita uma vez por modelo de reconhecimento e a descrição é reutilizada, então a mesma captura de tela não é analisada duas vezes. A solicitação de reconhecimento é cobrada pelo provedor do modelo de reconhecimento.

## Configurar um proxy de visão

Este exemplo dá um proxy ao `deepseek-v4-pro` (somente texto): o `claude-sonnet-5-5`.

### 1. Abrir o menu do modelo

1. Abra Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />, escolha <BzWenben jian="box.models.group.api" /> e selecione **DeepSeek**.
2. Ative o `deepseek-v4-pro` se ele ainda não estiver habilitado. O ícone <BzWenben jian="box.models.filter.vision" /> dele está cinza.
3. Clique em **⋯** no fim da linha dele e escolha <BzWenben jian="models.visionProxy" />.

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. Escolher o modelo de reconhecimento de imagem

A caixa de diálogo <BzWenben jian="models.visionProxy" /> mostra, abaixo do título, o modelo que você está configurando.

1. Abra <BzWenben jian="models.visionProxyModel" />. A lista se parece com o seletor de modelos do chat, com busca e grupos por provedor, mas só oferece modelos que leem imagens.
2. Escolha um modelo, por exemplo `claude-sonnet-5-5`.
3. Clique em <BzWenben jian="common.save" />.

Experimente o menu aqui:

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

Qualquer modelo que leia imagens funciona. O `claude-sonnet-5-5` dá descrições detalhadas de capturas de tela com muitos elementos; o `claude-haiku-5-5` é mais rápido e mais barato para imagens simples.

### 3. Enviar uma imagem

Selecione `deepseek-v4-pro` abaixo da caixa de entrada do chat, cole ou arraste uma imagem para a caixa de entrada e envie a sua mensagem.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

Agora o modelo somente de texto responde sobre a imagem:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="Por que este erro aparece quando eu inicio o app?" da="A captura de tela mostra: Error: Cannot find module './config.json' (em loadConfig, src/config.ts, linha 4). O app procura o config.json ao lado do arquivo compilado, mas o build não o copia. Adicione o config.json aos arquivos copiados pelo build ou carregue-o com um caminho relativo à raiz do projeto." />

## Quando o Breezell pede um proxy de visão

Se você anexar uma imagem para um modelo somente de texto em um provedor oficial e o modelo ainda não tiver proxy, o Breezell não envia a imagem e mostra este aviso acima da caixa de entrada:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

Clique em <BzWenben jian="chat.visionProxyHint.configureAction" /> para abrir o Box e definir um proxy como descrito acima, depois envie de novo.

Você também pode ver:

| Aviso ou erro | O que significa | O que fazer |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | O modelo escolhido como proxy também não lê imagens. | Abra a caixa de diálogo de novo e escolha um modelo que leia imagens. |
| `The configured vision proxy (…) could not analyze the image.` | A solicitação de reconhecimento falhou, por exemplo porque o provedor do proxy não está configurado ou rejeitou a solicitação. | Verifique o provedor do modelo de proxy ou escolha outro proxy. |

Se você continuar a conversa sem definir um proxy, a imagem anterior fica de fora das mensagens seguintes para que o chat possa continuar.

## Alterar ou remover o proxy

Abra <BzWenben jian="models.visionProxy" /> de novo pelo menu **⋯** do modelo. Escolha outro modelo, ou escolha <BzWenben jian="models.visionProxyNotConfigured" /> no topo da lista para remover o proxy, e clique em <BzWenben jian="common.save" />. Quando há um proxy definido, o botão **⋯** dessa linha mostra um pequeno ponto.

## Resumo

1. Box ▸ <BzWenben jian="tab.models" />: encontre o modelo somente de texto (ícone <BzWenben jian="box.models.filter.vision" /> cinza).
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />.
3. Em <BzWenben jian="models.visionProxyModel" />, escolha um modelo que leia imagens e salve.
4. Envie imagens ao modelo somente de texto normalmente.
