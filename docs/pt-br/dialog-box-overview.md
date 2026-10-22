---
title: Visão geral da caixa de diálogo
description: Um tour completo pelo painel de chat do Breezell — escrever e enviar, modos, modelos, os menus @ e /, os botões da bandeja, uso e compressão do contexto, mensagens na fila e reversão.
---

# Visão geral da caixa de diálogo

O painel de chat no lado **Agent** do Breezell é onde você conversa com a IA: você escreve a solicitação, escolhe como a IA trabalha e qual modelo ela usa, anexa contexto e acompanha o progresso dela. Esta página percorre cada parte dele.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto delas acompanha o idioma desta página. Algumas reagem como o painel real: passe o mouse sobre o menu de modos, a lista Context ou uma mensagem enviada, e clique nos interruptores e nas estrelas.
:::

## As partes do painel de chat

<BzLiaotian biaotilan quanbiao wen="Adicione um interruptor de modo escuro à página de configurações." da="Vou adicionar ao SettingsPage.vue um interruptor que troca a classe de tema da página e lembra a escolha. Primeiro, vou ver como as configurações são armazenadas." />

| | Parte | O que faz |
| --- | --- | --- |
| 1 | Botões do cabeçalho | **New Chat** (+), **Skills & Memory** (caderno) e **Chat History** (relógio). Skills & Memory abre o painel [Rules, Memories & Skills](/prompt-settings). |
| 2 | Caixa de entrada | Onde você escreve. Enquanto está vazia, ela mostra <BzWenben jian="chat.input.placeholder" />. |
| 3 | Modo | Como a IA trabalha nesta mensagem: só conversa, plano, análise somente leitura, edição de arquivos e mais. Veja [Escolher um modo](#mode). |
| 4 | Modelo | O modelo que responde, seguido da janela de contexto e do esforço de raciocínio dele, por exemplo `200K Medium`. Veja [Escolher um modelo](#model). |
| 5 | Anel de contexto | O quanto a janela de contexto está cheia. Clique nele para ver os detalhes e fazer a compressão manual. Veja [Uso do contexto](#context). |
| 6 | **@** | Adiciona arquivos, pastas ou chats anteriores à mensagem. Veja [Adicionar contexto com @](#mention). |
| 7 | Enviar | Envia a mensagem. Enquanto a IA responde, ele vira um botão de parar. |
| 8 | Bandeja | A linha de botões abaixo da caixa de entrada: Breezell Browser, anexar, Frases Rápidas, Otimizar o prompt, MCP e Skills. Veja [A bandeja](#tray). |

## Escrever e enviar uma mensagem {#send}

1. Clique na caixa de entrada e escreva a sua solicitação. Diga o que você quer e onde, por exemplo o arquivo ou a página.
2. Pressione `Enter` para enviar. `Shift+Enter` cria uma nova linha.

Assim que há texto, o botão de enviar passa de cinza para branco:

<BzLiaotian shuru="Adicione um interruptor de modo escuro à página de configurações." />

Para adicionar uma imagem, cole-a na caixa de entrada ou arraste-a para lá. Para adicionar outros arquivos, use o clipe de papel na bandeja. No editor, selecione um trecho de código e pressione `Ctrl+L` (`Cmd+L` no macOS) para adicionar a seleção ao chat.

### Enquanto a IA responde

O botão de enviar vira um botão de parar branco, com um quadrado. Clique nele para interromper a resposta.

Enquanto isso, você pode continuar escrevendo. As mensagens que você envia durante uma resposta não se perdem: elas esperam acima da caixa de entrada, em <BzWenben jian="chat.queue.queued" canshu="2" />, e são enviadas uma após a outra quando a IA fica livre.

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="Atualize também o README|Depois rode os testes" wen="Adicione um interruptor de modo escuro à página de configurações." da="Vou adicionar ao SettingsPage.vue um interruptor que troca a classe de tema da página." />

Cada mensagem na fila tem estes botões: <BzWenben jian="chat.queue.moveUp" /> e <BzWenben jian="chat.queue.moveDown" /> (quando há mais de uma), <BzWenben jian="common.edit" /> (volta para a caixa de entrada), <BzWenben jian="chat.queue.sendNow" /> (interrompe a resposta atual e envia esta) e <BzWenben jian="common.delete" />. Você também pode arrastá-las para mudar a ordem. Se uma mensagem da fila não puder ser enviada, o motivo aparece abaixo dela, por exemplo <BzWenben jian="chat.queue.notSent.turnError" />

## Escolher um modo {#mode}

Clique na cápsula de modo, no canto inferior esquerdo da caixa de entrada. Passe o mouse sobre um modo para ler o que ele faz:

<BzLiaotian tanchu="moshi" moshi="agent" />

| Modo | Em resumo |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent é o modo padrão e serve para a maioria das tarefas. O modo escolhido vale a partir da sua próxima mensagem; quando você envia em outro modo, uma linha <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> marca a mudança na conversa.

Entanglement e Teams ficam bloqueados até que cinco amigos ajudem você a desbloqueá-los, ou até que você compre qualquer plano. Um modo bloqueado mostra um cadeado no menu, e a descrição dele mostra o seu progresso:

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Escolher um modelo {#model}

Clique no nome do modelo, ao lado do modo. O seletor de modelos tem uma caixa de pesquisa, as origens dos modelos e as configurações de cada modelo (janela de contexto, esforço de raciocínio, Fast). Ele é descrito passo a passo em [API personalizada (BYOK)](/custom-api#use-claude-in-chat).

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

O texto depois do nome do modelo resume essas configurações: `200K Medium` significa uma janela de contexto de 200K e esforço de raciocínio médio; `1M High Fast` significa a janela de 1M, esforço alto e Fast. Veja [Context, Reasoning e Fast](/custom-api#context-reasoning-and-fast).

## Adicionar contexto com @ {#mention}

Digite `@` na caixa de entrada ou clique no botão **@**. O menu abre logo acima da caixa de entrada:

<BzLiaotian tanchu="tiji" shuru="@" />

| Item | Adiciona |
| --- | --- |
| files | Um arquivo do espaço de trabalho. |
| folders | Uma pasta inteira. |
| chats | Uma conversa anterior. A IA recebe uma referência para a transcrição dela e a lê quando precisa, então vários chats podem ir junto sem encher o contexto. |

Você não precisa abrir uma categoria antes: digite logo depois do `@` e o Breezell pesquisa arquivos e pastas ao mesmo tempo. Os arquivos abertos aparecem primeiro e são marcados com `Recent`. Use as setas e `Enter`, ou clique.

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

Dentro de files e folders, um chip no cabeçalho do menu alterna entre <BzWenben jian="inputToolbar.filterOn" /> e <BzWenben jian="inputToolbar.filterOff" />: <BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />. Se nada corresponder, o Breezell oferece os arquivos com alterações não commitadas, marcados com `Changed`.

Cada item escolhido vira uma tag na sua mensagem, para que a IA saiba exatamente a qual arquivo, pasta ou chat você se refere.

## Skills e frases rápidas com / {#slash}

Digite `/` no início da caixa de entrada para ver as suas [frases rápidas](#quick-phrases) e skills em uma única lista:

<BzLiaotian tanchu="xiegang" shuru="/" />

- Escolher uma frase rápida faz o que a frase está configurada para fazer: inserir o texto dela, enviá-lo ou executá-lo no terminal.
- Escolher uma skill a adiciona à mensagem, para que a IA use essa skill nesta solicitação.
- As skills desativadas aparecem esmaecidas, com um interruptor na linha; ative uma ali mesmo para usá-la.

## A bandeja abaixo da caixa de entrada {#tray}

A bandeja tracejada abaixo da caixa de entrada tem seis botões. Passe o mouse sobre um botão para ver o nome dele.

| Botão | O que faz |
| --- | --- |
| Breezell Browser (globo) | Abre o painel do navegador integrado do Breezell. |
| <BzWenben jian="inputToolbar.attach" /> (clipe de papel) | Anexa à mensagem arquivos do seu computador. |
| <BzWenben jian="inputToolbar.quickPhrases" /> | As suas frases e comandos salvos. |
| <BzWenben jian="inputToolbar.optimizePrompt" /> (varinha) | Reescreve o que você escreveu como um prompt mais claro. |
| MCP | Ativa ou desativa servidores MCP. |
| <BzWenben jian="inputToolbar.skills" /> (camadas) | Ativa ou desativa skills. |

Um pequeno ponto verde em MCP ou Skills indica que pelo menos um item está ativado. Quando o painel de chat está estreito, o Breezell Browser vai para um menu **⋯** (<BzWenben jian="inputToolbar.more" />). Quando você referencia uma conversa do Chat History, um botão azul <BzWenben jian="inputToolbar.referenced" /> aparece na bandeja; clique nele para remover a referência.

### Breezell Browser {#browser}

O Breezell Browser é o navegador integrado ao Breezell. As páginas abrem em abas do editor, bem ao lado do seu código.

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- Enquanto nenhum navegador está aberto, o painel mostra <BzWenben jian="browserPanel.readyToLaunch" />. Clique em <BzWenben jian="browserPanel.open" /> ou digite um link ou termos de pesquisa no campo (<BzWenben jian="browserPanel.searchPlaceholder" />) e pressione `Enter`.
- Quando há páginas abertas, o painel as lista como abas: clique em uma para ir até ela e use os botões da linha para silenciá-la ou fechá-la. O botão do cabeçalho silencia todas as abas.

As ferramentas de navegador da própria IA rodam fora da tela por padrão. Para vê-las trabalhando, desative <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> em [Opções de Recursos](/feature-options-overview).

### Frases Rápidas {#quick-phrases}

As Frases Rápidas são textos e comandos que você usa com frequência. O botão abre as suas favoritas; clique em uma para usá-la.

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

Clique em <BzWenben jian="quickPhrases.manage" /> para abrir o gerenciador. O lado esquerdo lista todas as frases; o lado direito, as suas favoritas, que são as que o botão mostra.

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- Clique na estrela de uma frase, ou selecione-a e clique na seta do meio, para adicioná-la a <BzWenben jian="quickPhrases.favorites" />. Você também pode arrastá-la para a direita. O **×** em uma favorita a remove apenas das favoritas.
- O lápis em uma favorita a edita; a lixeira à esquerda exclui a frase.
- <BzWenben jian="common.add" />, no topo, abre o editor para uma nova frase:

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

Toda frase tem um nome, um conteúdo e um tipo de ação:

| Tipo | Quando você escolhe a frase |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | O conteúdo vai para a caixa de entrada, então você ainda pode editá-lo antes de enviar. |
| <BzWenben jian="quickPhrases.send" /> | O conteúdo é enviado como mensagem na hora. |
| <BzWenben jian="quickPhrases.terminal" /> | O conteúdo é executado como comando em um terminal. Um <BzWenben jian="quickPhrases.workingDirectory" /> opcional define a pasta em que ele roda. |

As frases rápidas também aparecem no [menu `/`](#slash).

### Otimizar o prompt {#optimize}

Escreva uma solicitação ainda crua e clique na varinha. O Breezell a reescreve como um prompt mais claro e mostra o resultado primeiro; nada é enviado.

<BzLiaotian tanchu="youhua" shuru="colocar modo escuro na página de configurações" youhuawen="Adicione um interruptor de modo escuro à página de configurações. Salve a escolha para que ela se mantenha após recarregar a página, aplique-a trocando uma classe de tema no elemento raiz e siga a preferência do sistema até que o usuário escolha um modo." tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> coloca o novo texto na caixa de entrada. Até você alterar o texto, clicar de novo na varinha é <BzWenben jian="promptOptimize.undo" /> e traz o seu texto original de volta.
- <BzWenben jian="promptOptimize.retrySame" /> escreve outra versão; <BzWenben jian="promptOptimize.dismiss" /> fecha o painel.
- Com a caixa de entrada vazia, a varinha só mostra <BzWenben jian="inputToolbar.optimizePromptEmpty" />.

A reescrita usa o modelo do Chat, a menos que você dê a ela um modelo dedicado em [Opções de Recursos](/feature-options-overview) (<BzWenben jian="models.promptOptimizeModel.title" />).

### MCP {#mcp}

O painel MCP lista os seus servidores MCP com o status de cada um: verde está conectado, vermelho tem um erro, cinza está desativado ou não foi iniciado.

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- O interruptor ativa ou desativa um servidor para a IA. O cabeçalho mostra quantos estão ativados, por exemplo `2/3`.
- A seta (<BzWenben jian="inputToolbar.referenceMcpServer" />) adiciona o servidor à sua mensagem, para que a IA use as ferramentas dele nesta solicitação.
- **+** (<BzWenben jian="mcp.addServer" />) abre o `mcp.json`, onde os servidores são adicionados.

### Skills {#skills}

O botão Skills funciona do mesmo jeito para as skills, com as guias <BzWenben jian="skills.builtinTab" /> e <BzWenben jian="skills.myTab" />. Veja [Usar skills em um chat](/prompt-settings#use-skills-in-a-chat).

::: warning Ative ou desative servidores MCP e skills antes de uma conversa longa
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## Uso do contexto e compressão {#context}

O anel ao lado do **@** vai se enchendo conforme a conversa usa a janela de contexto do modelo. Passe o mouse sobre ele para ver os números, por exemplo `47.0% - 94.2K / 200.0K context used`, e clique nele para abrir o painel **Context**:

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

A barra e a lista dividem os tokens usados por tipo. Passe o mouse sobre uma linha para destacar a parte dela na barra.

| Categoria | O que conta |
| --- | --- |
| System prompt | As instruções do Breezell para o modo atual |
| Tools | As descrições das ferramentas que a IA pode chamar |
| Rules | As suas regras do espaço de trabalho ou globais |
| Memories | As memórias enviadas com a solicitação |
| Skills | A lista de skills ativadas |
| MCP | As ferramentas dos servidores MCP ativados |
| Subagents | O trabalho feito pelos subagentes |
| Conversation | As suas mensagens, as respostas e os resultados das ferramentas |

### Compressão automática e manual

Quando uma conversa chega a cerca de 90% da janela de contexto utilizável, o Breezell a comprime automaticamente: as mensagens mais antigas são substituídas por um resumo, e a conversa continua. Você não precisa fazer nada.

Para liberar espaço antes disso, clique em <BzWenben jian="contextUsage.compress" /> no painel Context (<BzWenben jian="contextUsage.compressTooltip" />). Durante o processo, o botão mostra <BzWenben jian="contextUsage.compressing" /> e uma porcentagem. Depois, o painel mostra uma destas mensagens:

| Mensagem | Significado |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | Concluído. |
| <BzWenben jian="contextUsage.nothingToCompress" /> | A conversa é curta demais para ser comprimida. |
| <BzWenben jian="contextUsage.errorBusy" /> | Interrompa a resposta primeiro e depois comprima. |
| <BzWenben jian="contextUsage.errorNoModel" /> | Escolha primeiro um modelo abaixo da caixa de entrada. |

Depois que você troca para um modelo com uma janela de contexto menor, o anel pode mostrar <BzWenben jian="contextUsage.converting" /> enquanto o Breezell ajusta a conversa à nova janela.

## Editar ou reverter uma mensagem enviada {#edit}

Passe o mouse sobre uma das mensagens que você enviou. Um lápis aparece no canto superior esquerdo dela, e uma seta de retorno, à direita:

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="Adicione um interruptor de modo escuro à página de configurações." da="Pronto. O SettingsPage.vue agora tem um interruptor de modo escuro, a escolha fica salva e a página segue a configuração do sistema até você alterá-la." />

- **Editar**: clique na mensagem ou no lápis, altere o texto e envie de novo.
- **Reverter** (<BzWenben jian="editor.revertToThisPoint" />): clique na seta e confirme. As mensagens posteriores são removidas, e os arquivos que elas alteraram voltam ao estado em que estavam naquela mensagem.

<BzLiaotian huigun wen="Adicione um interruptor de modo escuro à página de configurações." da="Pronto. O SettingsPage.vue agora tem um interruptor de modo escuro, a escolha fica salva e a página segue a configuração do sistema até você alterá-la." />

Uma reversão não pode ser desfeita pelo editor, então confira a caixa de diálogo antes de clicar em <BzWenben jian="editor.revertConfirmDo" />. Enquanto a IA ainda está respondendo nesta conversa, a seta fica esmaecida; interrompa a resposta primeiro.

## Atalhos de teclado {#shortcuts}

| Teclas | Ação |
| --- | --- |
| `Enter` | Enviar a mensagem |
| `Shift+Enter` | Nova linha |
| `@` | Abrir o menu de menções |
| `/` no início | Abrir skills e frases rápidas |
| `↑` `↓` e depois `Enter` | Percorrer um menu aberto e escolher |
| `Esc` | Fechar o painel ou menu aberto |
| `Ctrl+L` / `Cmd+L` | Adicionar a seleção do editor ao chat |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | Iniciar um novo chat |

## Dicas

- Agent é o modo certo para a maior parte do trabalho. Troque apenas quando quiser um fluxo de trabalho específico, como um plano primeiro ou uma análise sem edições.
- Mostre à IA o lugar certo com `@`: um arquivo ou uma pasta é melhor do que uma longa descrição de onde algo está.
- Mantenha as conversas longas saudáveis com o anel de contexto; a compressão é automática, e a compressão manual está lá quando você quiser liberar espaço por conta própria.
- Salve como Frases Rápidas as solicitações que você digita repetidamente, e execute comandos do projeto com o tipo Terminal.
- Configure servidores MCP e skills antes de uma conversa longa, e não no meio dela.
