---
title: Super Memory
description: Cómo Super Memory destila tus conversaciones en Breezell en memorias, habilidades, experiencias, trayectorias y recursos, cómo los recupera en solicitudes posteriores y cómo organizarlos en Box.
---

# Super Memory

**Super Memory** es la memoria a largo plazo propia de Breezell. Mientras trabajas, destila lo que vale la pena conservar de tus conversaciones —decisiones, preferencias, formas de trabajar, lecciones aprendidas al resolver problemas, los archivos que se modificaron— y recupera las partes relevantes en solicitudes posteriores, también en conversaciones nuevas.

- La extracción se hace con dos modelos integrados de Breezell. No usa el modelo que tienes configurado ni gasta sus tokens. Las memorias que se recuperan en una solicitud sí pasan a formar parte del contexto de esa solicitud.
- Super Memory requiere una cuenta de Breezell con un plan que la incluya.
- Todo lo que guarda se puede explorar, corregir y eliminar en Box ▸ <BzWenben jian="box.memory.group" />.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página; las memorias que aparecen en ellas son ejemplos. En la biblioteca de memoria puedes abrir filas, cambiar prioridades y fijar residentes.
:::

## Cómo funciona {#how-it-works}

Abre Box y despliega <BzWenben jian="box.memory.group" /> en el grupo Console de la izquierda. Tiene cuatro páginas: <BzWenben jian="box.memory.overview" />, <BzWenben jian="box.memory.library" />, <BzWenben jian="box.memory.context" /> y <BzWenben jian="box.memory.maintenance" />.

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" /> empieza con un diagrama del ciclo, con cifras en tiempo real:

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**: cada turno entre tú y el modelo.
2. **<BzWenben jian="box.memory.flow.extract" />**: <BzWenben jian="box.memory.flow.extractSub1" />; <BzWenben jian="box.memory.flow.extractSub2" />.
3. **<BzWenben jian="box.memory.flow.store" />**: donde viven las entradas, activas o dormidas.
4. **<BzWenben jian="box.memory.flow.project" />**: conocimiento compilado a partir de tu código, como puntos de entrada, comandos y dependencias.
5. De vuelta a la conversación: las entradas residentes se inyectan en cada solicitud y las relevantes se recuperan cuando una solicitud las necesita.

Debajo del diagrama, las tarjetas muestran cuántas entradas hay, cuántas son residentes, cuánto ahorra el índice compacto frente a cargar todas las entradas completas y qué se inyectó por última vez. Más abajo aparecen la proporción de tipos, las prioridades, lo recientes que son las entradas, el estado del conocimiento del proyecto compilado, las entradas más usadas y las que están a punto de caducar.

## Cinco tipos de memoria {#kinds}

Super Memory clasifica cada entrada en el tipo que mejor encaja con cómo se usará después:

| Tipo | Qué guarda | Ejemplo |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | Datos duraderos, preferencias, instrucciones permanentes y decisiones | «Responde en chino tradicional; deja el código en inglés» |
| <BzWenben jian="superMemory.catSkill" /> | Un método reutilizable para volver a resolver un tipo de problema | Cómo restaurar de forma segura datos dañados de localStorage |
| <BzWenben jian="superMemory.catExperience" /> | Una lección: el razonamiento sobre la causa raíz y cómo verificarla | «Cuando varias funciones fallan a la vez, arregla primero el estado compartido» |
| <BzWenben jian="superMemory.catTrajectory" /> | Cómo transcurrió realmente una tarea: objetivo, llamadas a herramientas, errores y recuperación | Los 14 pasos de una reparación |
| <BzWenben jian="superMemory.catResource" /> | Los archivos y lugares concretos que se modificaron | <BzWenben jian="superMemory.editAction.edit" /> test.html |

No todas las conversaciones producen todos los tipos. Una corrección de errores suele dar lugar a una habilidad, una experiencia, una trayectoria y recursos, pero no a una memoria general, porque nada en ella es una preferencia personal duradera. Así la recuperación es precisa: una tarea posterior puede traer por separado el método, la lección, el historial o el registro de archivos.

## Prioridades y ciclo de vida {#priorities}

