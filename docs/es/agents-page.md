---
title: Página Agents
description: "La página Agents de Breezell 1.4.58: las ventanas nuevas se abren con las conversaciones de todos tus proyectos. Cómo cambiar de página, la barra lateral, la agrupación, añadir proyectos, los subagentes, el menú de una conversación, cómo seguir desde aquí las conversaciones de otros proyectos, el lado derecho, la barra de la cuenta, los espacios de trabajo de varios proyectos, los avisos de la aprobación automática y los límites actuales."
---

# Página Agents

La página Agents es una página de Breezell que reúne **las conversaciones de todos tus proyectos en un solo lugar**. A la izquierda hay una barra lateral con cada proyecto y sus conversaciones. A la derecha está la misma área del editor que en el IDE, donde pueden estar abiertos a la vez archivos, conversaciones y el navegador integrado. Puedes ver qué hace cada IA y cuál te está esperando sin abrir antes la ventana de cada proyecto, y puedes seguir una conversación aquí mismo.

Esta guía describe Breezell 1.4.58, donde apareció la página Agents. Explica cómo cambiar de página, cada parte de la barra lateral, cómo añadir proyectos, el menú de las conversaciones, cómo trabajar con las conversaciones de otros proyectos, el lado derecho, la barra de la cuenta, los espacios de trabajo de varios proyectos y los límites actuales.

## Cómo llegar a la página {#open}

La barra de título tiene un interruptor: **Agents | IDE | Box**. **Agents** abre esta página, **IDE** el editor de siempre y **Box** la página con los modelos, las opciones de funciones y todos los ajustes de Breezell.

- Las ventanas nuevas se abren por defecto en la página Agents.
- Si cierras una ventana y la vuelves a abrir, vuelve a la página en la que estaba al cerrarla (Agents, IDE o Box).
- Una ventana abierta para mostrar archivos, por ejemplo cuando abres un archivo con Breezell, siempre se abre en el IDE.
- Para que las ventanas nuevas no se abran en la página Agents, pulsa **Más** (los tres puntos) en la esquina superior derecha de la página y desmarca **Mostrar esta página al abrir una ventana**. También puedes abrir **Configuración**, buscar «Agents page» y desmarcar «Open new windows on the Agents page» (el texto de este ajuste está en inglés).

| Término | Significado |
| --- | --- |
| Proyecto | Una carpeta (o un espacio de trabajo de varias carpetas), en este equipo, en WSL o por SSH. |
| Agente | Una conversación. Cada conversación de la barra lateral es un agente. |
| Subagente | Una conversación iniciada por otra conversación. Aparece debajo de la que la inició. |
| Lado derecho | El área del editor a la derecha de la página: archivos, pestañas de conversaciones y el navegador integrado, uno junto a otro. |

## La barra lateral {#sidebar}

En la parte superior de la barra lateral hay cuatro entradas:

- **Nuevo chat** inicia una conversación nueva en el proyecto de esta ventana.
- **Box** cambia a la página Box.
- **Personalizar** abre las reglas, las memorias y las habilidades.
- El botón de búsqueda (**Buscar conversaciones**) abre un cuadro de búsqueda. Escribe para filtrar las conversaciones. `Esc` lo borra y lo cierra.

Debajo está la sección **Agentes**, que muestra las conversaciones por proyecto:

- Primero va el proyecto de esta ventana. Después, todos los demás proyectos con conversaciones y los que has añadido tú, empezando por los usados más recientemente.
- Cada fila de proyecto muestra su entorno (por ejemplo `WSL: ubuntu` o `SSH: host`), cuándo se usó por última vez y un **+**. El **+** (descripción «Nuevo agente en {proyecto}») inicia una conversación nueva en ese proyecto.
- Cada conversación tiene un punto que indica su estado: **Trabajando**, **Esperando tu respuesta** o inactiva (sin marca). Al lado se muestra su antigüedad, por ejemplo «ahora», «5 min» o «2 h».
- Cuando un proyecto tiene más conversaciones de las que caben, pulsa **Mostrar más**.

