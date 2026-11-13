---
editLink: false
next: false
---

# Registro de cambios

## 1.4.58 · Hot Update · 2026-11-13

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en «Actualizaciones», al pie de la barra lateral de Box.

### Lo más destacado

- **Página Agents:** la barra de título tiene un nuevo interruptor «Agents | IDE | Box», y las conversaciones de todos tus proyectos están en una sola página, para leerlas y seguir con ellas sin cambiar de ventana.
- **Seguir con otros proyectos desde aquí:** enviar, aprobar, detener y conservar o deshacer cambios se hacen en ese proyecto; si no tiene ventana abierta, Breezell abre una en segundo plano.
- **La aprobación automática explica el motivo:** un comando que sigue pidiendo confirmación aunque la aprobación automática esté activada ahora explica por qué bajo su tarjeta, y los borrados habituales de archivos por nombre ya no preguntan.
- **Las notas de trabajo ya no se atascan:** cuando las notas no tienen nada nuevo, la IA ya no falla una y otra vez hasta que se la detiene.

### Página Agents

- **Interruptor y arranque:** el interruptor «Agents | IDE | Box» de la barra de título cambia entre las tres páginas. Las ventanas nuevas se abren en la página Agents; después, cada ventana vuelve a abrirse en la página en la que estaba al cerrarse. Si prefieres no empezar ahí, desactívalo en «Configuración».
- **Lista de proyectos:** la lista «Agentes» de la izquierda muestra primero el proyecto de esta ventana, luego los demás proyectos con conversaciones y los que hayas añadido, del más reciente al más antiguo. «Agrupar por» ofrece «Proyecto», «Tiempo» y «Estado», y el buscador de arriba encuentra conversaciones.
- **Añadir proyectos:** el botón de carpeta junto a «Agentes» añade carpetas (de este equipo, de WSL o del entorno remoto al que está conectada la ventana). El «+» junto a cada proyecto inicia allí un agente nuevo; con clic derecho en un proyecto verás «Nuevo agente en» ese proyecto, «Abrir en el IDE» y «Quitar de la barra lateral».
- **Conversaciones de otros proyectos:** continúalas aquí mismo: enviar, editar un mensaje, aprobar, detener y conservar o deshacer cambios se hacen en ese proyecto, y la página se actualiza en directo. Si ese proyecto no tiene ventana abierta, Breezell abre una en segundo plano sin mostrarla y la cierra cuando lleva un tiempo inactiva. Para ver esa ventana, haz clic derecho en el proyecto y elige «Abrir en el IDE».
- **Subagentes:** aparecen bajo la conversación que los inició, con «Ocultar subagentes» y «Mostrar subagentes»; al hacer clic en uno, se abre en una pestaña a la derecha.
- **Menú de la conversación:** «Abrir a la derecha», «Referenciar conversación», «Renombrar», «Anclar arriba», «Añadir a favoritos», «Exportar chat» y «Eliminar». Las conversaciones de otros proyectos tienen además «Continuar en su ventana»; renombrarlas, anclarlas, añadirlas a favoritos y eliminarlas se hace en ese proyecto.
- **Parte derecha y anchos:** la parte derecha es el área del editor: archivos, pestañas de chat y el navegador integrado, uno junto a otro; arrastra una conversación de la lista hacia la derecha para verla junto a las demás. La lista y la parte derecha se redimensionan arrastrando su borde; con doble clic en el borde de la lista vuelve al ancho predeterminado.
- **Barra de cuenta:** el pie de la lista muestra tu imagen, nombre, plan y saldo. El engranaje abre «Configuración»; el menú «⋯» tiene «Gestionar plan», «Actualizaciones», «Enviar comentarios» y «Cerrar sesión».
- **Enlaces a archivos:** en las conversaciones de otros proyectos, los enlaces a archivos de las respuestas se buscan en ese proyecto y se abren en la línea correcta.
- **Espacios de trabajo de varios proyectos:** las conversaciones traídas de un proyecto miembro muestran ese proyecto como una pequeña etiqueta de color en lugar de «[nombre del proyecto]» en el título, y el nombre del espacio de trabajo enumera sus proyectos, para distinguir dos espacios con el mismo nombre.

### Aprobación automática

- **Explica el motivo:** un comando o cambio que sigue necesitando tu confirmación aunque la aprobación automática esté activada ahora explica el motivo bajo su tarjeta: por ejemplo, puede borrar una carpeta entera, no se puede saber de antemano qué borra, o modifica las reglas, habilidades, memorias o ajustes de MCP de la IA.
- **Pregunta menos:** un comando find que borra solo archivos con un nombre dado (por ejemplo `find . -name "*.pyc" -delete`) y un comando que primero va a `cd ~/proyecto` y luego borra una carpeta dentro ya no piden confirmación. Los comandos que borran una carpeta entera, o cuyo destino no se puede leer, siguen preguntando antes.

### Notas de trabajo

- **Ya no se atascan:** cuando las notas de trabajo no tienen nada nuevo, la IA ya no muestra «Working notes attempted» una y otra vez hasta que se la detiene; la tarjeta muestra «Working notes unchanged» y la IA sigue con la tarea.

Consulta [Página Agents](/es/agents-page) para ver la guía completa.

## 1.4.57 · Hot Update · 2026-11-11

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Lo más destacado

- **Los subagentes conservan el modo de su chat principal:** Un subagente iniciado en Entanglement trabaja en Entanglement, uno iniciado en Agent trabaja en Agent, y el selector de modo de su página está bloqueado en lugar de cambiar el chat principal.
- **Las preguntas se hacen en el chat principal:** Las decisiones que te necesitan las pregunta el agente principal en el chat principal; un subagente ya no sigue intentando preguntar.
- **Aviso de aprobación:** Mientras un subagente espera tu aprobación, el chat principal te lo indica sobre su cuadro de mensaje; «Abrir» te lleva a su página.
- **Los complementos pueden trabajar con subagentes:** Listar y iniciar subagentes, enviarles mensajes y cerrarlos.

### Subagentes

- **El modo en que empezó:** Un subagente ahora trabaja en el modo que tenía su chat principal cuando lo inició: uno iniciado en Entanglement trabaja en Entanglement, con su propio Panel de Entanglement; uno iniciado en Agent trabaja en Agent. El modo de complemento elegido entonces también se mantiene. Cambiar el chat principal más tarde ya no modifica a un subagente que ya está trabajando.
- **Un selector de modo bloqueado:** El selector de modo de la página de un subagente muestra su propio modo y bloquea los demás; al elegir otro aparece "Un subagente conserva el modo que tenía el chat principal cuando empezó y no se puede cambiar. Para cambiar el modo, vuelve al chat principal." Antes, cambiar el selector en la página de un subagente cambiaba el chat principal.
- **La página sigue el modo del subagente:** Todo lo que hay en la página de un subagente sigue el modo del propio subagente: el Panel de Entanglement del chat principal y las separaciones que marcan el cambio de modo ya no se ven allí.
- **Las preguntas pasan por el chat principal:** El agente principal pregunta con una tarjeta de pregunta antes de iniciar un subagente. Un subagente que necesita tu decisión a mitad de camino pone la pregunta en su informe, de modo que el agente principal te la hace en el chat principal y le transmite tu respuesta. Antes, un subagente seguía intentando preguntar hasta que se le detenía, y el agente principal te enviaba a la página del subagente, donde no había ninguna pregunta que responder.
- **Aviso de aprobación:** Mientras un subagente espera tu aprobación, el chat principal muestra "El subagente «nombre» espera tu aprobación" sobre su cuadro de mensaje; «Abrir» te lleva a su página para aprobar.

### Complementos

- **Trabajar con subagentes:** Los complementos pueden listar los subagentes de una conversación, iniciar uno, enviarle un mensaje y cerrarlo. Lo que envía un complemento aparece en la página del subagente como "El plugin «nombre»", nunca como tú ni como el agente principal.
- **Se avisa al chat principal:** Cuando un complemento inicia o cierra un subagente, aparece una tarjeta en el chat principal y se avisa al agente principal; este deja el cierre del subagente de un complemento en manos de ese complemento.
- **Límites:** Un complemento no puede volver a poner en marcha un subagente cerrado ni cambiar el modo de un subagente.
- **Abrir conversaciones:** Cuando un complemento pide abrir una conversación que no está en pantalla, ahora se abre; un subagente se abre en su propia pestaña.

Los autores de complementos pueden ver cómo usarlo en «Subagentes», en la página [Complementos](/es/plugins).

## 1.4.56 · Hot Update · 2026-11-11

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Lo más destacado

- **Los subagentes son conversaciones propias:** En Agent y Entanglement, el trabajo que el agente principal entrega a un subagente aparece bajo el chat principal en el historial. Ábrelo para verlo trabajar en el área del editor y escribe para corregirlo; el agente principal ya no espera, y cada subagente informa al terminar.
- **Modelo del subagente:** Los subagentes siguen el modelo del chat; un modelo que pidas se busca solo en la pasarela actual, y eliges tú cuando no está.
- **Razonar ya no se come la respuesta:** Cada modelo recibe el máximo de salida que permite su proveedor, así que un razonamiento largo ya no deja la respuesta vacía.
- **Correcciones:** Aprobaciones de Computer Use sin nada que pulsar, "Breezell could not load its prompts" en el primer chat tras una actualización y "This chat failed to load" en las pestañas de chat tras reiniciar.

### Subagentes

- **Una conversación propia:** En Agent y Entanglement, el trabajo que el agente principal entrega a un subagente ahora es una conversación aparte. Lleva la etiqueta «Subagente» en el historial y cuelga de su chat principal («Contraer subagentes» / «Expandir subagentes»). Un subagente que trabaja tiene una línea discontinua a la izquierda; el que no trabaja se ve atenuado.
- **Se abre en el área del editor:** Al pulsar un subagente, su conversación se abre en el área del editor y la barra lateral pasa al chat principal. Arriba de la página se ve su estado (Trabajando, Esperando aprobación, Inactivo, Interrumpido, Cerrado), con «Volver al chat principal», «Detener» y «Cerrar subagente».
- **Corrígelo directamente:** La página de un subagente tiene su propio cuadro de mensaje. Lo que escribes le llega tras su paso actual, o enseguida con «Enviar ahora».
- **Qué puede hacer:** Leer, editar y ejecutar comandos con las mismas herramientas que el agente principal (salvo Computer Use), desde la carpeta de enfoque del chat principal. En un grupo de proyectos sabe qué hace la IA de las otras ventanas del grupo, como el agente principal, y con «Compartir conversaciones» activado puede leer las conversaciones del grupo.
- **El agente principal no espera:** Puedes seguir hablando con el agente principal mientras los subagentes trabajan. Cada vez que un subagente termina una parte del trabajo, informa; un agente principal libre continúa por sí solo, y uno ocupado ve el informe en su siguiente paso. El chat principal muestra tarjetas como "El subagente «nombre» terminó su trabajo", con «Abrir» y «Ver informe».
- **Escribir, leer y cerrar:** El agente principal puede escribir a un subagente, leer su conversación o cerrarlo. Cuando pulsas tú «Cerrar subagente», se le avisa al agente principal. Un subagente cerrado se detiene, y su conversación sigue en el historial.
- **Cuántos y borrado:** Hasta 5 subagentes de un mismo chat principal trabajan a la vez. Borrar el chat principal borra sus subagentes; Detener en el chat principal no los detiene.
- **Retirar un mensaje:** Retirar un mensaje del chat principal retira también los subagentes iniciados después: se detienen y cierran, y sus cambios en archivos se deshacen. La confirmación los lista, p. ej. "Subagente «nombre» (2 archivos)".
- **Cambios y revisión:** Los archivos que cambia un subagente aparecen en la barra de cambios del chat principal, con «Descartar todo» y «Conservar todo», y pasan por Cross-Check. «Revisar» en la página de un subagente muestra los cambios de ese subagente.
- **Modo Teams:** Sin cambios.

### Modelo del subagente

En Box ▸ Opciones de funciones ▸ Modelos ▸ Modelos dedicados ▸ Modelo del subagente, la elección de modelo aparte ahora es un interruptor.

- **Activado (por defecto):** Los subagentes usan el modelo actual del chat. Cuando pides un modelo concreto, se busca solo en la pasarela actual; si no está allí o coinciden varios, una tarjeta "Elige un modelo para el subagente «nombre»" te pide elegir uno, y luego «Iniciar» (o «No iniciar»). Un modelo que elegiste se reutiliza en el mismo chat.
- **Desactivado:** Cada subagente nuevo espera a que elijas su modelo.

### Chat

- **Razonar ya no se come la respuesta:** El razonamiento y la respuesta comparten un límite de salida. Muchos modelos recibían cerca de la mitad de lo que permiten, así que un razonamiento largo lo agotaba y la respuesta llegaba vacía. Ahora cada modelo recibe el máximo de salida que permite su proveedor, por ejemplo Claude, DeepSeek, GLM, Grok, Qwen, Doubao y Kimi.
  - Tras una respuesta cortada, la siguiente solicitud deja más espacio.
  - Cuando un proveedor rechaza el tamaño, la solicitud se reenvía con el tamaño que acepta.
  - Cuando un saldo de OpenRouter solo cubre una respuesta más corta, la solicitud se reenvía con esa longitud en lugar de fallar.
- **Botones de aprobación de Computer Use:** Los clics, la escritura, las teclas, los arrastres y la apertura de apps que esperan tu aprobación vuelven a mostrar "Apply" y "Reject". En 1.4.55 solo mostraban "(Awaiting user permission...)" sin nada que pulsar, y el turno quedaba atascado.
- **Corregido:**
  - Con tus propias claves de API, el primer chat tras una actualización podía fallar con "Breezell could not load its prompts".
  - «Descartar todo» en el chat principal dejaba en disco un archivo creado por un subagente que llevaba un rato terminado, mientras la barra de cambios se vaciaba. Los miembros de Teams tenían el mismo problema tras acabar su equipo; también está corregido.

### Editor

- **Las pestañas de chat se cargan al instante:** Al volver a iniciar Breezell, los chats abiertos en pestañas del editor (también las páginas de subagentes) se cargan directamente, en vez de mostrar "This chat failed to load" y "Retry".
- **Las pestañas de chat siguen delante:** Con «Abrir archivo automáticamente al editar» activado, un archivo que edita la IA ya no se abre sobre la pestaña de chat que estás leyendo.
- **Corregido:** En una ventana WSL o remota, un archivo creado por la IA después de pulsar «Descartar todo» no aparecía en la barra de cambios.

## 1.4.55 · Hot Update · 2026-11-11

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Lo más destacado

- **Guía para nuevos usuarios:** Los usuarios nuevos que aún no han conectado su propia API ven una breve guía: Box, los modelos oficiales, dónde conectar tu propia clave o un relay, y el menú para cambiar de modelo. Para verla otra vez, abre «Guía para nuevos usuarios» en el menú Help.
- **Forma de trabajar:** Breezell lee tus propios mensajes para saber cómo prefieres que trabaje (preguntar menos, confirmar antes de cambiar archivos, respuestas más breves), pero no cambia nada hasta que dices que sí.
- **Más modelos:** Compatibilidad con Claude Fable 5.2 y Claude Mythos 5.2 (incluido Fast), modelos nuevos en OpenRouter y en Meta, la opción «Plan» en Qwen y generación de imágenes con Seedream 5.5.
- **Varias claves y direcciones para un mismo proveedor compatible con OpenAI,** con la lista de modelos siguiendo la clave elegida.
- **Grupos de proyectos:** Una cápsula sobre el cuadro de mensaje, cuatro permisos de la IA y conversaciones compartidas dentro del grupo. Consulta [Grupo del proyecto y memorias compartidas](/es/project-group).
- **Menos reintentos inútiles en el chat:** Si un modelo gasta todo su límite de salida pensando, se le pide una vez que piense brevemente y después se detiene con una sugerencia, en lugar de tres reintentos cobrados. Las llamadas a herramientas que algunos modelos escriben como texto ahora se ejecutan.
- **Pregunta antes de cambios arriesgados:** Aunque tengas activado «Aprobar ediciones automáticamente», Breezell pregunta antes de tocar la configuración de MCP, los git hooks, los perfiles de shell, los archivos de credenciales y similares. Las páginas del navegador de Breezell y Computer Use también preguntan antes de usar la cámara, el micrófono, la pantalla o el escritorio.
- **Correcciones del editor:** La barra «N files changed · Next» ya no se atasca, abrir un archivo largo con muchos cambios de la IA ya no congela la ventana, y la memoria deja de crecer en sesiones largas.

### Guía para nuevos usuarios

- **Quién la ve:** Los usuarios nuevos que aún no han conectado su propia API ven una breve guía hecha de globos que se recorren con «Siguiente». No aparece sola para quien ya usa su propia API.
- **Qué señala:** Box, «Modelos oficiales (Breezell)», el lugar donde conectas tu propia clave de API o un relay, y el menú para cambiar de modelo bajo el cuadro de mensaje. Puedes pulsar «Omitir» cuando quieras.
- **Verla otra vez:** Abre «Guía para nuevos usuarios» en el menú Help.

### Forma de trabajar

- **Se te pregunta antes de cada cambio:** Breezell lee tus propios mensajes para saber cómo prefieres que trabaje, por ejemplo «preguntar menos», «confirmar contigo antes de cambiar archivos o ejecutar comandos» o «respuestas más breves». Antes de cada cambio te pregunta: «Sí», «Dejarlo así» o «No volver a preguntar». Si no respondes, no cambia nada.
- **La tarjeta «Forma de trabajar»:** En Box ▸ Super Memory ▸ Presupuesto y mantenimiento, la tarjeta muestra la preferencia actual. «Leer ahora» vuelve a leer tus mensajes recientes y «Borrar» elimina lo aprendido.
- **Privacidad:** Solo se leen tus propios mensajes y el resultado se queda en este equipo.

### Modelos

- **Claude Fable 5.2 y Claude Mythos 5.2:** Ambos son compatibles, incluido Fast.
- **OpenRouter y Meta:** OpenRouter añade Nex N2.6, Inkling 2 Small (gratis) y Muse Ember; Meta añade Muse Ember 1.0.
- **«Plan» de Qwen:** Puedes elegir «DashScope» (pago por uso) o «Token Plan» (suscripción).
- **Generación de imágenes con Seedream 5.5:** En Box y en Image Studio ofrece 1K, 1.5K y 2K, fondo transparente (se entrega como PNG) y hasta 10 imágenes de referencia.
- **Conexiones de inicio de sesión:** Se actualizó la conexión de Gemini (inicio de sesión con Google) y de Kimi Code para ajustarla a sus últimas versiones.

### Box ▸ Modelos (compatibles con OpenAI)

- **Varias claves y direcciones:** Un proveedor compatible puede guardar varias claves («Añadir clave») y varias direcciones de solicitud («Añadir dirección», con «Medir velocidad»). La lista de modelos sigue a la clave elegida y cada modelo se envía con la clave a la que pertenece.
- **Modelos que el servicio ya no ofrece:** Se quitan de la lista y se te avisa, con la opción de «Deshacer»; si no hay certeza, primero se te pregunta y puedes elegir «Conservar».
- **Añadir un modelo por su ID:** Escribe un ID de modelo directamente en el cuadro de búsqueda para añadirlo.

### Grupos de proyectos

Todo sobre la función en [Grupo del proyecto y memorias compartidas](/es/project-group).

- **La cápsula sobre el cuadro de mensaje:** Muestra el grupo, cuántos proyectos tiene, qué permisos están activos y qué está haciendo la IA de las demás ventanas del grupo (inactiva, trabajando o esperándote). Qué archivo o comando está tratando solo se ve con «Compartir conversaciones» activado. Al desplegarla ves el estado y el modelo de cada miembro y puedes «Ir a la ventana», ver sus conversaciones, «Entregar…» una tarea, cambiar permisos o abrir la «Página del grupo».
- **Cuatro permisos de la IA:** Los «Permisos de la IA» de la página del grupo son ahora cuatro interruptores: «Leer archivos», «Cambiar archivos», «Compartir memorias» y «Compartir conversaciones». «Cambiar archivos» sustituye a «Permitir que la IA cambie los proyectos del grupo».
- **Conversaciones compartidas:** Con «Compartir conversaciones» activado, la IA de cada ventana del grupo lee las conversaciones de las demás. «Ver» abre una pestaña de solo lectura en el área del editor, que al cerrarse ya no pregunta si guardar; «Adjuntar a mi próximo mensaje» pone una etiqueta en el cuadro de mensaje.
- **Un grupo creado a mitad de un turno:** Ese turno lo conoce y se te avisa de que las respuestas anteriores no lo usaron.
- **Con «Acceso a archivos externos» desactivado:** Los proyectos del grupo a los que llega esta ventana siguen siendo legibles.
- **Corregido:**
  - Al preguntar por otro proyecto del grupo, la IA buscaba en este proyecto y respondía que no había resultados.
  - Tras unir los proyectos en una sola ventana, a la IA se le decía que el proyecto ya no estaba en el grupo.
  - Un cambio en un proyecto del grupo situado en otro entorno (por ejemplo, WSL) se ejecutaba antes de tu aprobación y sin posibilidad de deshacerlo. Ahora ese proyecto solo se lee y se busca en él, y el cambio se ofrece a su ventana.
  - Sin «Cambiar archivos», la IA aún podía cambiar proyectos del grupo mediante rutas completas.
  - Las conversaciones dentro de un grupo de proyectos no tenían título.
- **Cross-Check:** Los archivos que la IA cambia a través de la ventana de un proyecto del grupo también pasan por Cross-Check.

### Chat

- **Una respuesta cortada mientras piensa:** Si un modelo gasta todo su límite de salida pensando y no escribe respuesta, se le pide una vez que piense más brevemente y lo intente de nuevo; si tampoco funciona, se detiene y te sugiere bajar la «Intensidad de razonamiento» o usar un modelo con mayor límite de salida. Antes se reenviaba tres veces, cobrando cada una, y terminaba con «the model returned an empty reply 3 times in a row».
- **Llamadas a herramientas escritas como texto:** Las llamadas a herramientas que algunos modelos escriben como texto (Qwen3-Coder, GLM a través de un relay) ahora se ejecutan, en lugar de tratarse como una respuesta vacía que detenía todo.
- **Soltar archivos en una pestaña de chat:** En un chat abierto en una pestaña del editor, los archivos o carpetas que sueltes en el cuadro de mensaje se adjuntan en vez de abrirse como pestaña o ventana.
- **Bloques de código:** Un bloque de código es ahora una sola tarjeta: el nombre del archivo, las líneas y los botones van en su encabezado, y los nombres demasiado largos se recortan.
- **Después de Detener:** Tras pulsar Detener ya no aparece ninguna solicitud de aprobación; si la conexión se queda en silencio, la respuesta se muestra como interrumpida y no como terminada.
- **Respuestas más fluidas:** Las respuestas de algunos relays se muestran palabra por palabra en lugar de aparecer enteras de golpe; la ventana ya no se ralentiza cuando la IA escribe mucho; los PDF adjuntos no se vuelven a subir en cada turno.
- **Gemini:** Gemini nativo recibe las imágenes, los PDF y las capturas de herramientas adjuntos.
- **Herramientas mencionadas al pensar:** Una herramienta que el modelo solo menciona mientras piensa no se ejecuta.
- **Corregido:**
  - Claude podía rechazar una solicitud después de editar la conversación.
  - Con algunos modelos se perdían los resultados de los turnos anteriores cuando llamaban a herramientas seguidas.

### Editor

- **Barra «N files changed · Next»:** Ya no se queda atascada, no va y viene ni se salta archivos; «Next» sigue desde el archivo que muestra la barra y, tras quedarse con uno, pasa al siguiente.
- **Archivos largos:** Abrir un archivo muy largo con muchos cambios de la IA ya no congela la ventana varios segundos.
- **Memoria:** Se corrigió, en varios puntos, un aumento de memoria que crecía durante sesiones largas.
- **Carpeta de enfoque:** La etiqueta de la carpeta de enfoque ya no tapa la barra de comandos en ejecución.
- **Carpetas de enfoque de WSL y SSH:** En Windows, con una carpeta de WSL o SSH como «Carpeta de enfoque», todos los comandos de la IA fallaban al instante. Ahora se ejecutan.

### Seguridad

- **Cambios que siguen preguntando:** Aunque tengas activado «Aprobar ediciones automáticamente», se te pregunta antes de cambiar la configuración de MCP, los git hooks, las tareas de ejecución automática, los perfiles de shell, las reglas, las skills y los archivos de credenciales, y antes de borrar la carpeta del espacio de trabajo o una carpeta entera fuera de él.
- **Servidores MCP del proyecto y carpetas no confiables:** El servidor MCP de un proyecto solo arranca cuando permites su comando; si el comando cambia, se vuelve a preguntar. Las carpetas no confiables no cargan reglas, skills ni servidores MCP del proyecto.
- **Páginas del navegador de Breezell:** Una página pregunta antes de usar la cámara, el micrófono, la ubicación, la grabación de pantalla, el portapapeles o dispositivos conectados. Los valores de las cookies HttpOnly no se muestran a la IA.
- **Computer Use:** Los clics, la escritura y la apertura de apps preguntan primero, salvo que esté activado «Aprobar automáticamente acciones de escritorio» (Box ▸ Opciones de funciones ▸ Permisos de herramientas).
- **Memoria:** Las claves y contraseñas se quitan del texto antes de guardarlo como memoria; los archivos de memoria con saltos de línea de Windows ya no pierden entradas.
- **Eliminar e importar:** Antes de eliminar una skill se pide confirmación; al eliminar una conversación solo se borran los archivos que Breezell guardó para ella; al importar una copia de seguridad, las conversaciones no válidas o vacías se omiten y se te avisa.

### Plugins

- **Al desinstalar:** Al desinstalar un plugin, se cierran también sus ventanas.
- **Ventanas flotantes:** Con Breezell minimizado, la ventana flotante de un plugin sobre otras aplicaciones (por ejemplo, «Isla de actividad») aparecía mal colocada. Corregido.
- **Comandos de barra:** El comando de barra de un plugin no se envía mientras el plugin no acepta mensajes, y se te indica que mires «Plugins ▸ Instalados».

## 1.4.54 · Hot Update · 2026-11-09

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Grupos de proyectos

- **Agrupar desde la conversación:** Cuando mencionas otro proyecto abierto en una conversación (su nombre, una ruta, un archivo, una ruta de API o un puerto que sirve), aparece «¿Poner estos proyectos en un grupo?» sobre el cuadro de mensaje, con ese proyecto ya marcado. Pulsa «Agrupar» o «Agrupar y unir en una ventana», o elige «Ahora no» o «No volver a preguntar por estos». Nada cambia hasta que pulses un botón, y la IA responde como siempre.
- **La página del grupo:** «Grupo del proyecto y memorias compartidas» ahora se abre como una pestaña en el área del editor, con el botón junto a «Actual» y «Todos» encima del Explorador. Si moviste la vista Folders fuera del Explorador, el mismo botón está en su barra de título, y también está en la paleta de comandos.
- **Dónde está cada miembro:** La pestaña muestra en qué entorno está cada miembro (Windows, WSL, SSH) y si su ventana está abierta, cerrada pero con sus archivos accesibles desde aquí, o cerrada. Los miembros cerrados tienen un botón «Abrir».
- **Añadir proyectos:** «Añadir ventanas abiertas» y «Añadir carpetas al grupo…» incorporan proyectos; no hace falta tener abierta la ventana de la carpeta.
- **Gestionar el grupo:** Cambia el nombre del grupo, «Salir del grupo» o «Disolver grupo» (púlsalo dos veces). Sin grupo, crea uno aquí o únete a otro.

### Trabajar con los proyectos del grupo

- **Leer los proyectos del grupo:** La IA sabe qué proyectos hay en el grupo y puede leer sus archivos cuando hablas de ellos. Un proyecto en otro entorno (por ejemplo, un proyecto de WSL desde una ventana de Windows) se puede leer mientras su ventana está abierta; si no lo está, se te ofrece abrirlo.
- **Cambiar los proyectos del grupo:** Con «Permitir que la IA cambie los proyectos del grupo» activado, también puede cambiar sus archivos y ejecutar comandos en sus carpetas. Desactivado por defecto.
- **Conversaciones compartidas:** Con «Compartir conversaciones» activado, «Conversaciones de los proyectos del grupo…» te deja «Ver» la conversación de otro proyecto, «Continuar aquí» o «Adjuntar a mi próximo mensaje»; «Entregar a un proyecto del grupo…» encarga una tarea a la ventana de otro proyecto y te avisa cuando termina.
- **Una sola ventana:** «Unir en una ventana» abre los proyectos del grupo como una ventana con varias carpetas, incluidos proyectos de Windows y de WSL juntos. Sus ventanas se cierran y sus conversaciones se copian, cada título marcado con su proyecto. «Separar en ventanas» los vuelve a separar.

