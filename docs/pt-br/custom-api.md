---
title: API personalizada (BYOK)
description: Use a sua própria chave de API no Breezell e rode modelos Claude pela API oficial da Anthropic ou por qualquer relay compatível.
---

# API personalizada (BYOK)

BYOK é a sigla de **Bring Your Own Key** (traga a sua própria chave). Em vez de usar a cota oficial do Breezell, o Breezell envia as solicitações a um provedor de modelos com a sua própria chave de API, e é esse provedor que cobra você diretamente.

Este guia mostra a configuração completa com modelos Claude: `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5` e `claude-fable-5-1`.

::: tip Sobre as telas desta página
Esta página não tem capturas de tela. Todas as telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto acompanha o idioma desta página, e as cores seguem a alternância entre tema claro e escuro deste site (Breezell Light / Breezell Dark).

Os anéis laranja e os selos numerados mostram onde clicar. Eles não fazem parte do Breezell. Algumas telas são interativas: você pode trocar o protocolo, editar a URL Base, apertar **Claude 1M**, ligar e desligar o raciocínio e arrastar o controle deslizante de esforço.
:::

## Antes de começar

Você precisa de três coisas:

1. **Uma conta Breezell no plano Custom API ou superior.** Usar modelos de terceiros com a sua própria chave é um recurso pago. Sem o plano, a página do provedor mostra <BzWenben jian="box.models.gate.planRequired" /> no lugar do formulário e, se você não tiver entrado na sua conta, mostra <BzWenben jian="box.models.gate.signIn" />.
2. **Uma chave.** Pode ser uma chave de API da Anthropic, criada no Anthropic Console (ela começa com `sk-ant-`), ou a URL Base e a chave de um relay, gateway ou proxy auto-hospedado.
3. **O protocolo que o seu relay usa.** Pergunte ao seu provedor se ele oferece a API Anthropic Messages (`/v1/messages`), a API OpenAI Chat Completions (`/v1/chat/completions`) ou as duas.

## Escolher a rota

| Rota | Use quando | Onde fica no Breezell | Protocolo |
| --- | --- | --- | --- |
| **A. API da Anthropic** | Você tem uma chave do Anthropic Console | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages (integrado) |
| **B. Slot compatível + protocolo Anthropic** | O seu relay oferece `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › um slot | Anthropic |
| **C. Slot compatível + protocolo OpenAI** | O seu relay só oferece `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › um slot | OpenAI |

Para o Claude, prefira **A** ou **B**. O próprio Breezell recomenda isso no formulário do slot: <BzWenben jian="settings.apiFormat.anthropicTip" />

## Passo 1: abrir o Box (Configurações do Breezell)

As Configurações do Breezell ficam na página **Box**. Enquanto você está nela, o Box ocupa o lugar da barra de atividades, da barra lateral, da área do editor e do painel; clique em **Agent** para voltar ao seu código.

Há três formas de abri-lo:

- Clique em **Box** no alternador à esquerda da barra de título.
- Clique no ícone de engrenagem no canto superior direito e escolha <BzWenben jian="box.title" />.
- Abra a Paleta de Comandos e execute `Breezell: Open Settings`.

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## Passo 2: ir para a página Modelos

Na barra lateral do Box, abra o grupo <BzWenben jian="box.title" /> e clique em <BzWenben jian="tab.models" />. Normalmente, é nessa página que o Box já abre.

<BzHezi gaoliang="moxing" />

No topo da página há quatro visualizações: <BzWenben jian="box.usage.tab.models" />, <BzWenben jian="box.usage.tab.cache" />, <BzWenben jian="box.usage.tab.tokens" /> e <BzWenben jian="box.usage.tab.breezell" />. Fique na primeira.

Logo abaixo, as categorias de provedores dividem os provedores em quatro grupos:

