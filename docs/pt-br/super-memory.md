---
title: Super Memory
description: Como o Super Memory do Breezell destila as conversas em memórias, skills, experiências, trajetórias e recursos, recupera esse conhecimento em solicitações posteriores e como organizá-lo no Box.
---

# Super Memory

O **Super Memory** é a memória de longo prazo do próprio Breezell. Enquanto você trabalha, ele destila das suas conversas o que vale a pena guardar — decisões, preferências, métodos de trabalho, lições aprendidas ao corrigir problemas, os arquivos alterados — e recupera as partes relevantes em solicitações posteriores, inclusive em conversas novas.

- A extração é feita por dois modelos integrados ao Breezell. Ela não usa o modelo que você configurou e não gasta os tokens dele. Já as memórias recuperadas em uma solicitação passam a fazer parte do contexto dessa solicitação.
- O Super Memory exige uma conta Breezell com um plano que o inclua.
- Tudo o que ele armazena pode ser explorado, corrigido e excluído em Box ▸ <BzWenben jian="box.memory.group" />.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto delas acompanha o idioma desta página; as memórias mostradas são exemplos. Na biblioteca de memória, você pode abrir linhas, alterar prioridades e fixar residentes.
:::

## Como funciona {#how-it-works}

Abra o Box e expanda <BzWenben jian="box.memory.group" /> no grupo Console, à esquerda. Ele tem quatro páginas: <BzWenben jian="box.memory.overview" />, <BzWenben jian="box.memory.library" />, <BzWenben jian="box.memory.context" /> e <BzWenben jian="box.memory.maintenance" />.

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

A página <BzWenben jian="box.memory.overview" /> começa com um diagrama do ciclo, com números em tempo real:

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**: cada turno entre você e o modelo.
2. **<BzWenben jian="box.memory.flow.extract" />**: <BzWenben jian="box.memory.flow.extractSub1" />; <BzWenben jian="box.memory.flow.extractSub2" />.
3. **<BzWenben jian="box.memory.flow.store" />**: onde as entradas ficam guardadas, ativas ou inativas.
4. **<BzWenben jian="box.memory.flow.project" />**: conhecimento compilado a partir do seu código, como pontos de entrada, comandos e dependências.
5. De volta à conversa: as entradas residentes são injetadas em todas as solicitações, e as relevantes são recuperadas quando uma solicitação precisa delas.

Abaixo do diagrama, os cartões mostram quantas entradas existem, quantas são residentes, quanto o índice compacto economiza em comparação com carregar cada entrada por completo e o que foi injetado por último. Mais abaixo: a composição por tipo, as prioridades, o quão recentes são as entradas, a saúde do conhecimento do projeto compilado, as entradas mais usadas e as que estão prestes a expirar.

## Cinco tipos de memória {#kinds}

O Super Memory classifica cada entrada no tipo que corresponde à forma como ela será usada depois:

| Tipo | O que guarda | Exemplo |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | Fatos duradouros, preferências, instruções permanentes e decisões | “Responda em chinês tradicional; mantenha o código em inglês” |
| <BzWenben jian="superMemory.catSkill" /> | Um método reutilizável para resolver de novo um tipo de problema | Como restaurar com segurança dados corrompidos do localStorage |
| <BzWenben jian="superMemory.catExperience" /> | Uma lição: o raciocínio sobre a causa raiz e como verificá-la | “Quando várias funcionalidades falham juntas, corrija primeiro o estado compartilhado” |
| <BzWenben jian="superMemory.catTrajectory" /> | Como uma tarefa realmente aconteceu: objetivo, chamadas de ferramenta, erros e recuperação | As 14 etapas de uma correção |
| <BzWenben jian="superMemory.catResource" /> | Os arquivos e locais concretos que foram alterados | <BzWenben jian="superMemory.editAction.edit" /> test.html |

Nem toda conversa produz todos os tipos. Uma correção de bug normalmente gera uma skill, uma experiência, uma trajetória e recursos, mas nenhuma memória geral, porque nada nela é uma preferência pessoal duradoura. Isso mantém a recuperação precisa: uma tarefa posterior pode trazer o método, a lição, o histórico ou o registro do arquivo separadamente.

## Prioridades e ciclo de vida {#priorities}