### Chat

- **Pestañas de chat junto a las de código:** Las pestañas de chat pueden estar en la misma fila que las de código: una conversación arrastrada desde el historial a la fila de pestañas de archivos, «Abrir en una pestaña del editor» y el botón «New Chat» de una pestaña de chat se quedan donde las pones y ya no se mueven a otra columna.
- **Historial de conversaciones corregido:** Si un proyecto se había abierto en un espacio de trabajo con varias carpetas, al abrirlo por sí solo sus conversaciones aparecían con su primera línea como título y la hora de apertura como fecha de todas. Ahora cada proyecto conserva los títulos y las fechas de sus conversaciones.

### WSL

- **Ventana vacía de WSL corregida:** Un proyecto de WSL abierto desde un acceso directo a veces mostraba una ventana vacía (un Explorador vacío y «No source control providers registered» en Control de código fuente). Ahora se conecta y muestra el proyecto.

## 1.4.53 · Hot Update · 2026-11-08

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Barra de título

- **Vuelve el cuadro de búsqueda:** el centro de la barra de título vuelve a tener el cuadro de búsqueda de antes de 1.4.52, y un clic abre la búsqueda. La campana de notificaciones y el botón de actualización vuelven a estar a su lado, y el progreso de la actualización (búsqueda, descarga, instalación) vuelve a mostrarse en el botón de actualización. Al ejecutar como administrador, el nombre del espacio de trabajo vuelve a ir seguido de un texto que lo indica.
- **La cápsula pasa a ser el plugin "Isla de actividad":** la cápsula adaptable de 1.4.52 ya no viene integrada en Breezell; ahora es "Isla de actividad", un plugin de código abierto del mercado de plugins. Quien quiera usarla puede instalarlo; sin él, la barra de título se ve como siempre.

### Plugin Isla de actividad

- **Instalación:** busca "Isla de actividad" en Box ▸ Plugins ▸ Mercado. Necesita Breezell 1.4.53 o posterior; las versiones anteriores no lo instalan.
- **En la barra de título:** normalmente muestra el nombre del espacio de trabajo, y un clic abre la búsqueda. Mientras la IA trabaja, la cápsula se ensancha y muestra:
  - el paso actual, por ejemplo "Pensando", "Editando app.ts" o "Ejecutando un comando";
  - el icono del modelo que trabaja y cuánto tiempo lleva;
  - "Esperando tu respuesta", "Listo" o "Algo salió mal", con "Ver" para abrir ese chat;
  - el progreso de las tareas de compilación o pruebas; si una falla, "Ver" abre su terminal.
- **Al salir de Breezell:** si cambias a otra aplicación o minimizas Breezell, la cápsula vuela desde la barra de título hasta la parte superior de la pantalla y flota sobre todas las aplicaciones; cuando no pasa nada, muestra "Todo en calma". Al volver a Breezell, regresa volando a la barra de título.
- **Abrir el panel:** haz clic en la cápsula que flota arriba y se despliega en un panel:
  - cuántos chats están en marcha o esperan tu respuesta, qué hace cada uno y cuánto lleva;
  - si le permites "Leer tus conversaciones", también las últimas frases de cada respuesta;
  - un clic en un chat te lleva directamente a él; "Volver al editor" te devuelve a Breezell;
  - un clic fuera del panel o Esc lo cierra.
- **Varias ventanas de Breezell:** en la parte superior de la pantalla hay una sola isla, que reúne todas las ventanas y pone primero lo que más necesita tu atención. El panel se agrupa por ventanas; "Ir" te lleva a esa ventana.
- **Permisos:** flotar sobre otras aplicaciones y leer tus conversaciones se te piden solo la primera vez que hacen falta. Si no permites que flote, la isla se queda en la barra de título; si no permites que lea tus conversaciones, el panel muestra solo lo que está haciendo la IA en cada ventana.
- **Sistemas:** puede flotar en Windows, en macOS (también sobre aplicaciones a pantalla completa) y en las sesiones X11 de Linux. En una sesión de Wayland en Linux, la isla se queda en la barra de título, y la primera vez te lo indica.
- **Ajustes:** en Opciones de funciones ▸ Plugins, bajo "Isla de actividad", puedes desactivar "Hacer flotar la isla en la parte superior de la pantalla, sobre otras apps, al salir de Breezell o minimizarlo…" para que la isla se quede siempre en la barra de título. Con el movimiento reducido activado, se mueve directamente, sin animación.

### Super Memory

- **Grupos de proyectos:** en la lista de proyectos del Explorador, el botón junto a "Actual" y "Todos" abre "Grupo del proyecto y memorias compartidas". Puedes crear uno con "Nuevo grupo…", usar "Mover al grupo" o "Quitar del grupo" en un proyecto, y también "Renombrar grupo" y "Disolver grupo".
- **Memorias compartidas:** con "Compartir memorias" activado en un grupo, los proyectos del grupo recuperan memorias unos de otros; cada memoria sigue perteneciendo al proyecto en el que se aprendió. Está desactivado de forma predeterminada.
- **La Biblioteca de memoria muestra el origen:** en "Biblioteca de memoria":
  - las memorias de otros proyectos del mismo grupo llevan "De *nombre del proyecto*";
  - cuando una memoria resulta equivocada en este proyecto, lleva "No aplica aquí", sin que eso cambie nada en su proyecto de origen;
  - con el uso compartido activado, puedes filtrar por "Todas las fuentes", "Este proyecto" y "Proyectos del grupo".
- **El mismo proyecto en sistemas distintos:** un mismo proyecto abierto en Windows, WSL, Linux, macOS o por SSH se reconoce como el mismo proyecto, y sus memorias van con él. Funciona después de haberlo abierto una vez en cada entorno.
- **Recordar por significado (próximamente):** Box ▸ Super Memory ▸ "Presupuesto y mantenimiento" tiene una tarjeta nueva, "Recordar por significado", con la que también se encuentran memorias escritas con otras palabras o en otro idioma. Esta función llegará con el próximo paquete de instalación completo de Breezell; esta actualización en caliente no descarga ningún archivo, la tarjeta muestra "Llega con la próxima instalación completa de Breezell; hasta entonces, solo por palabras." y las memorias se siguen recuperando como hasta ahora.

### Funciones experimentales eliminadas

- **La pestaña "Experimental" de los ajustes pierde cinco funciones:**
  - "Preanálisis de memoria", junto con la pestaña "Análisis de memoria";
  - "Modo humano en el bucle";
  - "Verificación estricta de Entrelazamiento" y "Modelo del modo estricto";
  - "Estrategia adaptativa del agente";
  - "Enrutado automático de modelos".
- **No tienes que hacer nada:** si tenías alguna de estas funciones activada, tus chats siguen funcionando como siempre. Si habías elegido "Auto" en el selector de modelo, ahora se usa el modelo que elegiste en el cuadro de chat.

### Plugins

- **Lo nuevo que pueden hacer los plugins:**
  - poner una página propia en el centro de la barra de título, en el lugar del cuadro de búsqueda; solo un plugin a la vez puede hacerlo;
  - mostrar una ventana pequeña que flota sobre las demás aplicaciones;
  - saber en qué paso está la IA, qué modelo usa y cómo van las tareas de compilación o pruebas, sin ver el contenido de los mensajes;
  - coordinarse consigo mismo entre varias ventanas de Breezell, por ejemplo para mostrar un único resumen solo en la última ventana que usaste.
- **Dos interruptores de permisos nuevos:** Box ▸ Plugins ▸ Instalados tiene ahora:
  - "Mostrar una ventana pequeña propia que flota sobre las demás aplicaciones; no puede recibir lo que se escribe con el teclado": se te pregunta la primera vez que se usa;
  - "Ver qué hace Agent (su paso, el archivo en el que trabaja, el modelo, cuánto lleva) y cómo van las tareas en segundo plano; sin el contenido de los mensajes": activado de forma predeterminada; puedes desactivarlo.
- **Los plugins ya instalados no se ven afectados** y no necesitan actualizarse.

## 1.4.52 · Hot Update · 2026-11-07

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Barra de título

- **El cuadro de búsqueda es ahora una cápsula viva:** el cuadro de búsqueda del centro de la barra de título es una cápsula que se adapta a lo que muestra. En reposo contiene la búsqueda y la campana de notificaciones, como antes, y un clic sigue abriendo la búsqueda. Sus textos siguen el idioma de Breezell.
- **Lo que hace la IA, de un vistazo:** mientras un chat está en marcha, la cápsula muestra:
  - el icono del modelo que trabaja en él;
  - el paso actual: "Pensando", "Escribiendo", "Editando app.ts", "Leyendo README.md", "Buscando en el código", "Ejecutando un comando", "Usando una herramienta", "Esperando subtareas", "Condensando el contexto" o "Reconectando";
  - cuánto lleva el turno;
  - un número como "+2" cuando hay varios chats trabajando. El que tienes abierto va primero si está entre ellos.
  - Los pasos que se suceden rápido no parpadean: cada texto se queda un momento.
- **Esperando tu respuesta:** cuando la IA se detiene para que respondas o apruebes algo, la cápsula dice "Esperando tu respuesta" ("3 chats esperan tu respuesta" si hay varios), y "Ver" abre ese chat. Un chat que te espera va antes que el trabajo en curso.
- **Listo, o algo salió mal:** un turno terminado muestra "Listo" y su duración ("en 1:23") durante unos segundos. Un turno que terminó con un error muestra "Algo salió mal", con "Ver" para abrir el chat. Un turno que detienes tú no muestra nada.
- **Tareas de compilación y pruebas:** una tarea que ejecutas, como una compilación o las pruebas, muestra "Ejecutando build" con un reloj. Al terminar, la cápsula muestra "build terminó" con su duración, o "build falló" con su código de salida y "Ver" para abrir su terminal. Las tareas de vigilancia que siguen en segundo plano no se muestran, ni tampoco una tarea que detienes.
- **Una tarea junto a la IA:** si una tarea se ejecuta mientras la IA trabaja, la tarea pasa a un pequeño punto a la derecha de la cápsula. Pasa el puntero por encima para ver su nombre; haz clic para abrir su terminal.
- **Actualizaciones y notificaciones en un solo lugar:**
  - El progreso de la actualización a una nueva versión (búsqueda, descarga, instalación) y el botón de una actualización disponible se muestran ahora en la cápsula, en lugar de un indicador aparte a su lado.
  - La campana de notificaciones está al final de la cápsula, y el panel de notificaciones se despliega desde la cápsula y vuelve a ella. Con el movimiento reducido activado, el panel simplemente aparece.
  - Mientras la barra de depuración ocupa ese lugar, la cápsula se queda en reposo para que los botones de depuración sigan a mano.
- **Ejecutar como administrador:** ahora lo indica un escudo después del nombre del espacio de trabajo, en lugar de un texto que desplazaba el nombre.
- **Teclado:** Intro o Espacio sobre la campana abren las notificaciones en lugar de la búsqueda, y los botones de la cápsula también funcionan con Intro y Espacio.

### La IA al editar archivos

- **Una ruta un poco equivocada ya no termina en un error de lectura:** cuando la IA editaba un archivo en una ruta que no existe, por ejemplo con una carpeta de menos, recibía solo el error de lectura y te decía que no podía abrir el archivo, aunque el Explorador lo mostraba; a menudo parecía que solo reiniciar ayudaba. Ahora:
  - La IA sabe que la ruta no existe y qué archivos de tu espacio de trabajo tienen ese nombre, y edita el correcto.
  - Si en tu espacio de trabajo no hay ningún archivo con ese nombre, te pregunta dónde está en lugar de probar más carpetas al azar.
  - Si quería crear un archivo nuevo, lo crea.
- **Windows: las ediciones de la IA que fallaban sin motivo ahora se aplican:** en Windows, algunas ediciones y archivos nuevos de la IA se rechazaban aunque no tenían ningún problema. Ahora se aplican tal como la IA los escribió. Antes:
  - la edición se trataba como si su contenido se hubiera cortado, y la IA la dividía una y otra vez en ediciones más pequeñas que fallaban igual;
  - o la llamada se rechazaba por nombrar dos archivos distintos, o el cambio iba a una ruta que no se podía abrir.

## 1.4.51 · Hot Update · 2026-11-06

Una actualización en caliente para 1.4.5, sin necesidad de reinstalar: Breezell la ofrece por sí solo, o compruébala en "Actualizaciones", al pie de la barra lateral de Box.

### Chat

- **Las conversaciones largas con muchas capturas de pantalla siguen adelante:** después de muchas capturas en una conversación, los mensajes podían dejar de enviarse, con `NGHTTP2_ENHANCE_YOUR_CALM` en el error mientras el diagnóstico culpaba a la red. Ahora:
  - Las imágenes pegadas antes ya no lastran los mensajes posteriores, así que la conversación puede continuar.
  - Cuando la IA necesita volver a mirar una imagen anterior, la vuelve a abrir en lugar de describirla de memoria.
  - Las imágenes que adjuntas a un mensaje se envían siempre, y también las de un mensaje que editas o vuelves a enviar.
- **Lo mismo para las imágenes que abrió la IA:** una imagen que la IA abrió para mirarla ya no se queda con el resto de la conversación; la vuelve a abrir cuando la necesita. Cuando abre varias imágenes a la vez, las ve todas.
- **Las tablas se ajustan al ancho del chat:** las tablas de las respuestas eran tan anchas como su fila más larga y había que desplazarlas de lado. Ahora se ajustan al ancho del chat:
  - Los encabezados solo se parten entre palabras, y las etiquetas CJK se mantienen enteras.
  - Las rutas y los nombres de una tabla no se estrechan hasta una letra por línea.
  - Una tabla solo se desplaza de lado cuando una sola palabra es más ancha que el chat.
- **Un encabezado en negrita ya no se pega al párrafo anterior:** un encabezado en negrita en su propia línea de una respuesta, como "(2) ..." o "(3) ...", se pegaba al final del párrafo anterior, y el espacio antes de una frase en negrita dentro de una oración desaparecía ("this is **important**" se leía "this isimportant"). Ambas cosas están corregidas.
- **Los encabezados en negrita se colocan igual mientras llega una respuesta:** mientras una respuesta aún se estaba transmitiendo, un encabezado en negrita en su propia línea quedaba a un espacio completo de su texto hasta que la respuesta terminaba. Ahora tiene su espaciado final durante la transmisión, también en el texto de pensamiento.
- **Arrastre del separador más fluido en conversaciones largas:** cambiar el tamaño del chat ya no se vuelve más lento a medida que crece la conversación.

### Box

- **Se acabó la página de Box en blanco al iniciar:** si cerrabas Breezell en la página de Box, la siguiente vez se abría solo con la navegación a la izquierda y nada al lado. Ahora se abre en la página en la que lo dejaste.

### Interfaz

- **La vista previa de "Nueva interfaz Breezell" es una miniatura del área de trabajo:** la vista previa de la tarjeta "Nueva interfaz Breezell" del panel de tema de la barra de título eran tres bloques grises. Ahora es una miniatura con los colores de tu tema: la barra de título con menús, la barra de actividad, el Explorador, el editor con pestañas, código, el cursor y el minimapa, el terminal, el chat de Breezell y la barra de estado. Activada, las partes son tarjetas redondeadas flotantes; desactivada, son cuadradas, a ras y separadas por líneas finas, así que es fácil distinguirlas.
- **Todos los tiradores de los separadores brillan igual:** el tirador de tres puntos del separador junto al Explorador parecía más brillante que los demás. Ahora todos se ven igual; el arrastre no cambia.
- **Resaltado del separador con tu color de acento:** después de elegir un "Color de acento" en el panel de tema, pasar el ratón por un separador o arrastrarlo muestra una línea de resaltado en ese color de acento, y restablecer el acento la quita. El resaltado de separador predeterminado propio de cada tema llega con el próximo instalador completo.

### WSL, SSH y remoto

- **La IA puede abrir los archivos que Breezell le guarda en las ventanas de WSL y SSH:** Breezell guarda cosas como la salida larga del terminal y las imágenes de las herramientas MCP como archivos para que la IA los lea cuando los necesite. En las ventanas de WSL y SSH la IA no podía abrirlos. Ahora:
  - Se guardan en la carpeta `.breezell/tool-results` del espacio de trabajo, a la que llegan la herramienta de lectura, el terminal y los scripts.
  - Git y la búsqueda ignoran esa carpeta por sí solos, así que queda fuera de `git status`, de los commits y de los resultados de búsqueda, y tu `.gitignore` no necesita cambios.
  - Sin ninguna carpeta abierta, se quedan en tu carpeta personal como antes.
- **La vista Puertos ya no usa cada vez más memoria:** mientras la vista Puertos estaba abierta, cada actualización de su lista ocupaba un poco más de memoria. Ya no ocurre.

### Modelos

- **OpenRouter Auto Router:** `openrouter/auto` deja que OpenRouter elija el modelo, y cada solicitud se factura al precio del modelo que eligió, así que no hay precio de lista. Entrada de imágenes, vídeo y audio, herramientas, contexto de 2M. El pensamiento empieza desactivado; si se activa, puede ponerse en bajo, medio o alto.
- **LiquidAI LFM3-1.7B:** en OpenRouter como `liquid/lfm-3-1.7b` y su ruta gratuita `:free`. Contexto de 262.144, hasta 8.192 tokens de salida, herramientas, entrada de texto. Su razonamiento está siempre activado, sin niveles de esfuerzo.

## 1.4.5 · 2026-11-06

### Lo más destacado

- **Plugins:** Instala plugins del mercado en Box ▸ Plugins, o escribe los tuyos. Un plugin solo puede usar los permisos que declara y que tú permites.
- **Experiencias de Super Memory más fiables:** Los enfoques que no funcionaron ya no se guardan como experiencias de confianza.
- **La sesión ya no se cierra sin motivo:** Una caída de la red, un sitio web inaccesible, un error del proxy, varias ventanas abiertas o un reloj del equipo mal ajustado ya no cierran tu sesión. Un sexto dispositivo solo se rechaza; la cuenta ya no se bloquea durante 24 horas.
- **Las respuestas empiezan antes:** La primera palabra aparece más rápido, y enviar ya no te hace esperar.
- **Mira al agente en el navegador:** "Seguir al agente en el navegador" permite que el agente trabaje en una pestaña propia. Cuando necesitas iniciar sesión o resolver un captcha, te abre la página.
- **Tú eliges cuántas veces reintentar:** Box ▸ Rendimiento ▸ Red y chat ▸ Reintentos cuando falla una solicitud del chat. Cuando la conexión se cae una y otra vez, el error aparece en segundos.
- **Los chats largos son más estables y fluidos:** Los chats con miles de mensajes se desplazan sin tirones. El historial de chat sobrevive a un bloqueo de la ventana, y los chats largos antiguos ya no se quedan sin memoria al abrirlos.
- **Nuevos proveedores y modelos:** Baidu ERNIE y Ant Ling; GPT Image 2.6 puede crear SVG y GIF.

### Plugins

- **Box ▸ Plugins (nuevo):** Instala plugins del mercado de plugins de Breezell en GitHub, o instala un `.vsix` que hayas empaquetado tú. Los plugins solo se ejecutan mientras tienes la sesión iniciada en Breezell. Al cerrar sesión se desactivan, y Reiniciar el host de extensiones detiene los que ya se habían iniciado. Los plugins no pueden llegar a tu cuenta, a tu facturación ni a los ajustes internos de Breezell.
  - Mercado: búsqueda (los nombres y las descripciones se encuentran en cualquier idioma), categorías (un botón abre un panel con cuántos plugins tiene cada una), Código abierto / Código cerrado, ordenación y Actualizar. El pie de una tarjeta tiene el botón de instalar, Abrir, el interruptor de activación y Desinstalar. Hacer clic en el nombre o la descripción abre los detalles, con el README, los permisos, el autor y la suma de comprobación. Una descarga que no coincide con el mercado no se instala.
  - Instalados: una fila por plugin; haz clic en una para abrir su página de detalles. Tiene el interruptor de estado (En ejecución, Desactivado, Esperando inicio de sesión, Bloqueado), Abrir, un botón de actualizar cuando hay una versión nueva, Versión, Origen, Licencia e ID, Código fuente y Ver en GitHub, las tarjetas Ventanas, Qué añade y Permisos, y el README. Instalar .vsix local también está en esta página.
  - Desarrollar: Crear un plugin crea una carpeta de plugin a partir de una plantilla; ábrela y pulsa F5 para ejecutarlo. Del código al mercado enumera los pasos para empaquetarlo y publicarlo, con la Guía para desarrolladores.
  - Los plugins que se pueden abrir aparecen bajo Plugins en la barra lateral de Box; haz clic en uno para abrir su panel o su ventana.
  - Los nombres, las descripciones, las categorías y los README de los plugins siguen el idioma de la interfaz de Breezell, y aparecen en inglés cuando no hay traducción. El chino tradicional y el simplificado nunca se sustituyen entre sí.
  - Los plugins de Breezell ya no aparecen en la vista Extensiones; se administran en Box ▸ Plugins.
- **Qué pueden hacer los plugins:**
  - Añadir skills, reglas y servidores MCP. Tu propia skill o servidor con el mismo nombre tiene prioridad.
  - Dar herramientas al agente y decir qué modos las ofrecen (Chat, Agent, Entanglement, Analizar, Teams); siguen necesitando tu aprobación y tienen sus propias tarjetas de herramienta. Un plugin también puede examinar las llamadas a herramientas del agente antes de que se ejecuten, y rechazarlas.
  - Abrir ventanas propias, que también pueden iniciarse sin una ventana del editor. En la página de detalles de un plugin, la tarjeta Ventanas tiene Añadir al menú Inicio (Windows), Añadir al menú de aplicaciones (Linux) o Añadir a Aplicaciones (macOS) para crear un acceso directo. En macOS, las ventanas de los plugins aceptan ⌘Z, ⌘A y ⌘W como las demás ventanas.
  - Cambiar las pantallas de Breezell: botones y entradas de menú, comandos en el menú de barra, páginas propias, sustitutos de algunas partes, su propio dibujo de los bloques de código de un lenguaje, modos nuevos, un acompañante que flota sobre el cuadro de chat y una tarjeta de ajustes en Opciones de funciones (la búsqueda de Box la encuentra). También pueden cambiar los colores, las fuentes y el aspecto, y alternarlos con los ajustes propios del plugin.
  - Leer tus conversaciones, enviar mensajes en ellas, aprobar llamadas a herramientas, usar o cambiar tu modelo de chat, mostrar sus textos en el idioma de la interfaz de Breezell y pedirte que reinicies Breezell.
  - Plugins de método de entrada: el panel de candidatos puede mostrarse en el editor de código y en el cuadro de chat. Se cierra cuando haces clic en otro lugar, el foco se va o el método de entrada se desactiva, y las palabras que se ofrecen tras confirmar el texto desaparecen solas; los candidatos largos pasan a la línea siguiente en lugar de salirse del cuadro de chat.
  - Lo que pueden usar los desarrolladores de plugins, y los permisos para ello, está en la Guía para desarrolladores de la página Desarrollar.
- **Lo que los plugins no pueden tocar:** Un plugin no puede cambiar el inicio de sesión, los planes, la cuota, la facturación, los ajustes de API personalizada, los diálogos de permisos, la aprobación de herramientas ni las páginas de plugins, y todo lo que espera por ti se muestra siempre encima de las pantallas de un plugin. Cerrar sesión en cualquier ventana, o que un plugin quede bloqueado, retira al instante lo que añadió.
  - Los botones de un plugin dicen "Del plugin: nombre". Haz clic derecho en uno para Ocultar este botón o Administrar plugin; Mostrar botones ocultos, en la página de detalles del plugin, los recupera. Una pantalla que un plugin reemplazó tiene Mostrar la vista propia de Breezell.
- **Permisos:** Un plugin declara los permisos que necesita, y no puede usar nada que no haya declarado. Los permisos normales (como saber cuándo empieza y termina un turno de conversación, cambiar el modelo de chat o añadir botones) están activados de forma predeterminada. Los de riesgo (como usar tu modelo de chat, leer tus conversaciones, enviar mensajes, aprobar llamadas a herramientas, leer tu código o el cuadro de chat, cambiar un mensaje antes de enviarlo o leer tus claves de API personalizadas) se piden la primera vez que el plugin los usa, y tu respuesta se guarda.
  - Permisos, en la página de detalles del plugin, lista cada permiso con su tipo (Automático o Te pregunta antes), su estado (Activado, Desactivado, Pregunta en el primer uso) y un interruptor, con Activar todos y Desactivar todos. Los detalles en el mercado de un plugin instalado tienen los mismos interruptores.
  - El diálogo de instalación tiene una casilla sin marcar: "Permitir ahora todos los permisos que pide, en lugar de preguntar en el primer uso de cada uno".
  - Leer claves de API personalizadas solo funciona en las cuentas cuyo plan incluye Custom API.
  - Desinstalar restablece los permisos de un plugin a sus valores predeterminados.
- **Actualizaciones y eliminación:**
  - Cuando un plugin instalado desde el mercado tiene una versión nueva, Breezell lo avisa una vez, con Actualizar a versión (Actualizar todo si son varios) y Ver.
  - Después de actualizar o desinstalar un plugin que está en ejecución, la versión antigua sigue ejecutándose hasta que se reinicia el host de extensiones. Breezell lo indica y ofrece Reiniciar el host de extensiones. Lo mismo ocurre al quitar un plugin y volver a instalarlo en la misma sesión.
  - Desinstalar está en las tarjetas del mercado, en los detalles y en Instalados, y pregunta antes. Las skills, reglas, servidores MCP y ventanas que añadió el plugin se van con él; sus ajustes se quedan.
  - Un plugin puede pedir que se reinicien los plugins, la ventana o todo Breezell después de instalarlo, actualizarlo o quitarlo; el diálogo de instalación lo indica primero. Cuando un plugin en ejecución pide un reinicio, eliges Reiniciar ahora o Más tarde. Reiniciar sin preguntar necesita tu permiso, ocurre como máximo una vez por versión, espera a que termine una respuesta que se está escribiendo y avisa antes.
- **Lista de bloqueo:** Los responsables del mercado pueden bloquear un plugin que resulte dañino. Un plugin bloqueado se desactiva; si está en ejecución se detiene al instante y sus ventanas se cierran, y Breezell te avisa una vez y ofrece desinstalarlo. El mercado deja de mostrarlo, y no se puede instalar ni volver a activar; Instalados muestra Bloqueado y el motivo.

### Chat

- **El historial de chat sobrevive a un bloqueo de la ventana:**
  - Una ventana vacía que se bloqueó y se vuelve a abrir ya no pierde su historial de chat. New Window tras un bloqueo así abre de verdad una ventana en lugar de cerrar la aplicación.
  - Tras una sesión que no se cerró correctamente, Breezell lo indica ("The window closed unexpectedly last time…") y ofrece Open Conversation para volver a abrir la conversación en la que estabas. No se abre sola. Una salida limpia ya no provoca el aviso.
  - Cuando el disco está ocupado o lleno, las conversaciones del espacio de trabajo ya no se abren todas vacías.
- **Los chats largos antiguos se portan bien:**
  - Un chat largo en el formato antiguo ya no pierde mensajes la primera vez que se guarda.
  - Los chats largos muy antiguos ya no bloquean la ventana por falta de memoria al abrirlos.
  - Un chat que se vuelve a abrir ya no muestra espacio en blanco en su último turno.
