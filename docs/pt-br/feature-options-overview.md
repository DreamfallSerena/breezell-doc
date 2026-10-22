---
title: Visão geral das opções de recursos
description: Todos os interruptores da página Opções de Recursos do Breezell — modelos dedicados, sugestões de continuação, permissões de ferramentas, comportamento do editor, notificações, modo Plan, busca na web e acesso a arquivos — com o valor padrão de cada um e o que ele faz.
---

# Visão geral das opções de recursos

**Opções de Recursos** é a página do Box em que você decide em qual modelo cada recurso secundário roda e até onde o agente pode agir sozinho. Ela tem cinco grupos: <BzWenben jian="featureOptions.group.models" />, <BzWenben jian="featureOptions.group.execution" />, <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" /> e <BzWenben jian="featureOptions.group.system" />.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto delas acompanha o idioma desta página. Todos os interruptores e menus começam no valor padrão do Breezell, e você pode clicar neles para ver como uma linha muda.
:::

## Abrir as Opções de Recursos

1. Abra o Box (o lado **Box** do alternador na barra de título, ou **Breezell: Open Settings** na Paleta de Comandos).
2. No grupo <BzWenben jian="box.title" /> à esquerda, clique em <BzWenben jian="tab.featureOptions" />.

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

Cada alteração é salva no momento em que você a faz e vale para todos os espaços de trabalho. Para ir direto a uma opção, digite parte do nome dela na caixa de pesquisa no topo da barra lateral do Box: o Breezell rola até a linha e a destaca.

A conclusão automática não fica nesta página. O interruptor, o modelo e o protocolo dela têm uma página própria: <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />.

## Modelos

<BzWenben jian="featureOptions.dedicatedModels.desc" /> Todas as linhas de modelo deste grupo funcionam do mesmo jeito:

- Interruptor **desligado** (padrão): a linha mostra <BzWenben jian="models.analysisModel.followChat" />, e o recurso usa o modelo selecionado abaixo da caixa de entrada do chat.
- Interruptor **ligado**: a linha mostra <BzWenben jian="models.analysisModel.custom" />, e um seletor de modelos aparece abaixo dela. O recurso sempre usa o modelo que você escolher ali, seja qual for o modelo do chat.

Se o modelo dedicado for removido ou desativado mais tarde em <BzWenben jian="tab.models" />, o recurso volta discretamente para o modelo do Chat.

### Modelos dedicados

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| Linha | Usado para |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | Os subagentes que o agente inicia para explorar e analisar o código no lugar dele |
| <BzWenben jian="models.teamDesignModel.title" /> | Os membros da equipe que cuidam de UI, visual e acabamento de páginas no modo Teams |
| <BzWenben jian="models.teamBugfixModel.title" /> | Os membros da equipe que localizam, reproduzem e corrigem bugs no modo Teams |
| <BzWenben jian="models.scmModel.title" /> | A mensagem de commit gerada no Controle de código-fonte |

