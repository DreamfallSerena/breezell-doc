---
title: Super Memory
description: Descubre cómo Breezell extrae, organiza y administra memorias reutilizables sin consumir los tokens del modelo configurado.
---

# Super Memory

**Super Memory** es un sistema de memoria desarrollado de forma independiente por Breezell. Utiliza dos modelos integrados de Breezell para extraer información útil de las conversaciones. Los nombres exactos de estos modelos no se hacen públicos.

La extracción se realiza mediante la canalización interna de modelos de Breezell y no consume tokens del modelo configurado por el usuario ni reduce su cuota de tokens.

## Qué puede extraer Super Memory

Super Memory puede organizar la información extraída en varios tipos:

- **Memory:** Datos estables, preferencias, instrucciones permanentes y decisiones que pueden resultar útiles más adelante.
- **Skill:** Métodos o flujos de trabajo reutilizables identificados durante una tarea.
- **Experience:** Resultados, aprendizajes y conocimientos prácticos obtenidos de trabajos anteriores.
- **Trajectory:** Evolución de una tarea, decisión u objetivo a lo largo del tiempo.
- **Resource:** Archivos, enlaces, herramientas o material de referencia útil relacionado con el trabajo.

El sistema extrae y clasifica automáticamente estos elementos a partir de las conversaciones para recuperarlos como contexto pertinente en interacciones posteriores.

## Explorar y filtrar memorias

![Panel de Super Memory](/super-memory/super-memory-panel.png)

El panel ofrece las siguientes vistas y controles:

- **Memories, Context e Insights:** Permiten alternar entre las memorias extraídas, el contexto reunido y los análisis generales de la memoria.
- **Búsqueda:** Permite localizar entradas guardadas mediante texto.
- **Prioridad:** Filtra por **P0**, **P1** o **P2**, o muestra todas las prioridades.
- **Tipo:** Filtra por Memory, Skill, Experience, Trajectory o Resource.
- **Estado:** Separa las entradas **Active** de las entradas **Dormant**.
- **Contadores de capacidad:** Muestran el número total de elementos y la capacidad utilizada por las entradas residentes, las memorias, las habilidades y las experiencias.
- **Select:** Activa el modo de selección para administrar entradas concretas.

Si todavía no hay entradas, el panel indica que las memorias se extraerán automáticamente de las conversaciones. A medida que continúe el uso, los elementos útiles podrán aparecer aquí sin que el usuario tenga que escribirlos manualmente.

## Ventajas principales

Super Memory combina la extracción automática con una recuperación eficiente y altamente controlable:

- **Extracción potente:** Dos modelos internos de Breezell analizan las conversaciones y convierten la información útil en entradas estructuradas de Memory, Skill, Experience, Trajectory y Resource, sin necesidad de introducirlas manualmente.
- **Recuperación eficiente:** El tipo, la prioridad, el estado, la antigüedad y el índice de memoria compilado ayudan a limitar la recuperación a la información pertinente para la tarea actual.
- **Inyección de contexto controlable:** La vista Context muestra la instantánea inyectada en el turno actual, la vista previa del índice para el siguiente turno y su tamaño estimado en tokens.
- **Control explícito del ciclo de vida:** Las prioridades P0 permanente, P1 de 30 días y P2 de 7 días se combinan con los estados Active y Dormant para conservar los conocimientos importantes y limitar la duración de la información temporal.
- **Estado del conocimiento observable:** El estado de compilación, las versiones de origen y compilador, los recursos obsoletos, los errores, las verificaciones, las correcciones, la actualidad y los elementos sin sincronizar permiten inspeccionar el sistema.
- **Control de tokens:** La extracción no consume tokens del modelo configurado por el usuario. La memoria recuperada que se inyecta en una solicitud pasa a formar parte de su contexto; la vista previa y las estadísticas de ahorro hacen visible este uso.

## Contexto y control de recuperación

![Vista Context de Super Memory](/super-memory/super-memory-context.png)

La vista **Context** muestra cómo participa la memoria en las conversaciones:

- **Current Turn Injection:** Muestra la instantánea de memoria inyectada en el turno actual. Si todavía no existe, el panel muestra claramente un estado vacío.
- **Memory Index Preview:** Presenta el índice preparado para el siguiente turno y estima su tamaño en tokens.
- **Conversation Turns:** Muestra el número de turnos del hilo actual y permite revisar la actividad de memoria por turno.

Estos controles permiten comprobar si se ha inyectado memoria, qué se está preparando para el siguiente turno y cuál será aproximadamente el coste de contexto.

## Información y estado del sistema

![Vista Insights de Super Memory](/super-memory/super-memory-insights.png)

La vista **Insights** resume el estado y la eficacia del sistema de memoria:

- **Project Knowledge Health:** Muestra la última compilación, las versiones del compilador y de origen, los recursos obsoletos, las compilaciones fallidas y los totales verificados o corregidos.
- **Token Savings:** Muestra el ahorro de tokens cuando existe suficiente actividad registrada.
- **Viking Filesystem:** Presenta los recuentos de Memories, Skills, Experiences, Trajectories, Resources y elementos Unsynced.
- **Priority Distribution:** Muestra la distribución de entradas P0 permanentes, P1 de 30 días y P2 de 7 días.
- **Freshness Pulse:** Agrupa el conocimiento actualizado en las últimas 24 horas, 7 días, 30 días o en un periodo anterior.

Context e Insights permiten ver con claridad qué extrae Super Memory, qué información puede recuperar y si el conocimiento almacenado se mantiene actualizado y en buen estado.

## Memorias activas e inactivas

Las memorias activas permanecen disponibles para recuperarse cuando sean pertinentes. Las memorias inactivas se conservan, pero se separan del conjunto activo, lo que mantiene centrado el contexto actual sin perder información que pueda resultar útil más adelante.
