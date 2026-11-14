---
title: Git
description: "Git no Breezell 1.4.59: commit, log, guardados, janela de branches e push no estilo do IntelliJ IDEA, na página Agents e no IDE. Como abrir, qual projeto ele mostra, marcar arquivos e trechos para o commit, alterações agrupadas por conversa de IA, conflitos de mesclagem, o log e o rebase interativo, os guardados, o push, a janela de branches, Atualizar projeto, a aba Git e as teclas do IDE, e os limites atuais."
---

# Git

O Breezell 1.4.59 traz o Git no estilo do IntelliJ IDEA: marque os arquivos para o commit, ou só partes de um arquivo; os arquivos alterados por conversas de IA ficam agrupados por conversa; veja o gráfico de branches, guarde alterações de lado, veja o que um push envia antes de enviar, faça um rebase interativo e use uma janela de branches para fazer checkout, comparar e mesclar. Funciona na [página Agents](/pt-br/agents-page) e no IDE.

| Termo | Significado |
| --- | --- |
| Marcar | Incluir no próximo commit. As alterações desmarcadas ficam na árvore de trabalho e não entram no commit. |
| Trecho | Um pedaço contínuo de alteração em um arquivo. Você pode marcar só alguns trechos de um arquivo. |
| Guardar | Pôr as alterações de lado para a árvore de trabalho ficar limpa, e recuperá-las depois. |
| Upstream | O branch remoto que o branch atual acompanha, por exemplo `origin/main`. |

## Como abrir {#open}

