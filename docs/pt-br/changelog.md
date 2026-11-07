---
editLink: false
next: false
---

# Registro de alterações

## 1.4.52 · Hot Update · 2026-11-07

Uma atualização rápida para a 1.4.5, sem precisar reinstalar: o Breezell a oferece sozinho, ou verifique em "Atualizações" no pé da barra lateral do Box.

### Barra de título

- **A caixa de pesquisa agora é uma cápsula viva:** a caixa de pesquisa no meio da barra de título é uma cápsula que se ajusta ao que mostra. Em repouso ela traz a pesquisa e o sino de notificações, como antes, e um clique ainda abre a pesquisa. Os textos seguem o idioma do Breezell.
- **O que a IA está fazendo, num relance:** enquanto uma conversa está em andamento, a cápsula mostra:
  - o ícone do modelo que está trabalhando nela;
  - a etapa atual: "Pensando", "Escrevendo", "Editando app.ts", "Lendo README.md", "Pesquisando no código", "Executando um comando", "Usando uma ferramenta", "Aguardando subtarefas", "Condensando o contexto" ou "Reconectando";
  - há quanto tempo o turno está rodando;
  - um número como "+2" quando várias conversas estão trabalhando. A que você tem aberta vem primeiro se estiver entre elas.
  - Etapas que se sucedem rápido não piscam: cada texto fica um instante.
- **Aguardando você:** quando a IA para esperando sua resposta ou aprovação, a cápsula mostra "Aguardando você" ("3 conversas aguardando você" quando são várias), e "Ver" abre essa conversa. Uma conversa que espera por você vem antes do trabalho em andamento.
- **Concluído, ou algo deu errado:** um turno concluído mostra "Concluído" e quanto tempo levou ("em 1:23") por alguns segundos. Um turno que terminou com erro mostra "Algo deu errado", com "Ver" para abrir a conversa. Um turno que você mesmo interrompe não mostra nada.
- **Tarefas de build e de teste:** uma tarefa que você executa, como um build ou os testes, mostra "Executando build" com um relógio. Ao terminar, a cápsula mostra "build concluída" com o tempo, ou "build falhou" com o código de saída e "Ver" para abrir o terminal dela. Tarefas de observação que continuam em segundo plano não aparecem, nem uma tarefa que você interrompe.
- **Uma tarefa junto com a IA:** quando uma tarefa roda enquanto a IA trabalha, a tarefa vira um pequeno ponto à direita da cápsula. Passe o ponteiro para ver o nome; clique para abrir o terminal.
- **Atualizações e notificações num só lugar:**
  - O progresso da atualização para uma nova versão (verificação, download, instalação) e o botão de uma atualização disponível agora aparecem na cápsula, em vez de um indicador próprio ao lado.
  - O sino de notificações fica no fim da cápsula, e o painel de notificações se abre a partir da cápsula e volta para ela. Com a redução de movimento ativada, o painel simplesmente aparece.
  - Enquanto a barra de depuração ocupa esse lugar, a cápsula fica em repouso para que os botões de depuração continuem à mão.
- **Executando como administrador:** agora um escudo depois do nome do espaço de trabalho indica isso, em vez de um texto que empurrava o nome.
- **Teclado:** Enter ou Espaço no sino abrem as notificações em vez da pesquisa, e os botões da cápsula também funcionam com Enter e Espaço.

### A IA editando arquivos

- **Um caminho um pouco errado não termina mais num erro de leitura:** quando a IA editava um arquivo num caminho que não existe, por exemplo sem uma pasta, ela recebia só o erro de leitura e dizia que não conseguia abrir o arquivo, embora o Explorador o mostrasse; muitas vezes parecia que só reiniciar ajudava. Agora:
  - A IA fica sabendo que o caminho não existe e quais arquivos do seu espaço de trabalho têm esse nome, e edita o certo.
  - Quando não há arquivo com esse nome no espaço de trabalho, ela pergunta onde o arquivo está em vez de tentar outras pastas ao acaso.
  - Quando queria criar um arquivo novo, ela o cria.
- **Windows: edições da IA que falhavam sem motivo agora passam:** no Windows, algumas edições e arquivos novos da IA eram recusados mesmo sem nada de errado. Agora passam do jeito que a IA os escreveu. Antes:
  - a edição era tratada como se o conteúdo tivesse sido cortado, e a IA a dividia várias vezes em edições menores que falhavam do mesmo jeito;
  - ou a chamada era recusada por indicar dois arquivos diferentes, ou a mudança ia para um caminho que não podia ser aberto.

## 1.4.51 · Hot Update · 2026-11-06

Uma atualização rápida para a 1.4.5, sem precisar reinstalar: o Breezell a oferece sozinho, ou verifique em "Atualizações" no pé da barra lateral do Box.

### Chat

- **Conversas longas com muitas capturas de tela continuam:** depois de muitas capturas de tela em uma conversa, as mensagens podiam parar de passar, com `NGHTTP2_ENHANCE_YOUR_CALM` no erro enquanto o diagnóstico culpava a rede. Agora:
  - Imagens coladas antes não pesam mais nas mensagens seguintes, então a conversa pode continuar.
  - Quando a IA precisa olhar de novo uma imagem anterior, ela a abre de novo em vez de descrevê-la de memória.
  - As imagens que você anexa a uma mensagem são sempre enviadas, assim como as imagens de uma mensagem que você edita ou envia de novo.
- **O mesmo para imagens que a IA abriu:** uma imagem que a IA abriu para olhar não fica mais junto com o resto da conversa; ela a abre de novo quando precisa. Quando abre várias imagens de uma vez, ela vê cada uma delas.
- **Tabelas se ajustam à largura do chat:** as tabelas nas respostas tinham a largura da linha mais longa e precisavam ser roladas para os lados. Agora elas quebram linha na largura do chat:
  - Os cabeçalhos só quebram entre palavras, e rótulos em CJK ficam inteiros.
  - Caminhos e nomes em uma tabela não são espremidos em uma letra por linha.
  - Uma tabela só rola para os lados quando uma única palavra é mais larga que o chat.
- **Um título em negrito não gruda mais no parágrafo de cima:** um título em negrito em uma linha própria de uma resposta, como "(2) ..." ou "(3) ...", ficava colado no fim do parágrafo anterior, e o espaço antes de um trecho em negrito no meio de uma frase sumia ("this is **important**" virava "this isimportant"). Os dois foram corrigidos.
- **Títulos em negrito ficam no lugar enquanto a resposta chega:** enquanto uma resposta ainda estava em streaming, um título em negrito em uma linha própria ficava a um espaço inteiro do seu texto até a resposta terminar. Agora ele já tem o espaçamento final durante o streaming, também no texto de pensamento.
- **Arrastar o divisor fica mais fluido em conversas longas:** redimensionar o chat não fica mais lento conforme a conversa cresce.

### Box

- **Sem página do Box em branco na inicialização:** se você fechava o Breezell na página do Box, ele abria da próxima vez só com a navegação à esquerda e nada ao lado. Agora ele abre na página em que você parou.

### Interface

- **A prévia "Nova interface Breezell" é uma miniatura da área de trabalho:** a prévia no cartão "Nova interface Breezell" do painel Tema e Aparência da barra de título eram três blocos cinza. Agora é uma miniatura nas cores do seu tema: a barra de título com menus, a barra de atividades, o Explorador, o editor com abas, código, o cursor e o minimapa, o terminal, o chat do Breezell e a barra de status. Ativada, as partes são cartões flutuantes arredondados; desativada, são quadradas, rentes e divididas por linhas finas, então é fácil distinguir as duas.
- **Todas as alças de divisor têm o mesmo brilho:** a alça de três pontos no divisor ao lado do Explorador parecia mais clara que as outras. Agora todas têm a mesma aparência; arrastar não mudou.
- **Realce do divisor na sua cor de destaque:** depois que você escolhe uma "Cor de destaque" no painel Tema e Aparência, passar o mouse sobre um divisor ou arrastá-lo mostra uma linha de realce nessa cor, e redefinir a cor de destaque a remove. O realce padrão de divisor de cada tema vem com o próximo instalador completo.

### WSL, SSH e remoto

- **A IA consegue abrir os arquivos que o Breezell salva para ela em janelas WSL e SSH:** o Breezell salva coisas como saídas longas de terminal e imagens de ferramentas MCP como arquivos para a IA ler quando precisar. Em janelas WSL e SSH a IA não conseguia abri-los. Agora:
  - Eles ficam na pasta `.breezell/tool-results` do espaço de trabalho, onde a ferramenta de leitura, o terminal e os scripts os alcançam.
  - O Git e a busca ignoram essa pasta por conta própria, então ela fica fora do `git status`, dos commits e dos resultados de busca, e o seu `.gitignore` não precisa mudar.
  - Sem pasta aberta, eles ficam na sua pasta pessoal, como antes.
- **A visão Portas não usa mais memória com o tempo:** enquanto a visão Portas estava aberta, cada atualização da lista ocupava um pouco mais de memória. Isso não acontece mais.

### Modelos

- **OpenRouter Auto Router:** `openrouter/auto` deixa o OpenRouter escolher o modelo, e cada requisição é cobrada pelo modelo escolhido, então não há preço de tabela. Entrada de imagem, vídeo e áudio, ferramentas, contexto de 2M. O pensamento começa desativado; ativado, pode ser definido como baixo, médio ou alto.
- **LiquidAI LFM3-1.7B:** no OpenRouter como `liquid/lfm-3-1.7b` e sua rota gratuita `:free`. Contexto de 262.144, até 8.192 tokens de saída, ferramentas, entrada de texto. O raciocínio está sempre ativado, sem níveis de esforço.

## 1.4.5 · 2026-11-06

### Destaques

- **Plugins:** Instale plugins do mercado em Box ▸ Plugins, ou escreva o seu. Um plugin só pode usar as permissões que declara e que você permite.
- **Experiências do Super Memory mais confiáveis:** Abordagens que não funcionaram não são mais salvas como experiências confiáveis.
- **O login não cai mais sem motivo:** Uma rede perdida, um site inacessível, um erro de proxy, várias janelas abertas ou um relógio do computador errado não desconectam mais você. Um sexto dispositivo é apenas recusado; a conta não é mais bloqueada por 24 horas.
- **As respostas começam mais cedo:** A primeira palavra aparece mais rápido, e enviar não faz mais você esperar.
- **Acompanhe o agente no navegador:** "Acompanhar o agente no navegador" deixa o agente trabalhar em uma aba própria. Quando você precisa entrar ou resolver um captcha, ele abre a página para você.
- **Você escolhe quantas vezes tentar de novo:** Box ▸ Desempenho ▸ Rede e chat ▸ Novas tentativas quando uma solicitação do chat falha. Quando a conexão continua caindo, o erro aparece em segundos.
- **Chats longos mais estáveis e fluidos:** Chats com milhares de mensagens rolam sem engasgos. O histórico de chat sobrevive a uma falha da janela, e chats longos antigos não ficam mais sem memória ao abrir.
- **Novos provedores e modelos:** Baidu ERNIE e Ant Ling; o GPT Image 2.6 pode gerar SVGs e GIFs.

### Plugins

- **Box ▸ Plugins (novo):** Instale plugins do mercado de plugins do Breezell no GitHub, ou instale um `.vsix` que você mesmo empacotou. Os plugins só rodam enquanto você está conectado ao Breezell. Quando você sai da conta, eles são desativados, e Reiniciar o host de extensões para os que já tinham iniciado. Os plugins não alcançam sua conta, sua cobrança nem as configurações internas do Breezell.
  - Mercado: busca (nomes e descrições são encontrados em qualquer idioma), categorias (um botão abre um painel com quantos plugins cada uma tem), Código aberto / Código fechado, ordenação e Atualizar. O rodapé de um cartão tem instalar, Abrir, o interruptor de ativar/desativar e Desinstalar. Clicar no nome ou na descrição abre os detalhes, com o README, as permissões, o autor e a soma de verificação. Um download que não confere com o mercado não é instalado.
  - Instalados: uma linha por plugin; clique em um para ver a página de detalhes. Ela tem o interruptor de estado (Em execução, Desativado, Aguardando login, Bloqueado), Abrir, um botão de atualização quando há versão nova, Versão, Origem, Licença e ID, Código-fonte e Ver no GitHub, os cartões Janelas, O que adiciona e Permissões, e o README. Instalar .vsix local também fica nesta página.
  - Desenvolver: Criar um plugin gera uma pasta de plugin a partir de um modelo; abra-a e pressione F5 para executá-lo. Do código ao mercado lista os passos para empacotar e publicar, com o Guia do desenvolvedor.
  - Os plugins que podem ser abertos aparecem em Plugins na barra lateral do Box; clique em um para abrir o painel ou a janela dele.
  - Nomes, descrições, categorias e READMEs dos plugins seguem o idioma de exibição do Breezell, em inglês quando não há tradução. Chinês tradicional e chinês simplificado nunca substituem um ao outro.
  - Os plugins do Breezell não aparecem mais na visão Extensões; eles são gerenciados em Box ▸ Plugins.
- **O que os plugins podem fazer:**
  - Adicionar skills, regras e servidores MCP. Sua própria skill ou servidor com o mesmo nome prevalece.
  - Dar ferramentas ao agente e dizer em quais modos elas aparecem (Chat, Agent, Emaranhamento, Analisar, Teams); elas ainda precisam da sua aprovação e ganham cartões de ferramenta próprios. Um plugin também pode examinar as chamadas de ferramenta do agente antes que rodem, e recusá-las.
  - Abrir janelas próprias, que também podem iniciar sem uma janela do editor. Na página de detalhes de um plugin, o cartão Janelas tem Adicionar ao menu Iniciar (Windows), Adicionar ao menu de aplicativos (Linux) ou Adicionar a Aplicativos (macOS) para criar um atalho. No macOS, as janelas de plugin aceitam ⌘Z, ⌘A e ⌘W como as outras janelas.
  - Mudar as telas do Breezell: botões e itens de menu, comandos no menu de barra, páginas próprias, substitutos para algumas partes, seu próprio desenho dos blocos de código de uma linguagem, novos modos, um companheiro flutuando sobre a caixa de entrada do chat e um cartão de configurações em Opções de Recursos (a busca do Box o encontra). Também podem mudar cores, fontes e visuais, e alterná-los com as configurações do próprio plugin.
  - Ler suas conversas, enviar mensagens nelas, aprovar chamadas de ferramenta, usar ou trocar seu modelo de chat, mostrar seus textos no idioma de exibição do Breezell e pedir que você reinicie o Breezell.
  - Plugins de método de entrada: o painel de candidatos pode aparecer no editor de código e na caixa de entrada do chat. Ele fecha quando você clica em outro lugar, o foco sai ou o método de entrada é desligado, e as palavras oferecidas depois de confirmar o texto somem sozinhas; candidatos longos quebram linha em vez de passar da caixa de entrada do chat.
  - O que os desenvolvedores de plugins podem usar, e as permissões para isso, está no Guia do desenvolvedor na página Desenvolver.
- **O que os plugins não podem tocar:** Login, planos, cota, cobrança, as configurações de API personalizada, as caixas de diálogo de permissão, a aprovação de ferramentas e as páginas de plugins não podem ser alterados por um plugin, e tudo o que espera por você sempre aparece acima das telas de um plugin. Sair da conta em qualquer janela, ou um plugin ser bloqueado, remove na hora o que ele adicionou.
  - Os botões de um plugin dizem "Do plugin: nome". Clique com o botão direito em um para Ocultar este botão ou Gerenciar plugin; Mostrar botões ocultos na página de detalhes do plugin os traz de volta. Uma tela que um plugin substituiu tem Mostrar a visão original do Breezell.
- **Permissões:** Um plugin declara as permissões de que precisa, e nada que ele não declarou pode ser usado. Permissões normais (como saber quando um turno da conversa começa e termina, trocar o modelo de chat, adicionar botões) vêm ativadas por padrão. As arriscadas (como usar seu modelo de chat, ler suas conversas, enviar mensagens, aprovar chamadas de ferramenta, ler seu código ou a caixa de entrada do chat, alterar uma mensagem antes de ela ser enviada, ler suas chaves de API personalizadas) são pedidas na primeira vez que o plugin as usa, e sua resposta é guardada.
  - Permissões, na página de detalhes do plugin, lista cada permissão com seu tipo (Automática ou Pergunta antes), seu estado (Ativada, Desativada, Pergunta no primeiro uso) e um interruptor, com Ativar todas e Desativar todas. Os detalhes de mercado de um plugin instalado têm os mesmos interruptores.
  - A caixa de diálogo de instalação tem uma caixa de seleção desmarcada: "Permitir agora todas as permissões que ele pede, em vez de perguntar no primeiro uso de cada uma".
  - Ler chaves de API personalizadas só funciona em contas cujo plano inclui Custom API.
  - Desinstalar restaura as permissões de um plugin aos padrões.
- **Atualizações e remoção:**
  - Quando um plugin instalado do mercado tem versão nova, o Breezell avisa uma vez, com Atualizar para versão (Atualizar tudo quando são vários) e Ver.
  - Depois que você atualiza ou desinstala um plugin que está rodando, a versão antiga continua rodando até o host de extensões reiniciar. O Breezell avisa e oferece Reiniciar o host de extensões. O mesmo vale para remover e instalar um plugin de novo na mesma sessão.
  - Desinstalar fica nos cartões do mercado, nos detalhes e em Instalados, e pergunta antes. As skills, regras, servidores MCP e janelas que o plugin adicionou vão junto; as configurações dele ficam.
  - Um plugin pode pedir para reiniciar os plugins, a janela ou o Breezell inteiro depois de ser instalado, atualizado ou removido; a caixa de diálogo de instalação lista isso primeiro. Quando um plugin em execução pede para reiniciar, você escolhe Reiniciar agora ou Mais tarde. Reiniciar sem perguntar exige sua permissão, acontece no máximo uma vez por versão, espera terminar uma resposta que esteja sendo escrita e avisa antes.
- **Lista de bloqueio:** Os mantenedores do mercado podem bloquear um plugin que se mostre nocivo. Um plugin bloqueado é desativado; um que está rodando para na hora e suas janelas fecham, e o Breezell avisa você uma vez e oferece desinstalá-lo. O mercado não o mostra mais, e ele não pode ser instalado nem reativado; Instalados mostra Bloqueado e o motivo.

### Chat

- **O histórico de chat sobrevive a uma falha da janela:**
  - Uma janela vazia que falhou e é aberta de novo não perde mais o histórico de chat. New Window depois de uma falha assim realmente abre uma janela em vez de fechar o aplicativo.
  - Depois de uma sessão que não fechou direito, o Breezell avisa ("The window closed unexpectedly last time…") e oferece Open Conversation para reabrir a conversa em que você estava. Ela não é aberta sozinha. Uma saída normal não dispara mais o aviso.
  - Quando o disco está ocupado ou cheio, as conversas do espaço de trabalho não abrem mais todas vazias.
- **Chats longos antigos funcionam direito:**
  - Um chat longo no formato antigo não perde mais mensagens na primeira vez que é salvo.
  - Chats longos muito antigos não derrubam mais a janela por falta de memória ao abrir.
  - Um chat reaberto não mostra mais espaço em branco no turno mais recente.
- **Reverter nunca esvazia um arquivo:** Quando uma reversão não encontrava o backup de um arquivo, ela gravava o arquivo de volta vazio. Agora ela avisa que o backup está faltando e deixa esse arquivo como está; os outros arquivos são revertidos normalmente.
- **Excluir um chat não quebra mais seus ramos:** Um chat ramificado ou copiado de outro ainda pode ser revertido depois que o original é excluído ou limpo.
- **Sem mais 400 do Claude 4.6 e posteriores:** Em um slot personalizado com o formato Anthropic, o Claude 4.6+ respondia "This model does not support assistant message prefill" depois que uma resposta em um chat longo tinha sido cortada. Isso não acontece mais. As respostas em chats longos também não são mais cortadas antes da hora.
- **Só os anexos que você quis:** Uma imagem esperando no compositor não vai mais junto com uma sugestão de acompanhamento, uma mensagem na fila, o prompt de um plano ou a mensagem de um plugin; uma mensagem na fila aberta para edição não envia mais sua imagem duas vezes. Em um modelo sem visão, clicar em uma sugestão de acompanhamento não fica mais sem efeito.
- **Menu de barra:** O que você digita com o menu de barra aberto fica na caixa, então o Esc não o perde mais, e Enter sem comando correspondente envia a mensagem: agora dá para enviar mensagens que começam com /. Os candidatos do método de entrada não ficam mais escondidos sob os menus que abrem a partir da caixa.
- **Matemática no chat:** As fórmulas são desenhadas com as fontes certas, então a barra dupla de uma norma não aparece mais como duas barras inclinadas. No Windows, blocos de código LaTeX não perdem mais a primeira linha, e um bloco de uma linha aparece.
- **Arquivos citados no chat abrem:**
  - Em janelas remotas WSL e SSH e em espaços de trabalho com várias pastas, cartões de arquivo e links no chat não abrem mais como "arquivo não encontrado".
  - Um caminho em uma resposta com `:42`, `#L42` ou `#L42-L50` abre naquela linha.
  - Pastas citadas em uma resposta: fora do espaço de trabalho, abrem no gerenciador de arquivos do sistema; dentro dele, são mostradas na visão Explorador. Arquivos binários, como arquivos compactados, não abrem mais no editor de texto; aparece um menu cuja primeira opção, Abrir, os entrega ao aplicativo do sistema.
  - Caminhos copiados do chat não carregam mais caracteres invisíveis.
- **Cross-Check realmente desativado por padrão:** Instalações existentes desativam o Cross-Check uma vez. Se você ativá-lo depois, ele continua ativado.
- **Correções menores do chat:**
  - Respostas feitas só de caracteres invisíveis (o Kimi K3.1 Pro envia algumas) não aparecem mais como uma linha vazia.
  - Um turno que você parou enquanto o modelo escrevia não traz mais sugestões de acompanhamento nem um Cross-Check.
  - Várias chamadas seguidas da mesma ferramenta ganham um cabeçalho recolhido que diz o que foram (por exemplo, quais skills foram usadas), não só uma contagem.
  - A sugestão da página inicial cria `.breezell/rules/breezell.md` em vez do `.breezellrules` obsoleto.

### Ferramentas do Agent

- **Comandos de terminal:**
  - Comandos que não terminam sozinhos, como servidores de desenvolvimento, vão para segundo plano na hora em vez de segurar o turno.
  - Outros comandos não ficam mais travados por muito tempo sem motivo.
  - O cartão do comando tem Para segundo plano: o comando continua rodando e o turno segue.
  - A IA sempre sabe quando um comando em segundo plano termina. Quando você para um comando, uma IA ociosa diz que viu a parada e não o executa de novo.
  - O som de conclusão, a voz e a notificação do sistema esperam o trabalho realmente terminar: um turno que termina com um comando ainda rodando fica em silêncio, e você é avisado uma vez quando esse comando termina.
  - Um comando que a própria IA parou mostra "[Stopped by the agent]" no cartão em vez de dizer que você o parou, e a IA não pergunta mais sobre uma parada que ninguém fez.
  - Um cartão de terminal concluído não mostra mais Abrir e Parar para o próximo comando, e esses botões não deixam mais o cartão mais alto.
