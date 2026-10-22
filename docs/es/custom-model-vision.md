---
title: Visión para modelos personalizados
description: Permite que un modelo de solo texto trabaje con imágenes mediante un proxy visual, un segundo modelo que lee la imagen por él.
---

# Visión para modelos personalizados

Algunos modelos solo pueden leer texto. Con un **proxy visual**, ese modelo puede trabajar igualmente con capturas de pantalla y otras imágenes: un segundo modelo capaz de ver lee primero la imagen, y Breezell entrega su descripción escrita al modelo de solo texto.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que verás a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página. El menú de modelos del cuadro de diálogo Proxy visual es interactivo.
:::

## Cuándo lo necesitas

Breezell sabe qué modelos no aceptan imágenes. En Box ▸ <BzWenben jian="tab.models" />, el primer icono de capacidad (<BzWenben jian="box.models.filter.vision" />) de esos modelos aparece en gris, y solo esos modelos tienen la opción <BzWenben jian="models.visionProxy" /> en su menú **⋯**.

Por ejemplo, en el proveedor DeepSeek, `deepseek-v4-pro`, `deepseek-chat` y `deepseek-reasoner` son de solo texto, mientras que los modelos Flash leen imágenes por sí mismos. Todos los modelos Claude leen imágenes de forma nativa, y los modelos de Breezell nunca necesitan un proxy.

Lo que ocurre cuando adjuntas una imagen a un modelo de solo texto sin proxy depende del proveedor:

| Proveedor | Sin proxy visual |
| --- | --- |
| Proveedores de API oficiales (DeepSeek, OpenAI, …) | El mensaje no se envía. Aparece el aviso <BzWenben jian="chat.visionProxyHint.requiredTitle" /> encima del cuadro de entrada. |
| Ranuras compatibles con OpenAI | La imagen se envía al relay tal cual, porque muchos relays incorporan su propio modelo de visión. Configura un proxy solo si tu relay no puede procesar imágenes. |

## Cómo funciona

1. Envías un mensaje con una imagen al modelo de solo texto.
2. Breezell envía primero la imagen al modelo de reconocimiento de imágenes que elegiste. Le pide que transcriba con exactitud todo el texto visible y que describa el diseño, los controles, los estados, los colores y los errores relevantes para tu solicitud, sin inventar detalles que no pueda ver.
3. La descripción sustituye a la imagen en la solicitud a tu modelo de solo texto, que responde como de costumbre.

Mientras Breezell está en ejecución, cada imagen se describe una sola vez por modelo de reconocimiento y la descripción se reutiliza, de modo que la misma captura no se analiza dos veces. La solicitud de reconocimiento la factura el proveedor del modelo de reconocimiento.

## Configurar un proxy visual

Este ejemplo asigna a `deepseek-v4-pro` (solo texto) un proxy: `claude-sonnet-5-5`.

### 1. Abrir el menú del modelo

1. Abre Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />, elige <BzWenben jian="box.models.group.api" /> y selecciona **DeepSeek**.
2. Activa `deepseek-v4-pro` si aún no está habilitado. Su icono <BzWenben jian="box.models.filter.vision" /> aparece en gris.
3. Haz clic en **⋯** al final de su fila y elige <BzWenben jian="models.visionProxy" />.

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. Elegir el modelo de reconocimiento de imágenes

El cuadro de diálogo <BzWenben jian="models.visionProxy" /> muestra bajo su título el modelo que estás configurando.

1. Abre <BzWenben jian="models.visionProxyModel" />. La lista se parece al selector de modelos del chat, con búsqueda y grupos por proveedor, pero solo ofrece modelos que pueden leer imágenes.
2. Elige un modelo; por ejemplo, `claude-sonnet-5-5`.
3. Haz clic en <BzWenben jian="common.save" />.

Prueba el menú aquí:

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

Sirve cualquier modelo que lea imágenes. `claude-sonnet-5-5` ofrece descripciones detalladas de capturas de pantalla con mucho contenido; `claude-haiku-5-5` es más rápido y económico para imágenes sencillas.

### 3. Enviar una imagen

Selecciona `deepseek-v4-pro` debajo del cuadro de entrada del chat, pega o arrastra una imagen en el cuadro de entrada y envía tu mensaje.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

Ahora el modelo de solo texto responde sobre la imagen:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="¿Por qué aparece este error al iniciar la aplicación?" da="La captura muestra: Error: Cannot find module './config.json' (en loadConfig, src/config.ts, línea 4). La aplicación busca config.json junto al archivo compilado, pero la compilación no lo copia. Añade config.json a los archivos que copia la compilación o cárgalo con una ruta relativa a la raíz del proyecto." />

## Cuando Breezell pide un proxy visual

Si adjuntas una imagen para un modelo de solo texto de un proveedor oficial y el modelo aún no tiene proxy, Breezell no envía la imagen y muestra este aviso encima del cuadro de entrada:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

Haz clic en <BzWenben jian="chat.visionProxyHint.configureAction" /> para abrir Box y configurar un proxy como se describe arriba; después, vuelve a enviar el mensaje.

También puedes ver:

| Aviso o error | Qué significa | Qué hacer |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | El modelo elegido como proxy tampoco puede leer imágenes. | Vuelve a abrir el cuadro de diálogo y elige un modelo que lea imágenes. |
| `The configured vision proxy (…) could not analyze the image.` | La solicitud de reconocimiento falló; por ejemplo, porque el proveedor del proxy no está configurado o rechazó la solicitud. | Revisa el proveedor del modelo proxy o elige otro proxy. |

Si sigues con la conversación sin configurar un proxy, la imagen anterior se omite en los mensajes posteriores para que el chat pueda continuar.

## Cambiar o quitar el proxy

Vuelve a abrir <BzWenben jian="models.visionProxy" /> desde el menú **⋯** del modelo. Elige otro modelo, o elige <BzWenben jian="models.visionProxyNotConfigured" /> al principio de la lista para quitar el proxy, y haz clic en <BzWenben jian="common.save" />. Cuando hay un proxy configurado, el botón **⋯** de esa fila muestra un pequeño punto.

## Resumen

1. Box ▸ <BzWenben jian="tab.models" />: busca el modelo de solo texto (icono <BzWenben jian="box.models.filter.vision" /> en gris).
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />.
3. Elige un modelo que lea imágenes en <BzWenben jian="models.visionProxyModel" /> y guarda.
4. Envía imágenes al modelo de solo texto como de costumbre.
