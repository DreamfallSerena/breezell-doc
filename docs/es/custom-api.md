---
title: API personalizada (BYOK)
description: Usa tu propia clave API en Breezell y ejecuta los modelos Claude a través de la API oficial de Anthropic o de cualquier relay compatible.
---

# API personalizada (BYOK)

BYOK significa **Bring Your Own Key** («trae tu propia clave»). En lugar de usar la cuota oficial de Breezell, Breezell envía las solicitudes a un proveedor de modelos con tu propia clave API, y es ese proveedor quien te factura directamente.

Esta guía recorre toda la configuración con modelos Claude: `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5` y `claude-fable-5-1`.

::: tip Sobre las pantallas de esta página
En esta página no hay capturas de pantalla. Todas las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. El texto sigue el idioma de esta página y los colores siguen el selector claro / oscuro de este sitio (Breezell Light / Breezell Dark).

Los anillos naranjas y las insignias numeradas indican dónde hacer clic; no forman parte de Breezell. Algunas pantallas son interactivas: puedes cambiar el protocolo, editar la URL base, pulsar **Claude 1M**, activar o desactivar el razonamiento y arrastrar el control deslizante de esfuerzo.
:::

## Antes de empezar

Necesitas tres cosas:

1. **Una cuenta de Breezell con el plan Custom API o superior.** Usar modelos de terceros con tu propia clave es una función de pago. Sin ese plan, la página del proveedor muestra <BzWenben jian="box.models.gate.planRequired" /> en lugar del formulario y, si no has iniciado sesión, muestra <BzWenben jian="box.models.gate.signIn" />.
2. **Una clave.** Puede ser una clave API de Anthropic obtenida en la Anthropic Console (empieza por `sk-ant-`), o bien la URL base y la clave de un relay, una pasarela o un proxy autoalojado.
3. **El protocolo que habla tu relay.** Pregunta a tu proveedor si ofrece la API Anthropic Messages (`/v1/messages`), la API OpenAI Chat Completions (`/v1/chat/completions`) o ambas.

## Elegir la ruta

| Ruta | Úsala cuando | Dónde está en Breezell | Protocolo |
| --- | --- | --- | --- |
| **A. API de Anthropic** | Tienes una clave de la Anthropic Console | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages (integrado) |
| **B. Ranura compatible + protocolo Anthropic** | Tu relay ofrece `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › una ranura | Anthropic |
| **C. Ranura compatible + protocolo OpenAI** | Tu relay solo ofrece `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › una ranura | OpenAI |

Para Claude, elige preferiblemente **A** o **B**. El propio Breezell lo recomienda en el formulario de la ranura: <BzWenben jian="settings.apiFormat.anthropicTip" />

## Paso 1: Abrir Box (Ajustes de Breezell)

Los ajustes de Breezell están en la página **Box**. Mientras estás en Box, esta ocupa el lugar de la barra de actividad, la barra lateral, el área del editor y el panel; haz clic en **Agent** para volver a tu código.

Hay tres formas de abrirla:

- Haz clic en **Box** en el conmutador situado a la izquierda de la barra de título.
- Haz clic en el icono del engranaje, arriba a la derecha, y elige <BzWenben jian="box.title" />.
- Abre la paleta de comandos y ejecuta `Breezell: Open Settings`.

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## Paso 2: Ir a la página de modelos

En la barra lateral de Box, abre el grupo <BzWenben jian="box.title" /> y haz clic en <BzWenben jian="tab.models" />. Normalmente es la página con la que se abre Box.

<BzHezi gaoliang="moxing" />

En la parte superior de la página encontrarás cuatro vistas: <BzWenben jian="box.usage.tab.models" />, <BzWenben jian="box.usage.tab.cache" />, <BzWenben jian="box.usage.tab.tokens" /> y <BzWenben jian="box.usage.tab.breezell" />. Quédate en la primera.

Debajo, las categorías de proveedores reparten los proveedores en cuatro grupos:

| Categoría | Qué contiene |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Los modelos oficiales de Breezell, con cargo a tu cuota de Breezell. No necesitas clave. |
| <BzWenben jian="box.models.group.signin" /> | Proveedores en los que inicias sesión con una cuenta, como Codex o Copilot. |
| <BzWenben jian="box.models.group.api" /> | APIs oficiales de los fabricantes con tu propia clave, Anthropic incluida. |
| <BzWenben jian="box.models.group.compat" /> | Hasta 50 ranuras personalizadas para relays, pasarelas y proxies autoalojados. |

## Ruta A: La API de Anthropic

### A1. Seleccionar Anthropic

1. Haz clic en <BzWenben jian="box.models.group.api" />.
2. Escribe `Anthropic` en el campo <BzWenben jian="box.models.searchProvidersPlaceholder" />.
3. Haz clic en la tarjeta **Anthropic**. El proveedor seleccionado aparece debajo con el estado <BzWenben jian="box.models.notConfigured" />.
4. Haz clic en <BzWenben jian="box.models.editConfig" /> para abrir su configuración.

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Pegar tu clave de Anthropic

La configuración tiene un único campo: la clave API.

1. Haz clic en la tarjeta **Get your API Key**. Se abre la Anthropic Console (`console.anthropic.com/settings/keys`) en tu navegador.
2. Crea una clave y cópiala. Tiene este aspecto: `sk-ant-api03-...`.
3. Pégala en el campo. El icono del ojo la muestra u oculta.

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell limpia la clave antes de usarla: quita los espacios, las comillas que la rodean, un `Bearer ` inicial y los caracteres invisibles que suelen colarse al copiar. El proveedor Anthropic no tiene campo de URL base; Breezell siempre usa `https://api.anthropic.com`.

### A3. Activar los modelos Claude que quieras

En cuanto se guarda la clave, el estado cambia a <BzWenben jian="box.models.configured" /> y la lista muestra los modelos Claude integrados en Breezell, del más reciente al más antiguo.

Solo los cinco primeros vienen habilitados: `claude-fable-5-1`, `claude-fable-5`, `claude-opus-5`, `claude-opus-5-5` y `claude-opus-4-8`. Activa el interruptor al final de una fila para añadir un modelo al selector de modelos del chat; por ejemplo, `claude-sonnet-5-5` y `claude-haiku-5-5`.

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

Cómo leer la tabla:

| Columna | Significado |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | El ID del modelo que se envía a la API. Un punto verde indica que el modelo está habilitado. |
| <BzWenben jian="box.models.context" /> | La ventana de contexto completa del modelo. Todos los modelos Claude 5 tienen 1M. |
| <BzWenben jian="box.models.capabilities" /> | Cuatro iconos: <BzWenben jian="box.models.filter.vision" />, <BzWenben jian="box.models.filter.tools" />, <BzWenben jian="box.models.filter.reasoning" />, <BzWenben jian="box.models.filter.web" />. Un icono iluminado indica que el modelo tiene esa capacidad. |
| <BzWenben jian="models.pricing" /> | Precio de entrada / salida en USD <BzWenben jian="box.models.price" />, según el catálogo integrado de Breezell. La factura de Anthropic es la que manda. |
| <BzWenben jian="box.mcp.colEnabled" /> | Muestra u oculta el modelo en el selector de modelos del chat. |

Cuando la tabla se estrecha, Breezell oculta primero la columna <BzWenben jian="box.models.context" /> y después <BzWenben jian="box.models.capabilities" />; sus valores pasan a la información emergente del nombre del modelo.

Si Anthropic lanza un modelo que aún no está en la lista, haz clic en <BzWenben jian="box.models.fetch" />. Breezell consulta `https://api.anthropic.com/v1/models` con tu clave y te permite añadir los nuevos ID. También puedes escribir un ID en el campo <BzWenben jian="box.models.addModelPlaceholder" /> y hacer clic en <BzWenben jian="box.models.add" />.