- **As buscas da IA encontram o que seu projeto tem:**
  - Buscas por nome de arquivo ignoram maiúsculas e minúsculas. No Windows, `readme.md` não encontrava `Docs/README.md`.
  - As buscas da IA seguem o `.gitignore` do seu projeto e a configuração Search: Exclude para decidir o que pular, em vez de sempre pular pastas como `build`, `out` e `dist` ou arquivos como logs e imagens.
  - Projetos sem Git (SVN, Perforce, Plastic ou uma cópia descompactada) também têm suas regras de ignorar aplicadas, em vez de serem buscados inteiros.
  - Projetos Unity, Unreal e Godot pulam as pastas que seus motores geram.
  - Resultados de busca para nomes de arquivo ou pasta com datas ou números de versão (como `2024-10-29-notes.md`) não abrem mais o arquivo errado.
- **Consultas de código:** A IA encontra funções e classes em mais linguagens: Lua, tipos de Go, structs de C#, métodos de C++ definidos fora da classe, Ruby, Kotlin, Dart, Scala, Solidity, Elixir, OCaml e Objective-C. Em um espaço de trabalho com várias pastas, as consultas de código cobrem todas as pastas, não só a primeira.
- **A IA não busca mais sem fim:** Quando a IA continua buscando com palavras novas sem abrir nenhum arquivo, o turno para e diz por quê.
- **A IA encontra configurações para você:** Pergunte onde fica uma configuração e a IA diz o lugar dela no Box no seu idioma de exibição, ou abre o Box com essa opção destacada. Disponível no modo Chat. Erros que mandam você a uma configuração também indicam o lugar certo no Box.
- **Outros:**
  - A IA não fica mais reenviando uma edição que já foi aplicada.
  - Um comando de pipeline muito longo não congela mais a janela quando o turno termina.
  - Novas skills integradas: as skills HyperFrames e uma skill de documentos do Office. O interruptor do Superpowers só abrange as skills dele.

### Memória

- **Experiências mais confiáveis:** O Super Memory não salva mais abordagens que não funcionaram como experiências confiáveis. Tudo isso acontece no seu computador.

### Teams

- **Escolha o modelo de cada colega no cartão de aprovação:** Com Aprovar Teams automaticamente desativado, um time novo espera em um cartão de aprovação. A linha de cada membro agora é um menu de modelo (Modelo deste colega), definido com o modelo que realmente rodaria. O cartão era uma prévia somente leitura que podia nomear um modelo diferente do que rodou. Sua escolha sobrevive a um recarregamento e vale quer você aprove pelo cartão, pela notificação do sistema ou pelo link dela. Com a aprovação automática ativada, nada muda: sem cartão, o time começa na hora.
- **Tentar de novo um colega em outro modelo:** O cartão de erro de um colega tem um menu de modelo ao lado de tentar de novo (Modelo com que tenta de novo); a escolha passa a ser o modelo desse colega dali em diante.
- **Escreva direto para um colega:** O compositor na página de um colega, travado até agora, envia sua mensagem para esse colega. Ela é lida antes do próximo passo do colega sem interromper o atual, e desperta um colega ocioso, concluído, com falha ou parado.
  - As mensagens em espera ficam na barra de fila acima do compositor, uma por passo, e podem ser retiradas (Retirar) até o colega lê-las.
  - Uma mensagem retirada não aparece na conversa e não é repassada ao líder.

### Rede e confiabilidade

- **As respostas começam mais cedo:** A primeira palavra chega em cerca de 0,4 s em vez de cerca de 0,65 s, e enviar não acrescenta mais dois ou três segundos de espera, incluindo a primeira mensagem depois de uma pausa ou depois de iniciar.
- **Novas tentativas quando uma solicitação do chat falha, definidas por você:** Box ▸ Desempenho ▸ Rede e chat tem Novas tentativas quando uma solicitação do chat falha abaixo de Tempo limite do primeiro byte.
  - Padrão escolhe a quantidade conforme o tipo de erro; Sem novas tentativas mostra o cartão de erro na hora; ou escolha uma quantidade, ou Personalizado para 1–20 vezes.
  - Erros que uma nova tentativa não resolve, como estar desconectado ou sem crédito, uma resposta já exibida e qualquer coisa depois do seu Parar, nunca são tentados de novo.
- **Uma conexão caída mostra o erro mais cedo:** Quando a conexão continua caindo, o erro agora aparece em cerca de 5 s em vez de quase 30 s.
- **Subagentes e chats longos custam menos:** Subagentes e chats longos custam menos para rodar. Subagentes no Claude e no Gemini também não leem mais só o começo de cada arquivo.

### Modelos e provedores

- **Novos provedores:**
  - Baidu ERNIE: ERNIE 5.1 (contexto de 128K, entrada de imagens, ferramentas, sempre pensa). O ERNIE 5.5 Flash está listado antes do lançamento (somente texto, ainda sem preço).
  - Ant Ling: Ling-3.2-flash (1M, entrada de imagens e vídeo, ferramentas; grátis nas duas primeiras semanas, ainda sem preço), Ling-3.1-flash (1M, somente texto), Ling-3.0-flash-VL (262K, entrada de imagens e vídeo) e Ling-3.0-flash (262K, somente texto). O Ling 3.x pensa por padrão, e isso pode ser desativado. O Ling-3.2-flash tem um seletor de contexto, 262K por padrão e 1M sob demanda.
- **Novos modelos:**
  - O LongCat-2.5 GA substitui o LongCat-2.5-Preview e o 2.0: contexto de 1M, saída de 128K, entrada de imagens.
  - O Tencent Hy4 GA (TokenHub, OpenCode Go, OpenRouter) é o primeiro modelo Hy que lê imagens; o hy4-preview continua somente texto.
  - OpenRouter: GLM-5.3-FlashX-Legal (o modelo de domínio jurídico da Z.ai), Ricursive Ripple-65B Preview (somente texto) e o modelo stealth Crouton Alpha (entrada de imagens, vídeo e áudio, grátis).
  - Reflection Beam 1.0 (OpenRouter, Vercel, OpenCode, Together): 1M, somente texto, sempre raciocina.
  - O OpenCode Go segue sua lista de 2026-11-03: entram Claude Haiku 5.5, Gemini 4 Argon, MiniMax M3.1 Flash, Step 5 Preview, um Reflection Beam grátis e o modelo stealth Iceman Contributor; Grok 4.6, Kimi K2.6, DeepSeek V4 Flash e outras entradas retiradas saem, e os modelos que você mesmo digitou continuam funcionando.
  - Listados antes do acesso: Gemini 4 Carbon (Gemini API e Breezell; o Google o oferece só a parceiros selecionados, então a maioria das chaves recebe 404) e os `cyber-personal-v3` e `cyber-enterprise-v4` do DeepSeek Flash Cyber (precisam de uma Cyber Key emitida após uma verificação de identidade).
- **DeepSeek:**
  - A lista mantém só o que a API oficial serve, `deepseek-flash` (V4.1 Flash) e `deepseek-v4-pro`, mais o V4.1 Pro antes do lançamento. Nomes que a lista oficial não tem mais saem da lista padrão; os modelos que você mesmo adicionou continuam.
  - Os aposentados `deepseek-chat` e `deepseek-reasoner` foram removidos; recursos configurados com eles passam sozinhos para outro modelo DeepSeek.

### Imagens e vídeo

- **GPT Image 2.6:** `gpt-image-2.6-sunburst` e `gpt-image-2.6-flare` chegam a OpenAI, OpenRouter e Image Studio, com tudo o que o 2.5 tem (proporções de até 3:1, 1K / 2K / 4K, qualidade xhigh e max, fundos transparentes).
  - Complexidade (Baixa, Média, Alta; Alta por padrão): definida no Box, e a IA pode defini-la quando desenha no chat.
  - Saída SVG (só imagens novas, uma por vez) e GIF: 2–16 quadros (Quadros do GIF), 20–2000 ms cada (Duração do quadro), cerca de 512 × 512 por quadro, sem máscara. Nenhum dos dois aceita fundo transparente.
  - O login do ChatGPT também pode gerar GIFs, mas a OpenAI ainda não liberou isso para todas as contas, então algumas são recusadas; o Box avisa isso.
  - O Image Studio oferece os formatos que um modelo aceita, incluindo SVG e GIF. SVGs aparecem na galeria, copiar um SVG ou GIF copia um PNG dele, e a caixa de diálogo de salvar oferece .svg.
- **O modo imagem entende "tenta de novo":** Dizer "esta não ficou boa" depois de uma imagem trazia uma imagem nova sem relação. Agora uma mensagem sem imagem própria edita a imagem anterior. Uma mensagem que pede mais do que um desenho, como "esta não ficou boa, procure referências na internet", desativa o modo imagem e vai para o modelo de chat.
- **Editar esta vai para o modelo de chat:** Editar esta ou Editar áreas em um cartão de imagem em um chat normal não troca mais o chat para o modo imagem. A imagem vai para o compositor e o modelo de chat recebe sua instrução: ele pode pesquisar antes e depois desenhar usando a imagem como referência. Quando o chat já está no modo imagem, ou o modelo de chat não consegue fazer isso, o modo imagem continua cuidando da edição.
  - O cartão não mostra mais o prompt longo escrito para o modelo de imagem; os detalhes listam só os arquivos de imagem.
  - Uma imagem desenhada pelo Breezell mostra Breezell uma vez, na linha do modelo.
- **Qualquer modelo pode ter seu próprio modelo de reconhecimento de imagem:** Em Box ▸ Modelos, Configurações avançadas ▸ Imagens de um modelo tem o interruptor O modelo lê as imagens e o seletor Modelo de reconhecimento de imagem, aplicados na hora. Com o interruptor desligado, as imagens anexadas são lidas pelo modelo escolhido. O Box mostra o modelo como somente texto, com Proxy de visão no menu dele.
  - Enquanto um proxy de visão está definido, a caixa de diálogo Proxy de visão tem Remover proxy de visão. Antes era difícil descobrir como desativá-lo.
- **Image Studio:**
  - A API de imagem e a API de vídeo de cada perfil de API podem usar sua própria rota de rede: Direto, Proxy do sistema, Proxy global ou Proxy personalizado (HTTP / HTTPS / SOCKS5, com usuário e senha, ou colado como URL); Proxy do sistema continua sendo o padrão. Buscar a lista de modelos também usa essa rota, e uma falha diz por quê.
  - Adicione modelos por ID; eles continuam quando a lista é buscada de novo.
  - O MiniMax H3 funciona por relays.
  - Riverflow V2.6 Pro: em Box ▸ Modelos ▸ Geração de imagens, sob OpenRouter, e no Image Studio (1K / 2K / 4K, até dez imagens de referência).
  - Gemini Omni 1.1 Flash (um modelo de vídeo no OpenRouter): o Image Studio tem uma predefinição de vídeo para ele (360p–4K, 16:9 ou 9:16, 3–10 s, primeiro e último quadro, com som).
- **O Seedream 5.0 Lite desenha no Box:** Por um relay, ele falhava no Box enquanto o Image Studio desenhava. No Image Studio, os tamanhos e a quantidade de referências do Seedream 5.0 Lite e Pro agora seguem as especificações oficiais: o Lite oferece 2K / 3K / 4K e 14 imagens de referência, o Pro 1K / 1.5K / 2K e 10 imagens de referência.
- **As edições de imagem do Box funcionam com mais relays.**

### Navegador integrado e Computer Use

- **Acompanhar o agente no navegador (novo, desativado por padrão):** Ative Acompanhar o agente no navegador em Opções de Recursos ▸ Comportamento de Código, ou clique no botão de olho na barra de ferramentas do navegador. O agente passa a trabalhar em uma aba própria marcada como "Agent", que você pode acompanhar ao vivo, e nunca mexe nas suas abas. Ler uma página não traz o navegador para a frente.
- **Páginas que você precisa ver abrem para você:** Com Navegador sem janela ativado (o padrão), um login, um captcha ou uma página concluída ficavam fora da tela, e o agente não tinha como mostrá-los a você. Agora, para uma página que você pediu para ver, uma página em que você mesmo precisa agir (login, captcha, QR code, confirmação de pagamento) ou o resultado no fim, ele abre a aba Navegador. As verificações dele continuam rodando fora da tela.
- **As verificações do Cloudflare não entram mais em loop:** O navegador integrado não fica mais preso repetindo a verificação humana do Cloudflare.
- **Computer Use (Windows):**
  - Pode capturar a janela da frente ou uma tela, ampliar parte dela, clicar com teclas modificadoras pressionadas, dar clique triplo e passar o mouse, e esperar uma janela ou um controle aparecer ou sumir. Cliques em botões, caixas de seleção e menus expansíveis são mais confiáveis.
  - Nunca digita em um campo de senha.
  - Abrir um aplicativo que já está rodando troca para a janela dele (também a partir da bandeja), ou lista as janelas quando há várias (duas contas do QQ, por exemplo).
  - As janelas são reconhecidas quando o QQ ou o WeChat está na frente.
  - Os modelos Claude usam a própria ferramenta de computador da Anthropic: Box ▸ Experimental ▸ Computer Use (Windows) ▸ Ferramenta de computador própria do Claude.
  - O novo comando Breezell: Run Computer Use Evaluation testa um modelo em nove tarefas de desktop e confere cada resultado.

### Box

- **Limpeza de dados:**
  - O espaço que ela pode liberar agora é o que os arquivos realmente ocupam no disco.
  - Uma limpeza do espaço de trabalho atual não exclui mais arquivos de que outros espaços de trabalho ainda precisam.
  - Quando a limpeza pode liberar mais do que o valor de Lembrete de limpeza (desativado, 200 MB, 500 MB por padrão, 1 GB), aparece um cartão no canto inferior esquerdo. Limpar agora executa a limpeza segura e a mostra até o fim; Agora não afasta o cartão em todas as janelas por 7 dias, a menos que se acumule o mesmo tanto de novo. Ele fica na mesma coluna que o cartão de atualização rápida, então os dois nunca se sobrepõem.
  - Novas coisas que ela pode limpar: backups de checkpoints que nada mais usa (contados em Expired checkpoints); Armazenamento de projetos excluídos, os dados deixados por espaços de trabalho cuja pasta não existe mais, o que também exclui as conversas deles, por isso nunca vem pré-selecionado, pergunta antes listando cada projeto e nunca é executado pela manutenção agendada nem pelo lembrete; e mais Space left by deleted content.
- **Banco de dados ▸ Navegador de dados redesenhado:** A página é uma superfície única, e a navegação do Box se recolhe na faixa de ícones enquanto ela está aberta.
  - O painel de navegação à esquerda pode ser redimensionado arrastando ou recolhido com Recolher navegador, e as duas coisas são lembradas. Ele lista cada conexão com seu estado; a conexão aberta pode ser desconectada, renomeada, enviada ao chat ou excluída; abaixo dela ficam as tabelas com a contagem de linhas, uma busca, ordenação, e nova tabela e Console SQL.
  - Uma visão geral do banco de dados lista cada tabela com suas linhas, colunas e chave primária, com filtro, ordenação e Agrupar pela inicial. Alguns bancos de dados de servidor mostram contagens de linhas estimadas.
  - A visão de tabela tem um filtro WHERE (Enter executa), Colunas visíveis e o total de linhas, com o número da linha e a chave fixados à esquerda.
  - Detalhes da linha fica encaixado ao lado da grade: cada campo por inteiro, JSON formatado, Anterior / Próxima, editar (ou clique duplo), Copiar como JSON e excluir. Excluir Tabela foi para a aba Estrutura, e a varredura do espaço de trabalho, para o formulário de nova conexão.
  - Botões e barras de rolagem que só apareciam ao passar o mouse sumiram.
- **Monitor de modelos ▸ Breezell:** Mostra o estado das rotas do seu plano (por exemplo "Breezell Pro/Pro+"). Cada linha mostra os últimos 90 minutos, uma barra por minuto, e 24H / 7D / 30D trocam o número de disponibilidade, com a média no título. Atualiza quando a aba abre e em Verificar de novo. Se o seu plano ainda não tem monitores, a aba avisa. As outras abas verificam a partir do seu computador, como antes.
- **Página Modelos:**
  - A barra de categorias (Breezell, contas com login, Provedores de API, Compatível com OpenAI, geração de imagens) fica fixa no topo, e só o que está abaixo dela rola.
  - Slots compatíveis com OpenAI podem ser buscados por nome, URL ou modelo ("opus 4.8" encontra `claude-opus-4-8`). O slot que o chat atual usa é marcado como Em uso e vem primeiro; os outros seguem pela última vez em que foram usados.
  - Em um Box estreito, o nome cede primeiro, depois um selo que não cabe mais sai inteiro, e Em uso encolhe até sua marca de seleção. As dicas só aparecem onde o texto é cortado.
  - O botão de fechar da lista de modelos buscados diz Fechar; um clique fora da lista ou Esc a fecha (a menos que haja modelos marcados nela).
- **Desempenho ▸ Rede e chat:** O cartão de diagnóstico e as requisições recentes mostram o apelido que você deu a um slot compatível com OpenAI em vez de nomes como "OpenAI-Compatible 9".
- **Rules & Skills & Memory:** O painel chamado Skills & Memory, cuja primeira aba é Rules, agora se chama Rules & Skills & Memory em toda parte: a aba do Box (MCP & Rules & Skills & Memory), seu cartão de entrada e o botão da barra de título.
- **Barra lateral:** O plano ao lado do nome da conta é uma palavra colorida em vez de uma pílula com moldura, e o ícone Atualizações no rodapé perde o fundo, mas mantém a cor.

### Conta e login

- **O login não cai mais sem motivo:** Algumas pessoas eram desconectadas sem nada de errado com a conta, ou nem conseguiam entrar. Agora:
  - Uma rede perdida, um site inacessível, uma página de desafio, um erro de proxy, várias janelas abertas, duas instalações do Breezell em um computador e um relógio do computador errado não desconectam mais você. Você só é desconectado quando o Breezell realmente encerra a sua sessão.
  - As janelas concordam sobre o seu login, então nenhuma janela mostra você conectado quando o login já acabou.
  - Quando o seu único caminho para a internet é um proxy definido no Box, o login também usa esse proxy.
  - Quando você digita um código de login, o Breezell distingue um código que não funcionou, tentativas demais a partir desta rede e o Breezell estar inacessível.
  - Quando você é desconectado, ele diz por quê: "A sessão neste dispositivo foi encerrada" ou "Sua sessão terminou".
- **Os modelos Breezell não continuam falhando depois que o login expira:** Toda mensagem falhava depois que o login expirava, até você entrar de novo; agora o Breezell continua sozinho.
- **Um sexto dispositivo é apenas recusado:** Um sexto dispositivo bloqueava a conta inteira por 24 horas e desconectava os outros cinco. Agora só o dispositivo novo é recusado: ele fica na página de login e diz por quê, e os outros cinco continuam. Um dispositivo que acorda da suspensão com todas as vagas ocupadas continua conectado, diz que está esperando e continua sozinho quando uma vaga se libera. A página da conta explica isso. Um editor fechado também não segura mais uma vaga de dispositivo por horas.
- **Login guardado com criptografia:** Seu login é armazenado criptografado no seu computador.
- **Parar é cobrado pelo que foi produzido:** Nos modelos próprios da Breezell, Parar ou uma requisição interrompida é cobrado só pelo que foi produzido, não pela resposta inteira.

### Desenvolvimento remoto

- **Remote-SSH:**
  - Correção de segurança: o encaminhamento de portas escuta só neste computador, então outros computadores da rede local não conseguem alcançá-lo.
  - Connect to Host lista os hosts da sua configuração SSH e aceita `user@host:port`.
  - cmd, PowerShell e Git Bash são diferenciados em hosts Windows.
  - ProxyJump e chaves PEM com senha funcionam; os problemas do script de instalação no macOS e em sistemas Linux mínimos foram corrigidos.
  - Um espaço de trabalho sem pastas não mostra mais um erro.
- **Remote-WSL:** Correções no script de instalação, suporte a Alpine e o motivo exibido quando o script falha; um espaço de trabalho sem pastas não mostra mais um erro.
- **Plugins em janelas remotas:** Instalados mostra uma linha por plugin, e uma atualização não deixa mais a versão antiga rodando do outro lado.

### Desempenho

- **Rolagem mais fluida em chats longos:** Chats com milhares de mensagens rolam sem engasgos.
- **O Box descansa enquanto está fechado:** Um Box fechado não usa mais recursos em segundo plano.
- **A recuperação de memórias usa menos memória:** A recuperação de memórias usa cerca de 40% menos memória.
- **Salvar chats enormes usa menos memória:** Salvar um chat antigo muito grande usa bem menos memória.

### Interface

- **Nova marca na página de chat vazia:** As páginas vazias moderna e clássica mostram um RSI grande com BREEZELL atravessando o meio. A marca não se move.
- **Um tamanho só para a barra de ações do turno:** Request ID, a duração, Revisar, Git e a contagem de ferramentas à direita agora têm o tamanho dos botões de copiar e de ramificar à esquerda.
- **Frases Rápidas redesenhadas:** O popover tem um título, um botão de adicionar e Gerenciar; cada uma das suas Favoritas é uma linha com o ícone do tipo, o nome e uma prévia de uma linha (comandos de terminal em fonte monoespaçada). A caixa de diálogo de gerenciamento ganhou novo estilo e funciona como antes; o formulário salva com Enter no nome ou Ctrl/Cmd+Enter no conteúdo.
- **Auto na interface moderna:** O interruptor de rota do Auto é desenhado corretamente. O menu de modelos do Auto não fica mais coberto pela barra lateral do histórico de chat ao lado, e não passa mais da borda direita da janela.
- **Linhas excluídas quebram em diffs inline:** Com a quebra de linha ativada (Alt+Z), uma linha excluída longa na área vermelha de uma edição continuava em uma linha só, cortada na borda. Agora ela quebra como as outras linhas do editor.
- **Outros:**
  - O cartão da ferramenta de exclusão risca o nome do arquivo excluído; o cabeçalho de arquivo de um bloco de código tem nome e ícone em tamanhos combinando.
  - O texto de espera cintilante não mostra mais imagem dupla nos cartões de análise.
  - A dica de modelo nas linhas de membros do cartão de aprovação do Teams usa a dica própria do Breezell em vez da branca do sistema.

### Instalação e atualizações

- **Atualizações do Windows mais confiáveis:** Um download com falha mostra um erro na hora, e um instalador antigo não é mais instalado por engano.
- **Requisitos do sistema:** A partir desta versão, é necessário macOS 13 ou posterior, e as compilações são somente de 64 bits. Não há mais editor para Linux ARM32 (armhf), e a página de download não recomenda mais um pacote x64 para computadores ARM32; conectar a um host ARM32 por SSH continua funcionando.
- **Pacotes Linux:** As dependências dos pacotes deb e rpm foram atualizadas para a nova versão.
- **Electron 45.2.2:** O Chromium integrado foi atualizado para a versão 156, e as dependências foram atualizadas, incluindo correções de segurança.

## 1.4.4 · 2026-10-27

### Destaques