- **Una reversión nunca vacía un archivo:** Cuando una reversión no encontraba la copia de seguridad de un archivo, volvía a escribir el archivo vacío. Ahora indica que falta la copia de seguridad y deja ese archivo como está; los demás archivos se revierten como siempre.
- **Eliminar un chat ya no rompe sus ramas:** Un chat ramificado o copiado de otro se puede seguir revirtiendo después de que el original se elimine o se limpie.
- **Se acabaron los 400 de Claude 4.6 y posteriores:** En una ranura personalizada con el formato Anthropic, Claude 4.6+ respondía "This model does not support assistant message prefill" después de que se cortara una respuesta en un chat largo. Eso ya no ocurre. Las respuestas en los chats largos tampoco se cortan antes de tiempo.
- **Solo los adjuntos que querías:** Una imagen que espera en el compositor ya no se envía junto con una sugerencia de seguimiento, un mensaje en cola, el prompt de un plan o el mensaje de un plugin; un mensaje en cola abierto para editarlo ya no envía su imagen dos veces. En un modelo sin visión, hacer clic en una sugerencia de seguimiento ya no se queda sin efecto.
- **Menú de barra:** Lo que escribes con el menú de barra abierto se queda en el cuadro, así que Esc ya no lo pierde, y Enter sin ningún comando coincidente envía el mensaje: ahora se pueden enviar mensajes que empiezan por /. Los candidatos del método de entrada ya no quedan ocultos bajo los menús que se abren desde el cuadro.
- **Matemáticas en el chat:** Las fórmulas se dibujan con sus fuentes correctas, así que la doble barra de una norma ya no aparece como dos barras inclinadas. En Windows, los bloques de código LaTeX ya no pierden su primera línea, y un bloque de una sola línea se muestra.
- **Los archivos nombrados en el chat se abren:**
  - En las ventanas remotas de WSL y SSH y en los espacios de trabajo con varias carpetas, las tarjetas de archivo y los enlaces del chat ya no se abren con un error de archivo no encontrado.
  - Una ruta de una respuesta con `:42`, `#L42` o `#L42-L50` se abre en esa línea.
  - Carpetas nombradas en una respuesta: fuera del espacio de trabajo se abren en el gestor de archivos del sistema; dentro, se muestran en la vista Explorador. Los archivos binarios, como los comprimidos, ya no se abren en el editor de texto; aparece un menú cuya primera entrada, Abrir, los pasa a la aplicación del sistema.
  - Las rutas copiadas del chat ya no llevan caracteres invisibles.
- **Cross-Check, de verdad desactivado de forma predeterminada:** Las instalaciones existentes desactivan Cross-Check una vez. Si lo activas después, se queda activado.
- **Correcciones menores del chat:**
  - Las respuestas formadas solo por caracteres invisibles (Kimi K3.1 Pro envía algunas) ya no se muestran como una fila vacía.
  - Un turno que detuviste mientras el modelo escribía ya no trae sugerencias de seguimiento ni un Cross-Check.
  - Varias llamadas seguidas a la misma herramienta tienen una cabecera plegada que dice qué fueron (por ejemplo, qué skills se usaron), no solo un recuento.
  - La sugerencia de la página de inicio crea `.breezell/rules/breezell.md` en lugar del obsoleto `.breezellrules`.

### Herramientas del Agent

- **Comandos de terminal:**
  - Los comandos que no terminan solos, como los servidores de desarrollo, pasan a segundo plano al instante en lugar de retener el turno.
  - Los demás comandos ya no se quedan colgados mucho tiempo sin motivo.
  - La tarjeta del comando tiene A segundo plano: el comando sigue ejecutándose y el turno continúa.
  - La IA siempre sabe cuándo termina un comando en segundo plano. Cuando detienes un comando, una IA inactiva dice que vio la detención y no lo vuelve a ejecutar.
  - El sonido de finalización, la voz y la notificación del sistema esperan a que el trabajo termine de verdad: un turno que acaba con un comando aún en ejecución se queda en silencio, y se te avisa una vez cuando ese comando termina.
  - Un comando que detuvo la propia IA muestra "[Stopped by the agent]" en su tarjeta en lugar de decir que lo detuviste tú, y la IA ya no te pregunta por una detención que nadie hizo.
  - Una tarjeta de terminal terminada ya no muestra Abrir y Detener para el siguiente comando, y esos botones ya no hacen la tarjeta más alta.
- **Las búsquedas de la IA encuentran lo que contiene tu proyecto:**
  - Las búsquedas por nombre de archivo no distinguen mayúsculas de minúsculas. En Windows, `readme.md` antes no encontraba `Docs/README.md`.
  - Las búsquedas de la IA siguen el `.gitignore` de tu proyecto y el ajuste Search: Exclude para decidir qué omitir, en lugar de omitir siempre carpetas como `build`, `out` y `dist` o archivos como registros e imágenes.
  - Los proyectos sin Git (SVN, Perforce, Plastic o una copia descomprimida) también aplican sus reglas de ignorados en lugar de buscarse enteros.
  - Los proyectos de Unity, Unreal y Godot omiten las carpetas que generan sus motores.
  - Los resultados de búsqueda de nombres de archivo o carpeta con fechas o números de versión (como `2024-10-29-notes.md`) ya no abren el archivo equivocado.
- **Búsquedas de código:** La IA encuentra funciones y clases en más lenguajes: Lua, tipos de Go, structs de C#, métodos de C++ definidos fuera de su clase, Ruby, Kotlin, Dart, Scala, Solidity, Elixir, OCaml y Objective-C. En un espacio de trabajo con varias carpetas, las búsquedas de código cubren todas las carpetas, no solo la primera.
- **La IA ya no busca sin fin:** Cuando la IA sigue buscando con palabras nuevas sin abrir ningún archivo, el turno se detiene y dice por qué.
- **La IA encuentra los ajustes por ti:** Pregunta dónde está un ajuste y la IA nombra su lugar en Box en el idioma de tu interfaz, o abre Box con esa opción marcada. Disponible en el modo Chat. Los errores que te envían a un ajuste también nombran el lugar correcto en Box.
- **Otros:**
  - La IA ya no reenvía una y otra vez una edición que ya se aplicó.
  - Un comando con una tubería muy larga ya no congela la ventana cuando termina el turno.
  - Nuevas skills integradas: las skills de HyperFrames y una skill de documentos de Office. El interruptor de Superpowers solo cubre sus propias skills.

### Memoria

- **Experiencias más fiables:** Super Memory ya no guarda como experiencias de confianza los enfoques que no funcionaron. Todo esto ocurre en tu equipo.

### Teams

- **Elige el modelo de cada compañero en la tarjeta de aprobación:** Con Aprobar Teams automáticamente desactivado, un equipo nuevo espera en una tarjeta de aprobación. La fila de cada miembro es ahora un menú de modelos (Modelo de este compañero), con el modelo que realmente se ejecutaría. Antes la tarjeta era una vista previa de solo lectura que podía nombrar un modelo distinto del que se ejecutaba. Tu elección sobrevive a una recarga y se aplica tanto si apruebas desde la tarjeta como desde la notificación del sistema o su enlace. Con la aprobación automática activada, nada cambia: no hay tarjeta y el equipo empieza al instante.
- **Reintenta un compañero con otro modelo:** La tarjeta de error de un compañero tiene un menú de modelos junto a reintentar (Modelo con el que reintenta); lo que elijas pasa a ser el modelo de ese compañero desde entonces.
- **Escribe directamente a un compañero:** El compositor de la página de un compañero, bloqueado hasta ahora, envía tu mensaje a ese compañero. Se lee antes del siguiente paso del compañero sin detener el actual, y despierta a un compañero inactivo, terminado, fallido o detenido.
  - Los mensajes en espera se colocan en la barra de cola sobre el compositor, uno por paso, y se pueden retirar (Retirar) hasta que el compañero los lee.
  - Un mensaje retirado no aparece en la conversación y no se transmite al líder.

### Red y fiabilidad

- **Las respuestas empiezan antes:** La primera palabra llega en unos 0,4 s en lugar de unos 0,65 s, y enviar ya no añade dos o tres segundos de espera, tampoco en el primer mensaje tras una pausa o tras el arranque.
- **Reintentos cuando falla una solicitud del chat, a tu elección:** Box ▸ Rendimiento ▸ Red y chat tiene Reintentos cuando falla una solicitud del chat debajo de Tiempo de espera del primer byte.
  - Predeterminado elige el número según el tipo de error; Sin reintentos muestra la tarjeta de error al instante; o elige un número, o Personalizado para 1–20 veces.
  - Los errores que un reintento no puede arreglar, como tener la sesión cerrada o no tener crédito, una respuesta que ya se muestra y cualquier cosa después de tu Detener nunca se reintentan.
- **Una conexión caída muestra su error antes:** Cuando la conexión se cae una y otra vez, el error aparece ahora en unos 5 s en lugar de casi 30 s.
- **Los subagentes y los chats largos cuestan menos:** Los subagentes y los chats largos cuestan menos de ejecutar. Los subagentes en Claude y Gemini también dejan de leer solo el principio de cada archivo.

### Modelos y proveedores

- **Nuevos proveedores:**
  - Baidu ERNIE: ERNIE 5.1 (contexto de 128K, entrada de imágenes, herramientas, siempre piensa). ERNIE 5.5 Flash aparece antes de su lanzamiento (solo texto, aún sin precio).
  - Ant Ling: Ling-3.2-flash (1M, entrada de imágenes y vídeo, herramientas; gratis durante sus dos primeras semanas, aún sin precio), Ling-3.1-flash (1M, solo texto), Ling-3.0-flash-VL (262K, entrada de imágenes y vídeo) y Ling-3.0-flash (262K, solo texto). Ling 3.x piensa de forma predeterminada y se puede desactivar. Ling-3.2-flash tiene un selector de contexto, con 262K de forma predeterminada y 1M a petición.
- **Nuevos modelos:**
  - LongCat-2.5 GA sustituye a LongCat-2.5-Preview y 2.0: contexto de 1M, salida de 128K, entrada de imágenes.
  - Tencent Hy4 GA (TokenHub, OpenCode Go, OpenRouter) es el primer modelo Hy que lee imágenes; hy4-preview sigue siendo solo texto.
  - OpenRouter: GLM-5.3-FlashX-Legal (el modelo de Z.ai para el ámbito jurídico), Ricursive Ripple-65B Preview (solo texto) y el modelo sigiloso Crouton Alpha (entrada de imágenes, vídeo y audio, gratis).
  - Reflection Beam 1.0 (OpenRouter, Vercel, OpenCode, Together): 1M, solo texto, siempre razona.
  - OpenCode Go sigue su catálogo del 2026-11-03: se añaden Claude Haiku 5.5, Gemini 4 Argon, MiniMax M3.1 Flash, Step 5 Preview, un Reflection Beam gratuito y el modelo sigiloso Iceman Contributor; se quitan Grok 4.6, Kimi K2.6, DeepSeek V4 Flash y otras entradas retiradas, y los modelos que escribiste tú siguen funcionando.
  - Listados antes de tener acceso: Gemini 4 Carbon (Gemini API y Breezell; Google solo lo ofrece a socios seleccionados, así que la mayoría de las claves reciben un 404), y `cyber-personal-v3` y `cyber-enterprise-v4` de DeepSeek Flash Cyber (necesitan una Cyber Key emitida tras una verificación de identidad real).
- **DeepSeek:**
  - La lista conserva solo lo que sirve la API oficial, `deepseek-flash` (V4.1 Flash) y `deepseek-v4-pro`, más V4.1 Pro antes de su lanzamiento. Los nombres que la lista oficial ya no tiene salen de la lista predeterminada; los modelos que añadiste tú se quedan.
  - Se quitan los retirados `deepseek-chat` y `deepseek-reasoner`; las funciones configuradas con ellos pasan solas a otro modelo de DeepSeek.

### Imágenes y vídeo

- **GPT Image 2.6:** `gpt-image-2.6-sunburst` y `gpt-image-2.6-flare` llegan a OpenAI, OpenRouter e Image Studio, con todo lo que tiene 2.5 (encuadres de hasta 3:1, 1K / 2K / 4K, calidad xhigh y max, fondos transparentes).
  - Complejidad (Baja, Media, Alta; Alta de forma predeterminada): se configura en Box, y la IA puede fijarla cuando dibuja en el chat.
  - Salida SVG (solo imágenes nuevas, de una en una) y GIF: 2–16 fotogramas (Fotogramas del GIF), 20–2000 ms cada uno (Duración del fotograma), unos 512 × 512 por fotograma, sin máscara. Ninguno de los dos admite fondo transparente.
  - El inicio de sesión de ChatGPT también puede crear GIF, pero OpenAI aún no lo ha abierto a todas las cuentas, así que algunas se rechazan; Box lo indica.
  - Image Studio ofrece los formatos que admite un modelo, SVG y GIF incluidos. Los SVG se muestran en la galería, copiar un SVG o un GIF copia un PNG de él, y el diálogo de guardar ofrece .svg.
- **El modo imagen entiende "inténtalo otra vez":** Decir "esta no sirve" después de una imagen traía una imagen nueva sin relación. Ahora un mensaje sin imagen propia edita la imagen anterior. Un mensaje que pide algo más que un dibujo, como "esta no sirve, busca referencias en internet", desactiva el modo imagen y va al modelo de chat.
- **Editar esta va al modelo de chat:** Editar esta o Editar zonas en una tarjeta de imagen de un chat normal ya no cambia el chat al modo imagen. La imagen va al compositor y el modelo de chat recibe tu instrucción: puede buscar información primero y luego dibujar con la imagen como referencia. Cuando el chat ya está en modo imagen, o el modelo de chat no puede hacerlo, el modo imagen sigue encargándose de la edición.
  - La tarjeta ya no muestra el prompt largo escrito para el modelo de imagen; sus detalles solo listan los archivos de imagen.
  - Una imagen dibujada por Breezell muestra Breezell una sola vez, en la fila del modelo.
- **Cualquier modelo puede tener su propio modelo de reconocimiento de imágenes:** En Box ▸ Modelos, Ajustes avanzados ▸ Imágenes de cada modelo tiene el interruptor El modelo lee las imágenes y el selector Modelo de reconocimiento de imágenes, que se aplican al instante. Con el interruptor desactivado, las imágenes adjuntas las lee el modelo elegido. Box muestra el modelo como solo texto, con Proxy visual en su menú.
  - Mientras hay un proxy visual configurado, el diálogo Proxy visual tiene Quitar proxy visual. Antes costaba encontrar cómo desactivarlo.
- **Image Studio:**
  - La API de imagen y la API de vídeo de cada perfil de API pueden usar su propia ruta de red: Directo, Proxy del sistema, Proxy global o Proxy personalizado (HTTP / HTTPS / SOCKS5, con usuario y contraseña, o pegado como URL); Proxy del sistema sigue siendo el predeterminado. Obtener la lista de modelos también usa esa ruta, y un fallo dice por qué.
  - Añade modelos por ID; se conservan cuando se vuelve a obtener la lista.
  - MiniMax H3 funciona a través de relays.
  - Riverflow V2.6 Pro: en Box ▸ Modelos ▸ Generación de imágenes bajo OpenRouter, y en Image Studio (1K / 2K / 4K, hasta diez imágenes de referencia).
  - Gemini Omni 1.1 Flash (un modelo de vídeo en OpenRouter): Image Studio tiene un preajuste de vídeo para él (360p–4K, 16:9 o 9:16, 3–10 s, primer y último fotograma, con sonido).
- **Seedream 5.0 Lite dibuja en Box:** A través de un relay fallaba en Box mientras Image Studio sí dibujaba. En Image Studio, los tamaños y el número de referencias de Seedream 5.0 Lite y Pro siguen ahora las especificaciones oficiales: Lite ofrece 2K / 3K / 4K y 14 imágenes de referencia, Pro 1K / 1.5K / 2K y 10 imágenes de referencia.
- **Las ediciones de imagen de Box funcionan con más relays.**

### Navegador integrado y Computer Use

- **Seguir al agente en el navegador (nuevo, desactivado de forma predeterminada):** Activa Seguir al agente en el navegador en Opciones de funciones ▸ Comportamiento del código, o haz clic en el botón del ojo de la barra de herramientas del navegador. El agente trabaja entonces en una pestaña propia marcada "Agent" que puedes ver en directo, y nunca toca tus pestañas. Leer una página no trae el navegador al frente.
- **Las páginas que necesitas ver se te abren:** Con Navegador sin ventana activado (el valor predeterminado), un inicio de sesión, un captcha o una página terminada se quedaban fuera de la pantalla, y el agente no tenía forma de mostrártelos. Ahora, para una página que pediste ver, una página en la que tienes que actuar tú (inicio de sesión, captcha, código QR, confirmar un pago) o el resultado al final, abre la pestaña Navegador. Sus propias comprobaciones siguen ejecutándose fuera de la pantalla.
- **Las comprobaciones de Cloudflare ya no se repiten en bucle:** El navegador integrado ya no se queda atascado repitiendo la verificación humana de Cloudflare.
- **Computer Use (Windows):**
  - Puede capturar la ventana en primer plano o una pantalla, ampliar una parte, hacer clic con teclas modificadoras pulsadas, hacer triple clic y pasar el ratón por encima, y esperar a que una ventana o un control aparezca o desaparezca. Los clics en botones, casillas y menús desplegables son más fiables.
  - Nunca escribe en un campo de contraseña.
  - Abrir una aplicación que ya está en ejecución cambia a su ventana (también desde la bandeja), o lista sus ventanas cuando tiene varias (dos cuentas de QQ, por ejemplo).
  - Las ventanas se reconocen cuando QQ o WeChat están en primer plano.
  - Los modelos Claude usan la herramienta de equipo propia de Anthropic: Box ▸ Experimental ▸ Computer Use (Windows) ▸ Herramienta de equipo propia de Claude.
  - El nuevo comando Breezell: Run Computer Use Evaluation prueba un modelo en nueve tareas de escritorio y comprueba cada resultado.

### Box

- **Limpieza de datos:**
  - El espacio que puede liberar es ahora lo que los archivos ocupan realmente en el disco.
  - Una limpieza del espacio de trabajo actual ya no elimina archivos que otros espacios de trabajo aún necesitan.
  - Cuando la limpieza puede liberar más de lo que indica Aviso de limpieza (desactivado, 200 MB, 500 MB de forma predeterminada, 1 GB), aparece una tarjeta abajo a la izquierda. Limpiar ahora ejecuta la limpieza segura y la muestra hasta el final; Ahora no aparta la tarjeta de todas las ventanas durante 7 días, salvo que se acumule otro tanto. Comparte columna con la tarjeta de actualización en caliente, así que nunca se solapan.
  - Cosas nuevas que puede limpiar: copias de seguridad de puntos de control que ya nada usa (contadas en Expired checkpoints); Almacenamiento de proyectos eliminados, los datos que dejan los espacios de trabajo cuya carpeta ya no existe, que también elimina sus conversaciones, así que nunca se preselecciona, pregunta antes con todos los proyectos listados y nunca lo ejecutan el mantenimiento programado ni el aviso; y más Space left by deleted content.
- **Base de datos ▸ Explorador de datos rediseñado:** La página es una sola superficie, y la navegación de Box se pliega en su barra de iconos mientras está abierta.
  - El navegador de la izquierda se puede redimensionar arrastrando o plegar con Contraer navegador, y ambas cosas se recuerdan. Lista cada conexión con su estado; la conexión abierta se puede desconectar, renombrar, enviar al chat o eliminar; debajo están sus tablas con el número de filas, una búsqueda, ordenación, y nueva tabla y Consola SQL.
  - Una vista general de la base de datos lista cada tabla con sus filas, columnas y clave primaria, con un filtro, ordenación y Agrupar por inicial. Algunas bases de datos de servidor muestran recuentos de filas estimados.
  - La vista de tabla tiene un filtro WHERE (Enter lo ejecuta), Columnas visibles y el recuento total de filas, con el número de fila y la clave fijados a la izquierda.
  - Detalle de fila se acopla junto a la cuadrícula: cada campo completo, JSON con formato, Anterior / Siguiente, editar (o doble clic), Copiar como JSON y eliminar. Eliminar tabla pasó a la pestaña Estructura, y el escaneo del espacio de trabajo al formulario de conexión nueva.
  - Los botones y las barras de desplazamiento que solo aparecían al pasar el ratón han desaparecido.
- **Monitor de modelos ▸ Breezell:** Muestra el estado de las líneas de tu plan (por ejemplo "Breezell Pro/Pro+"). Cada fila muestra los últimos 90 minutos, una barra por minuto, y 24H / 7D / 30D cambian la cifra de disponibilidad, con su media en el titular. Se actualiza al abrir la pestaña y con Comprobar de nuevo. Si tu plan aún no tiene monitores, la pestaña lo indica. Las demás pestañas comprueban desde tu equipo como antes.
- **Página Modelos:**
  - La fila de categorías (Breezell, cuentas con inicio de sesión, proveedores API, compatibles con OpenAI, generación de imágenes) queda fija arriba, y solo se desplaza lo que hay debajo.
  - Las ranuras compatibles con OpenAI se pueden buscar por nombre, URL o modelo ("opus 4.8" encuentra `claude-opus-4-8`). La ranura que usa el chat actual se marca En uso y va primero; las demás siguen según cuándo se usaron por última vez.
  - En un Box estrecho, primero cede el nombre, luego desaparece entera una insignia que ya no cabe, y En uso se reduce a su marca de verificación. La información emergente solo aparece donde el texto se corta.
  - El botón de cierre de la lista de modelos obtenidos dice Cerrar; un clic fuera de la lista o Esc la cierran (salvo que haya modelos marcados en ella).
- **Rendimiento ▸ Red y chat:** La tarjeta de diagnóstico y las solicitudes recientes muestran el apodo que diste a una ranura compatible con OpenAI en lugar de nombres como "OpenAI-Compatible 9".
- **Rules & Skills & Memory:** El panel llamado Skills & Memory, cuya primera pestaña es la de reglas, se llama ahora Rules & Skills & Memory en todas partes: la pestaña de Box (MCP & Rules & Skills & Memory), su tarjeta de entrada y el botón de la barra de título.
- **Barra lateral:** El plan junto al nombre de la cuenta es una palabra en color en lugar de una píldora con marco, y el icono de Actualizaciones del pie pierde su recuadro pero conserva su color.

### Cuenta e inicio de sesión

- **La sesión ya no se cierra sin motivo:** A algunas personas se les cerraba la sesión sin que su cuenta tuviera ningún problema, o no podían iniciar sesión en absoluto. Ahora:
  - Una caída de la red, un sitio web inaccesible, una página de verificación, un error del proxy, varias ventanas abiertas, dos instalaciones de Breezell en un mismo equipo y un reloj del equipo mal ajustado ya no cierran tu sesión. Tu sesión solo se cierra cuando Breezell la termina de verdad.
  - Las ventanas coinciden en tu estado de sesión, así que ninguna ventana te muestra con la sesión iniciada cuando la sesión ya no existe.
  - Cuando tu única forma de conectarte es un proxy configurado en Box, el inicio de sesión también usa ese proxy.
  - Cuando introduces un código de inicio de sesión, Breezell distingue entre un código que no funcionó, demasiados intentos desde esta red y que no se pueda conectar con Breezell.
  - Cuando se cierra tu sesión, dice por qué: "Se cerró la sesión en este dispositivo" o "Tu sesión ha terminado".
- **Los modelos de Breezell ya no fallan una y otra vez cuando caduca la sesión:** Antes, todos los mensajes fallaban después de que caducara la sesión, hasta que volvías a iniciarla; ahora Breezell continúa por sí solo.
- **Un sexto dispositivo solo se rechaza:** Antes, un sexto dispositivo bloqueaba toda la cuenta durante 24 horas y cerraba la sesión en los otros cinco. Ahora solo se rechaza el dispositivo nuevo: se queda en la página de inicio de sesión y dice por qué, y los otros cinco siguen funcionando. Un dispositivo que sale de la suspensión con todas las plazas ocupadas mantiene la sesión, dice que está esperando y continúa por sí solo cuando se libera una plaza. La página de la cuenta lo explica. Un editor cerrado ya no retiene una plaza de dispositivo durante horas.
- **Inicio de sesión cifrado:** Tus datos de inicio de sesión se guardan cifrados en tu equipo.
- **Detener se factura según lo producido:** En los modelos propios de Breezell, Detener o una solicitud interrumpida solo se factura por lo que se produjo, no por la respuesta completa.

### Desarrollo remoto

- **Remote-SSH:**
  - Corrección de seguridad: el reenvío de puertos escucha solo en este equipo, así que otros equipos de la red local no pueden alcanzarlo.
  - Connect to Host lista los hosts de tu configuración SSH y acepta `user@host:port`.
  - En los hosts Windows se distinguen cmd, PowerShell y Git Bash.
  - ProxyJump y las claves PEM con frase de contraseña funcionan; se corrigieron los problemas del script de instalación en macOS y en sistemas Linux mínimos.
  - Un espacio de trabajo sin carpetas ya no muestra un error.
- **Remote-WSL:** Correcciones del script de instalación, compatibilidad con Alpine y el motivo que se muestra cuando el script falla; un espacio de trabajo sin carpetas ya no muestra un error.
- **Plugins en ventanas remotas:** Instalados muestra una fila por plugin, y una actualización ya no deja la versión antigua ejecutándose en el otro lado.

### Rendimiento

- **Desplazamiento más fluido en chats largos:** Los chats con miles de mensajes se desplazan sin tirones.
- **Box descansa mientras está cerrado:** Un Box cerrado ya no usa recursos en segundo plano.
- **El recuerdo de memorias usa menos memoria:** El recuerdo de memorias ocupa alrededor de un 40 % menos de memoria.
- **Guardar chats enormes usa menos memoria:** Guardar un chat antiguo muy grande usa mucha menos memoria.

### Interfaz

- **Nueva marca en la página de chat vacía:** Las páginas vacías moderna y clásica muestran un RSI grande con BREEZELL atravesándolo por el medio. No se mueve.
- **Un solo tamaño para la barra de acciones del turno:** Request ID, la duración, Revisar, Git y el recuento de herramientas de la derecha tienen ahora el tamaño de los botones de copiar y ramificar de la izquierda.
- **Frases rápidas rediseñadas:** La ventana emergente tiene un título, un botón de añadir y Gestionar; cada una de tus Favoritas es una fila con el icono de su tipo, su nombre y una vista previa de una línea (los comandos de terminal en monoespaciado). El diálogo de gestión tiene un estilo nuevo y funciona como antes; el formulario se guarda con Enter en el nombre o Ctrl/Cmd+Enter en el contenido.
- **Auto en la interfaz moderna:** El interruptor de ruta Auto se dibuja correctamente. El menú de modelos Auto ya no queda tapado por la barra lateral del historial de chat que tiene al lado, y ya no se sale por el borde derecho de la ventana.
- **Las líneas eliminadas se ajustan en los diffs en línea:** Con el ajuste de línea activado (Alt+Z), una línea eliminada larga en la zona roja de una edición se quedaba en una sola línea, cortada en el borde. Ahora se ajusta como las demás líneas del editor.
- **Otros:**
  - La tarjeta de la herramienta de eliminar tacha el nombre del archivo eliminado; en la cabecera de archivo de un bloque de código, el nombre y el icono tienen tamaños a juego.
  - El texto de espera con destellos ya no muestra una imagen doble en las tarjetas de análisis.
  - La pista de modelo en las filas de miembros de la tarjeta de aprobación de Teams usa la información emergente propia de Breezell en lugar de la blanca del sistema.

### Instalación y actualizaciones

- **Actualizaciones de Windows más fiables:** Una descarga fallida muestra un error de inmediato, y ya no se instala por error un instalador antiguo.
- **Requisitos del sistema:** A partir de esta versión se necesita macOS 13 o posterior, y las compilaciones son solo de 64 bits. Ya no hay editor para Linux ARM32 (armhf), y la página de descarga ya no recomienda un paquete x64 a los equipos ARM32; conectarse a un host ARM32 por SSH sigue funcionando.
- **Paquetes de Linux:** Las dependencias de los paquetes deb y rpm se han actualizado para la nueva versión.
- **Electron 45.2.2:** El Chromium integrado se actualiza a la versión 156, y se actualizan las dependencias, con correcciones de seguridad incluidas.

## 1.4.4 · 2026-10-27

### Lo más destacado

- **Cross-Check:** Una segunda mirada independiente antes de que el agente dé por terminado el trabajo (desactivado de forma predeterminada).
- **Los turnos terminados se pliegan:** Un turno de chat terminado se pliega en una fila "Worked for 2m 10s", con la respuesta debajo.
- **Las conversaciones largas mantienen el rumbo:** Conservan su dirección después de plegar el contexto, y plegar cuesta menos.
- **Recuerdo de memorias por contexto:** Funciona en cualquier idioma, y la IA puede buscar en tus memorias paso a paso.
- **Generación de imágenes en un solo lugar:** Se configura una vez en Box ▸ Modelos ▸ Generación de imágenes y se usa en todas partes; Image Studio se ha reconstruido.
- **Recuperación de red:** Las solicitudes se recuperan solas cuando una VPN se cae o vuelve, y los modelos lentos ya no agotan el tiempo de espera a los dos minutos.
- **Las actualizaciones en caliente se quedan:** Ya no desaparecen solas tras el uso normal.

### Chat