La ruta A está lista. Continúa con [Usar Claude en el chat](#use-claude-in-chat).

## Ruta B: Una ranura compatible con el protocolo Anthropic

Usa esta ruta con un relay, una pasarela de API o un proxy autoalojado que sirva Claude a través de la API Anthropic Messages.

### B1. Abrir una ranura compatible

1. Haz clic en <BzWenben jian="box.models.group.compat" />.
2. Haz clic en la tarjeta de la ranura. Slot 1 siempre está disponible; una ranura nueva muestra <BzWenben jian="settings.noEndpoint" /> bajo su nombre.
3. Para mantener separados varios relays, haz clic en <BzWenben jian="box.models.addCompat" /> una vez por cada uno. Breezell tiene 50 ranuras, y cada una es un canal independiente con su propia dirección, clave, protocolo y modelos.
4. Haz clic en <BzWenben jian="box.models.editConfig" />.

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. Rellenar la ranura

El formulario es el mismo para todas las ranuras. Pruébalo aquí abajo: cambia la URL base o el protocolo y observa cómo se actualiza <BzWenben jian="settings.requestUrl" />, exactamente igual que en Breezell.

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />: un nombre de hasta 30 caracteres, como `Claude Relay`. Se usa como título de la tarjeta en la página de modelos y como nombre del grupo en el selector de modelos del chat.
- <BzWenben jian="settings.baseUrl" />: la dirección que te da tu proveedor. Debe empezar por `http://` o `https://`; por ejemplo, `https://relay.example.com` o `http://127.0.0.1:8080`.

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />: la clave del relay. Aparece enmascarada; el icono del ojo la muestra.

**<BzWenben jian="settings.sectionProtocol" />**

Elige **Anthropic**. Los tres botones determinan el formato de la solicitud:

| Botón | Formato de la solicitud | ¿Para Claude? |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | Solo si el relay no tiene `/v1/messages` (ruta C). |
| Responses | OpenAI Responses | No. Está pensado para modelos GPT. |
| **Anthropic** | Anthropic Messages | **Sí.** Breezell lo recomienda para Claude. |

Después revisa <BzWenben jian="settings.endpointPreset" />. Con el protocolo Anthropic hay dos preajustes:

| Preajuste | Ruta | Úsalo para |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | Casi todos los relays. Quédate con este. |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Solo Volcengine Agent Plan. |

### B3. Comprobar la URL de la solicitud

<BzWenben jian="settings.requestUrl" />, debajo del preajuste, es la dirección exacta a la que llamará Breezell. Breezell une la URL base con la ruta del preajuste y elimina la parte duplicada, así que funcionan los dos estilos habituales de URL base:

| URL base que introduces | Preajuste | URL de la solicitud |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

Compara el resultado con la documentación de tu proveedor. Si el proveedor ofrece su API en una ruta poco habitual, introduce la URL base de forma que la URL de la solicitud termine exactamente donde indica el proveedor.

### B4. Cabeceras personalizadas y Claude 1M (opcional)

El campo <BzWenben jian="settings.customHeaders" /> añade cabeceras HTTP a todas las solicitudes de esta ranura. Déjalo en `{}` salvo que tu proveedor te pida algo.

El valor debe ser JSON válido: comillas dobles en claves y valores, sin comentarios y sin comas finales.

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

El botón **Claude 1M** rellena exactamente esta cabecera. Úsalo cuando tu relay necesite la cabecera beta para aceptar prompts de más de 200K. Aun así, el chat de Breezell empieza cada modelo Claude en 200K; el cambio a 1M se hace por modelo en el selector de modelos del chat (consulta [Context, Reasoning y Fast](#context-reasoning-and-fast)).

Debajo de las cabeceras verás la tarjeta <BzWenben jian="settings.accountPool" />. Un grupo de cuentas va rotando varias claves o rutas en una misma ranura. No lo necesitas para una primera configuración.

### B5. Añadir modelos Claude

Una ranura nueva no tiene modelos. Puedes añadirlos de dos formas.

**Obtener la lista.** Haz clic en <BzWenben jian="box.models.fetch" />. Breezell pregunta al relay qué modelos tiene y los muestra en una lista de casillas. Marca los modelos Claude y haz clic en <BzWenben jian="box.models.addSelected" />.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**Escribir el ID.** Escribe el ID del modelo en el campo <BzWenben jian="box.models.addModelPlaceholder" /> y haz clic en <BzWenben jian="box.models.add" />. Usa el ID exactamente como lo nombra el relay; por ejemplo, `claude-opus-5-5`. Es la opción adecuada cuando el relay no ofrece una lista de modelos.

### B6. Comprobar la ranura

Haz clic en <BzWenben jian="box.models.health.checkSlot" /> para enviar una solicitud corta a esta ranura. Un modelo que falla recibe la etiqueta <BzWenben jian="box.models.health.ribbonFail" /> y uno lento, <BzWenben jian="box.models.health.ribbonTimeout" />; una ranura a la que no se puede llegar en absoluto aparece marcada como <BzWenben jian="box.models.health.ribbonDown" /> en su tarjeta.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

Para un análisis más detallado, haz clic en <BzWenben jian="box.models.checkConnectivity" />, encima de las tarjetas de las ranuras. Comprueba varias ranuras y modelos a la vez, y <BzWenben jian="box.models.health.checkStreaming" /> te indica si un relay transmite las respuestas por partes (<BzWenben jian="box.models.health.stream.streaming" />), retiene el razonamiento (<BzWenben jian="box.models.health.stream.heldThinking" />) o lo envía todo al final (<BzWenben jian="box.models.health.stream.buffered" />).

## Ruta C: Una ranura compatible con el protocolo OpenAI

Algunos relays solo sirven Claude a través del formato OpenAI Chat Completions. Configura la ranura como en la ruta B, con estas diferencias:

1. En <BzWenben jian="settings.sectionProtocol" />, elige **OpenAI**.
2. Mantén el preajuste <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" /> (`/v1/chat/completions`).
3. Añade los modelos con los ID que usa el relay. Muchos relays usan `claude-opus-5-5`; algunos anteponen el nombre del fabricante, como `anthropic/claude-opus-5-5`.

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell reconoce los modelos Claude por su nombre, así que `anthropic/claude-opus-5-5` o `claude-opus-5.5` reciben los mismos límites que `claude-opus-5-5`. Fíjate en lo que dice el propio formulario: <BzWenben jian="settings.apiFormat.openaiTip3" />. Además, con el protocolo OpenAI Breezell no puede ofrecer **Fast** para Claude Opus. Si tu relay también ofrece `/v1/messages`, cambia la ranura a **Anthropic**.

## Gestionar tus modelos Claude

### El menú de la fila

Cada fila de modelo tiene un botón **⋯**. Para un modelo Claude en una ranura compatible, ofrece <BzWenben jian="box.models.pin" />, <BzWenben jian="box.models.advanced" /> y <BzWenben jian="box.models.remove" />. Pasa el cursor sobre una fila para que aparezca el icono de copiar junto al nombre del modelo.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### Definir el precio

Breezell conoce los precios de lista de la propia API de Anthropic, pero no los de tu relay. En una ranura compatible, la columna de precio muestra <BzWenben jian="box.models.editPrice" />. Haz clic ahí e introduce los precios de tu relay en USD por 1M de tokens: entrada, salida, acierto de caché y las escrituras de caché de 5 minutos y de 1 hora que usa Claude. A partir de entonces, la vista <BzWenben jian="box.usage.tab.tokens" /> muestra los costes además de los tokens. Sin precio, Breezell sigue contando tokens, pero no dinero.

### Ajustes avanzados

Breezell reconoce todos los ID de modelos Claude de esta guía y rellena sus límites por ti, así que la mayoría de la gente nunca abre este cuadro de diálogo. Ábrelo cuando el relay cambie el nombre de un modelo (por ejemplo, `my-claude`), cuando Breezell muestre el modelo como no reconocido o cuando el relay imponga límites más bajos.

Primero activa el interruptor <BzWenben jian="models.enableCustomSettings" />; hasta entonces, todas las tarjetas se quedan en gris y en solo lectura.

<BzGaoji />

Los valores que usa Breezell para los modelos Claude 5:

| Ajuste | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| Ventana de contexto (corta / larga) | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | Desactivado | Desactivado | Desactivado | **Activado** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | Desactivado | **Activado** | Desactivado | Desactivado |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

La tabla corresponde a una ranura compatible con el protocolo Anthropic. En el proveedor Anthropic (ruta A), el mensaje de sistema es `separated`; ambos funcionan con Claude. **Fast** solo se ofrece en el proveedor Anthropic y en las ranuras con el protocolo Anthropic.

Los campos que aceptan cantidades de tokens admiten el sufijo `k` o `m`: `128k` se convierte en `128000` y `1m`, en `1000000`. No pongas un tamaño de contexto o de salida mayor del que permite tu relay, o las solicitudes fallarán.

En una ranura con el protocolo **OpenAI**, <BzWenben jian="models.systemMessage" /> ofrece `system-role` o `developer-role`, y <BzWenben jian="models.toolFormat" /> ofrece `OpenAI Style` o `None (XML)`. Mantén `OpenAI Style` para Claude para que funcionen las llamadas a herramientas.

## Usar Claude en el chat {#use-claude-in-chat}

### Elegir el modelo

El chat sigue abierto junto a Box; haz clic en **Agent** en la barra de título si también quieres recuperar el editor. Debajo del cuadro de entrada del chat, haz clic en el nombre del modelo para abrir el selector de modelos.

- La pestaña <BzWenben jian="box.models.group.api" /> muestra los modelos Claude que habilitaste en el proveedor Anthropic (ruta A), con su precio de lista.
- Cambia a **OpenAI-Compatible**, en la parte inferior del selector, para ver las ranuras compatibles (rutas B y C). Cada ranura es un grupo que lleva su alias como título.

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context, Reasoning y Fast {#context-reasoning-and-fast}

Pasa el cursor sobre un modelo del selector para abrir sus opciones. Este panel es interactivo: pruébalo.

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**: `200K` (marcado como <BzWenben jian="inputToolbar.contextDefault" />) o `1M`. Breezell empieza todos los modelos Claude en 200K y solo envía el presupuesto mayor después de que elijas `1M`.
- **Reasoning**: Claude Fable, Opus y Sonnet 5.x siempre razonan, así que el interruptor está bloqueado en activado. `claude-haiku-5-5` te permite desactivarlo para obtener respuestas rápidas.
- **Effort**: `Low`, `Medium`, `High`, `Extra High` y `Max`, de **Faster** a **Smarter**. El control deslizante se vuelve morado en `Max`.
- **Fast**: solo en `claude-opus-5-5` (y en Opus 5 / Opus 4.8). Cuesta 2× y responde unas 2.5× más rápido.

Tu elección aparece junto al nombre del modelo, debajo del cuadro de entrada; por ejemplo, `claude-opus-5-5 200K Medium` o `claude-opus-5-5 1M High Fast`. Se recuerda para cada modelo.

### Enviar un mensaje

Escribe un mensaje y envíalo. Si todo está bien configurado, la respuesta llega a través de tu propia clave.

<BzLiaotian moxing="claude-opus-5-5" wen="¡Hola! ¿Qué modelo eres?" da="¡Hola! Soy Claude Opus 5.5 y estoy funcionando en Breezell con tu propia clave API. ¿Qué vamos a construir hoy?" />

Ya has completado la configuración BYOK.

## Qué modelo Claude usar

| ID del modelo | Contexto | Precio entrada / salida (por 1M de tokens) | Intensidad predeterminada | Razonamiento desactivable | Fast | Ideal para |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | No | No | Los problemas más difíciles y las refactorizaciones largas |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | No | Sí (2×) | El trabajo diario con el agente: la opción por defecto |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | No | No | Equilibrio entre velocidad y coste |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | Sí | No | Preguntas rápidas y pequeñas ediciones |

Los precios son los de lista del catálogo integrado de Breezell para la API de Anthropic. Cada relay fija sus propios precios. Los prompts de `claude-haiku-5-5` de más de 100K tokens se facturan a 5× la tarifa.

## Solución de problemas

| Lo que ves | Qué significa | Qué hacer |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | Tu plan no incluye proveedores personalizados. | Cambia al plan Custom API o superior. |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | La ranura aún no tiene URL base. | Rellena <BzWenben jian="settings.baseUrl" />. |
| <BzWenben jian="box.models.fetchNeedsKey" /> | El campo de la clave está vacío. | Pega la clave. |
| <BzWenben jian="box.models.fetchAuthFailed" /> | El proveedor devolvió 401 / 403. | Vuelve a copiar la clave, comprueba que corresponde a este proveedor y revisa su plan y su lista blanca de IP. |
| <BzWenben jian="box.models.fetchFailed" /> … | El relay no tiene lista de modelos o la dirección es incorrecta. | Revisa <BzWenben jian="settings.requestUrl" /> o añade los ID de los modelos a mano. |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | Todos los modelos que devolvió el relay ya están en la ranura. | No tienes que hacer nada. |
| <BzWenben jian="box.models.health.errTimeout" /> | La solicitud agotó el tiempo de espera. | Revisa la dirección, tu proxy y la ruta de red. |
| <BzWenben jian="box.models.health.errConnect" /> | No se pudo llegar al host. | Revisa la dirección, el DNS y el proxy. |
| <BzWenben jian="box.models.health.errHttp" /> | El relay respondió con un error HTTP. | Casi siempre se debe a una ruta o un protocolo incorrectos: compara <BzWenben jian="settings.requestUrl" /> y el protocolo con la documentación del proveedor. |
| La URL de la solicitud contiene `/v1/v1` o le falta `/v1` | La URL base y el preajuste no encajan. | Corrige la URL base hasta que <BzWenben jian="settings.requestUrl" /> sea correcta. |
| La respuesta aparece de golpe tras una larga espera | El relay almacena el stream en búfer. | Ejecuta <BzWenben jian="box.models.health.checkStreaming" />. Si el resultado es <BzWenben jian="box.models.health.stream.heldThinking" />, un esfuerzo de razonamiento menor acorta la espera. |
| Fallan las solicitudes de más de 200K | El relay necesita la cabecera beta de 1M o no tiene contexto de 1M. | Pulsa **Claude 1M** en <BzWenben jian="settings.customHeaders" /> o deja el modelo en `200K`. |
| La lista de modelos sigue vacía después de obtenerla | La lista no se cargó. | Reinicia Breezell y vuelve a obtenerla, o añade los ID a mano. |

## Preguntas frecuentes

**¿Puedo usar la clave oficial de Anthropic y un relay a la vez?**
Sí. La ruta A y cada ranura compatible son independientes. El selector de modelos del chat los muestra uno junto al otro y puedes cambiar de uno a otro en cada conversación.

**¿Puedo guardar varios relays y claves?**
Sí. Usa una ranura por relay (hasta 50). Para rotar varias claves en el mismo relay, usa el <BzWenben jian="settings.accountPool" /> de esa ranura. La sección <BzWenben jian="box.vault.group" /> de la barra lateral de Box guarda las direcciones y claves de tus relays en el llavero del sistema y puede rellenar una ranura por ti.

**¿Quién me cobra?**
El proveedor cuya clave usas. Breezell no descuenta estas solicitudes de tu cuota de Breezell. La vista <BzWenben jian="box.usage.tab.tokens" /> muestra cuántos tokens has usado; define precios en las ranuras compatibles para ver también el coste.
