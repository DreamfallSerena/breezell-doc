---
title: Super Memory
description: Saiba como o Breezell extrai, organiza e gerencia memórias reutilizáveis sem consumir os tokens do modelo configurado.
---

# Super Memory

O **Super Memory** é um sistema de memória desenvolvido de forma independente pelo Breezell. Ele utiliza dois modelos integrados ao Breezell para extrair informações úteis das conversas. Os nomes exatos desses modelos não são divulgados.

A extração é processada pelo pipeline interno de modelos do Breezell e não consome tokens do modelo configurado pelo usuário nem reduz sua cota de tokens.

## O que o Super Memory pode extrair

O Super Memory pode organizar as informações extraídas em vários tipos:

- **Memory:** Fatos estáveis, preferências, instruções permanentes e decisões que podem ser úteis posteriormente.
- **Skill:** Métodos ou fluxos de trabalho reutilizáveis identificados durante uma tarefa.
- **Experience:** Resultados, aprendizados e conhecimento prático obtidos em trabalhos anteriores.
- **Trajectory:** Evolução de uma tarefa, decisão ou objetivo ao longo do tempo.
- **Resource:** Arquivos, links, ferramentas ou materiais de referência úteis relacionados ao trabalho.

O sistema extrai e classifica automaticamente esses itens a partir das conversas para recuperá-los como contexto relevante em interações futuras.

## Explorar e filtrar memórias

![Painel do Super Memory](/super-memory/super-memory-panel.png)

O painel oferece as seguintes visualizações e controles:

- **Memories, Context e Insights:** Alterne entre memórias extraídas, contexto reunido e análises gerais obtidas das memórias.
- **Pesquisa:** Encontre itens armazenados por texto.
- **Prioridade:** Filtre por **P0**, **P1**, **P2** ou mostre todas as prioridades.
- **Tipo:** Filtre por Memory, Skill, Experience, Trajectory ou Resource.
- **Estado:** Separe itens **Active** de itens **Dormant**.
- **Contadores de capacidade:** Consulte o total de itens e a capacidade atual usada por itens residentes, memórias, habilidades e experiências.
- **Select:** Entre no modo de seleção para escolher itens específicos a serem gerenciados.

Quando ainda não há itens, o painel informa que as memórias serão extraídas automaticamente das conversas. Com o uso contínuo, itens úteis podem aparecer aqui sem que o usuário precise escrevê-los manualmente.

## Principais vantagens

O Super Memory combina extração automática avançada com uma recuperação eficiente e altamente controlável:

- **Extração avançada:** Dois modelos internos do Breezell analisam as conversas e transformam informações úteis em itens estruturados de Memory, Skill, Experience, Trajectory e Resource, sem exigir entrada manual.
- **Recuperação eficiente:** Tipo, prioridade, estado, atualidade e índice de memória compilado ajudam a limitar a recuperação às informações relevantes para a tarefa atual.
- **Injeção de contexto controlável:** A visualização Context mostra o snapshot injetado no turno atual, a prévia do índice para o próximo turno e o tamanho estimado em tokens.
- **Controle explícito do ciclo de vida:** As prioridades P0 permanente, P1 de 30 dias e P2 de 7 dias funcionam com os estados Active e Dormant para preservar conhecimentos importantes e limitar a duração de informações temporárias.
- **Integridade observável do conhecimento:** Estado da compilação, versões da origem e do compilador, recursos desatualizados, falhas, verificações, correções, atualidade e itens não sincronizados podem ser inspecionados.
- **Visibilidade de tokens:** A extração não consome tokens do modelo configurado pelo usuário. Quando a memória recuperada é injetada em uma solicitação, ela passa a fazer parte do contexto dessa solicitação; a prévia e as estatísticas de economia tornam esse uso visível.

## Contexto e controle de recuperação

![Visualização Context do Super Memory](/super-memory/super-memory-context.png)

A visualização **Context** mostra como a memória participa das conversas:

- **Current Turn Injection:** Exibe o snapshot de memória injetado no turno atual. Se ainda não houver um snapshot, o painel mostra claramente um estado vazio.
- **Memory Index Preview:** Apresenta o índice preparado para o próximo turno e estima seu tamanho em tokens.
- **Conversation Turns:** Mostra o número de turnos da conversa atual e permite consultar a atividade de memória por turno.

Esses controles mostram se houve injeção de memória, o que está sendo preparado para o próximo turno e o custo aproximado de contexto.

## Insights e integridade do sistema

![Visualização Insights do Super Memory](/super-memory/super-memory-insights.png)

A visualização **Insights** resume o estado e a eficácia do sistema de memória:

- **Project Knowledge Health:** Exibe a última compilação, as versões do compilador e da origem, recursos desatualizados, compilações com falha e totais verificados ou corrigidos.
- **Token Savings:** Mostra a economia de tokens quando há atividade suficiente registrada.
- **Viking Filesystem:** Apresenta as quantidades de Memories, Skills, Experiences, Trajectories, Resources e itens Unsynced.
- **Priority Distribution:** Mostra a distribuição de itens P0 permanentes, P1 de 30 dias e P2 de 7 dias.
- **Freshness Pulse:** Agrupa conhecimentos atualizados nas últimas 24 horas, 7 dias, 30 dias ou em um período anterior.

Context e Insights oferecem uma visão transparente do que o Super Memory extrai, do que pode recuperar e de quão atualizado e íntegro permanece o conhecimento armazenado.

## Memórias ativas e inativas

As memórias ativas permanecem disponíveis para recuperação quando forem relevantes. As memórias inativas são preservadas, mas ficam separadas do conjunto ativo, mantendo o contexto atual focado sem perder informações que possam ser úteis posteriormente.

## Demonstração: transformar uma correção em memória reutilizável

Este exemplo usa um gerenciador de tarefas HTML com erros intencionais para mostrar como o Super Memory transforma uma breve sessão de correção em conhecimento reutilizável.

A solicitação pede que a IA examine todo o código e corrija criação, exclusão e conclusão de tarefas, filtros, contadores, persistência no localStorage, entrada pelo teclado e limpeza de tarefas concluídas, sem alterar a interface nem o comportamento pretendidos.

### 1. Inspecionar e corrigir o gerenciador de tarefas

O Breezell inspeciona o código, identifica causas raiz compartilhadas, corrige a implementação e verifica o fluxo completo, em vez de tratar cada sintoma visível como um erro independente.

![Breezell corrigindo o gerenciador de tarefas](/super-memory/task-manager-repair.png)

A correção abrange serialização e análise, carregamento duplicado, dados salvos corrompidos, validação de tarefas vazias, identidades estáveis, teclado, alternância de conclusão, exclusão direcionada, filtros, contadores e limpeza de tarefas concluídas.

### 2. Registros iniciais de Resource P2

Como este é um teste pequeno e o primeiro resultado descreve principalmente edições concretas, o Super Memory registra inicialmente duas seções modificadas de **test.html** como itens **P2 Resource**.

![Registros P2 Resource criados durante a correção](/super-memory/p2-resource-records.png)

Esses itens preservam o que mudou e onde. P2 atribui uma prioridade menor a detalhes de implementação temporários sem descartar o histórico da correção, permitindo que a IA recupere posteriormente quais regiões do arquivo foram alteradas.

### 3. Estimular uma reflexão mais profunda

Nesta demonstração compacta, o usuário pergunta:

> Quais lições você aprendeu ao resolver este problema?

![IA resumindo as lições da correção](/super-memory/repair-lessons.png)

A resposta identifica lições reutilizáveis: corrigir a origem do estado compartilhado em vez de cada sintoma, endereçar itens por identidade estável, recalcular o estado derivado em todos os caminhos de renderização, tratar persistência como uma fronteira de dados validada, revisar predicados booleanos, encerrar entradas inválidas, evitar identidades baseadas apenas em horário e verificar os recursos por um fluxo realista de ponta a ponta.

### 4. Extrair conhecimento estruturado da correção

Após uma análise mais profunda, o Super Memory adiciona itens estruturados de maior valor:

- Uma **P1 Experience** sobre a correção de estado compartilhado e identidade estável.
- Uma **P1 Skill** para corrigir persistência corrompida no localStorage com serialização e análise protegidas.
- Uma **P2 Trajectory** que resume os vários erros e o processo de resolução.
- Os registros **P2 Resource** originais que preservam os locais editados.

![Memórias estruturadas após a reflexão](/super-memory/structured-repair-memories.png)

### O que esta demonstração comprova

- **A profundidade da extração se adapta ao valor:** Pequenas edições podem começar como recursos P2, enquanto conhecimentos reutilizáveis sobre causas raiz podem se tornar habilidades e experiências P1.
- **Cada tipo de memória tem uma função:** Resource e Trajectory preservam o que aconteceu; Skill e Experience preservam como e por que o problema foi resolvido.
- **A prioridade continua controlável:** P1 mantém por mais tempo o conhecimento reutilizável, enquanto P2 preserva detalhes temporários sem lhes dar peso permanente.
- **A memória ajuda em trabalhos futuros da IA:** Outras tarefas podem recuperar o histórico do arquivo, o método de correção ou a lição de engenharia sem depender apenas da conversa original.
- **Normalmente não é necessário pedir uma reflexão:** A pergunta é usada aqui para fazer um teste pequeno produzir um resultado evidente. Em erros duradouros ou importantes, o Super Memory pode identificar e registrar automaticamente experiências de correção sem que o usuário precise fazer essa pergunta.