- **Los turnos terminados se pliegan:** Cuando un turno termina, todo lo que hizo el agente por el camino (pensamientos, búsquedas, tarjetas de herramientas y ediciones, el texto entre ellas) se pliega en una fila que indica cuánto trabajó y qué hizo, por ejemplo "Worked for 2m 10s · 12 files, 3 searches, 2 edits". Haz clic para abrir el turno tal como estaba. La respuesta final queda fuera del pliegue, igual que los errores y las imágenes que produjo el turno. Un turno que detuviste, uno que terminó con error y una respuesta simple no se pliegan. Los turnos de tu historial se pliegan igual.
- **Cross-Check (nuevo, desactivado de forma predeterminada):** Actívalo en Opciones de funciones ▸ Cross-Check ("Mejora automática del modelo"). Antes de la respuesta final del agente en un cambio grande (dos o más archivos, 30 o más líneas en un archivo, o un plan aprobado), una llamada aparte al modelo sin herramientas compara el trabajo con tu petición: los diffs, los errores de compilación nuevos, los comandos y sus códigos de salida. Escribe una lista de aceptación y marca cada elemento como correcto, fallido o desconocido. Solo lo que considera que falta vuelve al agente, que comprueba cada punto en el código, arregla lo que realmente falta y responde una vez.
  - El resultado es una tarjeta bajo el turno. Se abre en la lista de comprobación, con Volver a comprobar y Cubrir los huecos.
  - Omitir en la línea de espera continúa sin ello. Detener o un mensaje nuevo después de la respuesta solo termina la comprobación.
  - Usa el modelo del chat salvo que elijas uno dedicado en Box ▸ Cross-Check. Los archivos que pueden contener secretos (`.env`, claves, credenciales) se nombran, pero su contenido nunca se envía.
  - Una comprobación lenta ya no se corta a los 90 segundos: se vigila y solo falla cuando se confirma que su API está caída.
- **Editar y reenviar un mensaje ya no devuelve cambios que ya habías resuelto:** antes, reenviar restauraba todos los archivos desde el punto de control anterior. Tras Conservar todo, Aceptar/Rechazar reaparecía para cambios ya aceptados. Un bloque aceptado volvía a quedar pendiente. Los cambios rechazados volvían. Ahora un reenvío solo restaura los archivos que la IA editó después de ese mensaje. Lo que hiciste tú desde entonces se mantiene, incluido lo que escribiste en archivos que la IA no volvió a tocar.
- **Conservar todo y Aceptar todo lo dejan limpio:** Conservar todo ahora acepta también los cambios pendientes de cada archivo que editó la conversación. Aceptar todo de Code Review confirma los archivos cuyos pasos estaban todos decididos. Un paso marcado como aceptado ya no deja botones Aceptar/Rechazar en el editor.
- **Las conversaciones largas mantienen el rumbo tras el plegado (compactación de contexto):**
  - Un plegado ya no deja a la IA trabajando en una tarea antigua: el resumen registra cómo terminó cada petición anterior y tu petición más reciente se repite justo después.
  - Tus mensajes anteriores van junto al resumen, palabra por palabra.
  - El resumen se escribe en secciones fijas: Objetivo, tu intención con tus palabras, Decisiones, Notas técnicas, Estado, Siguiente.
  - Cuando es posible, el resumen se escribe sobre la petición que el agente acaba de enviar, que el proveedor aún tiene en caché. Se factura en su mayor parte como lecturas de caché y vuelve más rápido.
  - Se conservan como máximo 15.000 tokens de conversación reciente palabra por palabra junto al resumen (antes era el 20 % de la ventana, hasta unos 192k en modelos de 1M), así que un plegado libera mucho más espacio.
  - Un solo turno que crece más allá de la ventana (cientos de resultados de herramientas) ahora puede plegarse por el medio, en vez de enviarse por encima del límite y fallar como error "upstream".
- **Análisis en segundo plano: detener o reejecutar de uno en uno:**
  - Detener en un análisis (su tarjeta o su página de informe) detiene solo ese. La ronda continúa con lo que había encontrado.
  - Reintentar reejecuta un análisis fallido, detenido o interrumpido bajo la misma tarjeta.
  - El líder ahora recibe cada ronda una vez, con cómo terminó cada análisis (completado, fallido con su error o detenido).
  - Los análisis cortados por un reinicio vuelven como Interrumpidos, y al siguiente mensaje se le dice qué habían encontrado.
  - La página de informe sigue la salida nueva hasta que te desplazas hacia arriba (Ir a lo más reciente), muestra una línea de estado (pasos, duración, tokens, modelo) y tiene Copiar informe.
  - Los subagentes ya no detienen la ronda haciendo una pregunta.
- **Teams trabaja por rondas:** el seguimiento del líder inicia una ronda nueva con sus propias tareas, así que un informe de la ronda anterior ya no se toma por el de la nueva. Detener en el líder ahora detiene a los compañeros sin revertir sus archivos ni disolver el equipo. Detener en la página de un compañero lo marca como detenido y avisa al líder. El siguiente mensaje lo despierta.
- **DarkSelene aguanta los problemas de API y reanuda donde se detuvo:**
  - Cada llamada de análisis se reenvía tras una conexión caída, un tiempo de espera agotado, 408/429/5xx o una respuesta vacía, durante unos dos minutos. La página y la tarjeta del chat muestran la reconexión.
  - Una sesión detenida muestra el motivo en rojo en su tarjeta del chat, con Continuar análisis (conserva las etapas terminadas) y Analizar de nuevo.
  - Si el turno de ejecución termina con error, se pausa conservando sus revisiones: Continuar ejecución (o Reintentar) lo retoma, y Terminar y resumir escribe lo que se hizo.
  - Las llamadas lentas ya no se cortan a los 3 o 15 minutos para reenviarse: una llamada en silencio se vigila y solo falla cuando se confirma que su API está caída.
- **Modo Entanglement:** ahora el modelo decide qué demuestra una corrección (diagnósticos, una prueba o tu confirmación), en lugar de que listas de palabras lo adivinen a partir de tu mensaje. Decir "sigue roto" ya no deshace en silencio el último cambio; el modelo decide si conservarlo, ajustarlo o deshacerlo. Las explicaciones y confirmaciones ya no se vuelven a pedir para un registro causal, y entrar en Entanglement ya no fuerza un rastro causal como primer paso.
- **Correcciones menores del chat:**
  - Una respuesta terminada ya no salta hacia arriba cuando aparece su barra de copiar/reintentar.
  - La cabecera de la tarjeta de edición elimina el recuento extra de "N changes"; el nombre del archivo y +X/−Y se mantienen.
  - Cuando el agente continúa tras una respuesta (un Cross-Check, una recuperación, la siguiente subtarea enrutada), ahora se muestra "Decidiendo el siguiente paso" en lugar de un hueco.
  - Una llamada a herramienta que el proveedor aborta a medias (visto con `gpt-6-astra` a través de relays: "Tool arguments stopped making progress…") ahora se cierra como fallida y se vuelve a escribir, en lugar de terminar el turno como error de red.

### Historial de chat y compositor

- **Panel de historial de chat rediseñado:** botón Nuevo Agent, búsqueda con un conmutador de selección, pestañas Agents / Teams / Favorites, grupos por fecha con cabeceras fijas y filas de dos líneas (título y hora, luego el primer prompt y el número de turnos, o los miembros del equipo). Un chat en streaming ya no hace que la lista se redibuje en cada fotograma.
- **La barra lateral del historial se puede redimensionar:** arrástrala entre 200 y 600 px (260 por defecto; antes estaba fija en 220, lo que cortaba "New Agent"). En anchos estrechos los botones se reorganizan en lugar de truncarse.
- **Las etiquetas del compositor se ven más serenas:** archivos, skills, terminal, citas, problemas y el resto comparten un chip neutro, con el color de cada tipo solo en su icono. Los chips de skills se leen como `/nombre`, igual que el menú de barra. Las miniaturas de adjuntos tienen marco neutro, insignia redonda de quitar y vista previa al pasar el ratón.
- **Skills de otros agentes:** las skills instaladas por `npx skills` y otros agentes ahora se encuentran en `.agents/skills` y `.claude/skills` (en cada carpeta del espacio de trabajo y en tu carpeta personal) y en `~/.config/agents/skills`. Las propias de Breezell en `.breezell/skills` siguen ganando ante un conflicto de nombres. El panel de reglas las lista con la carpeta de la que vienen. El punto de Skills en la bandeja ahora aparece justo después de reiniciar.
- **Selector de modo:** nuevos iconos de Agent y Entanglement, sin degradado en las etiquetas y una tarjeta de cambio de modo neutra.

### Herramientas del Agent

- **`run_script` informa de lo que realmente hizo:**
  - Después de que un script edite archivos, lista los errores que introdujeron esas ediciones (mensaje `path:line`), incluso tras un fallo o un tiempo de espera. Antes devolvía un "0 errors" sin sentido.
  - También lista los demás archivos a los que llega una edición.
  - Un script que nunca edita se ejecuta en solo lectura sin pedir aprobación.
  - Hasta 1.000 llamadas puenteadas, y las llamadas por encima del límite se informan en lugar de silenciarse.
  - El texto exacto puede pasarse como datos en vez de JavaScript escapado, y `edit_file` acepta `dry_run`.
  - Las ediciones al mismo archivo se ejecutan en orden.
  - La tarjeta dice por qué falló una ejecución (etiqueta, línea, mensaje) y muestra "N failed" en las llamadas que lanzaron una excepción.
- **Navegación de código que encuentra cosas:**
  - Las filas de `grep_search` se agrupan bajo la función, método o clase en la que están.
  - Tras una edición, el recibo lista "Otros archivos a los que llega este cambio": llamadores de una declaración cambiada, eliminada o renombrada, con errores de TypeScript.
  - `find_symbol` ahora indexa 4.000 símbolos por archivo (antes 500) y archivos de hasta 2M caracteres, espera brevemente si el índice está frío, entiende los nombres de kind de forma flexible y encuentra abreviaturas como "calcTot".
  - Las referencias de `lsp` vienen agrupadas por archivo, y `call_hierarchy` acepta profundidad 1–3.
- **Correcciones de terminal y búsqueda:**
  - Las líneas de salida más largas que el ancho del terminal del agente ya no vuelven partidas con la línea siguiente pegada.
  - `grep_search` funciona en archivos CRLF y con globs de carpeta en rutas absolutas (por ejemplo `docs/**`).
  - En PowerShell, las reescrituras de `&&` / `||` y `exit` ya no alteran el texto dentro de cadenas: `git commit -m "Stop on Ctrl+C; exit cleanly"` se confirma tal como se escribió.
  - En Linux y macOS, las rutas `/mnt/d/…` ya no se confunden con la unidad D:.
- **La salida de MCP ya no infla el contexto:** un resultado de MCP de más de 20.000 caracteres se guarda en un archivo con vista previa, como la salida larga de terminal. Las imágenes de MCP se guardan como archivos y solo las tres más recientes del turno actual se envían al modelo. Antes, cada imagen de MCP de un hilo se reenviaba con cada petición posterior.

### Memoria

- **Recuerdo por contexto, en cualquier idioma:** ahora las memorias las elige un pequeño modelo local que lee tu petición, la conversación anterior y el archivo abierto. Las palabras clave y las listas fijas de palabras han desaparecido. Funciona en cualquier idioma, incluidos tailandés, hindi, coreano y texto latino con acentos, y sigue una conversación: un seguimiento corto que no nombra nada sigue encontrando la memoria de la que trata la conversación. Las memorias antiguas y dormidas tienen una oportunidad justa, y una memoria dormida despierta cuando un turno la necesita claramente. En un conjunto de pruebas con el que nunca se entrenó (10 idiomas), los turnos que necesitaban una memoria la obtuvieron el 62 % de las veces, frente al 41 %.
- **La IA puede consultar memorias paso a paso:** `memories_recall` ahora lista un índice (tipo, prioridad, estado, fecha, cómo coincidió), abre registros completos con lo que los enlaza y permite a la IA acotar un resultado: por texto exacto, fecha, tipo, prioridad u otra formulación de la consulta. Ya no necesita un plan Super Memory, y las memorias antiguas ya no quedan hundidas por su antigüedad al buscarlas. La tarjeta del chat muestra cada registro que se abrió.
- **Estado de memoria más claro:** el chat muestra cuándo se está ejecutando el recuerdo de memorias, cuándo un turno no usó ninguna y cuándo las memorias relevantes ya están antes en esta conversación. El recuerdo ya no bloquea la ventana con bibliotecas grandes. Una memoria que otra posterior demuestra errónea se conserva, marcada como no válida con un enlace a lo que la reemplazó, y nunca se entrega. Los nombres de herramientas ya no aparecen en lo que ves de una memoria.
- **Telemetría en la nube:** si la telemetría en la nube está activa, también se envían los números en los que decide el recuerdo: sin texto, y las memorias solo como hashes con sal. El texto de consentimiento lo dice en todos los idiomas, así que se te pedirá aceptarlo de nuevo.

### Modelos y proveedores

- **Nuevos modelos:**
  - GPT-6.1 Terra (OpenAI, Azure Foundry, inicio de sesión de Codex, OpenRouter y Breezell): el nivel GPT-6 rápido y más barato, con ventana de 1,05M. El pensamiento se puede desactivar.
  - Kimi K3.1 Pro y K3.1 Pro Highspeed (Moonshot, AIHubMix, Kimi Code, OpenRouter, OpenCode Go y Breezell), con sus propios precios.
  - AMD Radeon Cloud: Gemma-4-31B-IT, MiniCPM-V-4.7-35B-A3B y MiniCPM-V-4.7-1B. Qwen3.8-27B obtiene una ventana de 262K. MiMo-V2.6-Flash pierde la entrada de audio y el interruptor de pensamiento que su endpoint ya no acepta.
- **Correcciones:**
  - DeepSeek V3.1 / V3.2 y el Qwen3-235B-A22B original en Baseten, DeepInfra, Together AI, Fireworks, OpenRouter y Hugging Face mostraban un control de esfuerzo Low→Max inventado. Ahora tienen el interruptor de pensamiento activado/desactivado que admiten sus hosts.
  - El optimizador de prompts funciona con GPT-6.1 Sol (pedía desactivar el pensamiento, que OpenAI rechaza).
  - Los planes de inicio de sesión de Codex usan los nombres oficiales (Pro 100 / 200 / 500, Business, Business Premium, Enterprise, Edu…) en lugar de ids crudos como SELF_SERVE_BUSINESS_PROLITE. GPT-5.5, GPT-5.4 y GPT-5.4-mini, que ChatGPT retiró, han desaparecido de la lista de Codex.
  - Activar Fast en un modelo que perdió Fast ya no hace fallar todos los mensajes: se sirve en el nivel estándar.
  - Los modelos de Breezell muestran Ultrafast cuando el servicio lo ofrece, con su precio.
  - La información de precio muestra el precio de contexto largo de cada modelo de Breezell y todos los dígitos ($26.25, no $26.3).
  - Los inicios de sesión de cuenta se identifican con las versiones actuales del cliente (Antigravity 2.26.0, Kimi Code CLI 2.3.1, DeepSeek Harness 0.2.1-rc.3, Grok Build 1.0.67, Copilot Chat 0.71.0).

### Imágenes

- **Un solo lugar para los modelos de imagen: Box ▸ Modelos ▸ Generación de imágenes:** los modelos de imagen de los proveedores que configuraste en Modelos se listan ahí, una tarjeta por proveedor, con un modelo predeterminado y sus propios parámetros. Añade más desde el catálogo de cada proveedor. El `generate_image` del chat, el modo imagen del compositor e Image Studio dibujan todos con esta lista.
- **Mejores tarjetas de imagen en el chat:** la tarjeta de `generate_image` muestra el modelo con el que dibujará y puedes cambiarlo ahí. Las imágenes se abren en un visor (zoom, descargar, copiar, abrir en una pestaña del editor). Solo se ofrece generación de imágenes a la IA cuando un modelo de imagen puede dibujar de verdad, así que no hay más tarjetas que acaban en "Try again later".
- **Editar varios lugares a la vez:** "Editar esto" en una imagen abre "Marcar regiones para editar": marca hasta seis lugares, cada uno numerado en su propio color con sus propias instrucciones y un destino opcional. El diálogo ahora muestra la imagen a la izquierda y los lugares a la derecha. Lo mismo funciona en Image Studio.
- **Image Studio reconstruido:** el lienzo de nodos se sustituye por un compositor y páginas: Inicio (compositor y trabajo reciente), una página de creación con progreso, Detener y los resultados, la biblioteca, un visor y ajustes. Usa los colores de tu tema, la información emergente coincide con la del editor, se ofrecen todos los modelos de imagen de Box y de perfiles de API con los parámetros que aceptan, y cada resultado se guarda en la galería.
- **Modelos de imagen de Breezell:** los modelos de imagen propios de Breezell aparecen como una sola entrada, Breezell. Un modelo de chat de Breezell siempre dibuja con ellos.

### Red y fiabilidad

- **De vuelta al rumbo tras un cambio de VPN:** cuando un cliente VPN o proxy se caía y volvía, las peticiones podían seguir esperando en una conexión muerta durante minutos. Ahora una petición fallida hace que la siguiente abra una conexión nueva y vuelva a leer el proxy del sistema.
- **Las respuestas lentas ya no fallan a los dos minutos:** en los modelos de Breezell, un modelo que piensa minutos antes de su primera palabra, o una imagen que tarda más de dos minutos, fallaban con un error 524. Ahora la conexión se mantiene abierta, y cuánto esperar lo decide el editor.
- **Tiempo de espera del primer byte configurable, y que aprende:** Box ▸ Red y chat ▸ Tiempo de espera del primer byte: 40 (predeterminado), 60, 90, 120 o 180 segundos, o 20–240. Dentro de ese límite, la espera se adapta a los primeros bytes recientes de cada modelo, así que una petición colgada se reintenta antes (se comprueba cada 2 s en lugar de 10). La lista de salud de la red muestra por qué se reintentó cada petición (por ejemplo "retry #1 after no first byte") y su espera de primer byte.
- **HTTP/2 para las peticiones del chat:** las peticiones del chat ahora usan HTTP/2 de forma predeterminada, directamente y a través de proxies HTTP, HTTPS y SOCKS. Vuelve a HTTP/1.1 en Box ▸ Red y chat. Un servidor que cierra una conexión HTTP/2 antes de responder recibe la petición de nuevo.
- **Reglas de reintento en un solo lugar:** todos los proveedores siguen las mismas reglas de reintento. Nunca después de tu Detener, de una cuota agotada, de una petición rechazada o de texto que ya puedes ver. Un flujo cortado con "terminated" se reintenta como conexión caída. Un "451" en el texto de un error ya no se toma por un bloqueo regional.

### Actualizaciones

- **Las actualizaciones en caliente ya no desaparecen:** volver a hacer clic en el icono, abrir un archivo con Breezell o un enlace de inicio de sesión mientras Breezell estaba en marcha contaba como inicio fallido. Dos de esos hacían que Breezell descartara una actualización en caliente que funcionaba y volviera a la versión instalada para siempre. Esto ya no cuenta; solo los fallos reales.
- **Actualizaciones en Box:** Box tiene una entrada Actualizaciones al pie de su barra lateral que muestra la versión en ejecución. Se ilumina cuando se ofrece o está lista una actualización en caliente.
  - Una nueva actualización en caliente aparece en una tarjeta en la esquina inferior izquierda. Actualizar ahora la descarga e instala, y luego reinicia tras una cuenta atrás de 10 segundos (Cancelar, Reiniciar ahora). La cuenta atrás espera mientras hay una conversación en marcha en cualquier ventana.
  - Reparar olvida los inicios fallidos, vuelve a descargar el último paquete y reinicia en él.
  - Importar paquete instala un archivo de paquete que ya tengas, si su SHA-256 coincide con el publicado.
  - Si una actualización en caliente no puede iniciarse, la siguiente ventana lo dice una vez y ofrece Reparar y reiniciar.
  - Las descargas se reanudan tras una conexión caída, y las instalaciones esperan a que un análisis antivirus suelte la carpeta.

### Interfaz

- **Box rediseñado:** una barra lateral ramificada. Tarjetas de cuenta y de cambio de espacio (plan, días restantes, saldo). Una página Modelos nueva: barra de pestañas, cambio de categoría, tarjetas de proveedor más pequeñas, filas de modelo de una línea con capacidades solo en iconos y acciones de fila en un menú. Tarjetas de estadísticas e indicadores más pequeños, y barras de herramientas más ordenadas cuando la configuración de modelos está abierta.
- **Box ▸ Uso ▸ Uso de Breezell:** mira cuánto te cuestan los modelos propios de Breezell, petición por petición, con filtros, totales y desglose de precio por petición.
- **Pestañas del editor:** los colores de Git siguen siendo legibles en las pestañas (fondos neutros en lugar del tinte de acento). La pestaña activa del grupo enfocado recibe una breve línea de acento, y el verde de "añadido" de Breezell Dark es más brillante.
- **Iconos:** los codicons están actualizados (101 iconos nuevos). 24 existentes, como cerrar, sincronizar y bombilla, se han redibujado ligeramente.

### Bajo el capó

- Electron 43.8.4.
- Se han portado las correcciones de fugas de memoria de VS Code upstream desde 1.135: los editores, terminales, vistas de árbol, cuadernos y objetos de extensión cerrados ya no retienen memoria.
- La aplicación ahora se empaqueta con esbuild, como hace VS Code upstream 1.144.
- Vista previa nativa opcional de TypeScript 7: el ajuste `js/ts.experimental.useTsgo` y sus comandos han vuelto.
- Los paquetes de AI SDK y de proveedores se han actualizado a sus últimas versiones de parche.
- Los prompts integrados se entregan desde los servidores de Breezell. La página de privacidad ahora indica exactamente qué llega a los servidores de Breezell.

## 1.4.37 · Hot Update · 2026-10-21

### Chat

- **Nuevo modo DarkSelene:** Elige DarkSelene ("Descompone tu pregunta antes de construir nada") en el menú de modos bajo el cuadro de entrada. Antes de cambiar nada, piensa de principio a fin una pregunta difícil o fácil de malinterpretar. Usa una cantidad de tokens muy grande, así que úsalo con cuidado.
  - Paso uno · entender antes de construir: descompone la pregunta, investiga el código, cuestiona, verifica y deduce posibilidades. Antes de investigar escribe una Previsión: cómo debería verse la respuesta o el cambio terminado, y qué demostraría que está mal. La investigación comprueba solo esos puntos. Cuando el código confirma la previsión de inmediato, se omiten Cuestionar y Verificar.
  - Resolver con pruebas: toda pregunta que el código o tu petición puedan responder la responde DarkSelene por sí mismo. Solo lo que únicamente tú puedes decidir se pregunta en Tu opinión. Responde las preguntas una por una, o pulsa Ir con las recomendaciones.
  - Paso dos · ejecutar y revisar: la tarea que preparó se envía como tu mensaje y la ejecuta el Agent. Cada lectura inesperada y cada edición del Agent las revisan revisores independientes contra las pruebas (Revisiones de lectura, Revisiones de código), y sus hallazgos vuelven al Agent antes de que continúe.
  - El resumen final de DarkSelene conserva solo lo que las revisiones y comprobaciones confirmaron realmente.
- **La IA ya se entera de cuándo termina un comando en segundo plano:** un comando que superaba la espera y pasaba a segundo plano no se informaba hasta que enviabas otro mensaje. Ahora:
  - su tarjeta de terminal se actualiza con el resultado en cuanto termina el comando.
  - mientras la IA sigue respondiendo, su siguiente paso recibe el resultado y lo resuelve en el mismo turno: corrige un fallo o continúa el trabajo que lo esperaba.
  - cuando la IA ya terminó de responder, se inicia un turno nuevo por sí solo unos 1,5 segundos después de que termine el comando y reporta el resultado en una o dos frases. Varios comandos que terminan casi a la vez inician un solo turno.
  - no se inicia ningún turno para un comando que detuviste tú (el punto de detención o Ctrl+C), mientras la IA espera tu aprobación o tu respuesta, ni justo después de pulsar Detener.
- **Editar un mensaje enviado y volver a enviarlo ahora retira el original:** corregir una errata solo reemplazaba el texto. Los archivos que la IA había cambiado por la errata y las memorias tomadas de ese turno permanecían, así que la IA solía seguir en la dirección equivocada. Ahora, al editar y reenviar, primero se retira el mensaje original y todo lo posterior:
  - los archivos que la IA cambió desde entonces vuelven a como estaban; los que creó se eliminan.
  - las memorias tomadas de esa parte del chat, el registro causal y las aclaraciones de Entanglement, el archivo de plan y las notas de trabajo vuelven todos a como estaban antes del mensaje.
  - la IA solo se entera de que retiraste un mensaje, nunca de lo que decía.
  - normalmente el mensaje editado se envía de inmediato. La confirmación "¿Retirar y reenviar?" aparece solo en estos casos:
    - también editaste archivos a mano después del mensaje. Elige Mantener mis archivos editados para conservarlos, o Revertir todo y reenviar.
    - la IA ejecutó comandos cuyos efectos no se pueden deshacer automáticamente, como git commit o npm install. Los comandos se enumeran.
    - el chat no tiene ningún punto de control al que volver. Reenviar de todos modos retira solo la conversación.
  - un adjunto que no se puede enviar (por ejemplo un PDF que el modelo seleccionado no acepta) se detecta antes de retirar nada, así que nunca se retira un mensaje y luego falla el envío.
- **Revertir hasta este punto conserva lo que editaste antes de enviar:** los archivos volvían a como estaban al final del turno anterior, así que las ediciones de ese turno y el envío de este mensaje también se perdían. Ahora cada archivo vuelve a como estaba justo antes de que la IA lo tocara. Si envías un mensaje después de revertir, también se le dice a la IA que el chat se retrocedió.
- **El título temporal de un chat nuevo ya no incluye la segunda línea:** hasta que el modelo nombra el chat, el título temporal usa solo la primera línea de tu primer mensaje.

### Modelos

- **DeepSeek V4 Flash lee imágenes directamente:** el `deepseek-v4-flash` oficial y las instantáneas `-0731` en relays se trataban como solo texto, así que las imágenes pasaban por el proxy de visión (y no se podían enviar en absoluto sin uno). Ahora las imágenes van directas al modelo. Un nombre `deepseek-v4` sin "Flash" sigue tratándose como solo texto.
- **Grok 4 con el pensamiento activado ya no falla:** `grok-4`, `grok-4-0709` y `grok-4-latest` mostraban un ajuste de razonamiento de Low a Max y lo enviaban con la solicitud, que xAI rechaza. Grok 4 siempre razona, así que el ajuste ya no se muestra y el parámetro ya no se envía.
- **Sin opción de pensamiento para Gemini 2.0 Flash:** Gemini 2.0 Flash y Flash-Lite no pueden pensar, pero se trataban como modelos que sí pueden. La opción de pensamiento ahora solo aparece para Gemini 2.5 y posteriores (y el experimental 2.0 Flash Thinking).
- **El enlace de confirmación de inicio de sesión de Google ya no se corta:** cuando Gemini mediante una cuenta de Google te pedía confirmar una vez en el navegador, el enlace de confirmación podía cortarse en su primer "&" y la página no abría.
- **La API oficial de OpenAI ya no continúa una versión antigua del chat:** con una clave de API de OpenAI, después de editar o revertir un mensaje, o de que el chat se compactara, el servidor podía continuar desde la versión antigua y el modelo no veía lo que realmente enviaste. Ahora solo continúa mientras los mensajes anteriores no hayan cambiado, y en caso contrario vuelve a enviar toda la conversación.

### Vista previa de versión

- **Nueva telemetría en la nube:** está en Box ▸ Rendimiento ▸ Vista previa de versión. Solo está disponible para las suscripciones que un administrador habilita; las demás ven por qué no está disponible. Antes de activarse explica qué recopila Breezell, y solo surte efecto después de pulsar Aceptar y activarla.
  - mientras está activa, las descripciones de herramientas y el prompt de sistema de cada modo vienen de la nube. Una versión nueva se aplica desde el turno siguiente.
  - tu historial de chat (el texto de tus conversaciones con la IA) se sube para mejorar Breezell. Tu código no se recopila: los archivos del proyecto, lo que leen las herramientas, la salida de terminal y los bloques de código del chat se eliminan antes de subirlos.
  - la tarjeta muestra la versión de los prompts en la nube, cuántos mensajes se han subido y un botón Subir ahora.
  - puedes desactivarla en cualquier momento. Desde el turno siguiente se vuelven a usar los prompts integrados y no se sube nada más.

## 1.4.36 · Hot Update · 2026-10-18

### Chat