- **Cross-Check:** Uma segunda olhada independente antes de o agente dizer que terminou (desativado por padrão).
- **Turnos concluídos se recolhem:** Um turno de chat concluído se recolhe em uma linha "Worked for 2m 10s", com a resposta logo abaixo.
- **Conversas longas mantêm o rumo:** Elas mantêm a direção depois de o contexto ser recolhido, e recolher custa menos.
- **Recuperação de memórias por contexto:** Funciona em qualquer idioma, e a IA pode pesquisar suas memórias passo a passo.
- **Geração de imagens em um só lugar:** Configurada uma vez em Box ▸ Modelos ▸ Geração de imagens e usada em toda parte; o Image Studio foi reconstruído.
- **Recuperação de rede:** As requisições se recuperam sozinhas quando uma VPN cai ou volta, e modelos lentos não expiram mais em cerca de dois minutos.
- **As atualizações rápidas ficam:** Elas não desaparecem mais sozinhas após o uso normal.

### Chat

- **Turnos concluídos se recolhem:** Quando um turno termina, tudo o que o agente fez no caminho (pensamentos, buscas, cartões de ferramentas e edições, o texto entre eles) se recolhe em uma linha que diz quanto tempo trabalhou e o que fez, por exemplo "Worked for 2m 10s · 12 files, 3 searches, 2 edits". Clique para abrir o turno como estava. A resposta final fica fora do recolhimento, assim como erros e imagens produzidas pelo turno. Um turno que você parou, um turno que terminou com erro e uma resposta simples não se recolhem. Os turnos do seu histórico se recolhem do mesmo jeito.
- **Cross-Check (novo, desativado por padrão):** Ative em Opções de recursos ▸ Cross-Check ("Melhoria automática do modelo"). Antes da resposta final do agente em uma mudança maior (dois ou mais arquivos, 30 ou mais linhas em um arquivo, ou um plano aprovado), uma chamada separada ao modelo sem ferramentas confere o trabalho com o seu pedido: os diffs, novos erros de compilação, os comandos e seus códigos de saída. Ela escreve uma lista de aceitação e marca cada item como aprovado, reprovado ou desconhecido. Só o que ela considera faltando volta ao agente, que confere cada ponto no código, corrige o que realmente falta e responde uma vez.
  - O resultado é um cartão abaixo do turno. Ele abre na lista de verificação, com Verificar de novo e Preencher as lacunas.
  - Pular na linha de espera segue sem isso. Parar ou uma nova mensagem depois da resposta apenas encerra a verificação.
  - Usa o modelo do chat, a menos que você escolha um dedicado em Box ▸ Cross-Check. Arquivos que podem conter segredos (`.env`, chaves, credenciais) são nomeados, mas o conteúdo nunca é enviado.
  - Uma verificação lenta não é mais cortada aos 90 segundos: ela é acompanhada e só falha quando se confirma que a API caiu.
- **Editar e reenviar uma mensagem não traz mais de volta mudanças que você já resolveu:** antes, reenviar restaurava todos os arquivos desde o checkpoint anterior. Depois de Manter tudo, Aceitar/Rejeitar voltava para mudanças que você já tinha aceitado. Um trecho aceito voltava a ficar pendente. Mudanças rejeitadas voltavam. Agora um reenvio só restaura os arquivos que a IA editou depois daquela mensagem. O que você fez desde então permanece, incluindo o que você digitou em arquivos que a IA não tocou depois.
- **Manter tudo e Aceitar tudo limpam de fato:** Manter tudo agora também aceita mudanças pendentes em todos os arquivos que a conversa editou. O Aceitar tudo do Code Review confirma arquivos cujas etapas estavam todas decididas. Uma etapa marcada como aceita não deixa mais botões Aceitar/Rejeitar no editor.
- **Conversas longas mantêm o rumo após o recolhimento (compactação de contexto):**
  - Um recolhimento não deixa mais a IA trabalhando em uma tarefa antiga: o resumo registra como cada pedido anterior terminou, e seu pedido mais recente é reafirmado logo depois.
  - Suas mensagens anteriores vão junto do resumo, palavra por palavra.
  - O resumo é escrito em seções fixas: Objetivo, sua intenção nas suas palavras, Decisões, Notas técnicas, Estado, Próximo.
  - Quando possível, o resumo é escrito sobre a requisição que o agente acabou de enviar, que o provedor ainda tem em cache. É cobrado majoritariamente como leituras de cache e volta mais rápido.
  - No máximo 15.000 tokens de conversa recente são mantidos palavra por palavra ao lado do resumo (antes era 20% da janela, até cerca de 192k em modelos de 1M), então um recolhimento libera muito mais espaço.
  - Um único turno que cresce além da janela (centenas de resultados de ferramentas) agora pode ser recolhido no meio, em vez de ser enviado acima do limite e falhar como erro "upstream".
- **Análises em segundo plano: parar ou reexecutar uma por vez:**
  - Parar em uma análise (no cartão ou na página de relatório) para apenas aquela. A rodada continua com o que já havia encontrado.
  - Repetir reexecuta uma análise com falha, parada ou interrompida sob o mesmo cartão.
  - O líder agora recebe cada rodada uma vez, com como cada análise terminou (concluída, falhou com seu erro, ou parada).
  - Análises cortadas por um reinício voltam como Interrompidas, e a próxima mensagem é informada do que elas encontraram.
  - A página de relatório acompanha a saída nova até você rolar para cima (Ir para o mais recente), mostra uma linha de estado (etapas, duração, tokens, modelo) e tem Copiar relatório.
  - Subagentes não param mais a rodada fazendo uma pergunta.
- **Teams trabalha em rodadas:** o acompanhamento do líder inicia uma nova rodada com suas próprias tarefas, então um relatório da rodada anterior não é mais tomado pelo da nova. O Parar do líder agora para os colegas sem reverter os arquivos deles nem dissolver o time. Parar na página de um colega o marca como parado e avisa o líder. A próxima mensagem o desperta.
- **DarkSelene atravessa problemas de API e retoma de onde parou:**
  - Cada chamada de análise é reenviada após conexão caída, tempo esgotado, 408/429/5xx ou resposta vazia, por cerca de dois minutos. A página e o cartão do chat mostram a reconexão.
  - Uma sessão parada mostra o motivo em vermelho no cartão do chat, com Continuar análise (mantém as etapas concluídas) e Analisar de novo.
  - Se o turno de execução termina com erro, ele pausa mantendo as revisões: Continuar execução (ou Tentar de novo) retoma, e Encerrar e resumir escreve o que foi feito.
  - Chamadas lentas não são mais cortadas aos 3 ou 15 minutos para reenvio: uma chamada silenciosa é acompanhada e só falha quando se confirma que a API caiu.
- **Modo Entanglement:** agora o modelo decide o que prova uma correção (diagnósticos, um teste ou sua confirmação), em vez de listas de palavras adivinharem a partir da sua mensagem. Dizer "continua quebrado" não desfaz mais o último cambio em silêncio; o modelo decide se mantém, ajusta ou desfaz. Explicações e confirmações não são mais pedidas de novo para um registro causal, e entrar no Entanglement não força mais um rastro causal como primeiro passo.
- **Pequenas correções do chat:**
  - Uma resposta concluída não pula mais para cima quando sua barra de copiar/repetir aparece.
  - O cabeçalho do cartão de edição perde a contagem extra de "N changes"; o nome do arquivo e +X/−Y permanecem.
  - Quando o agente continua após uma resposta (um Cross-Check, uma recuperação, a próxima subtarefa roteada), a linha "Decidindo o próximo passo" aparece em vez de um vazio.
  - Uma chamada de ferramenta que o provedor aborta no meio (visto com `gpt-6-astra` via relays: "Tool arguments stopped making progress…") agora é encerrada como falha e reescrita, em vez de terminar o turno como erro de rede.

### Histórico de chat e compositor

- **Painel de histórico de chat redesenhado:** botão Novo Agent, busca com alternador de seleção, abas Agents / Teams / Favorites, grupos por data com cabeçalhos fixos e linhas de duas linhas (título e hora, depois o primeiro prompt e a contagem de turnos, ou os membros do time). Um chat em streaming não faz mais a lista redesenhar a cada quadro.
- **A barra lateral do histórico pode ser redimensionada:** arraste entre 200 e 600 px (padrão 260; antes era fixa em 220, o que cortava "New Agent"). Em larguras estreitas os botões se reorganizam em vez de serem truncados.
- **As etiquetas do compositor ficaram mais discretas:** arquivos, skills, terminal, citações, problemas e o resto compartilham um chip neutro, com a cor de cada tipo apenas no ícone. Os chips de skills aparecem como `/nome`, igual ao menu de barra. As miniaturas de anexos ganham moldura neutra, selo redondo de remover e prévia ao passar o mouse.
- **Skills de outros agentes:** skills instaladas por `npx skills` e outros agentes agora são encontradas em `.agents/skills` e `.claude/skills` (em cada pasta do espaço de trabalho e na sua pasta pessoal) e em `~/.config/agents/skills`. As próprias do Breezell em `.breezell/skills` ainda vencem em caso de nome repetido. O painel de Regras as lista com a pasta de origem. O ponto de Skills na bandeja agora aparece logo após reiniciar.
- **Seletor de modo:** novos ícones de Agent e Entanglement, sem gradiente nos rótulos e um cartão de troca de modo neutro.

### Ferramentas do Agent

- **`run_script` informa o que realmente fez:**
  - Depois que um script edita arquivos, ele lista os erros que essas edições introduziram (mensagem `path:line`), mesmo após falha ou tempo esgotado. Antes retornava um "0 errors" sem sentido.
  - Também lista os outros arquivos que uma edição alcança.
  - Um script que nunca edita roda em somente leitura sem pedir aprovação.
  - Até 1.000 chamadas via ponte, e chamadas acima do limite são informadas em vez de silenciadas.
  - Texto exato pode ser passado como dados em vez de JavaScript escapado, e `edit_file` aceita `dry_run`.
  - Edições no mesmo arquivo rodam em ordem.
  - O cartão diz por que uma execução falhou (rótulo, linha, mensagem) e mostra "N failed" para chamadas que lançaram exceção.
- **Navegação de código que encontra as coisas:**
  - As linhas de `grep_search` são agrupadas sob a função, método ou classe em que estão.
  - Após uma edição, o recibo lista "Outros arquivos que esta mudança alcança": chamadores de uma declaração alterada, removida ou renomeada, com erros de TypeScript.
  - `find_symbol` agora indexa 4.000 símbolos por arquivo (antes 500) e arquivos de até 2M caracteres, espera um pouco por um índice frio, entende nomes de kind de forma flexível e encontra abreviações como "calcTot".
  - As referências de `lsp` vêm agrupadas por arquivo, e `call_hierarchy` aceita profundidade 1–3.
- **Correções de terminal e busca:**
  - Linhas de saída mais longas que a largura do terminal do agente não voltam mais quebradas, com a linha seguinte colada.
  - `grep_search` funciona em arquivos CRLF e com globs de pasta em caminhos absolutos (por exemplo `docs/**`).
  - No PowerShell, as reescritas de `&&` / `||` e `exit` não alteram mais o texto dentro de strings: `git commit -m "Stop on Ctrl+C; exit cleanly"` é confirmado como foi escrito.
  - No Linux e no macOS, caminhos `/mnt/d/…` não são mais confundidos com a unidade D:.
- **A saída de MCP não incha mais o contexto:** um resultado de MCP com mais de 20.000 caracteres é salvo em um arquivo com prévia, como saídas longas de terminal. Imagens de MCP são salvas como arquivos, e só as três mais recentes do turno atual são enviadas ao modelo. Antes, toda imagem de MCP de uma thread era reenviada a cada requisição seguinte.

### Memória

- **Recuperação por contexto, em qualquer idioma:** as memórias agora são escolhidas por um pequeno modelo local que lê seu pedido, a conversa anterior e o arquivo aberto. Palavras-chave e listas fixas de palavras foram removidas. Funciona em qualquer idioma, incluindo tailandês, hindi, coreano e texto latino com acentos, e acompanha uma conversa: um acompanhamento curto que não nomeia nada ainda encontra a memória de que a conversa trata. Memórias antigas e adormecidas têm chance justa, e uma memória adormecida desperta quando um turno claramente precisa dela. Em um conjunto de testes com o qual nunca foi treinado (10 idiomas), turnos que precisavam de uma memória a obtiveram em 62% das vezes, contra 41%.
- **A IA pode consultar memórias passo a passo:** `memories_recall` agora lista um índice (tipo, prioridade, estado, data, como combinou), abre registros completos com o que os liga e permite à IA restringir um resultado: por texto exato, data, tipo, prioridade ou outra formulação da consulta. Não precisa mais de um plano Super Memory, e memórias antigas não são mais rebaixadas pela idade na busca. O cartão do chat mostra todo registro aberto.
- **Estado de memória mais claro:** o chat mostra quando a recuperação está rodando, quando um turno não usou memórias e quando as memórias relevantes já estão antes nesta conversa. A recuperação não trava mais a janela com bibliotecas grandes. Uma memória que outra posterior mostra estar errada é mantida, marcada como não mais válida com um link para o que a substituiu, e nunca é entregue. Nomes de ferramentas não aparecem mais no que você vê de uma memória.
- **Telemetria na nuvem:** se a telemetria na nuvem estiver ativa, os números em que a recuperação decide também são enviados: sem texto, e memórias apenas como hashes com sal. O texto de consentimento diz isso em todos os idiomas, então você será solicitado a concordar de novo.

### Modelos e provedores

- **Novos modelos:**
  - GPT-6.1 Terra (OpenAI, Azure Foundry, login do Codex, OpenRouter e Breezell): o nível GPT-6 rápido e mais barato, com janela de 1,05M. O pensamento pode ser desativado.
  - Kimi K3.1 Pro e K3.1 Pro Highspeed (Moonshot, AIHubMix, Kimi Code, OpenRouter, OpenCode Go e Breezell), com preços próprios.
  - AMD Radeon Cloud: Gemma-4-31B-IT, MiniCPM-V-4.7-35B-A3B e MiniCPM-V-4.7-1B. Qwen3.8-27B ganha janela de 262K. MiMo-V2.6-Flash perde a entrada de áudio e o interruptor de pensamento que seu endpoint não aceita mais.
- **Correções:**
  - DeepSeek V3.1 / V3.2 e o Qwen3-235B-A22B original em Baseten, DeepInfra, Together AI, Fireworks, OpenRouter e Hugging Face mostravam um controle de esforço Low→Max inventado. Agora têm o interruptor de pensamento ligado/desligado que seus hosts suportam.
  - O otimizador de prompts funciona com o GPT-6.1 Sol (ele pedia pensamento desligado, o que a OpenAI rejeita).
  - Os planos de login do Codex usam os nomes oficiais (Pro 100 / 200 / 500, Business, Business Premium, Enterprise, Edu…) em vez de ids crus como SELF_SERVE_BUSINESS_PROLITE. GPT-5.5, GPT-5.4 e GPT-5.4-mini, que o ChatGPT retirou, saíram da lista do Codex.
  - Ativar Fast em um modelo que perdeu o Fast não faz mais toda mensagem falhar: ele é servido no nível padrão.
  - Modelos Breezell mostram Ultrafast quando o serviço oferece, com seu preço.
  - A dica de preço mostra o preço de contexto longo de cada modelo Breezell e todos os dígitos ($26.25, não $26.3).
  - Logins de conta se identificam com as versões atuais do cliente (Antigravity 2.26.0, Kimi Code CLI 2.3.1, DeepSeek Harness 0.2.1-rc.3, Grok Build 1.0.67, Copilot Chat 0.71.0).

### Imagens

- **Um só lugar para modelos de imagem: Box ▸ Modelos ▸ Geração de imagens:** os modelos de imagem dos provedores que você configurou em Modelos aparecem ali, um cartão por provedor, com um modelo padrão e seus próprios parâmetros. Adicione mais a partir do catálogo de cada provedor. O `generate_image` do chat, o modo imagem do compositor e o Image Studio desenham todos com esta lista.
- **Cartões de imagem melhores no chat:** o cartão de `generate_image` mostra com qual modelo vai desenhar, e você pode trocar ali. As imagens abrem em um visualizador (zoom, baixar, copiar, abrir em uma aba do editor). Só se oferece geração de imagens à IA quando um modelo de imagem realmente consegue desenhar, então não há mais cartões que terminam em "Try again later".
- **Editar vários lugares de uma vez:** "Editar isto" em uma imagem abre "Marcar regiões para editar": marque até seis lugares, cada um numerado na sua cor, com suas próprias instruções e um alvo opcional. A caixa de diálogo agora mostra a imagem à esquerda e os lugares à direita. O mesmo funciona no Image Studio.
- **Image Studio reconstruído:** a tela de nós foi substituída por um compositor e páginas: Início (compositor e trabalho recente), uma página de criação com progresso, Parar e os resultados, a biblioteca, um visualizador e configurações. Usa as cores do seu tema, as dicas seguem o editor, todos os modelos de imagem do Box e de perfis de API são oferecidos com os parâmetros que aceitam, e todo resultado fica na galeria.
- **Modelos de imagem da Breezell:** os modelos de imagem próprios da Breezell aparecem como uma única entrada, Breezell. Um modelo de chat da Breezell sempre desenha com eles.

### Rede e confiabilidade

- **De volta aos trilhos após uma mudança de VPN:** quando um cliente VPN ou proxy caía e voltava, as requisições podiam continuar esperando em uma conexão morta por minutos. Agora uma requisição que falha faz a seguinte abrir uma conexão nova e reler o proxy do sistema.
- **Respostas lentas não falham mais em cerca de dois minutos:** nos modelos da Breezell, um modelo que pensa minutos antes da primeira palavra, ou uma imagem que leva mais de dois minutos, falhava com erro 524. Agora a conexão fica aberta, e quanto esperar é decisão do editor.
- **Tempo limite de primeiro byte configurável, e que aprende:** Box ▸ Rede e chat ▸ Tempo limite do primeiro byte: 40 (padrão), 60, 90, 120 ou 180 segundos, ou 20–240. Dentro desse limite, a espera se adapta aos primeiros bytes recentes de cada modelo, então uma requisição travada é repetida mais cedo (verificada a cada 2 s em vez de 10). A lista de saúde da rede mostra por que cada requisição foi repetida (por exemplo "retry #1 after no first byte") e sua espera de primeiro byte.
- **HTTP/2 para requisições do chat:** as requisições do chat agora usam HTTP/2 por padrão, direto e por proxies HTTP, HTTPS e SOCKS. Volte para HTTP/1.1 em Box ▸ Rede e chat. Um servidor que fecha uma conexão HTTP/2 antes de responder recebe a requisição de novo.
- **Regras de repetição em um só lugar:** todos os provedores seguem as mesmas regras. Nunca depois do seu Parar, de uma cota esgotada, de uma requisição rejeitada ou de texto que você já vê. Um stream cortado com "terminated" é repetido como conexão caída. Um "451" no texto de um erro não é mais tomado por bloqueio regional.

### Atualizações

- **As atualizações rápidas não desaparecem mais:** clicar no ícone de novo, abrir um arquivo com o Breezell ou um link de login enquanto o Breezell estava em execução contava como inicialização falha. Duas dessas faziam o Breezell descartar uma atualização rápida que funcionava e voltar de vez para a versão instalada. Isso não conta mais; só falhas reais contam.
- **Atualizações no Box:** o Box tem uma entrada Atualizações no pé da barra lateral, mostrando a versão em execução. Ela acende quando uma atualização rápida é oferecida ou está pronta.
  - Uma nova atualização rápida aparece em um cartão no canto inferior esquerdo. Atualizar agora baixa e instala, e reinicia após uma contagem de 10 segundos (Cancelar, Reiniciar agora). A contagem espera enquanto houver uma conversa rodando em qualquer janela.
  - Reparar esquece inicializações falhas, baixa de novo o pacote mais recente e reinicia nele.
  - Importar pacote instala um arquivo de pacote que você já tem, se o SHA-256 bater com o publicado.
  - Se uma atualização rápida não inicia, a próxima janela avisa uma vez e oferece Reparar e reiniciar.
  - Downloads retomam após uma conexão caída, e instalações esperam uma varredura antivírus liberar a pasta.

### Interface

- **Box redesenhado:** uma barra lateral ramificada. Cartões de conta e troca de espaço (plano, dias restantes, saldo). Uma nova página Modelos: barra de abas, troca de categoria, cartões de provedor menores, linhas de modelo de uma linha com capacidades só em ícones e ações de linha em um menu. Cartões de estatística e medidores menores, e barras de ferramentas mais organizadas quando a configuração de modelos está aberta.
- **Box ▸ Uso ▸ Uso do Breezell:** veja quanto os modelos próprios da Breezell custam, requisição por requisição, com filtros, totais e detalhamento de preço por requisição.
- **Abas do editor:** as cores do Git continuam legíveis nas abas (fundos neutros em vez do tom de destaque). A aba ativa do grupo em foco ganha uma linha curta de destaque, e o verde de "adicionado" do Breezell Dark é mais brilhante.
- **Ícones:** os codicons foram atualizados (101 ícones novos). 24 existentes, como fechar, sincronizar e lâmpada, foram levemente redesenhados.

### Por baixo do capô

- Electron 43.8.4.
- As correções de vazamento de memória do VS Code upstream desde 1.135 foram portadas: editores, terminais, árvores, notebooks e objetos de extensão fechados não retêm mais memória.
- O aplicativo agora é empacotado com esbuild, como o VS Code upstream 1.144 faz.
- Prévia nativa opcional do TypeScript 7: a configuração `js/ts.experimental.useTsgo` e seus comandos voltaram.
- Pacotes do AI SDK e dos provedores atualizados para as últimas versões de correção.
- Os prompts integrados são entregues pelos servidores da Breezell. A página de privacidade agora declara exatamente o que chega aos servidores da Breezell.

## 1.4.37 · Hot Update · 2026-10-21

### Chat

- **Novo modo DarkSelene:** escolha DarkSelene ("Desmonta sua pergunta antes de construir qualquer coisa") no menu de modos abaixo da caixa de entrada. Antes de mudar qualquer coisa, ele pensa do início ao fim sobre uma pergunta difícil ou fácil de interpretar errado. Usa uma quantidade muito grande de tokens, então use com cuidado.
  - Etapa um · entender antes de construir: desmonta a pergunta, investiga o código, questiona, verifica e deriva possibilidades. Antes de investigar, escreve uma Previsão: como a resposta ou a mudança concluída deve ficar, e o que provaria que está errada. A investigação confere apenas esses pontos. Quando o código confirma a previsão de imediato, Questionar e Verificar são pulados.
  - Resolver com evidências: toda pergunta que o código ou o seu pedido possam responder é respondida pelo próprio DarkSelene. Só o que apenas você pode decidir é perguntado em Sua opinião. Responda uma a uma, ou pressione Ir com as recomendações.
  - Etapa dois · executar e revisar: a tarefa que ele preparou é enviada como sua mensagem e executada pelo Agent. Cada leitura inesperada e cada edição do Agent são conferidas contra as evidências por revisores independentes (Revisões de leitura, Revisões de código), e as constatações voltam ao Agent antes de ele continuar.
  - O resumo final do DarkSelene mantém apenas o que as revisões e conferências realmente confirmaram.
