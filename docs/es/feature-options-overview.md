---
title: Resumen de opciones de funciones
description: Todos los interruptores de la página Opciones de funciones de Breezell (modelos dedicados, sugerencias de seguimiento, permisos de herramientas, comportamiento del editor, notificaciones, modo Plan, búsqueda web y acceso a archivos), con su valor predeterminado y lo que hace cada uno.
---

# Resumen de opciones de funciones

**Opciones de funciones** es la página de Box en la que decides con qué modelo funciona cada función secundaria y hasta dónde puede actuar el agente por su cuenta. Tiene cinco grupos: <BzWenben jian="featureOptions.group.models" />, <BzWenben jian="featureOptions.group.execution" />, <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" /> y <BzWenben jian="featureOptions.group.system" />.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página. Cada interruptor y cada menú empieza con el valor predeterminado de Breezell, y puedes hacer clic en ellos para ver cómo cambia una fila.
:::

## Abrir Opciones de funciones

1. Abre Box (el lado **Box** del conmutador de la barra de título, o **Breezell: Open Settings** desde la paleta de comandos).
2. En el grupo <BzWenben jian="box.title" /> de la izquierda, haz clic en <BzWenben jian="tab.featureOptions" />.

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

Cada cambio se guarda en el momento en que lo haces y se aplica a todos los espacios de trabajo. Para ir directamente a una opción, escribe parte de su nombre en el cuadro de búsqueda de la parte superior de la barra lateral de Box: Breezell se desplaza hasta la fila y la resalta.

La finalización automática no está en esta página. Su interruptor, su modelo y su protocolo tienen su propia página: <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />.

## Modelos

<BzWenben jian="featureOptions.dedicatedModels.desc" /> Todas las filas de modelo de este grupo funcionan igual:

- Interruptor **desactivado** (predeterminado): la fila muestra <BzWenben jian="models.analysisModel.followChat" />, y la función usa el modelo seleccionado bajo el campo de entrada del chat.
- Interruptor **activado**: la fila muestra <BzWenben jian="models.analysisModel.custom" />, y debajo aparece un selector de modelo. La función usa siempre el modelo que elijas ahí, sea cual sea el que use el chat.

Si más adelante el modelo dedicado se elimina o se desactiva en <BzWenben jian="tab.models" />, la función vuelve sin avisar al modelo de Chat.

### Modelos dedicados

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| Fila | Se usa para |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | Los subagentes que el agente inicia para explorar y analizar el código en su lugar |
| <BzWenben jian="models.teamDesignModel.title" /> | Los miembros del equipo que se ocupan de la interfaz, del aspecto visual y del pulido de páginas en el modo Teams |
| <BzWenben jian="models.teamBugfixModel.title" /> | Los miembros del equipo que localizan, reproducen y corrigen errores en el modo Teams |
| <BzWenben jian="models.scmModel.title" /> | El mensaje de commit que se genera en Control de código fuente |