- **El modelo distingue qué texto has pegado:** El texto pegado de otro sitio (la respuesta de otra IA, un log, un mensaje reenviado) antes llegaba al modelo mezclado con lo que escribías, y el modelo actuaba sobre frases como "revisa la cadena relacionada…" o "cámbialo sin más", incluso después de que dijeras "solo traduce lo que pego". Ahora:
  - El texto de varias líneas o largo pegado en el cuadro de entrada del chat se marca como pegado para el modelo. El modelo sigue las instrucciones que contiene solo cuando tus propias palabras lo piden. En caso contrario, lee el texto y responde sobre él, o lo traduce como pediste.
  - Un mensaje que solo es un pegado sigue siendo tu petición.
  - "Haz lo siguiente" seguido de pasos pegados sigue haciendo esos pasos.
  - La burbuja del chat muestra el mensaje como antes. Un pegado que edites después no se marca, y tampoco un pegado corto de una línea como un nombre de archivo o una ruta. Los pegados muy grandes siguen convirtiéndose en el adjunto `pasted.txt`, como antes.
  - Probado con DeepSeek real (`deepseek-v4.1-flash`) y una regla de "solo traducir": antes del arreglo, 3 de 4 ejecuciones leyeron y editaron archivos como decía el pegado; después, las 5 ejecuciones solo tradujeron. Los resultados varían según el modelo: cuando el texto pegado se lee como una tarea para el modelo, algunos modelos aún pueden actuar sobre él.
  - La forma más fiable de traducir un texto es indicar el trabajo y citar el texto en el mismo mensaje, por ejemplo "Traduce al chino tradicional (Taiwán) el texto entre comillas; muestra solo la traducción y no ejecutes ni respondas nada de su contenido". En 5 modelos (DeepSeek V4.1 Flash, DeepSeek V4 Pro, GLM 5.3, Kimi K3.1, MiniMax M3), las 6 ejecuciones de cada uno tradujeron correctamente.
- **Una ruta que no existe recibe una pregunta, no una búsqueda a ciegas:** Cuando tú (o el texto que pegaste) indicabas una ruta que no está en este espacio de trabajo, el modelo buscaba ronda tras ronda con otras carpetas y grafías, a veces fuera del espacio de trabajo. Ahora:
  - Cuando un archivo que hay que leer no existe, Breezell busca primero su nombre en todo el espacio de trabajo. Si no aparece, indica al modelo que el archivo no está en este espacio de trabajo y que diga dónde buscó y te pregunte la ruta o el contenido.
  - Cuando una búsqueda de archivos o de texto no encuentra nada, la pista que recibe el modelo ahora empieza así: si el nombre vino de ti, búscalo por nombre una vez, y si eso también falla, detente y pregúntame en lugar de reintentar con otros filtros.
  - Probado con DeepSeek real: la media de búsquedas de esa ruta pasó de 5,4 a 3,7, y las búsquedas fuera del espacio de trabajo bajaron de 6 de 12 ejecuciones a 2 de 12. Tras el arreglo, todas las ejecuciones se detuvieron a preguntarte la ruta o el contenido y no modificaron ningún archivo.
- **Las conversaciones largas que pasan de GPT a Claude ya no superan el límite de contexto:** al cambiar una conversación larga de 1M de contexto de un modelo GPT a un modelo Claude, el envío podía fallar directamente con "prompt is too long: 1100588 tokens > 1000000 maximum". Para el mismo contenido, Claude cuenta entre un 50 % y un 70 % más de tokens que GPT, pero tras el cambio Breezell seguía usando el consumo que había informado GPT para decidir si compactar, así que la solicitud se enviaba sin compactar. Ahora:
  - al cambiar a un modelo que cuenta de otra forma, el consumo se recalcula con el nuevo modelo y el uso de contexto del cuadro de entrada se actualiza en consecuencia; cuando está casi lleno, Breezell compacta automáticamente antes de enviar. Cambiar dentro de la misma familia (GPT por GPT, o Claude oficial por el Claude de un relay) sigue reutilizando el consumo exacto.
  - los modelos Claude a los que se accede mediante relays compatibles con OpenAI, OpenRouter y similares ahora cuentan los tokens al modo de Claude, en lugar de quedarse un 10 % a un 20 % por debajo.
  - cuando un modelo informa que se superó el límite de contexto, la compactación automática siempre pliega primero el contenido más antiguo y luego reintenta; antes, una conversación larga ya compactada podía reenviarse tal cual sin plegar nada y volver a fallar.
- **Tras detener o enviar un mensaje a mitad de respuesta, el modelo sabe que la respuesta anterior quedó sin terminar:** antes, una respuesta cortada pasaba desapercibida para el modelo, que podía tomar trabajo a medias como algo aún en curso, o una frase añadida como la tarea completa. Ahora:
  - si envías un mensaje después de pulsar el botón de detener del cuadro de entrada (el icono cuadrado) o Esc, el modelo sabe que lo detuviste a propósito. A menos que le pidas continuar, o que añadas o corrijas ese trabajo, no sigue adelante ni lo saca a colación.
  - si pulsas "Enviar ahora" en la cola mientras una respuesta sigue en curso, y el nuevo mensaje añade o corrige el trabajo recién hecho (por ejemplo "además el número de teléfono debe ser de solo lectura" o "continúa"), el modelo completa ese trabajo con el cambio incluido; si es otra cosa, solo hace lo nuevo y menciona en una frase como máximo que la respuesta anterior quedó sin terminar.
  - una petición nueva que solo menciona el mismo archivo o página no se toma como una indicación de continuar el trabajo anterior.
### Memoria

- **Los archivos de memoria ya no aparecen en las búsquedas:** los archivos de memoria (`.breezell/memories/workspace_memories.md` en el proyecto y `global_memories.md` en tu carpeta de usuario) son notas sobre cómo estaban las cosas cuando se escribieron. Las búsquedas de código solían devolverlos junto al código, y el modelo podía tomar una entrada muy desactualizada como la especificación actual y deshacer lo que le habías pedido hace poco. Ahora:
  - La búsqueda de texto, la búsqueda de símbolos y la búsqueda por nombre de archivo ya no devuelven estos dos archivos de memoria, ni siquiera al pedir que se incluyan los archivos ignorados. Los archivos de reglas de la misma carpeta (`global_rules.md`, `global_skills.md`, etc.) y los demás archivos bajo `.breezell/` se buscan como antes y no se tratan como notas con fecha.
  - Cuando el modelo abre directamente un archivo de memoria, se le dice que las entradas son notas con fecha que pueden estar desactualizadas. Tu última petición y el código actual mandan: el modelo señala la discrepancia y pregunta si actualizar esa entrada.
  - El modelo escribe las memorias como "cómo están las cosas a fecha de hoy", con sus condiciones, no como reglas permanentes. Cuando su propio cambio deja una entrada incorrecta, la actualiza o la borra en el mismo turno.
- **Las memorias de una conversación ya no se inyectan de vuelta en ella:** las memorias relevantes de "Se inyectaron N memorias (… residentes · … relevantes)" ya no incluyen memorias extraídas de la conversación actual. Esa conversación ya contiene ese contenido, en orden; inyectado de nuevo como memorias se leía como reglas permanentes, podía devolver al modelo a una petición anterior y ocupaba el lugar de memorias de otras conversaciones. Otras conversaciones siguen usando estas memorias, y las que guardaste tú no se ven afectadas. Cuando una memoria y el código no coinciden, el modelo ahora lo menciona en lugar de cambiar código sobre el que no le preguntaste.

### Editor

- **"Siguiente →" en la barra de N archivos modificados no hacía nada:** después de que la IA edite archivos, la parte inferior del editor muestra "9 archivos modificados" y "Siguiente →". Si el primer archivo de esa lista ya no se abría (borrado o renombrado después, o un cambio que quedó de una sesión anterior), "Siguiente →" no hacía nada: como el archivo que tenías abierto no estaba en la lista, cada clic reintentaba ese mismo archivo y el botón nunca funcionaba. Ahora:
  - Un archivo que no se abre se omite, y el salto cae en el siguiente archivo modificado que sí se abre. Lo mismo vale para las flechas izquierda y derecha de la barra (archivo anterior/siguiente) y para los atajos Ctrl+Alt+Shift+→/← (Mac: Ctrl+Option+→/←).
  - Cuando ninguno de los archivos de la lista se abre, una notificación explica por qué.
  - Los botones funcionan cuando el foco no está en un editor (por ejemplo, justo después de hacer clic en otro panel).
  - Los cambios que quedan en un espacio de trabajo remoto (SSH, WSL) ya no vuelven como rutas locales que no se pueden abrir después de reiniciar Breezell.

### Modelos

- **Añadido MiniMax M3.1 Flash:** `MiniMax-M3.1-Flash` está disponible tanto en MiniMax (clave API) como en Cuenta MiniMax (inicia sesión con una cuenta MiniMax), primero en la lista de modelos de MiniMax.
  - Contexto de 1M y entrada de imágenes.
  - El modelo siempre piensa; el pensamiento no se puede desactivar. La intensidad de razonamiento es Low, Medium, High, Extra High o Max, y el valor predeterminado es High. Cuando no se indica intensidad, MiniMax usa Max, que es más lento y consume más cuota.
  - Los dos formatos de API, OpenAI y Anthropic, funcionan. MiniMax recomienda Anthropic.
  - El mismo modelo a través de un relay u OpenRouter (por ejemplo `minimax/minimax-m3.1-flash`) recibe también estos ajustes, en lugar de los de M3 de "el pensamiento se puede desactivar", que este modelo rechaza.
  - MiniMax aún no publica un precio por uso para este modelo; necesita una clave de M Plan.

### Modo Entanglement

- **El "Modo de intervención humana" ya no se atasca con modelos a los que no se les puede imponer una herramienta:** con el "Modo de intervención humana" de la "Verificación estricta del modo Entanglement" activado, Breezell pide al modelo que compruebe los requisitos contigo mediante el panel de preguntas. Algunos modelos no pueden: GLM ignora la petición y responde en texto plano, y esa respuesta se descartaba como error (AI_ToolChoiceViolationError) mientras la tarjeta de error culpaba a la red; Kimi y DeepSeek V4 con el pensamiento activado rechazan la petición directamente (HTTP 400). La comprobación nunca se completaba y todos los mensajes posteriores fallaban de la misma forma. Ahora:
  - cuando el modelo responde en texto en lugar de usar el panel de preguntas, esa respuesta se conserva.
  - cuando el modelo se niega, la petición se reenvía sin imponer herramienta.
  - Breezell recuerda ese modelo y deja de pedirle el panel de preguntas.
  - el modelo pregunta dentro de su respuesta, y la fila muestra "Este modelo no puede usar el panel de preguntas y pregunta en su respuesta; tu siguiente mensaje es la respuesta"; cuando respondes muestra "Entendido y comprobado contigo en la conversación", la comprobación se completa y las herramientas se desbloquean.
  - la tarjeta de error indica correctamente que el modelo no llamó a la herramienta requerida, en lugar de presentarlo como un problema de red.

## 1.4.35 · Hot Update · 2026-10-18

### Chat

- **El modo Agent ya no cambia al modo Entanglement:** Con la estrategia adaptativa activada, las tareas que el modo Agent clasificaba como "estrictas" (un mensaje que describe un fallo o una nota de actualización pegada que describe correcciones, por ejemplo) se ejecutaban en modo Entanglement, mostrando el panel de investigación LOCATE／VERIFY／FIX, el criterio de finalización y la verificación estricta "este tipo de síntoma se da por resuelto con tu confirmación". Ahora el modo Agent siempre se ejecuta como Agent con el conjunto completo de herramientas; el panel de investigación de Entanglement y la verificación estricta solo aparecen cuando seleccionas tú mismo el modo Entanglement.
- **Desplazarse hacia arriba ya no deja la vista en blanco ni salta al final:** en una conversación con un mensaje muy largo, al desplazarse hacia arriba cerca de ese mensaje la vista podía quedar en blanco de repente y, al volver a desplazarse, toda la lista regresaba al final; ocurría cada vez que se reabría la conversación. La causa era que un mensaje largo se dibujaba primero con su altura completa y se plegaba un instante después, de modo que la lista de la conversación se redistribuía una y otra vez. Ahora un mensaje largo aparece ya con su altura plegada desde el principio y el desplazamiento hacia arriba se detiene donde lo dejaste.
- **Paciencia con los relays que retienen las respuestas:** algunos relays retienen todo el proceso de pensamiento del modelo y lo entregan solo cuando ha terminado, de modo que el chat se queda completamente inmóvil entre diez segundos y varios minutos. Los modelos marcados por la "Comprobación de streaming" ahora:
  - se envían con la intensidad de razonamiento que configuraste y nunca se reducen automáticamente;
  - esperan la respuesta en lugar de darla por agotada y abortar con reintento tras un silencio prolongado;
  - mientras esperan, comprueban la API cada 5 segundos y envían un breve "hola" cada 20 segundos para confirmar que el modelo sigue respondiendo; si una comprobación falla aceleran el ritmo y vuelven al normal cuando tiene éxito;
  - muestran "El modelo está pensando: este relay retiene el proceso de pensamiento · 32 s · API correcta (confirmada hace 3 s)", para que sepas que sigue trabajando;
  - solo se detienen cuando una comprobación confirma que la API realmente no responde, mostrando "API confirmada sin respuesta", sin reintento automático; al desplegar se ven el número de comprobaciones y el último error.
- **Copiar el contenido de la conversación:** el texto copiado de una conversación y pegado en otro lugar conserva el formato que veías en pantalla y ya no arrastra símbolos Markdown como `**`, `#` o `-`. "Citar" sigue conservando Markdown, y ahora los párrafos y los elementos de lista se separan con el salto de línea correcto.

### Modelos y conectividad

- **Nueva "Comprobación de streaming":** en Box ▸ Modelos ▸ Compatible con OpenAI ▸ Conectividad, selecciona modelos y pulsa "Comprobación de streaming". El modelo resuelve una breve pregunta de razonamiento y luego cuenta del 1 al 120 mientras Breezell registra cuándo llega cada fragmento y clasifica el resultado:
  - Streaming normal: el contenido llega fragmento a fragmento.
  - Pensamiento retenido: la respuesta llega fragmento a fragmento, pero el proceso de pensamiento queda retenido por el relay, así que el chat primero se queda en silencio y luego lo muestra todo de golpe.
  - Búfer completo: toda la respuesta llega solo al final.
  - No concluyente: la respuesta es demasiado corta.
  Los modelos clasificados como "pensamiento retenido" o "búfer completo" quedan marcados y usan el comportamiento de espera anterior en el chat; la marca se borra cuando una nueva comprobación da un resultado normal, cuando la comprobación falla o cuando cambia el endpoint. Cada modelo usa unos 300 tokens de salida, más los tokens de razonamiento en los modelos de razonamiento.
- **Seleccionar primero y comprobar después:** la página de conectividad ya no comprueba todos los modelos automáticamente al abrirse. Selecciona los proveedores y modelos que quieras comprobar (hay seleccionar todo y quitar selección) y elige "Solo comprobar conexión", "Comprobar seleccionados" o "Comprobación de streaming"; los elementos sin seleccionar conservan sus resultados anteriores.
- **Nuevos modelos de OpenRouter:**
  - DeepSeek V4.1 Flash 1017 (`deepseek/deepseek-v4.1-flash-1017`): contexto de 1M, texto e imágenes, intensidad de razonamiento low／high／max, y posibilidad de desactivar el razonamiento.
  - Xing4.0 29B A4B gratis (`xingchen-agi/xing4.0-29b-a4b:free`): contexto de 262K, solo texto, compatible con llamadas a herramientas y razonamiento activable o desactivable.

### Interfaz

- **Separador con la barra lateral principal a la derecha:** en la interfaz clásica, con la barra lateral principal a la derecha, el editor y el panel inferior carecían de una línea separadora en su borde derecho; y si además se ocultaba la barra lateral secundaria, el borde izquierdo de la ventana mostraba un hueco y una línea de más. Ambos problemas están corregidos.
- **El menú de la barra lateral de Box se muestra completo:** cuando la barra lateral de Box está plegada en una franja de iconos, el menú que aparecía al pulsar un grupo mostraba solo una franja fina. Ahora el menú se muestra completo dentro de la ventana y sigue su posición al desplazarse o cambiar el tamaño de la ventana; el selector de espacio y el menú de la cuenta funcionan igual.

### Herramientas

- **Llamadas a herramientas más precisas:**
  - La búsqueda web respeta el número de resultados, la profundidad de búsqueda y el tema que indica el modelo en lugar de ignorarlos.
  - Los parámetros de lista y booleanos declaran su tipo, de modo que los proveedores estrictos ya no reciben parámetros tratados como texto, y un parámetro cuya descripción menciona "optional" de pasada ya no se toma por opcional.
  - La búsqueda de texto añade coincidencia de palabra completa, un límite de resultados por archivo y la posibilidad de buscar archivos excluidos por las reglas de ignorados; la búsqueda de archivos permite indicar una carpeta, y la navegación de código acepta un número de línea para llegar al punto exacto que busca el modelo.
- **El navegador en segundo plano lo dice claramente:** cuando un modelo abre una página en el navegador sin interfaz (una ventana en segundo plano que no ves), ahora indica que la cargó en segundo plano en lugar de afirmar que la abrió para ti, y explica cómo verla: abre la pestaña "Navegador" y navega de nuevo, o desactiva "Navegador sin interfaz" en Ajustes ▸ Funciones.

## 1.4.34 · Hot Update · 2026-10-17

- **El razonamiento ya no se filtra en las respuestas:** al usar un servicio compatible con OpenAI (por ejemplo, DeepSeek en una pasarela autoalojada), si el nombre del modelo no estaba en la lista integrada, se había desactivado el razonamiento en los ajustes del modelo o la extracción de razonamiento estaba configurada en `native`, el proceso de pensamiento aparecía al inicio de la respuesta junto con las etiquetas `<think>`. Ahora el pensamiento se muestra siempre en el panel de razonamiento y la respuesta contiene únicamente la contestación final.
- **La interacción humana solo se aplica en el modo Entanglement:** al activar el modo estricto y la interacción humana, si en el modo Agent la estrategia adaptativa clasificaba una tarea como estricta, antes también se bloqueaban las herramientas y se pedía responder primero a preguntas de confirmación. Ahora esta confirmación solo se realiza cuando seleccionas explícitamente el modo Entanglement.
- **Símbolo `@` más nítido:** el botón `@` del cuadro de entrada, el encabezado del menú `@` y los atajos de teclado de la página en blanco ahora utilizan la fuente de la interfaz en negrita para no verse delgados ni achatados.
- **Transición más fluida a la interfaz clásica:** al volver de la interfaz moderna a la interfaz clásica, el cuadro de entrada ya no se desvanece desde el color de fondo de la interfaz moderna.

## 1.4.33 · Hot Update · 2026-10-15

- **Archivos adjuntos de vídeo:** cualquier vídeo arrastrado al chat se envía siempre y ya no se bloquea porque el modelo no figure en una lista de compatibilidad (por ejemplo, `kimi-k3`). Que el modelo pueda comprender el vídeo depende del propio modelo y de su proveedor. Como los formatos Anthropic y OpenAI Responses no admiten el transporte de vídeo, se informa al modelo de que el vídeo no se adjuntó y la solicitud se envía igualmente.
- **Llamadas a herramientas más estables:** cuando un modelo escribe llamadas a herramientas como texto, un parámetro que espera una cadena ya no convierte `true`, `null` o `123` en un booleano o un número, y al reemplazar código Python ya no se reescriben `True` y `None` dentro de las cadenas como `true` y `null`.
- **Detención y errores:** al pulsar Detener o producirse un error en medio del razonamiento, se conserva el tiempo de pensamiento con un decimal (en lugar de mostrar `0.1s` o truncarlo a segundos enteros), y la respuesta guardada ya no conserva marcas internas.
- **Tarjeta de cambio de modo:** tras pulsar Omitir, Cancelar o finalizar la cuenta atrás, el chat espera a que termine la ejecución anterior antes de continuar para que nunca se solapen. Si envías un mensaje en cola mientras la tarjeta espera, el nuevo mensaje toma el relevo.
- **Agent Teams:** cada compañero comienza desde el mismo primer mensaje, que incluye tu solicitud original (nunca un aviso del sistema en su lugar), incorpora el ID de la tarea y solicita la misma verificación que exige la comprobación final. Detener o disolver a un compañero limpia por completo sus recursos.
- **Lista de herramientas:** la herramienta retirada `create_team` ya no aparece en Agent, Entanglement, Analyze ni Plan, evitando que los modelos llamen a ese punto de entrada obsoleto.
- **Verificación de archivos:** una vez que un archivo verificado se sobrescribe por completo o es modificado por un script, la comprobación anterior deja de ser válida y el archivo debe verificarse de nuevo.
- **Estrategia adaptativa:** una solicitud de triaje que agota el tiempo de espera se cancela siempre en lugar de mantener el modelo ocupado en segundo plano.

## 1.4.32 · Hot Update · 2026-10-15

- **Teams:** la tarjeta de informe de un compañero ya no muestra filas de "x" cuando la respuesta del agente principal (lead) se ha descargado de la memoria; la misma corrección abarca el informe de Analyze, la generación de mensajes de commit y los resúmenes del modo competitivo.
- **Nuevo modelo:** Meta Muse Spark Open (pesos abiertos, 1M de contexto, esfuerzo de razonamiento `low`–`xhigh`) disponible en OpenRouter, Fireworks, Groq y cualquier endpoint compatible con OpenAI.

## 1.4.31 · Hot Update · 2026-10-15

- El cuadro de intervalo de comprobación en la página de versión ya no muestra flechas arriba/abajo; escribe directamente el número de segundos.
- Ediciones de archivos, comprobaciones de lint y puntos de control más rápidos, además de ejecuciones de herramientas más estables: una única llamada a herramienta ahora sigue la misma ruta que varias, una actualización de plan fallida ya no detiene el turno y las herramientas que esperan aprobación en paralelo ahora lo muestran en pantalla.
- Respuestas más fiables a través de servicios de retransmisión (relay): cuando un servicio de retransmisión corta una respuesta sin indicar que ha finalizado, Breezell conserva la respuesta si está completa, reintenta la que nunca llegó a iniciarse y muestra lo último que envió el relay.
- Las versiones completas ahora pueden reemplazar actualizaciones en caliente (hot updates) con un número de versión superior al suyo.

## 1.4.3 · 2026-10-15

### Nuevas funciones
- **Modelo Meta Muse Wonder:** admite hasta 1 millón de tokens de contexto, acepta entradas de vídeo y audio, y ofrece intensidad de inferencia ajustable en 6 niveles (de mínimo a máximo).
- **Inicio de sesión con cuenta de Muse Code:** autoriza mediante tu cuenta de Meta para acceder a Muse Wonder; el inicio de sesión es compatible con proxies HTTP personalizados.
- **GPT-6.1 Sol añade contexto de 500K:** al enrutar a través de Codex y Breezell, las opciones ahora incluyen 272K, 500K o 1M; el valor predeterminado sigue siendo 272K.
- **Actualización en caliente (Hot Update):** los futuros parches se pueden descargar directamente desde el editor sin necesidad de reinstalar el instalador completo. Se muestra el progreso de la descarga y se aplica tras reiniciar. Las ventanas remotas de WSL/SSH siguen operativas durante las actualizaciones en caliente.
- **Menú contextual en el cuadro de entrada del chat:** incluye Deshacer, Rehacer, Cortar, Copiar, Pegar y Seleccionar todo.
- **Aviso de cuota agotada:** cuando tu cuenta de Breezell se queda sin cuota, aparece un aviso con un botón de "Recargar" sobre el cuadro de entrada que desaparece automáticamente tras recargar, evitando errores tardíos después de enviar solicitudes.

### Mejoras
- **Gemini 4 Argon:** alineado con la API oficial publicada; ya disponible en OpenRouter y Vertex.
- **DeepSeek:** utiliza el formato Responses de forma predeterminada y solo requiere la clave API en la configuración.
- **Gemini con cuenta de Google:** las solicitudes dentro de una misma conversación comparten el estado de la sesión, lo que mejora la tasa de aciertos de caché y reduce costes.
- **Modelos alias de Breezell:** la intensidad de inferencia seleccionada se conserva correctamente (por ejemplo, "minimal" ya no cambia automáticamente a "medium") y se asigna al nivel de modelo correspondiente.
- **Modelos de inferencia:** los prompts extensos enviados por WebSocket de Responses ya no agotan el tiempo de espera a los 60 segundos, y recurren automáticamente a un reintento por HTTP cuando la conexión no responde.
- **Code Review**
- **Modo Plan:**
  - **Permisos de herramientas:** las herramientas de terminal y editor permanecen disponibles para todas las acciones salvo preguntas simples, eliminando el error "This conversation has no permission to run commands".
  - **Confirmación humana:** si queda pendiente una confirmación del turno anterior, el siguiente mensaje solicitará primero dicha confirmación sin bloquear la sesión de forma permanente en modo de solo lectura.
- **Chino tradicional:** las notificaciones de actualización, la ventana Acerca de, las advertencias de rutas WSL, los botones de diff, los mensajes de error de Image Studio, la página de inicio de sesión de DeepSeek y los nombres de países/idiomas en la traducción de palabras ahora se muestran en chino tradicional.

### Correcciones
- El diff de archivos recién creados ya no añade una línea en blanco eliminada de más (antes mostraba `+4 −1`).
- Los archivos de una sola línea ahora muestran el diff correcto `+1 / −1` (antes `+2 / −2`).
- Tras desplazarse por conversaciones largas, las rutas y los números de línea de los archivos editados se conservan, y los pasos de Code Review no vuelven al estado de carga.
- Las tareas pendientes (to-do) fuera de pantalla conservan su contenido, evitando huecos en blanco en la conversación y saltos al desplazarse hacia arriba.
- El desplazamiento y los clics en el chat funcionan correctamente en pantallas táctiles y herramientas táctiles remotas.
- Al actualizar la lista de modelos, los ID de modelos personalizados ya no se marcan como caducados ni se eliminan.
- Los fallos de inicio de sesión en Grok ahora indican qué ruta de red y qué host no pudieron conectarse.
- Se corrigieron el enrutamiento y la facturación de los perfiles de velocidad Fast y Ultrafast.
- La desinstalación de una actualización en caliente ya no elimina archivos dentro del directorio de instalación (evitando el fallo de inicio "Cannot find package").

## 1.4.2 · 2026-10-10

### Nuevas funciones
- **Control de escritorio:** permite inspeccionar la pantalla, hacer clic y escribir en Windows; macOS utiliza un asistente nativo en Swift para ofrecer las mismas funciones. Permite abrir aplicaciones por su nombre y las capturas de ventana ahora reconocen capas modales y ventanas emergentes. Totalmente compatible con el modo Entanglement. Linux no es compatible actualmente y llegará en futuras versiones.
- **Supervisión de modelos en Box:** nueva página dedicada que comprueba los proveedores configurados o autenticados solo al abrirse, mostrando el historial mediante una barra de color de 90 días.
- **Selección automática de modelos (experimental):** descompone y revisa tareas con una página de análisis dedicada. Las páginas de red y conversación ahora permiten ver capa por capa la ruta del modelo activo, e incluyen diagnósticos de ruta para solicitudes bloqueadas.
- **Inicio de sesión directo:** compatibilidad con inicio de sesión directo para DeepSeek, MiniMax y OpenRouter, además de inicio de sesión en cliente de escritorio para Gemini.
- **Image Studio:** ahora permite generar imágenes y vídeos a través de OpenRouter.
- **Nuevos modelos:** se añaden Claude Haiku 5.5 (con opción de desactivar el razonamiento), Claude Opus 5.5, Mistral Large 4, Nano Banana 2.1, Fledge Alpha, Ling 3.1 Flash, Apodex 1.1 Mini, Aion 3.5 / Mini, Pareto 26.10 Preview y Glyph Cluster. Modo Ultrafast disponible para GPT-6.1 Sol y GPT-6 Astra, también en Codex. Step 5 Preview ahora admite entrada de vídeo.
- **Mejoras en el modo Entanglement:** incorpora verificación estricta y perfiles adaptativos. Ahora se pueden formular preguntas durante las tareas activas, conservando las respuestas. El motor causal añade el requisito de "fallar primero para reproducir y pasar tras corregir".
- **Conversaciones:** traducción en un clic para los procesos de razonamiento. Los enlaces web ahora muestran el favicon del sitio. Los enlaces a archivos muestran una sugerencia de ruta limpia con vista previa de imágenes. Las imágenes admiten zoom con la rueda del ratón y desplazamiento por arrastre. Ahora es posible crear ramas desde cualquier turno de la conversación.
- **Agent:** visualiza y cancela tus tareas en segundo plano. Permite buscar conversaciones recientes por título. Vuelve a habilitar Skills desactivadas directamente desde el menú de barra diagonal (`/`). Las áreas de trabajo multirraíz ahora leen Skills y reglas de cada una de sus carpetas.
- **Terminal:** la barra de estado ahora muestra la velocidad de subida y bajada de comandos en tiempo real en Windows, proxy local y macOS.
- **Otras novedades:** Copilot muestra el icono de marca correspondiente a cada modelo. Ahora se pueden renombrar o añadir tareas en planes en ejecución. Se actualizan las habilidades de Superpowers a la versión v6.4.2. El registro de uso de Box ahora contabiliza las solicitudes en segundo plano. La página de configuración de modelos se ha rediseñado con una barra lateral junto a paneles ajustables de lista y detalles.