- **A IA agora sabe quando um comando em segundo plano termina:** um comando que passava da espera e ia para segundo plano ficava sem relato até você enviar outra mensagem. Agora:
  - o cartão do terminal é atualizado com o resultado assim que o comando termina.
  - enquanto a IA ainda responde, o próximo passo dela recebe o resultado e o trata no mesmo turno: corrige uma falha ou continua o trabalho que esperava por ele.
  - quando a IA já terminou de responder, um novo turno começa sozinho cerca de 1,5 segundo depois de o comando terminar e relata o resultado em uma ou duas frases. Vários comandos que terminam quase juntos iniciam apenas um turno.
  - nenhum turno começa para um comando que você mesmo parou (o ponto de parada ou Ctrl+C), enquanto a IA espera sua aprovação ou resposta, ou logo depois de você pressionar Parar.
- **Editar uma mensagem enviada e enviá-la de novo agora retira a original:** corrigir um erro de digitação só substituía o texto. Os arquivos que a IA tinha alterado por causa do erro e as memórias tiradas daquele turno permaneciam, então a IA muitas vezes continuava na direção errada. Agora, ao editar e reenviar, primeiro se retira a mensagem original e tudo depois dela:
  - os arquivos que a IA alterou desde então voltam ao que eram; os que ela criou são excluídos.
  - as memórias tiradas daquela parte do chat, o registro causal e os esclarecimentos do Entanglement, o arquivo de plano e as notas de trabalho voltam todos ao estado anterior à mensagem.
  - a IA só sabe que você retirou uma mensagem, nunca o que ela dizia.
  - normalmente a mensagem editada é enviada na hora. A confirmação "Retirar e reenviar?" aparece só nestes casos:
    - você também editou arquivos à mão depois da mensagem. Escolha Manter meus arquivos editados para mantê-los, ou Reverter tudo e reenviar.
    - a IA executou comandos cujos efeitos não podem ser desfeitos automaticamente, como git commit ou npm install. Os comandos são listados.
    - o chat não tem checkpoint para voltar. Reenviar de qualquer forma retira apenas a conversa.
  - um anexo que não pode ser enviado (por exemplo um PDF que o modelo selecionado não aceita) é detectado antes de qualquer coisa ser retirada, então uma mensagem nunca é retirada e depois falha no envio.
- **Reverter até este ponto mantém o que você editou antes de enviar:** os arquivos voltavam ao estado do fim do turno anterior, então as edições desse turno e o envio desta mensagem também se perdiam. Agora cada arquivo volta ao estado imediatamente anterior ao toque da IA. Se você enviar uma mensagem após reverter, a IA também é avisada de que o chat foi retrocedido.
- **O título temporário de um chat novo não inclui mais a segunda linha:** até o modelo nomear o chat, o título temporário usa apenas a primeira linha da sua primeira mensagem.

### Modelos

- **DeepSeek V4 Flash lê imagens diretamente:** o `deepseek-v4-flash` oficial e os snapshots `-0731` em relays eram tratados como somente texto, então as imagens passavam pelo proxy de visão (e não podiam ser enviadas de jeito nenhum sem um). Agora as imagens vão direto ao modelo. Um nome `deepseek-v4` sem "Flash" continua tratado como somente texto.
- **Grok 4 com o pensamento ativado não falha mais:** `grok-4`, `grok-4-0709` e `grok-4-latest` mostravam um ajuste de raciocínio de Low a Max e o enviavam com a requisição, que a xAI rejeita. O Grok 4 sempre raciocina, então o ajuste não aparece mais e o parâmetro não é mais enviado.
- **Sem opção de pensamento para Gemini 2.0 Flash:** Gemini 2.0 Flash e Flash-Lite não conseguem pensar, mas eram tratados como modelos que conseguem. A opção de pensamento agora aparece só para Gemini 2.5 e posteriores (e o experimental 2.0 Flash Thinking).
- **O link de confirmação de login do Google não é mais cortado:** quando o Gemini via conta do Google pedia uma confirmação no navegador, o link de confirmação podia ser cortado no primeiro "&" e a página não abria.
- **A API oficial da OpenAI não continua mais uma versão antiga do chat:** com uma chave de API da OpenAI, depois de você editar ou reverter uma mensagem, ou de o chat ser compactado, o servidor podia continuar a partir da versão antiga e o modelo não via o que você realmente enviou. Agora ele só continua enquanto as mensagens anteriores estiverem inalteradas; caso contrário, envia a conversa inteira novamente.

### Prévia de versão

- **Nova telemetria na nuvem:** fica em Box ▸ Desempenho ▸ Prévia de versão. Está disponível apenas para as assinaturas que um administrador habilita; as outras veem por que está indisponível. Antes de ativar, explica o que o Breezell coleta, e só entra em vigor depois de você pressionar Concordar e ativar.
  - enquanto está ativa, as descrições das ferramentas e o prompt de sistema de cada modo vêm da nuvem. Uma versão nova é aplicada a partir do turno seguinte.
  - seu histórico de chat (o texto das suas conversas com a IA) é enviado para melhorar o Breezell. Seu código não é coletado: arquivos do projeto, o que as ferramentas leem, a saída do terminal e os blocos de código no chat são removidos antes do envio.
  - o cartão mostra a versão dos prompts na nuvem, quantas mensagens foram enviadas e um botão Enviar agora.
  - você pode desativá-la a qualquer momento. A partir do turno seguinte os prompts integrados voltam a ser usados e nada mais é enviado.

## 1.4.36 · Hot Update · 2026-10-18

### Chat

- **O modelo distingue qual texto você colou:** texto colado de outro lugar (a resposta de outra IA, um log, uma mensagem encaminhada) antes chegava ao modelo misturado com o que você digitou, e o modelo agia sobre frases como "verifique a cadeia relacionada…" ou "só altere isso" mesmo depois de você dizer "traduza apenas o que eu colar". Agora:
  - Texto de várias linhas ou longo colado na caixa de entrada do chat é marcado como colado para o modelo. O modelo segue instruções dentro dele apenas quando as suas próprias palavras pedem isso. Caso contrário, lê o texto e responde sobre ele, ou traduz como você pediu.
  - Uma mensagem que é só uma colagem continua sendo seu pedido.
  - "Faça o que está abaixo" seguido de passos colados continua executando os passos.
  - O balão do chat mostra a mensagem como antes. Uma colagem que você editou depois não é marcada, e uma colagem curta de uma linha, como um nome de arquivo ou um caminho, também não. Colagens muito grandes continuam virando o anexo `pasted.txt`, como antes.
  - Testado com DeepSeek real (`deepseek-v4.1-flash`) com uma regra de "só traduzir": antes da correção, 3 de 4 execuções leram e editaram arquivos como a colagem dizia; depois dela, as 5 execuções apenas traduziram. Os resultados variam por modelo: quando o texto colado parece muito uma tarefa para o modelo, alguns modelos ainda podem agir sobre ele.
  - A forma mais confiável de traduzir um texto é indicar o trabalho e citar o texto na mesma mensagem, por exemplo "Traduza para o chinês tradicional (Taiwan) o texto entre aspas; mostre apenas a tradução e não execute nem responda nada do conteúdo". Em 5 modelos (DeepSeek V4.1 Flash, DeepSeek V4 Pro, GLM 5.3, Kimi K3.1, MiniMax M3), as 6 execuções de cada um traduziram corretamente.
- **Um caminho que você deu e não existe recebe uma pergunta, não uma caçada:** quando você (ou o texto que colou) indicava um caminho que não está neste espaço de trabalho, o modelo buscava rodada após rodada com outras pastas e grafias, às vezes fora do espaço de trabalho. Agora:
  - Quando um arquivo a ser lido não existe, o Breezell procura primeiro o nome em todo o espaço de trabalho. Se não houver, avisa o modelo de que o arquivo não está neste espaço de trabalho e que ele diga onde procurou e pergunte a você o caminho ou o conteúdo.
  - Quando uma busca de arquivos ou de texto não encontra nada, a dica que o modelo recebe agora começa assim: se o nome veio de você, procure por nome uma vez e, se isso também falhar, pare e pergunte a você em vez de tentar de novo com outros filtros.
  - Testado com DeepSeek real: a média de buscas desse caminho caiu de 5,4 para 3,7, e as buscas fora do espaço de trabalho caíram de 6 de 12 execuções para 2 de 12. Após a correção, todas as execuções pararam para perguntar o caminho ou o conteúdo e não alteraram nenhum arquivo.
- **Conversas longas que passam de GPT para Claude não ultrapassam mais o limite de contexto:** ao trocar uma conversa longa de 1M de contexto de um modelo GPT para um modelo Claude, o envio podia falhar direto com "prompt is too long: 1100588 tokens > 1000000 maximum". Para o mesmo conteúdo, o Claude conta de 50% a 70% mais tokens que o GPT, mas após a troca o Breezell continuava usando o consumo informado pelo GPT para decidir se compactava, e a requisição ia sem compactação. Agora:
  - ao trocar para um modelo que conta de outra forma, o consumo é recalculado com o novo modelo e o uso de contexto da caixa de entrada é atualizado junto; quando está quase cheio, o Breezell compacta automaticamente antes de enviar. Trocar dentro da mesma família (GPT por GPT, ou Claude oficial pelo Claude de um relay) continua reaproveitando o consumo exato.
  - modelos Claude acessados por relays compatíveis com OpenAI, OpenRouter e semelhantes agora contam os tokens do jeito do Claude, em vez de ficarem de 10% a 20% abaixo.
  - quando um modelo informa que o limite de contexto foi ultrapassado, a compactação automática sempre dobra primeiro o conteúdo mais antigo e depois tenta de novo; antes, uma conversa longa já compactada podia ser reenviada como estava, sem dobrar nada, e falhar de novo.
- **Depois de parar ou de enviar uma mensagem no meio da resposta, o modelo sabe que a resposta anterior ficou incompleta:** antes, uma resposta interrompida passava despercebida ao modelo, que podia tratar trabalho pela metade como ainda em andamento, ou uma frase acrescentada como a tarefa inteira. Agora:
  - se você envia uma mensagem depois de pressionar o botão de parar da caixa de entrada (o ícone quadrado) ou Esc, o modelo sabe que você parou de propósito. A menos que peça para continuar, ou acrescente ou corrija aquele trabalho, ele não segue adiante nem toca no assunto.
  - se você pressiona "Enviar agora" na fila enquanto uma resposta ainda roda, e a nova mensagem acrescenta ou corrige o trabalho recém-feito (por exemplo "e o telefone deve ser somente leitura" ou "continue"), o modelo conclui aquele trabalho com a mudança incluída; se for outra coisa, faz apenas o novo e menciona em no máximo uma frase que a resposta anterior ficou incompleta.
  - um pedido novo que apenas menciona o mesmo arquivo ou página não é tomado como sinal para continuar o trabalho antigo.
### Memória

- **Os arquivos de memória não aparecem mais nas buscas:** os arquivos de memória (`.breezell/memories/workspace_memories.md` no projeto e `global_memories.md` na sua pasta de usuário) são notas sobre como as coisas estavam quando foram escritas. As buscas de código costumavam retorná-los junto com o código, e o modelo podia tomar uma entrada muito desatualizada como a especificação atual e desfazer o que você pediu recentemente. Agora:
  - A busca de texto, a busca de símbolos e a busca por nome de arquivo não retornam mais esses dois arquivos de memória, mesmo quando se pede para incluir arquivos ignorados. Os arquivos de regras da mesma pasta (`global_rules.md`, `global_skills.md` e outros) e os demais arquivos em `.breezell/` são buscados como antes e não são tratados como notas datadas.
  - Quando o modelo abre um arquivo de memória diretamente, é avisado de que as entradas são notas datadas que podem estar desatualizadas. Seu pedido mais recente e o código atual mandam: o modelo aponta a divergência e pergunta se deve atualizar aquela entrada.
  - O modelo escreve memórias como "como as coisas estão nesta data", com suas condições, e não como regras permanentes. Quando a própria mudança dele deixa uma entrada errada, ele atualiza ou exclui essa entrada no mesmo turno.
- **Memórias de uma conversa não são mais injetadas de volta nela:** as memórias relevantes em "Injetadas N memórias (… residentes · … relevantes)" não incluem mais memórias extraídas da conversa atual. A conversa já contém esse conteúdo, em ordem; injetado de novo como memórias, soava como regras permanentes, podia puxar o modelo de volta a um pedido anterior e ocupava o lugar de memórias de outras conversas. Outras conversas continuam usando essas memórias, e as que você salvou não são afetadas. Quando uma memória e o código divergem, o modelo agora menciona isso em vez de alterar código sobre o qual você não perguntou.

### Editor

- **"Próximo →" na barra de N arquivos alterados não fazia nada:** depois que a IA edita arquivos, a parte inferior do editor mostra "9 arquivos alterados" e "Próximo →". Se o primeiro arquivo da lista não abrisse mais (excluído ou renomeado depois, ou uma alteração sobrando de uma sessão anterior), "Próximo →" não fazia nada: como o arquivo aberto não estava na lista, cada clique tentava de novo o mesmo arquivo, e o botão nunca funcionava. Agora:
  - Um arquivo que não abre é ignorado, e o salto cai no próximo arquivo alterado que abre. O mesmo vale para as setas esquerda e direita da barra (arquivo anterior/próximo) e para os atalhos Ctrl+Alt+Shift+→/← (Mac: Ctrl+Option+→/←).
  - Quando nenhum dos arquivos da lista abre, uma notificação explica o motivo.
  - Os botões funcionam quando o foco não está em um editor (por exemplo, logo após clicar em outro painel).
  - Alterações que ficam em um espaço de trabalho remoto (SSH, WSL) não voltam mais como caminhos locais que não podem ser abertos depois de reiniciar o Breezell.

### Modelos

- **MiniMax M3.1 Flash adicionado:** `MiniMax-M3.1-Flash` está disponível em MiniMax (chave de API) e em Conta MiniMax (login com uma conta MiniMax), primeiro na lista de modelos da MiniMax.
  - Contexto de 1M e entrada de imagens.
  - O modelo sempre pensa; o pensamento não pode ser desativado. A intensidade de raciocínio é Low, Medium, High, Extra High ou Max, e o padrão é High. Quando nenhuma intensidade é informada, a MiniMax usa Max, que é mais lento e consome mais cota.
  - Os dois formatos de API, OpenAI e Anthropic, funcionam. A MiniMax recomenda Anthropic.
  - O mesmo modelo por um relay ou OpenRouter (por exemplo `minimax/minimax-m3.1-flash`) também recebe esses ajustes, em vez dos ajustes do M3 de "o pensamento pode ser desativado", que este modelo recusa.
  - A MiniMax ainda não publica um preço por uso para este modelo; ele precisa de uma chave do M Plan.

### Modo Entanglement

- **O "Modo de interação humana" não trava mais em modelos que não aceitam ferramenta imposta:** com o "Modo de interação humana" da "Verificação estrita do modo Entanglement" ativado, o Breezell pede ao modelo que confira os requisitos com você pelo painel de perguntas. Alguns modelos não conseguem: o GLM ignora o pedido e responde em texto, e essa resposta era descartada como erro (AI_ToolChoiceViolationError) enquanto o cartão de erro culpa a rede; Kimi e DeepSeek V4 com o raciocínio ativado recusam o pedido de imediato (HTTP 400). A conferência nunca terminava e todas as mensagens seguintes falhavam do mesmo jeito. Agora:
  - quando o modelo responde em texto em vez de usar o painel de perguntas, essa resposta é preservada.
  - quando o modelo recusa, a requisição é reenviada sem impor ferramenta.
  - o Breezell memoriza esse modelo e deixa de pedir o painel de perguntas para ele.
  - o modelo pergunta dentro da própria resposta, e a linha exibe "Este modelo não pode usar o painel de perguntas e pergunta na resposta; sua próxima mensagem é a resposta"; depois que você responde, exibe "Entendido e conferido com você na conversa", a conferência é concluída e as ferramentas são liberadas.
  - o cartão de erro indica corretamente que o modelo não chamou a ferramenta exigida, em vez de apresentar isso como problema de rede.

## 1.4.35 · Hot Update · 2026-10-18

### Chat

- **O modo Agent não muda mais para o modo Entanglement:** com a estratégia adaptativa ativada, tarefas que o modo Agent classificava como "estritas" (uma mensagem descrevendo um defeito ou uma nota de atualização colada descrevendo correções, por exemplo) passavam a rodar no modo Entanglement, exibindo o painel de investigação LOCATE／VERIFY／FIX, o critério de conclusão e a verificação estrita "este tipo de sintoma é confirmado por você". Agora o modo Agent sempre roda como Agent, com o conjunto completo de ferramentas; o painel de investigação e a verificação estrita do Entanglement aparecem apenas quando você mesmo seleciona o modo Entanglement.
- **Rolar para cima não deixa mais a tela em branco nem volta ao final:** em uma conversa com uma mensagem muito longa, rolar para cima perto dela podia deixar a tela em branco de repente e, ao rolar mais, a lista inteira voltava ao final — e isso acontecia toda vez que a conversa era reaberta. A causa era a mensagem longa ser renderizada primeiro com a altura completa e recolhida um instante depois, fazendo a lista da conversa se reorganizar repetidamente. Agora a mensagem longa já aparece com a altura recolhida desde o início, e a rolagem para cima para onde você rolou.
- **Paciência com relays que seguram as respostas:** alguns relays seguram todo o processo de raciocínio do modelo e só o entregam quando o raciocínio termina, deixando o chat completamente parado por dez segundos a vários minutos. Modelos marcados pela "Verificação de streaming" agora:
  - são enviados com a intensidade de raciocínio que você configurou e nunca são reduzidos automaticamente;
  - aguardam a resposta em vez de considerá-la expirada, abortar e tentar de novo após um silêncio longo;
  - enquanto esperam, verificam a API a cada 5 segundos e enviam um breve "olá" a cada 20 segundos para confirmar que o modelo ainda responde — aceleram quando uma verificação falha e voltam ao ritmo normal quando ela funciona;
  - mostram "O modelo está pensando: este relay segura o processo de raciocínio · 32 s · API normal (confirmada 3 s atrás)", para você saber que ele continua trabalhando;
  - só param quando uma verificação confirma que a API realmente não responde, exibindo "API confirmada sem resposta", sem nova tentativa automática; ao expandir, aparecem o número de verificações e o último erro.
- **Copiar o conteúdo da conversa:** o texto copiado de uma conversa e colado em outro lugar mantém a formatação que você via na tela e não traz mais símbolos Markdown como `**`, `#` e `-`. "Citar" continua mantendo Markdown, e agora parágrafos e itens de lista quebram linha corretamente.

### Modelos e conectividade

- **Nova "Verificação de streaming":** em Box ▸ Modelos ▸ Compatível com OpenAI ▸ Conectividade, selecione modelos e pressione "Verificação de streaming". O modelo responde a uma breve questão de raciocínio e depois conta de 1 a 120 enquanto o Breezell registra quando cada trecho chega e classifica o resultado:
  - Streaming normal: o conteúdo chega trecho a trecho.
  - Raciocínio segurado: a resposta chega trecho a trecho, mas o processo de raciocínio é retido pelo relay, então o chat fica em silêncio primeiro e depois mostra tudo de uma vez.
  - Buffer completo: a resposta inteira chega só no final.
  - Inconclusivo: a resposta é curta demais.
  Modelos classificados como "raciocínio segurado" ou "buffer completo" ficam marcados e passam a usar o comportamento de espera acima no chat; a marca é removida quando uma nova verificação volta normal, quando a verificação falha ou quando o endpoint muda. Cada modelo usa cerca de 300 tokens de saída, mais tokens de raciocínio nos modelos de raciocínio.
- **Selecionar primeiro, verificar depois:** a página de conectividade não verifica mais todos os modelos automaticamente ao abrir. Selecione os provedores e modelos que deseja verificar (há selecionar tudo e limpar seleção) e escolha "Apenas verificar conexão", "Verificar selecionados" ou "Verificação de streaming"; os itens não selecionados mantêm os resultados anteriores.
- **Novos modelos no OpenRouter:**
  - DeepSeek V4.1 Flash 1017 (`deepseek/deepseek-v4.1-flash-1017`): contexto de 1M, texto e imagens, intensidade de raciocínio low／high／max, com opção de desativar o raciocínio.
  - Xing4.0 29B A4B gratuito (`xingchen-agi/xing4.0-29b-a4b:free`): contexto de 262K, somente texto, suporta chamadas de ferramentas e raciocínio ativável ou desativável.

### Interface

- **Separador com a barra lateral principal à direita:** na interface clássica com a barra lateral principal à direita, o editor e o painel inferior ficavam sem a linha separadora na borda direita; e, se a barra lateral secundária também estivesse oculta, a borda esquerda da janela ganhava um vão e uma linha a mais. Ambos os problemas foram corrigidos.
- **Menu da barra lateral do Box totalmente visível:** com a barra lateral do Box recolhida em uma faixa de ícones, o menu aberto ao clicar em um grupo mostrava apenas uma faixa fina. Agora o menu aparece por completo dentro da janela e acompanha a posição ao rolar ou redimensionar a janela; o seletor de espaço e o menu da conta funcionam da mesma forma.

### Ferramentas

- **Chamadas de ferramentas mais precisas:**
  - A busca na web respeita a quantidade de resultados, a profundidade de busca e o tópico indicados pelo modelo, em vez de ignorá-los.
  - Parâmetros de lista e booleanos declaram o tipo, então provedores estritos não recebem mais parâmetros tratados como texto, e um parâmetro cuja descrição apenas menciona "optional" não é mais tomado como opcional.
  - A busca de texto ganha correspondência de palavra inteira, limite de resultados por arquivo e a possibilidade de buscar arquivos excluídos pelas regras de ignorados; a busca de arquivos permite indicar uma pasta; e a navegação de código aceita um número de linha para chegar ao ponto exato que o modelo quer.
- **O navegador em segundo plano deixa isso claro:** quando um modelo abre uma página no navegador headless (uma janela em segundo plano que você não vê), ele agora informa que a página foi carregada em segundo plano em vez de afirmar que a abriu para você, e explica como assistir: abra a aba "Navegador" e navegue de novo, ou desative "Navegador headless" em Configurações ▸ Recursos.

## 1.4.34 · Hot Update · 2026-10-17

- **O raciocínio não vaza mais para a resposta:** ao usar um serviço compatível com OpenAI (como o DeepSeek em um gateway próprio), se o nome do modelo não estivesse na lista integrada, o raciocínio estivesse desativado nas configurações do modelo ou a extração de raciocínio estivesse definida como `native`, o processo de pensamento aparecia no início da resposta junto com as tags `<think>`. Agora o pensamento é exibido sempre na área de raciocínio e a resposta traz apenas o resultado.
- **Interação humana ativa apenas no modo Entanglement:** após ativar o modo estrito e a interação humana, se a estratégia adaptativa classificasse a tarefa como nível estrito no modo Agent, antes também era exigido responder a perguntas de confirmação primeiro com as ferramentas bloqueadas. Agora essa confirmação só ocorre quando você seleciona manualmente o modo Entanglement.
- **Símbolo `@` mais nítido:** o botão `@` da caixa de entrada, o título do menu `@` e as dicas de atalho na página em branco agora usam a fonte da interface em negrito, deixando de parecer finos ou achatados.
- **Transição mais suave para a interface clássica:** ao voltar da interface moderna para a interface clássica, a caixa de entrada não faz mais fade-out a partir da cor de fundo da interface moderna.