| Prioridade | Duração |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | Nunca expira. As entradas residentes são sempre P0. |
| <BzWenben jian="superMemory.p190Days" /> | Expira após 30 dias, a menos que seja confirmada de novo. |
| <BzWenben jian="superMemory.p230Days" /> | Expira após 7 dias, a menos que seja confirmada de novo. Detalhes de curta duração, como edições de arquivos, começam aqui. |

Uma entrada expirada não é excluída: ela passa para **<BzWenben jian="superMemory.dormant" />**. As entradas inativas continuam pesquisáveis e podem ser restauradas. Quando uma entrada P1 prova o seu valor, o Breezell sugere torná-la permanente com um botão **↑P0** na linha dela.

## A biblioteca de memória {#library}

<BzWenben jian="box.memory.library" />: <BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **Filtros**: pesquise e depois refine por prioridade (P0 / P1 / P2), por tipo e por <BzWenben jian="superMemory.active" /> ou <BzWenben jian="superMemory.dormant" />.
- **Barra de contagem**: quantas entradas estão carregadas, a cota de residentes e o orçamento ativo por tipo. <BzWenben jian="superMemory.batchSelect" /> permite marcar várias entradas e excluí-las de uma vez.
- **Linhas**: o ponto colorido indica o tipo. Depois do título vêm a etiqueta de prioridade, **<BzWenben jian="superMemory.residentBadge" />** para as residentes e **NEW** para as entradas das últimas 24 horas. A segunda linha mostra quando a entrada foi atualizada pela última vez, o tipo, o número de tags e a origem.
- **Abra uma linha** para ver as tags, a <BzWenben jian="superMemory.l1Overview" />, <BzWenben jian="superMemory.whyRemembered" />, quantas vezes a entrada foi confirmada e usada e quando ela expira. <BzWenben jian="box.memory.showFull" /> acrescenta o <BzWenben jian="superMemory.l2Full" />.
- **Etiqueta de prioridade** (1): clique nela para escolher <BzWenben jian="superMemory.p0Permanent" />, <BzWenben jian="superMemory.p190Days" /> ou <BzWenben jian="superMemory.p230Days" />.
- O alfinete torna a entrada residente; a lixeira a exclui.

O Breezell envia à IA uma linha curta por entrada (L0) e só carrega a visão geral ou o conteúdo completo quando eles são necessários. É daí que vem a <BzWenben jian="superMemory.tokenSavings" /> mostrada na página de visão geral.

## Memórias residentes {#resident}

Uma entrada residente é injetada em **todas** as solicitações, quer a solicitação tenha a ver com ela ou não. Use-a para o que a IA precisa ter sempre em mente, como uma regra de arquitetura, um fluxo de trabalho obrigatório ou uma preferência firme.

1. Abra <BzWenben jian="box.memory.library" /> e encontre a entrada.
2. Clique no alfinete da linha dela (<BzWenben jian="superMemory.residentOn" />).

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- A entrada passa a ser P0, recebe o selo <BzWenben jian="superMemory.residentBadge" />, e a barra de contagem mostra o novo total, por exemplo <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />.
- Até 12 entradas podem ser residentes. No limite, o Breezell mostra <BzWenben jian="superMemory.residentLimitReached" />
- Para reduzir a prioridade de uma entrada residente, primeiro clique de novo no alfinete (<BzWenben jian="superMemory.residentOff" />); a entrada volta à prioridade que tinha antes.

Mantenha as residentes curtas e realmente universais. Locais temporários de arquivos ou detalhes de uma tarefa pontual não devem ficar aqui: eles seriam adicionados a todas as solicitações.

## Memórias no chat {#in-chat}

Quando o Super Memory injeta entradas em uma solicitação, aparece uma linha abaixo da sua mensagem. Clique nela para ver quais entradas foram usadas:

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="Responda em chinês tradicional; mantenha código e identificadores em inglês" gaoliang="zhuru" biaoji="1" wen="Olá" da="Olá! Em que você quer trabalhar hoje?" />

Neste exemplo, uma conversa totalmente nova contém apenas “Olá”, mas uma entrada foi injetada: a memória residente. As entradas relevantes são adicionadas quando uma solicitação precisa delas:

<BzLiaotian zhuru="3|1|2" zhuruwen="Responda em chinês tradicional; mantenha código e identificadores em inglês|Restaurar o estado corrompido do localStorage com parsing de JSON protegido|Quando tarefas, filtros e contadores falham juntos, corrija primeiro o estado compartilhado" zhurukai wen="A lista de leitura em test2.html perde os livros depois de recarregar a página. Corrija isso." da="É a mesma falha do gerenciador de tarefas: a lista é salva com String() em vez de JSON.stringify. Vou proteger o parsing, descartar o valor corrompido e dar a cada livro um id estável." />

A linha só aparece quando algo foi injetado. Se a recuperação não puder ser concluída, o turno continua com o que estiver disponível, e a linha informa isso.

## Injeção de contexto {#context}

<BzWenben jian="box.memory.context" />: <BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| Cartão | O que mostra |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | Para o turno selecionado: o status, quantas entradas residentes e relevantes foram injetadas, os tipos e escopos delas, e cada entrada com o seu nível de detalhe (L0 / L1 / L2) e a sua pontuação. |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | O índice compacto que a próxima solicitação vai receber, agrupado por tipo, com uma estimativa de tokens. |
| <BzWenben jian="superMemory.convTurns" /> | Os turnos da conversa atual. Clique em um deles para inspecionar a injeção desse turno e ir até ele no chat. |

## Orçamento e manutenção {#maintenance}

<BzWenben jian="box.memory.maintenance" />: <BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />: <BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />: <BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />: <BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />: leve todo o seu banco de memória para outro computador como um `.zip`. <BzWenben jian="box.memory.archiveImportDesc" />

## Exemplo: uma correção reutilizada em outro aplicativo {#example}

Foi assim que surgiram as entradas das telas acima.

1. **A correção.** Em `test.html`, um pequeno gerenciador de tarefas não conseguia adicionar, excluir, concluir, filtrar nem salvar tarefas de forma confiável. O Breezell rastreou as falhas até um único modelo de estado compartilhado, corrigiu-o e verificou o fluxo completo no navegador. Primeiro, o Super Memory registrou as partes editadas de `test.html` como **recursos P2** e o andamento da correção como uma **trajetória P2**.
2. **As lições.** Diante da pergunta “O que você aprendeu com isso?”, a IA apontou as lições reutilizáveis: corrigir o responsável pelo estado compartilhado em vez de cada sintoma, identificar os itens por um id estável e tratar os dados salvos como uma fronteira que precisa ser validada. O Super Memory armazenou uma **skill P1** (salvamento e carregamento protegidos de dados do localStorage) e uma **experiência P1** (diagnosticar primeiro o estado compartilhado e depois verificar de ponta a ponta). Em correções mais longas ou mais valiosas, ele registra essas lições sem que ninguém precise pedir.
3. **A reutilização.** A primeira conversa foi excluída. Em uma nova conversa, outro aplicativo — uma lista de leitura em `test2.html` — tinha a mesma família de bugs. O Breezell recuperou a skill e os registros de recursos, aplicou o método aos novos dados de `books` em vez de copiar o patch antigo e verificou o resultado.

Excluir uma conversa não exclui o que o Super Memory extraiu dela, e um método aprendido em um aplicativo foi aproveitado em outro.

## Quando a cota diária se esgota {#quota}

O Super Memory tem uma cota diária. Quando ela se esgota, todas as páginas do Super Memory mostram <BzWenben jian="box.memory.quotaPausedTitle" />. Até a cota ser renovada, os chats deixam de criar novas entradas por conta própria; as entradas existentes ainda podem ser vistas e excluídas, e as regras e memórias que você mesmo escreve em [Rules, Memories & Skills](/prompt-settings) não são afetadas.

Sem um plano que inclua o Super Memory, as páginas mostram:

<BzJiyi ye="suoding" />

## Resumo

- O Super Memory destila as conversas em memórias, skills, experiências, trajetórias e recursos, sem usar os tokens do seu modelo.
- As entradas relevantes são recuperadas em solicitações posteriores; as residentes (até 12, sempre P0) vão em todas as solicitações.
- P1 dura 30 dias e P2, sete dias, a menos que sejam confirmadas de novo; as entradas expiradas ficam inativas e podem ser restauradas.
- Box ▸ <BzWenben jian="box.memory.group" /> reúne a visão geral, a biblioteca, a visualização da injeção de contexto e a manutenção.
