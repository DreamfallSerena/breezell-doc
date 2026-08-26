---
title: Resumen del cuadro de diálogo
description: Resumen del cuadro de diálogo de Breezell, incluidas menciones, uso del contexto, selección de modo, controles de modelos y acciones rápidas.
---

# Resumen del cuadro de diálogo

El cuadro de diálogo de Breezell es el lugar principal donde escribes instrucciones, eliges un modo de trabajo, seleccionas un modelo, adjuntas contexto y controlas cómo el Agent gestiona la solicitud actual.

Esta página explica los controles visibles que aparecen en las capturas del cuadro de diálogo.

## Estado de entrada predeterminado

El estado de entrada predeterminado es el punto de partida normal para un mensaje nuevo. Mantiene visibles el campo de instrucciones y los controles esenciales.

![Estado de entrada predeterminado](/dialog-box/input-default.png)

Escribe tu solicitud, elige el modo y el modelo si es necesario y envía el mensaje a Breezell.

## Menú del selector de modo

El puntero resalta el menú del selector de modo. Este menú muestra los modos de trabajo disponibles.

![Menú del selector de modo](/dialog-box/mode-selector.png)

Los modos disponibles incluyen:

- [**Chat**](/es/mode-selection#chat) para preguntas y respuestas rápidas
- [**Plan**](/es/mode-selection#plan) para planificar la implementación antes de editar
- [**Analyze**](/es/mode-selection#analyze) para investigaciones de solo lectura
- [**Entanglement**](/es/mode-selection#entanglement) para un razonamiento causal más profundo
- [**Agent**](/es/mode-selection#agent) para editar archivos y usar herramientas de forma autónoma
- [**Teams**](/es/mode-selection#teams) para compañeros de IA en paralelo en tareas complejas

Para obtener más información, consulta [Selección de modo](/es/mode-selection). Elige el modo que corresponda al nivel de autonomía y profundidad que necesitas.

## Selector de modelos

El puntero resalta el selector de modelos. El selector muestra el modelo actual y permite cambiar a otro modelo disponible antes de enviar el mensaje.

![Selector de modelos](/dialog-box/input-compact-controls.png)

Úsalo cuando quieras elegir un modelo con características diferentes de velocidad, razonamiento o capacidad.

## Carga de archivos

El puntero resalta el control de carga de archivos.

![Control de carga de archivos](/dialog-box/input-model-controls.png)

Haz clic en este control para adjuntar archivos locales al mensaje actual antes de enviarlo a Breezell. Los archivos cargados pasan a formar parte del contexto de la solicitud, por lo que Breezell puede inspeccionarlos o consultarlos al responder.

## ~~Exploración avanzada~~

> **Obsoleto después de la versión 1.2.5.** El control específico de Exploración avanzada ya no está disponible. Cuando una solicitud requiere una investigación más profunda, Breezell invoca automáticamente las capacidades relacionadas para el aprendizaje activo, una investigación más amplia y una exploración más exhaustiva.

![Control de Exploración avanzada](/dialog-box/input-tools-expanded.png)

## Navegador Breezell

El puntero resalta el control **Breezell Browser**.

![Control de Breezell Browser](/dialog-box/input-agent-basic.png)

Breezell Browser es la herramienta de navegador integrada de Breezell. Úsala para abrir páginas web, consultar contenido en línea, buscar información y ayudar a la IA a obtener y analizar contenido web sin salir del cuadro de diálogo.

## Desglose del uso del contexto

El puntero resalta el indicador de uso del contexto. Al abrirlo, se muestra un desglose detallado del uso de la ventana de contexto actual.

![Desglose del uso del contexto](/dialog-box/context-usage-breakdown.png)

El desglose separa el uso en categorías como prompt del sistema, herramientas, reglas, memorias, Skills, MCP, subagentes y contenido de la conversación. Úsalo para entender qué partes de la sesión consumen más tokens.

## Compresión manual del contexto

El puntero resalta el control **Manual compress** del panel de contexto. Esta acción resume el contenido anterior de la conversación para que la sesión conserve información útil y reduzca el uso del contexto.

![Panel de contexto con compresión manual](/dialog-box/context-manual-compress.png)

La compresión manual resulta útil durante conversaciones largas, especialmente cuando la ventana de contexto está creciendo pero aún quieres continuar en la misma sesión.

## Frases rápidas

El puntero resalta el botón **Quick Phrases** de la bandeja de entrada. Las frases rápidas permiten guardar prompts o instrucciones frecuentes y reutilizarlos en mensajes nuevos sin volver a escribirlos.

![Botón Quick Phrases en la bandeja de entrada](/dialog-box/quick-phrases-button.png)

Abre **Quick Phrases** para consultar y organizar las frases guardadas. Usa **Add** para crear una frase. El panel **All phrases** contiene todas las frases guardadas; arrastra una frase a **Favorites**, a la derecha, para tener a mano las que utilizas con más frecuencia. Arrástrala de vuelta para quitarla de Favoritos.

Selecciona una frase guardada para insertarla en el campo de entrada actual. Puedes editar el texto antes de enviar el mensaje.

![Gestor de frases rápidas](/dialog-box/quick-phrases-manager.png)

## Servidores MCP

El puntero resalta el botón **MCP** de la bandeja de entrada. Ábrelo para ver los servidores MCP configurados y controlar si cada servidor está disponible para Breezell.

![Controles de servidores MCP](/dialog-box/mcp-server-controls.png)

Cada fila de servidor incluye:

- **Flecha de invocación:** inserta `/mcp:<nombre-del-servidor>` en el campo de entrada actual. Envía la solicitud con esta referencia para permitir que la IA llame al servidor MCP seleccionado.
- **Interruptor:** activa o desactiva un servidor MCP existente. Un servidor desactivado no estará disponible para la IA hasta que se vuelva a activar.
- **Indicador de estado:** un punto verde indica que el servidor MCP está conectado y funciona correctamente. Un punto rojo indica que no está disponible o que su estado es incorrecto; comprueba su configuración o proceso antes de invocarlo.

![Referencia MCP insertada en el campo de entrada](/dialog-box/mcp-invocation-reference.png)

## Skills

El puntero resalta el botón **Skills** de la bandeja de entrada. Ábrelo para administrar las Skills que Breezell puede utilizar.

![Panel de Skills integradas](/dialog-box/skills-built-in.png)

El panel divide las Skills en dos pestañas:

- **Built-in:** Skills oficiales incluidas con Breezell. Están disponibles sin necesidad de crear o configurar una Skill personal.
- **My Skills:** Skills que configuras o creas tú mismo.

![Panel My Skills](/dialog-box/skills-my-skills.png)

Las Skills de ambas pestañas se pueden controlar individualmente:

- **Flecha de invocación:** inserta `@<nombre-de-la-skill>` en el campo de entrada actual. Envía la solicitud con esta mención para permitir que la IA invoque la Skill seleccionada.
- **Interruptor:** activa o desactiva la Skill. Una Skill desactivada no estará disponible para la IA hasta que se vuelva a activar.

![Mención de una Skill insertada en el campo de entrada](/dialog-box/skill-invocation-reference.png)

## Capacidad de mensajes

El puntero resalta el botón **Message Capacity** de la bandeja de entrada. Capacidad de mensajes analiza el almacenamiento local utilizado por las conversaciones guardadas. Es un informe de almacenamiento, no la ventana de contexto del modelo ni el uso de memoria activa de la aplicación.

![Botón Message Capacity](/dialog-box/message-capacity-button.png)

El panel ofrece:

- **Alcance y período:** permite alternar entre el espacio de trabajo actual y todos los espacios de trabajo, y consultar los últimos 7, 30 o 90 días.
- **Uso actual y tendencia:** muestra el almacenamiento total utilizado, su variación durante el período seleccionado y un gráfico de crecimiento.
- **Desglose del almacenamiento:** compara el contenido de los mensajes, las imágenes y archivos adjuntos, los resultados de herramientas y los puntos de control. La línea discontinua representa el espacio recuperable.
- **Métricas resumidas:** muestra la cantidad de conversaciones y mensajes, la conversación de mayor tamaño y el espacio recuperable.
- **Inspección de conversaciones:** permite buscar, ordenar, filtrar y seleccionar conversaciones. Cada fila muestra el número de mensajes, el tamaño almacenado y el tipo de contenido destacado; las conversaciones activas o en cola aparecen identificadas.
- **Limpieza segura:** recupera el almacenamiento que el panel considera apto para limpieza. Revisa el alcance, los filtros y la selección actuales antes de ejecutarla.

![Panel de Capacidad de mensajes](/dialog-box/message-capacity-dashboard.png)

## Aciertos de caché

El puntero resalta el botón **Cache Hit (Aciertos de caché)** de la bandeja de entrada. El panel **Cache Broadcast** resume la reutilización de la caché de instrucciones del proveedor en el chat actual o en el espacio de trabajo. Estas estadísticas corresponden a la caché de solicitudes y son independientes del almacenamiento local de las conversaciones y de la capacidad de contexto del modelo.

![Botón Aciertos de caché](/dialog-box/cache-hit-button.png)

El panel ofrece la siguiente información y controles:

- **Ámbito:** Permite alternar entre el chat actual y todo el espacio de trabajo.
- **Resumen de aciertos:** Compara los datos de hoy, ayer y del total histórico, incluidos los turnos registrados, la tasa de aciertos y el volumen leído desde la caché.
- **Desglose de tokens:** Muestra los tokens de entrada, las lecturas y escrituras de caché y los tokens de salida. Las lecturas de caché son tokens de entrada reutilizables que se obtienen de la caché en lugar de procesarse de nuevo.
- **Ahorro estimado:** Muestra los tokens de entrada equivalentes ahorrados y una estimación basada en precios de lista. Es solo una referencia; la facturación real puede variar según el proveedor, el modelo y la ruta.
- **Detalles por turno:** Permite revisar el proveedor, el modelo, los ajustes de razonamiento y velocidad, la tasa de aciertos, la hora y la duración de cada turno. Al seleccionar un turno se muestran sus totales de entrada, lectura de caché, escritura de caché y salida.
- **Tendencia:** El gráfico muestra cómo cambia la tasa de aciertos desde las solicitudes más antiguas hasta las más recientes.
- **Acciones:** Permite copiar un resumen o borrar las estadísticas del ámbito seleccionado.

![Panel Cache Broadcast](/dialog-box/cache-hit-dashboard.png)

Las cachés del proveedor son temporales. Un periodo prolongado de inactividad, un reinicio o un cambio de modelo, velocidad o ruta de backend puede generar un 0 % de aciertos; las solicitudes posteriores pueden volver a preparar la caché.


## Menú de menciones

El puntero resalta el área de contexto rápido que se utiliza para abrir el menú de menciones. Este menú permite añadir archivos, carpetas, herramientas MCP y Skills al mensaje actual.

![Menú de menciones en el cuadro de diálogo de Breezell](/dialog-box/mention-menu.png)

Úsalo cuando tu solicitud dependa de contenido específico del espacio de trabajo o de una capacidad externa. Añadir el contexto adecuado ayuda a Breezell a entender qué debe inspeccionar o utilizar antes de responder.

## Consejos de uso

- Añade contexto de archivos o carpetas cuando la solicitud dependa de contenido específico del proyecto.
- Agent es el modo predeterminado y el flujo de trabajo automático recomendado para la mayoría de las tareas.
- Cambia de modo solo cuando necesites un flujo de trabajo específico, como planificar primero o analizar sin editar.
- La compresión del contexto se ejecuta automáticamente. Usa la compresión manual solo si prefieres un control manual estricto o tienes un requisito especial.
- Revisa el modelo seleccionado cuando sean importantes la precisión, la velocidad o la profundidad del razonamiento.