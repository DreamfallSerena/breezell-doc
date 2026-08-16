---
title: Visión para modelos personalizados
description: Usa otro modelo configurado para añadir reconocimiento de imágenes a un modelo personalizado en Breezell.
---

# Visión para modelos personalizados

> Añade reconocimiento de imágenes a un modelo de texto personalizado mediante un modelo de visión independiente.

## Antes de comenzar

Si tu modelo personalizado no admite entradas multimodales, Breezell 1.2.8 permite que obtenga reconocimiento de imágenes mediante otro modelo. Primero configura el modelo compatible con visión y después asígnalo al modelo personalizado que necesita interpretar imágenes.

## Abre la configuración de modelos

1. En la barra de herramientas de la esquina superior derecha del editor, haz clic en el icono de engranaje de configuración.
2. En el menú, selecciona **Breezell Settings**.
3. En la barra lateral de configuración, selecciona **Models**.

Si todavía no has configurado el modelo personalizado, completa primero la [configuración de la API personalizada](/es/custom-api).

## Abre la configuración de Vision Proxy

1. Busca en la lista de modelos el modelo personalizado que necesita reconocimiento de imágenes.
2. Haz clic en el pequeño icono de ojo de ese modelo para abrir **Vision Proxy**.

![Lista de modelos con el botón Vision Proxy resaltado](/custom-model-vision/open-vision-proxy-settings.png)

## Elige un modelo de reconocimiento de imágenes

1. En el cuadro de diálogo **Vision Proxy**, abre el selector **Image recognition model**.
2. Selecciona un modelo configurado que admita reconocimiento de imágenes.
3. Haz clic en **Save** para guardar la selección.

![Cuadro de diálogo Vision Proxy con la selección de modelo de reconocimiento de imágenes y Save resaltados](/custom-model-vision/select-vision-recognition-model.png)

## Inicia una conversación

Selecciona el modelo personalizado en una conversación, adjunta una imagen y envía el mensaje. Breezell usa el modelo de reconocimiento de imágenes seleccionado para ayudar al modelo personalizado a procesar la imagen.

![Conversación en la que el modelo personalizado reconoce una imagen adjunta mediante el modelo de reconocimiento de imágenes seleccionado](/custom-model-vision/custom-model-vision-conversation.png)
