---
title: Git
description: "Git en Breezell 1.4.59: commit, registro, apartados, ventana de ramas y push al estilo de IntelliJ IDEA, en la página Agents y en el IDE. Cómo abrirlo, qué proyecto muestra, marcar archivos y fragmentos para confirmar, cambios agrupados por conversación de IA, conflictos de fusión, el registro y el rebase interactivo, los apartados, el push, la ventana de ramas, Actualizar proyecto, la pestaña Git y las teclas del IDE, y los límites actuales."
---

# Git

Breezell 1.4.59 añade Git al estilo de IntelliJ IDEA: marca los archivos que quieres confirmar, o solo partes de un archivo; los archivos que cambian las conversaciones de IA se agrupan por conversación; ve el gráfico de ramas, aparta cambios, mira qué envía un push antes de enviarlo, haz un rebase interactivo y usa una ventana de ramas para hacer checkout, comparar y fusionar. Funciona en la [página Agents](/es/agents-page) y en el IDE.

| Término | Significado |
| --- | --- |
| Marcar | Incluir en el próximo commit. Los cambios sin marcar se quedan en el árbol de trabajo y no se confirman. |
| Fragmento | Un trozo continuo de cambio en un archivo. Puedes marcar solo algunos fragmentos de un archivo. |
| Apartar | Dejar los cambios a un lado para que el árbol de trabajo quede limpio, y recuperarlos más tarde. |
| Upstream | La rama remota que sigue la rama actual, por ejemplo `origin/main`. |

## Cómo abrirlo {#open}

