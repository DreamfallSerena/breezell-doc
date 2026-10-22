---
title: Selección de modo
description: Qué puede leer, cambiar y ejecutar cada modo de Breezell (Chat, Plan, Analyze, Entanglement, Agent, Teams y DarkSelene), cómo funcionan las tarjetas de plan y los cambios de modo, y qué modo elegir.
---

# Selección de modo

El modo decide cómo trabaja la IA en tu siguiente mensaje: qué puede leer, qué puede cambiar y qué puede ejecutar. Elígelo en la cápsula del modo, abajo a la izquierda del campo de entrada. **Agent** es el modo predeterminado y la opción adecuada para la mayor parte del trabajo.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página. Pasa el puntero sobre los modos del menú para leer sus descripciones; puedes hacer clic en los menús y los interruptores de las tarjetas.
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

El menú muestra los nombres de los modos en inglés en todos los idiomas. El modo que elijas se aplica a partir de tu siguiente mensaje; cuando envías un mensaje en otro modo, una línea <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> marca el cambio en la conversación. El menú en sí se describe en [Elegir un modo](/dialog-box-overview#mode).

## Qué puede hacer cada modo {#compare}

| Modo | Lee el proyecto | Cambia archivos | Ejecuta comandos | Herramientas MCP |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | Solo su propio plan | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓ (paso dos, con revisión) | ✓ (paso dos) | paso dos |

La IA puede usar tus skills en todos los modos. En Permisos de herramientas, dentro de [Opciones de funciones](/feature-options-overview), decides si las ediciones de archivos y los comandos necesitan tu aprobación.

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" />.

Usa Chat para preguntas, explicaciones, comparar ideas o redactar textos. La IA responde a partir de la conversación y del contexto que adjuntas; no abre por su cuenta archivos del proyecto ni ejecuta nada. Aun así, puede guardar una memoria cuando le pides que recuerde algo.

<BzLiaotian moshi="normal" wen="¿Cuál es la diferencia entre un debounce y un throttle?" da="Ambos limitan la frecuencia con la que se ejecuta una función. Un debounce espera a que las llamadas se detengan un momento y luego se ejecuta una sola vez; un throttle se ejecuta como máximo una vez por intervalo mientras las llamadas continúan. Usa un debounce para la búsqueda mientras se escribe y un throttle para los eventos de scroll o de cambio de tamaño." />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />. <BzWenben jian="chatMode.planExplain" />.

1. La IA lee el código que necesita, pero no cambia nada.
2. Escribe el plan como una tarjeta en el chat: un título, un breve resumen y una lista de tareas pendientes. El plan es un archivo `.plan.md` que Breezell guarda fuera de tu proyecto.
3. Haz clic en <BzWenben jian="planCard.actions.viewPlan" /> para leer y editar el plan. Pide cambios en el chat y la IA revisa ese mismo plan.
4. Haz clic en <BzWenben jian="planCard.actions.execute" /> (`Ctrl+Enter`) para llevarlo a cabo. Después, la tarjeta muestra <BzWenben jian="planCard.actions.executed" />, y las tareas pendientes se van marcando a medida que avanza el trabajo.

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="Añade un interruptor de modo oscuro a la página de configuración." da="Aquí tienes un plan. Conserva la lógica actual del tema y añade una sola opción de configuración." jihuabiaoti="Interruptor de modo oscuro para la página de configuración" jihuazhaiyao="Añadir un interruptor de modo oscuro a SettingsPage.vue, guardar la elección, aplicarla con una clase de tema en el elemento raíz y seguir la configuración del sistema hasta que el usuario elija un modo." />

<BzWenben jian="planCard.actions.skip" /> descarta el plan. El interruptor <BzWenben jian="planCard.actions.auto" /> de la tarjeta es la misma opción que <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> en Opciones de funciones: cuando está activado, los planes nuevos se ejecutan sin que tengas que hacer clic.

### Cuando Agent sugiere Plan {#plan-switch}

En el modo Agent, la IA puede decidir que una tarea necesita primero un plan. Entonces se detiene y muestra una tarjeta con su motivo:

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="Reescribe la capa de almacenamiento para que pueda sincronizarse con el servidor." da="Esto afecta al formato de almacenamiento, a todo el código que usa esta capa y a la caché sin conexión." qiehuanka="El cambio abarca varios módulos y el formato de los datos; acordar primero un plan evita una reescritura arriesgada." />

- <BzWenben jian="planSwitch.switch" /> (`Ctrl+Enter`) pasa la conversación al modo Plan; <BzWenben jian="planSwitch.skip" /> deja que la IA continúe en el modo Agent.
- El menú de abajo a la izquierda define qué ocurre la próxima vez: <BzWenben jian="planSwitch.alwaysAsk" />, <BzWenben jian="planSwitch.never" /> o <BzWenben jian="planSwitch.alwaysRun" />. Es la misma opción que <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> en Opciones de funciones.
- Con <BzWenben jian="planSwitch.alwaysAsk" />, la barra bajo la tarjeta avanza dos veces, durante 30 segundos cada vez. Si no respondes, se omite el cambio y la IA continúa.

En el modo Plan, la IA puede ofrecerte el cambio inverso con el mismo tipo de tarjeta, para volver al modo del que venías.

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />. <BzWenben jian="chatMode.analyzeExplain" />.

Usa Analyze para encontrar la causa de un error, revisar un diseño o entender código que no conoces antes de decidir qué cambiar. La IA busca y lee hasta que puede responder, y entonces se detiene; puede usar herramientas MCP para obtener información. Si algo necesita una corrección, la describe en su respuesta en lugar de aplicarla.

<BzLiaotian moshi="analyze" wen="¿Por qué el contador de tareas muestra un número incorrecto después de eliminar una tarea?" da="deleteTask() elimina el elemento de una copia del array, pero renderCounters() lee el array tasks original, así que el recuento nunca baja. Solución: haz que deleteTask() actualice el array tasks compartido y llama a renderCounters() después." />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />. <BzWenben jian="chatMode.agentExplain" />.

Agent es el modo predeterminado. Reúne el contexto que necesita, edita archivos, ejecuta comandos y comprueba el resultado antes de informarte. Puede sugerir un [cambio a Plan](#plan-switch) cuando una tarea es grande, y puede usar herramientas MCP, el navegador y tus skills.

En Windows y macOS, cuando el control del escritorio está activado, Agent y Entanglement son los únicos modos que pueden manejar aplicaciones de tu equipo.

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.entanglementDetail" />: <BzWenben jian="chatMode.entanglementExplain" />

Entanglement tiene todas las capacidades de Agent y añade un razonamiento causal explícito y estructurado. La IA lleva el registro de sus hipótesis, usa cada llamada a una herramienta para confirmar o descartar una de ellas, y puede detenerse a validar un paso contigo antes de seguir. Un panel sobre el chat muestra este estado a medida que evoluciona (<BzWenben jian="featureOptions.entanglement.enable" /> en Opciones de funciones).

Úsalo para errores difíciles, decisiones de arquitectura, refactorizaciones o trabajo de rendimiento o de seguridad. Consume más tokens que Agent. Su funcionamiento en detalle se explica en [Modo Entanglement](/entanglement-mode-overview).

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />. <BzWenben jian="chatMode.agentTeamsExplain" />.

- El líder decide si vale la pena formar un equipo. Las solicitudes sencillas se responden directamente.
- En los trabajos grandes, el líder divide la tarea e inicia compañeros que trabajan en paralelo; después recoge y comprueba sus resultados.
- Antes de que un equipo empiece, Breezell te pide que lo apruebes, a menos que <BzWenben jian="featureOptions.toolPermissions.teams" /> esté activado en Opciones de funciones. Los compañeros de diseño y los de corrección de errores pueden funcionar con sus propios modelos (<BzWenben jian="models.teamDesignModel.title" />, <BzWenben jian="models.teamBugfixModel.title" />).
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />. Además, los compañeros que trabajan en paralelo pueden estorbarse entre sí cuando tocan los mismos archivos, así que asígnales partes claramente separadas.

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.darkSeleneDetail" />.

DarkSelene trabaja en dos pasos:

1. **Desarmar la pregunta.** De solo lectura, como Analyze: la IA estudia la solicitud y el código, y redacta un informe breve con lo que hay que hacer y lo que cabe esperar.
2. **Llevarla a cabo bajo revisión.** El informe pasa a Agent. Mientras trabaja, llamadas independientes a modelos revisan cada edición y las lecturas que hace fuera de los archivos previstos, y sus conclusiones le llegan como evidencia. Las ediciones arriesgadas las comprueban tres revisores en paralelo.

Durante el paso dos, la IA no cambia de modo, no escribe tarjetas de plan y no se detiene a hacer preguntas. <BzWenben jian="chatMode.darkSeleneTokenWarning" />

## Modos bloqueados {#locked}

Entanglement y Teams quedan disponibles en cuanto cinco amigos te ayudan a desbloquearlos, o al comprar cualquier plan. Hasta entonces muestran un candado en el menú, y al pasar el puntero sobre ellos ves tu progreso; por ejemplo, <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />. <BzWenben jian="chatMode.entanglementUnlockHint" /> Consulta [Cómo invitar a nuevos usuarios](/invite-new-users).

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Elegir un modo {#choosing}

| Quieres… | Modo |
| --- | --- |
| Hacer una pregunta o pensar algo a fondo | Chat |
| Acordar el enfoque antes de que cambie nada | Plan |
| Entender código o encontrar una causa, sin cambios | Analyze |
| Completar una tarea: editar, ejecutar, verificar | Agent |
| Resolver un problema difícil paso a paso, con evidencias | Entanglement |
| Avanzar a la vez en varias partes independientes de un trabajo grande | Teams |
| Que primero se desarme la solicitud y se revise cada cambio | DarkSelene |

Ante la duda, quédate en Agent: cambia a Plan por sí solo cuando una tarea lo necesita.
