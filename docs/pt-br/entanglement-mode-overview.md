---
title: Visão geral do modo Entanglement
description: Visão técnica do modo Entanglement do Breezell, incluindo rastreamento de estado causal, restrições de validação, visualização e memória convergente.
---

# Visão geral do modo Entanglement

> Entanglement é um modo de aprimoramento do raciocínio causal para problemas complexos.

## Resumo

O modo Entanglement do Breezell não é um algoritmo quântico nem um modo de colaboração que inicia vários modelos automaticamente.
Sua implementação combina os recursos do Agent, uma máquina de estados causais, restrições de previsão/intervenção/verificação, um painel de visualização e memória convergente.
Ele não torna repentinamente o modelo subjacente mais inteligente. Em vez disso, preserva e reinjeta continuamente as hipóteses, evidências, experimentos e conclusões envolvidos em tarefas complexas.

## 1. Conclusões principais

Entanglement não é um substituto completo do Agent. É um aprimoramento com estado para problemas complexos.

- **Capacidades das ferramentas:** Entanglement herda os recursos de arquivos, terminal, busca, MCP e índice de código do Agent.
- **Organização do raciocínio:** Entanglement também mantém etapas, causas-raiz, hipóteses, evidências, previsões, verificações e confiança.
- **Eficiência de execução:** O Agent padrão costuma ser mais rápido em tarefas bem definidas; Entanglement adiciona sobrecarga de contexto e tokens.
- **Melhor aplicação:** Entanglement é mais adequado para bugs desconhecidos, falhas entre módulos e problemas que exigem validação experimental.
- **Limite de capacidade:** Não existe um modelo Entanglement separado, um módulo de computação quântica ou um caminho padrão para execução paralela entre vários modelos.

## 2. Como funciona

### 1. Seleção do modo

A lista de modos do frontend inclui `normal`, `plan`, `analyze`, `entanglement`, `agent` e `agent_teams`.
Depois que Entanglement é selecionado, os turnos seguintes da conversa ativam o rastreamento do estado causal.

### 2. Herança dos recursos do Agent

A resolução de modo do backend mapeia `entanglement` para o tipo Agent, portanto ele continua podendo chamar ferramentas de arquivos, terminal, busca, MCP e índice de código.
Isso também o diferencia dos modos somente de análise: Entanglement ainda pode modificar o projeto e executar verificações.

### 3. Injeção do estado causal atual

Cada solicitação carrega o estado causal atual da thread e usa o contexto de arquivos ativos, workspace e ferramentas no nível do Agent.

### 4. O mesmo ciclo de modelo e ferramentas

Entanglement e Agent usam os mesmos recursos de modelo e execução de ferramentas.
Portanto, ele não é o mesmo que Agent Teams e não cria várias IAs independentes por padrão. Subtarefas ou chamadas adicionais de ferramentas só podem aparecer quando o modelo usa ativamente as ferramentas relevantes.

### 5. Análise da resposta do modelo

Depois que o modelo responde, o sistema analisa a etapa, a causa-raiz, as hipóteses, as evidências, as previsões e os resultados de verificação, e então os salva na thread atual.
O turno seguinte continua usando esse estado; a interface exibe o bloco de estado estruturado como “Causal Trace Complete”.

### 6. Visualização e análise em tempo real

O componente `G1` do painel Entanglement exibe a etapa atual, a confiança, a causa-raiz, as hipóteses, as evidências, o grafo causal, a correção, a verificação e as correções do sistema.
Durante a saída em streaming do modelo, o frontend analisa novamente o estado com base no crescimento do texto ou em intervalos de tempo. Durante fases de saída que não são de LLM, ele limpa os resultados temporários da análise.

### 7. Memória após a convergência

