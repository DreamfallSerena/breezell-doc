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

## Análise detalhada: por que a categoria Memory está vazia

Ao filtrar este exemplo por **Memory**, são exibidos **0 itens**, embora o Super Memory tenha extraído conhecimento útil com sucesso.

![Categoria Memory vazia após a correção](/super-memory/empty-memory-category.png)

Isso representa uma classificação intencional, não uma falha de extração. A correção não produziu uma preferência pessoal duradoura, um fato estável do usuário ou uma instrução permanente que pertencesse à Memory geral. Em vez de duplicar tudo como memória genérica, o Super Memory classificou cada resultado como Skill, Experience, Trajectory ou Resource.

## Skill: padrão reutilizável de recuperação do localStorage

O item **P1 Skill** transforma uma correção específica em um procedimento reutilizável para persistência de estado no cliente.

![Skill expandida para correção do localStorage](/super-memory/localstorage-skill-detail.png)

O cartão mostra:

- **Tags:** localStorage, JSON, hidratação de estado e recuperação de dados facilitam a localização em problemas relacionados.
- **L1 Overview:** Armazenar arrays de tarefas com JSON.stringify, carregá-los com JSON.parse protegido, não adicionar dados iniciais depois de um carregamento válido e descartar valores antigos irrecuperáveis antes de restaurar um padrão limpo.
- **Why Remembered:** Identifica o item como um padrão verificado de persistência e recuperação reutilizável em aplicações com estado.
- **L2 Full Content:** Preserva o modo de falha detalhado e o procedimento completo de recuperação.
- **Metadados:** Exibe prioridade P1, tipo, estado, confirmações, acessos, última atualização e ciclo de vida.

Isso é mais útil do que uma nota vaga dizendo que o localStorage foi corrigido, pois fornece um procedimento concreto que uma futura IA pode aplicar novamente.

## Experience: diagnosticar estado compartilhado e identidade estável

O item **P1 Experience** preserva a lição de engenharia mais ampla por trás do conjunto de falhas da interface.

![Experience expandida sobre estado compartilhado](/super-memory/repair-experience-detail.png)

O resumo explica que, quando tarefas, filtros, contadores e persistência falham juntos, a investigação deve começar no array compartilhado e em suas transições. Também registra a necessidade de identificadores estáveis sem colisões e de um fluxo completo que teste novamente validação, teclado, filtros, contadores, limpeza e persistência após recarregar.

As tags abrangem gerenciamento de estado, depuração, UI, identidade estável, invariantes, testes e localStorage. **Why Remembered** identifica o item como uma lista reutilizável para funções que dependem de um único modelo de estado.

A distinção é importante: Skill registra um método repetível; Experience registra o raciocínio de diagnóstico, as invariantes e a estratégia de verificação.

## Trajectory: preservar o caminho real da correção

O item **P2 Trajectory** mantém a forma como a tarefa ocorreu, e não apenas a conclusão.

![Trajectory expandida da correção](/super-memory/repair-trajectory-detail.png)

Ele contém o objetivo original, o resultado recuperado, a sequência de ferramentas, um erro recuperável, as etapas seguintes e o resultado final. Neste exemplo, registra 14 chamadas de ferramentas envolvendo leitura de código, inspeção de diretórios, gerenciamento de tarefas, edição de arquivos, navegação e avaliação pelo navegador.

Os rótulos P2 e unverified mantêm esse histórico temporário separado de Skill e Experience P1, que são mais reutilizáveis. O caminho exato continua disponível quando necessário, enquanto as conclusões importantes ficam armazenadas em formas mais duráveis.

## Por que essa classificação é importante

- **Memory** armazena fatos, preferências e informações permanentes; nenhuma foi criada neste teste.
- **Skill** armazena um método reutilizável.
- **Experience** armazena o raciocínio sobre a causa raiz e a lista de verificação.
- **Trajectory** armazena a sequência de ações, erros e recuperação.
- **Resource** armazena arquivos concretos e locais modificados.

Essa separação mantém a recuperação precisa e controlável. Uma tarefa futura pode buscar o método, a lição, o histórico de execução ou o recurso modificado separadamente, sem carregar uma única memória genérica excessiva.

## Validação: reutilização em uma nova conversa e outro aplicativo

Um segundo teste verifica se o conhecimento extraído continua útil fora da conversa original do Task Manager.

A conversa antiga é excluída e uma nova é criada para outro aplicativo HTML: uma Reading Library em **test2.html**. Ela trabalha com livros em vez de tarefas, mas contém intencionalmente a mesma família de erros de estado, identidade, filtros, contadores, teclado, exclusão e localStorage.

### 1. Iniciar em uma conversa separada

![Novo teste da Reading Library em outra conversa](/super-memory/reading-library-new-session.png)