| Prioridad | Duración |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | Nunca caduca. Las entradas residentes siempre son P0. |
| <BzWenben jian="superMemory.p190Days" /> | Caduca a los 30 días, salvo que se vuelva a confirmar. |
| <BzWenben jian="superMemory.p230Days" /> | Caduca a los 7 días, salvo que se vuelva a confirmar. Los detalles de corta duración, como las ediciones de archivos, empiezan aquí. |

Una entrada caducada no se elimina: pasa a **<BzWenben jian="superMemory.dormant" />**. Las entradas dormidas siguen apareciendo en las búsquedas y se pueden restaurar. Cuando una entrada P1 demuestra su utilidad, Breezell propone hacerla permanente con un botón **↑P0** en su fila.

## La biblioteca de memoria {#library}

<BzWenben jian="box.memory.library" />: <BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **Filtros**: busca y luego acota por prioridad (P0 / P1 / P2), por tipo y por <BzWenben jian="superMemory.active" /> o <BzWenben jian="superMemory.dormant" />.
- **Barra de recuento**: cuántas entradas hay cargadas, la cuota de residentes y el presupuesto activo de cada tipo. <BzWenben jian="superMemory.batchSelect" /> te permite marcar varias entradas y eliminarlas a la vez.
- **Filas**: el punto de color indica el tipo. Después del título aparecen el chip de prioridad, **<BzWenben jian="superMemory.residentBadge" />** en las residentes y **NEW** en las entradas de las últimas 24 horas. La segunda línea muestra cuándo se actualizó por última vez, el tipo, el número de etiquetas y su origen.
- **Abre una fila** para ver sus etiquetas, el <BzWenben jian="superMemory.l1Overview" />, <BzWenben jian="superMemory.whyRemembered" />, cuántas veces se confirmó y se usó, y cuándo caduca. <BzWenben jian="box.memory.showFull" /> añade el <BzWenben jian="superMemory.l2Full" />.
- **Chip de prioridad** (1): haz clic en él para elegir <BzWenben jian="superMemory.p0Permanent" />, <BzWenben jian="superMemory.p190Days" /> o <BzWenben jian="superMemory.p230Days" />.
- La chincheta convierte una entrada en residente; la papelera la elimina.

Breezell envía a la IA una línea breve por entrada (L0) y solo carga el resumen o el contenido completo cuando hace falta. De ahí sale el <BzWenben jian="superMemory.tokenSavings" /> de la página de resumen.

## Memorias residentes {#resident}

Una entrada residente se inyecta en **todas** las solicitudes, traten o no sobre ella. Úsala para lo que la IA debe tener siempre presente, como una regla de arquitectura, un flujo de trabajo obligatorio o una preferencia firme.

1. Abre <BzWenben jian="box.memory.library" /> y busca la entrada.
2. Haz clic en la chincheta de su fila (<BzWenben jian="superMemory.residentOn" />).

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- La entrada pasa a P0, recibe la insignia <BzWenben jian="superMemory.residentBadge" /> y la barra de recuento muestra el nuevo total, por ejemplo <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />.
- Puede haber hasta 12 entradas residentes. Al llegar al límite, Breezell muestra <BzWenben jian="superMemory.residentLimitReached" />
- Para bajar la prioridad de una entrada residente, primero vuelve a hacer clic en la chincheta (<BzWenben jian="superMemory.residentOff" />); la entrada recupera la prioridad que tenía antes.

Mantén las residentes breves y realmente universales. Las ubicaciones temporales de archivos o los detalles de una tarea puntual no deben estar aquí: se añadirían a todas las solicitudes.

## Memorias en el chat {#in-chat}

Cuando Super Memory inyecta entradas en una solicitud, aparece una línea debajo de tu mensaje. Haz clic en ella para ver qué entradas se usaron:

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="Responde en chino tradicional; mantén el código y los identificadores en inglés" gaoliang="zhuru" biaoji="1" wen="Hola" da="¡Hola! ¿En qué quieres trabajar hoy?" />

En este ejemplo, una conversación totalmente nueva solo contiene «Hola» y, aun así, se inyectó una entrada: la memoria residente. Las entradas relevantes se añaden cuando una solicitud las necesita:

