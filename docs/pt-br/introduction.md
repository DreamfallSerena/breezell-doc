---
title: Introdução
description: Conheça o Breezell, um editor de código com IA baseado no Code – OSS, e vá da instalação até a sua primeira alteração feita com a ajuda da IA.
---

# Introdução

O Breezell é um editor de código com IA baseado no VS Code (Code – OSS). O editor, as suas extensões e os seus atalhos de teclado funcionam do jeito que você já conhece e, ao lado deles, fica uma IA capaz de ler o seu projeto, editar arquivos, executar comandos e usar ferramentas por conta própria.

::: tip Sobre as telas desta página
As telas do Breezell neste guia foram recriadas em HTML a partir do código-fonte do Breezell, em vez de capturas de tela. O texto delas acompanha o idioma desta página, e as cores seguem a alternância entre tema claro e escuro deste site. Os selos laranja numerados são apenas marcações deste guia.
:::

## A janela do Breezell

<BzChuangti wen="Carregue o arquivo de configuração uma vez na inicialização e guarde-o em cache." da="Pronto. Agora o config.ts lê o arquivo uma vez e guarda o resultado já processado, e o index.ts chama loadConfig() antes de o servidor iniciar." />

| | Parte | O que é |
| --- | --- | --- |
| 1 | **Box \| Agent** | Alterna a janela inteira entre a página **Agent** (o seu código e a IA) e a página **Box** (configurações e dados). |
| 2 | Editor | O editor do Code – OSS, com as suas abas, o explorador de arquivos, a pesquisa, o Git e as extensões. |
| 3 | Chat | Onde você conversa com a IA. Um chat também pode abrir como uma aba do editor, ao lado do seu código. |
| 4 | Modo | Quanto a IA pode fazer nesta conversa, do chat simples até agentes autônomos. Veja [Modos](#modes). |
| 5 | Modelo | Qual modelo responde, com as opções de contexto, raciocínio e velocidade. |

### Agent e Box

**Agent** é onde você trabalha: o editor e o chat lado a lado.

**Box** é a página de gerenciamento. A barra lateral dele reúne as <BzWenben jian="box.title" /> (modelos e provedores, opções de recursos, configurações gerais e de idioma, MCP e Skills, privacidade, recursos experimentais) e os dados em torno do seu trabalho: <BzWenben jian="box.review.group" />, <BzWenben jian="box.memory.group" />, <BzWenben jian="box.storage.group" />, <BzWenben jian="box.perf.group" />, <BzWenben jian="box.database.group" /> e <BzWenben jian="box.vault.group" />. O chat continua aberto enquanto você está no Box.

<BzHezi />

## Modos {#modes}

O seletor de modo, no canto inferior esquerdo do campo de entrada do chat, define o que a IA tem permissão para fazer. Cada modo tem a sua própria cor no campo de entrada:

| Modo | Nas palavras do Breezell |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement e Teams são liberados quando cinco amigos ajudam você ou com qualquer plano pago. Teams e DarkSelene consomem muito mais tokens do que os outros modos. [Seleção de modo](/mode-selection) explica quando usar cada um.

## Modelos

O Breezell agrupa os modelos em quatro tipos de provedores:

- **Breezell**: os modelos oficiais do Breezell, cobrados da sua cota do Breezell.
- **Entrar**: contas que você já tem, como ChatGPT (Codex), GitHub Copilot, Kimi, Grok, Gemini, DeepSeek, MiniMax ou OpenRouter.
- **Provedores de API**: APIs oficiais de fornecedores com a sua própria chave, como Anthropic, OpenAI, Gemini ou DeepSeek.
- **Compatível com OpenAI**: até 50 slots para relays, gateways e proxies auto-hospedados.

Tudo, exceto os modelos do Breezell, funciona com a sua própria chave ou conta. [API personalizada (BYOK)](/custom-api) mostra o passo a passo com modelos Claude.

## O que mais há no Breezell

- **Super Memory**: memória de longo prazo entre conversas, com uma biblioteca de memória que você pode navegar e editar. Veja [Super Memory](/super-memory).
- **Breezell Mind**: mantém conversas longas dentro do orçamento, condensando o histórico mais antigo em notas de trabalho enquanto o registro original continua salvo no disco.
- **Revisão de código**: uma página de revisão para as alterações da IA, com diffs por arquivo e reversão com um clique.
- **Breezell Browser**: um navegador integrado que a IA pode abrir, ler e operar.
- **MCP e Skills**: conecte ferramentas externas pelo Model Context Protocol e reutilize habilidades entre projetos. Veja [Configurações de prompt e habilidades](/prompt-settings).
- **Banco de dados**: conecte-se a SQLite, MySQL, PostgreSQL, SQL Server, Oracle, MariaDB, MongoDB e Redis sem sair do editor.
- **Cofre**: guarda endereços de relays e chaves no chaveiro do sistema e os preenche onde você precisar.
- **Image Studio**: gere imagens e vídeos.
- **Atualizações a quente**: as novas versões são baixadas dentro do editor e passam a valer depois de reiniciar, sem precisar reinstalar.

## Primeiros passos

1. Baixe o Breezell para a sua plataforma e instale-o.
2. Entre na sua conta Breezell.
3. Escolha o idioma da interface. Veja [Configurações de idioma](/settings-page-language-settings).
4. Escolha os seus modelos: use os modelos do Breezell imediatamente ou traga a sua própria chave com [API personalizada (BYOK)](/custom-api).
5. Abra uma pasta de projeto, escolha um modo e um modelo abaixo do campo de entrada do chat, descreva o que você quer e envie.

> O Breezell é baseado no Code – OSS (Licença MIT). VS Code e Visual Studio Code são marcas registradas da Microsoft Corporation. O Breezell não é afiliado à Microsoft nem endossado por ela.