### Correcciones
- Se corrigió un problema por el cual, al copiar mensajes, las respuestas fuera de pantalla se convertían en una larga cadena de "x".
- Se corrigió un error por el cual, al fallar ediciones simultáneas en un mismo archivo, se generaba una serie repetida de mensajes "Edit attempted".
- Al detener la compresión de contexto a mitad de proceso, la operación se cancela limpiamente sin conservar fragmentos incompletos.
- Las llamadas a herramientas bloqueadas ahora se consideran fallidas y solicitan dividir la carga de trabajo en partes más pequeñas en lugar de reintentar de forma idéntica.
- Las ediciones ya no se marcan erróneamente como obsoletas cuando el modelo ya ha leído el rango o coincide de forma flexible con el texto actual.
- Se corrigió la pérdida de fragmentos finales cuando una respuesta de cuentas de Google se dividía en múltiples lecturas de red.
- Presionar Intro repetidamente mientras se envía un mensaje ya no encola envíos duplicados.
- Se corrigió un problema por el cual el archivo completo de Skills se seguía incluyendo en el prompt del sistema aunque todas estuvieran desactivadas.
- Se corrigió un problema que provocaba el bloqueo de toda la sesión de conversación cuando una herramienta del navegador integrado se quedaba colgada.
- Se corrigió el envío de puertos `:443` redundantes en la cabecera `Host` mediante proxy HTTP; las direcciones de bucle invertido (loopback) ahora omiten correctamente el proxy.
- Se corrigió un error que provocaba que la vista saltara abruptamente hacia abajo al desplazarse hacia arriba en conversaciones finalizadas.
- Se corrigió la falta de margen para los controles de ventana a la izquierda en la barra de título de Linux y en Image Studio.
- Se solucionó la pérdida de ediciones pendientes de confirmación cuando una herramienta sobrescribía el archivo por completo.
- Se corrigió el fallo al abrir conversaciones antiguas en Windows y se solucionaron dos errores de tipo obsoletos en el paquete de configuración.

### Mejoras
- **Conversaciones extensas:** reducción de tirones, picos de latencia y problemas de rendimiento en sesiones largas.
- **Página de rendimiento:** al activar la supervisión, ahora muestra los tiempos de ejecución de rutas críticas, la cantidad de cuerpos de mensaje en memoria y si se leyó el almacenamiento en el inicio.
- **Entorno de ejecución:** actualización de Electron a la versión 43.7.9.
- **Precios y catálogo:** los precios de los modelos se han sincronizado con las tarifas oficiales de los proveedores. Las opciones alojadas de Qwen y Grok ahora solo mantienen los niveles oficiales de contexto. El catálogo de Gemini (Google) se limita a los modelos de conversación a los que la cuenta tiene acceso real.
- **Terminal:** se elimina el eco innecesario de las líneas de comandos, se reconocen los prompts temáticos de la shell y se informa del código de salida (exit code) al finalizar. Las tarjetas de comandos se mantienen compactas hasta que se produce una salida.
- **Interfaz:** estilo visual unificado entre el selector de modelos y la superposición de modelos en la configuración. El campo de entrada de la conversación y la bandeja inferior ahora se integran en una sola tarjeta.

## 1.4.1 · 2026-10-01

### Nuevas funciones
- **Preanálisis de memoria en Box (experimental):** se seleccionan los recuerdos relevantes antes de cada respuesta. La página de análisis de memoria muestra el progreso en streaming. La ranura del modelo se llama **MemoryPreflight**.
- Ahora se pueden exportar paquetes de memoria desde Box.
- El inicio de sesión de escritorio ahora se confirma en el navegador antes de volver al editor.
- **Interruptor de monitorización de rendimiento en Box:** la supervisión de rendimiento ahora se puede activar o desactivar. Las estadísticas agrupan las ventanas por servidor remoto y se limpian los hosts de extensiones residuales.
- El búfer del terminal ahora se limpia automáticamente.
- Ahora puedes citar conversaciones anteriores en la sesión actual; se identifican con un robot dorado y se borran junto con la bandeja de entrada.
- Las operaciones del navegador con IA ahora se ejecutan de forma predeterminada en ventanas ocultas; las capturas de página pasan a leer el árbol de accesibilidad, configurable en las opciones de funciones de Box.
- Se añade compatibilidad con el proveedor de modelos AMD, **GPT-6.1 Sol** y **Gemini 4 Argon**.

### Correcciones
- **Conservar todo / Rechazar todo** ahora solo afecta a la conversación actual. Los cambios de nombre y archivos nuevos confirmados se resuelven correctamente y la barra de acciones se limpia.
- Cada paso de las herramientas se mantiene en la fila de carga y no pasa al estado completado hasta recibir el resultado.
- Los bloques de código en streaming ahora se cierran conforme a la especificación CommonMark. El parámetro de esfuerzo de razonamiento enviado a Gemini se limita a los niveles ofrecidos realmente por Code Assist.
- El análisis de memoria ya no falla al encontrar un `{}` vacío. La planificación de búsquedas es más precisa y consume menos tokens.
- Las tarjetas de scripts ahora solo muestran el recuento de archivos modificados (por ejemplo, "1 edited") en lugar de volver a listar todos los nombres de archivo.
- Se proporciona el motivo detallado cuando falla la validación de suscripciones. Los subprocesos detenidos antes de tiempo finalizan de inmediato sin quedar colgados.
- Se solucionaron los parpadeos y tirones de diseño en la página de conversación.
- Corrección de varios errores menores y mejoras de estabilidad.

### Mejoras
- Los diffs en Code Review ahora se montan bajo demanda, las mediciones de diseño se ejecutan en lotes y la recuperación en la memoria es más rápida.

## 1.4.0 · 2026-09-26

### Nuevas funciones

#### Modelos y capacidades
- **Modelos preconfigurados:** se añadieron GLM-5.5 Flash, GLM-5.4, Kimi K4, DeepSeek V4.1 Pro y Muse Spark 1.4.
- **Image Studio:** ahora admite Hy Image 3.5 y Qwen Image 2.1.

#### Interacción y diseño
- Las vistas previas de diseño ahora usan el tema actual del editor y las variables de diseño propias del proyecto, en lugar de aplicar una paleta fija. Las variables CSS no declaradas ahora devuelven una explicación en vez de hacer fallar toda la llamada. Si el workspace contiene `DESIGN.md`, sus reglas se incluyen en el prompt del flujo de trabajo.
- Las tarjetas de propuestas de diseño se muestran por defecto de una en una y ocupando todo el ancho del panel. Puedes cambiar entre propuestas con pestañas o con las flechas del teclado; la comparación en paralelo sigue disponible con un clic.
- Las propuestas confirmadas se guardan como archivos HTML independientes en `.breezell/design/`. Los resultados de las herramientas hacen que la especificación, el plan y la implementación apunten al mismo archivo para evitar desviaciones respecto al diseño elegido.

#### Notificaciones
- El panel de notificaciones ahora muestra la lista a la izquierda y los detalles a la derecha.
- Todas las notificaciones importantes permanecen fijadas arriba; ya no se muestra únicamente la primera.
- La lista y el panel de detalles se desplazan de forma independiente.

### Correcciones

#### Conversación y Agent
- Al crear una rama nueva, primero se copia el cuerpo de la conversación original. Las ramas antiguas que ya hayan perdido el contenido pueden recuperarlo por número de línea.
- Los mensajes recargados liberan la altura del marcador de posición cuando vuelve el contenido. Los bloques de herramientas o razonamiento contraídos ya no conservan la altura que tenían al estar expandidos. El botón de rama ignora clics repetidos hasta que termina la creación.
- Las conversaciones largas se abren como una única lista continua: el contenido al que aún no se ha desplazado mantiene marcadores de posición y se carga al llegar. Se eliminaron el aviso de “mensajes archivados” y la antigua ventana que conservaba solo la cola. La altura de línea sigue siendo válida tras volver a montar la vista y el resaltado de código en streaming se actualiza de forma incremental, sin hacer parpadear el bloque completo.
- Volver a abrir la conversación actual ya no repite el proceso de cambio, por lo que no acorta la conversación ni descarta contenido fuera del final. Si una instantánea Git local no incluye archivos de esa conversación, se conserva el contador de diffs pendientes del historial.
- El cuerpo de una conversación solo lo libera la vista que lo está mostrando. Si la conversación ya está abierta en una pestaña del editor, volver a abrirla regresa a esa pestaña en vez de crear una segunda copia en la barra lateral, evitando que dos vistas desmonten mutuamente el contenido visible.
- Cuando una ventana está minimizada, Breezell desactiva el throttling en segundo plano y evita que la aplicación se suspenda mientras haya una ejecución activa. El comportamiento normal vuelve al terminar la ejecución, recargar la ventana o cerrarla.
- Si el modelo seleccionado se elimina u oculta, el selector cambia automáticamente a otro modelo visible. Si todos están desactivados, Breezell pide activar uno primero.
- Durante un periodo, la lectura y escritura de archivos externos estaba desactivada de forma predeterminada y ese valor `false` quedaba guardado, por lo que cambios posteriores del valor predeterminado no afectaban a configuraciones ya persistidas. La actualización vuelve a activar ambos permisos y registra una marca de migración, conservando cualquier cambio manual posterior del usuario.
- El cuadro de diálogo de commit ahora se monta en la capa del workbench. Las operaciones de rama iniciadas desde pestañas del editor ya no quedan recortadas por la barra lateral.

#### Almacenamiento
- Al eliminar una conversación se compacta inmediatamente la base de datos para devolver al disco el espacio que antes solo pasaba a la freelist de SQLite. Las bases de datos antiguas ejecutan una vez un `VACUUM` completo y los registros muestran la cantidad real de espacio recuperado.
- Los `VACUUM` completos programados ahora esperan a la cola de escritura del historial y solo se ejecutan cuando no hay conversaciones transmitiendo contenido ni herramientas en ejecución.
- Eliminar una conversación también borra su transcripción original de `breezellTranscripts`. La limpieza entre varios workspaces mantiene un periodo de gracia para las conversaciones que siguen activas en otras ventanas, igual que con los archivos del disco.

### Mejoras
- El conjunto de rutas sin commit de la lista de historial ahora se calcula una sola vez cuando hay cambios y se mantiene en caché hasta que cambie el estado de SCM, se restaure una ruta o cambie el rango del diff. Con unos 1.000 archivos modificados, se reduce el coste de un redibujado que antes rondaba los 25 ms; con unos 10.000, se reduce de forma sustancial el coste anterior de unos 265 ms.
- Las funciones de idioma de Settings ahora se almacenan en caché por idioma en lugar de recrearse en cada renderizado, evitando invalidar la caché de toda la página. El shell de Box solo se vuelve a renderizar cuando cambia el idioma. La búsqueda de navegación, contraer grupos o contraer la barra lateral ya no hace que se vuelva a dibujar la página de contenido. El sondeo OAuth reutiliza el resultado anterior cuando el estado no ha cambiado.

## 1.3.9 · 2026-09-22

### Nuevas funciones
- **Modelos preconfigurados:** Claude Opus 5.5, GPT 6 Sol, GPT 6 Terra, GPT 6 Luna, Gemini 4 Pro, Qwen4 Max, Qwen4 Plus, Qwen4 Flash y Qwen4 27B.
- **China Telecom Xingchen:** Xing4.0-29B.
- **Xiaomi:** MiMo-V2.6 Pro, Pro UltraSpeed y Flash. También MiMo-V2.5 y V2.5 Pro.
- **Tongyi:** Qwen3.8-2.4T-A95B, Qwen-Doc-Turbo y Qwen-Long.
- Inicia sesión en Gemini con una cuenta de Google (Antigravity Code Assist).
- La generación de imágenes ahora incluye **Hy Image 3.5** y **Qwen Image 2.1**.
- Cuando Super Memory se agota, aparece una tarjeta de aviso encima del cuadro de entrada.
- Las notificaciones del editor pueden mostrar imágenes y enlaces; los documentos se abren al hacer clic.
- Exportar e importar conversaciones ahora tienen un panel de progreso y se pueden cancelar a mitad.
- Grok muestra tu nivel de suscripción actual.
- En Box, los servicios y modelos compatibles rotos llevan una insignia y se pueden volver a probar uno a uno.

### Correcciones
- Cancelar la generación ya no borra la respuesta que ya se había transmitido.
- La salida en streaming ya no titila la altura de línea; las tarjetas de herramientas siguen clicables.
- Clic derecho en la barra de título ya no tira la ventana.
- Valores anómalos o datos en bucle ya no dejan la barra lateral en blanco.
- La barra lateral del chat no cargaba por un error de sintaxis en un comentario CSS.
- Las barras invertidas en rutas de Windows se conservan; si falla la lectura de un archivo, Breezell reintenta con barras normales.
- Buscar un commit de Git ya no recorre todo el historial.

### Mejoras
- Las conversaciones largas se desplazan con más estabilidad.
- El rendimiento del editor es más rápido.

## 1.3.8 · 2026-09-19

Más modelos en un único editor, transiciones más limpias a mitad de conversación y un ciclo de Plan más integrado: mismo hilo, mismo contexto.

### Nuevas funciones
- **Proveedores y modelos:** StepFun y AiMass ahora son proveedores de primer nivel. Llega Qwen 3.8 con sus variantes 27B y Omni-Flash. Zhipu GLM-5.3-FlashX se incorpora a la lista.
- **Doubao Seed 2.1:** ya están disponibles las versiones Pro 0915 y Evolving.
- **Integración de protocolos oficiales:** OpenCode, Zhipu, Kimi y DeepSeek ahora siguen los niveles de planes oficiales y los formatos de protocolo de cada proveedor (Chat / Responses / Anthropic).
- **OpenRouter:** aparecen nuevos identificadores en la lista de modelos. Los modelos gratuitos muestran una cinta FREE; los modelos retirados llevan el sello Unavailable.
- **Selector de modelos en el chat:** al cambiar de modelo se abre un selector integrado en el panel con pestañas Models y Compatible.
- **Página de Models:** vuelve al principio con un clic o salta directamente a las últimas incorporaciones.

### Correcciones
- **Pegar imagen:** las imágenes se envían al modelo como píxeles. Breezell ya no busca image.png en el repositorio.
- **Composer:** se conservan los saltos de línea. Se incluye la sugerencia de Shift+Enter en el campo de entrada.
- **Plan / Todo:** el estado de las tareas en .plan.md se mantiene sincronizado a medida que avanza el trabajo. Reanudar un plan anterior recupera los todos asociados. update_todo_list ya no vuelve a marcar elementos mientras se ejecuta un plan.
- **Exploración de la base de código:** se han reconstruido los grupos de plegado.
- **Tarjetas de edición:** las tarjetas completadas se contraen por defecto (controlado desde el interruptor de funciones en Box).
- **Pastillas de citas:** el diseño coincide con el asistente de selección del editor.
- **Pool de cuentas:** la rotación se realiza por solicitud y ya no queda anclada a una sola conversación.
- **Navegador integrado:** las pestañas están aisladas por cada ventana de trabajo.
- **Explorador:** las carpetas de proyecto llamadas dev o run ya no quedan ocultas.
- **Vista previa de PDF:** el desplazamiento, zoom y arrastre funcionan correctamente.
- **Vista previa de video:** se han eliminado los selectores duplicados. La opción de enviar al chat está disponible.
- **Reducción de bloqueos aparentes:** el aviso de falta de respuesta espera 15 segundos antes de mostrarse, reduciendo falsas alarmas.
- **Ventanas de contexto:** Qwen 3.8-27B permite alternar entre 256K y 1M. Las ventanas de contexto corto y los precios de lista siguen las tablas oficiales.
- **Intensidad de razonamiento:** se han unificado los nombres oficiales de niveles en todos los proveedores, incluido DeepSeek.
- **Ranuras compatibles:** ancho de columna de configuración compartido. Las etiquetas de capacidades se ubican debajo de la línea de tokens.
- **Administración:** el encabezado de la tabla de gestión de modelos permanece fijo. Se corrigió la obtención de la lista de modelos. Los campos de precio de referencia y caché larga quedan alineados.
- **Barra lateral:** el panel de desbordamiento de la barra de actividad superior ya no se dibuja fuera de la barra lateral.

### Mejoras
- Se ha eliminado del catálogo el modelo retirado GPT-5.3-Codex-Spark.
- El color del cuerpo de la conversación ahora coincide con el de los nombres de archivo en las tarjetas de herramientas.
- Electron actualizado a la versión 43.7.3.

## 1.3.7 · 2026-09-17

### Mejoras
- Se elimina el índice vectorial de todo el repo en el dispositivo. La búsqueda usa grep.
- Los trabajos en segundo plano y la indexación ya no atascan la conversación en la que estás.
- Los rankings de uso alinean con las tarjetas y se pueden cambiar por periodo. El uso de sub-Agents se factura en la conversación padre.
- Las etiquetas de conversación ya no se pisan. Clonar un chat ya no revienta el layout. El modelo se queda en esa conversación.

### Correcciones
- El historial de chat borrado ya no se restaura solo.
- Las tarjetas de terminal junto a la entrada ya no tiran la página hacia abajo y la devuelven.
- Las tarjetas Plan y el layout del chat ya no se empujan. Las tarjetas Todo se pintan bien.
- El SSH integrado vuelve a funcionar. Ya no pasa por Microsoft Remote-SSH.
- El asistente de búsqueda de selección ya no tapa el resaltado. El recuento de llamadas a herramientas seguidas se sigue viendo.
- Abrir **More** en una página de conversación ya no crashea.
- Pulsar una rama ya no desborda la pila.
- En la página de conversación, los proveedores OpenAI-compatibles y API dejan claro el modelo actual al elegir.
- Plan mode queda corregido.

## 1.3.6 · 2026-09-15

### Nuevas funciones
- **Búsqueda local Atlas:** búsqueda semántica y tarjetas de índice. Los directorios excluidos se recuerdan. Las preguntas sobre cómo se relaciona el código priorizan Atlas.
- **Blueprints de Plan mode:** pulsa **Start** en la tarjeta del blueprint para empezar. La ejecución sigue usando todos.
- **Asistente de selección:** busca el texto seleccionado (navegador integrado / navegador externo / Bing). Los mensajes en cola se reordenan arrastrando.
- **Pegado o arrastre enorme:** ya no revienta el compositor. Aterriza como chip de archivo; el modelo lo lee como archivo.
- **Adjuntos PDF:** Sakana, Mistral, Gateway, xAI, Kimi, Qwen-Doc y canales similares pueden adjuntar PDF.
- **Sonido al terminar:** al acabar un turno puede sonar o hablar. La voz de error va apagada por defecto. Elige la voz en Box.
- **Open Browser** en el editor. Se quita la barra de desplazamiento de la tira de pestañas; la rueda del botón central desplaza izquierda y derecha.
- **Uso:** columnas aparte para caché y Token. Lecturas y escrituras de caché se facturan a las tarifas oficiales. Los sub-Agents se imputan a la sesión padre. El pool de cuentas compatibles con OpenAI tiene página propia.
- **Modelos y proveedores:** Volcengine Ark puede tirar de la lista de modelos con AK/SK, con presets Agent Plan (OpenAI / Anthropic). Añadidos AIHubMix y Sakana Fugu (Max / Ultra v2). Completados Azure Foundry y Vertex Gemini. DeepSeek V4.1 Flash y Kimi K2.8 Preview entran en la lista.

### Correcciones
- **Code Review** vuelve a hacer el diff contra el snapshot previo de cada edición. Las sesiones ya no se mezclan.
- Arrastrar pestañas de chat ya no tira la ventana. Las tarjetas de terminal no se pisan.
- El asistente de selección ya no tapa el resaltado. Se ve el recuento de envíos seguidos. **Quote** ya no parece una página entera. El razonamiento sigue visible en respuestas vacías.
- La pestaña de uso de Box ya no se aplasta. El ranking ocupa el ancho. Las tarjetas de proveedor pueden cambiar el intervalo.
- Las listas oficiales de modelos y precios salen bien. Las listas Plan ordinarias siguen como todos. Los nodos del blueprint coinciden en archivos, tarjetas y burbujas **Start**.
- El Agent en segundo plano y las escrituras de índice ya no atascan la conversación que estás viendo.
- Se corrigen los errores del Vue tool.

### Mejoras
- El estilo de trabajo del Agent es más estricto: reintento al fallar, archivos de borrador, y seguir el estado cuando cambia.
- Electron sube a 43.7.0.
- Los interruptores de Box se pueden buscar. El dashboard sigue pintando. La limpieza retira blueprints y logs de terminal que no se usan.

## 1.3.5 · 2026-09-09

### Correcciones
- Abrir una ventana nueva tras 1.3.4 podía pintar un marco negro y quedarse en blanco. La ventana ahora se dibuja en el primer show.

## 1.3.4 · 2026-09-09

### Nuevas funciones
- **Reescritura de prompt:** la varita de la bandeja de entrada discontinua reescribe el borrador del compositor. Primero se previsualiza, luego se sustituye. Nunca se envía sola.
- **Contabilidad de uso de funciones:** los tokens de enviar mensaje, sugerencias de seguimiento y reescritura de prompt van a Box → Feature usage, aparte del uso de la conversación.
- **Confirmación de rollback:** al revertir desde una burbuja de usuario, primero se pide confirmación en la bandeja de entrada, para no tirar una rama por error.
- **Copiar / ramificar desde la barra del turno:** Copiar es texto plano. Ramificar desde un turno abre un chat nuevo; la conversación del editor se queda en el editor.
- **Menú de ramas del editor:** **Open in Editor** de la barra lateral abre una columna de chat dedicada, sin abarrotar la tira de pestañas de archivos.
- **Image 2.5 Studio:** los flujos de imagen se actualizan; las ramas se gestionan desde el editor.
- **Autoaprobación de bases de datos:** crear una conexión de base de datos puede pasar por Auto.
- **Herramienta de escritura de memoria:** `update_memory` es el único camino que escribe memoria de usuario (workspace / global; add / replace / delete). El resto de notas en disco ya no se mutan ad hoc.
- **Tokenización nativa:** el recuento local de tokens sigue el tokenizer de cada modelo.
- **Diffs de Review al estilo GitHub:** Code Review usa git-diff-view.
- **Copia de chat en zip:** exporta como archivo zip. El JSON legado sigue importándose.
- **Salto desde la paleta de comandos:** al abrir un archivo se salta al último hunk de ese archivo.
- **Precios de API compatible:** las filas compatibles con OpenAI pueden fijar una tarifa $/1M personalizada.
- **Ruta de red de Box:** en la página Models: Direct, System proxy, Global o Custom.
- **El menú de modo abre hacia arriba:** el selector de modo encima del compositor prefiere abrirse hacia arriba.

### Correcciones
- Cambiar el modelo de un chat ya no cambia el valor global ni el de otras conversaciones.
- Uso de Codex en tema claro: se quitan las cápsulas de color difíciles de leer (por ejemplo `5d`). El uso pasa a texto plano en la bandeja.
- **Stop** cierra el turno al momento. Las ediciones canceladas no se escriben a disco. Las tarjetas ya no desaparecen.
- Parpadeo de `edit_file`: los archivos limpios se refrescan por etag. Las reescrituras de archivo completo se recortan al rango cambiado. Un editor abierto ya no recarga la página entera.
- Los servidores MCP empaquetados no arrancaban (error de constructor Ajv). También se corrigen PATH / cwd / env remotos y el informe de errores.
- **WSL:** el bloqueo de instalación se libera cuando el servicio está arriba, así que las ventanas posteriores y **Open Folder** ya no hacen timeout.
- **Clave de API de Grok:** todo el tráfico pasa por la Responses API. El streaming ya no llega en bloques tardíos.
- Las tarjetas de error siguen al proveedor que realmente falló.
- Los URI inválidos en la página Review ya no tumban la página entera.
- Las rutas del directorio home (`~/`) en las respuestas son clicables.
- Tarjetas de Vault: se quita el lift al pasar el cursor que las hacía «flotar».
- Iconos **Quote** / **Copy** en tema claro: usan el color de primer plano del botón y ya no se lavan.
- Los avatares del rail plegado se quedan cuadrados.
- El desplegable de filtro de uso se ancla a la izquierda del botón y ya no cubre la barra lateral de Box.
- Las pestañas segmentadas se envuelven en paneles estrechos.
- Regex de elipsis de la barra de título: el punto de ancho completo ahora es un escape `\u`.

### Mejoras
- La barra de desplazamiento del compositor se superpone al contenido como la lista de chat. Sin canal extra a la derecha.
- Timeouts de búsqueda / ejecución: los procesos `rg` colgados tienen un timeout duro para que la ventana no se congele.
- Desbordamiento de contexto: presupuesto, pistas uv y tarjetas de aterrizaje vacías coinciden con el shell de chat actual.
- Los saltos largos de la barra de historial teletransportan un trozo en lugar de expandir toda la cola.
- El panel de confirmación de rollback es más ancho; la acción de confirmar muestra ⏎.
- Los diffs de Review solo tokenizan las líneas visibles. El paginado es más rápido.
- Página Models de Box: el título se queda arriba. Cada fila de proveedor muestra estado y ruta.
- La burbuja del anillo de contexto usa el mismo fondo que la bandeja de entrada.
- El texto de Skills y Memory está localizado. Los controles de borrar usan un color neutro.

## 1.3.3 · 2026-09-07

### Nuevas funciones

#### Box workbench
- La barra de título cambia entre **Box** y **Agent** en un clic. Box es una pantalla de gestión independiente que reúne modelos y proveedores, cuenta y uso, Super Memory, Code Review, el marketplace MCP, el explorador de bases de datos, la limpieza de datos y Settings.
- **Modelos:** la configuración del proveedor queda junto a la lista de modelos. Puedes añadir o quitar endpoints compatibles con OpenAI. Elige una ruta de red por proveedor —incluidos los modelos oficiales de Breezell—: Direct, System proxy, Global proxy o un proxy personalizado. Prueba la conectividad en un clic.
- **Vault:** cifra endpoints de relay y credenciales, y los rellena donde haga falta. Se acabó copiar claves de un lado a otro.
- **Completado de código (FIM):** el completado puede usar su propia conexión y el protocolo FIM nativo de cada proveedor. Los principales vienen como presets.
- **Limpieza de datos:** consulta estadísticas locales, compacta la base de datos y ejecuta comprobaciones de integridad. Cada mantenimiento queda registrado.
- **Explorador de bases de datos:** rehecho, con varios orígenes y una navegación agrupada más clara.
- **Marketplace MCP:** organizado por categoría, con la página rediseñada.
- Las notas de privacidad pasan a tarjetas y cubren más detalle.

#### Breezell Mind
- La conversación mantiene un cuaderno de trabajo. Cuando un hilo largo llega al presupuesto, el historial antiguo se pliega a las notas y lo esencial.
- **Citar esta conversación** es más ligero: solo lleva el último turno y la lista de archivos implicados. El historial completo se lee bajo demanda.
- La compresión de contexto prepara y actualiza en segundo plano un documento de handoff. El registro original se queda en disco. Avisa si la compresión se ha ejecutado demasiadas veces.

#### Conversación
- Al terminar un turno aparecen sugerencias de «qué puedes hacer ahora»; un clic basta para seguir.
- Una conversación puede abrirse como pestaña del editor, junto al código.
- Las menciones `@` de archivos y símbolos van tan rápido como Quick Open. `/` abre el menú de Skills.
- Menú de modelos: interruptor **Breezell Max Plus**.
- Prompt de sistema de Agent reescrito: deja más claro qué toca en cada turno. Tras trabajo real, hay un cierre breve. El idioma de los comentarios sigue el tuyo.
- Las rutas de archivo en los mensajes se renderizan como chips clicables y se mantienen consistentes.

#### Modelos
- Añadidos **GPT-6 Astra**, **Claude Fable 5.1**, **Gemini 3.8 Flash**, **Muse Spark 1.3** y **OpenCode Go Omen Alpha**.
- Los modelos sin búsqueda web propia ahora caen al buscador nativo del proveedor.
- Precios de Claude Sonnet 5 actualizados a las tarifas oficiales.

#### Editor
- Edita Markdown in situ y cambia a vista previa sin salir del archivo.
- Diff view añade un submenú **Diff View** para modos de comparación. Los editores personalizados pueden mostrar diffs.
- Al abrir un archivo puedes elegir el tipo de editor.
- Las opciones de funciones en Settings se han rediseñado. La generación de mensajes de commit de Git tiene su propia tarjeta de modelo.
- El panel de cuenta pasa a estilo de tarjeta de membresía: insignia del plan, saldo, caducidad y cuota de Super Memory de un vistazo. El botón de cuenta muestra el avatar.

