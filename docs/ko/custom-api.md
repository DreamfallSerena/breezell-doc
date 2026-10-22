---
title: 사용자 지정 API (BYOK)
description: 본인의 API 키를 Breezell에 연결하고, 공식 Anthropic API 또는 호환 중계 서버를 통해 Claude 모델을 사용합니다.
---

# 사용자 지정 API (BYOK)

BYOK는 **Bring Your Own Key**, 즉 본인의 키를 직접 가져와 쓴다는 뜻입니다. Breezell 공식 할당량을 쓰는 대신 Breezell이 본인의 API 키로 모델 공급자에 요청을 보내며, 요금은 해당 공급자가 직접 청구합니다.

이 가이드에서는 Claude 모델 `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`, `claude-fable-5-1`을 예로 들어 전체 설정 과정을 안내합니다.

::: tip 이 페이지의 화면 안내
이 페이지에는 스크린샷이 없습니다. 아래의 Breezell 화면은 모두 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따르고, 색상은 이 사이트의 라이트 / 다크 전환(Breezell Light / Breezell Dark)을 따릅니다.

주황색 테두리와 번호 배지는 클릭할 위치를 알려 주는 표시이며, Breezell 화면의 일부가 아닙니다. 일부 화면은 직접 조작해 볼 수 있습니다. 프로토콜을 바꾸고, 기본 URL을 편집하고, **Claude 1M**을 누르고, 추론을 켜고 끄고, 강도 슬라이더를 끌어 보세요.
:::

## 시작하기 전에

다음 세 가지가 필요합니다.

1. **Custom API 이상 플랜의 Breezell 계정.** 본인 키로 쓰는 서드파티 모델은 유료 기능입니다. 해당 플랜이 없으면 공급자 페이지에 폼 대신 <BzWenben jian="box.models.gate.planRequired" /> 문구가 표시되고, 로그인하지 않은 상태라면 <BzWenben jian="box.models.gate.signIn" /> 문구가 표시됩니다.
2. **키.** Anthropic Console에서 발급한 Anthropic API 키(`sk-ant-`로 시작) 또는 중계 서버, 게이트웨이, 자체 호스팅 프록시의 기본 URL과 키 중 하나가 필요합니다.
3. **중계 서버가 사용하는 프로토콜.** 공급자에게 Anthropic Messages API(`/v1/messages`)와 OpenAI Chat Completions API(`/v1/chat/completions`) 중 어느 쪽을 제공하는지, 혹은 둘 다 제공하는지 확인하세요.

## 연결 방법 선택

| 방법 | 이럴 때 사용 | Breezell에서의 위치 | 프로토콜 |
| --- | --- | --- | --- |
| **A. Anthropic API** | Anthropic Console에서 발급한 키가 있을 때 | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages(내장) |
| **B. 호환 슬롯 + Anthropic 프로토콜** | 중계 서버가 `/v1/messages`를 제공할 때 | <BzWenben jian="box.models.group.compat" /> › 슬롯 | Anthropic |
| **C. 호환 슬롯 + OpenAI 프로토콜** | 중계 서버가 `/v1/chat/completions`만 제공할 때 | <BzWenben jian="box.models.group.compat" /> › 슬롯 | OpenAI |

Claude에는 **A** 또는 **B**를 권장합니다. Breezell도 슬롯 폼에서 다음과 같이 권장합니다. <BzWenben jian="settings.apiFormat.anthropicTip" />

## 1단계: Box(Breezell 설정) 열기

Breezell 설정은 **Box** 페이지에 있습니다. Box를 여는 동안에는 작업 막대, 사이드바, 편집기 영역, 패널 자리를 Box가 차지하며, 코드로 돌아가려면 **Agent**를 클릭합니다.

Box를 여는 방법은 세 가지입니다.

- 제목 표시줄 왼쪽의 전환 버튼에서 **Box**를 클릭합니다.
- 오른쪽 위의 톱니바퀴 아이콘을 클릭하고 <BzWenben jian="box.title" />을 선택합니다.
- 명령 팔레트를 열고 `Breezell: Open Settings`를 실행합니다.

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## 2단계: 모델 페이지로 이동