Quando o estado alcança uma etapa `CONVERGE` com alta confiança e existe uma causa-raiz clara, o sistema organiza o problema em um nó do Memory Bank com a tag `causal-case`.
A memória inclui sintomas, causa-raiz, mecanismo, evidências decisivas, correção, grafo causal, hipóteses rejeitadas e resultados de verificação.

### Fluxo de dados

```text
Selecionar Entanglement no menu de modos
        ↓
Definir chatMode global = "entanglement"
        ↓
Ler o causalState da thread atual
        ↓
Injetar o contexto causal mantendo o ciclo padrão de LLM/ferramentas
        ↓
Analisar a etapa, as hipóteses, as evidências e os resultados de verificação retornados pelo modelo
        ↓
Gravar o estado na thread e atualizar o painel
        ↓
Gravar uma memória causal após a convergência com alta confiança
```

## 3. Máquina de estados causais

### 1. Etapas

| Etapa | Significado |
| --- | --- |
| `OBSERVE` | Coletar fenômenos e evidências enquanto a causa-raiz ainda não está clara. |
| `INTERVENE` | Propor uma ação que precisa de uma ferramenta ou experimento para ser validada. |
| `CONVERGE` | Fechar gradualmente o ciclo entre causa-raiz, correção e verificação. |
| `BACKTRACK` | A hipótese atual foi rejeitada e o raciocínio precisa voltar a um ponto anterior. |

### 2. Campos de estado

O estado principal da thread inclui `phase`, `rootCause`, `mechanism`, `confidence`, `hypotheses`, `evidenceLog`, `evidenceSummary`, `causalGraph`, `causalGraphEdges`, `counterfactual`, `fix`, `verify`, `pendingPrediction`, `turnCount`, `stuckTurns` e `corrections`.

### 3. Gerenciamento de hipóteses

As hipóteses usam identificadores como `H1` e `H2` e registram o status `testing`, `confirmed` ou `rejected`.
Também são armazenados o Kill Criterion, a Lesson, o turno de criação e o turno tocado mais recentemente, para impedir que um raciocínio já rejeitado seja adotado novamente.

### 4. Evidências e grafos causais

As evidências aceitam cinco níveis: `++`, `+`, `~`, `-` e `--`. A ferramenta de origem da evidência também pode ser registrada.
O analisador mantém as 20 evidências detalhadas mais recentes e compacta o conteúdo anterior em um resumo. As arestas causais aceitam `A -> B`, `A -x B` e pesos opcionais, e são deduplicadas.
Esses níveis de evidência e arestas causais são registros estruturados do conteúdo proposto pelo modelo, não conclusões calculadas automaticamente por um mecanismo estatístico independente.

### 5. Limites de confiança

O sistema aplica um limite heurístico à confiança `HIGH`:

- Deve existir uma causa-raiz clara; ela não pode continuar como `UNKNOWN`.
- São necessárias pelo menos duas evidências positivas classificadas como `+` ou `++`.
- Se a etapa `CONVERGE` não atingir o limite de alta confiança, ela será rebaixada para `INTERVENE`.

As mudanças de confiança são mantidas no histórico. Se a confiança não aumentar durante vários turnos, `stuckTurns` aumentará e o painel exibirá um estado travado.

## 4. O ciclo de previsão, intervenção e verificação

Quando o modelo propõe uma `Intervention` e uma previsão, o sistema salva `pendingPrediction`.
Depois que a ferramenta é executada, o modelo precisa fornecer um resultado de verificação. A previsão pendente só é encerrada depois que um `Verdict` é analisado.

O sistema também verifica se o compromisso declarado corresponde à chamada real da ferramenta:

- Se o modelo disser que fará uma intervenção, mas não chamar uma ferramenta, o sistema registrará `no_tool_recovery` e solicitará uma nova execução.
- Se o modelo disser que chamará a ferramenta A, mas chamar a ferramenta B, o sistema registrará `wrong_tool_recovery` e solicitará realinhamento.
- A recuperação causal tem um orçamento limitado de novas tentativas; a implementação atual usa um orçamento de 3.

