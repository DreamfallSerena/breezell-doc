---
title: Configuración de instrucciones y habilidades
description: Da a Breezell instrucciones permanentes, memorias, skills reutilizables y un estilo de mensajes de commit, por proyecto o para todos los proyectos.
---

# Configuración de instrucciones y habilidades

Breezell reúne en un solo panel, **Rules, Memories & Skills**, cuatro tipos de instrucciones permanentes para la IA:

| | Qué es | Cuándo se usa |
| --- | --- | --- |
| **Rules** | Instrucciones que la IA debe seguir, como convenciones de código o el idioma de sus respuestas | En cada solicitud |
| **Memories** | Notas con fecha: datos y decisiones que se conservan entre conversaciones | Como notas de contexto; tu solicitud más reciente tiene prioridad |
| **Skills** | Guías paso a paso para una tarea concreta, como redactar notas de versión | La IA las carga cuando una tarea encaja |
| **Commit** | Cómo deben ser los mensajes de commit de Git que genera la IA | Cuando generas un mensaje de commit |

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página. La navegación del panel es interactiva. Etiquetas como Rules, Memories, Skills y Commit también están en inglés en Breezell.
:::

## Abrir el panel

Haz clic en el botón **Skills & Memory** (el icono del cuaderno), en la parte superior del panel de chat, entre **New Chat** (+) y **Chat History**.

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

También puedes abrirlo desde Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" />: la primera tarjeta de esa página es <BzWenben jian="box.mcp.openSkillsMemory" />.

## Espacio de trabajo y global

La parte izquierda del panel tiene dos grupos:

- <BzWenben jian="common.workspace" />: solo para el proyecto abierto. Los archivos se guardan en la carpeta `.breezell` del proyecto, así que puedes hacer commit de ellos y compartirlos con tu equipo. Este grupo aparece atenuado cuando no hay ninguna carpeta abierta.
- <BzWenben jian="common.global" />: para todos los proyectos de este dispositivo. Los archivos se guardan en `.breezell`, dentro de tu carpeta de usuario.

Elige a la izquierda el ámbito y el tipo. El encabezado muestra cuál estás editando y la ruta de la parte inferior indica el archivo en el que se guarda.

<BzGuize />

El panel guarda los cambios al cambiar de página, al salir de un editor o al cerrarlo. <BzWenben jian="rulesMemories.clear" />, arriba a la derecha, vacía la página actual; haz clic dos veces para confirmar.

## Reglas

Las reglas se escriben en Markdown normal. Escribe instrucciones breves y concretas que no se contradigan entre sí, por ejemplo:

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| Ámbito | Archivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning Las reglas del espacio de trabajo sustituyen a las globales
Cuando el proyecto abierto tiene reglas del espacio de trabajo, Breezell envía esas y deja fuera las reglas globales. Las reglas globales solo se usan en proyectos sin reglas del espacio de trabajo. Si un proyecto también necesita algunas de tus reglas globales, cópialas en sus reglas del espacio de trabajo.
:::

En un espacio de trabajo con varias carpetas se usan las reglas de todas ellas. Breezell lee el archivo guardado, así que un borrador sin guardar nunca llega a la IA.

## Memorias

Las memorias son notas breves con fecha: decisiones, preferencias, cómo está configurado el proyecto. La IA también puede añadir notas aquí por su cuenta con su herramienta `update_memory`.

Breezell trata las memorias como notas, no como reglas. Cuando una memoria contradice tu solicitud más reciente o el código actual, la IA sigue la solicitud y el código, y en su lugar se ofrece a actualizar la memoria. Lo que deba cumplirse siempre, ponlo en Rules.

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. Abre <BzWenben jian="common.workspace" /> ▸ Memories (o <BzWenben jian="common.global" /> ▸ Memories).
2. Haz clic en <BzWenben jian="rulesMemories.addMemory" />.
3. Escribe un solo dato por memoria y pulsa `Ctrl+Enter` (o haz clic en Save).

Cada memoria es una tarjeta con su fecha. Pasa el puntero sobre una tarjeta para eliminarla. El número junto a Memories en la lista de la izquierda indica cuántas hay.

| Ámbito | Archivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

Las memorias requieren un plan que incluya Super Memory. Sin él, la página muestra <BzWenben jian="superMemory.proRequired" />. Para las memorias que la IA recopila por su cuenta, consulta [Super Memory](/super-memory).

## Skills

Una skill es una carpeta con un archivo `SKILL.md`. Breezell proporciona a la IA el nombre y la descripción de cada skill activada; cuando una tarea coincide con una descripción, la IA carga las instrucciones completas de esa skill y las sigue. Por eso, una buena descripción indica **cuándo** usar la skill.

### Crear una skill

1. Abre <BzWenben jian="common.workspace" /> ▸ Skills (o <BzWenben jian="common.global" /> ▸ Skills) y haz clic en <BzWenben jian="skills.newSkill" />.
2. Escribe un nombre: letras minúsculas y guiones, por ejemplo `release-notes`.
3. Escribe una descripción de una línea que explique para qué sirve la skill.
4. Escribe las instrucciones: pasos, reglas y el resultado esperado.
5. Haz clic en <BzWenben jian="skills.createSkill" />.

<BzGuize fenye="xinjineng" />

| Ámbito | Carpeta |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

Una skill puede incluir más archivos (referencias, scripts) junto a `SKILL.md`. Su página de detalles los muestra, y al hacer clic en uno se abre el archivo.

### Importar skills

Arrastra archivos a la lista de skills: <BzWenben jian="skills.dropZipPrompt" />. Un `.zip` puede contener muchas carpetas de skills a la vez; un único `.md` se convierte en una skill con el nombre del archivo.

### Usar skills en un chat

Haz clic en el botón **Skills** (el icono de capas), en la fila situada bajo el campo de entrada del chat:

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />: las skills que vienen con Breezell, como `brainstorming` o `requesting-code-review`. Dependen del interruptor **Superpowers Skills** de <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />.
- <BzWenben jian="skills.myTab" />: tus skills del espacio de trabajo y globales.
- El interruptor activa o desactiva una skill. Una skill desactivada no se ofrece a la IA.
- El botón de flecha (<BzWenben jian="inputToolbar.referenceSkill" />) añade la skill a tu mensaje para que la IA la use en esta solicitud.

También puedes escribir `/` en el campo de entrada para abrir el menú de skills.

Activar o desactivar skills o servidores MCP cambia el inicio del prompt, lo que puede hacerte perder la caché de prompts del proveedor. Configura lo que necesites antes de una conversación larga, y no a mitad de ella.

## Mensaje de commit

Commit cambia la forma en que Breezell redacta los mensajes de commit de Git cuando generas uno.

<BzGuize fenye="commit" />

- Si la página está vacía, se usa el prompt integrado de Conventional Commits de Breezell.
- El texto de la página **sustituye** por completo el prompt integrado. Breezell sigue proporcionando al modelo el diff, la rama y los commits recientes, así que describe solo el estilo: idioma, formato, longitud.
- El prompt de <BzWenben jian="common.workspace" /> tiene prioridad sobre el de <BzWenben jian="common.global" />.
- <BzWenben jian="rulesMemories.clear" /> restaura el prompt integrado.

| Ámbito | Archivo |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## Resumen

- Rules: lo que la IA debe hacer siempre. Las reglas del espacio de trabajo sustituyen a las globales.
- Memories: datos que recordar, uno por tarjeta.
- Skills: guías que la IA carga cuando una tarea coincide con su descripción; actívalas o desactívalas bajo el campo de entrada del chat.
- Commit: tu estilo de mensajes de commit, que sustituye al prompt integrado.
