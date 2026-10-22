---
title: 사용자 지정 모델 비전
description: 이미지를 대신 읽어 주는 두 번째 모델인 비전 프록시를 통해 텍스트 전용 모델도 이미지를 다룰 수 있게 합니다.
---

# 사용자 지정 모델 비전

일부 모델은 텍스트만 읽을 수 있습니다. **비전 프록시**를 사용하면 이런 모델도 스크린샷 같은 이미지를 다룰 수 있습니다. 이미지를 볼 수 있는 두 번째 모델이 먼저 이미지를 읽고, Breezell이 그 모델이 작성한 설명을 텍스트 전용 모델에 전달합니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 비전 프록시 대화 상자의 모델 메뉴는 직접 조작해 볼 수 있습니다.
:::

## 필요한 경우

Breezell은 어떤 모델이 이미지를 받을 수 없는지 알고 있습니다. Box ▸ <BzWenben jian="tab.models" />에서 이런 모델은 첫 번째 기능 아이콘(<BzWenben jian="box.models.filter.vision" />)이 회색으로 표시되며, 이런 모델의 **⋯** 메뉴에만 <BzWenben jian="models.visionProxy" /> 항목이 있습니다.

예를 들어 DeepSeek 공급자에서 `deepseek-v4-pro`, `deepseek-chat`, `deepseek-reasoner`는 텍스트 전용이지만, Flash 모델은 이미지를 직접 읽습니다. 모든 Claude 모델은 기본적으로 이미지를 읽을 수 있으며, Breezell 모델에는 프록시가 전혀 필요하지 않습니다.

프록시 없이 텍스트 전용 모델에 이미지를 첨부했을 때의 동작은 공급자에 따라 다릅니다.

| 공급자 | 비전 프록시가 없을 때 |
| --- | --- |
| 공식 API 공급자(DeepSeek, OpenAI, …) | 메시지가 전송되지 않습니다. 입력 상자 위에 <BzWenben jian="chat.visionProxyHint.requiredTitle" /> 알림이 표시됩니다. |
| OpenAI 호환 슬롯 | 많은 중계 서버가 자체 비전 모델을 연결해 두므로 이미지가 그대로 중계 서버로 전송됩니다. 중계 서버가 이미지를 처리하지 못할 때만 프록시를 설정하세요. |

## 작동 방식

1. 텍스트 전용 모델에 이미지가 포함된 메시지를 보냅니다.
2. Breezell은 먼저 선택해 둔 이미지 인식 모델에 이미지를 보냅니다. 이때 보이는 텍스트를 모두 정확하게 옮겨 적고, 요청과 관련된 레이아웃, 컨트롤, 상태, 색상, 오류를 설명하되, 보이지 않는 세부 사항은 지어내지 않도록 요청합니다.
3. 텍스트 전용 모델로 가는 요청에는 이미지 대신 이 설명이 들어가며, 텍스트 전용 모델은 평소처럼 답변합니다.

Breezell이 실행되는 동안 각 이미지는 인식 모델마다 한 번만 설명되고 그 설명이 재사용되므로, 같은 스크린샷을 두 번 분석하지 않습니다. 인식 요청의 요금은 인식 모델의 공급자가 청구합니다.

## 비전 프록시 설정하기

이 예에서는 텍스트 전용 모델인 `deepseek-v4-pro`에 `claude-sonnet-5-5`를 프록시로 지정합니다.

### 1. 모델 메뉴 열기

1. Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />을 열고, <BzWenben jian="box.models.group.api" />를 선택한 다음 **DeepSeek**을 선택합니다.
2. `deepseek-v4-pro`가 아직 활성화되어 있지 않다면 켭니다. 이 모델의 <BzWenben jian="box.models.filter.vision" /> 아이콘은 회색입니다.
3. 해당 행 끝의 **⋯**를 클릭하고 <BzWenben jian="models.visionProxy" />를 선택합니다.

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. 이미지 인식 모델 선택