<BzLiaotian zhuru="3|1|2" zhuruwen="Responde en chino tradicional; mantén el código y los identificadores en inglés|Restaurar el estado dañado de localStorage con un análisis JSON protegido|Cuando tareas, filtros y contadores fallan a la vez, arregla primero el estado compartido" zhurukai wen="La lista de lectura de test2.html pierde sus libros al recargar. Arréglalo." da="Es el mismo fallo que en el gestor de tareas: la lista se guarda con String() en lugar de JSON.stringify. Voy a proteger el análisis, descartar el valor dañado y dar a cada libro un id estable." />

La línea solo aparece cuando se inyectó algo. Si la recuperación no pudo completarse, el turno continúa con lo que hay disponible y la línea lo indica.

## Inyección de contexto {#context}

<BzWenben jian="box.memory.context" />: <BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| Tarjeta | Qué muestra |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | Para el turno seleccionado: el estado, cuántas entradas residentes y relevantes se inyectaron, sus tipos y ámbitos, y cada entrada con su nivel de detalle (L0 / L1 / L2) y su puntuación. |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | El índice compacto que recibirá la próxima solicitud, agrupado por tipo, con una estimación de tokens. |
| <BzWenben jian="superMemory.convTurns" /> | Los turnos de la conversación actual. Haz clic en uno para revisar su inyección e ir a él en el chat. |

## Presupuesto y mantenimiento {#maintenance}

<BzWenben jian="box.memory.maintenance" />: <BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />: <BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />: <BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />: <BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />: lleva todo tu banco de memoria a otra computadora en un `.zip`. <BzWenben jian="box.memory.archiveImportDesc" />

## Ejemplo: una reparación reutilizada en otra aplicación {#example}

Así se originaron las entradas de las pantallas anteriores.

1. **La reparación.** En `test.html`, un pequeño gestor de tareas no conseguía añadir, eliminar, completar, filtrar ni guardar tareas de forma fiable. Breezell rastreó los fallos hasta un único modelo de estado compartido, lo corrigió y comprobó todo el flujo en el navegador. Super Memory registró primero las partes editadas de `test.html` como **recursos P2** y el desarrollo de la reparación como una **trayectoria P2**.
2. **Las lecciones.** Al preguntarle «¿Qué aprendiste de esto?», la IA nombró las lecciones reutilizables: corregir la parte que gestiona el estado compartido en lugar de cada síntoma, identificar los elementos por un id estable y tratar los datos guardados como un límite que hay que validar. Super Memory guardó una **habilidad P1** (guardado y carga protegidos de datos de localStorage) y una **experiencia P1** (diagnosticar primero el estado compartido y luego verificar de principio a fin). En correcciones más largas o más valiosas, registra estas lecciones sin que se lo pidan.
3. **La reutilización.** La primera conversación se eliminó. En una conversación nueva, otra aplicación —una lista de lectura en `test2.html`— tenía la misma familia de errores. Breezell recuperó la habilidad y los registros de recursos, aplicó el método a los nuevos datos de `books` en lugar de copiar el parche anterior y verificó el resultado.

Eliminar una conversación no elimina lo que Super Memory extrajo de ella, y un método aprendido en una aplicación se trasladó a otra.

## Cuando se agota la cuota diaria {#quota}

Super Memory tiene una cuota diaria. Cuando se agota, todas las páginas de Super Memory muestran <BzWenben jian="box.memory.quotaPausedTitle" />. Hasta que se renueve, los chats dejan de crear entradas nuevas por sí solos; las entradas existentes se pueden seguir viendo y eliminando, y las reglas y memorias que escribes tú mismo en [Rules, Memories & Skills](/prompt-settings) no se ven afectadas.

Sin un plan que incluya Super Memory, las páginas muestran:

<BzJiyi ye="suoding" />

## Resumen

- Super Memory destila las conversaciones en memorias, habilidades, experiencias, trayectorias y recursos, sin usar los tokens de tu modelo.
- Las entradas relevantes se recuperan en solicitudes posteriores; las residentes (hasta 12, siempre P0) van en todas las solicitudes.
- P1 dura 30 días y P2 siete días, salvo que se vuelvan a confirmar; las entradas caducadas pasan a estar dormidas y se pueden restaurar.
- Box ▸ <BzWenben jian="box.memory.group" /> reúne el resumen, la biblioteca, la vista de inyección de contexto y el mantenimiento.