| Categoria | O que contém |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Os modelos oficiais do Breezell, que usam a sua cota do Breezell. Não precisa de chave. |
| <BzWenben jian="box.models.group.signin" /> | Provedores em que você entra com uma conta, como Codex ou Copilot. |
| <BzWenben jian="box.models.group.api" /> | APIs oficiais de fornecedores com a sua própria chave, incluindo a Anthropic. |
| <BzWenben jian="box.models.group.compat" /> | Até 50 slots personalizados para relays, gateways e proxies auto-hospedados. |

## Rota A: a API da Anthropic

### A1. Selecionar a Anthropic

1. Clique em <BzWenben jian="box.models.group.api" />.
2. Digite `Anthropic` em <BzWenben jian="box.models.searchProvidersPlaceholder" />.
3. Clique no cartão **Anthropic**. O provedor selecionado aparece logo abaixo com o status <BzWenben jian="box.models.notConfigured" />.
4. Clique em <BzWenben jian="box.models.editConfig" /> para abrir a configuração dele.

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Colar a sua chave da Anthropic

A configuração tem um único campo: a chave de API.

1. Clique no cartão **Get your API Key**. Ele abre o Anthropic Console (`console.anthropic.com/settings/keys`) no seu navegador.
2. Crie uma chave e copie-a. Ela tem este formato: `sk-ant-api03-...`.
3. Cole-a no campo. O ícone de olho mostra ou oculta a chave.

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

O Breezell limpa a chave antes de usá-la: remove espaços, aspas em volta, um `Bearer ` no início e caracteres invisíveis que costumam vir junto quando você copia. O provedor Anthropic não tem campo de URL Base; o Breezell sempre usa `https://api.anthropic.com`.

### A3. Ativar os modelos Claude que você quer

Assim que a chave é salva, o status muda para <BzWenben jian="box.models.configured" /> e a lista mostra os modelos Claude integrados do Breezell, do mais recente para o mais antigo.

Só os cinco primeiros já vêm habilitados: `claude-fable-5-1`, `claude-fable-5`, `claude-opus-5`, `claude-opus-5-5` e `claude-opus-4-8`. Ligue o interruptor no fim de uma linha para incluir o modelo no seletor de modelos do chat, por exemplo `claude-sonnet-5-5` e `claude-haiku-5-5`.

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

Como ler a tabela:

| Coluna | Significado |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | O ID do modelo enviado à API. Um ponto verde indica que o modelo está habilitado. |
| <BzWenben jian="box.models.context" /> | A janela de contexto completa do modelo. Todos os modelos Claude 5 têm 1M. |
| <BzWenben jian="box.models.capabilities" /> | Quatro ícones: <BzWenben jian="box.models.filter.vision" />, <BzWenben jian="box.models.filter.tools" />, <BzWenben jian="box.models.filter.reasoning" />, <BzWenben jian="box.models.filter.web" />. Um ícone aceso indica que o modelo tem esse recurso. |
| <BzWenben jian="models.pricing" /> | Preço de entrada / saída em USD <BzWenben jian="box.models.price" />, segundo o catálogo integrado do Breezell. O que vale é a fatura da Anthropic. |
| <BzWenben jian="box.mcp.colEnabled" /> | Mostra ou oculta o modelo no seletor de modelos do chat. |

Quando a tabela fica estreita, o Breezell esconde primeiro a coluna <BzWenben jian="box.models.context" /> e depois a <BzWenben jian="box.models.capabilities" />; os valores delas passam para a dica que aparece sobre o nome do modelo.

Se a Anthropic lançar um modelo que ainda não está na lista, clique em <BzWenben jian="box.models.fetch" />. O Breezell consulta `https://api.anthropic.com/v1/models` com a sua chave e permite adicionar os novos IDs. Você também pode digitar um ID em <BzWenben jian="box.models.addModelPlaceholder" /> e clicar em <BzWenben jian="box.models.add" />.

