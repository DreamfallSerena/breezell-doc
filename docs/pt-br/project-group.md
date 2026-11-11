---
title: Grupo do projeto e memórias compartilhadas
description: "Reúna num grupo os projetos abertos em janelas separadas para a IA trabalhar entre eles: criar um grupo, a página do grupo e a cápsula acima da caixa de entrada, as quatro permissões da IA, memórias e conversas compartilhadas, entregar uma tarefa, unir em uma janela e o que acontece quando uma janela é fechada."
---

# Grupo do projeto e memórias compartilhadas

O Breezell pode reunir em um grupo **vários projetos abertos cada um na sua janela**. Depois de agrupados, a IA de uma janela pode ler os arquivos dos outros projetos, lembrar das memórias deles, ler as conversas deles e entregar uma tarefa às janelas deles. Você decide, interruptor por interruptor, até onde isso é permitido.

Este guia descreve o Breezell 1.4.55 (os grupos chegaram na 1.4.54; a cápsula e os quatro interruptores são novos na 1.4.55). Ele explica como criar um grupo, onde encontrá-lo, o que cada interruptor faz, como memórias e conversas são compartilhadas, como unir um grupo em uma janela e separá-lo de novo, como se comportam os projetos de outros ambientes (WSL, SSH) e o que acontece quando uma janela é fechada.

## O que é um grupo {#what}

Uma janela do Breezell só alcança a pasta que ela tem aberta. Quando um projeto é dividido em frontend e backend, ou em vários repositórios, a IA muitas vezes vê só metade: ela consegue alterar a chamada no frontend, mas não consegue ler o que mudou no backend. Um grupo conecta janelas que já estão abertas:

- Você não precisa colocar os projetos em uma só pasta nem abri-los como um único workspace de várias raízes.
- Os projetos do grupo podem estar no Windows, no WSL e por SSH. Uma janela continua alcançando um só ambiente, mas um grupo pode trabalhar entre ambientes.
- Nada é movido nem copiado. Um grupo só diz ao Breezell que esses projetos andam juntos.

| Termo | Significado |
| --- | --- |
| Grupo | Um conjunto de projetos com nome. Um projeto pertence a um grupo por vez. |
| Membro | Um projeto do grupo. De qualquer janela, o projeto dessa janela é "este projeto" e os outros são os outros membros. |
| Permissões da IA | Quatro interruptores que dizem o que a IA de um membro pode fazer com os outros: **Ler arquivos**, **Alterar arquivos**, **Compartilhar memórias**, **Compartilhar conversas**. |
| Cápsula | A pequena pílula acima da caixa de entrada que mostra o grupo e as permissões dele. |
| Página do grupo | A aba do editor chamada "Grupo do projeto e memórias compartilhadas", onde tudo sobre o grupo é configurado. |

## Criar um grupo {#make}

### Deixar o Breezell propor {#offer}

Quando uma mensagem sua menciona outro projeto **aberto** — pelo nome, por um caminho, por um arquivo, por uma interface que ele oferece ou por uma porta em que ele roda —, aparece acima da caixa de entrada um cartão com o título "Colocar estes projetos em um grupo?". O motivo aparece abaixo do título, por exemplo: *Você mencionou "breezell-api".*

O cartão nunca bloqueia o turno. A IA responde como de costume e nada muda até você apertar um dos botões.