- **Página Agents:** «Git» arriba de la lista de la izquierda; el número a su lado es cuántos archivos de este proyecto han cambiado. Haz clic para abrir Git en el centro de la página; la flecha de arriba a la izquierda («Volver a la conversación») o `Esc` te devuelve.
- **IDE:** ejecuta `Git: Commit…`, `Git: Push…`, `Git: Update Project`, `Git: Show Log`, `Git: Show Shelf` o `Git: Branches…` desde la paleta de comandos (`Ctrl+Shift+P`) para abrir una pestaña llamada «Git», igual que en la página Agents.
- Estés donde estés, `` Alt+` `` abre «Operaciones de Git»: «Commit…», «Push…», «Actualizar proyecto», «Ramas…», «Registro», «Apartados», «Fetch».

## Qué proyecto muestra {#project}

- Git sigue la conversación que estás viendo: para una conversación del proyecto de esta ventana es ese repositorio; para la conversación de otro proyecto es el repositorio de ese proyecto, y su nombre aparece arriba (texto emergente «Git de "*nombre del proyecto*", desde su ventana»). Los proyectos de WSL y SSH funcionan igual.
- Si ese proyecto no tiene una ventana abierta, Breezell abre una en segundo plano sin mostrarla; mientras tanto la página dice «Conectando con la ventana de "*nombre del proyecto*"…».
- Si un proyecto tiene varios repositorios, haz clic en el nombre del repositorio («Cambiar de repositorio») para elegir uno.
- Una carpeta que todavía no es un repositorio Git muestra «Este proyecto aún no es un repositorio Git.» y un botón «Inicializar repositorio».

La fila de arriba, de izquierda a derecha:

- El nombre de la rama: abre la [ventana de ramas](#branches). El estado de sincronización a su lado es el de la barra de estado del IDE y hace lo mismo al hacer clic.
- «Actualizar proyecto» (la flecha hacia abajo): consulta [Actualizar proyecto](#update).
- «Push…» (la flecha hacia arriba): consulta [Push](#push).
- «Más acciones de Git» (⋯): lo mismo que el menú «⋯» del Control de código fuente del IDE, por ejemplo pull, remotos, etiquetas y worktrees.

Debajo hay tres pestañas: «Commit» (con el número de cambios), «Registro» y «Apartados».

## Commit {#commit}

### Marcar lo que se confirma {#check}

- Cada archivo tiene una casilla: «Marcar: incluir en el próximo commit», «Desmarcar: no incluir en el próximo commit». La casilla del título de un grupo marca o desmarca todo el grupo; si solo algunos archivos están marcados, muestra un guion.
- Para confirmar solo parte de un archivo, haz clic en la flecha antes de su nombre («Mostrar fragmentos (commit de parte del archivo)») y marca los fragmentos que quieras («Marcar este fragmento: incluirlo en el próximo commit»). Los archivos nuevos, eliminados y binarios no tienen fragmentos y se marcan enteros.
- Haz clic en el nombre de un archivo para ver sus cambios: en el lado derecho de la página en la página Agents, en el área del editor en el IDE.
- Clic derecho en un archivo para las acciones propias del IDE (como descartar cambios), además de «Apartar…» y «Mostrar historial» (el Registro, con solo los commits de ese archivo).

### Grupos {#changelists}

- **Agent · *título de la conversación*:** los archivos que cambian las conversaciones de IA, un grupo por conversación. Un archivo cambiado por varias conversaciones está en el grupo de la más reciente. Así puedes confirmar solo lo que hizo una conversación.
- **Cambios:** los demás archivos cambiados.
- **Archivos sin control de versiones:** archivos nuevos que Git todavía no sigue, plegados al principio.

### Mensaje y commit {#message}

- Escribe el mensaje en «Mensaje de confirmación» y haz clic en «Confirmar» (`Ctrl+Enter`, en macOS `Cmd+Enter`). «Commit y push…» abre [Push](#push) después del commit.
- Los dos botones junto al cuadro: «Historial de mensajes de commit» (elige un mensaje que usaste antes) y «Escribir el mensaje de commit con IA (a partir de los cambios marcados)».
- «Modificar el último commit»: si está marcado, los cambios marcados van al último commit en vez de a uno nuevo, y su mensaje pasa al cuadro.
- «Apartar cambios…»: deja los archivos marcados (todos los cambios si no hay ninguno marcado) en los [apartados](#shelf).
- «Revisión con IA de los cambios marcados»: abre una conversación nueva con la petición de revisión ya en su cuadro de mensaje, para que la leas y la envíes. La IA señala problemas y no cambia archivos.

### Conflictos de fusión {#conflicts}

Cuando una fusión, un rebase, un cherry-pick o una reversión encuentra conflictos, arriba de la pestaña «Commit» aparece «Conflictos de fusión» con el número de archivos:

- «Resolver…» junto a cada archivo abre el editor de fusión. Los archivos de otro proyecto se resuelven en su ventana («Resolver en su ventana…»).
- «Que la IA resuelva los conflictos»: abre una conversación nueva que pide a la IA conservar lo que ambos lados deban conservar y quitar las marcas de conflicto. No hace commit ni continúa la fusión o el rebase por sí sola.
- Cuando todo está resuelto, haz clic en «Continuar». Un rebase o un cherry-pick también puede «Omitir» el commit actual; «Anular» vuelve a como estaban las cosas antes de empezar.

## Registro {#log}

- Los commits con el gráfico de ramas; al desplazarte hacia abajo se cargan los más antiguos.
- Filtros arriba: «Texto o hash», «Autor», «Ruta», y el historial de qué rama mostrar («Historial de qué rama»): «Todas las ramas», «Rama actual» o una rama.
- Haz clic en un commit para ver sus detalles y los archivos cambiados junto a la lista; haz clic en un archivo para ver qué cambió ese commit en él. «Comparar con local» lista en cambio los archivos que difieren entre ese commit y tu árbol de trabajo.

Clic derecho en un commit:

| Elemento | Qué hace |
| --- | --- |
| «Copiar número de revisión» | Copia el hash del commit. |
| «Checkout de esta revisión» | Hace checkout de ese commit (sin rama). |
| «Nueva rama aquí…», «Nueva etiqueta aquí…» | Crea una rama o una etiqueta que empieza en ese commit. |
| «Cherry-pick» | Aplica los cambios de ese commit a la rama actual. |
| «Revertir commit» | Añade un commit que deshace los cambios de ese commit. |
| «Restablecer la rama actual aquí» | «Soft: conservar los cambios, marcados», «Mixed: conservar los cambios, sin marcar», «Hard: descartar los cambios» (pregunta otra vez). |
| «Deshacer commit» | Solo en el commit más nuevo de la rama actual: lo quita, sus cambios vuelven marcados y su mensaje vuelve al cuadro. |
| «Editar mensaje del commit…», «Eliminar commit…» | Cambia el mensaje de ese commit, o lo quita, con un [rebase interactivo](#rebase). |
| «Rebase interactivo desde aquí…» | Consulta [Rebase interactivo](#rebase). |

Cuando eliges «Comparar con "*rama actual*"» en la [ventana de ramas](#branches), el Registro muestra solo los commits que tiene esa rama y le faltan a la actual («En "*rama*", no en "*rama actual*"»); «Volver a la rama» devuelve el Registro de siempre.

### Rebase interactivo {#rebase}

- «Rebase interactivo desde aquí…» en el Registro lista todos los commits desde ese hasta el más nuevo.
- Elige qué hacer con cada uno: «Pick», «Cambiar mensaje», «Squash», «Fixup» o «Eliminar», y cambia el orden con «Subir» y «Bajar». Para cambiar mensaje y squash puedes escribir ahí mismo el «Nuevo mensaje» o el «Mensaje del commit combinado».
- Haz clic en «Iniciar rebase». Los cambios que no hayas confirmado se apartan antes y se recuperan después. Si aparecen conflictos, trátalos como en [Conflictos de fusión](#conflicts).

## Apartados {#shelf}

- Lista los cambios apartados y sus archivos.
- «Recuperar»: devuelve los cambios al árbol de trabajo y los quita de los apartados.
- «Aplicar y conservar»: los devuelve y deja una copia en los apartados.
- «Eliminar»: los tira (pregunta otra vez; los cambios eliminados se pierden).

## Push {#push}

- «Push…» lista primero los commits que se van a enviar. Cuando la rama actual aún no tiene rama remota, se marca como «rama nueva».
- Cuando el remoto tiene commits que no están aquí, avisa de que el push puede rechazarse; puedes hacer clic antes en «Actualizar proyecto».
- Opciones: «Enviar etiquetas» y «Push forzado (with lease)», que fuerza el push solo mientras el remoto sigue donde lo viste por última vez, así que nunca sobrescribe commits que alguien acaba de enviar.
- Cuando no hay nada que enviar, dice «Nada que enviar: la rama está al día con su remoto.»

## Ventana de ramas {#branches}

Haz clic en el nombre de la rama de arriba, ejecuta `Git: Branches…` o elige «Ramas…» en «Operaciones de Git»:

- Primero van las acciones habituales: «Actualizar proyecto», «Commit…», «Push…», «Nueva rama…», «Checkout de etiqueta o revisión…».
- Después «Recientes», «Locales» y «Remotas». La estrella junto a una rama local es «Añadir a favoritos»; los favoritos van primero entre las ramas locales.
- Una rama muestra a qué distancia está de su remoto (↑ commits aún sin enviar, ↓ commits aún sin traer); «upstream eliminado» cuando se borró su rama remota.

Elige una rama para ver qué puedes hacer con ella:

- «Checkout»: una rama remota se baja como una rama local con el mismo nombre.
- «Nueva rama desde "*rama*"…», «Checkout y rebase sobre "*rama actual*"», «Comparar con "*rama actual*"», «Mostrar diferencias de "*rama*" con el árbol de trabajo».
- «Rebase de "*rama actual*" sobre "*rama*"», «Fusionar "*rama*" en "*rama actual*"».
- «Renombrar…» y «Eliminar»; para una rama remota, «Eliminar del remoto». Eliminar una rama que no está fusionada del todo pregunta una vez más.

Cuando un checkout sobrescribiría tus cambios locales, Breezell ofrece «Smart Checkout»: aparta los cambios, hace el checkout y los recupera.

## Actualizar proyecto {#update}

«Actualizar proyecto» hace fetch y luego pone la rama actual al día con su upstream; los cambios que no hayas confirmado se apartan mientras tanto y se recuperan. Termina con «Actualizado: llegaron N commits.» o «Ya está al día.»

Por defecto fusiona. Para hacer rebase en su lugar, busca `breezell.git` en Configuración y pon Update Method en rebase.

## Teclas en el IDE {#keys}

Para las teclas de Git de IntelliJ IDEA, busca `breezell.git` en Configuración y marca Idea Keymap (desactivado por defecto):

| Tecla | Acción |
| --- | --- |
| `Ctrl+K` | Commit |
| `Ctrl+Shift+K` | Push |
| `Ctrl+T` | Actualizar proyecto |
| `Alt+9` | Registro |
| `Alt+0` | Commit |

En macOS, `Cmd` ocupa el lugar de `Ctrl`; Registro y Commit son `Cmd+9` y `Cmd+0`, y «Operaciones de Git» es `Ctrl+V`. Con estas teclas activadas, sustituyen a los acordes `Ctrl+K` del propio IDE y a `Ctrl+T`. `` Alt+` `` no necesita ningún ajuste y siempre funciona.

## Límites actuales {#limits}

- Los archivos muy grandes y los binarios no muestran sus cambios; los archivos demasiado grandes no se pueden dividir en fragmentos y se marcan enteros.
- Cuando han cambiado muchísimos archivos, solo se lista una parte y el resto se cuenta; la lista completa está en el Control de código fuente del IDE.
- No se puede hacer un rebase interactivo si hay commits de fusión en su rango; el primer commit no se puede combinar con uno anterior (squash o fixup) y no se puede deshacer.
- El Git de otro proyecto pasa por la ventana de ese proyecto. Cuando esa ventana se ha cerrado, la página dice «La ventana de "*nombre del proyecto*" se cerró.»; haz clic en «Reintentar» para volver a conectar.
- Los sistemas de control de código fuente que no son Git tienen una vista sencilla: «Mensaje de confirmación», «Confirmar» y la lista de cambios.