Isso significa que Entanglement faz mais do que pedir ao modelo que escreva uma análise: ele exige que a transforme em ações de ferramentas verificáveis.

## 5. Em que é mais forte que Agent

### 1. Melhor para causas-raiz desconhecidas

O Agent pode adivinhar uma causa e começar a editar imediatamente. Entanglement mantém a causa como hipótese e exige uma explicação de como ela poderia ser refutada.

### 2. Melhor para investigação em vários turnos

A etapa atual, as evidências, as hipóteses rejeitadas e as previsões pendentes entram no contexto do próximo turno, reduzindo a chance de perder o progresso da investigação à medida que a conversa cresce.

### 3. Melhor para encontrar direções erradas

`BACKTRACK`, `rejected`, Kill Criterion e Lesson trabalham juntos para fornecer um caminho de recuperação.

### 4. Mais fácil de supervisionar manualmente

O painel resume o estado de trabalho do modelo em etapas, confiança, causa-raiz, evidências e registros de correção, permitindo que os usuários percebam quando o modelo está andando em círculos.

### 5. Capaz de preservar casos bem-sucedidos

Após uma convergência com alta confiança, o sistema grava uma memória `causal-case` que, teoricamente, pode ser recuperada como experiência para problemas semelhantes.

## 6. Em que não é necessariamente mais forte que Agent

### 1. Mais lento para tarefas bem definidas

A análise de estados, os resumos causais e o protocolo de verificação acrescentam uma sobrecarga de processo desnecessária para alterações simples.

### 2. Maior consumo de tokens

Cada turno carrega contexto adicional do modo, estado causal, histórico de evidências e resumos padronizados.

### 3. Ainda depende de informações declaradas pelo modelo

O modelo propõe principalmente a causa-raiz, os níveis de evidência e o grafo causal. O sistema apenas os analisa, armazena, exibe e corrige de forma limitada.

### 4. Pode ocorrer classificação incorreta do protocolo

Se o modelo não produzir campos causais reconhecíveis, o sistema poderá reutilizar o estado antigo, reduzir a confiança, aumentar os turnos travados ou acionar uma recuperação.

### 5. Não é uma prova formal

`HIGH` é apenas um julgamento heurístico baseado em uma causa-raiz clara e pelo menos duas evidências positivas. Não equivale a uma prova matemática nem a uma validação causal real.

## 7. Escolha entre os modos

| Tipo de tarefa | Modo recomendado | Motivo |
| --- | --- | --- |
| Pequenas alterações claras, atualizações de estilo ou campos simples de interface | Agent | Seus recursos de ferramentas são suficientes e o fluxo é mais curto. |
| Bugs desconhecidos, regressões ou falhas entre módulos | Entanglement | Exigem um ciclo fechado de hipóteses, evidências, intervenção e verificação. |
| Analisar uma solução sem executar alterações ainda | Plan ou Analyze | Reduz a modificação e a execução diretas. |
| Processar vários módulos independentes em paralelo | Agent Teams | É o modo específico de colaboração entre várias IAs. |

## 8. Avaliação final

Se “poderoso” significa permissões de ferramentas, Entanglement é, em geral, tão capaz quanto Agent. Se significa organização do raciocínio, continuidade do estado e verificação para problemas complexos, Entanglement é mais forte.
Se significa velocidade, eficiência de tokens e execução direta para tarefas simples, o Agent padrão é mais adequado.
A descrição mais precisa é:

> **Entanglement = Agent + rastreamento do estado causal + restrições de previsão/intervenção/verificação + visualização + memória convergente.**

Ele não é um substituto completo do Agent, mas um modo aprimorado projetado para depuração complexa e problemas incertos.

## 9. Observação importante

“Causal Trace Complete” na interface significa que o bloco de estado estruturado foi analisado. Isso não significa que a causa-raiz tenha sido provada de forma independente.