Una configuración habitual: chatear con `claude-opus-5` y dar a las tareas secundarias un modelo más pequeño. En el ejemplo de arriba, <BzWenben jian="models.scmModel.title" /> está cambiado a <BzWenben jian="models.scmModel.custom" /> y funciona con `claude-haiku-5-5`, que escribe los mensajes de commit más rápido y con menos coste. El estilo de esos mensajes viene de la página Commit de [Configuración de instrucciones y habilidades](/prompt-settings#commit-message).

### Sugerencias de seguimiento

<BzWenben jian="featureOptions.followUp.desc" /> Esta función está desactivada de forma predeterminada.

| Opción | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | Desactivado | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 2, 3 o 4 tarjetas de sugerencia bajo cada respuesta. |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | Con <BzWenben jian="featureOptions.followUp.clickSend" />, la sugerencia se envía al instante; con <BzWenben jian="featureOptions.followUp.clickInsert" />, puedes editarla antes de enviarla. <BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | Aquí basta con un modelo pequeño y rápido, como `claude-haiku-5-5`. |

### Optimizar prompt

<BzWenben jian="featureOptions.promptOptimize.desc" /> La tarjeta solo tiene la fila del modelo: <BzWenben jian="models.promptOptimizeModel.title" />.

### Asistente de selección

Cuando resaltas texto en una respuesta del chat, aparece una pequeña barra con Citar y Copiar. El asistente de selección le añade Traducir y Buscar.

| Opción | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | Activado | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> o <BzWenben jian="featureOptions.selectionAssist.pillAbove" />, respecto a la selección. <BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | Activado | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | Activado | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | Activado | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | El modelo que traduce. |

## Ejecución

<BzWenben jian="featureOptions.toolPermissions.desc" /> Cuando un interruptor está desactivado, el agente se detiene antes de ese tipo de acción y espera a que la apruebes o la rechaces en el chat. Las herramientas que solo leen, como leer archivos, buscar en el código o la búsqueda web, nunca esperan aprobación.

<BzGongneng zu="execution" />

| Interruptor | Predeterminado | Abarca |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | Activado | Editar, escribir, renombrar y eliminar archivos y carpetas |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | Desactivado | Comandos de terminal y scripts que el agente escribe y ejecuta |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | Activado | Ejecutar sentencias y crear conexiones o bases de datos con las herramientas de base de datos de Breezell |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | Desactivado | Generar imágenes |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | Activado | Herramientas de los servidores MCP que añadiste |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | Desactivado | <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> en el modo Teams |

::: warning Aprobar terminal automáticamente
Con <BzWenben jian="featureOptions.toolPermissions.terminal" /> activado, el agente ejecuta cualquier comando que decida, como instalaciones, compilaciones o la eliminación de archivos, sin preguntar. Actívalo solo en proyectos donde sea seguro, por ejemplo con un estado de Git limpio al que puedas volver.
:::

Aun con <BzWenben jian="featureOptions.toolPermissions.edits" /> activado, las ediciones siguen apareciendo como cambios que puedes revisar, a menos que también actives <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> más abajo.

## Editor

<BzGongneng zu="editor" />

### Comportamiento del código

| Interruptor | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | Activado | Después de cada edición, los errores de lint que introdujo esa edición se devuelven a la IA junto con el resultado, para que los corrija en el mismo turno. |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | Desactivado | Las ediciones de la IA se conservan de inmediato, sin el paso de aceptar / rechazar en el editor. |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | Desactivado | Abre cada archivo en el editor cuando la IA lo edita. |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | Activado | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | Desactivado | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | Activado | Cuando seleccionas código en el editor, aparecen junto a él pequeños botones para añadir ese código al chat o editarlo. |

### Notificaciones

| Opción | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | Activado | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | Desactivado | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | Desactivado | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | Desactivado | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | Desactivado | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

Al elegir un sonido, este se reproduce una vez, y lo mismo ocurre al activar uno de los interruptores de sonido. Los sonidos permanecen en silencio hasta que activas al menos uno de los interruptores de segundo plano o de chat actual.

## Inteligencia

<BzGongneng zu="intelligence" />

### Gestión del contexto

| Opción | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | Desactivado | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Permite que el modelo use la búsqueda web integrada de su proveedor. Consulta más abajo. |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> decide cuándo se añade a una solicitud la búsqueda propia del proveedor. Normalmente, Breezell busca con sus propias herramientas web, que requieren que hayas iniciado sesión.

| Opción | Qué ocurre |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Se usan las herramientas de búsqueda de Breezell. Solo cuando no pueden ejecutarse (por ejemplo, si no has iniciado sesión), el modelo busca con su proveedor. |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | La búsqueda del proveedor se añade a cada solicitud, junto a las herramientas de Breezell. |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | La búsqueda del proveedor no se usa nunca. |

La búsqueda integrada solo existe en algunos proveedores: Anthropic (Claude), OpenAI, Gemini con una clave de API, xAI, Perplexity, OpenRouter, Qwen y Zhipu. Con otros modelos, esta opción no tiene ningún efecto.

### Modos y skills

| Interruptor | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | Activado | <BzWenben jian="featureOptions.superpowers.desc" /> Son las skills integradas que aparecen en [Configuración de instrucciones y habilidades](/prompt-settings#use-skills-in-a-chat). |
| <BzWenben jian="featureOptions.entanglement.enable" /> | Activado | <BzWenben jian="featureOptions.entanglement.enableDesc" /> Consulta [Modo Entanglement](/entanglement-mode-overview). |

## Sistema

<BzGongneng zu="system" />

### Acceso a archivos externos

| Interruptor | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | Activado | Las herramientas pueden leer archivos fuera del espacio de trabajo abierto, por ejemplo el código fuente de una biblioteca o un archivo de configuración de tu carpeta personal. |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | Activado | Las herramientas pueden modificar archivos fuera del espacio de trabajo abierto. Desactívalo si el agente nunca debe tocar nada fuera del proyecto. |

### Velocidad de red del terminal

| Interruptor | Predeterminado | Qué hace |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | Activado | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | Desactivado | Solo en Windows. <BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## Resumen

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />; los cambios se guardan al instante.
- <BzWenben jian="featureOptions.group.models" />: las funciones secundarias siguen el modelo de Chat hasta que les asignas uno dedicado.
- <BzWenben jian="featureOptions.group.execution" />: lo que el agente puede hacer sin preguntar. Los comandos de terminal piden confirmación de forma predeterminada.
- <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />: corrección de errores de lint, notificaciones, tarjetas de plan, búsqueda web, skills de Superpowers y acceso a archivos fuera del espacio de trabajo.