- A primeira linha está sempre marcada: **este projeto**, a janela em que você está.
- Abaixo estão os outros projetos abertos que o Breezell reconhece. O que você mencionou já está marcado, e você pode marcar mais.
- O **Nome do grupo** pode ser editado. É o nome mostrado no cartão do grupo na lista de projetos. Se o projeto mencionado já pertence a um grupo, o cartão pergunta no lugar "Adicionar os projetos marcados ao grupo "*nome*"?" e não tem campo de nome.
- **Agrupar** reúne os projetos em um grupo e deixa todas as janelas abertas.
- **Agrupar e unir em uma janela** agrupa e une em seguida (veja [Unir em uma janela](#merge)). Quando não é possível unir, o motivo aparece abaixo do botão e o botão fica cinza.
- **Agora não** pula desta vez. O botão redondo de fechar faz o mesmo. A proposta volta na próxima vez que a mesma situação ocorrer.
- **Não perguntar mais sobre estes** lembra desses projetos e para de propor.

Se você agrupar os projetos enquanto uma resposta ainda está sendo escrita, a IA fica sabendo do grupo antes do próximo passo, e você é avisado de que as respostas anteriores não o usaram, para poder perguntar de novo se precisar.

### Criar na lista de projetos {#list}

Acima do explorador há duas abas, **Atual** e **Todos**. Mude para **Todos** para ver a lista de projetos com seus grupos. Abaixo da lista há dois botões de borda tracejada: **Adicionar Grupo** e **Adicionar Projeto**.

- **Adicionar Grupo** cria um grupo vazio chamado "Novo Grupo" e coloca o nome direto em modo de edição. `Enter` confirma, `Esc` cancela.
- Para colocar um projeto em um grupo, arraste a linha dele para o cartão do grupo. Ou clique com o botão direito no projeto, escolha **Mover para o Grupo** e selecione um grupo, ou **Novo Grupo…** para criar um e mover o projeto para ele. Um grupo vazio mostra "Arraste projetos para cá".
- Para tirar um projeto, clique nele com o botão direito, escolha **Mover para o Grupo** e depois **Remover do Grupo**.
- Um cartão de grupo se lê da esquerda para a direita: uma amostra de cor, o nome, um ícone de link (mostrado quando o grupo compartilha memórias), o número de projetos e uma seta. Clique no cabeçalho do cartão para recolher ou expandir. Dê dois cliques no nome para renomear.
- Clique com o botão direito no cabeçalho de um grupo para ver o menu dele: **Renomear Grupo**, **Novo Grupo…**, **Adicionar pastas ao grupo…**, **Compartilhar memórias** (um interruptor) e **Dissolver Grupo**.

**Adicionar pastas ao grupo…** adiciona pastas cujas janelas não precisam estar abertas. As pastas que esta janela alcança, a IA também pode ler.

### Criar na página do grupo {#create}

Quando o projeto atual ainda não está em um grupo, a página do grupo mostra uma única seção, **Novo grupo**:

- Digite um **Nome do grupo** (no início é o nome do projeto).
- Marque as outras janelas abertas que quer trazer e aperte **Criar com as janelas marcadas**. Sem outra janela aberta, a página diz "Não há outras janelas de projeto abertas".
- Ou aperte **Criar só com este projeto** para começar só com este projeto e adicionar os outros depois.
- **Adicionar pastas ao grupo…** adiciona pastas cujas janelas não precisam estar abertas.
- Abaixo, **Outros grupos** lista os grupos que já existem. **Adicionar** coloca este projeto em um deles. **Dissolver Grupo** o remove; o botão passa a dizer "Clique de novo para dissolver" e exige um segundo clique.

## Abrir a página do grupo {#open}

Clique no botão do livro à direita de **Atual** e **Todos**, acima do explorador (marcado com 1). Ele aparece em qualquer uma das abas enquanto a janela tiver um projeto aberto. A dica dele mostra o nome do grupo e quais permissões estão ativas, e a aparência muda quando o projeto está em um grupo.

<BzXiangmuliebiao gaoliang="book" biaoji="1" />

A página abre como uma aba na área do editor, chamada "Grupo do projeto e memórias compartilhadas". Há mais três formas de chegar a ela:

- Execute "Grupo do projeto e memórias compartilhadas" na paleta de comandos.
- Se você tirou a visão Pastas do explorador, a barra de título dela traz o mesmo botão.
- Na cápsula expandida acima da caixa de entrada, aperte **Página do grupo** (veja [A cápsula](#capsule)).

## A página do grupo, seção por seção {#page}

Quando o projeto está em um grupo, a página mostra **Grupo**, **Membros**, **Permissões da IA**, **Conversas do grupo** e **Janela**, e no fim **Sair do grupo** e **Dissolver Grupo**.

**Grupo** mostra o nome. Aperte o lápis (**Renomear**) para alterá-lo; `Enter` confirma, `Esc` cancela.

**Membros** lista cada projeto com o ambiente em que está (Windows, WSL ou SSH), se é um workspace de várias pastas e o estado dele. O ponto à esquerda mostra o estado:

| Ponto | Rótulo | Significado |
| --- | --- | --- |
| Azul | Esta janela | O projeto que você está vendo. |
| Verde | Janela aberta | A janela desse projeto está aberta. |
| Amarelo | Janela fechada, arquivos acessíveis daqui | A janela está fechada, mas esta janela ainda alcança a pasta dele. |
| Cinza | Janela fechada | A janela está fechada e os arquivos dele não são alcançados daqui. |

Um membro com a janela aberta tem **Ir para a janela**, que traz a janela dele para a frente. Um membro cuja janela não está aberta tem **Abrir**, que a abre. Todos os outros membros têm **Remover**. Enquanto a IA de um membro trabalha, uma linha sob o nome dele diz o que ela está fazendo, por exemplo "A IA está alterando código" ou "A IA parou e espera por você na janela dela".

**Adicionar janelas abertas** lista as outras janelas abertas para você marcar, e **Adicionar** as traz. **Adicionar pastas ao grupo…** adiciona pastas que não têm janela.

**Permissões da IA** reúne os quatro interruptores. Eles valem e são salvos no instante em que você os muda. Veja [O que cada interruptor faz](#permissions).

**Conversas do grupo** lista as conversas compartilhadas de cada outro membro, com **Ver**, **Anexar à minha próxima mensagem** e **Continuar aqui** em cada conversa, e **Entregar…** em cada membro cuja janela esteja aberta. É preciso que **Compartilhar conversas** esteja ativado; desativado, a seção só diz o que ligar. Veja [Compartilhar conversas](#chats).

**Janela** traz **Unir em uma janela** ou, quando o grupo já está unido, **Ir para a janela unida** e **Separar em janelas**. Veja [Unir em uma janela](#merge).

**Sair do grupo** tira este projeto do grupo. **Dissolver Grupo** exclui o próprio grupo. Os projetos ficam; apenas deixam de estar agrupados. Exige um segundo clique.

## A cápsula acima da caixa de entrada {#capsule}

Em uma janela cujo projeto divide um grupo com pelo menos outro projeto, uma pequena cápsula aparece acima da caixa de entrada (marcada com 1). Ela não aparece para um grupo que contém só este projeto; a página desse grupo fica a um clique no explorador.

<BzJiaonang gaoliang="jiaonang" biaoji="1" />

Recolhida, a cápsula mostra o nome do grupo, "*N* projetos", quatro ícones pequenos para as quatro permissões (esmaecidos quando a permissão está desativada; passe o cursor sobre um para ver o nome dele e se está ativado ou desativado) e, quando a IA de outra janela está ocupada, uma linha como "breezell-api: A IA está alterando código". Para um grupo unido, ela também diz "unidos em uma janela".

Aperte a cápsula para expandi-la:

- Cada outro membro com seu estado e, se a IA dele está ocupada, o que ela faz. Todo membro tem **Ir para a janela** (ou **Abrir** quando a janela está fechada). **Conversas (*N*)** abre as conversas compartilhadas desse membro e **Entregar…** entrega uma tarefa a ele; ambos aparecem só enquanto **Compartilhar conversas** está ativado, e **Entregar…** só enquanto a janela desse membro está aberta.
- **Permissões da IA** como quatro interruptores que você pode mudar ali mesmo. Quando os quatro estão desativados, a cápsula avisa: o grupo então só organiza a lista de projetos e a IA de um projeto não sabe nada dos outros.
- **Página do grupo** abre a página do grupo.

O que a cápsula mostra da IA de outra janela é geral por padrão ("A IA está lendo arquivos", "A IA está executando um comando"). Nomes de arquivos, comandos e títulos de conversas aparecem só enquanto **Compartilhar conversas** está ativado.

## O que cada interruptor faz {#permissions}

Um grupo novo começa com **Ler arquivos** ativado e os outros três desativados.

**Ler arquivos.** A IA pode ler e pesquisar nos arquivos dos outros membros. Ela sabe quais projetos estão no grupo e como chegar a eles, então você pode falar simplesmente do "backend" e ela procura lá. Desativado, o grupo só organiza a lista de projetos; memórias e conversas continuam compartilhadas conforme os próprios interruptores. Desativá-lo também desativa **Alterar arquivos**.

**Alterar arquivos.** A IA também pode alterar os arquivos dos outros membros e executar comandos nas pastas deles, com as mesmas aprovações das alterações deste projeto, e as alterações podem ser desfeitas. Ativá-lo também ativa **Ler arquivos**. Vale só para projetos que esta janela alcança; para um projeto de outro ambiente, a alteração é entregue no lugar (veja [Projetos de outros ambientes](#environments)). Ative só quando você aceitar que a IA mexa em vários projetos ao mesmo tempo.

**Compartilhar memórias.** Os projetos lembram das memórias uns dos outros. Veja [Compartilhar memórias](#memories). O mesmo interruptor está no menu de clique direito do cabeçalho de um grupo na lista de projetos.

**Compartilhar conversas.** A IA de cada janela pode ler as conversas recentes das janelas dos outros membros e sabe o que a IA deles está fazendo. Você também pode navegar por essas conversas, levar uma para uma mensagem e entregar uma tarefa. Veja [Compartilhar conversas](#chats). Ao desativar o interruptor, essas partes da página e da cápsula ficam ocultas ou desabilitadas, e a IA é avisada uma vez de que as conversas não são mais compartilhadas.

Cada interruptor pertence ao grupo, não a uma janela, então vale para todos os membros.

## Compartilhar memórias {#memories}

Com **Compartilhar memórias** ativado, os projetos do grupo lembram das memórias uns dos outros. Quando a IA de uma janela consulta o que já sabe, ela também encontra memórias aprendidas nos outros projetos do grupo. Cada memória continua com o projeto que a aprendeu: nada é copiado, e ela deixa de ser lembrada nos outros assim que você desativa o interruptor ou o projeto sai do grupo.

Em **Box**, em **Super Memory** e depois **Biblioteca de memória**, aparece um filtro de origem quando memórias são compartilhadas: **Todas as fontes**, **Este projeto** e **Projetos do grupo**. Uma memória que veio de outro projeto é marcada com "De *nome do projeto*". Uma memória de outro projeto não pode ser fixada aqui; a fixação pertence ao projeto que a aprendeu.

## Compartilhar conversas {#chats}

Com **Compartilhar conversas** ativado, cada membro mantém uma lista das conversas recentes que os outros podem ver, e a IA das outras janelas é informada delas. Ela lê uma quando precisa.

Você também pode usar as mesmas listas, pela página do grupo ou por **Conversas (*N*)** na cápsula. Na cápsula, você escolhe primeiro um projeto e depois uma conversa. Para cada conversa há três opções:

- **Ver** abre a conversa como uma aba somente leitura na área do editor, uma aba por conversa. Ela mostra a conversa como estava quando você a abriu; escolha **Ver** de novo para atualizá-la. As chamadas de ferramentas são listadas por nome e entrada, sem os resultados. Fechar a aba nunca pede para salvar.
- **Anexar à minha próxima mensagem** coloca uma etiqueta dessa conversa na caixa de entrada. A IA a lê quando precisa.
- **Continuar aqui** inicia uma conversa nova nesta janela com essa conversa anexada, para você seguir de onde a outra parou.

Se uma conversa não puder mais ser lida, ou não estiver mais entre as compartilhadas, você é avisado.

### Entregar uma tarefa {#handoff}

**Entregar…** passa uma tarefa à janela de outro membro. Está na cápsula e na página do grupo, para membros cuja janela esteja aberta, e só enquanto **Compartilhar conversas** estiver ativado.

1. Escolha o projeto, se você não começou por um membro. Só as janelas abertas são oferecidas.
2. Digite no que ele deve trabalhar.
3. Um aviso diz "Entregue a *projeto*, trabalhando…" com um botão "Ir para *projeto*" para a janela dele. A IA da outra janela começa a trabalhar lá.
4. Quando termina, você recebe "*projeto* terminou: *a resposta dele*" ou "*projeto* não terminou: *o motivo*". Se ele precisar de você no meio do caminho, o aviso diz "*projeto* está esperando por você; veja a janela dele."

A resposta também é passada a esta conversa, então a IA daqui pode usá-la na sua próxima mensagem.

## Unir em uma janela {#merge}

Unir abre os projetos do grupo como **uma janela com várias pastas**. As janelas próprias deles fecham e as conversas são copiadas, cada título marcado com o projeto de onde veio. Comece por **Unir em uma janela** na seção **Janela** da página do grupo, ou por **Agrupar e unir em uma janela** no cartão de proposta. Você é convidado a confirmar: "Unir *projetos* em uma janela? As janelas deles fecham e as conversas são copiadas para a nova." Se a IA de algum membro estiver rodando, unir fecha a janela dele e a interrompe; você é avisado antes.

Depois, a cápsula diz "unidos em uma janela" e a página do grupo mostra "A janela do grupo "*nome*", unida" com os membros e **Separar em janelas**, que desfaz o grupo e traz de volta as janelas separadas. Se você abrir sozinho um dos projetos membros enquanto a janela unida estiver aberta, a página dele diz "Este grupo está aberto agora como uma só janela." e oferece **Ir para a janela unida**.

Em uma janela unida, a IA nomeia um arquivo como "*nome da pasta*/...". Os caminhos relativos que não começam com um nome de pasta, e o terminal, começam na **Pasta em foco**; ela acompanha os arquivos em que a IA trabalha, e você pode escolher outra clicando nela.

É possível unir nestes casos:

- Todos os projetos estão neste computador.
- Todos os projetos estão na mesma distribuição do WSL.
- Todos os projetos estão no mesmo host SSH.
- Projetos do Windows junto com os de uma distribuição do WSL. A janela unida é uma janela do WSL e as pastas do Windows entram pelas unidades que o WSL monta: o acesso a arquivos é mais lento e a observação de arquivos pode atrasar. Você é informado de quais projetos isso afeta.

Não é possível unir qualquer outra mistura de ambientes (por exemplo SSH junto com um projeto local, ou duas distribuições do WSL diferentes), um projeto que já é um workspace de várias pastas, nem um grupo com menos de dois projetos. O motivo aparece abaixo do botão de unir e o grupo continua funcionando entre janelas separadas.

## Projetos de outros ambientes {#environments}

Uma janela alcança um só ambiente. Mesmo assim, um grupo pode conter ao mesmo tempo um projeto do Windows, um do WSL e um do SSH.

- **Ler.** Para um projeto de outro ambiente, a janela própria desse projeto lê e pesquisa por você, então a janela dele precisa estar aberta. Se não estiver, você recebe um aviso com um botão **Abrir** em vez de uma resposta vazia.
- **Alterar.** Uma alteração em um projeto de outro ambiente nunca é executada a partir desta janela. A IA recebe uma recusa e a alteração é entregue para lá, para ser feita na janela própria desse projeto, com as aprovações dessa janela. **Entregar…** é o jeito de fazer isso você mesmo.
- **Unir.** Só as combinações listadas em [Unir em uma janela](#merge).

## Quando uma janela é fechada {#closed}

Fechar uma janela nunca tira o projeto dela do grupo. O grupo é guardado pelo Breezell neste computador, e o membro continua na lista com outro estado.

- Se esta janela ainda alcança a pasta do projeto fechado, o ponto fica amarelo: "Janela fechada, arquivos acessíveis daqui". A IA continua podendo ler os arquivos (e alterá-los, quando **Alterar arquivos** está ativado). **Entregar…** não é oferecido, porque precisa que a outra janela esteja aberta.
- Se esta janela não alcança a pasta, o ponto fica cinza: "Janela fechada". Quando a IA tenta alcançá-lo, você recebe um aviso: "A janela de *projeto* não está aberta, então esta janela não alcança os arquivos dele." com um botão **Abrir *projeto***. Você também pode apertar **Abrir** na página do grupo ou na cápsula, ou **Remover** para tirar o projeto.
- A IA de uma janela fechada deixa de mostrar atividade na cápsula.

## Sair, remover, dissolver {#leave}

- **Remover** tira um membro do grupo. O grupo continua.
- **Sair do grupo** tira este projeto do grupo.
- **Dissolver Grupo** exclui o próprio grupo. Os projetos, as conversas e os arquivos ficam; apenas deixam de estar agrupados. Exige um segundo clique.

## Limites {#limits}

- Um grupo é guardado só no Breezell deste computador. Não é gravado nas pastas dos seus projetos, não é sincronizado com seus outros dispositivos e não é compartilhado com ninguém.
- Um projeto pertence a um grupo por vez.
- Um grupo não muda as configurações, os modelos nem as permissões de ferramentas dos projetos. As permissões de ferramentas continuam vindo de Opções de Recursos. Com **Acesso a Arquivos Externos** desativado, os projetos do grupo que esta janela alcança continuam legíveis.
- Se a IA alcança um membro depende da janela e do ambiente dele; veja [Quando uma janela é fechada](#closed).

## Solução de problemas {#trouble}

| O que você vê | O que significa | O que fazer |
| --- | --- | --- |
| Um projeto é mencionado e o cartão não aparece | Esse projeto não está aberto, ou você já escolheu "Não perguntar mais sobre estes" para ele. | Abra a janela dele ou agrupe à mão na lista de projetos. |
| Sem cápsula acima da caixa de entrada | O projeto não está em um grupo, ou o grupo contém só este projeto. | Adicione outro projeto ou abra a página do grupo pelo botão do livro. |
| O ponto de um membro está cinza | A janela está fechada e esta janela não alcança a pasta dele. | Aperte **Abrir**. |
| A IA não consegue ler um projeto | **Ler arquivos** está desativado, ou a janela de um projeto de outro ambiente está fechada. | Ative **Ler arquivos** ou aperte **Abrir**. |
| Uma alteração em um projeto de outro ambiente é recusada | Lá, as alterações nunca são executadas a partir desta janela. | Use **Entregar…** ou faça a alteração na janela desse projeto. |
| A seção de conversas pede para ativar algo | O grupo não compartilha conversas. | Ative **Compartilhar conversas**. |
| Falta **Entregar…** em um membro | A janela dele não está aberta, ou **Compartilhar conversas** está desativado. | Abra a janela dele ou ative o interruptor. |
| O botão de unir está cinza | Ambientes diferentes, um workspace de várias pastas ou menos de dois projetos. | Leia o motivo abaixo do botão; o grupo funciona igual sem unir. |
| O cartão do grupo não aparece na lista de projetos | Só a aba **Todos** mostra os grupos. | Mude para **Todos**. |

## Perguntas frequentes {#faq}

**Os projetos precisam ficar em uma só pasta?**
Não. Agrupar nunca move, copia nem une seus arquivos.

**Qual a diferença para um workspace de várias raízes?**
Um workspace de várias raízes coloca pastas em um único workspace. Um grupo conecta janelas que continuam separadas e pode abranger Windows, WSL e SSH. Unir é opcional e termina como uma janela com várias pastas.

**Agrupar aumenta o uso de tokens?**
A IA pode alcançar mais arquivos, então pode ler mais quando seu pedido precisar. Agrupar por si só não coloca o conteúdo de outros projetos em cada turno.

**Outras pessoas podem ver meu grupo?**
Não. Os grupos ficam nas configurações do Breezell neste computador.

**Quantos projetos cabem em um grupo?**
Não há limite fixo. Um grupo compensa quando você trata os projetos como um só trabalho; de dois a cinco costuma ser o ideal.

**Dissolver um grupo exclui os projetos?**
Não. Os projetos, as conversas e os arquivos ficam; apenas deixam de estar agrupados.
