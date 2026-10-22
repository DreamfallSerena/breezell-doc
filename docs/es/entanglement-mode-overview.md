---
title: Modo Entanglement
description: Cómo investiga el modo Entanglement de Breezell los problemas difíciles con hipótesis y evidencias registradas, cómo leer su panel causal y cómo funcionan sus opciones de verificación estricta y de humano en el bucle.
---

# Modo Entanglement

**Entanglement** es un <BzWenben jian="chatMode.breezellOriginalMode" />: <BzWenben jian="chatMode.entanglementDetail" />. Puede hacer todo lo que hace Agent (leer, editar, ejecutar comandos) y añade un razonamiento causal explícito y estructurado. La IA formula hipótesis, usa cada llamada a una herramienta para confirmar o descartar una de ellas y solo cambia el código cuando las evidencias respaldan la causa.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. En Breezell, las etiquetas del panel causal también aparecen en inglés; la investigación que se muestra en él es un ejemplo. Haz clic en la flecha del panel para abrir o cerrar sus detalles.
:::

## Cuándo usarlo {#when}

Usa Entanglement cuando la causa no es evidente y una respuesta directa sería una suposición:

- un error o una regresión de causa desconocida;
- un problema que abarca varios archivos, módulos o sistemas;
- una decisión entre varias explicaciones o diseños posibles;
- trabajo de rendimiento, seguridad o arquitectura cuyo resultado debe verificarse.

Para ediciones claras y acotadas, Agent es más rápido y usa menos tokens. Además, Entanglement consume más tokens que Agent para la misma solicitud.

## Iniciar una investigación {#start}

1. Elige **Entanglement** en el menú de modos, bajo el campo de entrada. Si muestra un candado, consulta [Modos bloqueados](/mode-selection#locked).
2. Describe el síntoma, lo que esperabas y cualquier límite (archivos que no se deben tocar, pruebas que deben pasar).
3. Envía el mensaje. El panel causal aparece sobre la conversación y sigue la investigación.

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="Cifra obsoleta" yinguowen="El contador lee un array distinto del que cambia deleteTask().|Root cause: deleteTask() filtra una copia del array de tareas|Predict: tras la corrección, el recuento del filtro Active también baja en uno" wen="Después de eliminar una tarea, el contador sigue mostrando el número anterior. Averigua por qué y corrígelo." da="Estoy comprobando si deleteTask() cambia el mismo array que lee renderCounters()." />

En la respuesta, una línea **Tracing Causal Pathways** marca cada actualización de la investigación; haz clic en ella para leer el razonamiento que hay detrás. Cuando la investigación termina, la línea muestra **Causal Trace Complete**.

## Leer el panel causal {#panel}

La fila superior del panel muestra en qué punto está la investigación:

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| Parte | Significado |
| --- | --- |
| **Locate → Verify → Fix** | Las etapas: encontrar la causa, demostrarla y después cambiar el código. Una marca de verificación señala una etapa terminada, y el punto que late, la etapa actual. Si las evidencias desmienten la explicación actual, la primera etapa se vuelve ámbar y muestra **Relocate**. |
| Estado | **Investigating** mientras la causa sigue abierta; **Modified · unverified** tras un cambio que aún no se ha comprobado; **Verified** tras una comprobación correcta; **Resolved** cuando el trabajo está terminado. |
| **Confidence** | Low, Medium o High, con un medidor de señal. Se basa en las evidencias reunidas hasta el momento. |

La línea de debajo va mostrando el estado actual cada pocos segundos: la valoración actual, la hipótesis que se está probando y el hallazgo más reciente. Pasa el puntero sobre ella para pausarla.

### Detalles {#details}

Haz clic en la flecha de la derecha para abrir los detalles:

<BzJiuchan jieduan="verify" zhankai />

| Sección | Contenido |
| --- | --- |
| Completion contract | En qué consiste la tarea (**Target**) y cuándo se considera terminada (**Done**). |
| Root cause | La explicación actual, con el **Mechanism** (cómo la causa produce el síntoma) y un **Counterfactual** (qué pasaría sin ella). |
| Hypotheses | Cada hipótesis con su id y su estado: testing, confirmed o rejected. Una hipótesis en testing tiene un criterio **Kill**: la observación que la descartaría. Las rechazadas conservan la **Lesson** aprendida y aparecen en **Resolved**. |
| Evidence | Los hallazgos más recientes por turno (t2, t3…), con su peso: doble flecha hacia arriba para una observación directa, flecha hacia arriba para un indicio a favor, una onda para un razonamiento sin verificar y flechas hacia abajo para lo que va en contra. La etiqueta indica la herramienta que produjo cada hallazgo. |
| Open prediction | Lo que la IA espera ver si su explicación es correcta, pendiente de comprobación. |
| Fix | El cambio y cómo se verificará (**Verify**). |
| Causal graph | La cadena que va de la causa al síntoma. |

Cuando la corrección está aplicada y verificada, el panel lo muestra:

<BzJiuchan jieduan="resolved" zhankai />

Para ocultar el panel, desactiva <BzWenben jian="featureOptions.entanglement.enable" /> en Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />. La investigación en sí no se ve afectada.

## Verificación estricta (experimental) {#strict}

En Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" /> hay una variante más estricta: **<BzWenben jian="experimental.entanglementStrict.title" />**.

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

Con ella activada, el panel muestra una fila **<BzWenben jian="causalGate.title" />**: <BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" />, con el comando usado para reproducir el error y la base de la confianza.

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

Cuando el mismo comando que fallaba antes de la corrección pasa después de ella, la fila muestra <BzWenben jian="causalGate.proven" />. En <BzWenben jian="experimental.entanglementStrict.model" /> puedes ejecutar el modo estricto con un modelo distinto del que usa el chat.

### Humano en el bucle {#human-in-the-loop}

Una vez activada la verificación estricta, también puedes activar **<BzWenben jian="experimental.humanLoop.title" />**: <BzWenben jian="experimental.humanLoop.desc" />

Hasta que confirmes, la IA solo lee. Cuando tu siguiente mensaje continúa la tarea confirmada («sigue fallando», «continúa»), el trabajo sigue sin volver a preguntarte; una solicitud nueva se comprueba primero contigo.

## Consejos {#tips}

- Describe el síntoma con precisión: qué hiciste, qué viste y qué esperabas. Un comando que reproduzca el problema es el mejor punto de partida.
- Deja que la IA termine la etapa Verify antes de pedir la corrección; una causa confirmada lleva a un cambio más pequeño y más seguro.
- Revisa las conclusiones del panel y la verificación antes de confiar en un cambio importante. El panel apoya tu decisión; no sustituye tu revisión.
- Para un problema nuevo y sin relación, inicia una conversación nueva, para que la investigación anterior no se mezcle con la nueva.

Consulta también [Selección de modo](/mode-selection#entanglement) para ver en qué se diferencia Entanglement de los demás modos.
