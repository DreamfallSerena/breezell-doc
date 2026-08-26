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

## Memórias ativas e inativas

As memórias ativas permanecem disponíveis para recuperação quando forem relevantes. As memórias inativas são preservadas, mas ficam separadas do conjunto ativo, mantendo o contexto atual focado sem perder informações que possam ser úteis posteriormente.
