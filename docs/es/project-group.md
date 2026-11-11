---
title: Grupo del proyecto y memorias compartidas
description: "Reúne en un grupo los proyectos abiertos en ventanas separadas para que la IA trabaje entre ellos: crear un grupo, la página del grupo y la cápsula sobre el campo de entrada, los cuatro permisos de la IA, memorias y conversaciones compartidas, entregar una tarea, unir en una ventana y qué pasa cuando se cierra una ventana."
---

# Grupo del proyecto y memorias compartidas

Breezell puede reunir en un grupo **varios proyectos abiertos cada uno en su ventana**. Una vez agrupados, la IA de una ventana puede leer los archivos de los demás proyectos, recordar sus memorias, leer sus conversaciones y entregar una tarea a sus ventanas. Tú decides, interruptor por interruptor, hasta dónde se permite todo eso.

Esta guía describe Breezell 1.4.55 (los grupos llegaron en la 1.4.54; la cápsula y los cuatro interruptores son nuevos en la 1.4.55). Explica cómo crear un grupo, dónde encontrarlo, qué hace cada interruptor, cómo se comparten memorias y conversaciones, cómo unir un grupo en una ventana y volver a separarlo, cómo se comportan los proyectos de otros entornos (WSL, SSH) y qué pasa cuando se cierra una ventana.

## Qué es un grupo {#what}

Una ventana de Breezell solo llega a la carpeta que tiene abierta. Cuando un proyecto se divide en frontend y backend, o en varios repositorios, la IA suele ver solo la mitad: puede cambiar la llamada en el frontend, pero no puede leer qué cambió en el backend. Un grupo conecta ventanas que ya están abiertas:

- No hace falta meter los proyectos en una sola carpeta ni abrirlos como un único espacio de trabajo de varias raíces.
- Los proyectos del grupo pueden estar en Windows, en WSL y por SSH. Una ventana sigue llegando a un solo entorno, pero un grupo puede trabajar entre entornos.
- No se mueve ni se copia nada. Un grupo solo le dice a Breezell que esos proyectos van juntos.

| Término | Significado |
| --- | --- |
| Grupo | Un conjunto de proyectos con nombre. Un proyecto pertenece a un solo grupo a la vez. |
| Miembro | Un proyecto del grupo. Desde cualquier ventana, el proyecto de esa ventana es «este proyecto» y los demás son los otros miembros. |
| Permisos de la IA | Cuatro interruptores que dicen qué puede hacer la IA de un miembro con los demás: **Leer archivos**, **Cambiar archivos**, **Compartir memorias**, **Compartir conversaciones**. |
| Cápsula | La pequeña píldora sobre el campo de entrada que muestra el grupo y sus permisos. |
| Página del grupo | La pestaña del editor titulada «Grupo del proyecto y memorias compartidas», donde se configura todo lo del grupo. |

## Crear un grupo {#make}

### Dejar que Breezell lo proponga {#offer}

Cuando un mensaje tuyo menciona otro proyecto **abierto** —por su nombre, una ruta, un archivo, una interfaz que ofrece o un puerto en el que funciona—, aparece sobre el campo de entrada una tarjeta con el título «¿Poner estos proyectos en un grupo?». Debajo del título se indica el motivo, por ejemplo: *Mencionaste «breezell-api».*

La tarjeta nunca bloquea el turno. La IA responde como siempre y no cambia nada hasta que pulsas uno de sus botones.