Box 사이드바에서 <BzWenben jian="box.title" /> 그룹을 열고 <BzWenben jian="tab.models" />을 클릭합니다. 보통 Box를 열면 처음 표시되는 페이지입니다.

<BzHezi gaoliang="moxing" />

페이지 상단에는 <BzWenben jian="box.usage.tab.models" />, <BzWenben jian="box.usage.tab.cache" />, <BzWenben jian="box.usage.tab.tokens" />, <BzWenben jian="box.usage.tab.breezell" />의 네 가지 보기가 있습니다. 첫 번째 보기를 그대로 사용합니다.

그 아래의 공급자 분류는 공급자를 네 그룹으로 나눕니다.

| 분류 | 포함 항목 |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Breezell 할당량으로 쓰는 공식 Breezell 모델입니다. 키가 필요 없습니다. |
| <BzWenben jian="box.models.group.signin" /> | Codex, Copilot처럼 계정으로 로그인해서 쓰는 공급자입니다. |
| <BzWenben jian="box.models.group.api" /> | Anthropic을 비롯해 본인 키로 쓰는 각 업체의 공식 API입니다. |
| <BzWenben jian="box.models.group.compat" /> | 중계 서버, 게이트웨이, 자체 호스팅 프록시용 사용자 지정 슬롯으로, 최대 50개까지 둘 수 있습니다. |

## 방법 A: Anthropic API

### A1. Anthropic 선택

1. <BzWenben jian="box.models.group.api" />를 클릭합니다.
2. <BzWenben jian="box.models.searchProvidersPlaceholder" /> 입력란에 `Anthropic`을 입력합니다.
3. **Anthropic** 타일을 클릭합니다. 선택한 공급자가 아래에 <BzWenben jian="box.models.notConfigured" /> 상태로 표시됩니다.
4. <BzWenben jian="box.models.editConfig" /> 버튼을 클릭해 구성을 엽니다.

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Anthropic 키 붙여넣기

구성 항목은 API 키 입력란 하나뿐입니다.

1. **Get your API Key** 카드를 클릭합니다. 브라우저에서 Anthropic Console(`console.anthropic.com/settings/keys`)이 열립니다.
2. 키를 만들어 복사합니다. 키는 `sk-ant-api03-...` 형태입니다.
3. 입력란에 붙여넣습니다. 눈 모양 아이콘으로 키를 표시하거나 숨길 수 있습니다.

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell은 키를 사용하기 전에 정리합니다. 공백, 앞뒤를 감싼 따옴표, 맨 앞의 `Bearer `, 그리고 복사할 때 자주 딸려 오는 보이지 않는 문자를 제거합니다. Anthropic 공급자에는 기본 URL 입력란이 없으며, Breezell은 항상 `https://api.anthropic.com`을 사용합니다.

### A3. 사용할 Claude 모델 켜기

키가 저장되면 바로 상태가 <BzWenben jian="box.models.configured" />으로 바뀌고, 목록에 Breezell 내장 Claude 모델이 최신 모델부터 표시됩니다.

처음에는 앞의 다섯 개인 `claude-fable-5-1`, `claude-fable-5`, `claude-opus-5`, `claude-opus-5-5`, `claude-opus-4-8`만 활성화되어 있습니다. `claude-sonnet-5-5`, `claude-haiku-5-5` 같은 다른 모델을 채팅 모델 선택기에 추가하려면 행 끝의 스위치를 켭니다.

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

표의 각 열은 다음과 같습니다.

| 열 | 의미 |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | API로 전송되는 모델 ID입니다. 초록색 점은 모델이 활성화되어 있다는 뜻입니다. |
| <BzWenben jian="box.models.context" /> | 모델의 전체 컨텍스트 윈도우입니다. Claude 5 모델은 모두 1M입니다. |
| <BzWenben jian="box.models.capabilities" /> | <BzWenben jian="box.models.filter.vision" />, <BzWenben jian="box.models.filter.tools" />, <BzWenben jian="box.models.filter.reasoning" />, <BzWenben jian="box.models.filter.web" /> 아이콘 네 개입니다. 아이콘이 켜져 있으면 해당 기능을 지원하는 모델입니다. |
| <BzWenben jian="models.pricing" /> | <BzWenben jian="box.models.price" /> 입력 / 출력 가격(USD)으로, Breezell 내장 카탈로그의 값입니다. 실제 요금은 Anthropic 청구서를 기준으로 합니다. |
| <BzWenben jian="box.mcp.colEnabled" /> | 채팅 모델 선택기에서 모델을 표시하거나 숨깁니다. |