## 1.4.33 · Hot Update · 2026-10-15

- **Anexos de vídeo:** um vídeo solto no chat agora é sempre enviado e não é mais bloqueado por o modelo não constar em uma lista de suporte (como o `kimi-k3`, por exemplo). A capacidade de compreender o vídeo fica a cargo do modelo e do seu provedor. Como os formatos Anthropic e OpenAI Responses não transportam vídeo, o modelo é informado de que o vídeo não foi anexado e a requisição segue normalmente.
- **Chamadas de ferramentas mais estáveis:** quando um modelo escreve chamadas de ferramentas como texto, um parâmetro do tipo string não converte mais `true`, `null` ou `123` em booleano ou número, e a substituição de código Python não reescreve mais `True` e `None` dentro de strings como `true` e `null`.
- **Parada e erros:** pressionar Parar ou encontrar um erro durante o raciocínio preserva o tempo de pensamento com uma casa decimal (em vez de exibir `0.1s` ou arredondar para segundos inteiros), e a resposta salva não mantém mais marcações internas.
- **Card de troca de modo:** após Pular, Cancelar ou o fim da contagem regressiva, o chat aguarda a execução anterior terminar antes de prosseguir, evitando sobreposições. Enviar uma mensagem da fila enquanto o card aguarda faz com que a nova mensagem assuma a execução.
- **Agent Teams:** cada colega de equipe inicia a partir da mesma primeira mensagem, que traz sua solicitação original (nunca um aviso do sistema no lugar), inclui o ID da tarefa e exige a mesma verificação esperada pela checagem de conclusão. Parar ou dissolver um colega de equipe limpa totalmente os recursos.
- **Lista de ferramentas:** a ferramenta descontinuada `create_team` não aparece mais nos modos Agent, Entanglement, Analyze ou Plan, evitando que os modelos chamem esse ponto de entrada inativo.
- **Verificação de arquivos:** assim que um arquivo verificado é reescrito por inteiro ou alterado por um script, a verificação anterior deixa de valer e o arquivo precisa ser verificado novamente.
- **Estratégia adaptativa:** uma requisição de triagem que atinge o tempo limite é sempre cancelada, em vez de manter o modelo ocupado em segundo plano.

## 1.4.32 · Hot Update · 2026-10-15

- **Teams:** o card de relatório de um colega de equipe não exibe mais linhas de "x" quando a resposta do líder foi descarregada da memória; a mesma correção cobre o relatório do Analyze, a geração de mensagens de commit e os resumos do modo competitivo.
- **Novo modelo:** Meta Muse Spark Open (pesos abertos, contexto de 1M, esforço de raciocínio `low`–`xhigh`) disponível no OpenRouter, Fireworks, Groq e em qualquer endpoint compatível com OpenAI.

## 1.4.31 · Hot Update · 2026-10-15

- O campo de intervalo de verificação na página de versão não exibe mais setas para cima/para baixo; digite diretamente o número de segundos.
- Edições de arquivos, verificações de lint e checkpoints mais rápidos, além de execuções de ferramentas mais estáveis: uma única chamada de ferramenta agora segue o mesmo fluxo que várias, uma falha ao atualizar o plano não interrompe mais o turno e ferramentas aguardando aprovação em paralelo agora exibem esse status.
- Respostas mais confiáveis via serviços de retransmissão (relay): quando um relay encerra uma resposta sem informar que terminou, o Breezell preserva a resposta completa, tenta novamente aquela que nem chegou a iniciar e exibe o que o relay enviou por último.
- Versões completas (Full Releases) agora podem substituir atualizações rápidas (hot updates) com número de versão superior ao próprio.

## 1.4.3 · 2026-10-15

### Novos recursos
- **Modelo Meta Muse Wonder:** suporta até 1 milhão de tokens de contexto, aceita entradas de vídeo e áudio e oferece intensidade de inferência ajustável em 6 níveis (do mais baixo ao mais alto).
- **Login com conta Muse Code:** autorize via conta Meta para acessar o Muse Wonder; o login funciona com proxies HTTP personalizados.
- **GPT-6.1 Sol adiciona contexto de 500K:** ao rotear pelo Codex e pelo Breezell, as opções agora incluem 272K, 500K ou 1M; o padrão permanece em 272K.
- **Atualização rápida (Hot Update):** pacotes futuros podem ser baixados diretamente dentro do editor sem precisar reinstalar o instalador completo. O progresso do download é exibido e aplicado após reiniciar. Janelas remotas WSL/SSH continuam utilizáveis durante as atualizações rápidas.
- **Menu de clique direito na caixa de entrada do chat:** inclui Desfazer, Refazer, Recortar, Copiar, Colar e Selecionar tudo.
- **Alerta de cota esgotada:** quando a cota da sua conta Breezell acaba, um aviso com o botão "Recarregar" aparece acima da caixa de entrada e desaparece automaticamente após a recarga, evitando mensagens de erro tardias após o envio de requisições.

### Melhorias
- **Gemini 4 Argon:** alinhado com a API oficial lançada; disponível no OpenRouter e no Vertex.
- **DeepSeek:** usa o formato Responses por padrão, exigindo apenas a chave de API nas configurações.
- **Gemini com Conta do Google:** requisições dentro da mesma conversa compartilham o estado da sessão, melhorando a taxa de acerto de cache e reduzindo custos.
- **Modelos de alias do Breezell:** a intensidade de inferência selecionada persiste corretamente (por exemplo, "minimal" não muda mais automaticamente para "medium") e é mapeada para o nível de modelo correspondente.
- **Modelos de inferência:** prompts grandes via WebSocket do Responses não expiram mais após 60 segundos e recorrem automaticamente a uma nova tentativa via HTTP quando a conexão não responde.
- **Code Review**
- **Modo Plan:**
  - **Permissões de ferramentas:** ferramentas de terminal e editor permanecem disponíveis para todas as ações, exceto perguntas simples, removendo o erro "This conversation has no permission to run commands".
  - **Confirmação humana:** se a confirmação do turno anterior estiver pendente, a próxima mensagem solicitará a confirmação primeiro, sem aplicar bloqueio permanente de somente leitura.
- **Chinês tradicional:** notificações de atualização, janela Sobre, avisos de caminho WSL, botões de diff, mensagens de erro do Image Studio, página de login do DeepSeek e nomes de países/idiomas na tradução de palavras agora são exibidos em chinês tradicional.

### Correções
- O diff de arquivos recém-criados não exibe mais uma linha em branco excluída extra indevida (anteriormente mostrava `+4 −1`).
- Arquivos de linha única agora exibem o diff correto `+1 / −1` (anteriormente `+2 / −2`).
- Após rolar conversas longas, os caminhos e números de linha dos arquivos editados são preservados, e as etapas do Code Review não voltam ao estado de carregamento.
- Itens de tarefas (to-do) fora da tela mantêm seu conteúdo, sem lacunas em branco na conversa nem saltos ao rolar para cima.
- A rolagem e os cliques no chat funcionam corretamente em telas sensíveis ao toque e ferramentas remotas de toque.
- Após atualizar a lista de modelos, IDs de modelos personalizados não são mais marcados como expirados e removidos.
- Falhas de login no Grok agora indicam qual rota de rede e host não puderam se conectar.
- Corrigidos o roteamento e a cobrança para os perfis de velocidade Fast e Ultrafast.
- A desinstalação de uma atualização rápida não exclui mais arquivos dentro do diretório de instalação (evitando falha de inicialização "Cannot find package").

## 1.4.2 · 2026-10-10

### Novos recursos
- **Controle de desktop:** visualize a tela, clique e digite no Windows; o macOS utiliza um assistente nativo em Swift para os mesmos recursos. Permite abrir aplicativos pelo nome, e os snapshots de janela agora capturam pop-ups e camadas modais. Totalmente compatível com o modo Entanglement. O Linux ainda não é compatível e está planejado para versões futuras.
- **Monitoramento de modelos no Box:** nova página dedicada que verifica os provedores configurados ou autenticados apenas ao ser aberta, exibindo o histórico por meio de uma barra colorida de 90 dias.
- **Seleção automática de modelos (experimental):** divide e valida tarefas com uma página de análise dedicada. As páginas de rede e conversa agora oferecem visibilidade camada por camada do roteamento do modelo ativo, além de verificações de rota para requisições travadas.
- **Login direto de contas:** adicionado login direto para DeepSeek, MiniMax e OpenRouter, além de login pelo cliente desktop para o Gemini.
- **Image Studio:** suporte à geração de imagens e vídeos via OpenRouter.
- **Novos modelos:** adicionados Claude Haiku 5.5 (com alternância de desativação do pensamento), Claude Opus 5.5, Mistral Large 4, Nano Banana 2.1, Fledge Alpha, Ling 3.1 Flash, Apodex 1.1 Mini, Aion 3.5 / Mini, Pareto 26.10 Preview e Glyph Cluster. Modo Ultrafast disponível para GPT-6.1 Sol e GPT-6 Astra, inclusive no Codex. Step 5 Preview agora suporta entrada de vídeo.
- **Aprimoramentos no modo Entanglement:** introdução de verificação estrita e perfis adaptativos. Agora é possível fazer perguntas durante tarefas ativas, com respostas preservadas na sessão. O motor causal passa a exigir a validação de "falhar primeiro e passar após a correção".
- **Conversas:** tradução com um clique para processos de raciocínio. Links da web agora exibem o favicon do site. Links de arquivos trazem dicas simplificadas de caminho com visualização de imagens. Imagens suportam zoom com a roda do mouse e movimento por arrasto. Agora é possível criar ramificações (branching) a partir de qualquer turno da conversa.
- **Agent:** visualize e encerre tarefas em segundo plano. Permite buscar conversas recentes pelo título. Reative Skills desativadas diretamente pelo menu de barra (`/`). Workspaces multirraiz agora carregam Skills e regras de todas as pastas.
- **Terminal:** a barra de status agora exibe a velocidade de upload e download de comandos em tempo real no Windows, proxy local e macOS.
- **Outras atualizações:** o Copilot exibe o ícone de marca para cada modelo. Tarefas de planos em execução agora podem ser renomeadas ou adicionadas. Habilidades do Superpowers atualizadas para a v6.4.2. A contagem de uso do Box agora registra requisições em segundo plano. A página de configuração de modelos foi remodelada com barra lateral e painéis ajustáveis de lista e detalhes.

### Correções
- Corrigido um problema em que a cópia de mensagens fazia com que respostas fora da tela se transformassem em uma longa sequência de "x".
- Resolvido um problema em que falhas de edições paralelas no mesmo arquivo exibiam repetidamente mensagens idênticas de "Edit attempted".
- Ao interromper a compactação de contexto em andamento, o processo é encerrado de forma limpa sem reter conteúdo incompleto.
- Chamadas de ferramentas travadas agora são tratadas como falhas e orientam a divisão em etapas menores em vez de repetir a mesma requisição.
- As edições não são mais marcadas indevidamente como expiradas quando o modelo já tiver lido o intervalo ou correspondido de forma aproximada ao texto atual.
- Corrigida a perda da parte final de respostas de contas do Google quando divididas em múltiplas leituras de rede.
- Pressionar Enter repetidamente enquanto uma mensagem está sendo enviada não enfileira mais envios duplicados.
- Corrigido um problema em que o arquivo completo de Skills ainda era injetado no prompt do sistema mesmo com todas as Skills desativadas.
- Corrigido o congelamento de toda a sessão de conversa quando uma ferramenta do navegador integrado entrava em espera indefinida.
- Corrigido o envio de portas redundantes `:443` no cabeçalho `Host` via proxy HTTP; endereços de loopback agora contornam o proxy corretamente.
- Resolvido um problema em que a rolagem para cima em conversas finalizadas fazia a tela saltar inesperadamente para o final.
- Corrigida a falta de espaçamento para os botões de controle de janela à esquerda na barra de título do Linux e no Image Studio.
- Corrigida a perda de edições pendentes de confirmação quando uma ferramenta realizava a sobrescrita completa de um arquivo.
- Corrigida a falha ao abrir conversas antigas no Windows e resolvidos dois erros de tipos desatualizados no pacote de configurações.

### Melhorias
- **Conversas longas:** redução de travamentos, picos de latência e oscilações de desempenho em sessões extensas.
- **Diagnóstico de desempenho:** ativar o monitoramento agora exibe os tempos de execução dos caminhos críticos, a contagem de corpos de mensagens na memória e se o armazenamento local foi acessado na inicialização.
- **Runtime:** atualização do Electron para a versão 43.7.9.
- **Preços e catálogo:** preços de modelos sincronizados com as taxas oficiais dos provedores. As opções hospedadas de Qwen e Grok mantêm apenas as camadas oficiais de contexto. A lista do Gemini (Google) passa a exibir apenas os modelos de conversa acessíveis de fato pela conta.
- **Terminal:** removido o eco redundante da linha de comando, reconhecendo prompts personalizados do shell e exibindo o código de saída (exit code) ao término. Os cards de comando permanecem compactos até que haja saída no terminal.
- **Interface:** estilo visual unificado entre o seletor de modelos e o modal de modelos nas configurações. A caixa de entrada de conversas e a bandeja inferior foram consolidadas em um único card.

## 1.4.1 · 2026-10-01

### Novos recursos
- **Pré-análise de memória no Box (experimental):** memórias relevantes são selecionadas antes de cada resposta. A página de análise de memória mostra o progresso do streaming. O slot do modelo chama-se **MemoryPreflight**.
- Agora é possível exportar pacotes de memória a partir do Box.
- O login no desktop agora é confirmado no navegador antes de retornar ao editor.
- **Alternância de monitoramento de desempenho no Box:** o monitoramento de desempenho agora pode ser ligado ou desligado. As métricas agrupam janelas por servidor remoto e limpam extension hosts órfãos.
- O buffer do terminal agora é limpo automaticamente.
- Agora é possível citar conversas anteriores na sessão atual; elas vêm marcadas com um robô dourado e são limpas junto com a bandeja de entrada.
- Operações do navegador por IA agora rodam por padrão em janelas ocultas; os snapshots de página passam a ler a árvore de acessibilidade, configurável nas opções de recursos do Box.
- Adicionado suporte ao provedor de modelos AMD, **GPT-6.1 Sol** e **Gemini 4 Argon**.

### Correções
- **Manter tudo / Rejeitar tudo** agora afeta apenas a conversa atual. Renomeações e arquivos novos confirmados são liquidados corretamente, permitindo limpar a barra de ações.
- Cada etapa das ferramentas permanece na linha de carregamento e só passa ao estado concluído quando o resultado chega.
- Os blocos de código em streaming agora fecham de acordo com o padrão CommonMark. O esforço de raciocínio enviado ao Gemini fica restrito aos níveis suportados de fato pelo Code Assist.
- A análise de memória não falha mais ao encontrar `{}` vazio. O planejamento de busca ficou mais preciso e consome menos tokens.
- Os cards de script agora exibem apenas a quantidade de arquivos modificados (por exemplo, "1 edited"), sem listar novamente todos os nomes de arquivo.
- O motivo detalhado é exibido quando a validação de assinatura falha. Subprocessos interrompidos precocemente encerram imediatamente sem deixar processos órfãos.
- Corrigidas as oscilações e trepidações de layout na página de conversa.
- Correção de vários pequenos bugs e melhorias de estabilidade.

### Melhorias
- Os diffs no Code Review agora são montados sob demanda, as medições de layout passam a ser feitas em lote e a busca no banco de memórias ficou mais rápida.

## 1.4.0 · 2026-09-26

### Novos recursos

#### Modelos e recursos
- **Modelos pré-configurados:** adicionados GLM-5.5 Flash, GLM-5.4, Kimi K4, DeepSeek V4.1 Pro e Muse Spark 1.4.
- **Image Studio:** suporte a Hy Image 3.5 e Qwen Image 2.1.

#### Interação e design
- As prévias de design agora usam o tema atual do editor e as próprias variáveis de design do projeto, em vez de aplicar uma paleta fixa. Variáveis CSS não declaradas agora retornam orientações em vez de falhar a solicitação. Se o workspace contiver `DESIGN.md`, suas regras são incluídas no prompt do fluxo de trabalho.
- Cards de propostas de design agora são exibidos por padrão em painel inteiro, um por vez. Alterne entre propostas com abas ou teclas direcionais; a comparação lado a lado continua disponível com um clique.
- Propostas confirmadas são salvas como arquivos HTML independentes em `.breezell/design/`. Os resultados das ferramentas apontam especificação, plano e implementação para o mesmo arquivo, evitando divergências em relação ao design selecionado.

#### Notificações
- O painel de notificações agora conta com uma lista à esquerda e detalhes à direita.
- Todas as notificações importantes permanecem fixadas no topo, em vez de mostrar apenas a primeira.
- Os painéis de lista e detalhes rolam de forma independente.

### Correções

#### Conversa e Agent
- Ao criar um ramo, o corpo da conversa de origem é copiado primeiro. Ramos antigos que já haviam perdido o corpo podem recuperá-lo por número de linha.
- Mensagens recarregadas liberam a altura do espaço reservado após o retorno do corpo. Blocos recolhidos de ferramentas e raciocínio não mantêm mais a altura que tinham quando expandidos. O botão de ramificação ignora cliques repetidos até que a operação termine.
- Conversas longas agora abrem como uma lista contínua única: corpos ainda não rolados mantêm placeholders e carregam sob demanda. O aviso de “mensagens arquivadas” e a antiga janela restrita ao final foram removidos. A altura da linha permanece válida após remontar, e o destaque de sintaxe em streaming agora atualiza incrementalmente, sem piscar o bloco de código inteiro.
- Reabrir a conversa selecionada no momento não repete a animação de transição, evitando que a conversa seja encurtada ou perca conteúdo fora do final. Se um snapshot Git local não cobrir os arquivos dessa conversa, a contagem de diffs pendentes no histórico é preservada.
- O corpo da conversa só é liberado pela visualização que o está exibindo no momento. Se uma conversa já estiver aberta em uma aba do editor, reabri-la retorna àquela aba em vez de puxar uma segunda cópia para a barra lateral, evitando que duas visualizações desmontem mutuamente o conteúdo visível.
- Enquanto uma janela estiver minimizada, o Breezell desativa a contenção em segundo plano e impede a suspensão do aplicativo durante execuções ativas. O comportamento normal é retomado após a execução terminar, a janela recarregar ou fechar.
- Se o modelo selecionado for excluído ou ocultado, o seletor muda automaticamente para outro modelo visível. Se todos os modelos estiverem desativados, o Breezell solicita ativar um primeiro.
- As permissões de leitura/escrita de arquivos externos ficaram temporariamente desativadas por padrão e esse valor `false` foi persistido, impedindo que mudanças futuras no padrão afetassem configurações já salvas. A atualização reativa ambas as permissões e grava um marcador de migração, preservando escolhas manuais posteriores do usuário.
- A caixa de diálogo de commit agora é montada na camada do workbench. Operações de ramo iniciadas em abas do editor não são mais cortadas pela barra lateral.

#### Armazenamento
- A exclusão de uma conversa compacta imediatamente o banco de dados, devolvendo ao disco o espaço que antes apenas ia para a freelist do SQLite. Bancos de dados antigos executam um `VACUUM` completo e os logs registram a quantidade real de armazenamento recuperada.
- Operações agendadas de `VACUUM` completo agora aguardam a fila de gravação do histórico e são executadas apenas quando nenhuma conversa está transmitindo streaming ou executando ferramentas.
- A exclusão de uma conversa também remove sua transcrição original de `breezellTranscripts`. A limpeza de múltiplos workspaces mantém o mesmo período de carência usado para arquivos em disco para conversas ainda ativas em outras janelas.

### Melhorias
- O conjunto de caminhos não commitados no histórico agora é calculado uma vez quando ocorrem alterações e armazenado em cache até que o estado do SCM, restauração de caminho ou intervalo de diff mudem. Com cerca de 1.000 arquivos modificados, a redução no redesenho é perceptível; com cerca de 10.000 arquivos, o custo anterior de redesenho é substancialmente reduzido.
- As funções de idioma nas configurações agora são armazenadas em cache por idioma em vez de serem recriadas a cada renderização, evitando a invalidação de cache de toda a página. A casca do Box renderiza novamente apenas quando o idioma muda. Pesquisa de navegação, recolher grupos ou recolher a barra lateral não redesenha mais a página de conteúdo. A sondagem OAuth reutiliza o resultado anterior quando o estado não mudou.

## 1.3.9 · 2026-09-22

### Novos recursos
- **Modelos pré-configurados:** Claude Opus 5.5, GPT 6 Sol, GPT 6 Terra, GPT 6 Luna, Gemini 4 Pro, Qwen4 Max, Qwen4 Plus, Qwen4 Flash e Qwen4 27B.
- **China Telecom Xingchen:** Xing4.0-29B.
- **Xiaomi:** MiMo-V2.6 Pro, Pro UltraSpeed e Flash. Também MiMo-V2.5 e V2.5 Pro.
- **Tongyi:** Qwen3.8-2.4T-A95B, Qwen-Doc-Turbo e Qwen-Long.
- Entre no Gemini com uma conta Google (Antigravity Code Assist).
- A geração de imagens agora inclui **Hy Image 3.5** e **Qwen Image 2.1**.
- Quando Super Memory acaba, um card de aviso aparece acima da caixa de entrada.
- Notificações do editor podem mostrar imagens e links; documentos abrem no clique.
- Exportar e importar conversas agora têm um painel de progresso e podem ser cancelados no meio.
- Grok mostra o nível atual da sua assinatura.
- No Box, serviços e modelos compatíveis quebrados ganham um selo e podem ser retestados um a um.

### Correções
- Cancelar a geração não apaga mais a resposta que já tinha saído no stream.
- A saída em streaming não treme mais a altura da linha; cards de ferramenta continuam clicáveis.
- Clique direito na barra de título não derruba mais a janela.
- Valores anormais ou dados em loop não deixam mais a barra lateral em branco.
- A barra lateral do chat não carregava por um erro de sintaxe em comentário CSS.
- Barras invertidas em caminhos Windows são preservadas; se a leitura do arquivo falhar, o Breezell tenta de novo com barras normais.
- Consultar um commit Git não percorre mais o histórico inteiro.

### Melhorias
- Conversas longas rolam com mais estabilidade.
- O desempenho do editor ficou mais rápido.

## 1.3.8 · 2026-09-19

Mais modelos em um único editor, trocas mais limpas no meio da conversa e um ciclo de Plan mais integrado — mesma thread, mesmo contexto.