<BzWenben jian="models.visionProxy" /> 대화 상자의 제목 아래에는 지금 설정 중인 모델이 표시됩니다.

1. <BzWenben jian="models.visionProxyModel" /> 메뉴를 엽니다. 목록은 채팅 모델 선택기처럼 검색과 공급자별 그룹을 갖추고 있지만, 이미지를 읽을 수 있는 모델만 표시합니다.
2. `claude-sonnet-5-5` 같은 모델을 선택합니다.
3. <BzWenben jian="common.save" />을 클릭합니다.

아래 메뉴를 직접 사용해 보세요.

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

이미지를 읽을 수 있는 모델이라면 무엇이든 사용할 수 있습니다. `claude-sonnet-5-5`는 복잡한 스크린샷도 자세히 설명하고, `claude-haiku-5-5`는 단순한 이미지에 더 빠르고 저렴합니다.

### 3. 이미지 보내기

채팅 입력 상자 아래에서 `deepseek-v4-pro`를 선택하고, 이미지를 입력 상자에 붙여넣거나 끌어다 놓은 다음 메시지를 보냅니다.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

이제 텍스트 전용 모델이 이미지에 대해 답변합니다.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="앱을 시작할 때 이 오류가 왜 나타나나요?" da="스크린샷에는 Error: Cannot find module './config.json' 오류가 표시되어 있습니다(loadConfig, src/config.ts 4행). 앱은 컴파일된 파일과 같은 위치에서 config.json을 찾지만, 빌드 과정에서 이 파일이 복사되지 않습니다. 빌드에서 복사하는 파일에 config.json을 추가하거나, 프로젝트 루트를 기준으로 한 상대 경로로 불러오세요." />

## Breezell이 비전 프록시를 요청하는 경우

공식 공급자의 텍스트 전용 모델에 이미지를 첨부했는데 해당 모델에 아직 프록시가 없으면, Breezell은 이미지를 보내지 않고 입력 상자 위에 다음 알림을 표시합니다.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

<BzWenben jian="chat.visionProxyHint.configureAction" />을 클릭해 Box를 열고 위에서 설명한 대로 프록시를 설정한 다음, 다시 보냅니다.

다음과 같은 알림이나 오류가 표시될 수도 있습니다.

| 알림 또는 오류 | 의미 | 해결 방법 |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | 프록시로 선택한 모델도 이미지를 읽을 수 없습니다. | 대화 상자를 다시 열고 이미지를 읽을 수 있는 모델을 선택합니다. |
| `The configured vision proxy (…) could not analyze the image.` | 인식 요청이 실패했습니다. 예를 들어 프록시 모델의 공급자가 구성되지 않았거나 공급자가 요청을 거부한 경우입니다. | 프록시 모델의 공급자를 확인하거나 다른 프록시를 선택합니다. |

프록시를 설정하지 않고 대화를 이어 가면, 대화가 계속될 수 있도록 이후 메시지에서는 앞서 첨부한 이미지가 제외됩니다.

## 프록시 변경 또는 제거

모델의 **⋯** 메뉴에서 <BzWenben jian="models.visionProxy" />를 다시 엽니다. 다른 모델을 선택하거나, 프록시를 제거하려면 목록 맨 위의 <BzWenben jian="models.visionProxyNotConfigured" />을 선택한 다음 <BzWenben jian="common.save" />을 클릭합니다. 프록시가 설정되어 있으면 해당 행의 **⋯** 버튼에 작은 점이 표시됩니다.

## 요약

1. Box ▸ <BzWenben jian="tab.models" />: 텍스트 전용 모델(<BzWenben jian="box.models.filter.vision" /> 아이콘이 회색)을 찾습니다.
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />.
3. <BzWenben jian="models.visionProxyModel" />에서 이미지를 읽을 수 있는 모델을 선택하고 저장합니다.
4. 평소처럼 텍스트 전용 모델에 이미지를 보냅니다.