### Correcciones
- Un `<` sin cerrar en un stream ya no congela el resto del texto. El código del panel de razonamiento se muestra como texto plano; los fences sin lenguaje siguen resaltándose.
- Las respuestas vacías del modelo disparan un reintento automático en lugar de cerrar el turno en silencio. Se conservan los streams que el upstream marca después como vacíos.
- El recuento de tokens tras comprimir contexto coincide con lo que realmente se envía.
- Cambiar el modelo de la conversación ya no sobrescribe los modelos de Apply y de mensajes de commit de Git.
- El auto-scroll del razonamiento ya no se despega solo; los bloques de código en streaming ya no parpadean en blanco.
- Los subagentes de Analyze ya no piden por error cambiar a modo Agent.
- El navegador integrado ya no escribe pulsaciones en el cuadro de IA cuando el modo incógnito está desactivado.
- Las peticiones de Poolside Laguna con captura ya no fallan enteras; pasan por el proxy de visión.
- La estimación de tokens de adjuntos antes de enviar es precisa. La compresión de emergencia puede plegar el turno actual.
- Las tarjetas de error nombran al proveedor que realmente falló.
- Los comandos de extensión del terminal ya no esperan todo el timeout de integración del shell para ejecutarse.
- Las burbujas de ejecución de plan conservan el radio de las esquinas. La sombra del mensaje de usuario ya no tapa el texto de debajo.
- Los ajustes emergentes del modelo se alinean con la fila correspondiente.
- La página de Code Index en Settings ya no reescanea todo el workspace al abrirla. Los artefactos de build quedan fuera del índice.
- **Linux:** se restaura el pool de búfer de Node de 8 KiB para evitar regresiones en algunos entornos.

### Mejoras
- `repo_map` ya no congela la UI durante decenas de segundos. Los diffs por línea de las ediciones en streaming y la persistencia de la conversación salen del hilo de la UI.
- Las herramientas de exploración tienen timeout: una red caída no deja al Agent colgado cinco minutos. Las exploraciones fallidas se resumen en una línea gris de «intentado».
- La barra lateral pesa menos: el marketplace MCP y Super Memory viven en Box. El historial se pagina y agrupa. Ajuste de posición de la insignia de cuenta.
- Runtime actualizado a **Electron 43.6** (Chromium 150 / Node 24).
- Los instaladores solo incluyen los binarios de la plataforma actual, así que pesan menos.

## 1.3.2 · 2026-09-01

### Correcciones

- Se corrigió un problema por el que todo el historial de chat podía desaparecer al cambiar de espacio de trabajo, modificar rutas de WSL / remotas o perder el estado local.
- Se corrigieron bloqueos y ventanas sin respuesta en conversaciones largas, así como bloqueos de la interfaz durante cambios masivos de archivos o al ejecutar `git checkout`.
- Se corrigieron los enlaces a archivos locales del chat que aparecían bloqueados y no se podían abrir.
- Se corrigió el restablecimiento del zoom del navegador integrado al 100 % después de actualizar, así como los menús de modelos o ventanas emergentes de modo que quedaban ocultos detrás del contenido web.
- Se corrigió la falta de disponibilidad en dispositivos táctiles de acciones de cola como Editar, Enviar ahora y Eliminar.
- Se corrigieron los interbloqueos del navegador compartido y la mezcla de borradores nuevos de Agent entre conversaciones.
- Se corrigió el cambio inesperado de la identidad del espacio de trabajo de una conversación, que podía provocar que la memoria se filtrara entre proyectos.
- Se corrigió que el estado contraído o expandido de los grupos de modelos no se conservara después de reiniciar.
- Se corrigió que las conversaciones largas mostraran incorrectamente un «Error de red» después de unos 50 segundos cuando el problema real era una ventana de contexto llena.
- Se corrigió que cambiar el modelo del chat sobrescribiera los modelos configurados por separado para Apply y los mensajes de commit de Git.
- Se corrigieron el bloqueo de la salida de razonamiento durante el desplazamiento y los destellos blancos en bloques de código durante el streaming.
- Se corrigió que Code Index analizara artefactos de compilación, lo que ralentizaba la indexación y ocupaba espacio de disco innecesario. Abrir Settings ya no activa repetidamente «Scanning workspace».
- Se corrigió que Agent insistiera incorrectamente en que los comentarios del código debían estar en inglés y rechazara solicitudes explícitas para usar chino.
- Se corrigió que la herramienta de exploración web permaneciera inactiva durante unos cinco minutos sin avanzar.
- Se corrigieron las esquinas recortadas de las tarjetas de ejecución de planes y las sombras de ventanas emergentes fijadas que se superponían a la primera línea de las respuestas.
- Se corrigieron las diferencias de versión del servidor remoto al conectarse a entornos de desarrollo remotos desde compilaciones de código fuente.

### Mejoras

- El procesamiento de conversaciones largas ya no bloquea la interfaz, por lo que las respuestas aparecen progresivamente mientras se generan.
- Cuando la ventana de contexto está cerca de llenarse, Breezell ahora lo explica antes. Los resultados antiguos se trasladan al almacenamiento local y solo se vuelven a cargar cuando son necesarios.
- Se mejoró la respuesta de los bloques de código y los Diffs en respuestas largas. El resaltado de sintaxis de archivos grandes ya no bloquea la ventana.
- El historial de chat ahora se agrupa en Hoy, Ayer y Anteriores, y las conversaciones de Agent y Teams se muestran por separado.
- Los encabezados de proveedores de la lista de modelos permanecen fijados al desplazarse. La conversación activa ya no tiembla junto con el área de entrada.
- Code Index ahora respeta `.gitignore` y se centra en los archivos de código fuente en lugar de los artefactos de compilación.
- La inspección de la estructura del repositorio ya no provoca bloqueos de más de diez segundos.
- El envío de mensajes en conversaciones extremadamente largas ahora responde mejor.
- La ventana emergente de ajustes del modelo ahora se alinea con la fila seleccionada.
- La generación de mensajes de commit de Git ahora puede usar un modelo seleccionado por separado.
- Los niveles de razonamiento de GPT-5.6, incluido Pro, ahora son visibles y seleccionables.
- Se añadieron Hunyuan HY4, Kimi K3 / Video, Qwen3.8 Flash, GLM-5.3 Flash y varios modelos de vídeo nuevos.
- Image Studio ahora admite Grok Imagine para generación de imágenes 2.0 y generación de vídeo 1.5.
- Tras comprimir una conversación larga, Breezell conserva un resumen de traspaso para continuarla con fluidez, mientras que el historial local completo sigue disponible para búsquedas por palabras clave.

## 1.3.1 · 2026-08-26

### Correcciones

- Se corrigió un problema por el que el **historial de chat podía desaparecer después de cambiar la identidad del espacio de trabajo**.
- Se corrigió un problema en **Breezell Settings** donde los componentes de menú desplegable montados incorrectamente podían provocar un comportamiento inesperado.
- Se corrigió el **comportamiento incorrecto del zoom en el navegador integrado**.
- Se corrigió el dimensionamiento del diseño del chat para que el **área de conversación ya no se comprima por la altura de la página**.
- Se corrigió un problema por el que la **representación de la herramienta de edición podía provocar un cierre inesperado**.
- Se corrigió que las **notificaciones del sistema se extendieran incorrectamente a todo el ancho** al usar la nueva interfaz de Breezell.
- Se corrigió la **alineación del área de entrada inferior** para que el espaciado izquierdo y derecho coincida con el panel de chat.

### Mejoras

- Se mejoraron el **rendimiento general y la capacidad de respuesta**.
- Se mejoraron las **capacidades y la fiabilidad del motor de modelos**.

## 1.3.0 · 2026-08-25

### Nuevas funciones

- Se añadió un **diseño de interfaz completamente nuevo**, disponible en **Breezell Settings > Appearance**.
- Se añadieron **SiliconFlow**, **OpenCode Go** y **Meta** como proveedores de modelos, junto con la selección del formato de API por modelo para **Chat Completions**, **Responses** y **Anthropic Messages**.
- **OpenRouter** ahora permite seleccionar el formato de API. **Claude** y **OpenAI** usan sus API nativas de forma predeterminada.
- Se añadió compatibilidad con **Gemini 3.7 Flash** y **Dots Studio dots3-note Preview**.
- El chat ahora admite **archivos adjuntos de vídeo**, con vista previa de vídeo directamente dentro del espacio de trabajo.
- Se añadió el **aislamiento de worktrees de Teams**: los compañeros pueden editar código en worktrees de Git independientes, y los compañeros inactivos pueden reactivarse automáticamente cuando sea necesario.
- Los **servidores MCP** ahora se ejecutan dentro del host de extensiones del espacio de trabajo. Al cerrar la ventana del proyecto también se terminan sus procesos secundarios.
- Se rediseñaron los **ajustes avanzados del modelo**, incluidos los ajustes de pensamiento predeterminados y el soporte de envío directo de **reasoning effort**.
- Se añadió una nueva **bandeja de entrada**, que reúne los comandos rápidos y las ventanas emergentes de herramientas en un flujo de interacción más limpio.
- Los **borradores no enviados** ahora se conservan en el historial de chat y ahora se pueden asignar etiquetas a los compañeros.
- Se añadieron dos nuevos temas: **Breezell Warm** y **Breezell Paper**. También se ampliaron las paletas de temas y la pantalla de inicio ahora sigue el esquema de color activo del editor.
- Se añadió un **selector de carpetas** a la lista **All** como alternativa cuando no se pueden arrastrar carpetas desde el Explorador.
- Se añadió una ventana **About** que muestra la versión instalada de Breezell.
- La finalización de código ahora tiene en cuenta las **ediciones recientes** y los **comentarios específicos del lenguaje** para ofrecer sugerencias más relevantes.

### Correcciones

- Al usar **ds4** u otros modelos de solo texto mediante un proveedor **OpenAI-Compatible**, ahora se pueden enviar imágenes directamente si el proveedor tiene configurado soporte de visión. Ya no es necesario configurar un proxy de visión independiente en el IDE.
- Los modelos oficiales de solo texto, como **DeepSeek**, siguen bloqueando los archivos adjuntos de imagen cuando no hay ningún modelo de visión configurado, lo que evita solicitudes no válidas.
- Al cambiar de modo mientras una respuesta sigue en streaming, ya no se muestra de inmediato una notificación de **"Cambiado a ..."**. La notificación aparece solo después de que finalice la respuesta actual.
- Las **tarjetas de edición** ahora saltan a la ubicación correcta con el primer clic.
- El **uso de contexto** ahora refleja el contexto utilizado realmente por la solicitud, lo que corrige lecturas infladas o inconsistentes.
- La lista de servidores MCP ahora se actualiza después de reiniciar el host de extensiones, y los nombres de los servidores ahora se destacan en la bandeja de entrada.
- Se corrigieron problemas de sincronización entre **Git, la paleta de comandos, el historial y el explorador**, incluidos casos en los que los diffs pendientes desaparecían después de un commit.
- Se corrigió que las notificaciones de chat no aparecieran mientras la ventana de Breezell estaba minimizada.
- Se corrigieron la gestión de **WSL / URI remotas** y la validación de caché de **REH**.
- Se corrigieron destellos blancos al recrear el webview del navegador y casos en los que el webview nativo interceptaba el arrastre del divisor.
- **GLM [1m]** ya no se enruta incorrectamente a través de **Chat Completions**.
- Se mejoró el comportamiento del tema predeterminado después de la instalación y se corrigió el **contraste rojo/verde de los diffs**.

### Mejoras

- Se refinaron la **interfaz de chat**, el **renderizado de Mermaid**, los **controles de tema**, las **filas de Settings** y los textos de aprobación del terminal.
- Se mejoraron las interacciones en la **bandeja de entrada** y las ventanas emergentes de herramientas.
- Se mejoró el **comportamiento de cambio del modo Plan**: Breezell seguirá haciendo preguntas cuando se necesite aclaración y las tarjetas relevantes ya no se ocultarán.
- Se añadió un tamaño de fuente ajustable para las opciones de **Ask Question**.
- Se mejoró la **fiabilidad de recuperación de memoria**, con mensajes más claros mientras la recuperación está en curso.
- Las sugerencias de finalización de código ahora se ajustan mejor al **idioma del archivo actual**.

## 1.2.9 · 2026-08-24

### Correcciones

- Se corrigieron casos en los que algunas conversaciones no se cargaban correctamente.
- Se corrigió el formato de salida incorrecto en el modo Entanglement.
- Se mejoró la estabilidad y se corrigieron casos en los que las ventanas de Breezell podían cerrarse o fallar inesperadamente.
- Se corrigieron las páginas en blanco al abrir sitios web en el navegador integrado.
- Se corrigió la exposición de etiquetas residuales al final de las respuestas del modo Analyze.
- Se corrigieron las configuraciones de ventana de contexto personalizada de los modelos Codex que no se aplicaban o mostraban correctamente.
- Se corrigió la visualización incorrecta de la cuota al usar el inicio de sesión directo de Grok.
- Se corrigió que la compresión automática no se activara después de cambiar la ventana de contexto.

## 1.2.8 · 2026-08-16

### Nuevas funciones

- Se rediseñaron los modos Agent, Entanglement y Teams para ofrecer flujos de trabajo más fiables.
- Se añadieron integraciones con OpenCode Go y Meta, junto con la selección del protocolo de API por modelo.
- Image Studio ahora es compatible con Seedance 2.5. Los modelos DeepSeek ya pueden derivar imágenes al reconocimiento visual.
- Se añadieron GLM-5.3 y Grok 4.6, y se mejoró la compatibilidad con formatos de modelos específicos de DeepSeek.
- La configuración inicial ahora permite elegir el idioma de la interfaz durante la primera instalación.
- Se rediseñó la página de conversación vacía con tarjetas de funciones y navegación izquierda/derecha.

### Mejoras

- El modo Teams ahora ofrece informes de progreso de tareas más detallados.
- Las conversaciones largas ahora depuran automáticamente el contexto obsoleto o no válido para reducir la acumulación de contexto y la sobrecarga innecesaria.
- Se mejoró la precisión de recuperación de memoria, y los mensajes de estado de espera ahora se actualizan dinámicamente conforme avanzan las tareas.
- Las sesiones de terminal ahora se agrupan por propósito. Los comandos silenciosos permanecen activos hasta agotar su presupuesto de ejecución, en lugar de terminar prematuramente.
- Se mejoró la actualización y sincronización del estado de Git después de las acciones de revisión, reversión y envío.
- Los separadores de cambio de modo ahora permanecen visibles, lo que facilita revisar dónde cambió el modo durante una conversación.

### Correcciones

- Se corrigieron conversaciones de Teams que se congelaban o quedaban bloqueadas en estado inactivo, así como diferencias que seguían visibles después del envío.
- Se corrigió que las notificaciones de chat no se entregaran cuando la ventana de Breezell estaba minimizada.
- Se corrigieron conversaciones normales interrumpidas tras completar una transferencia de reconocimiento de imágenes y vistas de emulación del navegador que a veces se bloqueaban.
- Se corrigieron salidas imprecisas del terminal, problemas con comandos de PowerShell encadenados y comandos en segundo plano que entraban repetidamente en bucle.
- Se corrigió que el campo de entrada de commit de Source Control desapareciera o quedara no válido después de actualizar.
- Se corrigieron mensajes en cola que no se enviaban al pulsar Enter, así como tareas de Analyze que se detenían inesperadamente o se reiniciaban repetidamente.
- Se corrigieron problemas con conversaciones basadas en suscripción de Grok, razonamiento oculto bloqueado y rutas no válidas que provocaban excepciones.
- Se corrigieron operaciones de reversión que afectaban involuntariamente a cambios no relacionados, herramientas MCP que resolvían la ruta incorrecta y problemas de empaquetado en Linux.
- Se corrigieron otros errores y problemas de estabilidad.

## 1.2.7 · 2026-07-29

### Nuevas funciones

- Mejoramos la comprensión y la eficiencia de navegación en bases de código grandes.
- Añadimos indicadores opcionales de calidad de respuesta que muestran la evaluación de la calidad de esta respuesta, la comprensión de requisitos y la confianza de verificación.
- Los detalles de las estadísticas de caché ahora admiten paginación, filtros vinculados y varios idiomas.

### Correcciones

#### Control de código fuente y tiempo de ejecución del Agent

- Corregimos el campo de mensaje de commit que quedaba vacío o no era válido después de actualizar un repositorio de control de código fuente, cambiar de vista o reconstruir componentes.
- Corregimos los bloqueos del razonamiento del Agent, la detección incorrecta del estado del terminal, la pérdida de códigos de salida de comandos en segundo plano y la finalización prematura de tareas.
- Corregimos problemas al editar mensajes de la cola, los comentarios de llamadas de herramientas, la restauración de listas de tareas y el estado de turnos consecutivos.

#### Chat y entornos remotos

- Corregimos el truncamiento prematuro de la conversación original al editar y reenviar mensajes. Ahora los mensajes se reemplazan atómicamente después de completar la validación.
- Corregimos problemas de rutas remotas en WSL y Remote SSH, y mejoramos el inicio del host, los reintentos de contraseña y la caché del servidor.

#### Renderizado, modelos y estado

- Corregimos el análisis de fórmulas en bloque de KaTeX, los temas de bloques de código, el renderizado de fuentes chinas y la alineación de iconos de archivos.
- Corregimos casos en los que algunos modelos mostraban respuestas vacías, exponían pilas de errores o enviaban solicitudes de red anómalas al proveedor.
- Corregimos la reaparición de contenido eliminado en Super Memory y los cambios inesperados de estado del panel del navegador.

### Mejoras

#### Búsqueda y ejecución del Agent

- Optimizamos la búsqueda, las llamadas de herramientas, la ejecución de tareas y la lógica de finalización del Agent para reducir conclusiones repetidas, esperas innecesarias e interrupciones anómalas.
- Optimizamos los límites de resultados, los tiempos de espera de ejecución y el estado de streaming de las búsquedas de código grandes para reducir el consumo de recursos de conjuntos de resultados excesivos.

#### Experiencia de chat

- Mejoramos el estado de finalización del chat, la barra de herramientas inferior, la posición del desplazamiento y la carga de conversaciones largas.

#### Configuración y uso

- Rediseñamos las tarjetas de cuentas de modelos e inicio de sesión OAuth para unificar la jerarquía visual y los patrones de interacción en la página de configuración.
- Mejoramos el uso de Codex, los metadatos de modelos y los indicadores de estado relacionados.

## 1.2.6 · 2026-07-27

### Añadido

#### Git del chat a nivel de sesión

- Ahora se pueden enviar juntos los cambios de código generados por IA en una misma sesión.
- Añadimos la detección y el procesamiento simultáneos de varios repositorios Git.
- El estado de las tareas del chat y de la revisión de código ahora se sincroniza automáticamente después del envío.

#### Proveedores, modelos y capacidades

- Añadimos el proveedor **Poolside Platform**, con acceso a **Poolside Laguna** mediante una configuración compatible con OpenAI.
- Añadimos configuraciones para los modelos **Qwen3.8**, **Opus 5** y **Pangu**.
- Mejoramos **LongCat** con reproducción de inferencia para conservar el contexto de razonamiento después de las llamadas de herramientas.

#### Seguridad del espacio de trabajo remoto

- Añadimos una advertencia de seguridad al acceder al directorio raíz de Linux `/` en un entorno remoto.
- Las rutas del sistema de archivos virtual de Linux, como `/proc`, `/sys` y `/dev`, ahora se excluyen automáticamente.

### Mejoras

#### Revisión de código

- Rediseñamos la barra de acciones **Aceptar/Rechazar** de cada bloque de código.
- Actualizamos **Conservar todo** para que siga el color de énfasis del tema actual.
- Reducimos la altura de las barras de acciones en línea para ofrecer un área de código más compacta.
- Las barras de acciones de revisión ahora se contraen y restablecen automáticamente después de un commit de Git correcto.

#### Selector de modelos

- Después de introducir una clave por primera vez, solo se activan cinco modelos recomendados de forma predeterminada para reducir la redundancia de la lista.
- Las capacidades de los proveedores compatibles con OpenAI ahora se adaptan al formato de API seleccionado.

#### Envío de código y actualización de SCM

- El estado de Git en la barra de actividad ahora se actualiza automáticamente después de guardar archivos.
- Los envíos de Chat Git ahora se tratan de forma uniforme como **Conservar todos los cambios**, completando automáticamente los pasos de revisión de código correspondientes.

#### Interfaz

- Eliminamos el indicador de no leídos de los títulos de las notificaciones.
- Mejoramos el cambio de menús al pasar el cursor sobre grupos de modelos compatibles con OpenAI.
- Corregimos la alineación vertical del texto de cantidad de herramientas.
- Activamos el estilo de iconos Kimi Mono en el tema claro.

### Correcciones

#### WSL y Git remoto

- Corregimos un bloqueo al iniciar el host de extensiones de WSL.
- Corregimos la configuración incoherente del proxy del servidor WSL.
- Las comprobaciones de estado de Git y los mensajes de commit generados por IA en entornos WSL y SSH ahora se ejecutan mediante un canal consciente del entorno remoto.
- Impedimos que los comandos Git de espacios de trabajo remotos se ejecuten sobre rutas locales.
- Corregimos un problema por el que el Agent cerraba automáticamente los repositorios Git después de modificar archivos.
- Corregimos la visualización incorrecta de rutas relativas en URI remotas.

#### Remote SSH

- Corregimos el tratamiento de la caducidad de contraseñas en Remote SSH. Las contraseñas guardadas ahora se eliminan cuando el servidor las rechaza y se solicita volver a introducirlas durante el mismo intento de conexión.
- Impedimos que Remote SSH descargue paquetes de servidor REH con hashes de commit que no coincidan, evitando errores de versión y fallos al iniciar el host remoto.

#### Renderizado del chat

- Añadimos compatibilidad con Trusted Types para gráficos Mermaid.
- Mejoramos la sanitización de etiquetas Mermaid para evitar que etiquetas inseguras o mal formadas provoquen fallos de renderizado.

#### Reglas y memoria

- Corregimos el guardado de contenido vacío después de que el editor perdiera el foco.
- Corregimos que el administrador de recursos no se actualizara a tiempo después de cambios en la configuración `.breezell`.

#### Vista de árbol remota

- Dejamos de emitir repetidamente errores sin sentido en la vista de árbol cuando falta la configuración de SSH Hosts.

## 1.2.5 · 2026-07-22

### Añadido

- Añadimos integraciones de proveedores y modelos para **Tencent Hunyuan HY3** y **TokenHub**.
- Añadimos **Gemini 3.6 Flash** y **Gemini 3.5 Flash-Lite**, ambos disponibles oficialmente para todos los usuarios.
- Añadimos insignias de proyecto a los historiales de chat en espacios de trabajo de varias raíces.
- Ampliamos la compatibilidad de capacidades para canales de proveedores compatibles.
- Añadimos traducciones de interfaz para japonés, español, portugués y otros idiomas.
- Actualizamos la guía del protocolo OpenAI con dos recomendaciones más claras:
  - Los endpoints compatibles con OpenAI usan el protocolo OpenAI de forma predeterminada.
  - Recomendamos la Responses API para modelos GPT.

### Correcciones

- Corregimos un problema por el que los nuevos elementos de tareas pendientes permanecían en **Esperando confirmación**.
- Corregimos que los planes de varias etapas exigieran hacer clic manualmente en **Continuar** después de cada lote.
- Corregimos que las barras de duración, Revisión, Git y acciones de herramientas siguieran resaltadas y activas después de volver a un punto de control.
- Corregimos la sincronización incorrecta de las restricciones de acceso en el panel de dibujo y mejoramos los mensajes de restricción poco claros.
- Corregimos que los lienzos vacíos no recibieran un nodo predeterminado al abrirse por primera vez.
- Corregimos fugas o mezclas de sesiones del modo Chat entre varias ventanas.
- Corregimos que la selección de modelos volviera a un modelo no disponible después de eliminar el modelo seleccionado.
- Corregimos el funcionamiento incorrecto del almacenamiento provisional de un solo archivo en Chat Git.
- Corregimos problemas de commit y actualización en espacios de trabajo con varios repositorios.
- Corregimos la pérdida de historiales de chat después de añadir una carpeta al espacio de trabajo.
- Corregimos la ausencia de iconos de la barra de actividad en entornos WSL y SSH.
- Corregimos el parpadeo de la lista de proyectos en el Explorador.
- Corregimos que las comprobaciones simultáneas del estado de Git en la vista del repositorio sobrecargaran el host de extensiones.
- Corregimos que una salida `****` mal formada interrumpiera los streams de razonamiento de OpenAI.
- Corregimos el estilo del botón de cierre de las burbujas de edición.

### Mejoras

- Simplificamos las tarjetas de inicio de la página de bienvenida con mosaicos discontinuos y unificamos los iconos de Revisión de código.
- Actualizamos el texto secundario de Super Memory para usar cursiva.
- Consolidamos las tarjetas de proveedores en la página de configuración.
- Mejoramos la disposición del título de los diálogos de configuración de red.
- Mejoramos la localización del selector de modelos vacío y permitimos abrir directamente Configuración desde el selector.
- Garantizamos que la capacidad `supportsFast` del directorio en segundo plano se transmita correctamente por el flujo de solicitudes.
- Corregimos la información de precios de **Qwen 3.7**.

## 1.2.4 · 2026-07-20

### Nuevas funciones

#### Modelos y proveedores

- Integramos **Grok 4.5**, con intensidad de inferencia ajustable y un canal Fast; **Claude Sonnet 5** está disponible con contextos de **200K** y **1M**.
- Añadimos **Kimi K3** mediante los canales Moonshot API y Kimi Code, con contextos de **256K** y **1M**, además de compatibilidad completa con **Kimi K2.7 Code**.
- Añadimos el proveedor **StreamLake**, con toda la familia de modelos KAT-Coder de Kuaishou, preajustes integrados de Coding Plan y preajustes de endpoints de pago por uso.
- Añadimos inicio de sesión OAuth para cuentas de Grok.
- Rediseñamos los canales Fast: pasaron de ser un interruptor global a una configuración independiente de **proveedor + modelo**, para que Copilot, Codex, Claude y otros proveedores usen la semántica de sus canales oficiales.
- Las configuraciones compatibles con OpenAI ahora se pueden fijar para mantener arriba los canales usados con frecuencia.
- Añadimos compatibilidad con pruebas y descuentos de modelos por tiempo limitado, con insignias promocionales en el selector de modelos.
- Actualizamos el directorio de modelos con modelos insignia actuales, como Claude Fable 5, Claude Sonnet 5, Nemotron 3 Ultra, DeepSeek V4, GLM-5.2 y MiniMax M3, y eliminamos entradas obsoletas.

#### Uso, apariencia e interfaz

- Actualizamos el Centro de uso con visualización multilingüe del uso y la hora de restablecimiento de Codex, Kimi y Copilot en chino simplificado, chino tradicional, coreano y ruso. Los datos de Configuración y de la barra lateral del chat ahora se sincronizan en tiempo real, y el uso de Copilot muestra por separado Chat, Completions y Premium Requests.
- Los títulos de la página de bienvenida ahora se pueden personalizar globalmente o por modo, incluido el tamaño y el peso de la fuente. Añadimos el estilo **Elegant** para los accesos rápidos.
- Añadimos japonés, español y portugués brasileño como idiomas de interfaz.
- Rediseñamos el centro de notificaciones para que siga el idioma del producto, actualizamos el diseño de las tarjetas de Super Memory y suavizamos el aspecto del campo de entrada y las burbujas de mensajes.

#### Navegador, chat y espacio de trabajo

- El navegador integrado ahora permite silenciar todas las pestañas o una pestaña individual, con sincronización en tiempo real entre la lista de pestañas del panel y el navegador.
- Los mensajes de chat ahora pueden incluir hasta **10 imágenes**; se redimensionan automáticamente y se incluyen en el cálculo de contexto. Añadimos la duración del turno, la reversión con un clic dentro de los mensajes y opciones para abrir enlaces en el navegador externo o integrado.
- El diálogo de commit del chat ahora admite espacios de trabajo con varios repositorios: genera información de commit por repositorio, permite enviarlos de forma independiente, inicializa repositorios directamente desde el diálogo y conserva el progreso de commit/push tras reiniciar.
- Añadimos agrupación de proyectos en el administrador de recursos y actualizaciones más oportunas del estado de colaboración entre varias ventanas.
- Añadimos memoria persistente, que destila automáticamente el historial de conversaciones en experiencias reutilizables con deduplicación multilingüe.

