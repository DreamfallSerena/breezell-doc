---
title: Resumen del cuadro de diálogo
description: Un recorrido completo por el panel de chat de Breezell, con la escritura y el envío de mensajes, los modos, los modelos, los menús @ y /, los botones de la bandeja, el uso y la compresión del contexto, los mensajes en cola y la reversión.
---

# Resumen del cuadro de diálogo

El panel de chat del lado **Agent** de Breezell es donde hablas con la IA: escribes la solicitud, eliges cómo trabaja la IA y qué modelo usa, adjuntas contexto y sigues su progreso. Esta página recorre cada una de sus partes.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página. Algunas reaccionan como el panel real: pasa el puntero sobre el menú de modos, la lista de Context o un mensaje enviado, y haz clic en los interruptores y en las estrellas.
:::

## Las partes del panel de chat

<BzLiaotian biaotilan quanbiao wen="Añade un interruptor de modo oscuro a la página de configuración." da="Añadiré a SettingsPage.vue un interruptor que cambie la clase del tema en la página y recuerde la elección. Primero voy a ver cómo se guarda la configuración." />

| | Parte | Qué hace |
| --- | --- | --- |
| 1 | Botones del encabezado | **New Chat** (+), **Skills & Memory** (cuaderno) y **Chat History** (reloj). Skills & Memory abre el panel [Rules, Memories & Skills](/prompt-settings). |
| 2 | Campo de entrada | Donde escribes. Muestra <BzWenben jian="chat.input.placeholder" /> mientras está vacío. |
| 3 | Modo | Cómo trabaja la IA en este mensaje: solo chat, plan, análisis de solo lectura, edición de archivos y más. Consulta [Elegir un modo](#mode). |
| 4 | Modelo | El modelo que responde, seguido de su ventana de contexto y su esfuerzo de razonamiento; por ejemplo, `200K Medium`. Consulta [Elegir un modelo](#model). |
| 5 | Anillo de contexto | Cuánto se ha llenado la ventana de contexto. Haz clic en él para ver los detalles y para la compresión manual. Consulta [Uso del contexto](#context). |
| 6 | **@** | Añade al mensaje archivos, carpetas o chats anteriores. Consulta [Añadir contexto con @](#mention). |
| 7 | Enviar | Envía el mensaje. Mientras la IA responde, se convierte en un botón de detener. |
| 8 | Bandeja | La fila de botones bajo el campo de entrada: Breezell Browser, adjuntar, Frases rápidas, Optimizar el prompt, MCP y Skills. Consulta [La bandeja](#tray). |

## Escribir y enviar un mensaje {#send}

1. Haz clic en el campo de entrada y escribe tu solicitud. Di qué quieres y dónde; por ejemplo, el archivo o la página.
2. Pulsa `Enter` para enviar. `Shift+Enter`, en cambio, empieza una línea nueva.

En cuanto hay texto, el botón de enviar pasa de gris a blanco:

<BzLiaotian shuru="Añade un interruptor de modo oscuro a la página de configuración." />

Para añadir una imagen, pégala en el campo de entrada o arrástrala hasta él. Para añadir otros archivos, usa el clip de la bandeja. En el editor, selecciona código y pulsa `Ctrl+L` (`Cmd+L` en macOS) para añadir la selección al chat.

### Mientras la IA responde

El botón de enviar se convierte en un botón blanco de detener con un cuadrado. Haz clic en él para detener la respuesta.

Mientras tanto, puedes seguir escribiendo. Los mensajes que envías mientras se genera una respuesta no se pierden: esperan encima del campo de entrada, bajo <BzWenben jian="chat.queue.queued" canshu="2" />, y se envían uno tras otro cuando la IA queda libre.

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="Actualiza también el README|Luego ejecuta las pruebas" wen="Añade un interruptor de modo oscuro a la página de configuración." da="Añadiré a SettingsPage.vue un interruptor que cambie la clase del tema en la página." />

Cada mensaje en cola tiene estos botones: <BzWenben jian="chat.queue.moveUp" /> y <BzWenben jian="chat.queue.moveDown" /> (cuando hay más de uno), <BzWenben jian="common.edit" /> (lo devuelve al campo de entrada), <BzWenben jian="chat.queue.sendNow" /> (detiene la respuesta actual y envía este) y <BzWenben jian="common.delete" />. También puedes arrastrarlos para cambiar el orden. Si un mensaje en cola no se puede enviar, el motivo aparece debajo; por ejemplo, <BzWenben jian="chat.queue.notSent.turnError" />

## Elegir un modo {#mode}

Haz clic en la cápsula del modo, abajo a la izquierda del campo de entrada. Pasa el puntero sobre un modo para leer lo que hace:

<BzLiaotian tanchu="moshi" moshi="agent" />

| Modo | En resumen |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent es el modo predeterminado y sirve para la mayoría de las tareas. El modo que elijas se aplica a partir de tu siguiente mensaje; cuando envías un mensaje en otro modo, una línea <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> marca el cambio en la conversación.

Entanglement y Teams están bloqueados hasta que cinco amigos te ayuden a desbloquearlos o hasta que compres cualquier plan. Un modo bloqueado muestra un candado en el menú, y su descripción indica tu progreso:

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Elegir un modelo {#model}

Haz clic en el nombre del modelo, junto al modo. El selector de modelos tiene un cuadro de búsqueda, los orígenes de los modelos y la configuración de cada modelo (ventana de contexto, esfuerzo de razonamiento, Fast). Se describe paso a paso en [API personalizada (BYOK)](/custom-api#use-claude-in-chat).

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

El texto que sigue al nombre del modelo es un breve resumen de esa configuración: `200K Medium` significa una ventana de contexto de 200K y un esfuerzo de razonamiento medio; `1M High Fast` significa la ventana de 1M, esfuerzo alto y Fast. Consulta [Context, Reasoning y Fast](/custom-api#context-reasoning-and-fast).

## Añadir contexto con @ {#mention}

Escribe `@` en el campo de entrada o haz clic en el botón **@**. El menú se abre justo encima del campo de entrada:

<BzLiaotian tanchu="tiji" shuru="@" />

| Opción | Añade |
| --- | --- |
| files | Un archivo del espacio de trabajo. |
| folders | Una carpeta completa. |
| chats | Una conversación anterior. La IA recibe una referencia a su transcripción y la lee cuando la necesita, así que puedes incluir varios chats sin llenar el contexto. |

No hace falta abrir antes una categoría: escribe justo después de `@` y Breezell busca en archivos y carpetas a la vez. Los archivos abiertos aparecen primero, marcados como `Recent`. Usa las teclas de flecha y `Enter`, o haz clic.

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

Dentro de files y folders, un chip en el encabezado del menú alterna entre <BzWenben jian="inputToolbar.filterOn" /> y <BzWenben jian="inputToolbar.filterOff" />: <BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />. Si no hay coincidencias, Breezell ofrece los archivos con cambios sin confirmar, marcados como `Changed`.

Cada elemento que eliges se convierte en una etiqueta dentro de tu mensaje, así la IA sabe exactamente a qué archivo, carpeta o chat te refieres.

## Skills y frases rápidas con / {#slash}

Escribe `/` al principio del campo de entrada para ver tus [frases rápidas](#quick-phrases) y tus skills en una sola lista:

<BzLiaotian tanchu="xiegang" shuru="/" />

- Al elegir una frase rápida, se hace lo que esa frase tenga configurado: insertar su texto, enviarlo o ejecutarlo en el terminal.
- Al elegir una skill, se añade al mensaje, así que la IA usa esa skill para esta solicitud.
- Las skills desactivadas aparecen atenuadas, con un interruptor en la fila; activa una aquí mismo para usarla.

## La bandeja bajo el campo de entrada {#tray}

La bandeja de borde discontinuo que hay bajo el campo de entrada contiene seis botones. Pasa el puntero sobre un botón para ver su nombre.

| Botón | Qué hace |
| --- | --- |
| Breezell Browser (globo terráqueo) | Abre el panel del navegador integrado de Breezell. |
| <BzWenben jian="inputToolbar.attach" /> (clip) | Adjunta al mensaje archivos de tu equipo. |
| <BzWenben jian="inputToolbar.quickPhrases" /> | Tus frases y comandos guardados. |
| <BzWenben jian="inputToolbar.optimizePrompt" /> (varita) | Reescribe lo que has escrito como un prompt más claro. |
| MCP | Activa o desactiva servidores MCP. |
| <BzWenben jian="inputToolbar.skills" /> (capas) | Activa o desactiva skills. |

Un pequeño punto verde en MCP o en Skills indica que hay al menos uno activado. Cuando el panel de chat es estrecho, Breezell Browser pasa a un menú **⋯** (<BzWenben jian="inputToolbar.more" />). Cuando has referenciado una conversación desde Chat History, aparece en la bandeja un botón azul <BzWenben jian="inputToolbar.referenced" />; haz clic en él para quitar la referencia.

### Breezell Browser {#browser}

Breezell Browser es el navegador integrado en Breezell. Las páginas se abren en pestañas del editor, justo al lado de tu código.

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- Mientras no hay ningún navegador abierto, el panel muestra <BzWenben jian="browserPanel.readyToLaunch" />. Haz clic en <BzWenben jian="browserPanel.open" />, o escribe un enlace o unas palabras de búsqueda en el campo (<BzWenben jian="browserPanel.searchPlaceholder" />) y pulsa `Enter`.
- Cuando hay páginas abiertas, el panel las muestra como pestañas: haz clic en una para cambiar a ella y usa los botones de su fila para silenciarla o cerrarla. El botón del encabezado silencia todas las pestañas.

Las herramientas de navegador propias de la IA se ejecutan fuera de la pantalla de forma predeterminada. Para verlas trabajar, desactiva <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> en [Opciones de funciones](/feature-options-overview).

### Frases rápidas {#quick-phrases}

Las frases rápidas son textos y comandos que usas a menudo. El botón abre tus favoritas; haz clic en una para usarla.

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

Haz clic en <BzWenben jian="quickPhrases.manage" /> para abrir el gestor. A la izquierda aparecen todas las frases y a la derecha tus favoritas, que son las que muestra el botón.

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- Haz clic en la estrella de una frase, o selecciónala y haz clic en la flecha del centro, para añadirla a <BzWenben jian="quickPhrases.favorites" />. También puedes arrastrarla a la derecha. La **×** de una favorita solo la quita de las favoritas.
- El lápiz de una favorita sirve para editarla; la papelera de la izquierda elimina la frase.
- <BzWenben jian="common.add" />, en la parte superior, abre el editor para crear una frase nueva:

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

Cada frase tiene un nombre, un contenido y un tipo de acción:

| Tipo | Al elegir la frase |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | El contenido se coloca en el campo de entrada, así que todavía puedes editarlo antes de enviarlo. |
| <BzWenben jian="quickPhrases.send" /> | El contenido se envía como mensaje al instante. |
| <BzWenben jian="quickPhrases.terminal" /> | El contenido se ejecuta como comando en un terminal. Un <BzWenben jian="quickPhrases.workingDirectory" /> opcional indica la carpeta en la que se ejecuta. |

Las frases rápidas también aparecen en el [menú `/`](#slash).

### Optimizar el prompt {#optimize}

Escribe una solicitud aproximada y haz clic en la varita. Breezell la reescribe como un prompt más claro y primero te muestra el resultado; no se envía nada.

<BzLiaotian tanchu="youhua" shuru="poner modo oscuro en la página de configuración" youhuawen="Añade un interruptor de modo oscuro a la página de configuración. Guarda la elección para que se mantenga al recargar, aplícala cambiando una clase de tema en el elemento raíz y sigue la preferencia del sistema hasta que el usuario elija un modo." tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> coloca el texto nuevo en el campo de entrada. Mientras no cambies el texto, volver a hacer clic en la varita equivale a <BzWenben jian="promptOptimize.undo" /> y recupera tu texto original.
- <BzWenben jian="promptOptimize.retrySame" /> escribe otra versión; <BzWenben jian="promptOptimize.dismiss" /> cierra el panel.
- Con el campo de entrada vacío, la varita solo muestra <BzWenben jian="inputToolbar.optimizePromptEmpty" />.

La reescritura usa el modelo de Chat, a menos que le asignes uno dedicado en [Opciones de funciones](/feature-options-overview) (<BzWenben jian="models.promptOptimizeModel.title" />).

### MCP {#mcp}

El panel MCP muestra tus servidores MCP con su estado: verde significa conectado; rojo, que hay un error; gris, que está desactivado o no se ha iniciado.

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- El interruptor activa o desactiva un servidor para la IA. El encabezado muestra cuántos están activados; por ejemplo, `2/3`.
- La flecha (<BzWenben jian="inputToolbar.referenceMcpServer" />) añade el servidor a tu mensaje, así que la IA usa sus herramientas para esta solicitud.
- **+** (<BzWenben jian="mcp.addServer" />) abre `mcp.json`, donde se añaden los servidores.

### Skills {#skills}

El botón Skills funciona igual para las skills, con las pestañas <BzWenben jian="skills.builtinTab" /> y <BzWenben jian="skills.myTab" />. Consulta [Usar skills en un chat](/prompt-settings#use-skills-in-a-chat).

::: warning Configura los servidores MCP y las skills antes de una conversación larga
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## Uso y compresión del contexto {#context}

El anillo junto a **@** se va llenando a medida que la conversación usa la ventana de contexto del modelo. Pasa el puntero sobre él para ver las cifras, por ejemplo `47.0% - 94.2K / 200.0K context used`, y haz clic en él para abrir el panel **Context**:

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

La barra y la lista reparten los tokens usados por tipo. Pasa el puntero sobre una fila para resaltar su parte de la barra.

| Categoría | Qué cuenta |
| --- | --- |
| System prompt | Las instrucciones de Breezell para el modo actual |
| Tools | Las descripciones de las herramientas que la IA puede llamar |
| Rules | Tus reglas del espacio de trabajo o globales |
| Memories | Las memorias que se envían con la solicitud |
| Skills | La lista de skills activadas |
| MCP | Las herramientas de los servidores MCP activados |
| Subagents | El trabajo que hacen los subagentes |
| Conversation | Tus mensajes, las respuestas y los resultados de las herramientas |

### Compresión automática y manual

Cuando una conversación llega a cerca del 90 % de la ventana de contexto utilizable, Breezell la comprime automáticamente: los mensajes más antiguos se sustituyen por un resumen y la conversación continúa. No tienes que hacer nada.

Para liberar espacio antes, haz clic en <BzWenben jian="contextUsage.compress" /> en el panel Context (<BzWenben jian="contextUsage.compressTooltip" />). Mientras se ejecuta, el botón muestra <BzWenben jian="contextUsage.compressing" /> y un porcentaje. Después, el panel muestra uno de estos mensajes:

| Mensaje | Significado |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | Listo. |
| <BzWenben jian="contextUsage.nothingToCompress" /> | La conversación es demasiado corta para comprimirla. |
| <BzWenben jian="contextUsage.errorBusy" /> | Detén primero la respuesta y luego comprime. |
| <BzWenben jian="contextUsage.errorNoModel" /> | Elige primero un modelo bajo el campo de entrada. |

Cuando cambias a un modelo con una ventana de contexto más pequeña, el anillo puede mostrar <BzWenben jian="contextUsage.converting" /> mientras Breezell ajusta la conversación a la nueva ventana.

## Editar o revertir un mensaje enviado {#edit}

Pasa el puntero sobre uno de tus mensajes enviados. Aparece un lápiz arriba a la izquierda y una flecha de retorno a la derecha:

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="Añade un interruptor de modo oscuro a la página de configuración." da="Listo. SettingsPage.vue ya tiene un interruptor de modo oscuro, la elección se guarda y la página sigue la configuración del sistema hasta que la cambies." />

- **Editar**: haz clic en el mensaje o en el lápiz, cambia el texto y vuelve a enviarlo.
- **Revertir** (<BzWenben jian="editor.revertToThisPoint" />): haz clic en la flecha y confirma. Los mensajes posteriores se eliminan y los archivos que cambiaron vuelven al estado que tenían en ese mensaje.

<BzLiaotian huigun wen="Añade un interruptor de modo oscuro a la página de configuración." da="Listo. SettingsPage.vue ya tiene un interruptor de modo oscuro, la elección se guarda y la página sigue la configuración del sistema hasta que la cambies." />

Una reversión no se puede deshacer desde el editor, así que revisa el cuadro de diálogo antes de hacer clic en <BzWenben jian="editor.revertConfirmDo" />. Mientras la IA siga respondiendo en esta conversación, la flecha aparece atenuada; detén primero la respuesta.

## Atajos de teclado {#shortcuts}

| Teclas | Acción |
| --- | --- |
| `Enter` | Enviar el mensaje |
| `Shift+Enter` | Nueva línea |
| `@` | Abrir el menú de menciones |
| `/` al principio | Abrir las skills y las frases rápidas |
| `↑` `↓` y luego `Enter` | Moverse por un menú abierto y elegir |
| `Esc` | Cerrar el panel o el menú abierto |
| `Ctrl+L` / `Cmd+L` | Añadir la selección del editor al chat |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | Iniciar un chat nuevo |

## Consejos

- Agent es el modo adecuado para la mayor parte del trabajo. Cambia de modo solo cuando quieras un flujo de trabajo concreto, como un plan primero o un análisis sin ediciones.
- Indica a la IA el lugar correcto con `@`: un archivo o una carpeta funciona mejor que una descripción larga de dónde está algo.
- Mantén en buen estado las conversaciones largas con el anillo de contexto; la compresión es automática, y la compresión manual está ahí para cuando quieras liberar espacio tú mismo.
- Guarda como frases rápidas las solicitudes que escribes una y otra vez, y ejecuta los comandos del proyecto con el tipo Terminal.
- Configura los servidores MCP y las skills antes de una conversación larga, no a mitad de ella.
