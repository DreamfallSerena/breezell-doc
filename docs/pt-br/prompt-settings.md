---
title: Configurações de prompt e habilidades
description: Configure regras, memórias, habilidades e o comportamento relacionado da IA no escopo do espaço de trabalho ou global.
---

# Configurações de prompt e habilidades

Esta página reúne as instruções, o conhecimento reutilizável e os fluxos de trabalho que o Breezell pode utilizar.

## Abrir as configurações

A seta destaca o botão **Rules, Memories & Skills** na barra de ferramentas do canto superior direito. Ele fica imediatamente à direita do botão **New Chat** (+).

![Botão de configurações de prompt e habilidades](/prompt-settings/prompt-and-skill-settings-button.png)

Clique no botão para abrir o painel de configurações.

## Escopos de espaço de trabalho e global

A barra lateral divide as configurações em dois escopos:

- **Workspace:** Aplica-se somente ao projeto atual. Os arquivos são armazenados no diretório **.breezell** do projeto para que as configurações permaneçam vinculadas ao espaço de trabalho.
- **Global:** Aplica-se a todos os espaços de trabalho. Use esse escopo para preferências e fluxos que devem estar disponíveis em qualquer projeto.

Primeiro selecione o escopo e, em seguida, **Rules**, **Memories**, **Skills** ou **Commit**. O rótulo ao lado do título confirma o escopo ativo.

## Regras

As regras são instruções personalizadas que o Breezell deve seguir no escopo selecionado. Elas podem definir convenções de código, ferramentas obrigatórias, formatos de resposta, restrições do projeto e outras orientações persistentes.

![Configurações de regras do espaço de trabalho](/prompt-settings/rules-settings.png)

No escopo Workspace, o arquivo é armazenado em **{workspace}/.breezell/rules/breezell.md**. Escreva instruções específicas e sem conflitos. A ação **Clear** remove o conteúdo do escopo de Rules ativo.

## Memórias

As memórias armazenam fatos, preferências, decisões e contexto do projeto para conversas futuras. O número ao lado de **Memories** indica quantas entradas existem no escopo.

![Editor de memória do espaço de trabalho](/prompt-settings/memory-settings.png)

Digite uma memória clara por vez e selecione **Save** ou pressione **Ctrl+Enter**. As memórias do Workspace são armazenadas em **{workspace}/.breezell/memories/workspace_memories.md**. Use memórias globais apenas para informações que devam valer em vários projetos.

## Habilidades

As habilidades são pacotes reutilizáveis de instruções que ensinam o Breezell a executar uma tarefa ou fluxo de trabalho específico. Abra **Skills** no escopo desejado para criá-las ou gerenciá-las.

![Criar uma habilidade no espaço de trabalho](/prompt-settings/skill-creation.png)

Para criar uma habilidade:

1. Informe um nome exclusivo usando apenas letras minúsculas e hifens.
2. Adicione uma breve descrição que explique claramente quando e para que a habilidade deve ser usada.
3. Escreva no editor principal as instruções, as etapas, as restrições e o resultado esperado.
4. Selecione **Create Skill**.

Uma habilidade do Workspace é armazenada em **{workspace}/.breezell/skills/<name>/SKILL.md**. Mantenha cada habilidade focada em uma responsabilidade repetível para que o Breezell possa selecioná-la e aplicá-la com confiabilidade.

## Commit

A seção **Commit** mantém as configurações relacionadas a commits separadas entre os escopos Workspace e Global. Coloque requisitos específicos do projeto em Workspace e preferências reutilizáveis em Global.