- La primera fila siempre está marcada: **este proyecto**, la ventana en la que estás.
- Debajo están los demás proyectos abiertos que Breezell reconoce. El que mencionaste ya está marcado y puedes marcar más.
- El **Nombre del grupo** se puede editar. Es el nombre que se muestra en la tarjeta del grupo en la lista de proyectos. Si el proyecto mencionado ya pertenece a un grupo, la tarjeta pregunta en su lugar «¿Añadir los proyectos marcados al grupo «*nombre*»?» y no tiene campo de nombre.
- **Agrupar** reúne los proyectos en un grupo y deja todas las ventanas abiertas.
- **Agrupar y unir en una ventana** los agrupa y los une enseguida (consulta [Unir en una ventana](#merge)). Cuando no se puede unir, el motivo aparece bajo el botón y el botón queda en gris.
- **Ahora no** lo omite esta vez. El botón redondo de cerrar hace lo mismo. La propuesta vuelve la próxima vez que se dé la misma situación.
- **No volver a preguntar por estos** recuerda esos proyectos y deja de proponerlos.

Si agrupas los proyectos mientras aún se está escribiendo una respuesta, la IA conoce el grupo antes de su siguiente paso y se te avisa de que las respuestas anteriores no lo usaron, para que puedas preguntar de nuevo si hace falta.

### Crearlo en la lista de proyectos {#list}

Sobre el explorador hay dos pestañas, **Actual** y **Todos**. Cambia a **Todos** para ver la lista de proyectos con sus grupos. Bajo la lista hay dos botones de borde discontinuo: **Añadir grupo** y **Añadir proyecto**.

- **Añadir grupo** crea un grupo vacío llamado «Nuevo grupo» y pone su nombre directamente en modo de edición. `Enter` confirma, `Esc` cancela.
- Para meter un proyecto en un grupo, arrastra su fila sobre la tarjeta del grupo. O haz clic derecho en el proyecto, elige **Mover al grupo** y escoge un grupo, o **Nuevo grupo…** para crear uno y mover el proyecto a él. Un grupo vacío muestra «Arrastra proyectos aquí».
- Para sacar un proyecto, haz clic derecho en él, elige **Mover al grupo** y luego **Quitar del grupo**.
- Una tarjeta de grupo se lee de izquierda a derecha: una muestra de color, el nombre, un icono de enlace (visible cuando el grupo comparte memorias), el número de proyectos y una flecha. Haz clic en el encabezado de la tarjeta para contraerla o expandirla. Haz doble clic en el nombre para renombrarlo.
- Haz clic derecho en el encabezado de un grupo para ver su menú: **Renombrar grupo**, **Nuevo grupo…**, **Añadir carpetas al grupo…**, **Compartir memorias** (un interruptor) y **Disolver grupo**.

**Añadir carpetas al grupo…** añade carpetas cuyas ventanas no tienen que estar abiertas. Las carpetas a las que esta ventana llega, la IA también puede leerlas.

### Crearlo en la página del grupo {#create}

Cuando el proyecto actual aún no está en ningún grupo, la página del grupo muestra una sola sección, **Nuevo grupo**:

- Escribe un **Nombre del grupo** (al principio es el nombre del proyecto).
- Marca las otras ventanas abiertas que quieras incluir y pulsa **Crear con las ventanas marcadas**. Si no hay otra ventana abierta, la página dice «No hay otras ventanas de proyecto abiertas».
- O pulsa **Crear solo con este proyecto** para empezar solo con este proyecto y añadir los demás después.
- **Añadir carpetas al grupo…** añade carpetas cuyas ventanas no tienen que estar abiertas.
- Debajo, **Otros grupos** enumera los grupos que ya existen. **Añadir** mete este proyecto en uno. **Disolver grupo** lo elimina; el botón pasa a decir «Pulsa otra vez para disolver» y hace falta una segunda pulsación.

## Abrir la página del grupo {#open}

Pulsa el botón del libro a la derecha de **Actual** y **Todos**, sobre el explorador (marcado con 1). Está en cualquiera de las dos pestañas mientras la ventana tenga un proyecto abierto. Su información emergente muestra el nombre del grupo y qué permisos están activados, y su aspecto cambia cuando el proyecto está en un grupo.

<BzXiangmuliebiao gaoliang="book" biaoji="1" />

La página se abre como una pestaña del área del editor, titulada «Grupo del proyecto y memorias compartidas». Hay tres formas más de llegar:

- Ejecuta «Grupo del proyecto y memorias compartidas» desde la paleta de comandos.
- Si sacaste la vista Carpetas del explorador, su propia barra de título lleva el mismo botón.
- En la cápsula desplegada sobre el campo de entrada, pulsa **Página del grupo** (consulta [La cápsula](#capsule)).

## La página del grupo, sección por sección {#page}

Cuando el proyecto está en un grupo, la página muestra **Grupo**, **Miembros**, **Permisos de la IA**, **Conversaciones del grupo** y **Ventana**, y al final **Salir del grupo** y **Disolver grupo**.

**Grupo** muestra el nombre. Pulsa el lápiz (**Cambiar nombre**) para cambiarlo; `Enter` confirma, `Esc` cancela.

**Miembros** enumera cada proyecto con el entorno en el que está (Windows, WSL o SSH), si es un espacio de trabajo de varias carpetas y su estado. El punto de la izquierda indica el estado:

| Punto | Etiqueta | Significado |
| --- | --- | --- |
| Azul | Esta ventana | El proyecto que estás viendo. |
| Verde | Ventana abierta | La ventana de ese proyecto está abierta. |
| Amarillo | Ventana cerrada, archivos accesibles desde aquí | La ventana está cerrada, pero esta ventana aún llega a su carpeta. |
| Gris | Ventana cerrada | La ventana está cerrada y no se llega a sus archivos desde aquí. |

Un miembro con la ventana abierta tiene **Ir a la ventana**, que trae su ventana al frente. Un miembro cuya ventana no está abierta tiene **Abrir**, que la abre. Todos los demás miembros tienen **Quitar**. Mientras la IA de un miembro trabaja, una línea bajo su nombre dice qué está haciendo, por ejemplo «La IA está cambiando código» o «La IA se detuvo y te espera en su ventana».

**Añadir ventanas abiertas** muestra las otras ventanas abiertas para que marques las que quieras y **Añadir** las incorpora. **Añadir carpetas al grupo…** añade carpetas que no tienen ventana.

**Permisos de la IA** contiene los cuatro interruptores. Surten efecto y se guardan en el momento en que los cambias. Consulta [Qué hace cada interruptor](#permissions).

**Conversaciones del grupo** enumera las conversaciones que comparte cada otro miembro, con **Ver**, **Adjuntar a mi próximo mensaje** y **Continuar aquí** en cada conversación, y **Entregar…** en cada miembro cuya ventana esté abierta. Hace falta que **Compartir conversaciones** esté activado; si no lo está, la sección solo dice qué activar. Consulta [Compartir conversaciones](#chats).

**Ventana** contiene **Unir en una ventana** o, si el grupo ya está unido, **Ir a la ventana unida** y **Separar en ventanas**. Consulta [Unir en una ventana](#merge).

**Salir del grupo** saca este proyecto del grupo. **Disolver grupo** elimina el grupo en sí. Los proyectos se quedan, simplemente dejan de estar agrupados. Pide una segunda pulsación.

## La cápsula sobre el campo de entrada {#capsule}

En una ventana cuyo proyecto comparte grupo con al menos otro proyecto, aparece una pequeña cápsula sobre el campo de entrada (marcada con 1). No se muestra para un grupo que solo contiene este proyecto; la página de ese grupo está a un clic en el explorador.

<BzJiaonang gaoliang="jiaonang" biaoji="1" />

Contraída, la cápsula muestra el nombre del grupo, «*N* proyectos», cuatro iconos pequeños para los cuatro permisos (atenuados cuando el permiso está desactivado; pasa el cursor por uno para ver su nombre y si está activado o desactivado) y, cuando la IA de otra ventana está ocupada, una línea como «breezell-api: La IA está cambiando código». Para un grupo unido también dice «unidos en una ventana».

Pulsa la cápsula para desplegarla:

- Cada otro miembro con su estado y, si su IA está ocupada, lo que hace. Todos los miembros tienen **Ir a la ventana** (o **Abrir** cuando su ventana está cerrada). **Conversaciones (*N*)** abre las conversaciones compartidas de ese miembro y **Entregar…** le entrega una tarea; ambos aparecen solo mientras **Compartir conversaciones** está activado, y **Entregar…** solo mientras la ventana de ese miembro está abierta.
- **Permisos de la IA** como cuatro interruptores que puedes cambiar ahí mismo. Cuando los cuatro están desactivados, la cápsula lo dice: el grupo entonces solo ordena la lista de proyectos y la IA de un proyecto no sabe nada de los demás.
- **Página del grupo** abre la página del grupo.

Lo que la cápsula muestra de la IA de otra ventana es general por defecto («La IA está leyendo archivos», «La IA está ejecutando un comando»). Los nombres de archivo, los comandos y los títulos de las conversaciones aparecen solo mientras **Compartir conversaciones** está activado.

## Qué hace cada interruptor {#permissions}

Un grupo nuevo empieza con **Leer archivos** activado y los otros tres desactivados.

**Leer archivos.** La IA puede leer y buscar en los archivos de los demás miembros. Sabe qué proyectos hay en el grupo y cómo llegar a ellos, así que puedes hablar simplemente del «backend» y lo busca allí. Si lo desactivas, el grupo solo ordena la lista de proyectos; las memorias y las conversaciones se siguen compartiendo según sus propios interruptores. Desactivarlo también desactiva **Cambiar archivos**.

**Cambiar archivos.** La IA también puede cambiar los archivos de los demás miembros y ejecutar comandos en sus carpetas, con las mismas aprobaciones que los cambios de este proyecto, y los cambios se pueden deshacer. Activarlo también activa **Leer archivos**. Solo se aplica a los proyectos a los que llega esta ventana; para un proyecto de otro entorno, el cambio se entrega en su lugar (consulta [Proyectos de otros entornos](#environments)). Actívalo solo cuando te parezca bien que la IA toque varios proyectos a la vez.

**Compartir memorias.** Los proyectos recuerdan las memorias de los demás. Consulta [Compartir memorias](#memories). El mismo interruptor está en el menú de clic derecho del encabezado de un grupo en la lista de proyectos.

**Compartir conversaciones.** La IA de cada ventana puede leer las conversaciones recientes de las ventanas de los demás miembros y sabe qué está haciendo su IA. Tú también puedes explorar esas conversaciones, llevar una a un mensaje y entregar una tarea. Consulta [Compartir conversaciones](#chats). Al desactivar el interruptor, esas partes de la página y de la cápsula se ocultan o se deshabilitan, y se avisa una vez a la IA de que las conversaciones ya no se comparten.

Cada interruptor pertenece al grupo, no a una ventana, así que vale para todos los miembros.

## Compartir memorias {#memories}

Con **Compartir memorias** activado, los proyectos del grupo recuerdan las memorias de los demás. Cuando la IA de una ventana busca lo que ya sabe, también encuentra memorias aprendidas en los otros proyectos del grupo. Cada memoria sigue perteneciendo al proyecto que la aprendió: no se copia nada y deja de recordarse en otros sitios en cuanto desactivas el interruptor o el proyecto sale del grupo.

En **Box**, bajo **Super Memory** y luego **Biblioteca de memoria**, aparece un filtro de origen cuando se comparten memorias: **Todas las fuentes**, **Este proyecto** y **Proyectos del grupo**. Una memoria que vino de otro proyecto se marca como «De *nombre del proyecto*». Una memoria de otro proyecto no se puede fijar aquí; la fijación pertenece al proyecto que la aprendió.

## Compartir conversaciones {#chats}

Con **Compartir conversaciones** activado, cada miembro mantiene una lista de sus conversaciones recientes que los demás pueden ver, y se informa de ellas a la IA de las otras ventanas. Lee una cuando lo necesita.

Tú también puedes usar esas mismas listas, desde la página del grupo o desde **Conversaciones (*N*)** en la cápsula. En la cápsula eliges primero un proyecto y luego una conversación. Para cada conversación hay tres opciones:

- **Ver** abre la conversación como una pestaña de solo lectura en el área del editor, una pestaña por conversación. Muestra la conversación tal como estaba cuando la abriste; elige **Ver** otra vez para actualizarla. Las llamadas a herramientas se enumeran por nombre y entrada, sin sus resultados. Al cerrar la pestaña nunca se te pide guardar.
- **Adjuntar a mi próximo mensaje** pone una etiqueta de esa conversación en el campo de entrada. La IA la lee cuando lo necesita.
- **Continuar aquí** inicia una conversación nueva en esta ventana con esa conversación adjunta, para que sigas desde donde se quedó la otra.

Si una conversación ya no se puede leer o ya no está entre las compartidas, se te avisa.

### Entregar una tarea {#handoff}

**Entregar…** da una tarea a la ventana de otro miembro. Está en la cápsula y en la página del grupo, para los miembros cuya ventana esté abierta, y solo mientras **Compartir conversaciones** esté activado.

1. Elige el proyecto, si no empezaste desde un miembro. Solo se ofrecen las ventanas abiertas.
2. Escribe en qué debe trabajar.
3. Un aviso dice «Entregado a *proyecto*, trabajando…» con un botón «Ir a *proyecto*» para su ventana. La IA de la otra ventana empieza a trabajar allí.
4. Cuando termina, recibes «*proyecto* terminó: *su respuesta*» o «*proyecto* no terminó: *el motivo*». Si te necesita a medio camino, el aviso dice «*proyecto* te está esperando; mira su ventana.»

La respuesta también se pasa a esta conversación, así que la IA de aquí puede usarla en tu siguiente mensaje.

## Unir en una ventana {#merge}

Unir abre los proyectos del grupo como **una ventana con varias carpetas**. Sus ventanas propias se cierran y sus conversaciones se copian, cada título marcado con el proyecto de donde vino. Empieza desde **Unir en una ventana** en la sección **Ventana** de la página del grupo, o desde **Agrupar y unir en una ventana** en la tarjeta de propuesta. Se te pide confirmar: «¿Unir *proyectos* en una ventana? Sus ventanas se cierran y sus conversaciones se copian a la nueva.» Si la IA de algún miembro está en marcha, unir cierra su ventana y la detiene; se te avisa antes.

Después, la cápsula dice «unidos en una ventana» y la página del grupo muestra «La ventana del grupo «*nombre*», combinada» con los miembros y **Separar en ventanas**, que deshace el grupo y devuelve las ventanas separadas. Si abres por separado uno de los proyectos miembros mientras la ventana unida está abierta, su página dice «Este grupo está abierto ahora como una sola ventana.» y ofrece **Ir a la ventana unida**.

En una ventana unida, la IA nombra un archivo como «*nombre de la carpeta*/...». Las rutas relativas que no empiezan con un nombre de carpeta, y el terminal, empiezan en la **Carpeta de enfoque**; sigue los archivos en los que trabaja la IA y puedes elegir otra haciendo clic en ella.

Se puede unir en estos casos:

- Todos los proyectos están en este equipo.
- Todos los proyectos están en la misma distribución de WSL.
- Todos los proyectos están en el mismo host SSH.
- Proyectos de Windows junto con los de una distribución de WSL. La ventana unida es una ventana de WSL y las carpetas de Windows entran por las unidades que WSL monta: el acceso a archivos es más lento y la vigilancia de archivos puede retrasarse. Se te dice a qué proyectos afecta.

No se puede unir cualquier otra mezcla de entornos (por ejemplo SSH junto con un proyecto local, o dos distribuciones de WSL distintas), un proyecto que ya es un espacio de trabajo de varias carpetas, ni un grupo con menos de dos proyectos. El motivo aparece bajo el botón de unir y el grupo sigue funcionando entre ventanas separadas.

## Proyectos de otros entornos {#environments}

Una ventana llega a un solo entorno. Aun así, un grupo puede contener a la vez un proyecto de Windows, uno de WSL y uno de SSH.

- **Leer.** Para un proyecto de otro entorno, la ventana propia de ese proyecto lee y busca por ti, así que su ventana tiene que estar abierta. Si no lo está, recibes un aviso con un botón **Abrir** en lugar de una respuesta vacía.
- **Cambiar.** Un cambio en un proyecto de otro entorno nunca se ejecuta desde esta ventana. La IA recibe una negativa y el cambio se entrega allí, para hacerse en la ventana propia de ese proyecto, con las aprobaciones de esa ventana. **Entregar…** es la forma de hacerlo tú mismo.
- **Unir.** Solo las combinaciones que se enumeran en [Unir en una ventana](#merge).

## Cuando se cierra una ventana {#closed}

Cerrar una ventana nunca saca su proyecto del grupo. El grupo lo guarda Breezell en este equipo y el miembro sigue en la lista con otro estado.

- Si esta ventana aún llega a la carpeta del proyecto cerrado, el punto se pone amarillo: «Ventana cerrada, archivos accesibles desde aquí». La IA sigue pudiendo leer los archivos (y cambiarlos, si **Cambiar archivos** está activado). **Entregar…** no se ofrece, porque necesita que la otra ventana esté abierta.
- Si esta ventana no llega a la carpeta, el punto se pone gris: «Ventana cerrada». Cuando la IA intenta llegar a él, recibes un aviso: «La ventana de *proyecto* no está abierta, así que esta ventana no puede llegar a sus archivos.» con un botón **Abrir *proyecto***. También puedes pulsar **Abrir** en la página del grupo o en la cápsula, o **Quitar** para sacar el proyecto.
- La IA de una ventana cerrada deja de mostrar actividad en la cápsula.

## Salir, quitar, disolver {#leave}

- **Quitar** saca a un miembro del grupo. El grupo se queda.
- **Salir del grupo** saca este proyecto del grupo.
- **Disolver grupo** elimina el grupo en sí. Los proyectos, sus conversaciones y sus archivos se quedan; simplemente dejan de estar agrupados. Pide una segunda pulsación.

## Límites {#limits}

- Un grupo se guarda solo en el Breezell de este equipo. No se escribe en las carpetas de tus proyectos, no se sincroniza con tus otros dispositivos y no se comparte con nadie.
- Un proyecto pertenece a un solo grupo a la vez.
- Un grupo no cambia los ajustes, los modelos ni los permisos de herramientas de los proyectos. Los permisos de herramientas siguen viniendo de Opciones de funciones. Con **Acceso a archivos externos** desactivado, los proyectos del grupo a los que llega esta ventana siguen siendo legibles.
- Que la IA llegue a un miembro depende de su ventana y de su entorno; consulta [Cuando se cierra una ventana](#closed).

## Solución de problemas {#trouble}

| Lo que ves | Qué significa | Qué hacer |
| --- | --- | --- |
| Se menciona un proyecto y no aparece la tarjeta | Ese proyecto no está abierto, o antes elegiste «No volver a preguntar por estos» para él. | Abre su ventana o agrúpalo a mano en la lista de proyectos. |
| No hay cápsula sobre el campo de entrada | El proyecto no está en un grupo, o el grupo solo contiene este proyecto. | Añade otro proyecto o abre la página del grupo con el botón del libro. |
| El punto de un miembro es gris | La ventana está cerrada y esta ventana no llega a su carpeta. | Pulsa **Abrir**. |
| La IA no puede leer un proyecto | **Leer archivos** está desactivado, o la ventana de un proyecto de otro entorno está cerrada. | Activa **Leer archivos** o pulsa **Abrir**. |
| Se rechaza un cambio en un proyecto de otro entorno | Allí los cambios nunca se ejecutan desde esta ventana. | Usa **Entregar…** o haz el cambio en la ventana de ese proyecto. |
| La sección de conversaciones te pide activar algo | El grupo no comparte conversaciones. | Activa **Compartir conversaciones**. |
| Falta **Entregar…** en un miembro | Su ventana no está abierta, o **Compartir conversaciones** está desactivado. | Abre su ventana o activa el interruptor. |
| El botón de unir está en gris | Entornos distintos, un espacio de trabajo de varias carpetas o menos de dos proyectos. | Lee el motivo bajo el botón; el grupo funciona igual sin unir. |
| Falta la tarjeta del grupo en la lista de proyectos | Solo la pestaña **Todos** muestra los grupos. | Cambia a **Todos**. |

## Preguntas frecuentes {#faq}

**¿Tienen que ir los proyectos en una sola carpeta?**
No. Agrupar nunca mueve, copia ni une tus archivos.

**¿En qué se diferencia de un espacio de trabajo de varias raíces?**
Un espacio de trabajo de varias raíces mete carpetas en un solo espacio. Un grupo conecta ventanas que siguen separadas y puede abarcar Windows, WSL y SSH. Unir es opcional y acaba siendo una ventana con varias carpetas.

**¿Agrupar aumenta el uso de tokens?**
La IA puede llegar a más archivos, así que puede leer más cuando tu petición lo necesite. Agrupar por sí solo no mete el contenido de otros proyectos en cada turno.

**¿Pueden otras personas ver mi grupo?**
No. Los grupos viven en los ajustes de Breezell de este equipo.

**¿Cuántos proyectos caben en un grupo?**
No hay un límite fijo. Un grupo compensa cuando tratas los proyectos como un solo trabajo; de dos a cinco suele ser lo ideal.

**¿Disolver un grupo borra los proyectos?**
No. Los proyectos, sus conversaciones y sus archivos se quedan; simplemente dejan de estar agrupados.