Para ocultar la barra lateral, pulsa el botón de su esquina superior izquierda (**Mostrar u ocultar la barra lateral**). Mientras está oculta, en la parte superior de la página hay un botón para volver a mostrarla y, al lado, un botón **Nuevo chat**.

## Agrupar por {#group-by}

El botón de filtro junto al título **Agentes** (**Agrupar por**) ofrece tres formas de ordenar la lista:

- **Proyecto**: un grupo por proyecto. Es la opción por defecto.
- **Tiempo**: todas las conversaciones en una sola lista, las más recientes primero, cada una con el proyecto al que pertenece.
- **Estado**: tres grupos, **Trabajando**, **Esperándote** y **Otros**, para ver de un vistazo qué agente te está esperando.

## Añadir proyectos {#add}

La barra lateral muestra los proyectos que tienen conversaciones. Para que una carpeta aparezca desde el principio, pulsa el botón de carpeta junto al título **Agentes** (**Añadir proyectos…**):

- Si solo hay un lugar entre el que elegir, se abre enseguida el selector de carpetas y puedes elegir varias carpetas a la vez.
- Si hay varios lugares, primero aparece un menú. En una ventana de este equipo ofrece **Añadir una carpeta de Windows…** y, si tienes WSL, también **Añadir una carpeta de WSL…**. En una ventana de WSL o SSH ofrece **Añadir una carpeta de {lugar}…**. Los lugares que has usado antes (por ejemplo un host SSH) aparecen como **Añadir proyectos de {lugar}…**, donde marcas sus proyectos o escribes una ruta completa. La última entrada es **Conectar con otro host…**.

Los proyectos que añades se quedan en la barra lateral hasta que los quites.

Haz clic con el botón derecho en la fila de un proyecto para ver:

- **Nuevo agente en {proyecto}**: igual que el **+**.
- **Abrir en el IDE**: va a la página IDE. Con otro proyecto, muestra la ventana de ese proyecto (y la abre antes si no estaba abierta).
- **Quitar de la barra lateral**: quita el proyecto de la barra lateral. No se borra nada. El proyecto de esta ventana no se puede quitar.

## El menú de una conversación {#menu}

Haz clic con el botón derecho en una conversación de la barra lateral. El menú depende del proyecto al que pertenece.

**Una conversación del proyecto de esta ventana:**

- **Abrir a la derecha** la abre como pestaña en el lado derecho.
- **Referenciar conversación** la pone en el cuadro de mensaje actual. La IA la lee cuando la necesita.
- **Renombrar**, **Anclar arriba** (**Desanclar** si ya está anclada) y **Añadir a favoritos** (**Quitar de favoritos** si ya lo es).
- **Exportar chat**. Solo se ofrece para las conversaciones de esta ventana.
- **Eliminar**.

**Una conversación de otro proyecto:**

- **Abrir a la derecha** y **Referenciar conversación**.
- **Continuar en su ventana** sigue en la ventana propia de ese proyecto.
- **Renombrar**, **Anclar arriba**, **Añadir a favoritos** y **Eliminar**, todo ello hecho en ese proyecto.
- No hay **Exportar chat**.

## Subagentes {#subagents}

Un subagente es una conversación iniciada por otra conversación. Los subagentes aparecen debajo de la conversación que los inició, con un nivel de sangría, en el orden en que empezaron.

- Una conversación con subagentes tiene un botón en su fila. Púlsalo para **Ocultar subagentes**. Mientras están ocultos se muestra cuántos hay, y al volver a pulsar (**Mostrar subagentes**) se despliegan. La página recuerda lo que elegiste.
- Haz clic en un subagente para abrirlo como pestaña en el lado derecho.

## Conversaciones de otros proyectos {#other}

Haz clic en la conversación de otro proyecto en la barra lateral y el área principal la muestra. Puedes leer lo que hizo. Para seguir, solo escribe en el cuadro de mensaje de aquí. La conversación continúa en ese proyecto y la página muestra su avance en directo.

