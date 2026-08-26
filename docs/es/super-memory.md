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

## Memorias activas e inactivas

Las memorias activas permanecen disponibles para recuperarse cuando sean pertinentes. Las memorias inactivas se conservan, pero se separan del conjunto activo, lo que mantiene centrado el contexto actual sin perder información que pueda resultar útil más adelante.