Uma configuração comum: conversar com o `claude-opus-5` e dar às tarefas secundárias um modelo menor. No exemplo acima, <BzWenben jian="models.scmModel.title" /> foi trocado para <BzWenben jian="models.scmModel.custom" /> e roda no `claude-haiku-5-5`, que escreve mensagens de commit mais rápido e com custo menor. O estilo dessas mensagens vem da página Commit em [Configurações de prompt e habilidades](/prompt-settings#commit-message).

### Sugestões de continuação

<BzWenben jian="featureOptions.followUp.desc" /> Isso vem desativado por padrão.

| Opção | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | Desativado | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 2, 3 ou 4 cartões de sugestão abaixo de cada resposta. |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" />: a sugestão é enviada na hora; <BzWenben jian="featureOptions.followUp.clickInsert" />: você pode editá-la antes. <BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | Um modelo pequeno e rápido, como o `claude-haiku-5-5`, já basta aqui. |

### Otimizar o prompt

<BzWenben jian="featureOptions.promptOptimize.desc" /> O cartão tem apenas a linha de modelo: <BzWenben jian="models.promptOptimizeModel.title" />.

### Assistente de seleção

Quando você destaca texto em uma resposta do chat, aparece uma pequena barra com Citar e Copiar. O assistente de seleção acrescenta Traduzir e Pesquisar a ela.

| Opção | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | Ativado | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> ou <BzWenben jian="featureOptions.selectionAssist.pillAbove" /> da seleção. <BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | Ativado | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | Ativado | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | Ativado | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | O modelo que faz a tradução. |

## Execução

<BzWenben jian="featureOptions.toolPermissions.desc" /> Quando um interruptor está desligado, o agente para antes desse tipo de ação e espera você aprová-la ou rejeitá-la no chat. Ferramentas que apenas leem, como ler arquivos, pesquisar no código ou a busca na web, nunca esperam aprovação.

<BzGongneng zu="execution" />

| Interruptor | Padrão | Abrange |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | Ativado | Editar, gravar, renomear e excluir arquivos e pastas |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | Desativado | Comandos de terminal e scripts que o agente escreve e executa |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | Ativado | Executar instruções e criar conexões ou bancos de dados com as ferramentas de banco de dados do Breezell |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | Desativado | Gerar imagens |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | Ativado | Ferramentas dos servidores MCP que você adicionou |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | Desativado | <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> no modo Teams |

::: warning Aprovar terminal automaticamente
Com <BzWenben jian="featureOptions.toolPermissions.terminal" /> ligado, o agente executa qualquer comando que decidir, como instalações, builds ou exclusão de arquivos, sem perguntar. Ative-o apenas em projetos em que isso seja seguro, por exemplo com um estado limpo do Git ao qual você possa voltar.
:::

Mesmo com <BzWenben jian="featureOptions.toolPermissions.edits" /> ligado, as edições continuam aparecendo como alterações que você pode revisar, a menos que você também ative <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> abaixo.

## Editor

<BzGongneng zu="editor" />

### Comportamento de Código

| Interruptor | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | Ativado | Depois de cada edição, os erros de lint que ela introduziu são enviados de volta à IA junto com o resultado, para que ela os corrija no mesmo turno. |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | Desativado | As edições da IA são mantidas na hora, sem a etapa de aceitar / rejeitar no editor. |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | Desativado | Abre cada arquivo no editor quando a IA o edita. |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | Ativado | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | Desativado | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | Ativado | Quando você seleciona código no editor, pequenos botões aparecem ao lado dele para adicionar o código ao chat ou editá-lo. |

### Notificações

| Opção | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | Ativado | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | Desativado | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | Desativado | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | Desativado | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | Desativado | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

Ao escolher um som, ele toca uma vez; o mesmo acontece quando você ativa um dos interruptores de som. Nenhum som toca até você ativar pelo menos um dos interruptores de segundo plano ou de chat atual.

## Inteligência

<BzGongneng zu="intelligence" />

### Gerenciamento de Contexto

| Opção | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | Desativado | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Permite que o modelo use a busca na web integrada do provedor dele. Veja abaixo. |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> decide quando a busca do próprio provedor é adicionada a uma solicitação. Normalmente o Breezell faz as buscas com as próprias ferramentas web, que exigem que você tenha feito login.

| Escolha | O que acontece |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | As ferramentas de busca do Breezell são usadas. Só quando elas não podem ser executadas (por exemplo, quando você não fez login) o modelo faz a busca pelo provedor. |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | A busca do provedor é adicionada a todas as solicitações, junto com as ferramentas do Breezell. |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | A busca do provedor nunca é usada. |

A busca integrada existe apenas em alguns provedores: Anthropic (Claude), OpenAI, Gemini com chave de API, xAI, Perplexity, OpenRouter, Qwen e Zhipu. Para outros modelos, esta opção não tem efeito.

### Modos e habilidades

| Interruptor | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | Ativado | <BzWenben jian="featureOptions.superpowers.desc" /> São as skills integradas listadas em [Configurações de prompt e habilidades](/prompt-settings#use-skills-in-a-chat). |
| <BzWenben jian="featureOptions.entanglement.enable" /> | Ativado | <BzWenben jian="featureOptions.entanglement.enableDesc" /> Veja [Modo Entanglement](/entanglement-mode-overview). |

## Sistema

<BzGongneng zu="system" />

### Acesso a Arquivos Externos

| Interruptor | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | Ativado | As ferramentas podem ler arquivos fora do espaço de trabalho aberto, por exemplo o código-fonte de uma biblioteca ou um arquivo de configuração na sua pasta pessoal. |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | Ativado | As ferramentas podem alterar arquivos fora do espaço de trabalho aberto. Desative isto se o agente só deve mexer no projeto. |

### Velocidade de rede do terminal

| Interruptor | Padrão | O que faz |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | Ativado | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | Desativado | Somente no Windows. <BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## Resumo

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />; as alterações são salvas na hora.
- <BzWenben jian="featureOptions.group.models" />: os recursos secundários seguem o modelo do Chat até você dar a eles um modelo dedicado.
- <BzWenben jian="featureOptions.group.execution" />: o que o agente pode fazer sem perguntar. Comandos de terminal pedem confirmação por padrão.
- <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />: correções de lint, notificações, cartões de plano, busca na web, skills Superpowers e acesso a arquivos fora do espaço de trabalho.