### Novos recursos
- **Provedores e modelos:** StepFun e AiMass agora são provedores de primeira classe. O Qwen 3.8 chega com as variantes 27B e Omni-Flash. Zhipu GLM-5.3-FlashX foi adicionado à lista.
- **Doubao Seed 2.1:** Pro 0915 e Evolving já estão disponíveis.
- **Integração de protocolos oficiais:** OpenCode, Zhipu, Kimi e DeepSeek agora seguem os planos oficiais e formatos de protocolo de cada fornecedor (Chat / Responses / Anthropic).
- **OpenRouter:** novos identificadores aparecem na lista de modelos. Modelos gratuitos exibem uma fita FREE; modelos descontinuados recebem o selo Unavailable.
- **Seletor de modelos no chat:** alternar modelos abre um seletor no próprio painel com as guias Models e Compatible.
- **Página Models:** volte ao topo ou pule diretamente para as adições mais recentes.

### Correções
- **Colar imagem:** imagens são enviadas ao modelo como pixels. O Breezell não procura mais por image.png no repositório.
- **Composer:** quebras de linha são preservadas. O atalho Shift+Enter agora é indicado no campo de entrada.
- **Plan / Todo:** o status das tarefas em .plan.md permanece sincronizado conforme o trabalho avança. Retomar um plano antigo traz os todos de volta. O update_todo_list não remarca mais itens enquanto um plano está em execução.
- **Exploração da base de código:** grupos de recolhimento foram reconstruídos.
- **Cards de edição:** cards concluídos são recolhidos por padrão — controlado pela chave de recursos no Box.
- **Pílulas de citação:** estilo alinhado com o assistente de seleção do editor.
- **Pool de contas:** o rodízio passa a ser por solicitação, sem ficar preso a uma única conversa.
- **Navegador embutido:** as abas são isoladas por janela de workbench.
- **Explorer:** pastas de projeto chamadas dev ou run não ficam mais ocultas.
- **Pré-visualização de PDF:** rolagem, zoom e arrasto funcionam normalmente.
- **Pré-visualização de vídeo:** seletores duplicados foram removidos. Enviar para o chat está disponível.
- **Minimizar travamentos falsos:** o aviso de aplicativo sem resposta aguarda 15 segundos antes de aparecer, reduzindo alarmes falsos.
- **Janelas de contexto:** o Qwen 3.8-27B pode alternar entre 256K e 1M. Janelas de contexto curto e preços de tabela seguem as tabelas oficiais.
- **Intensidade de pensamento:** os nomes oficiais de níveis foram alinhados entre os provedores, incluindo o DeepSeek.
- **Slots compatíveis:** largura de coluna de configuração compartilhada. As tags de recursos ficam sob a linha de tokens.
- **Administração:** o cabeçalho da tabela de gerenciamento de modelos permanece fixo. A busca da lista de modelos foi corrigida. Os campos de preço de referência e cache longo agora estão alinhados.
- **Barra lateral:** o painel excedente da barra de atividades superior não é mais renderizado fora da barra lateral.

### Melhorias
- Removido do catálogo o modelo descontinuado GPT-5.3-Codex-Spark.
- A cor do corpo da conversa agora corresponde aos nomes de arquivo dos cards de ferramentas.
- Electron atualizado para a versão 43.7.3.

## 1.3.7 · 2026-09-17

### Melhorias
- Saiu o índice vetorial de repositório inteiro no dispositivo. A busca agora usa grep.
- Jobs em segundo plano e indexação não travam mais a conversa em que você está.
- Rankings de uso alinham com os cards e podem trocar por período. Uso de sub-Agents entra na conversa pai.
- Tags de conversa não se atropelam. Clonar um chat não estoura mais o layout. O modelo fica preso àquela conversa.

### Correções
- Histórico de chat apagado não é mais restaurado sozinho.
- Cards de terminal perto da entrada não puxam mais a página para baixo e devolvem.
- Cards Plan e o layout do chat não se empurram. Cards Todo renderizam certo.
- SSH embutido volta a funcionar. Não passa mais pelo Microsoft Remote-SSH.
- O assistente de busca da seleção não cobre mais o destaque. A contagem de chamadas de ferramenta seguidas continua visível.
- Abrir **More** numa página de conversa não crasha mais.
- Clicar num ramo não estoura mais a pilha.
- Na página da conversa, provedores OpenAI-compatíveis e API deixam o modelo atual óbvio ao escolher.
- Plan mode foi corrigido.

## 1.3.6 · 2026-09-15

### Novos recursos
- **Busca local Atlas:** busca semântica e cards de índice. Diretórios excluídos são lembrados. Perguntas sobre como o código se relaciona preferem Atlas.
- **Blueprints do Plan mode:** clique **Start** no card do blueprint para começar. A execução continua com todos.
- **Assistente de seleção:** pesquise o texto selecionado (navegador embutido / navegador externo / Bing). Mensagens na fila reordenam arrastando.
- **Cola ou solta enorme:** não estoura mais o compositor. Vira um chip de arquivo; o modelo lê como arquivo.
- **Anexos PDF:** Sakana, Mistral, Gateway, xAI, Kimi, Qwen-Doc e canais semelhantes podem anexar PDF.
- **Som ao concluir:** ao terminar um turno pode tocar ou falar. Fala de erro vem desligada por padrão. Escolha a voz no Box.
- **Open Browser** no editor. Some a barra de rolagem da faixa de abas; a roda do botão do meio desliza esquerda e direita.
- **Uso:** colunas separadas para cache e Token. Leituras e escritas de cache cobram as tarifas oficiais. Sub-Agents entram na sessão pai. O pool de contas compatíveis com OpenAI tem página própria.
- **Modelos e provedores:** Volcengine Ark puxa a lista de modelos com AK/SK, com presets Agent Plan (OpenAI / Anthropic). Incluídos AIHubMix e Sakana Fugu (Max / Ultra v2). Completados Azure Foundry e Vertex Gemini. DeepSeek V4.1 Flash e Kimi K2.8 Preview entram na lista.

### Correções
- **Code Review** refaz o diff contra o snapshot pré-edição de cada alteração. As sessões não se misturam mais.
- Arrastar abas de chat não derruba mais a janela. Cards de terminal não interferem uns nos outros.
- O assistente de seleção não cobre mais o destaque. Dá para ver a contagem de envios seguidos. **Quote** não parece mais uma página inteira. O raciocínio continua visível em respostas vazias.
- A aba de uso do Box não fica mais esmagada. O ranking preenche a largura. Cards de provedor podem trocar o intervalo.
- Listas oficiais de modelos e preços saem corretamente. Listas Plan comuns ainda aparecem como todos. Nós de blueprint ficam consistentes em arquivos, cards e bolhas **Start**.
- Agent em segundo plano e escritas de índice não travam mais a conversa que você está vendo.
- Corrigidos erros do Vue tool.

### Melhorias
- O jeito de trabalhar do Agent ficou mais apertado: retry em falha, arquivos de rascunho, e acompanhar quando o estado muda.
- Electron sobe para 43.7.0.
- Interruptores do Box são pesquisáveis. O dashboard continua pintando. A limpeza remove blueprints e logs de terminal sem uso.

## 1.3.5 · 2026-09-09

### Correções
- Abrir uma janela nova depois da 1.3.4 podia pintar um quadro preto e ficar em branco. A janela agora desenha na primeira exibição.

## 1.3.4 · 2026-09-09

### Novos recursos
- **Reescrita de prompt:** a varinha da bandeja de entrada tracejada reescreve o rascunho no compositor. Primeiro o preview, depois a troca. Nunca envia sozinha.
- **Contabilização de uso de recursos:** tokens de enviar mensagem, sugestões de acompanhamento e reescrita de prompt vão para Box → Feature usage, separados do uso da conversa.
- **Confirmação de rollback:** ao reverter a partir de uma bolha do usuário, a bandeja de entrada pede confirmação primeiro, para não derrubar um ramo por engano.
- **Copiar / ramificar na barra do turno:** Copiar é texto puro. Ramificar a partir de um turno abre um chat novo; a conversa do editor fica no editor.
- **Menu de ramos do editor:** **Open in Editor** da sidebar abre uma coluna de chat dedicada, sem lotar a faixa de abas de arquivo.
- **Image 2.5 Studio:** os fluxos de imagem foram atualizados; os ramos podem ser gerenciados no editor.
- **Aprovação automática de banco:** criar uma conexão de banco pode passar pelo Auto.
- **Ferramenta de escrita de memória:** `update_memory` é o único caminho que grava memória do usuário (workspace / global; add / replace / delete). Outras notas no disco não são mais mutadas ad hoc.
- **Tokenização nativa:** a contagem local de tokens segue o tokenizer de cada modelo.
- **Diffs de Review no estilo GitHub:** Code Review usa git-diff-view.
- **Backup de chat em zip:** exporta como arquivo zip. JSON legado ainda importa.
- **Salto da paleta de comandos:** ao abrir um arquivo, salta para o hunk mais recente desse arquivo.
- **Preço de API compatível:** linhas compatíveis com OpenAI podem definir uma tarifa $/1M personalizada.
- **Rota de rede do Box:** na página Models: Direct, System proxy, Global ou Custom.
- **Menu de modo abre para cima:** o seletor de modo acima do compositor prefere abrir para cima.

### Correções
- Trocar o modelo de um chat não muda mais o padrão global nem o de outras conversas.
- Uso do Codex no tema claro: removidas as cápsulas coloridas difíceis de ler (por exemplo `5d`). O uso passa a texto puro na bandeja.
- **Stop** encerra o turno na hora. Edições canceladas não voltam para o disco. Os cards não desaparecem mais.
- Tremulação do `edit_file`: arquivos limpos atualizam por etag. Reescritas de arquivo inteiro encolhem para o intervalo alterado. Um editor aberto não recarrega mais a página inteira.
- Servidores MCP empacotados falhavam ao iniciar (erro de construtor Ajv). PATH / cwd / env remotos e o relatório de erro também foram corrigidos.
- **WSL:** o lock de instalação é liberado depois que o serviço sobe, então janelas seguintes e **Open Folder** não dão mais timeout.
- **Chave de API do Grok:** todo o tráfego passa pela Responses API. O streaming não chega mais em blocos atrasados.
- Os cards de erro seguem o provedor que de fato falhou.
- URIs inválidos na página Review não derrubam mais a página inteira.
- Caminhos do diretório home (`~/`) nas respostas são clicáveis.
- Cards do Vault: removido o lift no hover que fazia os cards «flutuarem».
- Ícones **Quote** / **Copy** no tema claro usam a cor de primeiro plano do botão e não desbotam mais.
- Avatares do trilho recolhido permanecem quadrados.
- O dropdown de filtro de uso ancora à esquerda do botão e não cobre mais a sidebar do Box.
- Abas segmentadas quebram linha em painéis estreitos.
- Regex de reticências da barra de título: o ponto de largura total agora é um escape `\u`.

### Melhorias
- A barra de rolagem do compositor sobrepõe o conteúdo como a lista de chat. Sem calha extra à direita.
- Timeouts de busca / execução: processos `rg` travados agora têm timeout rígido para a janela não congelar.
- Estouro de contexto: orçamento, dicas uv e cards de landing vazios batem com o shell de chat atual.
- Saltos longos da barra de histórico teleportam um recorte em vez de expandir a cauda inteira.
- O painel de confirmação de rollback ficou mais largo; a ação de confirmar mostra ⏎.
- Diffs de Review tokenizam só as linhas visíveis. A paginação ficou mais rápida.
- Página Models do Box: o título gruda no topo. Cada linha de provedor mostra status e rota.
- A bolha do anel de contexto usa o mesmo fundo da bandeja de entrada.
- O texto de Skills e Memory está localizado. Controles de exclusão usam uma cor neutra.

## 1.3.3 · 2026-09-07

### Novos recursos

#### Box workbench
- A barra de título agora alterna entre **Box** e **Agent** em um clique. Box é uma tela de gestão independente que reúne modelos e provedores, conta e uso, Super Memory, Code Review, o marketplace MCP, o navegador de banco de dados, a limpeza de dados e as Settings.
- **Modelos:** a configuração do provedor fica ao lado da lista de modelos. Adicione ou remova endpoints compatíveis com OpenAI. Escolha um caminho de rede por provedor — inclusive modelos oficiais da Breezell — Direct, System proxy, Global proxy ou um proxy personalizado. Teste a conectividade em um clique.
- **Vault:** criptografa endpoints de relay e credenciais e preenche onde for preciso. Sem ficar copiando chaves.
- **Completar código (FIM):** o completar pode usar conexão própria e o protocolo FIM nativo de cada vendor. Os principais vêm como presets.
- **Limpeza de dados:** veja estatísticas locais, compacte o banco e rode checagens de integridade. Cada manutenção fica registrada.
- **Navegador de banco:** refeito, com várias conexões e navegação agrupada mais clara.
- **Marketplace MCP:** organizado por categoria, com a página redesenhada.
- As notas de privacidade passam a cards e cobrem mais detalhes.

#### Breezell Mind
- A conversa mantém um caderno de trabalho. Quando um fio longo bate no orçamento, o histórico antigo é dobrado para as notas e o essencial.
- **Citar esta conversa** ficou mais leve: só leva o último turno e a lista de arquivos envolvidos. O histórico completo é lido sob demanda.
- A compactação de contexto prepara e atualiza em segundo plano um documento de handoff. O registro original fica no disco. Há aviso se a compactação rodou vezes demais.

#### Conversa
- Depois de um turno, aparecem sugestões de “o que fazer agora” — clique para seguir.
- Uma conversa pode abrir como aba do editor, ao lado do código.
- Menções `@` de arquivos e símbolos estão tão rápidas quanto o Quick Open. `/` abre o menu de Skills.
- Menu de modelos: interruptor **Breezell Max Plus**.
- Prompt de sistema do Agent reescrito: deixa mais claro o que cada turno deve fazer. Depois de trabalho real, há um fechamento curto. O idioma dos comentários segue o seu.
- Caminhos de arquivo nas mensagens viram chips clicáveis e permanecem consistentes.

#### Modelos
- Adicionados **GPT-6 Astra**, **Claude Fable 5.1**, **Gemini 3.8 Flash**, **Muse Spark 1.3** e **OpenCode Go Omen Alpha**.
- Modelos sem busca na web própria agora caem para a busca nativa do provedor.
- Preços do Claude Sonnet 5 atualizados para as tarifas oficiais.

#### Editor
- Edite Markdown no lugar e alterne o preview sem sair do arquivo.
- A visualização de Diff ganha o submenu **Diff View** para modos de comparação. Editores personalizados podem mostrar diffs.
- Ao abrir um arquivo, você escolhe o tipo de editor.
- As opções de recursos em Settings foram redesenhadas. A geração de mensagem de commit do Git tem o próprio card de modelo.
- O painel da conta vira um cartão de assinatura: selo do plano, saldo, validade e cota de Super Memory de relance. O botão da conta mostra o avatar.

### Correções
- Um `<` sem fechar no stream não trava mais o restante do texto. Código no painel de raciocínio renderiza como texto puro; fences sem linguagem ainda recebem highlight.
- Respostas vazias do modelo disparam um retry automático em vez de encerrar o turno em silêncio. Streams que o upstream marca depois como vazios são preservados.
- A contagem de tokens depois da compactação de contexto bate com o que de fato é enviado.
- Trocar o modelo da conversa não sobrescreve mais os modelos escolhidos para Apply e mensagens de commit do Git.
- O auto-scroll do raciocínio não se solta sozinho; blocos de código em streaming não piscam em branco.
- Subagentes de Analyze não pedem mais, por engano, para mudar para o modo Agent.
- O navegador embutido não digita mais no campo da IA quando o modo anônimo está desligado.
- Pedidos do Poolside Laguna com screenshot não falham mais inteiros; passam pelo proxy de visão.
- A estimativa de tokens de anexos antes do envio está correta. A compactação de emergência consegue dobrar o turno atual.
- Os cards de erro nomeiam o provedor que de fato falhou.
- Comandos de extensão no terminal não esperam mais o timeout inteiro da integração do shell para rodar.
- Bolhas de execução de plano mantêm o raio das quinas. A sombra da mensagem do usuário não cobre mais o texto abaixo.
- As configurações flutuantes do modelo alinham com a linha correspondente.
- A página de Code Index em Settings não varre mais o workspace inteiro a cada abertura. Artefatos de build ficam de fora do índice.
- **Linux:** restaurado o pool de buffer de 8 KiB do Node para evitar regressões em alguns cenários.

### Melhorias
- `repo_map` não trava mais a UI por dezenas de segundos. Diffs por linha das edições em streaming e a persistência da conversa saem da thread da UI.
- Ferramentas de exploração têm timeout — rede morta não segura o Agent por cinco minutos. Explorações que falham viram uma linha cinza quieta de “tentou”.
- A sidebar ficou mais leve: marketplace MCP e Super Memory moram no Box. O histórico é paginado e agrupado. Ajuste na posição do selo da conta.
- Runtime atualizado para **Electron 43.6** (Chromium 150 / Node 24).
- Os instaladores levam só os binários da plataforma atual, então o pacote fica menor.

## 1.3.2 · 2026-09-01

### Correções

- Corrigido um problema que podia fazer todo o histórico de conversas desaparecer após trocar de espaço de trabalho, alterar caminhos WSL / remotos ou perder o estado local.
- Corrigidos congelamentos e janelas sem resposta em conversas longas, além de travamentos da interface durante alterações de arquivos em grande escala ou `git checkout`.
- Corrigidos links de arquivos locais no chat que apareciam bloqueados e não podiam ser abertos.
- Corrigido o zoom do navegador integrado que voltava para 100% após atualizar a página, além de menus de modelos e popovers de modo encobertos pelo conteúdo da web.
- Corrigida a indisponibilidade de ações da fila, como Editar, Enviar agora e Excluir, em dispositivos de toque.
- Corrigidos deadlocks no navegador compartilhado e novos rascunhos do Agent misturados entre conversas.
- Corrigida a alteração inesperada da identidade do espaço de trabalho da conversa, que podia causar vazamento de memória entre projetos.
- Corrigido o estado recolhido ou expandido dos grupos de modelos que não persistia após reiniciar.
- Corrigidas conversas longas que exibiam incorretamente “Network Error” após cerca de 50 segundos quando o problema real era a janela de contexto cheia.
- Corrigida a troca do modelo do chat que substituía os modelos configurados separadamente para Apply e mensagens de commit do Git.
- Corrigidos o travamento da saída de raciocínio durante a rolagem e flashes brancos em blocos de código durante o streaming.
- Corrigido o Code Index que analisava artefatos de compilação, deixando a indexação mais lenta e usando espaço em disco desnecessário. Abrir Settings não aciona mais “Scanning workspace” repetidamente.
- Corrigido o Agent que insistia incorretamente que comentários de código deveriam estar em inglês e recusava pedidos explícitos para usar chinês.
- Corrigida a ferramenta de exploração da web que permanecia inativa por cerca de cinco minutos sem avançar.
- Corrigidos cantos cortados nos cartões de execução de planos e sombras de popovers fixados sobrepondo a primeira linha das respostas.
- Corrigidas incompatibilidades de versão do servidor remoto ao conectar a ambientes de desenvolvimento remoto a partir de compilações do código-fonte.

### Melhorias

- O processamento de conversas longas não bloqueia mais a interface, permitindo que as respostas apareçam progressivamente enquanto são geradas.
- Quando a janela de contexto está quase cheia, o Breezell explica a situação com antecedência. Resultados antigos são movidos para o armazenamento local e recarregados somente quando necessários.
- Melhorada a resposta de blocos de código e Diffs em respostas longas. O realce de sintaxe de arquivos grandes não trava mais a janela.
- O histórico de conversas agora é agrupado em Hoje, Ontem e Anteriores, com conversas do Agent e Teams separadas.
- Os cabeçalhos de provedores na lista de modelos permanecem fixos durante a rolagem. A conversa em foco não treme mais junto com a área de entrada.
- O Code Index agora respeita o `.gitignore` e prioriza arquivos-fonte em vez de artefatos de compilação.
- A inspeção da estrutura do repositório não causa mais pausas superiores a dez segundos.
- O envio de mensagens em conversas extremamente longas está mais responsivo.
- O popover de configurações do modelo agora se alinha à linha selecionada.
- A geração de mensagens de commit do Git agora pode usar um modelo selecionado separadamente.
- Os níveis de raciocínio do GPT-5.6, incluindo Pro, agora estão visíveis e podem ser selecionados.
- Adicionados Hunyuan HY4, Kimi K3 / Video, Qwen3.8 Flash, GLM-5.3 Flash e vários novos modelos de vídeo.
- O Image Studio agora oferece suporte ao Grok Imagine para geração de imagens 2.0 e geração de vídeos 1.5.
- Após a compactação de conversas longas, o Breezell mantém um resumo de transição para que a conversa continue sem interrupções, enquanto o histórico local completo permanece pesquisável por palavra-chave.

## 1.3.1 · 2026-08-26

### Correções

- Corrigido um problema em que o **histórico de chat podia desaparecer após a alteração da identidade do espaço de trabalho**.
- Corrigido um problema em **Breezell Settings** no qual componentes de menu suspenso montados incorretamente podiam causar comportamentos inesperados.
- Corrigido o **comportamento incorreto de zoom no navegador integrado**.
- Corrigido o dimensionamento do layout do chat para que a **área de conversa não seja mais comprimida pela altura da página**.
- Corrigido um problema em que a **renderização da ferramenta de edição podia causar uma falha**.
- Corrigido o problema em que as **notificações do sistema eram estendidas incorretamente por toda a largura** ao usar a nova interface do Breezell.
- Corrigido o **alinhamento da área de entrada inferior** para que os espaçamentos esquerdo e direito correspondam ao painel de chat.

### Melhorias

- Melhorados o **desempenho geral e a capacidade de resposta**.
- Aprimoradas as **capacidades e a confiabilidade do mecanismo de modelos**.

## 1.3.0 · 2026-08-25

### Novos recursos

- Adicionado um **layout de interface totalmente novo**, disponível em **Breezell Settings > Appearance**.
- Adicionados **SiliconFlow**, **OpenCode Go** e **Meta** como provedores de modelos, além da seleção do formato de API por modelo para **Chat Completions**, **Responses** e **Anthropic Messages**.
- O **OpenRouter** agora permite selecionar o formato de API. **Claude** e **OpenAI** usam suas APIs nativas por padrão.
- Adicionado suporte ao **Gemini 3.7 Flash** e ao **Dots Studio dots3-note Preview**.
- O chat agora oferece suporte a **anexos de vídeo**, com pré-visualização diretamente no espaço de trabalho.
- Adicionado o **isolamento de worktrees do Teams**: os colegas podem editar código em worktrees Git independentes, e colegas inativos podem ser iniciados novamente automaticamente quando necessário.
- Os **servidores MCP** agora são executados dentro do host de extensões do espaço de trabalho. Fechar a janela do projeto também encerra seus processos filhos.
- Os **ajustes avançados do modelo** foram reformulados, incluindo configurações de raciocínio padrão e suporte ao encaminhamento de **reasoning effort**.
- Adicionada uma nova **bandeja de entrada**, que reúne comandos rápidos e popovers de ferramentas em um fluxo de interação mais limpo.
- **Rascunhos não enviados** agora são preservados no histórico de chat, e agora é possível atribuir rótulos aos colegas.
- Adicionados dois novos temas: **Breezell Warm** e **Breezell Paper**. As paletas de temas também foram ampliadas, e a tela de inicialização agora segue o esquema de cores ativo do editor.
- Adicionado um **seletor de pastas** à lista **All** como alternativa quando não for possível arrastar pastas do Explorer.
- Adicionada uma janela **About** que mostra a versão instalada do Breezell.
- A conclusão de código agora leva em conta as **edições recentes** e os **comentários específicos da linguagem** para oferecer sugestões mais relevantes.