- **Página Agents:** «Git» no alto da lista à esquerda; o número ao lado é quantos arquivos deste projeto foram alterados. Clique para abrir o Git no centro da página; a seta no alto à esquerda («Voltar à conversa») ou `Esc` leva você de volta.
- **IDE:** execute `Git: Commit…`, `Git: Push…`, `Git: Update Project`, `Git: Show Log`, `Git: Show Shelf` ou `Git: Branches…` na paleta de comandos (`Ctrl+Shift+P`) para abrir uma aba chamada «Git», igual à da página Agents.
- Onde quer que você esteja, `` Alt+` `` abre «Operações do Git»: «Commit…», «Push…», «Atualizar projeto», «Branches…», «Log», «Guardados», «Fetch».

## Qual projeto ele mostra {#project}

- O Git acompanha a conversa que você está vendo: para uma conversa do projeto desta janela é o repositório dele; para a conversa de outro projeto é o repositório desse projeto, e o nome dele aparece no alto (dica «Git de "*nome do projeto*", da janela dele»). Projetos WSL e SSH funcionam do mesmo jeito.
- Quando esse projeto não tem janela aberta, o Breezell abre uma em segundo plano sem mostrá-la; enquanto isso a página diz «Conectando à janela de "*nome do projeto*"…».
- Quando um projeto tem vários repositórios, clique no nome do repositório («Trocar de repositório») para escolher um.
- Uma pasta que ainda não é um repositório Git mostra «Este projeto ainda não é um repositório Git.» e um botão «Inicializar repositório».

A linha do alto, da esquerda para a direita:

- O nome do branch: abre a [janela de branches](#branches). O status de sincronização ao lado é o mesmo da barra de status do IDE e faz o mesmo quando clicado.
- «Atualizar projeto» (a seta para baixo): veja [Atualizar projeto](#update).
- «Push…» (a seta para cima): veja [Push](#push).
- «Mais ações do Git» (⋯): o mesmo que o menu «⋯» do Controle de Código-Fonte do IDE, por exemplo pull, remotos, tags e worktrees.

Abaixo ficam três abas: «Commit» (com o número de alterações), «Log» e «Guardados».

## Commit {#commit}

### Marcar o que vai no commit {#check}

- Cada arquivo tem uma caixa de seleção: «Marcar: incluir no próximo commit», «Desmarcar: deixar fora do próximo commit». A caixa do título de um grupo marca ou desmarca o grupo todo; quando só alguns arquivos estão marcados, ela mostra um traço.
- Para fazer commit de só parte de um arquivo, clique na seta antes do nome («Mostrar trechos (commit de parte do arquivo)») e marque os trechos que quiser («Marcar este trecho: incluir no próximo commit»). Arquivos novos, excluídos e binários não têm trechos e são marcados inteiros.
- Clique no nome de um arquivo para ver as alterações dele: no lado direito da página, na página Agents; na área do editor, no IDE.
- Clique com o botão direito em um arquivo para as ações de arquivo do próprio IDE (como descartar alterações), mais «Guardar…» e «Mostrar histórico» (o Log, só com os commits desse arquivo).

### Grupos {#changelists}

- **Agent · *título da conversa*:** os arquivos alterados por conversas de IA, um grupo por conversa. Um arquivo alterado por várias conversas fica no grupo da mais recente. Assim você pode fazer commit só do que uma conversa fez.
- **Alterações:** os outros arquivos alterados.
- **Arquivos sem controle de versão:** arquivos novos que o Git ainda não acompanha, recolhidos no início.

### Mensagem e commit {#message}

- Escreva a mensagem em «Mensagem do commit» e clique em «Fazer commit» (`Ctrl+Enter`, no macOS `Cmd+Enter`). «Commit e push…» abre o [Push](#push) depois do commit.
- Os dois botões ao lado da caixa: «Histórico de mensagens de commit» (escolha uma mensagem que você já usou) e «Escrever a mensagem de commit com IA (a partir das alterações marcadas)».
- «Alterar o último commit»: quando marcado, as alterações marcadas vão para o último commit em vez de um novo, e a mensagem dele vem para a caixa.
- «Guardar alterações…»: põe os arquivos marcados (todas as alterações, se nada estiver marcado) nos [guardados](#shelf).
- «Revisão por IA das alterações marcadas»: abre uma nova conversa com o pedido de revisão já na caixa de mensagem, para você ler e enviar. A IA aponta problemas e não altera arquivos.

### Conflitos de mesclagem {#conflicts}

Quando uma mesclagem, um rebase, um cherry-pick ou uma reversão encontra conflitos, o alto da aba «Commit» mostra «Conflitos de mesclagem» com o número de arquivos:

- «Resolver…» ao lado de cada arquivo abre o editor de mesclagem. Os arquivos de outro projeto são resolvidos na janela dele («Resolver na janela dele…»).
- «Deixar a IA resolver os conflitos»: abre uma nova conversa pedindo à IA que mantenha o que os dois lados devem manter e remova as marcas de conflito. Ela não faz commit e não continua a mesclagem nem o rebase sozinha.
- Quando tudo estiver resolvido, clique em «Continuar». Um rebase ou cherry-pick também pode «Pular» o commit atual; «Abortar» volta ao que era antes de começar.

## Log {#log}

- Os commits com o gráfico de branches; rolando para baixo carregam-se os mais antigos.
- Filtros no alto: «Texto ou hash», «Autor», «Caminho», e de qual branch mostrar o histórico («Histórico de qual branch»): «Todos os branches», «Branch atual» ou um branch.
- Clique em um commit para ver os detalhes e os arquivos alterados ao lado da lista; clique em um arquivo para ver o que esse commit alterou nele. «Comparar com o local» lista, em vez disso, os arquivos que diferem entre esse commit e sua árvore de trabalho.

Clique com o botão direito em um commit:

| Item | O que faz |
| --- | --- |
| «Copiar número da revisão» | Copia o hash do commit. |
| «Checkout desta revisão» | Faz checkout desse commit (sem branch). |
| «Novo branch aqui…», «Nova tag aqui…» | Cria um branch ou uma tag começando nesse commit. |
| «Cherry-pick» | Aplica as alterações desse commit ao branch atual. |
| «Reverter commit» | Adiciona um commit que desfaz as alterações desse commit. |
| «Redefinir o branch atual para aqui» | «Soft: manter as alterações, marcadas», «Mixed: manter as alterações, desmarcadas», «Hard: descartar as alterações» (pergunta de novo). |
| «Desfazer commit» | Só no commit mais novo do branch atual: remove-o, as alterações dele voltam marcadas e a mensagem volta para a caixa. |
| «Editar mensagem do commit…», «Excluir commit…» | Muda a mensagem desse commit, ou o remove, com um [rebase interativo](#rebase). |
| «Rebase interativo a partir daqui…» | Veja [Rebase interativo](#rebase). |

Quando você escolhe «Comparar com "*branch atual*"» na [janela de branches](#branches), o Log mostra só os commits que esse branch tem e o atual não («Em "*branch*", não em "*branch atual*"»); «Voltar ao branch» traz de volta o Log de sempre.

### Rebase interativo {#rebase}

- «Rebase interativo a partir daqui…» no Log lista todos os commits desse até o mais novo.
- Escolha o que fazer com cada um: «Pick», «Mudar mensagem», «Squash», «Fixup» ou «Excluir», e mude a ordem com «Mover para cima» e «Mover para baixo». Em mudar mensagem e squash você pode escrever ali mesmo a «Nova mensagem» ou a «Mensagem do commit combinado».
- Clique em «Iniciar rebase». As alterações que você não fez commit são postas de lado antes e voltam depois. Se surgirem conflitos, trate-os como em [Conflitos de mesclagem](#conflicts).

## Guardados {#shelf}

- Lista as alterações guardadas e os arquivos delas.
- «Recuperar»: traz as alterações de volta para a árvore de trabalho e as tira dos guardados.
- «Aplicar e manter guardado»: traz de volta e mantém uma cópia nos guardados.
- «Excluir»: joga fora (pergunta de novo; as alterações excluídas se perdem).

## Push {#push}

- «Push…» lista primeiro os commits que serão enviados. Quando o branch atual ainda não tem branch remoto, ele é marcado como «branch novo».
- Quando o remoto tem commits que não estão aqui, avisa que o push pode ser recusado; você pode clicar antes em «Atualizar projeto».
- Opções: «Enviar tags» e «Push forçado (with lease)», que força o push só enquanto o remoto ainda está onde você o viu pela última vez, então nunca sobrescreve commits que alguém acabou de enviar.
- Quando não há nada para enviar, diz «Nada para enviar: o branch está igual ao remoto.»

## Janela de branches {#branches}

Clique no nome do branch no alto, execute `Git: Branches…` ou escolha «Branches…» em «Operações do Git»:

- As ações comuns vêm primeiro: «Atualizar projeto», «Commit…», «Push…», «Novo branch…», «Checkout de tag ou revisão…».
- Depois «Recentes», «Locais» e «Remotos». A estrela ao lado de um branch local é «Adicionar aos favoritos»; os favoritos vêm primeiro entre os branches locais.
- Um branch mostra a que distância está do remoto (↑ commits ainda não enviados, ↓ commits ainda não trazidos); «upstream removido» quando o branch remoto dele foi excluído.

Escolha um branch para ver o que você pode fazer com ele:

- «Checkout»: um branch remoto é baixado como um branch local com o mesmo nome.
- «Novo branch a partir de "*branch*"…», «Checkout e rebase sobre "*branch atual*"», «Comparar com "*branch atual*"», «Mostrar diferenças de "*branch*" com a árvore de trabalho».
- «Rebase de "*branch atual*" sobre "*branch*"», «Mesclar "*branch*" em "*branch atual*"».
- «Renomear…» e «Excluir»; para um branch remoto, «Excluir do remoto». Excluir um branch que não foi totalmente mesclado pergunta mais uma vez.

Quando um checkout sobrescreveria suas alterações locais, o Breezell oferece «Smart Checkout»: guarda as alterações, faz o checkout e as traz de volta.

## Atualizar projeto {#update}

«Atualizar projeto» faz fetch e depois põe o branch atual em dia com o upstream; as alterações que você não fez commit ficam de lado nesse meio-tempo e voltam depois. Termina com «Atualizado: chegaram N commits.» ou «Já está atualizado.»

Por padrão ele mescla. Para fazer rebase no lugar, busque `breezell.git` em Configurações e ponha Update Method em rebase.

## Teclas no IDE {#keys}

Para as teclas de Git do IntelliJ IDEA, busque `breezell.git` em Configurações e marque Idea Keymap (desativado por padrão):

| Tecla | Ação |
| --- | --- |
| `Ctrl+K` | Commit |
| `Ctrl+Shift+K` | Push |
| `Ctrl+T` | Atualizar projeto |
| `Alt+9` | Log |
| `Alt+0` | Commit |

No macOS, `Cmd` ocupa o lugar de `Ctrl`; Log e Commit são `Cmd+9` e `Cmd+0`, e «Operações do Git» é `Ctrl+V`. Com essas teclas ativadas, elas substituem as sequências `Ctrl+K` do próprio IDE e o `Ctrl+T`. `` Alt+` `` não precisa de configuração e sempre funciona.

## Limites atuais {#limits}

- Arquivos muito grandes e arquivos binários não mostram suas alterações; arquivos grandes demais não podem ser divididos em trechos e são marcados inteiros.
- Quando muitíssimos arquivos foram alterados, só parte deles é listada e o resto é contado; a lista completa está no Controle de Código-Fonte do IDE.
- Não é possível fazer um rebase interativo quando há commits de mesclagem no intervalo; o primeiro commit não pode ser combinado com um anterior (squash ou fixup) e não pode ser desfeito.
- O Git de outro projeto passa pela janela desse projeto. Quando essa janela foi fechada, a página diz «A janela de "*nome do projeto*" foi fechada.»; clique em «Tentar novamente» para conectar de novo.
- O controle de código-fonte que não é Git tem uma visão simples: «Mensagem do commit», «Fazer commit» e a lista de alterações.
