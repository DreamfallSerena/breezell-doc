---
title: 自訂模型視覺
description: 在 Breezell 中讓自訂模型透過其他已設定模型取得圖像辨識能力。
---

# 自訂模型視覺

> 讓不支援多模態輸入的自訂模型透過獨立的視覺模型取得圖像辨識能力。

## 開始前

如果您的自訂模型不支援多模態輸入，Breezell 1.2.8 可以讓它透過其他模型取得圖像辨識能力。請先設定支援視覺的模型，再將它指定給需要理解圖像的自訂模型。

## 開啟模型設定

1. 在編輯器右上角工具列中，點選設定齒輪圖示。
2. 在選單中選擇 **Breezell Settings**。
3. 在設定側邊欄中選擇 **Models**。

如果您尚未設定自訂模型，請先完成[自訂 API 設定](/zh-hant/custom-api)。

## 開啟 Vision Proxy 設定

1. 在模型清單中找到需要圖像辨識能力的自訂模型。
2. 點選該模型上的小眼睛圖示，開啟 **Vision Proxy**。

![模型清單中醒目顯示的 Vision Proxy 按鈕](/custom-model-vision/open-vision-proxy-settings.png)

## 選擇圖像辨識模型

1. 在 **Vision Proxy** 對話方塊中，開啟 **Image recognition model** 選擇器。
2. 選擇一個已設定且支援圖像辨識的模型。
3. 點選 **Save** 儲存選擇。

![Vision Proxy 對話方塊中醒目顯示的圖像辨識模型選擇與儲存按鈕](/custom-model-vision/select-vision-recognition-model.png)

## 開始對話

在對話中選擇該自訂模型，附加圖片後傳送訊息。Breezell 會使用您選擇的圖像辨識模型，協助該自訂模型處理圖片內容。

![自訂模型透過所選圖像辨識模型辨識所附圖片的對話介面](/custom-model-vision/custom-model-vision-conversation.png)