### Correções

- Ao usar **ds4** ou outros modelos somente de texto por meio de um provedor **OpenAI-Compatible**, agora é possível enviar imagens diretamente se o suporte a visão estiver configurado no provedor. Não é mais necessário configurar um proxy de visão separado no IDE.
- Modelos oficiais somente de texto, como **DeepSeek**, continuam bloqueando anexos de imagem quando não há um modelo de visão configurado, evitando solicitações inválidas.
- A troca de modo enquanto uma resposta ainda está em streaming não exibe mais imediatamente uma notificação de **"Alternado para ..."**. A notificação aparece somente após o término da resposta atual.
- Os **cartões de edição** agora saltam para o local correto no primeiro clique.
- O **uso de contexto** agora reflete o contexto realmente usado pela solicitação, corrigindo leituras de uso infladas ou inconsistentes.
- A lista de servidores MCP agora é atualizada após a reinicialização do host de extensões, e os nomes dos servidores agora são destacados na bandeja de entrada.
- Corrigidos problemas de sincronização entre **Git, Paleta de Comandos, Histórico e Explorer**, incluindo casos em que diffs pendentes desapareciam após um commit.
- Corrigido o problema de notificações de chat não aparecerem enquanto a janela do Breezell está minimizada.
- Corrigidos o tratamento de **WSL / URI remotas** e a validação de cache do **REH**.
- Corrigidos flashes brancos ao recriar o webview do navegador e casos em que o webview nativo interceptava o arrasto do divisor.
- **GLM [1m]** não é mais encaminhado incorretamente por **Chat Completions**.
- Melhorado o comportamento do tema padrão após a instalação e corrigido o **contraste vermelho/verde dos diffs**.

### Melhorias

- Refinados a **interface de chat**, a **renderização Mermaid**, os **controles de tema**, as **linhas de Settings** e os textos de aprovação do terminal.
- Melhoradas as interações na **bandeja de entrada** e nos popovers de ferramentas.
- Melhorado o **comportamento de troca do modo Plan**: o Breezell continuará fazendo perguntas quando for necessário esclarecer algo, e os cartões relevantes não serão mais ocultados.
- Adicionado tamanho de fonte ajustável para as opções de **Ask Question**.
- Melhorada a **confiabilidade da recuperação de memória**, com mensagens mais claras enquanto a recuperação está em andamento.
- As sugestões de conclusão de código agora correspondem melhor ao **idioma do arquivo atual**.

## 1.2.9 · 2026-08-24

### Correções

- Corrigidos casos em que algumas conversas não eram carregadas corretamente.
- Corrigida a formatação incorreta da saída no modo Entanglement.
- Melhorada a estabilidade e corrigidos casos em que janelas do Breezell podiam falhar ou encerrar inesperadamente.
- Corrigidas páginas em branco ao abrir sites no navegador integrado.
- Corrigida a exibição de tags residuais no final das respostas do modo Analyze.
- Corrigidas as configurações de janela de contexto personalizada dos modelos Codex que não eram aplicadas ou exibidas corretamente.
- Corrigida a exibição incorreta da cota ao usar o login direto do Grok.
- Corrigido o problema em que a compactação automática não era acionada após trocar a janela de contexto.

## 1.2.8 · 2026-08-16

### Novos recursos

- Os modos Agent, Entanglement e Teams foram reformulados para fluxos de trabalho mais confiáveis.
- Foram adicionadas integrações com OpenCode Go e Meta, além da seleção de protocolo de API por modelo.
- O Image Studio agora oferece suporte ao Seedance 2.5. Os modelos DeepSeek agora podem encaminhar imagens para reconhecimento visual.
- Foram adicionados GLM-5.3 e Grok 4.6, com melhor compatibilidade para formatos de modelo específicos do DeepSeek.
- A configuração inicial agora permite escolher o idioma da interface durante a primeira instalação.
- A página de conversa vazia foi redesenhada com cartões de recursos e navegação para a esquerda e direita.

### Melhorias

- O modo Teams agora fornece relatórios de progresso de tarefas mais detalhados.
- Conversas longas agora removem automaticamente o contexto obsoleto ou inválido para reduzir o acúmulo de contexto e a sobrecarga desnecessária.
- A precisão da recuperação de memória foi aprimorada, e os prompts do estado de espera agora são atualizados dinamicamente conforme as tarefas avançam.
- As sessões de terminal agora são agrupadas por finalidade. Comandos silenciosos permanecem ativos até que seu orçamento de execução se esgote, em vez de serem encerrados prematuramente.
- A atualização e a sincronização do status do Git foram aprimoradas após ações de revisão, reversão e envio.
- Os separadores de troca de modo agora permanecem visíveis, facilitando revisar onde a mudança de modo ocorreu em uma conversa.

### Correções

- Foram corrigidas conversas do Teams que congelavam ou ficavam presas em estado ocioso, bem como diffs que permaneciam visíveis após o envio.
- Foi corrigido o problema de notificações de chat não serem entregues quando a janela do Breezell estava minimizada.
- Foram corrigidas conversas normais interrompidas após a conclusão de uma transferência de reconhecimento de imagem e visualizações de emulação do navegador que ocasionalmente ficavam travadas.
- Foram corrigidas saídas imprecisas do terminal, problemas com comandos PowerShell encadeados e comandos em segundo plano que entravam repetidamente em loop.
- Foi corrigido o campo de entrada de commit do Source Control que desaparecia ou ficava inválido após a atualização.
- Foram corrigidas mensagens na fila que não eram enviadas ao pressionar Enter, além de tarefas de Analyze que paravam inesperadamente ou reiniciavam repetidamente.
- Foram corrigidos problemas com conversas baseadas em assinatura do Grok, raciocínio oculto travado e caminhos inválidos que causavam exceções.
- Foram corrigidas operações de reversão que afetavam involuntariamente alterações não relacionadas, ferramentas MCP que resolviam o caminho errado e problemas de empacotamento no Linux.
- Foram corrigidos outros bugs e problemas de estabilidade.

## 1.2.7 · 2026-07-29

### Novos recursos

- Melhoramos a compreensão e a eficiência de navegação em bases de código grandes.
- Adicionamos insights opcionais de qualidade da resposta, apresentando a avaliação da qualidade desta resposta, da compreensão dos requisitos e da confiança na verificação.
- Os detalhes das estatísticas de cache agora oferecem paginação, filtros vinculados e vários idiomas.

### Correções

#### Controle de código-fonte e runtime do Agent

- Corrigimos o campo de mensagem de commit que ficava vazio ou inválido após atualizar um repositório de controle de código-fonte, trocar de exibição ou reconstruir componentes.
- Corrigimos travamentos do raciocínio do Agent, detecção incorreta do estado do terminal, perda dos códigos de saída de comandos em segundo plano e encerramento prematuro de tarefas.
- Corrigimos problemas na edição de mensagens da fila, no feedback de chamadas de ferramentas, na restauração da lista de tarefas e no estado de turnos contínuos.

#### Chat e ambientes remotos

- Corrigimos o truncamento prematuro das conversas originais ao editar e reenviar mensagens. Agora as mensagens são substituídas atomicamente após a conclusão da validação.
- Corrigimos problemas de caminhos remotos no WSL e no Remote SSH e melhoramos a inicialização do host, as tentativas de senha e o cache do servidor.

#### Renderização, modelos e estado

- Corrigimos a análise de fórmulas em bloco do KaTeX, os temas de blocos de código, a renderização de fontes chinesas e o alinhamento de ícones de arquivos.
- Corrigimos casos em que alguns modelos exibiam respostas vazias, expunham pilhas de erros ou enviavam solicitações de rede anormais ao provedor.
- Corrigimos o reaparecimento de conteúdo excluído no Super Memory e a reversão inesperada do estado do painel do navegador.

### Melhorias

#### Busca e execução do Agent

- Otimizamos a busca, as chamadas de ferramentas, a execução de tarefas e a lógica de encerramento do Agent para reduzir conclusões repetidas, esperas desnecessárias e interrupções anormais.
- Otimizamos os limites de resultados, os tempos limite de execução e o estado de streaming das buscas de código em grande escala, reduzindo o consumo de recursos de conjuntos de resultados excessivos.

#### Experiência de chat

- Melhoramos o estado de conclusão do chat, a barra de ferramentas inferior, o posicionamento da rolagem e o carregamento de conversas longas.

#### Configurações e uso

- Redesenhamos os cartões de conta de modelo e login OAuth, unificando a hierarquia visual e os padrões de interação na página de Configurações.
- Melhoramos o uso do Codex, os metadados de modelos e os indicadores de status relacionados.

## 1.2.6 · 2026-07-27

### Adicionado

#### Git do chat em nível de sessão

- Agora é possível enviar juntos os changes de código gerados por IA na mesma sessão.
- Adicionamos detecção e processamento simultâneos para vários repositórios Git.
- O status das tarefas de chat e da revisão de código agora é sincronizado automaticamente após o envio.

#### Provedores, modelos e capacidades

- Adicionamos o provedor **Poolside Platform**, com acesso ao **Poolside Laguna** por meio de uma configuração compatível com OpenAI.
- Adicionamos configurações para os modelos **Qwen3.8**, **Opus 5** e **Pangu**.
- Aprimoramos o **LongCat** com reprodução de inferência, preservando o contexto de raciocínio após chamadas de ferramentas.

#### Segurança do workspace remoto

- Adicionamos um aviso de segurança ao acessar o diretório raiz do Linux `/` em um ambiente remoto.
- Caminhos de sistemas de arquivos virtuais do Linux, como `/proc`, `/sys` e `/dev`, agora são excluídos automaticamente.

### Melhorias

#### Revisão de código

- Redesenhamos a barra de ações **Aceitar/Rejeitar** para blocos de código individuais.
- Atualizamos **Manter tudo** para seguir a cor de destaque do tema atual.
- Reduzimos a altura das barras de ações em linha para deixar a área de código mais compacta.
- As barras de ações de revisão agora são recolhidas e redefinidas automaticamente após um commit Git bem-sucedido.

#### Seletor de modelos

- Depois que uma chave é inserida pela primeira vez, apenas cinco modelos recomendados são habilitados por padrão para reduzir a redundância da lista.
- As capacidades dos provedores compatíveis com OpenAI agora se adaptam ao formato de API selecionado.

#### Envio de código e atualização do SCM

- O status do Git na barra de atividades agora é atualizado automaticamente após o salvamento de arquivos.
- Os envios do Chat Git agora são tratados uniformemente como **Manter todas as alterações**, concluindo automaticamente as etapas correspondentes de revisão de código.

#### Interface

- Removemos o indicador de não lidas dos títulos de notificações.
- Melhoramos a troca dos menus ao passar o mouse sobre grupos de modelos compatíveis com OpenAI.
- Corrigimos o alinhamento vertical do texto de contagem de ferramentas.
- Habilitamos o estilo de ícone Kimi Mono no tema claro.

### Correções

#### WSL e Git remoto

- Corrigimos uma falha na inicialização do host de extensões do WSL.
- Corrigimos a configuração inconsistente do proxy do servidor WSL.
- As verificações de status do Git e as mensagens de commit geradas por IA em ambientes WSL e SSH agora são executadas por um canal com suporte a ambientes remotos.
- Impedimos que comandos Git de workspaces remotos sejam executados em caminhos locais.
- Corrigimos um problema que fazia o Agent fechar repositórios Git automaticamente após modificar arquivos.
- Corrigimos a exibição incorreta de caminhos relativos em URIs remotas.

#### Remote SSH

- Corrigimos o tratamento de expiração de senha no Remote SSH. Senhas salvas agora são apagadas quando rejeitadas pelo servidor, e o usuário é solicitado a inseri-las novamente durante a mesma tentativa de conexão.
- Impedimos que o Remote SSH baixe pacotes de servidor REH com hashes de commit incompatíveis, evitando erros de versão e falhas na inicialização do host remoto.

#### Renderização do chat

- Adicionamos suporte a Trusted Types para gráficos Mermaid.
- Melhoramos a sanitização de tags Mermaid para impedir que tags inseguras ou malformadas causem falhas de renderização.

#### Regras e memória

- Corrigimos o salvamento de conteúdo vazio depois que o editor perdia o foco.
- Corrigimos a atualização atrasada do gerenciador de recursos após alterações na configuração `.breezell`.

#### Exibição de árvore remota

- Erros sem significado não são mais emitidos repetidamente na exibição de árvore quando a configuração de SSH Hosts está ausente.

## 1.2.5 · 2026-07-22

### Adicionado

- Adicionamos integrações de provedores e modelos para **Tencent Hunyuan HY3** e **TokenHub**.
- Adicionamos **Gemini 3.6 Flash** e **Gemini 3.5 Flash-Lite**, ambos oficialmente disponíveis para uso geral.
- Adicionamos badges de projeto aos históricos de chat em workspaces com várias raízes.
- Ampliamos o suporte a capacidades de canais de provedores compatíveis.
- Adicionamos traduções da interface para japonês, espanhol, português e outros idiomas.
- Atualizamos o guia do protocolo OpenAI com duas recomendações mais claras:
  - Endpoints compatíveis com OpenAI usam o protocolo OpenAI por padrão.
  - A Responses API é recomendada para modelos GPT.

### Correções

- Corrigimos um problema em que novos itens de tarefas permaneciam presos em **Aguardando confirmação**.
- Corrigimos planos de várias etapas que exigiam clicar manualmente em **Continuar** após cada lote.
- Corrigimos barras de duração, Revisão, Git e ações de ferramentas que continuavam destacadas e clicáveis depois da reversão para um checkpoint.
- Corrigimos a sincronização incorreta das restrições de acesso no painel de desenho e melhoramos mensagens de restrição pouco claras.
- Corrigimos telas em branco que não recebiam um nó padrão ao serem abertas pela primeira vez.
- Corrigimos sessões do modo Chat que vazavam ou se misturavam entre várias janelas.
- Corrigimos a seleção que voltava para um modelo indisponível depois que o modelo selecionado era excluído.
- Corrigimos o funcionamento incorreto do staging de um único arquivo no Chat Git.
- Corrigimos problemas de commit e atualização em workspaces com vários repositórios.
- Corrigimos a perda de históricos de chat após adicionar uma pasta ao workspace.
- Corrigimos ícones ausentes na barra de atividades em ambientes WSL e SSH.
- Corrigimos a oscilação da lista de projetos no Explorer.
- Corrigimos verificações simultâneas de status do Git na exibição do repositório que sobrecarregavam o host de extensões.
- Corrigimos a saída malformada `****` que interrompia streams de raciocínio da OpenAI.
- Corrigimos o estilo do botão de fechar nas bolhas de edição.

### Melhorias

- Simplificamos os cartões de inicialização da página de boas-vindas com blocos tracejados e unificamos os ícones de revisão de código.
- Atualizamos o texto secundário do Super Memory para usar itálico.
- Consolidamos os cartões de provedores na página de Configurações.
- Melhoramos o layout do título dos diálogos de configuração de rede.
- Melhoramos a localização do seletor de modelos vazio e permitimos abrir as Configurações diretamente a partir do seletor.
- Garantimos que a capacidade `supportsFast` do diretório em segundo plano seja transmitida corretamente pelo pipeline de solicitações.
- Corrigimos as informações de preço do **Qwen 3.7**.

## 1.2.4 · 2026-07-20

### Novos recursos

#### Modelos e provedores

- Integramos o **Grok 4.5**, com intensidade de inferência ajustável e um canal Fast; o **Claude Sonnet 5** está disponível com contextos de **200K** e **1M**.
- Adicionamos o **Kimi K3** pelos canais Moonshot API e Kimi Code, com contextos de **256K** e **1M**, além de suporte completo ao **Kimi K2.7 Code**.
- Adicionamos o provedor **StreamLake**, com toda a família de modelos KAT-Coder da Kuaishou, predefinições integradas de Coding Plan e predefinições de endpoints pré-pagos.
- Adicionamos login OAuth para contas Grok.
- Redesenhamos os canais Fast, que deixaram de ser uma alternância global e passaram a ser uma configuração independente de **provedor + modelo**, para que Copilot, Codex, Claude e outros provedores usem a semântica de seus canais oficiais.
- Configurações compatíveis com OpenAI agora podem ser fixadas para manter canais usados com frequência no topo.
- Adicionamos suporte a testes e descontos de modelos por tempo limitado, com badges promocionais no seletor de modelos.
- Atualizamos o diretório de modelos com modelos principais atuais, incluindo Claude Fable 5, Claude Sonnet 5, Nemotron 3 Ultra, DeepSeek V4, GLM-5.2 e MiniMax M3, removendo entradas obsoletas.

#### Uso, aparência e interface

- Atualizamos o Centro de uso com exibição multilíngue de uso e horário de redefinição para Codex, Kimi e Copilot em chinês simplificado, chinês tradicional, coreano e russo. Os dados de Configurações e da barra lateral do chat agora são sincronizados em tempo real, e o uso do Copilot mostra Chat, Completions e Premium Requests separadamente.
- Os títulos da página de boas-vindas agora podem ser personalizados globalmente ou por modo, incluindo tamanho e peso da fonte. Adicionamos o estilo **Elegant** para atalhos de acesso rápido.
- Adicionamos japonês, espanhol e português brasileiro como idiomas de interface.
- Redesenhamos o centro de notificações para seguir o idioma do produto, atualizamos o layout do cartão Super Memory e suavizamos o visual do campo de entrada e das bolhas de mensagem.

#### Navegador, chat e workspace

- O navegador integrado agora permite silenciar todas as abas ou abas individuais, com sincronização em tempo real entre a lista de abas do painel e o navegador.
- As mensagens de chat agora podem incluir até **10 imagens**; elas são redimensionadas automaticamente e incluídas no cálculo de contexto. Adicionamos exibição da duração do turno, reversão com um clique dentro das mensagens e opções para abrir links no navegador externo ou integrado.
- O diálogo de commit do chat agora aceita workspaces com vários repositórios: gera informações de commit por repositório, permite envios independentes, inicializa repositórios diretamente pelo diálogo e preserva o progresso de commit/push após reinicializações.
- Adicionamos agrupamento de projetos no gerenciador de recursos e atualizações mais rápidas do status de colaboração entre várias janelas.
- Adicionamos memória persistente, que destila automaticamente o histórico de conversas em experiências reutilizáveis com deduplicação multilíngue.

#### Diagnóstico e produtividade

- Adicionamos visualização de cache com notificações por turno e relatórios diários do workspace comparando hoje e ontem, incluindo filtros de sessão/workspace, economia estimada e análise de cache miss.
- Adicionamos cartões de design interativos que podem gerar rascunhos de design HTML diretamente no chat e aplicá-los após a confirmação.
- As configurações de rede do provedor agora aceitam testes de velocidade paralelos com um clique entre conexão direta, proxy do sistema, proxy global e rotas personalizadas. Rotas recomendadas são identificadas automaticamente e badges de roteamento são atualizados em tempo real na página de Configurações.
- Atualizamos o núcleo do visualizador de PDF com uma nova barra de ferramentas. Anexos são contabilizados por página, ocultados automaticamente quando o contexto é limitado e restringidos pelos limites de volume e páginas de cada modelo.

### Melhorias

- Redesenhamos a experiência de comandos em segundo plano: itens da barra de status permanecem visíveis até os comandos realmente terminarem, enquanto comandos simultâneos são recolhidos em um resumo expansível.
- Ampliamos a autorização de recursos avançados e a compatibilidade com extensões populares, como Python e Pylance, além de melhorar a compatibilidade com desenvolvimento remoto.
- Melhoramos a confiabilidade de instalação e atualização em redes domésticas.
- Tornamos a compressão automática de contexto mais inteligente, acionando-a dinamicamente de acordo com o contexto disponível e reduzindo compressões desnecessárias.
- Skills integradas agora são habilitadas sob demanda e usam o modo leve por padrão.
- Agents agora concluem planos de várias etapas sem pausar no meio para pedir confirmação, com respostas mais contidas e focadas nos resultados.
- Otimizamos profundamente o pipeline de solicitações para reduzir o custo de conversas longas.
- Redesenhamos os avisos de erro com banners mais discretos, gavetas de detalhes e uma renderização mista de chinês e inglês mais clara.
- Restauramos a alternância de layout da barra de título, reorganizamos os acessos rápidos em páginas de chat vazias e impedimos que ícones de provedores acionem alertas do sistema.

### Correções

- Resolvemos lentidão e uso anormal de memória em conversas longas, acelerando significativamente a abertura de sessões antigas e melhorando a fluidez de respostas extensas.
- Servidores MCP desabilitados ou offline não expõem mais ferramentas aos modelos, evitando chamadas acidentais; conexões MCP também permanecem estáveis após alternâncias, e erros de leitura de configuração não limpam mais as configurações salvas.
- Corrigimos ícones de navegação das Configurações exibidos incorretamente em negrito, falhas em determinados ambientes Linux e vários outros problemas de interface.
- Corrigimos problemas no carregamento de sessões anteriores que podiam causar falhas na interface ou crescimento ilimitado do armazenamento.
- Corrigimos estados falsos de “contexto comprimido”: a compressão real agora é mostrada explicitamente, e foram resolvidos desvios de compreensão em conversas longas e interferências de memória entre sessões.
- Excluir um modelo ou configuração de canal ativo agora seleciona automaticamente uma opção disponível em vez de deixar caixas de seleção vazias.
- Alternar entre as abas Plan e Analysis agora preserva o estado sem recarregar o conteúdo.
- Corrigimos telas brancas ocasionais no painel de desenho, entradas obsoletas após o término de comandos em segundo plano, problemas na barra de rolagem das Configurações e outros detalhes menores.
- Melhoramos a compatibilidade de parâmetros entre modelos, incluindo edição de instruções, detecção de interrupção de streaming, limites de orçamento de raciocínio e alinhamento de documentos.

## 1.2.1 · 2026-07-08

Temos o prazer de anunciar o lançamento do Breezell v1.2.1. Esta atualização traz melhorias abrangentes para controle de código-fonte, comandos em segundo plano, fluxos de trabalho do terminal, Skills, suporte a modelos, processamento de tarefas de imagem, acabamento da interface e interações de IA de longa duração. Ela também inclui muitas correções de estabilidade para saída em streaming, sincronização do estado do editor, persistência de sessões, comportamento em várias janelas e autenticação.

### Novos recursos

- A exibição de Controle de código-fonte agora aceita detalhes de commits expansíveis e navegação por arquivos relacionados, tornando o acompanhamento de alterações mais claro e intuitivo.
- Melhoramos a colaboração entre comandos em segundo plano e o terminal, com exibição do status de várias tarefas e feedback mais claro quando os usuários interrompem uma tarefa manualmente.
- O painel Skills agora funciona junto com o interruptor mestre Superpowers, criando um caminho de configuração mais unificado.
- A página inicial da conversa agora inclui atalhos para recursos usados com frequência, reduzindo o tempo necessário para acessá-los.
- Atualizamos os elementos visuais da marca e os identificadores da interface nas telas de inicialização e no Team Mode.
- Ampliamos o suporte e a adaptação de parâmetros para a última geração de modelos de IA populares.
- Atualizamos as configurações de imagem, incluindo acompanhamento de status para tarefas assíncronas no estilo vídeo.
- Adicionamos a primeira fase da execução de scripts em lote, projetada para cenários de automação em várias etapas.

