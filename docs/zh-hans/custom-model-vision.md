---
title: 自定义模型视觉
description: 在 Breezell 中让自定义模型通过其他已配置模型获得图像识别能力。
---

# 自定义模型视觉

> 让不支持多模态输入的自定义模型通过独立的视觉模型获得图像识别能力。

## 开始前

如果您的自定义模型不支持多模态输入，Breezell 1.2.8 可以让它通过其他模型获得图像识别能力。请先配置支持视觉的模型，再将它指定给需要理解图像的自定义模型。

## 打开模型设置

1. 在编辑器右上角工具栏中，点击设置齿轮图标。
2. 在菜单中选择 **Breezell Settings**。
3. 在设置侧边栏中选择 **Models**。

如果您尚未配置自定义模型，请先完成[自定义 API 设置](/zh-hans/custom-api)。

## 打开 Vision Proxy 设置

1. 在模型列表中找到需要图像识别能力的自定义模型。
2. 点击该模型上的小眼睛图标，打开 **Vision Proxy**。

![模型列表中突出显示的 Vision Proxy 按钮](/custom-model-vision/open-vision-proxy-settings.png)

## 选择图像识别模型

1. 在 **Vision Proxy** 对话框中，打开 **Image recognition model** 选择器。
2. 选择一个已配置且支持图像识别的模型。
3. 点击 **Save** 保存选择。

![Vision Proxy 对话框中突出显示的图像识别模型选择与保存按钮](/custom-model-vision/select-vision-recognition-model.png)

## 开始对话

在对话中选择该自定义模型，附加图片后发送消息。Breezell 会使用您选择的图像识别模型，协助该自定义模型处理图片内容。

![自定义模型通过所选图像识别模型识别所附图片的对话界面](/custom-model-vision/custom-model-vision-conversation.png)