#### Diagnóstico y productividad

- Añadimos visualización de caché con notificaciones por turno e informes diarios del espacio de trabajo que comparan hoy y ayer, con filtros de sesión/espacio de trabajo, ahorro estimado y análisis de fallos de caché.
- Añadimos tarjetas de diseño interactivas capaces de generar borradores de diseño HTML directamente en el chat y aplicarlos después de confirmarlos.
- La configuración de red de proveedores ahora admite pruebas de velocidad paralelas con un clic entre conexión directa, proxy del sistema, proxy global y rutas personalizadas. Las rutas recomendadas se etiquetan automáticamente y las insignias de enrutamiento se actualizan en tiempo real en Configuración.
- Actualizamos el núcleo del visor PDF con una nueva barra de herramientas. Los adjuntos se contabilizan por página, se ocultan automáticamente cuando el contexto está limitado y están sujetos a los límites de volumen y páginas de cada modelo.

### Mejoras

- Rediseñamos la experiencia de comandos en segundo plano: las entradas de la barra de estado permanecen visibles hasta que los comandos terminan realmente, mientras que los comandos simultáneos se agrupan en un resumen desplegable.
- Ampliamos la autorización de funciones avanzadas y la compatibilidad con extensiones principales como Python y Pylance, además de mejorar la compatibilidad con el desarrollo remoto.
- Mejoramos la fiabilidad de instalación y actualización en redes nacionales.
- Hicimos más inteligente la compresión automática de contexto, activándola dinámicamente según el contexto disponible para reducir compresiones innecesarias.
- Las habilidades integradas ahora se activan bajo demanda y usan por defecto el modo ligero.
- Los Agents ahora completan planes de varias etapas sin detenerse para pedir confirmación, con respuestas más contenidas y centradas en los resultados.
- Optimizamos profundamente el flujo de solicitudes para reducir el coste de conversaciones largas.
- Rediseñamos los avisos de error con banners más discretos, paneles de detalles y una representación mixta chino-inglés más clara.
- Restauramos el selector de diseño de la barra de título, reorganizamos los accesos rápidos de las páginas de chat vacías y evitamos que los iconos de proveedores activen alertas del sistema.

### Correcciones

- Resolvimos el retraso y el uso anómalo de memoria en conversaciones largas, acelerando considerablemente la apertura de sesiones históricas y mejorando la fluidez de respuestas extensas.
- Los servidores MCP desactivados o sin conexión ya no exponen herramientas a los modelos, evitando llamadas accidentales; las conexiones MCP también se mantienen estables después de alternarlas y los errores de lectura de configuración ya no borran los ajustes guardados.
- Corregimos iconos de navegación de Configuración que aparecían en negrita incorrectamente, bloqueos en determinados entornos Linux y otros problemas de interfaz.
- Corregimos problemas al cargar sesiones anteriores que podían provocar bloqueos de la interfaz o un crecimiento ilimitado del almacenamiento.
- Corregimos estados falsos de «contexto comprimido»: la compresión real ahora se muestra explícitamente y se resolvieron la deriva de comprensión en conversaciones largas y las interferencias de memoria entre sesiones.
- Al eliminar un modelo o una configuración de canal activos, ahora se selecciona automáticamente una opción disponible en lugar de dejar vacíos los selectores.
- Al cambiar entre las pestañas Plan y Analysis se conserva el estado sin volver a cargar el contenido.
- Corregimos pantallas blancas ocasionales en el panel de dibujo, entradas obsoletas después de terminar comandos en segundo plano, problemas de la barra de desplazamiento de Configuración y otros detalles menores.
- Mejoramos la compatibilidad de parámetros entre modelos, incluida la edición de instrucciones, la detección de interrupciones de streaming, los límites del presupuesto de razonamiento y la alineación de documentos.

## 1.2.1 · 2026-07-08

Nos complace anunciar el lanzamiento de Breezell v1.2.1. Esta actualización incorpora mejoras en el control de código fuente, los comandos en segundo plano, los flujos de terminal, las habilidades, la compatibilidad con modelos, el tratamiento de tareas de imagen, el acabado de la interfaz y las interacciones de IA de larga duración. También incluye numerosas correcciones de estabilidad para la salida en streaming, la sincronización del estado del editor, la persistencia de sesiones, el comportamiento de varias ventanas y la autenticación.

### Nuevas funciones

- La vista de control de código fuente ahora admite detalles de commits expandibles y la navegación por archivos relacionados, haciendo el seguimiento de cambios más claro e intuitivo.
- Mejoramos la colaboración entre comandos en segundo plano y terminal, con estados de varias tareas y comentarios más claros cuando el usuario interrumpe una tarea manualmente.
- El panel de habilidades ahora funciona junto con el interruptor maestro de Superpowers, creando una ruta de configuración más unificada.
- La página de inicio de conversaciones ahora incluye accesos rápidos a funciones frecuentes, reduciendo el tiempo necesario para llegar a ellas.
- Actualizamos los elementos visuales de marca y los identificadores de interfaz en las pantallas de inicio y Team Mode.
- Ampliamos la compatibilidad y la adaptación de parámetros para la última generación de modelos de IA principales.
- Actualizamos la configuración de imágenes, incluido el seguimiento de estado para tareas asíncronas de estilo vídeo.
- Añadimos la primera fase de ejecución de scripts por lotes, diseñada para escenarios de automatización de varios pasos.

### Correcciones

- Corregimos problemas por los que el streaming de conversaciones de IA podía quedarse bloqueado, producir formatos anómalos o no recuperarse correctamente después de interrumpir tareas largas.
- Corregimos la aplicación repetida de herramientas de edición de código, comportamientos de navegación anómalos y la desincronización del estado del editor después de rechazar cambios.
- Corregimos retrasos de actualización en estadísticas de uso de contexto, anillos de progreso y mensajes de ayuda.
- Corregimos notificaciones de actualización de versión atascadas y varias cadenas sin traducir.
- Corregimos problemas de uso y visualización en Super Memory, la revisión de código y flujos de herramientas relacionados.
- Corregimos problemas de persistencia de sesiones y redujimos el retraso de la lista de historial al manejar hilos grandes o contenido pegado voluminoso.
- Corregimos que paneles superpuestos como MCP y Skills quedaran bloqueados durante las conversaciones.
- Corregimos interrupciones ocasionales del streaming durante salidas largas de tipo investigación.
- Corregimos que los recordatorios de finalización de tareas no se activaran cuando la ventana no tenía el foco.
- Corregimos la sobrescritura de ajustes entre varias ventanas y la desaparición inesperada de barras de operaciones por lotes.
- Corregimos sesiones de autenticación que exigían volver a iniciar sesión o mostraban estados incoherentes en determinados casos.

### Mejoras

- Actualizamos el tiempo de ejecución principal y las dependencias de IA para mejorar la estabilidad y compatibilidad generales.
- Optimizamos las estrategias de caché de prompts y llamadas de herramientas para reducir costes repetidos y mejorar la coherencia de las respuestas.
- Mejoramos el renderizado en streaming y la lógica de actualización de la interfaz para suavizar las conversaciones largas y las salidas de alta carga.
- Optimizamos el mecanismo de tiempo de espera de solicitudes LLM para que las tareas de generación largas tengan menos probabilidades de interrumpirse incorrectamente mientras siguen avanzando.

## 1.2.0 · 2026-07-06

Breezell v1.2.0 incorpora nuevas herramientas de IA, flujos de Agent más inteligentes, mejoras de interfaz, correcciones de estabilidad y optimizaciones de rendimiento en conversaciones largas, ejecución de herramientas, salida del terminal, aislamiento de memoria y desarrollo remoto.

### Herramientas de IA y capacidades inteligentes

- Añadimos la nueva herramienta **Agent Research**, con seguimiento del progreso y visualización de resultados en tiempo real.
- Añadimos ejecución de scripts por lotes en Code Mode como primera fase de la automatización de varios pasos.
- Añadimos un punto de entrada unificado para herramientas del navegador, consolidando acciones que antes estaban separadas en un flujo más sencillo.

### Conversación e interfaz

- Añadimos una **barra de mensajes** al área de chat para facilitar la navegación y el salto entre mensajes.
- Añadimos tarjetas de acceso rápido para **Super Memory** y **Revisión de código** en la página de inicio del chat.
- Añadimos un panel de alternancia rápida para **servidores MCP** en el área de entrada, que permite activarlos o desactivarlos sin abrir Configuración.
- Introdujimos una nueva identidad de marca, con actualizaciones visuales unificadas en la página de lanzamiento, la página de bienvenida y Teams Mode.
- Rediseñamos la interfaz de gestión de proveedores en Configuración, con navegación por lista y vistas detalladas.
- Añadimos colores de énfasis de tema personalizados, disponibles en los modos claro y oscuro.
- Actualizamos la configuración de imágenes a v2, con compatibilidad para sondear y seguir tareas de vídeo asíncronas.
- Añadimos informes de comprobación de estado para proveedores compatibles con OpenAI, facilitando el diagnóstico de problemas de conexión y configuración.

### Estabilidad

- Corregimos el retraso al cargar historiales de conversaciones largas y las respuestas lentas al pegar grandes bloques de contenido.
- Corregimos congelaciones ocasionales de la interfaz durante el streaming de IA, especialmente cuando el terminal producía mucha salida.
- Corregimos casos en los que la barra de acciones **Conservar todo / Deshacer todo** podía desaparecer inesperadamente.
- Corregimos la sobrescritura de ajustes al abrir varias ventanas simultáneamente.
- Corregimos problemas que impedían usar correctamente **Super Memory** en determinados modos.
- Corregimos interrupciones por tiempo de espera incorrectas durante la generación de IA para que las generaciones lentas pero sanas no se detengan demasiado pronto.
- Corregimos fallos de tokens de actualización que podían obligar a iniciar sesión repetidamente.
- Corregimos la pérdida de correspondencia correcta de resultados de herramientas cuando el usuario interrumpía con un mensaje nuevo.
- Corregimos la compresión silenciosa de resultados de herramientas que hacía que la IA repitiera la misma tarea.
- Corregimos la visualización imprecisa del código de salida del terminal y los casos en los que no se podía restaurar toda la salida.
- Corregimos la pérdida de mayúsculas del nombre de host y de la información de puerto en conexiones Remote SSH.

### Mejoras de rendimiento y experiencia

- Mejoramos la velocidad general de respuesta simplificando la superficie de herramientas de IA y reduciendo la sobrecarga del sistema en cada turno.
- Optimizamos las estrategias de búsqueda y lectura con un enfoque de «localizar primero y leer después por ventanas», reduciendo lecturas completas innecesarias.
- Añadimos aislamiento de memoria a nivel de espacio de trabajo para evitar que los recuerdos de distintos proyectos interfieran entre sí.

## 1.1.9 · 2026-06-26

### Nuevos modelos

- Añadimos compatibilidad con varios modelos nuevos de lenguaje, así como modelos de generación de imágenes y vídeo, ofreciendo más opciones.

### Nuevas funciones

- Los Agents ahora admiten investigación profunda, lo que facilita explorar cuestiones complejas con mayor profundidad.
- La barra lateral del chat ahora permite saltar con un clic al mensaje más reciente y copiar mensajes con un clic.
- La gestión de proveedores de servicios ahora admite un diseño de lista y la interfaz del mercado MCP se ha renovado.

### Mejoras de experiencia

- Refinamos los temas claro/oscuro, la interfaz del terminal y varios detalles de la interfaz para ofrecer una experiencia visual más limpia.

### Rendimiento y estabilidad

- Actualizamos el motor de tiempo de ejecución subyacente para mejorar el inicio y el funcionamiento.
- Los Agents ahora son más inteligentes y estables, reduciendo acciones repetitivas e ineficaces.
- Corregimos problemas relacionados con el inicio de sesión, el terminal, las conexiones remotas y varias áreas de la interfaz.

## 1.1.8 · Corrección de errores · 2026-06-09

- Añadimos una nueva validación para el ajuste de intensidad.
- Optimizamos los diálogos repetidos y el contexto inteligente automático.
- Corregimos problemas de desplazamiento en la página de conversación.
- Corregimos la compresión inestable.

## 1.1.7 · 2026-06-07

- Corregimos que el modelo de optimización fuera demasiado verboso.
- Corregimos un problema anómalo con el etiquetado de archivos en la revisión de optimización.
- Corregimos varios errores.

## 1.1.6 · 2026-06-06

### Añadido

- **Panel de revisión de código**: vista de revisión independiente, diferencias con números de línea, diferencias Myers para archivos grandes, reversión, selección de referencias/copia y envío al chat.
- **Configuración de apariencia**: ancho/posición de la barra de actividad, posición de la barra lateral y estilo de pestañas del editor.
- **Navegador Breezell**: interfaz del panel rediseñada, barra de dirección/búsqueda, modo incógnito y cierre automático cuando se cierra la última pestaña.
- **Panel de base de datos**: detección de SQLite del espacio de trabajo, CRUD completo para MongoDB/Oracle y renombrado de conexiones.
- **Mejoras del chat**: referencia a las 3 rondas recientes del historial, adjuntos, cita/copia de texto enriquecido, compresión manual de contexto y progreso de condensación.
- **Nuevos proveedores**: GitHub Copilot y Kimi Code (OAuth de dispositivo); optimización del uso/icono de Codex.
- **Super Memory**: interfaz sensible al tiempo (FreshBadge y tarjetas de recuperación).
- **Modelos/proveedores**: MiniMax M3, Opus 4.8 y glm-5.1; rediseño de la página de configuración compatible con OpenAI.
- **Centro de notificaciones**: pestañas en la barra lateral izquierda y diseño dividido más amplio.
- **Visualización de errores**: tarjetas de error estructuradas, detalles de error sin procesar expandibles y omisión de reintentos para errores permanentes.
- **Otros**: traducción al ruso y anillo/bandeja de uso de contexto.

### Correcciones

- **Agent/herramientas**: lectura siempre actualizada de archivos y sincronización de las herramientas de archivos con el disco.
- **Revisión/renderizado**: tablas GFM, espaciado de Explore y falta de memoria de Markdown/Mermaid en streaming durante sesiones largas.
- **Remoto/terminal**: cadena de herramientas SSH completa, redistribución del terminal de Windows, confusión de ID del terminal y bloqueo al cerrar pestañas.
- **Ajustes de interfaz**: el ajuste del ancho de la barra de actividad reduce el movimiento del panel; también se corrigieron la altura del panel de notificaciones, la redacción de días de conservación de Super Memory y otros detalles.

### Optimizaciones

- **Rendimiento**: mejora significativa de la tasa de aciertos de caché, del LCP de inicio/pantalla de carga y de la gestión de memoria de conversaciones largas.
- **Dependencias/base**: Electron 39.8 → 42.3.3.

## 1.1.5 · 2026-05-24

### Nuevas funciones

- **Cita y copia en el chat**: después de seleccionar texto en un chat, se puede convertir rápidamente en una cita Markdown o copiarlo directamente, conservando listas, bloques de código y etiquetas de nombres de archivo.
- **Notificación automática de comandos en segundo plano**: se envían notificaciones automáticamente cuando terminan tareas de terminal de larga duración, sin tener que comprobar el progreso repetidamente.
- **Renderizado de fórmulas matemáticas**: el chat ahora admite correctamente fórmulas matemáticas LaTeX, incluidas $x^2$ y $...$.
- **Rediseño de la visualización de errores**: los mensajes de error se muestran en tarjetas expandibles con copia del contenido completo en un clic.
- **Compatibilidad completa con desarrollo remoto SSH**: todas las llamadas de herramientas en hosts SSH remotos son compatibles.
- **Diagnóstico de bloqueos del streaming**: cuando una respuesta en streaming se detiene, los diagnósticos detallados indican si se debe a latencia ascendente, almacenamiento en búfer de red u otros motivos.
- **Barra de uso del contexto del modelo**: el selector de modelos muestra claramente por categoría el uso de tokens de la sesión actual.
- **Etiqueta «Modelo predeterminado»**: el selector de modelos identifica claramente el modelo predeterminado.
- **Actualización del panel de memoria a largo plazo**: nuevas etiquetas temporales como «Ahora mismo», «Hoy» y «Esta semana», estilo de cristal esmerilado y tarjetas de recuperación de memoria.
- **Mostrar el título del plan durante el streaming**: cuando el modelo genera un plan, su título aparece durante la salida en streaming.
- **Omisión automática de reintentos para errores permanentes**: los errores permanentes, como los fallos de autenticación, ya no provocan reintentos automáticos inútiles.
- **Compatibilidad con nuevos modelos**: añadimos modelos como Gemini 3.5 y Qwen 3.7.
- **Compatibilidad con la interfaz rusa**.
- **Tarjetas de herramientas del chat expandibles**: las salidas de herramientas como resultados de búsqueda y lecturas de archivos se pueden contraer y expandir.

### Correcciones

- Aumentamos el tiempo de espera de respuestas en streaming de 120 s a 180 s, con un aviso intermedio para modelos de inferencia más lenta.
- Corregimos el problema de capas de los menús desplegables de la página de configuración; los menús de proveedores de terceros ya no quedan ocultos.
- Corregimos la visualización de errores `[object Object]`.
- Corregimos el botón de copia del panel de errores que no funcionaba.
- Corregimos la congelación del cuadro de indicación de rutas de archivos, que ya no permanece tras desplazarse fuera de él.
- Optimizamos la combinación de colores de selección de texto del chat y corregimos variables de estilo que habían dejado de funcionar.
- Corregimos el desplazamiento pasante del selector de modelos: al desplazar el menú ya no se desplaza el área de chat inferior.
- Corregimos la compatibilidad del esquema para el modo de razonamiento y mejoramos la compatibilidad de parámetros de inferencia con el protocolo Claude.
- Optimizamos la vista previa en streaming de varios archivos; los indicadores de «N cambios» en tiempo real ya no se retrasan.
- Corregimos numerosos detalles de interfaz, incluidos desplazamiento, espaciado, alineación, animaciones y sugerencias.

### Optimizaciones

- **Actualización de la pila tecnológica subyacente**: Electron se actualizó a 42.2.0, con Chromium 148, Node.js 24 y V8 14.8.
- **Optimización de la gestión de memoria**: los historiales grandes del chat se escriben automáticamente en disco y los registros de inferencia se organizan según sea necesario para mantener ligeras las conversaciones largas.
- **Renderizado mejorado de gráficos Mermaid**: mejoramos la gestión de caché con limpieza activa de SVG al descargar, evitando la acumulación de memoria durante chats largos.

## 1.1.4 · 2026-04-26

### Nuevas funciones

- **Modelos de la serie DeepSeek V4**: añadimos elementos DeepSeek V4 a la lista/configuración de modelos para seleccionarlos directamente.
- **Interfaz de tarjetas «Slot» compatible con OpenAI**: rediseñamos la interfaz de tarjetas de las áreas de configuración compatibles con OpenAI.

### Correcciones

- Las barras laterales y la configuración ya no se «cuelgan»: después de cambiar de modelo y operar con reglas/memoria, se actualizan rápidamente sin reiniciar.
- Corregimos enlaces de archivos del chat que no se podían abrir o se analizaban incorrectamente.
- Hicimos más fiables las herramientas de terminal: ahora los comandos se ejecutan mediante el servicio de terminal del sistema.
- Corregimos los saltos y la altura errática del área de chat cuando aparecían o cambiaban de estado las tarjetas «Pensamiento/Contenido en streaming/Herramientas de terminal», así como un bloqueo causado por una referencia de variable.
- Actualizamos la vista previa de PDF y los comportamientos de uso/visualización de herramientas relacionadas.
- Corregimos la persistencia y el manejo de grandes volúmenes de resultados de herramientas para reducir anomalías o pérdidas de estado.
- Actualizamos los informes de errores LLM y los recursos de interfaz del área de chat.

### Optimizaciones

- Selección de paneles de modelos en el cuadro de entrada.
- Mayor estabilidad de las herramientas de terminal.

## 1.1.3-v2 · 2026-04-23

### Nuevas funciones

- Compatibilidad con el modelo GPT-5.5, añadido a todas las listas de proveedores.
- Añadimos el modelo Kimi K2.6, disponible en los principales proveedores (OpenRouter, Together AI, Fireworks, DeepInfra, etc.).
- Ahora se pueden mostrar fórmulas matemáticas en el chat (renderizado KaTeX).
- Ahora se pueden mostrar diagramas de flujo en el chat (renderizado de gráficos).
- Añadimos una herramienta de búsqueda web con control sobre la profundidad y los parámetros de tema.
- Actualizamos la herramienta de terminal al modo PTY para una experiencia más realista.
- Añadimos un índice de símbolos de código con compatibilidad para saltar a la definición.
- Añadimos una herramienta de análisis de dependencias (detección de ciclos, seguimiento de dependencias: archivos afectados por un cambio, cadena entre los archivos A y B y existencia de dependencias circulares).
- Skills ahora admite arrastrar y comprimir archivos y carpetas.
- Añadimos un indicador de estado de actualización de IDE a la barra de título.
- Renovamos por completo el panel multi-Slot: búsqueda, ordenación, comprobaciones de estado y limpieza por lotes de API no válidas.

### Correcciones

- Los chats largos ya no se congelan: corregimos el bloqueo de la interfaz al haber demasiados mensajes.
- El desplazamiento ya no vuelve al final al consultar el historial del chat.
- Corregimos fugas de subprocesos del terminal, evitando picos de memoria o bloqueos por procesos residuales.
- Corregimos la visualización de rutas de archivos: los enlaces ya no se convierten en rutas falsas por culpa de los puntos suspensivos.
- Corregimos el panel vacío de Super Memory; las etiquetas de razonamiento de IA ya no se filtran y dejan vacía la memoria.
- Corregimos el plegado de comandos del terminal: los comandos fallidos ya no quedan ocultos por comandos posteriores correctos.
- Corregimos el estilo del recordatorio flotante de tareas del plan, incluido el fondo de doble capa.
- Corregimos los saltos del chat al expandir la lista de archivos.
- La IA ya no pregunta repetidamente «¿continuar?» y ejecuta de forma autónoma (requiere autopruebas).
- Alineamos la barra de desplazamiento del cuadro de contenido de Skills.
- Corregimos casos en los que la ejecución reconocía el código de salida 0 aunque la compilación real había fallado.

### Optimización del rendimiento

- Optimizamos considerablemente el renderizado del chat.
- Añadimos memo al renderizado Markdown para evitar volver a analizar el mismo contenido.
- Optimización de memoria: ajustamos el umbral de persistencia de resultados de herramientas para evitar picos en conversaciones largas.
- Actualizamos el contador de tokens.
- Añadimos un límite superior LRU a la caché de mensajes.
- Nuevo diseño de la pantalla de inicio y del flujo de incorporación.

## 1.1.1 · 2026-04-11

### Nuevas funciones

- El panel de historial del chat ahora tiene un botón «Nueva conversación» para facilitar la operación.
- La funcionalidad de base de datos se amplió considerablemente: compatibilidad con Redis y MariaDB, confirmación al editar celdas, insignias con el número de tablas y apertura directa del panel de base de datos desde el chat.
- Las conversaciones de IA permiten cambiar entre los modos Plan/Agent para un flujo de trabajo más fluido.

### Correcciones y optimizaciones

- Corregimos la finalización de código repetida (finalización con Tab).
- Corregimos los saltos de página al enfocar la ventana del explorador de archivos.
- Corregimos informes falsos de desconexión al minimizar la ventana.
- Corregimos varios errores, como el índice de imágenes, las fugas de memoria IPC y los tiempos de espera LLM en el chat.
- Corregimos la pantalla blanca causada por el empaquetado de React y optimizamos el tamaño del paquete.
- Corregimos varios problemas, como paneles vacíos y deshacer en el comprobador CSS.
- Actualizamos a TypeScript 6.0 y Electron 41.2.0 para mejorar la estabilidad general.
- Pulimos ampliamente la interfaz: unificamos fondos y bordes de tarjetas de herramientas, alineamos iconos de pestañas del editor y corregimos el desplazamiento de bloques de diferencias, entre otros.

## 1.1.0 · 2026-04-09

### Nuevas funciones

- **Finalización de código gratuita**: todos los usuarios pueden usar ahora la finalización de código con IA sin configuración adicional.
- **Navegador integrado actualizado considerablemente**: admite simulación de dispositivos (vista previa móvil/tableta), títulos e iconos dinámicos de pestañas, control de zoom, inspector CSS optimizado y grabación en tiempo real de eventos de animación/transición.
- **Memoria de conversación más inteligente**: nuevo mecanismo automático de deduplicación y combinación para que la IA recuerde mejor el contenido anterior y evite almacenarlo dos veces.
- **Botón de alternancia de la barra lateral**: añadimos un botón rápido a la barra de título.
- **Optimización de la lista de tareas**: admite combinar tareas, ordenar por prioridad y nuevas animaciones de transición.
- **Panel de equipo rediseñado**: nuevo diseño de tema oscuro y carga de página más rápida.
- **Carga diferida de mensajes de conversación**: los historiales largos ya no se cargan todos a la vez, lo que acelera la apertura.
- **Mecanismo de caché de API**: añadimos caché de Responses API para reducir solicitudes duplicadas y ahorrar tokens.

### Mejoras

- Actualización del backend del editor: Electron a 41.2.0 y TypeScript a 6.0 para un funcionamiento más estable y fluido.
- Rediseñamos la interfaz de llamadas de herramientas de IA y unificamos los estilos de tarjetas para operaciones de archivos, herramientas MCP, etc.
- Optimizamos las diferencias de código: corregimos el desplazamiento en estado contraído, las barras horizontales y la visualización del color de fondo.
- Optimizamos las notificaciones del sistema para evitar avisos duplicados y no informar de desconexiones al minimizar.
- Optimizamos la detección de comandos de terminal para identificar con más precisión si se han ejecutado.
- Mejoramos el rendimiento de inicio optimizando el flujo de arranque y el renderizado de la lista de conversaciones.
- Evitamos el desbordamiento de memoria en segundo plano limpiando automáticamente la memoria acumulada durante el funcionamiento prolongado.

### Correcciones

- Corregimos que los mensajes en cola pudieran enviarse al hilo equivocado al cambiar de hilo de conversación.
- Corregimos que eliminar un adjunto de imagen pudiera borrar otros adjuntos de archivo.
- Corregimos que el proceso en segundo plano siguiera ejecutándose después de agotarse el tiempo de espera de una respuesta de IA.
- Corregimos el problema de compatibilidad con TrustedHTML que provocaba páginas en blanco.
- Corregimos que los enlaces del navegador integrado no abrieran correctamente páginas nuevas.
- Corregimos que los botones de opciones no aparecieran ocasionalmente al hacer preguntas a la IA.
- Corregimos los iconos de pestañas del editor desalineados.

## 1.0.9 · 2026-04-03

### Nuevas funciones

- **Automatización del navegador integrado**: integramos herramientas de navegador CDP (captura de pantalla, clic, entrada, navegación, instantánea DOM y registro de consola); el Agent de IA puede operar directamente páginas del navegador.
- **Simulación de vista del dispositivo**: el navegador integrado puede simular distintas resoluciones (móvil/tableta/escritorio) y ofrece una lista de dispositivos desplazable.
- **Gestión de pestañas del navegador**: títulos/iconos dinámicos, control de zoom, cambio entre varias pestañas y apertura rápida del panel del navegador desde el cuadro de entrada.
- **Llamadas paralelas de varias herramientas**: la IA puede devolver varias llamadas de herramientas para ejecutarlas en paralelo.
- **Botón de alternancia de la barra lateral en la barra de título**.
- **Cambio de panel Entanglement**: permite cambiar de panel de forma independiente y alinearlo automáticamente al ajustar la barra lateral.

### Correcciones

- Detección de finalización de comandos del terminal: activamos el protocolo OSC 633;D, corregimos la limpieza ANSI y aceleramos el juicio heurístico.
- Supresión de notificaciones del sistema de compañeros: los subhilos ya no envían notificaciones irrelevantes al sistema operativo.
- Anulación del modo Entanglement: el modo elegido por el usuario ya no queda anulado silenciosamente por el modo de programación.
- Fuga de intención: las etiquetas de intención del modo causal de Entanglement ya no aparecen en el texto mostrado.

### Optimizaciones

- Rendimiento de inicio: optimización O(n) del chat y persistencia de estadísticas de diferencias.
- Interfaz de herramientas de terminal: optimizamos los márgenes internos de la barra de título/barra inferior y corregimos el radio de esquina del botón «Abrir en el navegador».
- Posicionamiento del panel del navegador: usamos floating-ui para eliminar saltos y desplazamientos al abrirlo.