### Correções

- Corrigimos problemas em que o streaming da conversa de IA podia travar, produzir formatação anormal ou não se recuperar corretamente após a interrupção de tarefas longas.
- Corrigimos a aplicação repetida de ferramentas de edição de código, comportamentos anormais de navegação e dessincronização do estado do editor após rejeitar alterações.
- Corrigimos atrasos na atualização das estatísticas de uso de contexto, anéis de progresso e mensagens de dica.
- Corrigimos notificações de atualização de versão travadas e várias strings sem tradução.
- Corrigimos problemas de usabilidade e exibição no Super Memory, na revisão de código e em fluxos relacionados de ferramentas.
- Corrigimos problemas de persistência de sessões e reduzimos a lentidão da lista de histórico ao lidar com threads grandes ou grande quantidade de conteúdo colado.
- Corrigimos painéis sobrepostos, como MCP e Skills, que ficavam bloqueados durante as conversas.
- Corrigimos interrupções ocasionais de streaming durante saídas longas no estilo pesquisa.
- Corrigimos lembretes de conclusão de tarefas que não eram acionados quando a janela estava sem foco.
- Corrigimos configurações sobrescritas entre várias janelas e barras de operações em lote que desapareciam inesperadamente.
- Corrigimos sessões de autenticação que exigiam novo login ou exibiam estados inconsistentes em determinados cenários.

### Melhorias

- Atualizamos o runtime principal e as dependências de IA para melhorar a estabilidade e a compatibilidade gerais.
- Otimizamos estratégias de cache de prompts e chamadas de ferramentas para reduzir custos repetidos e melhorar a consistência das respostas.
- Melhoramos a renderização de streaming e a lógica de atualização da interface, deixando conversas longas e saídas de alta carga mais fluidas.
- Otimizamos o mecanismo de tempo limite de solicitações LLM para reduzir a probabilidade de tarefas longas de geração serem interrompidas incorretamente enquanto ainda há progresso.

## 1.2.0 · 2026-07-06

O Breezell v1.2.0 apresenta novas ferramentas de IA, fluxos de trabalho de Agent mais inteligentes, atualizações da interface, correções de estabilidade e melhorias de desempenho em conversas longas, execução de ferramentas, saída do terminal, isolamento de memória e desenvolvimento remoto.

### Ferramentas de IA e capacidades inteligentes

- Adicionamos a nova ferramenta **Agent Research**, com acompanhamento de progresso e exibição de resultados em tempo real.
- Adicionamos execução de scripts em lote no Code Mode como primeira fase do suporte à automação em várias etapas.
- Adicionamos um ponto de entrada unificado para ferramentas do navegador, consolidando ações antes separadas em um fluxo mais simples.

### Conversa e interface

- Adicionamos uma **barra de mensagens** à área de chat, facilitando a navegação e o salto entre mensagens.
- Adicionamos cartões de acesso rápido para **Super Memory** e **Revisão de código** na página inicial do chat.
- Adicionamos um painel de alternância rápida para **servidores MCP** na área de entrada, permitindo habilitar ou desabilitar o MCP sem abrir as Configurações.
- Introduzimos uma nova identidade de marca, com atualizações visuais unificadas na página de lançamento, na página de boas-vindas e no Teams Mode.
- Redesenhamos a interface de gerenciamento de provedores nas Configurações, que agora oferece navegação em lista e visualizações detalhadas.
- Adicionamos cores de destaque personalizadas para o tema, disponíveis nos modos claro e escuro.
- Atualizamos as configurações de imagem para a v2, com suporte a polling e acompanhamento de tarefas assíncronas de vídeo.
- Adicionamos relatórios de verificação de integridade para provedores compatíveis com OpenAI, facilitando o diagnóstico de problemas de conexão e configuração.

### Estabilidade

- Corrigimos a lentidão ao carregar históricos longos de conversas e respostas demoradas ao colar grandes blocos de conteúdo.
- Corrigimos congelamentos ocasionais da interface durante a saída de streaming de IA, especialmente quando o terminal produzia grandes volumes de saída.
- Corrigimos casos em que a barra de ações **Manter tudo / Desfazer tudo** desaparecia inesperadamente.
- Corrigimos configurações sobrescritas quando várias janelas estavam abertas ao mesmo tempo.
- Corrigimos problemas que impediam o uso correto do **Super Memory** em determinados modos.
- Corrigimos interrupções incorretas por tempo limite durante a geração de IA, para que gerações lentas, mas saudáveis, não sejam interrompidas cedo demais.
- Corrigimos falhas de refresh token que podiam fazer os usuários entrarem novamente várias vezes.
- Corrigimos resultados de execução de ferramentas que perdiam o pareamento correto quando o usuário interrompia com uma nova mensagem.
- Corrigimos a compressão silenciosa de resultados de ferramentas que fazia a IA executar a mesma tarefa repetidamente.
- Corrigimos a exibição imprecisa do código de saída do terminal e casos em que a saída do terminal não podia ser totalmente restaurada.
- Corrigimos conexões Remote SSH que perdiam a capitalização do nome do host e as informações de porta.

### Melhorias de desempenho e experiência

- Melhoramos a velocidade geral de resposta simplificando a superfície de ferramentas de IA e reduzindo a sobrecarga do sistema em cada turno.
- Otimizamos as estratégias de busca e leitura com uma abordagem de “localizar primeiro e ler em janelas depois”, reduzindo leituras completas desnecessárias.
- Adicionamos isolamento de memória no nível do workspace, impedindo que memórias de projetos diferentes interfiram umas nas outras.

## 1.1.9 · 2026-06-26

### Novos modelos

- Adicionamos suporte a vários novos modelos de linguagem, além de modelos de geração de imagens e vídeos, oferecendo mais opções.

### Novos recursos

- Agents agora oferecem Deep Research, facilitando a exploração mais profunda de perguntas complexas.
- A barra lateral do chat agora permite ir com um clique à mensagem mais recente e copiar mensagens com um clique.
- O gerenciamento de provedores de serviço agora oferece layout em lista, e a interface do MCP Market foi atualizada.

### Melhorias de experiência

- Refinamos os temas claro/escuro, a interface do terminal e vários detalhes da interface para uma experiência visual mais limpa.

### Desempenho e estabilidade

- Atualizamos o mecanismo de runtime subjacente para um início e uma operação mais suaves.
- Agents agora são mais inteligentes e estáveis, reduzindo ações repetitivas e ineficazes.
- Corrigimos problemas relacionados a login, terminal, conexões remotas e várias áreas da interface.

## 1.1.8 · Correção de bugs · 2026-06-09

- Adicionamos uma nova validação para ajuste de intensidade.
- Otimizamos diálogos repetidos e o contexto inteligente automático.
- Corrigimos problemas de rolagem na página de conversa.
- Corrigimos a compressão instável.

## 1.1.7 · 2026-06-07

- Corrigimos o modelo de otimização que era excessivamente prolixo.
- Corrigimos um problema anormal com a marcação de arquivos na revisão de otimização.
- Corrigimos vários bugs.

## 1.1.6 · 2026-06-06

### Adicionado

- **Painel de revisão de código**: exibição de revisão independente, diff com números de linha, diff Myers para arquivos grandes, rollback/reversão, seleção de referência/cópia e envio para o chat.
- **Configurações de aparência**: largura/localização da barra de atividades, posição da barra lateral e estilo das abas do editor.
- **Navegador Breezell**: interface do painel redesenhada, barra de endereço/pesquisa, modo anônimo e fechamento automático quando a última aba é fechada.
- **Painel de banco de dados**: descoberta de SQLite no workspace, CRUD completo para MongoDB/Oracle e renomeação de conexões.
- **Melhorias no chat**: referência às 3 rodadas recentes do histórico, anexos de chat, citação/cópia em rich text, compressão manual de contexto e progresso de condensação.
- **Novos provedores**: GitHub Copilot, Kimi Code (OAuth de dispositivo); otimização de uso/ícone do Codex.
- **Super Memory**: interface com percepção de tempo (FreshBadge e cartões de recuperação).
- **Modelos/Provedores**: MiniMax M3, Opus 4.8, glm-5.1; redesign da página de configuração compatível com OpenAI.
- **Central de notificações**: abas na barra lateral esquerda e layout dividido maior.
- **Exibição de erros**: cartões de erro estruturados, detalhes brutos expansíveis e erros permanentes sem novas tentativas.
- **Outros**: tradução para russo e anel/bandeja de uso de contexto.

### Correções

- **Agent/Ferramentas**: leitura sempre atualizada de arquivos e sincronização das ferramentas de arquivo com o disco.
- **Revisão/Renderização**: tabelas GFM, espaçamento do Explore e OOM de Markdown/Mermaid em streaming em sessões longas.
- **Remoto/Terminal**: cadeia completa de ferramentas SSH, reflow do terminal do Windows, confusão de ID do terminal e deadlock ao fechar abas.
- **Ajustes de interface**: o ajuste da largura da barra de atividades reduz a oscilação do painel; também corrigimos a altura do painel de notificações, o texto dos dias de retenção do Super Memory e outros detalhes.

### Otimizações

- **Desempenho**: melhoria significativa da taxa de acerto do cache, do LCP da inicialização/tela de abertura e do gerenciamento de memória de conversas longas.
- **Dependências/Base**: Electron 39.8 → 42.3.3.

## 1.1.5 · 2026-05-24

### Novos recursos

- **Citação e cópia no chat**: depois de selecionar texto em um chat, converta-o rapidamente em uma citação Markdown ou copie-o diretamente, preservando listas, blocos de código e tags de nome de arquivo.
- **Notificação automática para comandos em segundo plano**: notificações são enviadas automaticamente quando tarefas de terminal de longa duração terminam, eliminando a necessidade de verificar o progresso repetidamente.
- **Renderização de fórmulas matemáticas**: o chat agora oferece suporte correto à renderização matemática em LaTeX, incluindo $x^2$ e $...$.
- **Redesign da exibição de erros**: mensagens de erro aparecem em cartões expansíveis, com cópia do conteúdo completo em um clique.
- **Suporte completo a desenvolvimento remoto por SSH**: todas as chamadas de ferramentas em hosts SSH remotos agora são totalmente compatíveis.
- **Diagnóstico de travamentos do streaming**: quando uma resposta em streaming trava, diagnósticos detalhados indicam se a causa é latência upstream, buffer de rede etc.
- **Barra de uso do contexto do modelo**: o seletor de modelos mostra claramente, por categoria, o uso de tokens da sessão atual.
- **Rótulo “Modelo padrão”**: o seletor de modelos identifica claramente o modelo padrão.
- **Atualização do painel de memória de longo prazo**: novas tags de tempo como “Agora”, “Hoje” e “Esta semana”, estilo de vidro fosco e cartões de recuperação de memória.
- **Exibição do título do plano durante o streaming**: quando o modelo gera um plano, o título aparece durante a saída em streaming.
- **Erros permanentes ignoram tentativas automaticamente**: erros permanentes, como falhas de autenticação, não geram mais tentativas automáticas sem sentido.
- **Suporte a novos modelos**: adicionamos suporte a modelos como Gemini 3.5 e Qwen 3.7.
- **Suporte à interface em russo**.
- **Cartões de ferramentas do chat expansíveis**: saídas como resultados de busca e leituras de arquivos podem ser recolhidas/expandidas.

### Correções

- Aumentamos o tempo limite de respostas em streaming de 120 s para 180 s, com uma mensagem intermediária na interface para modelos de inferência mais lenta.
- Corrigimos o problema de camadas dos menus suspensos na página de Configurações; menus de provedores de terceiros não ficam mais ocultos.
- Corrigimos a exibição de erros `[object Object]`.
- Corrigimos o botão de cópia da gaveta de erros que não funcionava.
- Corrigimos o congelamento da caixa de prompt de caminho de arquivo, que não permanece mais após rolar para longe.
- Otimizamos o esquema de cores da seleção de texto no chat, corrigindo variáveis de estilo quebradas.
- Corrigimos o scroll-through do seletor de modelos; rolar o menu de modelos não rola mais a área de chat abaixo.
- Corrigimos a compatibilidade de schema do modo de raciocínio, melhorando a compatibilidade de parâmetros de inferência sob o protocolo Claude.
- Otimizamos a visualização em streaming de vários arquivos; os indicadores em tempo real de “N alterações” não atrasam mais.
- Corrigimos vários detalhes da interface, incluindo rolagem, espaçamento, alinhamento, animações e tooltips.

### Otimizações

- **Atualização da stack tecnológica**: Electron atualizado para 42.2.0, incluindo Chromium 148, Node.js 24 e V8 14.8.
- **Otimização do gerenciamento de memória**: grandes históricos de chat são gravados automaticamente no disco e os registros de inferência são organizados conforme necessário, mantendo conversas longas leves.
- **Renderização aprimorada de gráficos Mermaid**: melhoramos o gerenciamento de cache com limpeza proativa de SVG ao descarregar, evitando acúmulo de memória durante chats longos.

## 1.1.4 · 2026-04-26

### Novos recursos

- **Modelos da série DeepSeek V4**: adicionamos itens DeepSeek V4 à lista/configuração de modelos para seleção direta.
- **Interface de cartão “Slot” compatível com OpenAI**: redesenhamos a interface em cartões das áreas de configuração compatíveis com OpenAI.

### Correções

- Barras laterais e configurações não “travavam” mais: após trocar de modelo e operar regras/memória, elas são atualizadas rapidamente sem reinicialização.
- Corrigimos links de arquivos no chat que não podiam ser abertos ou eram analisados incorretamente.
- Tornamos as ferramentas de terminal mais confiáveis: comandos agora passam pelo serviço de terminal do sistema.
- Corrigimos saltos e alturas irregulares na área de chat quando cartões de “Pensamento/Conteúdo em streaming/Ferramentas de terminal” apareciam ou trocavam de estado, além de corrigir uma falha causada por referência a variável.
- Atualizamos a visualização de PDF e os comportamentos de uso/exibição das ferramentas relacionadas.
- Corrigimos a persistência e o tratamento de grandes volumes de resultados de ferramentas para reduzir anomalias ou perda de estado.
- Atualizamos os relatórios de erro do LLM e os recursos de interface da área de chat.

### Otimizações

- Seleção de painéis de modelos na caixa de entrada.
- Maior estabilidade das ferramentas de terminal.

## 1.1.3-v2 · 2026-04-23

### Novos recursos

- Suporte ao modelo GPT-5.5, adicionado a todas as listas de provedores.
- Adicionamos o modelo Kimi K2.6, disponível nos principais provedores (OpenRouter, Together AI, Fireworks, DeepInfra etc.).
- Fórmulas matemáticas agora podem ser exibidas no chat (renderização KaTeX).
- Fluxogramas agora podem ser exibidos no chat (renderização de gráficos).
- Adicionamos uma ferramenta de busca na web com controle sobre profundidade e parâmetros de tópico.
- A ferramenta de terminal foi atualizada para o modo PTY, oferecendo uma experiência mais realista.
- Adicionamos um índice de símbolos de código com suporte a ir para a definição.
- Adicionamos uma ferramenta de análise de dependências (detecção de ciclos, rastreamento de dependências: quais arquivos são afetados por uma alteração, a cadeia de dependências entre os arquivos A e B e se existem dependências circulares).
- Skills agora permitem arrastar e compactar arquivos/pastas.
- Adicionamos um indicador de status de atualização do IDE à barra de título.
- Reformulamos o painel multi-Slot: busca, ordenação, verificações de integridade e limpeza em lote de APIs inválidas.

### Correções

- Chats longos não congelam mais: corrigimos o congelamento da interface com mensagens em excesso.
- A rolagem não volta mais ao final ao visualizar o histórico do chat.
- Corrigimos vazamento de subprocessos do terminal, eliminando picos de memória ou falhas causados por processos residuais.
- Corrigimos a exibição de caminhos de arquivos; links não são mais corrompidos em caminhos falsos por reticências.
- Corrigimos o Super Memory vazio; tags de raciocínio da IA não vazam mais e não deixam a memória vazia.
- Corrigimos o recolhimento de comandos do terminal; comandos com falha não são mais engolidos por comandos bem-sucedidos posteriores.
- Corrigimos o estilo do lembrete flutuante de tarefas do plano, incluindo o problema de fundo em duas camadas.
- Corrigimos saltos do chat ao expandir a lista de arquivos.
- A IA não pergunta mais repetidamente “continuar?” e passa a executar de forma autônoma (é necessário fazer autotestes).
- Alinhamos a barra de rolagem na caixa de conteúdo do Skills.
- Corrigimos casos em que a execução reconhecia o código de saída 0, mas o build real falhava.

### Otimização de desempenho

- Otimizamos significativamente a renderização do chat.
- Adicionamos memo à renderização Markdown para evitar reanalisar o mesmo conteúdo.
- Otimização de memória: reduzimos o limite de persistência dos resultados de ferramentas para evitar picos em conversas longas.
- Atualizamos o contador de tokens.
- Adicionamos um limite superior LRU ao cache de mensagens.
- Novo design da tela de abertura e do fluxo de integração.

## 1.1.1 · 2026-04-11

### Novos recursos

- O painel de histórico do chat agora possui um botão “Nova conversa” para facilitar a operação.
- A funcionalidade de banco de dados foi muito ampliada: suporte a Redis e MariaDB, nova confirmação de edição de células, badges de contagem de tabelas e possibilidade de abrir o painel de banco de dados diretamente pelo chat.
- A conversa de IA permite alternar entre os modos Plan/Agent para um fluxo mais suave.

### Correções e otimizações

- Corrigimos a conclusão de código repetida (conclusão com Tab).
- Corrigimos o salto de página ao focar a janela do navegador de arquivos.
- Corrigimos falsos relatos de desconexão ao minimizar a janela.
- Corrigimos vários bugs, como indexação de imagens, vazamento de memória IPC e tempos limite de LLM no chat.
- Corrigimos a tela branca causada pelo empacotamento do React e otimizamos o tamanho do pacote.
- Corrigimos vários problemas, como painéis vazios e desfazer no verificador CSS.
- Atualizamos para TypeScript 6.0 e Electron 41.2.0 para maior estabilidade geral.
- Fizemos uma revisão abrangente da interface: unificamos fundos e bordas dos cartões de ferramentas, alinhamos ícones das abas do editor e corrigimos a rolagem de blocos de código de diff, entre outros.

## 1.1.0 · 2026-04-09

### Novos recursos

- **Conclusão de código gratuita**: todos os usuários agora podem usar a conclusão de código por IA gratuitamente, sem configuração adicional.
- **Navegador integrado muito aprimorado**: oferece simulação de dispositivos (visualização em celular/tablet), títulos e ícones dinâmicos de abas, controle de zoom, inspetor CSS otimizado e gravação em tempo real de eventos de animação/transição.
- **Memória de conversa mais inteligente**: novo mecanismo automático de deduplicação e mesclagem para que a IA recupere conteúdo anterior com mais precisão e evite armazenamento duplicado.
- **Botão de alternância da barra lateral**: adicionamos um botão rápido de alternância na barra de título.
- **Otimização da lista de tarefas**: oferece mesclagem de tarefas, ordenação por prioridade e novas animações de transição.
- **Painel de equipe redesenhado**: novo design de tema escuro e carregamento de página mais rápido.
- **Carregamento sob demanda de mensagens de conversa**: históricos longos não são mais carregados de uma vez, acelerando a abertura.
- **Mecanismo de cache de API**: adicionamos cache da Responses API para reduzir solicitações duplicadas e economizar tokens.

### Melhorias

- Atualização do backend do editor: Electron atualizado para 41.2.0 e TypeScript para 6.0, proporcionando operação mais estável e fluida.
- Redesenhamos a interface de chamadas de ferramentas de IA, unificando estilos de cartões para operações de arquivo, ferramentas MCP etc.
- Otimizamos o diff de código: corrigimos rolagem no estado recolhido, barras horizontais e exibição da cor de fundo.
- Otimizamos notificações do sistema: evitamos envios duplicados e não reportamos desconexões ao minimizar.
- Otimizamos a detecção de comandos do terminal para identificar com mais precisão se os comandos foram executados.
- Melhoramos o desempenho de inicialização otimizando o fluxo de início e a renderização da lista de conversas.
- Evitamos estouro de memória em segundo plano limpando automaticamente a memória acumulada durante operações prolongadas.

### Correções

- Corrigimos mensagens enfileiradas que podiam ser enviadas para a thread errada ao alternar entre threads de conversa.
- Corrigimos a exclusão de um anexo de imagem que podia excluir outros anexos de arquivo.
- Corrigimos processos em segundo plano que continuavam executando após um tempo limite de resposta da IA.
- Corrigimos o problema de compatibilidade do TrustedHTML que causava páginas em branco.
- Corrigimos cliques em links do navegador integrado que não abriam novas páginas corretamente.
- Corrigimos botões de opção que ocasionalmente não apareciam ao fazer perguntas à IA.
- Corrigimos ícones desalinhados das abas do editor.

## 1.0.9 · 2026-04-03

### Novos recursos

- **Automação do navegador integrado**: integramos ferramentas de navegador CDP (captura de tela, clique, entrada, navegação, snapshot do DOM e registro do console); o Agent de IA pode operar páginas do navegador diretamente.
- **Simulação de viewport do dispositivo**: o navegador integrado pode simular diferentes resoluções (celular/tablet/desktop) e oferece uma lista de dispositivos rolável.
- **Gerenciamento de abas do navegador**: título/ícone dinâmicos, controle de zoom, troca entre várias abas e abertura rápida do painel do navegador pela caixa de entrada.
- **Chamadas paralelas de várias ferramentas**: permite que a IA retorne várias chamadas de ferramentas para execução paralela.
- **Botão de alternância da barra lateral na barra de título**.
- **Troca de painel Entanglement**: permite alternar painéis de forma independente e alinhar automaticamente ao ajustar a barra lateral.

### Correções

- Detecção de conclusão de comandos do terminal: habilitamos o protocolo OSC 633;D, corrigimos a limpeza ANSI e aceleramos o julgamento heurístico.
- Supressão de notificações do sistema de colegas: subthreads não enviam mais notificações irrelevantes ao sistema operacional.
- Substituição do modo Entanglement: o modo selecionado pelo usuário não é mais substituído silenciosamente pelo modo de agendamento.
- Vazamento de intenção: rótulos de intenção no modo causal do Entanglement não vazam mais para o texto exibido.

### Otimizações

- Desempenho de inicialização: otimização O(n) do chat e persistência de estatísticas de diff.
- Interface da ferramenta de terminal: otimizamos margens internas da barra de título/barra inferior e corrigimos o raio dos cantos do botão “Abrir no navegador”.
- Posicionamento do painel do navegador: usamos floating-ui para eliminar oscilação/deslocamento ao abrir.