Para a demonstração, a solicitação pede explicitamente que o Breezell examine memórias, lições e padrões relevantes antes de fazer alterações. Isso torna a recuperação visível. No uso normal, o Super Memory pode recuperar automaticamente o conhecimento relevante sem essa instrução.

### 2. Recuperar conhecimento da conversa excluída

Antes de editar **test2.html**, o Breezell recupera a **P1 Skill** anterior de carregamento JSON protegido e os registros **P2 Resource** que apontam para regiões editadas do antigo **test.html**.

![Breezell recuperando itens Skill e Resource](/super-memory/reading-library-memory-recall.png)

Isso mostra duas formas de recuperação:

- **Skill:** Fornece o padrão reutilizável de persistência: JSON.stringify e JSON.parse protegidos, rejeição segura de dados antigos corrompidos e restauração de um padrão limpo.
- **Resource:** Preserva a origem concreta do padrão ao mostrar quais regiões do arquivo anterior foram modificadas.

Neste teste, excluir a conversa original não removeu os itens estruturados extraídos pelo Super Memory. O conhecimento permaneceu disponível para a conversa seguinte.

### 3. Transferir o método sem copiar o patch antigo

O Breezell aplica a lição ao estado compartilhado **books** da Reading Library, em vez de copiar o código criado para o antigo array **tasks**.

![Reading Library corrigida com conhecimento recuperado](/super-memory/reading-library-repair-result.png)

A nova correção inclui:

- Serialização e análise JSON protegidas.
- Remoção segura de valores antigos irrecuperáveis.
- Carregamento de uma biblioteca vazia válida sem duplicar o livro de exemplo.
- Identidades únicas determinísticas em vez de timestamps sujeitos a colisões.
- Contadores, filtros e estados vazios corretos.
- Alternância de estado, exclusão direcionada e limpeza dos livros lidos.
- Validação de entrada e envio apenas com Enter.
- Eventos baseados na identidade estável de cada livro.

O Breezell verifica o resultado com um fluxo de 14 testes no navegador e restaura o valor anterior do localStorage ao final.

### O que o segundo teste comprova

- **O conhecimento estruturado permanece após a conversa:** Excluir o diálogo anterior não impediu a recuperação de Skill e Resource neste teste.
- **A recuperação se generaliza entre implementações:** Um padrão aprendido com tarefas é aplicado a livros porque as falhas de estado e persistência são estruturalmente relacionadas.
- **Skill é mais do que histórico de patch:** P1 Skill fornece um método reutilizável, enquanto P2 Resource preserva o histórico concreto.
- **A IA corrige causas raiz:** Ela transfere os princípios de estado compartilhado, identidade estável, persistência validada e verificação integral, sem copiar o código antigo linha por linha.
- **A recuperação explícita é opcional:** O pedido menciona memória apenas para tornar a demonstração observável. Normalmente, itens relevantes do Super Memory podem ser recuperados automaticamente.

## Memórias residentes (P0)

Qualquer item do Super Memory pode ser definido como **Resident** quando precisar estar disponível em toda recuperação, mesmo que a solicitação atual não tenha relação semântica com ele.

### Definir um item como residente

Passe o cursor ou selecione o ícone de alfinete no cartão. A dica **Set resident** identifica a ação.

![Ação para definir uma memória como residente](/super-memory/set-resident-action.png)

Após a ação:

- O item passa para **P0**.
- Um selo **Resident** aparece no cartão.
- O alfinete fica destacado para indicar o estado residente.
- O contador de capacidade aumenta. No exemplo, ele muda para **Resident 1/12**.
- O item aparece no filtro P0.

![Memória promovida a P0 Resident](/super-memory/p0-resident-memory.png)

P0 é o nível de prioridade permanente. Diferentemente de P1 e P2, que possuem ciclos de vida temporais, um item residente continua disponível até que o usuário remova esse estado.

### Injeção residente em uma nova conversa

Quando o Super Memory executa a recuperação, os itens residentes são injetados independentemente da relevância semântica.

![Memória residente injetada em uma nova conversa](/super-memory/resident-memory-injection.png)

No exemplo, o novo chat contém apenas “Hello”, mas o estado informa:

> Injected 1 memories (1 resident · 0 relevant)

Um item P0 Resident foi injetado mesmo sem outra memória correspondente por relevância. Isso mantém conhecimentos críticos disponíveis em todos os ciclos de recuperação.

### Quando usar P0

Use Resident para informações que devem orientar a IA de forma consistente, como invariantes essenciais de arquitetura, fluxos obrigatórios, regras duradouras de recuperação ou preferências fundamentais.

Evite tornar residentes locais temporários de arquivos, detalhes de uma única tarefa ou registros extensos de baixo valor. Esses itens são injetados no contexto e podem influenciar todas as respostas, portanto devem ser concisos e realmente universais. A interface mostra atualmente capacidade para até 12 itens residentes.

Selecione o alfinete destacado novamente para remover o estado Resident quando o item não precisar mais ser recuperado sempre.

