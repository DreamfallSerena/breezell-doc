---
title: Custom Model Vision
description: Let a custom model use another configured model for image recognition in Breezell.
---

# Custom Model Vision

> Give a custom text model image-recognition support through a separate vision-capable model.

## Before you begin

If your custom model does not support multimodal input, Breezell 1.2.8 lets it obtain image-recognition support through another model. Configure the vision-capable model first, then assign it to the custom model that needs image understanding.

## Open the Models settings

1. In the editor's top-right toolbar, click the settings gear.
2. In the menu, select **Breezell Settings**.
3. In the settings sidebar, select **Models**.

If you have not configured the custom model yet, complete the [Custom API setup](/custom-api) first.

## Open Vision Proxy settings

1. Find the custom model that needs image recognition in the model list.
2. Click the small eye icon on that model to open **Vision Proxy**.

![Model list with the Vision Proxy button highlighted](/custom-model-vision/open-vision-proxy-settings.png)

## Choose an image-recognition model

1. In the **Vision Proxy** dialog, open the **Image recognition model** selector.
2. Select a configured model that supports image recognition.
3. Click **Save** to apply the selection.

![Vision Proxy dialog with image-recognition model selection and Save highlighted](/custom-model-vision/select-vision-recognition-model.png)

## Start a conversation

Select the custom model in a conversation, attach an image, and send your message. Breezell uses the selected image-recognition model to help the custom model handle the image.

![Conversation where the custom model recognizes the attached image through the selected image-recognition model](/custom-model-vision/custom-model-vision-conversation.png)
