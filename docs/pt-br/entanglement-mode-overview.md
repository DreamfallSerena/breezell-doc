---
title: Modo Entanglement
description: Como o modo Entanglement do Breezell investiga problemas difíceis acompanhando hipóteses e evidências, como ler o painel causal e como funcionam as opções de verificação estrita e de humano no circuito.
---

# Modo Entanglement

**Entanglement** é um <BzWenben jian="chatMode.breezellOriginalMode" />: <BzWenben jian="chatMode.entanglementDetail" />. Ele faz tudo o que o Agent faz — ler, editar, executar comandos — e acrescenta um raciocínio causal explícito e estruturado. A IA formula hipóteses, usa cada chamada de ferramenta para confirmar ou descartar uma delas e só altera o código quando a causa está apoiada em evidências.

::: tip Sobre as telas desta página
As telas do Breezell abaixo foram recriadas em HTML a partir do código-fonte do Breezell. Os rótulos do painel causal também aparecem em inglês no próprio Breezell; a investigação mostrada nele é um exemplo. Clique na seta do painel para abrir ou fechar os detalhes.
:::

## Quando usar {#when}

Use o Entanglement quando a causa não é óbvia e uma resposta direta seria um palpite:

- um bug ou uma regressão de causa desconhecida;
- um problema que atravessa vários arquivos, módulos ou sistemas;
- uma decisão entre várias explicações ou designs possíveis;
- trabalhos de desempenho, segurança ou arquitetura em que o resultado precisa ser verificado.

Para edições claras e limitadas, o Agent é mais rápido e usa menos tokens. O Entanglement também usa mais tokens que o Agent para a mesma solicitação.

## Iniciar uma investigação {#start}

1. Escolha **Entanglement** no menu de modos, abaixo da caixa de entrada. Se ele mostrar um cadeado, veja [Modos bloqueados](/mode-selection#locked).
2. Descreva o sintoma, o que você esperava e as restrições que houver (arquivos que não devem ser alterados, testes que precisam passar).
3. Envie. O painel causal aparece acima da conversa e acompanha a investigação.

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="Contador velho" yinguowen="O contador lê um array diferente daquele que deleteTask() altera.|Root cause: deleteTask() filtra uma cópia do array tasks|Predict: depois da correção, a contagem do filtro Active também diminui em um" wen="Depois que eu excluo uma tarefa, o contador continua mostrando o número antigo. Descubra por quê e corrija." da="Estou verificando se deleteTask() altera o mesmo array que renderCounters() lê." />

Na resposta, uma linha **Tracing Causal Pathways** marca cada atualização da investigação; clique nela para ler o raciocínio por trás dela. Quando a investigação termina, a linha passa a mostrar **Causal Trace Complete**.

## Ler o painel causal {#panel}

A linha superior do painel mostra em que ponto a investigação está:

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| Parte | Significado |
| --- | --- |
| **Locate → Verify → Fix** | As etapas: encontrar a causa, comprová-la e então alterar o código. Uma marca de seleção indica uma etapa concluída, e o ponto pulsante, a etapa atual. Se as evidências derrubarem a explicação atual, a primeira etapa fica âmbar e passa a mostrar **Relocate**. |
| Status | **Investigating** enquanto a causa está em aberto; **Modified · unverified** depois de uma alteração que ainda não foi conferida; **Verified** depois de uma verificação bem-sucedida; **Resolved** quando o trabalho está concluído. |
| **Confidence** | Low, Medium ou High, exibido como um medidor de sinal. O nível se baseia nas evidências coletadas até o momento. |

A linha de baixo percorre o estado atual, trocando a cada poucos segundos: a avaliação atual, a hipótese em teste, a descoberta mais recente. Passe o mouse sobre ela para pausá-la.

### Detalhes {#details}

Clique na seta à direita para abrir os detalhes:

<BzJiuchan jieduan="verify" zhankai />

| Seção | Conteúdo |
| --- | --- |
| Completion contract | Qual é a tarefa (**Target**) e quando ela conta como concluída (**Done**). |
| Root cause | A explicação atual, com o **Mechanism** (como a causa leva ao sintoma) e um **Counterfactual** (o que aconteceria sem ela). |
| Hypotheses | Cada hipótese com o seu id e o seu status — testing, confirmed ou rejected. Uma hipótese em testing tem um critério **Kill**: a observação que a descartaria. As rejeitadas guardam a **Lesson** aprendida e ficam listadas em **Resolved**. |
| Evidence | As descobertas mais recentes por turno (t2, t3…), com o peso de cada uma: seta dupla para cima para uma observação direta, seta para cima para um apoio, uma onda para um raciocínio não verificado, setas para baixo para o que vai contra. O selo indica a ferramenta que gerou a descoberta. |
| Open prediction | O que a IA espera ver se a explicação dela estiver certa, aguardando verificação. |
| Fix | A alteração e como ela será verificada (**Verify**). |
| Causal graph | A cadeia que vai da causa até o sintoma. |

Quando a correção está aplicada e verificada, o painel mostra isso:

<BzJiuchan jieduan="resolved" zhankai />

Para ocultar o painel, desative <BzWenben jian="featureOptions.entanglement.enable" /> em Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />. A investigação em si não é afetada.

## Verificação estrita (experimental) {#strict}

Em Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> há uma variante mais rigorosa: **<BzWenben jian="experimental.entanglementStrict.title" />**.

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

Com ela ativada, o painel ganha uma linha **<BzWenben jian="causalGate.title" />**: <BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" />, com o comando usado para reproduzir o bug e o fundamento da confiança.

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

Quando o mesmo comando que falhava antes da correção passa depois dela, a linha mostra <BzWenben jian="causalGate.proven" />. Em <BzWenben jian="experimental.entanglementStrict.model" />, você pode executar o modo estrito em um modelo diferente do usado no chat.

### Humano no circuito {#human-in-the-loop}

Com a verificação estrita ativada, você também pode ativar o **<BzWenben jian="experimental.humanLoop.title" />**: <BzWenben jian="experimental.humanLoop.desc" />

Até você confirmar, a IA apenas lê. Quando a sua próxima mensagem continua a tarefa confirmada ("ainda falha", "continue"), o trabalho segue sem perguntar de novo; uma nova solicitação é conferida com você primeiro.

## Dicas {#tips}

- Descreva o sintoma com precisão: o que você fez, o que viu, o que esperava. Um comando que reproduz o problema é o melhor ponto de partida.
- Deixe a IA terminar a etapa Verify antes de pedir a correção; uma causa confirmada leva a uma alteração menor e mais segura.
- Confira as conclusões do painel e a verificação antes de confiar em uma alteração importante. O painel apoia a sua decisão, mas não substitui a sua revisão.
- Para um problema novo e sem relação com o anterior, comece uma nova conversa, para que a investigação antiga não se misture com a nova.

Veja também: [Seleção de modo](/mode-selection#entanglement) para comparar o Entanglement com os outros modos.
