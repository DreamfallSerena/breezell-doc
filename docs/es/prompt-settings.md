---
title: Configuración de instrucciones y habilidades
description: Configura reglas, memorias, habilidades y el comportamiento relacionado de la IA para un espacio de trabajo o de forma global.
---

# Configuración de instrucciones y habilidades

Esta página reúne las instrucciones, el conocimiento reutilizable y los flujos de trabajo que puede utilizar Breezell.

## Abrir la configuración

La flecha resalta el botón **Rules, Memories & Skills** de la barra de herramientas situada en la esquina superior derecha. Está inmediatamente a la derecha del botón **New Chat** (+).

![Botón de configuración de instrucciones y habilidades resaltado](/prompt-settings/prompt-and-skill-settings-button.png)

Haz clic en el botón para abrir el panel de configuración.

## Ámbitos de espacio de trabajo y global

La barra lateral divide la configuración en dos ámbitos:

- **Workspace:** Se aplica únicamente al proyecto actual. Los archivos se guardan en el directorio **.breezell** del proyecto para que la configuración permanezca vinculada al espacio de trabajo.
- **Global:** Se aplica a todos los espacios de trabajo. Úsalo para preferencias y flujos de trabajo que deban estar disponibles en cualquier proyecto.

Selecciona primero el ámbito y después **Rules**, **Memories**, **Skills** o **Commit**. La etiqueta junto al título confirma el ámbito activo.

## Reglas

Las reglas son instrucciones personalizadas que Breezell debe seguir en el ámbito seleccionado. Pueden definir convenciones de código, herramientas obligatorias, formatos de respuesta, restricciones del proyecto u otras indicaciones persistentes.

![Configuración de reglas del espacio de trabajo](/prompt-settings/rules-settings.png)

En el ámbito Workspace, el archivo se guarda en **{workspace}/.breezell/rules/breezell.md**. Escribe instrucciones concretas y sin contradicciones. La acción **Clear** elimina el contenido del ámbito de reglas activo.

## Memorias

Las memorias conservan datos, preferencias, decisiones y contexto del proyecto para conversaciones posteriores. El número junto a **Memories** indica cuántas entradas existen en ese ámbito.

![Editor de memoria del espacio de trabajo](/prompt-settings/memory-settings.png)

Escribe una memoria clara cada vez y selecciona **Save** o pulsa **Ctrl+Enter**. Las memorias del espacio de trabajo se guardan en **{workspace}/.breezell/memories/workspace_memories.md**. Utiliza las memorias globales únicamente para información aplicable a varios proyectos.

## Habilidades

Las habilidades son paquetes de instrucciones reutilizables que enseñan a Breezell a realizar una tarea o flujo de trabajo específico. Abre **Skills** en el ámbito deseado para crearlas o administrarlas.

![Crear una habilidad para el espacio de trabajo](/prompt-settings/skill-creation.png)

Para crear una habilidad:

1. Introduce un nombre único formado únicamente por letras minúsculas y guiones.
2. Añade una descripción breve que explique con claridad cuándo y para qué debe utilizarse.
3. Escribe en el editor principal las instrucciones, los pasos, las restricciones y el resultado esperado.
4. Selecciona **Create Skill**.

Una habilidad del espacio de trabajo se guarda en `{workspace}/.breezell/skills/<name>/SKILL.md`. Limita cada habilidad a una responsabilidad repetible para que Breezell pueda seleccionarla y aplicarla de forma fiable.

## Mensajes de commit

**Commit** permite personalizar la instrucción que utiliza Breezell para generar mensajes de commit de Git.

![Configuración de mensajes de commit del espacio de trabajo](/prompt-settings/commit-message-settings.png)

- **Instrucción personalizada:** Cuando el editor contiene texto, sustituye por completo la instrucción integrada de Conventional Commits de Breezell.
- **Prioridad de ámbitos:** La instrucción de Workspace tiene prioridad sobre la de Global. Utiliza Workspace para las convenciones específicas del repositorio y Global para los valores predeterminados compartidos entre proyectos.
- **Contexto automático:** Breezell sigue proporcionando al modelo el diff actual, la rama y los commits recientes. La instrucción personalizada solo necesita definir el estilo, el idioma, el formato y las restricciones.
- **Restaurar el valor predeterminado:** Selecciona **Clear** para eliminar el contenido personalizado y recuperar la instrucción integrada.

La instrucción de commit de Workspace se guarda en **{workspace}/.breezell/rules/commit_prompt.md**.
