---
title: Seleção de modo
description: O que cada modo do Breezell — Chat, Plan, Analyze, Entanglement, Agent, Teams e DarkSelene — pode ler, alterar e executar, como funcionam os cartões do Plan e as trocas de modo, e qual modo escolher.
---

# Seleção de modo

O modo define como a IA trabalha na sua próxima mensagem: o que ela pode ler, o que pode alterar e o que pode executar. Escolha-o na cápsula de modo, no canto inferior esquerdo da caixa de entrada. **Agent** é o padrão e a escolha certa para a maior parte do trabalho.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto delas acompanha o idioma desta página. Passe o mouse sobre os modos no menu para ler as descrições deles; os menus e os interruptores dos cartões podem ser clicados.
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

O menu mostra os nomes dos modos em inglês em todos os idiomas. O modo escolhido vale a partir da sua próxima mensagem; quando você envia em outro modo, uma linha <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> marca a mudança na conversa. Para o menu em si, veja [Escolher um modo](/dialog-box-overview#mode).

## O que cada modo pode fazer {#compare}

| Modo | Lê o projeto | Altera arquivos | Executa comandos | Ferramentas MCP |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | Só o próprio plano | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓ (segunda etapa, com revisão) | ✓ (segunda etapa) | segunda etapa |

A IA pode usar as suas skills em todos os modos. Em Permissões de Ferramentas, nas [Opções de Recursos](/feature-options-overview), você define se as edições de arquivos e os comandos precisam da sua aprovação.

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" />.

Use Chat para perguntas, explicações, comparar ideias ou rascunhar textos. A IA responde com base na conversa e no contexto que você anexa; ela não abre arquivos do projeto por conta própria nem executa nada. Ainda assim, ela pode salvar uma memória quando você pede que ela se lembre de algo.

<BzLiaotian moshi="normal" wen="Qual é a diferença entre debounce e throttle?" da="Os dois limitam a frequência com que uma função é executada. O debounce espera as chamadas pararem por um instante e então executa uma vez; o throttle executa no máximo uma vez por intervalo enquanto as chamadas continuam. Use debounce na pesquisa enquanto se digita e throttle em handlers de rolagem ou redimensionamento." />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />. <BzWenben jian="chatMode.planExplain" />.

1. A IA lê o código de que precisa, mas não altera nada dele.
2. Ela escreve o plano como um cartão no chat: um título, um breve resumo e uma lista de tarefas. O plano é um arquivo `.plan.md` que o Breezell mantém fora do seu projeto.
3. Clique em <BzWenben jian="planCard.actions.viewPlan" /> para ler e editar o plano. Peça alterações no chat, e a IA revisa o mesmo plano.
4. Clique em <BzWenben jian="planCard.actions.execute" /> (`Ctrl+Enter`) para executá-lo. O cartão passa a mostrar <BzWenben jian="planCard.actions.executed" />, e as tarefas vão sendo marcadas como concluídas à medida que o trabalho avança.

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="Adicione um interruptor de modo escuro à página de configurações." da="Aqui está um plano. Ele mantém a lógica de tema atual e adiciona uma configuração." jihuabiaoti="Interruptor de modo escuro na página de configurações" jihuazhaiyao="Adicionar ao SettingsPage.vue um interruptor de modo escuro, salvar a escolha, aplicá-la com uma classe de tema no elemento raiz e seguir a configuração do sistema até que o usuário escolha um modo." />

<BzWenben jian="planCard.actions.skip" /> descarta o plano. O interruptor <BzWenben jian="planCard.actions.auto" /> no cartão é a mesma configuração que <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> nas Opções de Recursos: quando ele está ativado, os novos planos são executados sem nenhum clique.

### Quando o Agent sugere o Plan {#plan-switch}

No modo Agent, a IA pode decidir que uma tarefa precisa de um plano primeiro. Nesse caso, ela para e mostra um cartão com o motivo:

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="Reescreva a camada de armazenamento para que ela possa sincronizar com o servidor." da="Isso afeta o formato de armazenamento, todos os pontos que o chamam e o cache offline." qiehuanka="A mudança abrange vários módulos e o formato dos dados; combinar um plano antes evita uma reescrita arriscada." />

- <BzWenben jian="planSwitch.switch" /> (`Ctrl+Enter`) leva a conversa para o modo Plan; <BzWenben jian="planSwitch.skip" /> deixa a IA continuar no modo Agent.
- O menu no canto inferior esquerdo define o que acontece da próxima vez: <BzWenben jian="planSwitch.alwaysAsk" />, <BzWenben jian="planSwitch.never" /> ou <BzWenben jian="planSwitch.alwaysRun" />. É a mesma configuração que <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> nas Opções de Recursos.
- Com <BzWenben jian="planSwitch.alwaysAsk" />, a barra abaixo do cartão percorre duas rodadas de 30 segundos. Se você não responder, a troca é ignorada e a IA continua.

No modo Plan, a IA pode oferecer a troca inversa com o mesmo tipo de cartão, de volta ao modo de onde você veio.

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />. <BzWenben jian="chatMode.analyzeExplain" />.

Use Analyze para encontrar a causa de um bug, revisar um design ou entender um código desconhecido antes de decidir o que alterar. A IA pesquisa e lê até conseguir responder e então para; ela pode usar ferramentas MCP para obter informações. Se algo precisar de correção, ela descreve a correção na resposta em vez de aplicá-la.

<BzLiaotian moshi="analyze" wen="Por que o contador de tarefas mostra o número errado depois que uma tarefa é excluída?" da="deleteTask() remove o item de uma cópia do array, mas renderCounters() lê o array tasks original, então a contagem nunca diminui. Correção: faça deleteTask() atualizar o array tasks compartilhado e chame renderCounters() em seguida." />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />. <BzWenben jian="chatMode.agentExplain" />.

Agent é o padrão. Ele reúne o contexto de que precisa, edita arquivos, executa comandos e verifica o resultado antes de responder. Ele pode sugerir uma [troca para o Plan](#plan-switch) quando uma tarefa é grande e pode usar ferramentas MCP, o navegador e as suas skills.

No Windows e no macOS, quando o controle da área de trabalho está ativado, Agent e Entanglement são os únicos modos que podem operar aplicativos no seu computador.

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.entanglementDetail" />: <BzWenben jian="chatMode.entanglementExplain" />

Entanglement tem todas as capacidades do Agent e acrescenta um raciocínio causal explícito e estruturado. A IA acompanha as próprias hipóteses, usa cada chamada de ferramenta para confirmar ou descartar uma delas e pode parar para confirmar uma etapa com você antes de continuar. Um painel acima do chat mostra esse estado à medida que ele evolui (<BzWenben jian="featureOptions.entanglement.enable" /> nas Opções de Recursos).

Use-o para bugs difíceis, decisões de arquitetura, refatorações e trabalhos de desempenho ou segurança. Ele usa mais tokens que o Agent. Como ele funciona em detalhes: [Modo Entanglement](/entanglement-mode-overview).

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />. <BzWenben jian="chatMode.agentTeamsExplain" />.

- O líder decide se vale a pena montar uma equipe. Solicitações simples são respondidas diretamente.
- Em trabalhos grandes, o líder divide a tarefa e inicia colegas que trabalham em paralelo; depois, reúne e confere os resultados deles.
- Antes de uma equipe começar, o Breezell pede a sua aprovação, a menos que <BzWenben jian="featureOptions.toolPermissions.teams" /> esteja ativado nas Opções de Recursos. Os colegas de design e de correção de bugs podem rodar em modelos próprios (<BzWenben jian="models.teamDesignModel.title" />, <BzWenben jian="models.teamBugfixModel.title" />).
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />. Colegas em paralelo também podem atrapalhar uns aos outros quando trabalham nos mesmos arquivos, então dê a eles partes claramente separadas.

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.darkSeleneDetail" />.

DarkSelene trabalha em duas etapas:

1. **Desmontar a pergunta.** Somente leitura, como no Analyze: a IA estuda a solicitação e o código e escreve um briefing do que precisa ser feito e do que esperar.
2. **Executar sob revisão.** O briefing vai para o Agent. Enquanto ele trabalha, chamadas independentes de modelo revisam as leituras dele fora dos arquivos esperados e cada edição, e as conclusões delas voltam para ele como evidências. Edições arriscadas são verificadas por três revisores em paralelo.

Durante a segunda etapa, a IA não troca de modo, não escreve cartões de plano nem interrompe o trabalho para fazer perguntas. <BzWenben jian="chatMode.darkSeleneTokenWarning" />

## Modos bloqueados {#locked}

Entanglement e Teams ficam disponíveis depois que cinco amigos ajudam você a desbloqueá-los, ou com qualquer plano. Até lá, eles mostram um cadeado no menu, e passar o mouse sobre eles mostra o seu progresso, por exemplo <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />. <BzWenben jian="chatMode.entanglementUnlockHint" /> Veja [Como convidar novos usuários](/invite-new-users).

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Escolher um modo {#choosing}

| Você quer… | Modo |
| --- | --- |
| Fazer uma pergunta ou refletir sobre algo | Chat |
| Combinar a abordagem antes de qualquer alteração | Plan |
| Entender o código ou encontrar uma causa, sem alterações | Analyze |
| Concluir uma tarefa: editar, executar, verificar | Agent |
| Resolver um problema difícil passo a passo, com evidências | Entanglement |
| Avançar ao mesmo tempo várias partes independentes de um trabalho grande | Teams |
| Ter a solicitação desmontada primeiro e cada alteração revisada | DarkSelene |

Na dúvida, fique no Agent: ele passa para o Plan por conta própria quando uma tarefa precisa disso.
