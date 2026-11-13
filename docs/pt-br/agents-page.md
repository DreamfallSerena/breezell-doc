---
title: Página Agents
description: "A página Agents do Breezell 1.4.58: as janelas novas abrem com as conversas de todos os seus projetos. Como trocar de página, a barra lateral, o agrupamento, adicionar projetos, subagentes, o menu de uma conversa, como continuar daqui as conversas de outros projetos, o lado direito, a barra da conta, espaços de trabalho de vários projetos, os avisos da aprovação automática e os limites atuais."
---

# Página Agents

A página Agents é uma página do Breezell que reúne **as conversas de todos os seus projetos em um só lugar**. À esquerda fica uma barra lateral com cada projeto e suas conversas. À direita fica a mesma área do editor que existe no IDE, onde arquivos, conversas e o navegador integrado podem ficar abertos lado a lado. Você vê o que cada IA está fazendo e qual delas está esperando por você sem abrir antes a janela de cada projeto, e pode continuar uma conversa aqui mesmo.

Este guia descreve o Breezell 1.4.58, em que a página Agents surgiu. Ele explica como trocar de página, cada parte da barra lateral, como adicionar projetos, o menu das conversas, como trabalhar com as conversas de outros projetos, o lado direito, a barra da conta, os espaços de trabalho de vários projetos e os limites atuais.

## Como chegar à página {#open}

A barra de título tem um seletor: **Agents | IDE | Box**. **Agents** abre esta página, **IDE** abre o editor de sempre e **Box** abre a página com os modelos, as opções de recursos e todas as configurações do Breezell.

- As janelas novas abrem por padrão na página Agents.
- Se você fechar uma janela e abri-la de novo, ela volta para a página em que estava quando foi fechada (Agents, IDE ou Box).
- Uma janela aberta para mostrar arquivos, por exemplo quando você abre um arquivo com o Breezell, sempre abre no IDE.
- Para que as janelas novas não abram na página Agents, clique em **Mais** (os três pontos) no canto superior direito da página e desmarque **Mostrar esta página ao abrir uma janela**. Você também pode abrir **Configurações**, pesquisar "Agents page" e desmarcar "Open new windows on the Agents page" (o texto dessa configuração está em inglês).

| Termo | Significado |
| --- | --- |
| Projeto | Uma pasta (ou um espaço de trabalho de várias pastas), neste computador, no WSL ou por SSH. |
| Agente | Uma conversa. Cada conversa da barra lateral é um agente. |
| Subagente | Uma conversa iniciada por outra conversa. Aparece abaixo da que a iniciou. |
| Lado direito | A área do editor à direita da página: arquivos, abas de conversas e o navegador integrado, lado a lado. |

## A barra lateral {#sidebar}

No topo da barra lateral há quatro entradas:

- **Novo chat** inicia uma nova conversa no projeto desta janela.
- **Box** muda para a página Box.
- **Personalizar** abre as regras, as memórias e as habilidades.
- O botão de busca (**Pesquisar conversas**) abre uma caixa de pesquisa. Digite para filtrar as conversas. `Esc` limpa e fecha.

Abaixo fica a seção **Agentes**, que lista as conversas por projeto:

- O projeto desta janela vem primeiro. Depois vêm todos os outros projetos que têm conversas e os que você adicionou, começando pelos usados mais recentemente.
- Cada linha de projeto mostra seu ambiente (por exemplo `WSL: ubuntu` ou `SSH: host`), quando foi usado pela última vez e um **+**. O **+** (dica "Novo agente em {projeto}") inicia uma nova conversa nesse projeto.
- Cada conversa tem um ponto que mostra seu estado: **Trabalhando**, **Aguardando você** ou parada (sem marca). Ao lado aparece há quanto tempo ela foi usada, por exemplo "agora", "5 min" ou "2 h".
- Quando um projeto tem mais conversas do que cabem, clique em **Mostrar mais**.

Para ocultar a barra lateral, clique no botão do canto superior esquerdo dela (**Mostrar ou ocultar a barra lateral**). Enquanto estiver oculta, o topo da página tem um botão para exibi-la de novo e, ao lado, um botão **Novo chat**.

## Agrupar por {#group-by}

O botão de filtro ao lado do título **Agentes** (**Agrupar por**) oferece três formas de organizar a lista:

- **Projeto**: um grupo por projeto. É o padrão.
- **Tempo**: todas as conversas em uma única lista, das mais novas para as mais antigas, cada uma com o projeto a que pertence.
- **Status**: três grupos, **Trabalhando**, **Aguardando você** e **Outros**, para ver de relance qual agente está esperando por você.

## Adicionar projetos {#add}

A barra lateral lista os projetos que têm conversas. Para que uma pasta apareça desde o início, clique no botão de pasta ao lado do título **Agentes** (**Adicionar Projetos…**):

- Quando há apenas um lugar para escolher, o seletor de pastas abre de imediato, e você pode escolher várias pastas de uma vez.
- Quando há vários lugares, um menu aparece primeiro. Em uma janela deste computador ele oferece **Adicionar uma Pasta do Windows…** e, havendo WSL, também **Adicionar uma Pasta do WSL…**. Em uma janela WSL ou SSH ele oferece **Adicionar uma Pasta de {lugar}…**. Os lugares que você já usou (por exemplo um host SSH) aparecem como **Adicionar Projetos de {lugar}…**, onde você marca os projetos dele ou digita um caminho completo. A última entrada é **Conectar a Outro Host…**.

Os projetos adicionados ficam na barra lateral até você removê-los.

Clique com o botão direito na linha de um projeto para ver:

- **Novo agente em {projeto}**: o mesmo que o **+**.
- **Abrir no IDE**: vai para a página IDE. Para outro projeto, mostra a janela própria dele (abrindo-a antes, se não estiver aberta).
- **Remover da barra lateral**: tira o projeto da barra lateral. Nada é excluído. O projeto desta própria janela não pode ser removido.

## O menu de uma conversa {#menu}

Clique com o botão direito em uma conversa da barra lateral. O menu depende do projeto a que ela pertence.

**Uma conversa do projeto desta janela:**

- **Abrir à direita** abre a conversa como uma aba no lado direito.
- **Referenciar conversa** coloca a conversa na caixa de mensagem atual. A IA a lê quando precisar.
- **Renomear**, **Fixar no topo** (**Desafixar** quando já está fixada) e **Favoritar** (**Desfavoritar** quando já é favorita).
- **Exportar chat**. Só é oferecido para as conversas desta janela.
- **Excluir**.

**Uma conversa de outro projeto:**

- **Abrir à direita** e **Referenciar conversa**.
- **Continuar na Janela Dela** segue na janela própria desse projeto.
- **Renomear**, **Fixar no topo**, **Favoritar** e **Excluir**, tudo feito nesse projeto.
- Não há **Exportar chat**.

## Subagentes {#subagents}

Um subagente é uma conversa iniciada por outra conversa. Os subagentes aparecem abaixo da conversa que os iniciou, com um nível de recuo, na ordem em que começaram.

- Uma conversa com subagentes tem um botão na sua linha. Clique nele para **Recolher subagentes**. Enquanto estão recolhidos, aparece quantos são, e um novo clique (**Mostrar subagentes**) os exibe de novo. A página lembra o que você escolheu.
- Clique em um subagente para abri-lo como uma aba no lado direito.

## Conversas de outros projetos {#other}

Clique na conversa de outro projeto na barra lateral e a área principal a mostra. Você pode ler o que ela fez. Para continuar, basta escrever na caixa de mensagem daqui. A conversa continua nesse projeto, e a página mostra o andamento ao vivo.

Tudo o que você faz aqui acontece nesse projeto:

- Enviar uma mensagem e editar uma anterior.
- Aprovar ou recusar o que a IA quer fazer, e **Parar**.
- **Manter tudo** e **Descartar tudo** na barra de alterações dela.

Se esse projeto não tiver uma janela aberta, o Breezell abre uma em segundo plano, sem mostrá-la. Ela se fecha sozinha depois de ficar parada por um tempo: nada em execução, ninguém olhando para ela e nenhum arquivo sem salvar. Para ver a janela dele, clique com o botão direito no projeto e escolha **Abrir no IDE**.

Os links de arquivos nas respostas dela abrem os arquivos desse projeto na linha certa.

Para trabalhar na janela própria do projeto, clique com o botão direito na conversa e escolha **Continuar na Janela Dela**.

## O lado direito {#right}

O lado direito é a área do editor, como no IDE. Arquivos, abas de conversas e o navegador integrado podem ficar abertos lado a lado.

- Arraste uma conversa da barra lateral para o lado direito para vê-la lado a lado, ou use **Abrir à direita** no menu dela.
- O botão no topo da página (**Mostrar painel direito** / **Ocultar painel direito**) oculta e exibe de novo essa área.
- Arraste a borda da barra lateral para mudar a largura e dê um clique duplo na borda para restaurá-la. A borda do lado direito também pode ser arrastada para redimensioná-lo.

## A barra da conta {#account}

Na parte de baixo da barra lateral fica a barra da conta:

- Seu avatar, nome, plano e saldo (membros de equipe não veem o saldo). Clicar abre o painel da conta.
- A engrenagem (**Configurações**) abre as configurações do Breezell.
- O menu **Mais** (os três pontos) tem **Gerenciar plano**, **Atualizações**, **Enviar feedback** e **Sair**.
- Quando você não está conectado, ela mostra **Entrar** e "Entre na sua conta Breezell". Clique para começar a entrar.

## Espaços de trabalho de vários projetos {#workspaces}

Quando você uniu vários projetos em uma só janela (veja [Grupo do projeto e memórias compartilhadas](/pt-br/project-group)), a linha do projeto desta janela diz "Espaço de Trabalho de Vários Projetos" e lista ao lado do nome os projetos que ele contém.

Uma conversa trazida de um projeto membro mostra esse projeto como uma pequena etiqueta colorida antes do título, em vez de "[nome]" dentro do título.

## Avisos da aprovação automática {#auto-approve}

Mesmo com a aprovação automática ativada, algumas ações ainda param e perguntam, e o cartão agora diz por quê, por exemplo: "A aprovação automática está ativada, mas este comando pode apagar uma pasta inteira, ou não dá para saber antes o que ele apaga, então precisa da sua confirmação." Isso acontece com:

- Um comando que pode apagar uma pasta inteira, ou cujo alvo de exclusão não pode ser conhecido de antemão.
- Uma alteração nas regras, habilidades, memórias ou configurações de MCP da IA.
- Uma alteração em arquivos que rodam sozinhos (configuração e hooks do git, configurações e tarefas do espaço de trabalho, perfis do shell).
- Uma alteração em chaves ou na configuração do SSH.
- Excluir um espaço de trabalho, a pasta pessoal ou uma pasta inteira fora do espaço de trabalho.

Essas confirmações aparecem do mesmo jeito quando você continua pela página Agents a conversa de outro projeto.

## Limites atuais {#limits}

- Na conversa de outro projeto, só o texto é enviado. Arquivos e imagens anexados não são enviados.
- Na conversa de outro projeto, o botão **Tentar novamente** de uma resposta com falha não está disponível.
- De uma janela deste computador, não é possível abrir os links de arquivos de um projeto SSH.
- Com o agrupamento por **Status**, os agentes de outros projetos ficam todos em **Outros**, estejam trabalhando ou esperando por você.