Todo lo que haces aquí se hace en ese proyecto:

- Enviar un mensaje y editar uno anterior.
- Aprobar o rechazar lo que la IA quiere hacer, y **Detener**.
- **Conservar todo** y **Descartar todo** en su barra de cambios.

Si ese proyecto no tiene una ventana abierta, Breezell abre una en segundo plano sin mostrarla. Se cierra sola cuando lleva un rato inactiva: nada se está ejecutando, nadie la está mirando y no hay archivos sin guardar. Para ver su ventana, haz clic con el botón derecho en el proyecto y elige **Abrir en el IDE**.

Los enlaces a archivos de sus respuestas abren los archivos de ese proyecto en la línea correcta.

Para trabajar en la ventana propia del proyecto, haz clic con el botón derecho en la conversación y elige **Continuar en su ventana**.

## El lado derecho {#right}

El lado derecho es el área del editor, como en el IDE. Archivos, pestañas de conversaciones y el navegador integrado pueden estar abiertos uno junto a otro.

- Arrastra una conversación de la barra lateral al lado derecho para verla al lado, o usa **Abrir a la derecha** en su menú.
- El botón de la parte superior de la página (**Mostrar panel derecho** / **Ocultar panel derecho**) lo oculta y lo vuelve a mostrar.
- Arrastra el borde de la barra lateral para cambiar su ancho y haz doble clic en el borde para restablecerlo. El borde del lado derecho también se puede arrastrar para cambiar su tamaño.

## La barra de la cuenta {#account}

En la parte inferior de la barra lateral está la barra de la cuenta:

- Tu avatar, nombre, plan y saldo (los miembros de un equipo no ven el saldo). Al hacer clic se abre el panel de la cuenta.
- El engranaje (**Configuración**) abre los ajustes de Breezell.
- El menú **Más** (los tres puntos) tiene **Gestionar plan**, **Actualizaciones**, **Enviar comentarios** y **Cerrar sesión**.
- Si no has iniciado sesión, muestra **Iniciar sesión** y «Inicia sesión en tu cuenta de Breezell». Púlsalo para empezar a iniciar sesión.

## Espacios de trabajo de varios proyectos {#workspaces}

Cuando has fusionado varios proyectos en una sola ventana (consulta [Grupo del proyecto y memorias compartidas](/es/project-group)), la fila del proyecto de esta ventana dice «Espacio de trabajo de varios proyectos» y enumera junto al nombre los proyectos que contiene.

Una conversación traída de un proyecto miembro muestra ese proyecto como una pequeña etiqueta de color delante del título, en lugar de «[nombre]» dentro del título.

## Avisos de la aprobación automática {#auto-approve}

Aunque la aprobación automática esté activada, algunas acciones se detienen y te preguntan, y la tarjeta ahora explica por qué, por ejemplo: «La aprobación automática está activada, pero este comando puede borrar una carpeta entera, o no se puede saber de antemano qué borra, así que necesita tu confirmación.» Ocurre con:

- Un comando que puede borrar una carpeta entera, o cuyo objetivo de borrado no se puede saber de antemano.
- Un cambio en las reglas, habilidades, memorias o ajustes de MCP de la IA.
- Un cambio en archivos que se ejecutan solos (configuración y hooks de git, ajustes y tareas del espacio de trabajo, perfiles del shell).
- Un cambio en las claves o la configuración de SSH.
- Borrar un espacio de trabajo, la carpeta personal o una carpeta entera fuera del espacio de trabajo.

Estas confirmaciones aparecen igual cuando sigues desde la página Agents la conversación de otro proyecto.

## Límites actuales {#limits}

- En la conversación de otro proyecto solo se envía texto. Los archivos e imágenes adjuntos no se envían.
- En la conversación de otro proyecto no está disponible el botón **Reintentar** de una respuesta fallida.
- Desde una ventana de este equipo no se pueden abrir los enlaces a archivos de un proyecto SSH.
- Con la agrupación por **Estado**, los agentes de otros proyectos aparecen todos en **Otros**, estén trabajando o esperándote.
