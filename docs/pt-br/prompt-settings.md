---
title: Configurações de prompt e habilidades
description: Dê ao Breezell instruções permanentes, memórias, skills reutilizáveis e um estilo de mensagem de commit, por projeto ou para todos os projetos.
---

# Configurações de prompt e habilidades

O Breezell reúne quatro tipos de instruções permanentes para a IA em um único painel, **Rules, Memories & Skills**:

| | O que é | Uso |
| --- | --- | --- |
| **Rules** | Instruções que a IA precisa seguir, como convenções de código ou o idioma das respostas | Em todas as solicitações |
| **Memories** | Notas datadas: fatos e decisões a manter entre conversas | Como notas de contexto; a sua solicitação mais recente prevalece |
| **Skills** | Roteiros passo a passo para uma tarefa específica, como escrever notas de versão | Carregadas pela IA quando uma tarefa corresponde a elas |
| **Commit** | Como devem ser as mensagens de commit do Git geradas pela IA | Quando você gera uma mensagem de commit |

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. O texto delas acompanha o idioma desta página. A navegação no painel é interativa. Rótulos como Rules, Memories, Skills e Commit também estão em inglês no Breezell.
:::

## Abrir o painel

Clique no botão **Skills & Memory** (o ícone de caderno) na parte superior do painel de chat, entre **New Chat** (+) e **Chat History**.

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

Você também pode abri-lo em Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" />: o primeiro cartão dessa página é <BzWenben jian="box.mcp.openSkillsMemory" />.

## Espaço de trabalho e global

O lado esquerdo do painel tem dois grupos:

- <BzWenben jian="common.workspace" />: apenas para o projeto que está aberto. Os arquivos ficam na pasta `.breezell` do projeto, então podem entrar nos commits e ser compartilhados com a sua equipe. Esse grupo fica esmaecido quando nenhuma pasta está aberta.
- <BzWenben jian="common.global" />: para todos os projetos neste computador. Os arquivos ficam em `.breezell`, na sua pasta pessoal.

Escolha o escopo e o tipo à esquerda. O cabeçalho mostra qual deles você está editando, e o caminho na parte inferior mostra o arquivo em que ele fica salvo.

<BzGuize />

O painel salva quando você troca de página, sai de um editor ou fecha o painel. <BzWenben jian="rulesMemories.clear" />, no canto superior direito, esvazia a página atual; clique duas vezes para confirmar.

## Rules

As regras são Markdown simples. Escreva instruções curtas, específicas e que não se contradigam, por exemplo:

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| Escopo | Arquivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning As regras do espaço de trabalho substituem as regras globais
Quando o projeto aberto tem regras do espaço de trabalho, o Breezell envia essas regras e deixa as regras globais de fora. As regras globais só são usadas em projetos sem regras do espaço de trabalho. Se um projeto também precisar de algumas das suas regras globais, copie-as para as regras do espaço de trabalho dele.
:::

Em um espaço de trabalho com várias pastas, as regras de todas as pastas são usadas. O Breezell lê o arquivo salvo, então um rascunho não salvo nunca chega à IA.

## Memories

As memórias são notas curtas e datadas: decisões, preferências, como o projeto está configurado. A própria IA também pode adicionar notas aqui com a ferramenta `update_memory`.

O Breezell trata as memórias como notas, não como regras. Quando uma memória contradiz a sua solicitação mais recente ou o código atual, a IA segue a solicitação e o código e, em vez disso, se oferece para atualizar a memória. Coloque em Rules tudo o que precisa valer sempre.

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. Abra <BzWenben jian="common.workspace" /> ▸ Memories (ou <BzWenben jian="common.global" /> ▸ Memories).
2. Clique em <BzWenben jian="rulesMemories.addMemory" />.
3. Escreva um fato por memória e pressione `Ctrl+Enter` (ou clique em Save).

Cada memória é um cartão com a sua data. Passe o mouse sobre um cartão para excluí-lo. O número ao lado de Memories na lista à esquerda indica quantas memórias existem.

| Escopo | Arquivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

As memórias exigem um plano com Super Memory. Sem ele, a página mostra <BzWenben jian="superMemory.proRequired" />. Para as memórias que a IA coleta por conta própria, consulte [Super Memory](/super-memory).

## Skills

Uma skill é uma pasta com um arquivo `SKILL.md`. O Breezell passa para a IA o nome e a descrição de cada skill ativada; quando uma tarefa corresponde a uma descrição, a IA carrega as instruções completas dessa skill e as segue. Por isso, uma boa descrição diz **quando** usar a skill.

### Criar uma skill

1. Abra <BzWenben jian="common.workspace" /> ▸ Skills (ou <BzWenben jian="common.global" /> ▸ Skills) e clique em <BzWenben jian="skills.newSkill" />.
2. Digite um nome: letras minúsculas e hifens, por exemplo `release-notes`.
3. Digite uma descrição de uma linha sobre a finalidade da skill.
4. Escreva as instruções: etapas, regras e o resultado esperado.
5. Clique em <BzWenben jian="skills.createSkill" />.

<BzGuize fenye="xinjineng" />

| Escopo | Pasta |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

Uma skill pode incluir outros arquivos (referências, scripts) ao lado do `SKILL.md`. A página de detalhes da skill lista esses arquivos, e um clique abre o arquivo.

### Importar skills

Arraste arquivos para a lista de skills: <BzWenben jian="skills.dropZipPrompt" />. Um `.zip` pode conter várias pastas de skills de uma vez; um único `.md` vira uma skill com o nome do arquivo.

### Usar skills em um chat

Clique no botão **Skills** (o ícone de camadas) na linha abaixo da caixa de entrada do chat:

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />: as skills que vêm com o Breezell, como `brainstorming` ou `requesting-code-review`. Elas seguem o interruptor **Superpowers Skills** em <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />.
- <BzWenben jian="skills.myTab" />: as suas skills do espaço de trabalho e globais.
- O interruptor ativa ou desativa uma skill. Uma skill desativada não é oferecida à IA.
- O botão de seta (<BzWenben jian="inputToolbar.referenceSkill" />) adiciona a skill à sua mensagem, para que a IA a use nesta solicitação.

Você também pode digitar `/` na caixa de entrada para abrir o menu de skills.

Ativar ou desativar skills ou servidores MCP altera o início do prompt, o que pode fazer você perder o prompt cache do provedor. Configure o que precisa antes de uma conversa longa, e não no meio dela.

## Mensagem de commit

A página Commit altera a forma como o Breezell escreve mensagens de commit do Git quando você gera uma.

<BzGuize fenye="commit" />

- Uma página vazia usa o prompt de Conventional Commits integrado ao Breezell.
- O texto na página **substitui** completamente o prompt integrado. O Breezell continua fornecendo ao modelo o diff, o branch e os commits recentes, então descreva apenas o estilo: idioma, formato, tamanho.
- O prompt de <BzWenben jian="common.workspace" /> prevalece sobre o de <BzWenben jian="common.global" />.
- <BzWenben jian="rulesMemories.clear" /> restaura o prompt integrado.

| Escopo | Arquivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## Resumo

- Rules: o que a IA precisa fazer sempre. As regras do espaço de trabalho substituem as regras globais.
- Memories: fatos a lembrar, um por cartão.
- Skills: roteiros que a IA carrega quando uma tarefa corresponde à descrição deles; você os ativa ou desativa abaixo da caixa de entrada do chat.
- Commit: o seu estilo de mensagem de commit, que substitui o prompt integrado.