A rota A está concluída. Continue em [Usar o Claude no chat](#use-claude-in-chat).

## Rota B: um slot compatível com o protocolo Anthropic

Use esta rota para um relay, um gateway de API ou um proxy auto-hospedado que oferece o Claude pela API Anthropic Messages.

### B1. Abrir um slot compatível

1. Clique em <BzWenben jian="box.models.group.compat" />.
2. Clique no cartão do slot. O Slot 1 sempre existe; um slot novo mostra <BzWenben jian="settings.noEndpoint" /> abaixo do nome.
3. Para manter vários relays separados, clique em <BzWenben jian="box.models.addCompat" /> para cada um. O Breezell tem 50 slots, e cada slot é um canal independente, com endereço, chave, protocolo e modelos próprios.
4. Clique em <BzWenben jian="box.models.editConfig" />.

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. Preencher o slot

O formulário é o mesmo em todos os slots. Experimente abaixo: altere a URL Base ou o protocolo e veja o campo <BzWenben jian="settings.requestUrl" /> se atualizar, exatamente como no Breezell.

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />: um nome de até 30 caracteres, como `Claude Relay`. Ele vira o título do cartão na página Modelos e o nome do grupo no seletor de modelos do chat.
- <BzWenben jian="settings.baseUrl" />: o endereço que o seu provedor informa. Ele precisa começar com `http://` ou `https://`, por exemplo `https://relay.example.com` ou `http://127.0.0.1:8080`.

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />: a chave do relay. Ela fica mascarada; o ícone de olho a revela.

**<BzWenben jian="settings.sectionProtocol" />**

Escolha **Anthropic**. Os três botões definem o formato da solicitação:

| Botão | Formato da solicitação | Usar com o Claude? |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | Só quando o relay não tem `/v1/messages` (rota C). |
| Responses | OpenAI Responses | Não. Feito para modelos GPT. |
| **Anthropic** | Anthropic Messages | **Sim.** É o que o Breezell recomenda para o Claude. |

Depois, confira o campo <BzWenben jian="settings.endpointPreset" />. Com o protocolo Anthropic, há duas predefinições:

| Predefinição | Caminho | Use para |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | Quase todos os relays. Mantenha esta. |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Somente o Volcengine Agent Plan. |

### B3. Conferir a URL da solicitação

O campo <BzWenben jian="settings.requestUrl" />, abaixo da predefinição, mostra o endereço exato que o Breezell vai chamar. O Breezell junta a URL Base com o caminho da predefinição e remove a parte duplicada, então os dois estilos comuns de URL Base funcionam:

| URL Base que você digita | Predefinição | URL da solicitação |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

Compare o resultado com a documentação do seu provedor. Se o provedor coloca a API em um caminho fora do comum, digite a URL Base de modo que a URL da solicitação termine exatamente onde o provedor indica.

### B4. Cabeçalhos personalizados e Claude 1M (opcional)

<BzWenben jian="settings.customHeaders" /> adiciona cabeçalhos HTTP a todas as solicitações deste slot. Deixe como `{}`, a menos que o seu provedor peça algo.

O valor precisa ser um JSON válido: aspas duplas tanto nas chaves quanto nos valores, sem comentários e sem vírgulas no final.

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

O botão **Claude 1M** preenche exatamente esse cabeçalho. Use-o quando o seu relay precisar do cabeçalho beta para aceitar prompts maiores que 200K. Mesmo assim, o chat do Breezell continua iniciando cada modelo Claude em 200K; a troca para 1M é feita por modelo, no seletor de modelos do chat (veja [Context, Reasoning e Fast](#context-reasoning-and-fast)).

Abaixo dos cabeçalhos fica o cartão <BzWenben jian="settings.accountPool" />. Um pool de contas alterna entre várias chaves ou rotas em um mesmo slot. Você não precisa dele em uma primeira configuração.

### B5. Adicionar modelos Claude

Um slot novo não tem modelos. Adicione-os de uma destas duas formas.

**Buscar a lista.** Clique em <BzWenben jian="box.models.fetch" />. O Breezell pergunta ao relay quais modelos ele tem e os mostra em uma lista de seleção. Marque os modelos Claude e clique em <BzWenben jian="box.models.addSelected" />.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**Digitar o ID.** Digite o ID do modelo em <BzWenben jian="box.models.addModelPlaceholder" /> e clique em <BzWenben jian="box.models.add" />. Use o ID exatamente como o relay o nomeia, por exemplo `claude-opus-5-5`. Essa é a opção certa quando o relay não tem lista de modelos.

### B6. Verificar o slot

Clique em <BzWenben jian="box.models.health.checkSlot" /> para enviar uma solicitação curta a este slot. Um modelo que falha recebe o selo <BzWenben jian="box.models.health.ribbonFail" />, e um modelo lento, o selo <BzWenben jian="box.models.health.ribbonTimeout" />; um slot totalmente inacessível aparece marcado como <BzWenben jian="box.models.health.ribbonDown" /> no cartão.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

Para uma análise mais detalhada, clique em <BzWenben jian="box.models.checkConnectivity" /> acima dos cartões dos slots. Essa opção verifica vários slots e modelos de uma vez, e <BzWenben jian="box.models.health.checkStreaming" /> mostra se um relay transmite as respostas aos poucos (<BzWenben jian="box.models.health.stream.streaming" />), segura o raciocínio (<BzWenben jian="box.models.health.stream.heldThinking" />) ou envia tudo no final (<BzWenben jian="box.models.health.stream.buffered" />).

## Rota C: um slot compatível com o protocolo OpenAI

Alguns relays só oferecem o Claude no formato OpenAI Chat Completions. Configure o slot como na rota B, com estas diferenças:

1. Em <BzWenben jian="settings.sectionProtocol" />, escolha **OpenAI**.
2. Mantenha a predefinição <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" /> (`/v1/chat/completions`).
3. Adicione os modelos com os IDs que o relay usa. Muitos relays usam `claude-opus-5-5`; alguns colocam o fornecedor como prefixo, como em `anthropic/claude-opus-5-5`.

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

O Breezell reconhece os modelos Claude pelo nome, então `anthropic/claude-opus-5-5` ou `claude-opus-5.5` recebem os mesmos limites que `claude-opus-5-5`. Repare no que o próprio formulário diz: <BzWenben jian="settings.apiFormat.openaiTip3" /> Além disso, no protocolo OpenAI o Breezell não consegue oferecer **Fast** para o Claude Opus. Se o seu relay também oferece `/v1/messages`, mude o slot para **Anthropic**.

## Gerenciar os seus modelos Claude

### O menu da linha

Cada linha de modelo tem um botão **⋯**. Para um modelo Claude em um slot compatível, ele oferece <BzWenben jian="box.models.pin" />, <BzWenben jian="box.models.advanced" /> e <BzWenben jian="box.models.remove" />. Passe o mouse sobre uma linha para ver o ícone de copiar ao lado do nome do modelo.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### Definir o preço

O Breezell conhece os preços de tabela da API da própria Anthropic, mas não os do seu relay. Em um slot compatível, a coluna de preço mostra <BzWenben jian="box.models.editPrice" />. Clique ali e informe os preços do seu relay em USD por 1M de tokens: entrada, saída, acerto de cache e as gravações de cache de 5 minutos e de 1 hora que o Claude usa. A partir daí, a visualização <BzWenben jian="box.usage.tab.tokens" /> mostra os custos além dos tokens. Sem preço, o Breezell continua contando os tokens, só não calcula o valor em dinheiro.

### Configurações avançadas

O Breezell reconhece todos os IDs de modelo Claude deste guia e preenche os limites por você, então a maioria das pessoas nunca precisa abrir esta caixa de diálogo. Abra-a quando o relay renomear um modelo (por exemplo, `my-claude`), quando o Breezell mostrar o modelo como não reconhecido ou quando o relay impuser limites menores.

Primeiro, ative <BzWenben jian="models.enableCustomSettings" />; até lá, todos os cartões ficam cinza e somente leitura.

<BzGaoji />

Os valores que o Breezell usa para os modelos Claude 5:

| Configuração | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| Janela de contexto (curta / longa) | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | Desativado | Desativado | Desativado | **Ativado** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | Desativado | **Ativado** | Desativado | Desativado |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

A tabela mostra um slot compatível com o protocolo Anthropic. No provedor Anthropic (rota A), a mensagem de sistema passa a ser `separated`; as duas opções funcionam com o Claude. **Fast** só é oferecido no provedor Anthropic e nos slots com o protocolo Anthropic.

Os campos que recebem quantidades de tokens aceitam os sufixos `k` ou `m`: `128k` vira `128000` e `1m` vira `1000000`. Não defina um tamanho de contexto ou de saída maior do que o seu relay permite, senão as solicitações vão falhar.

Em um slot com o protocolo **OpenAI**, <BzWenben jian="models.systemMessage" /> oferece `system-role` ou `developer-role`, e <BzWenben jian="models.toolFormat" /> oferece `OpenAI Style` ou `None (XML)`. Mantenha `OpenAI Style` para o Claude, para que as chamadas de ferramentas funcionem.

## Usar o Claude no chat {#use-claude-in-chat}

### Escolher o modelo

O chat continua aberto ao lado do Box; clique em **Agent** na barra de título se quiser ter o editor de volta também. Abaixo da caixa de entrada do chat, clique no nome do modelo para abrir o seletor de modelos.

- A guia <BzWenben jian="box.models.group.api" /> lista os modelos Claude que você habilitou no provedor Anthropic (rota A), com o preço de tabela de cada um.
- Mude para **OpenAI-Compatible** na parte de baixo do seletor para ver os slots compatíveis (rotas B e C). Cada slot é um grupo que tem o apelido dele como título.

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context, Reasoning e Fast {#context-reasoning-and-fast}

Passe o mouse sobre um modelo no seletor para abrir as opções dele. Este painel é interativo: experimente.

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**: `200K` (marcado como <BzWenben jian="inputToolbar.contextDefault" />) ou `1M`. O Breezell inicia todo modelo Claude em 200K e só envia o orçamento maior depois que você escolhe `1M`.
- **Reasoning**: o Claude Fable, o Opus e o Sonnet 5.x sempre raciocinam, então o interruptor fica travado como ligado. O `claude-haiku-5-5` permite desligá-lo para respostas rápidas.
- **Effort**: `Low`, `Medium`, `High`, `Extra High` e `Max`, de **Faster** a **Smarter**. O controle deslizante fica roxo em `Max`.
- **Fast**: só no `claude-opus-5-5` (e no Opus 5 / Opus 4.8). Custa 2× e responde cerca de 2,5× mais rápido.

A sua escolha aparece ao lado do nome do modelo, abaixo da caixa de entrada, por exemplo `claude-opus-5-5 200K Medium` ou `claude-opus-5-5 1M High Fast`. Ela fica salva para cada modelo.

### Enviar uma mensagem

Digite uma mensagem e envie. Se tudo estiver configurado, a resposta volta pela sua própria chave.

<BzLiaotian moxing="claude-opus-5-5" wen="Olá! Qual modelo é você?" da="Olá! Sou o Claude Opus 5.5, rodando no Breezell com a sua própria chave de API. O que vamos construir hoje?" />

Você concluiu a configuração do BYOK.

## Qual modelo Claude usar

| ID do modelo | Contexto | Preço entrada / saída (por 1M de tokens) | Intensidade padrão | Desligar raciocínio | Fast | Indicado para |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | US$ 10 / US$ 50 | High | Não | Não | Os problemas mais difíceis e refatorações longas |
| `claude-opus-5-5` | 1M | US$ 4 / US$ 20 | Medium | Não | Sim (2×) | Trabalho de agente no dia a dia: a escolha padrão |
| `claude-sonnet-5-5` | 1M | US$ 2 / US$ 10 | High | Não | Não | Equilíbrio entre velocidade e custo |
| `claude-haiku-5-5` | 1M | US$ 0,10 / US$ 0,50 | Medium | Sim | Não | Perguntas rápidas e pequenas edições |

Os preços são os de tabela do catálogo integrado do Breezell para a API da Anthropic. Um relay define os próprios preços. No `claude-haiku-5-5`, prompts com mais de 100K tokens são cobrados a 5× a tarifa.

## Solução de problemas

| O que você vê | O que significa | O que fazer |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | O seu plano não inclui provedores personalizados. | Faça upgrade para o plano Custom API ou superior. |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | O slot ainda não tem URL Base. | Preencha o campo <BzWenben jian="settings.baseUrl" />. |
| <BzWenben jian="box.models.fetchNeedsKey" /> | O campo da chave está vazio. | Cole a chave. |
| <BzWenben jian="box.models.fetchAuthFailed" /> | O provedor retornou 401 / 403. | Copie a chave de novo, confira se ela pertence a este provedor e verifique o plano e a lista de IPs permitidos. |
| <BzWenben jian="box.models.fetchFailed" /> … | O relay não tem lista de modelos ou o endereço está errado. | Confira o campo <BzWenben jian="settings.requestUrl" /> ou adicione os IDs dos modelos manualmente. |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | Todos os modelos que o relay retornou já estão no slot. | Nada a fazer. |
| <BzWenben jian="box.models.health.errTimeout" /> | A solicitação expirou. | Verifique o endereço, o seu proxy e a rota de rede. |
| <BzWenben jian="box.models.health.errConnect" /> | Não foi possível alcançar o host. | Verifique o endereço, o DNS e o proxy. |
| <BzWenben jian="box.models.health.errHttp" /> | O relay respondeu com um erro HTTP. | Na maioria das vezes, é um caminho ou protocolo errado: compare o campo <BzWenben jian="settings.requestUrl" /> e o protocolo com a documentação do provedor. |
| A URL da solicitação contém `/v1/v1` ou não tem `/v1` | A URL Base e a predefinição não combinam. | Corrija a URL Base até que o campo <BzWenben jian="settings.requestUrl" /> fique correto. |
| A resposta aparece de uma vez depois de uma longa espera | O relay faz buffer do streaming. | Execute <BzWenben jian="box.models.health.checkStreaming" />. Se o resultado for <BzWenben jian="box.models.health.stream.heldThinking" />, um esforço menor encurta a espera. |
| Solicitações acima de 200K falham | O relay precisa do cabeçalho beta de 1M ou não tem contexto de 1M. | Aperte **Claude 1M** em <BzWenben jian="settings.customHeaders" /> ou mantenha o modelo em `200K`. |
| A lista de modelos continua vazia depois da busca | A lista não foi carregada. | Reinicie o Breezell e busque de novo, ou adicione os IDs manualmente. |

## Perguntas frequentes

**Posso usar a chave oficial da Anthropic e um relay ao mesmo tempo?**
Sim. A rota A e cada slot compatível são independentes. O seletor de modelos do chat mostra todos lado a lado, e você pode trocar em cada conversa.

**Posso guardar vários relays e chaves?**
Sim. Use um slot por relay (até 50). Para alternar entre várias chaves no mesmo relay, use o <BzWenben jian="settings.accountPool" /> desse slot. O <BzWenben jian="box.vault.group" />, na barra lateral do Box, guarda endereços e chaves de relays no chaveiro do sistema e pode preencher um slot para você.

**Quem me cobra?**
O provedor cuja chave você usa. O Breezell não desconta essas solicitações da sua cota do Breezell. A visualização <BzWenben jian="box.usage.tab.tokens" /> mostra quantos tokens você usou; defina preços nos slots compatíveis para ver também o custo.