표의 폭이 좁아지면 Breezell은 <BzWenben jian="box.models.context" /> 열을 먼저 숨기고, 이어서 <BzWenben jian="box.models.capabilities" /> 열을 숨깁니다. 숨겨진 값은 모델 이름의 툴팁으로 옮겨집니다.

Anthropic이 아직 목록에 없는 모델을 출시했다면 <BzWenben jian="box.models.fetch" /> 버튼을 클릭합니다. Breezell이 본인 키로 `https://api.anthropic.com/v1/models`를 조회하고 새 ID를 추가할 수 있게 해 줍니다. <BzWenben jian="box.models.addModelPlaceholder" /> 입력란에 ID를 직접 입력하고 <BzWenben jian="box.models.add" /> 버튼을 클릭해도 됩니다.

방법 A 설정이 끝났습니다. [채팅에서 Claude 사용하기](#use-claude-in-chat)로 넘어가세요.

## 방법 B: Anthropic 프로토콜을 사용하는 호환 슬롯

Anthropic Messages API로 Claude를 제공하는 중계 서버, API 게이트웨이, 자체 호스팅 프록시에는 이 방법을 사용합니다.

### B1. 호환 슬롯 열기

1. <BzWenben jian="box.models.group.compat" />을 클릭합니다.
2. 슬롯 타일을 클릭합니다. 슬롯 1은 항상 있으며, 새 슬롯은 이름 아래에 <BzWenben jian="settings.noEndpoint" /> 문구가 표시됩니다.
3. 여러 중계 서버를 따로 관리하려면 중계 서버마다 <BzWenben jian="box.models.addCompat" /> 버튼을 클릭합니다. Breezell에는 슬롯이 50개 있으며, 각 슬롯은 주소, 키, 프로토콜, 모델을 따로 갖는 독립된 채널입니다.
4. <BzWenben jian="box.models.editConfig" /> 버튼을 클릭합니다.

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. 슬롯 정보 입력

폼은 모든 슬롯에서 같습니다. 아래에서 직접 해 보세요. 기본 URL이나 프로토콜을 바꾸면 Breezell에서와 똑같이 <BzWenben jian="settings.requestUrl" /> 항목이 바뀝니다.

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />: 최대 30자의 이름입니다(예: `Claude Relay`). 모델 페이지에서는 타일 제목이 되고, 채팅 모델 선택기에서는 그룹 이름이 됩니다.
- <BzWenben jian="settings.baseUrl" />: 공급자가 알려 준 주소입니다. `http://` 또는 `https://`로 시작해야 합니다(예: `https://relay.example.com`, `http://127.0.0.1:8080`).

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />: 중계 서버의 키입니다. 가려진 상태로 표시되며, 눈 모양 아이콘을 누르면 보입니다.

**<BzWenben jian="settings.sectionProtocol" />**

**Anthropic**을 선택합니다. 세 버튼 중 무엇을 고르느냐에 따라 요청 형식이 정해집니다.

| 버튼 | 요청 형식 | Claude에 사용 여부 |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | 중계 서버에 `/v1/messages`가 없을 때만 사용합니다(방법 C). |
| Responses | OpenAI Responses | 사용하지 않습니다. GPT 모델용입니다. |
| **Anthropic** | Anthropic Messages | **사용합니다.** Breezell이 Claude에 권장하는 형식입니다. |

이어서 <BzWenben jian="settings.endpointPreset" />을 확인합니다. Anthropic 프로토콜에는 프리셋이 두 가지 있습니다.

| 프리셋 | 경로 | 용도 |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | 거의 모든 중계 서버에 해당합니다. 이 프리셋을 그대로 두세요. |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Volcengine Agent Plan 전용입니다. |

### B3. 요청 URL 확인

프리셋 아래의 <BzWenben jian="settings.requestUrl" /> 항목은 Breezell이 실제로 호출할 정확한 주소입니다. Breezell은 기본 URL과 프리셋 경로를 이어 붙이면서 중복된 부분을 제거하므로, 흔히 쓰는 두 가지 형태의 기본 URL을 모두 사용할 수 있습니다.

| 입력한 기본 URL | 프리셋 | 요청 URL |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

결과를 공급자 문서와 비교해 보세요. 공급자가 API를 일반적이지 않은 경로에 두고 있다면, 요청 URL이 공급자 문서에 적힌 주소와 정확히 일치하도록 기본 URL을 입력합니다.

### B4. 사용자 정의 헤더와 Claude 1M(선택 사항)

<BzWenben jian="settings.customHeaders" />는 이 슬롯의 모든 요청에 HTTP 헤더를 추가합니다. 공급자가 따로 요구하지 않는 한 `{}`로 그대로 둡니다.

값은 유효한 JSON이어야 합니다. 키와 값에는 큰따옴표를 쓰고, 주석과 후행 쉼표는 쓸 수 없습니다.

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

**Claude 1M** 버튼을 누르면 바로 이 헤더가 입력됩니다. 중계 서버가 200K보다 큰 프롬프트를 받으려면 베타 헤더가 필요한 경우에 사용하세요. 이 헤더를 넣어도 Breezell 채팅은 각 Claude 모델을 200K로 시작하며, 1M으로의 전환은 채팅 모델 선택기에서 모델별로 합니다([Context, Reasoning, Fast](#context-reasoning-and-fast) 참조).

헤더 아래에는 <BzWenben jian="settings.accountPool" /> 카드가 있습니다. 계정 풀은 한 슬롯에서 여러 키나 경로를 번갈아 사용하는 기능입니다. 처음 설정할 때는 필요하지 않습니다.

### B5. Claude 모델 추가

새 슬롯에는 모델이 없습니다. 다음 두 가지 방법 중 하나로 추가합니다.

**목록 가져오기.** <BzWenben jian="box.models.fetch" /> 버튼을 클릭합니다. Breezell이 중계 서버에 어떤 모델이 있는지 물어본 뒤 체크리스트로 보여 줍니다. Claude 모델을 체크하고 <BzWenben jian="box.models.addSelected" /> 버튼을 클릭합니다.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**ID 직접 입력.** <BzWenben jian="box.models.addModelPlaceholder" /> 입력란에 모델 ID를 입력하고 <BzWenben jian="box.models.add" /> 버튼을 클릭합니다. ID는 `claude-opus-5-5`처럼 중계 서버가 쓰는 이름 그대로 입력해야 합니다. 중계 서버가 모델 목록을 제공하지 않을 때는 이 방법을 사용합니다.

### B6. 슬롯 검사

<BzWenben jian="box.models.health.checkSlot" /> 버튼을 클릭하면 이 슬롯에 짧은 요청을 보냅니다. 실패한 모델에는 <BzWenben jian="box.models.health.ribbonFail" /> 배지가, 느린 모델에는 <BzWenben jian="box.models.health.ribbonTimeout" /> 배지가 붙고, 아예 연결할 수 없는 슬롯은 타일에 <BzWenben jian="box.models.health.ribbonDown" /> 표시가 붙습니다.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

더 자세히 확인하려면 슬롯 타일 위의 <BzWenben jian="box.models.checkConnectivity" /> 버튼을 클릭합니다. 여러 슬롯과 모델을 한 번에 검사할 수 있으며, <BzWenben jian="box.models.health.checkStreaming" /> 기능을 사용하면 중계 서버가 응답을 조금씩 스트리밍하는지(<BzWenben jian="box.models.health.stream.streaming" />), 추론을 붙잡아 두는지(<BzWenben jian="box.models.health.stream.heldThinking" />), 마지막에 한꺼번에 보내는지(<BzWenben jian="box.models.health.stream.buffered" />) 알 수 있습니다.

## 방법 C: OpenAI 프로토콜을 사용하는 호환 슬롯

일부 중계 서버는 Claude를 OpenAI Chat Completions 형식으로만 제공합니다. 방법 B와 같이 슬롯을 설정하되, 다음 사항만 다르게 합니다.

1. <BzWenben jian="settings.sectionProtocol" />에서 **OpenAI**를 선택합니다.
2. 프리셋은 <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" />(`/v1/chat/completions`)을 그대로 둡니다.
3. 중계 서버가 쓰는 ID로 모델을 추가합니다. 많은 중계 서버가 `claude-opus-5-5`를 쓰지만, `anthropic/claude-opus-5-5`처럼 앞에 업체 이름을 붙이는 곳도 있습니다.

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell은 이름으로 Claude 모델을 인식하므로 `anthropic/claude-opus-5-5`나 `claude-opus-5.5`에도 `claude-opus-5-5`와 같은 한도가 적용됩니다. 폼에 표시되는 안내도 참고하세요. <BzWenben jian="settings.apiFormat.openaiTip3" />. 또한 OpenAI 프로토콜에서는 Breezell이 Claude Opus에 **Fast**를 제공할 수 없습니다. 중계 서버가 `/v1/messages`도 제공한다면 슬롯을 **Anthropic**으로 전환하세요.

## Claude 모델 관리

### 행 메뉴

모든 모델 행에는 **⋯** 버튼이 있습니다. 호환 슬롯의 Claude 모델이라면 <BzWenben jian="box.models.pin" />, <BzWenben jian="box.models.advanced" />, <BzWenben jian="box.models.remove" /> 메뉴가 나옵니다. 행에 마우스를 올리면 모델 이름 옆에 복사 아이콘이 나타납니다.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 가격 설정

Breezell은 Anthropic 공식 API의 정가는 알고 있지만, 중계 서버의 가격은 알지 못합니다. 그래서 호환 슬롯에서는 가격 열에 <BzWenben jian="box.models.editPrice" />이 표시됩니다. 이를 클릭하고 중계 서버의 가격을 100만 토큰당 USD로 입력합니다. 입력, 출력, 캐시 적중, 그리고 Claude가 사용하는 5분·1시간 캐시 생성 가격입니다. 그러면 <BzWenben jian="box.usage.tab.tokens" /> 보기에 토큰과 함께 비용도 표시됩니다. 가격을 입력하지 않아도 Breezell은 토큰은 집계하지만, 금액은 계산하지 않습니다.

### 고급 설정

Breezell은 이 가이드에 나오는 모든 Claude 모델 ID를 인식하고 한도를 자동으로 채워 주므로, 대부분은 이 대화 상자를 열 필요가 없습니다. 중계 서버가 모델 이름을 바꿔 쓰는 경우(예: `my-claude`), Breezell이 모델을 인식하지 못한다고 표시하는 경우, 중계 서버가 더 작은 한도를 적용하는 경우에 엽니다.

먼저 <BzWenben jian="models.enableCustomSettings" />를 켭니다. 켜기 전에는 모든 카드가 회색이며 읽기 전용입니다.

<BzGaoji />

Breezell이 Claude 5 모델에 사용하는 값은 다음과 같습니다.

| 설정 | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| 컨텍스트 윈도우(짧은 단계 / 긴 단계) | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | 끔 | 끔 | 끔 | **켬** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | 끔 | **켬** | 끔 | 끔 |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

위 표는 Anthropic 프로토콜을 사용하는 호환 슬롯 기준입니다. Anthropic 공급자(방법 A)에서는 시스템 메시지가 `separated`이며, 두 방식 모두 Claude에서 동작합니다. **Fast**는 Anthropic 공급자와 Anthropic 프로토콜을 사용하는 슬롯에서만 제공됩니다.

토큰 수를 입력하는 필드에는 `k` 또는 `m` 접미사를 쓸 수 있습니다. `128k`는 `128000`이 되고, `1m`은 `1000000`이 됩니다. 중계 서버가 허용하는 것보다 큰 컨텍스트나 출력 크기를 설정하면 요청이 실패합니다.

**OpenAI** 프로토콜을 사용하는 슬롯에서는 <BzWenben jian="models.systemMessage" />에서 `system-role` 또는 `developer-role`을, <BzWenben jian="models.toolFormat" />에서 `OpenAI Style` 또는 `None (XML)`을 선택할 수 있습니다. 도구 호출이 제대로 동작하도록 Claude에는 `OpenAI Style`을 그대로 사용하세요.

## 채팅에서 Claude 사용하기 {#use-claude-in-chat}

### 모델 선택

채팅은 Box 옆에 계속 열려 있습니다. 편집기도 함께 보려면 제목 표시줄에서 **Agent**를 클릭합니다. 채팅 입력 상자 아래의 모델 이름을 클릭하면 모델 선택기가 열립니다.

- <BzWenben jian="box.models.group.api" /> 탭에는 Anthropic 공급자(방법 A)에서 활성화한 Claude 모델이 정가와 함께 표시됩니다.
- 선택기 하단에서 **OpenAI-Compatible**로 전환하면 호환 슬롯(방법 B, C)이 표시됩니다. 각 슬롯은 별명을 제목으로 하는 그룹으로 나타납니다.

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context, Reasoning, Fast {#context-reasoning-and-fast}

선택기에서 모델에 마우스를 올리면 옵션이 열립니다. 아래 패널은 직접 조작해 볼 수 있으니 한번 사용해 보세요.

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**: `200K`(<BzWenben jian="inputToolbar.contextDefault" /> 표시) 또는 `1M`입니다. Breezell은 모든 Claude 모델을 200K로 시작하며, `1M`을 선택해야만 더 큰 컨텍스트로 요청을 보냅니다.
- **Reasoning**: Claude Fable, Opus, Sonnet 5.x는 항상 추론하므로 스위치가 켜진 상태로 잠겨 있습니다. `claude-haiku-5-5`는 빠르게 답변받고 싶을 때 추론을 끌 수 있습니다.
- **Effort**: **Faster**부터 **Smarter**까지 `Low`, `Medium`, `High`, `Extra High`, `Max`가 있습니다. `Max`에서는 슬라이더가 보라색으로 바뀝니다.
- **Fast**: `claude-opus-5-5`(및 Opus 5 / Opus 4.8)에서만 사용할 수 있습니다. 비용은 2배이고, 응답은 약 2.5배 빠릅니다.

선택한 옵션은 입력 상자 아래의 모델 이름 옆에 `claude-opus-5-5 200K Medium`이나 `claude-opus-5-5 1M High Fast`처럼 표시되며, 모델별로 기억됩니다.

### 메시지 보내기

메시지를 입력하고 보냅니다. 설정이 모두 올바르면 본인 키를 통해 응답이 돌아옵니다.

<BzLiaotian moxing="claude-opus-5-5" wen="안녕하세요! 어떤 모델인가요?" da="안녕하세요! 저는 Claude Opus 5.5이고, 직접 등록하신 API 키를 통해 Breezell에서 실행되고 있습니다. 오늘은 무엇을 만들어 볼까요?" />

이제 BYOK 설정을 모두 마쳤습니다.

## 어떤 Claude 모델을 사용할까요

| 모델 ID | 컨텍스트 | 가격 입력 / 출력(100만 토큰당) | 기본 강도 | 추론 끄기 | Fast | 추천 용도 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | 불가 | 미지원 | 가장 어려운 문제와 대규모 리팩터링 |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | 불가 | 지원(2배) | 일상적인 에이전트 작업, 기본 추천 모델 |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | 불가 | 미지원 | 속도와 비용의 균형 |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | 가능 | 미지원 | 간단한 질문과 작은 수정 |

가격은 Breezell 내장 카탈로그에 있는 Anthropic API 정가입니다. 중계 서버는 가격을 자체적으로 정합니다. `claude-haiku-5-5`는 100K 토큰을 넘는 프롬프트에 5배 요금이 부과됩니다.

## 문제 해결

| 표시 내용 | 의미 | 조치 |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | 현재 플랜에는 사용자 지정 공급자가 포함되어 있지 않습니다. | Custom API 이상 플랜으로 업그레이드하세요. |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | 슬롯에 아직 기본 URL이 없습니다. | <BzWenben jian="settings.baseUrl" />을 입력합니다. |
| <BzWenben jian="box.models.fetchNeedsKey" /> | 키 입력란이 비어 있습니다. | 키를 붙여넣습니다. |
| <BzWenben jian="box.models.fetchAuthFailed" /> | 공급자가 401 / 403을 반환했습니다. | 키를 다시 복사하고, 이 공급자의 키가 맞는지, 요금제와 IP 허용 목록은 어떤지 확인합니다. |
| <BzWenben jian="box.models.fetchFailed" /> … | 중계 서버에 모델 목록이 없거나 주소가 잘못되었습니다. | <BzWenben jian="settings.requestUrl" /> 항목을 확인하거나, 모델 ID를 직접 추가합니다. |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | 중계 서버가 반환한 모델이 모두 이미 슬롯에 있습니다. | 따로 조치할 필요가 없습니다. |
| <BzWenben jian="box.models.health.errTimeout" /> | 요청 시간이 초과되었습니다. | 주소, 프록시, 네트워크 경로를 확인합니다. |
| <BzWenben jian="box.models.health.errConnect" /> | 호스트에 연결할 수 없습니다. | 주소, DNS, 프록시를 확인합니다. |
| <BzWenben jian="box.models.health.errHttp" /> | 중계 서버가 HTTP 오류로 응답했습니다. | 대부분 경로나 프로토콜이 잘못된 경우입니다. <BzWenben jian="settings.requestUrl" /> 항목과 프로토콜을 공급자 문서와 비교하세요. |
| 요청 URL에 `/v1/v1`이 들어 있거나 `/v1`이 빠져 있음 | 기본 URL과 프리셋이 서로 맞지 않습니다. | <BzWenben jian="settings.requestUrl" /> 항목이 올바르게 나올 때까지 기본 URL을 수정합니다. |
| 오래 기다린 뒤 응답이 한꺼번에 나타남 | 중계 서버가 스트림을 모았다가 보냅니다. | <BzWenben jian="box.models.health.checkStreaming" />를 실행합니다. <BzWenben jian="box.models.health.stream.heldThinking" /> 결과가 나오면 강도를 낮춰 대기 시간을 줄일 수 있습니다. |
| 200K를 넘는 요청이 실패함 | 중계 서버에 1M 베타 헤더가 필요하거나, 1M 컨텍스트를 지원하지 않습니다. | <BzWenben jian="settings.customHeaders" />에서 **Claude 1M**을 누르거나, 모델을 `200K`로 유지합니다. |
| 목록을 가져온 뒤에도 모델 목록이 비어 있음 | 목록이 로드되지 않았습니다. | Breezell을 다시 시작한 뒤 다시 가져오거나, ID를 직접 추가합니다. |

## 자주 묻는 질문

**공식 Anthropic 키와 중계 서버를 동시에 사용할 수 있나요?**
네. 방법 A와 각 호환 슬롯은 서로 독립적입니다. 채팅 모델 선택기에 나란히 표시되며, 대화마다 바꿔 쓸 수 있습니다.

**여러 중계 서버와 키를 저장할 수 있나요?**
네. 중계 서버마다 슬롯을 하나씩 사용하세요(최대 50개). 같은 중계 서버에서 여러 키를 번갈아 쓰려면 해당 슬롯의 <BzWenben jian="settings.accountPool" />을 사용합니다. Box 사이드바의 <BzWenben jian="box.vault.group" />는 중계 서버 주소와 키를 시스템 키체인에 보관하며, 슬롯을 대신 채워 줄 수도 있습니다.

**요금은 누가 청구하나요?**
사용하는 키의 공급자가 청구합니다. Breezell은 이 요청에 대해 Breezell 할당량을 차감하지 않습니다. <BzWenben jian="box.usage.tab.tokens" /> 보기에서 사용한 토큰 수를 확인할 수 있으며, 호환 슬롯에 가격을 설정하면 비용도 함께 볼 수 있습니다.
