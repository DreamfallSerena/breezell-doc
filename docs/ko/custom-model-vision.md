---
title: 사용자 지정 모델 비전
description: Breezell에서 다른 구성된 모델을 사용하여 사용자 지정 모델에 이미지 인식 기능을 추가하는 방법을 안내합니다.
---

# 사용자 지정 모델 비전

> 멀티모달 입력을 지원하지 않는 사용자 지정 모델에 별도의 비전 모델을 통해 이미지 인식 기능을 추가합니다.

## 시작하기 전에

사용자 지정 모델이 멀티모달 입력을 지원하지 않는 경우, Breezell 1.2.8에서는 다른 모델을 통해 이미지 인식 기능을 사용할 수 있습니다. 먼저 비전 기능을 지원하는 모델을 구성한 다음, 이미지를 이해해야 하는 사용자 지정 모델에 지정하세요.

## 모델 설정 열기

1. 편집기 오른쪽 상단 도구 모음에서 설정 톱니바퀴 아이콘을 클릭합니다.
2. 메뉴에서 **Breezell Settings**를 선택합니다.
3. 설정 사이드바에서 **Models**를 선택합니다.

사용자 지정 모델을 아직 구성하지 않았다면 먼저 [사용자 지정 API 설정](/ko/custom-api)을 완료하세요.

## Vision Proxy 설정 열기

1. 모델 목록에서 이미지 인식 기능이 필요한 사용자 지정 모델을 찾습니다.
2. 해당 모델의 작은 눈 아이콘을 클릭하여 **Vision Proxy**를 엽니다.

![모델 목록에서 강조 표시된 Vision Proxy 버튼](/custom-model-vision/open-vision-proxy-settings.png)

## 이미지 인식 모델 선택

1. **Vision Proxy** 대화 상자에서 **Image recognition model** 선택기를 엽니다.
2. 구성되어 있고 이미지 인식을 지원하는 모델을 선택합니다.
3. **Save**를 클릭하여 선택 내용을 저장합니다.

![이미지 인식 모델 선택과 Save가 강조 표시된 Vision Proxy 대화 상자](/custom-model-vision/select-vision-recognition-model.png)

## 대화 시작

대화에서 해당 사용자 지정 모델을 선택하고 이미지를 첨부한 뒤 메시지를 보냅니다. Breezell은 선택한 이미지 인식 모델을 사용하여 사용자 지정 모델이 이미지를 처리하도록 돕습니다.

![선택한 이미지 인식 모델을 통해 사용자 지정 모델이 첨부 이미지를 인식하는 대화 화면](/custom-model-vision/custom-model-vision-conversation.png)
