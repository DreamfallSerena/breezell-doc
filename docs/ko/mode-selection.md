---
title: 모드 선택
description: Breezell의 각 모드(Chat, Plan, Analyze, Entanglement, Agent, Teams, DarkSelene)가 무엇을 읽고 변경하고 실행할 수 있는지, 플랜 카드와 모드 전환이 어떻게 동작하는지, 어떤 모드를 골라야 하는지 설명합니다.
---

# 모드 선택

모드는 다음 메시지에서 AI가 어떻게 일할지, 곧 무엇을 읽을 수 있고 무엇을 변경할 수 있으며 무엇을 실행할 수 있는지를 정합니다. 모드는 입력창 왼쪽 아래의 모드 캡슐에서 선택합니다. 기본 모드는 **Agent**이며, 대부분의 작업에는 Agent가 알맞습니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 메뉴의 모드에 마우스를 올리면 설명을 읽을 수 있고, 카드의 메뉴와 스위치는 직접 클릭해 볼 수 있습니다.
:::

<BzLiaotian tanchu="moshi" moshi="agent" />

메뉴의 모드 이름은 어떤 언어에서든 영어로 표시됩니다. 선택한 모드는 다음 메시지부터 적용됩니다. 다른 모드로 메시지를 보내면 대화에 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> 줄이 표시되어 바뀐 지점을 알려 줍니다. 메뉴 자체는 대화 상자 개요의 [모드 선택](/dialog-box-overview#mode)을 참고하세요.

## 각 모드가 할 수 있는 일 {#compare}

| 모드 | 프로젝트 읽기 | 파일 변경 | 명령 실행 | MCP 도구 |
| --- | --- | --- | --- | --- |
| [Chat](#chat) | — | — | — | — |
| [Plan](#plan) | ✓ | 자체 플랜만 | — | — |
| [Analyze](#analyze) | ✓ | — | — | ✓ |
| [Entanglement](#entanglement) | ✓ | ✓ | ✓ | ✓ |
| [Agent](#agent) | ✓ | ✓ | ✓ | ✓ |
| [Teams](#teams) | ✓ | ✓ | ✓ | ✓ |
| [DarkSelene](#darkselene) | ✓ | ✓ (2단계, 검토를 거쳐) | ✓ (2단계) | 2단계 |

AI는 모든 모드에서 스킬을 사용할 수 있습니다. 파일 편집과 명령 실행에 승인이 필요한지는 [기능 옵션](/feature-options-overview)의 도구 권한에서 정합니다.

## Chat {#chat}

<BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" />.

Chat은 질문, 설명, 아이디어 비교, 글 초안 작성에 사용합니다. AI는 대화 내용과 사용자가 첨부한 컨텍스트를 바탕으로 답변하며, 스스로 프로젝트 파일을 열거나 무언가를 실행하지 않습니다. 다만 무언가를 기억해 달라고 요청하면 메모리를 저장할 수는 있습니다.

<BzLiaotian moshi="normal" wen="디바운스와 스로틀의 차이는 무엇인가요?" da="둘 다 함수가 실행되는 빈도를 제한합니다. 디바운스는 호출이 잠시 멈출 때까지 기다렸다가 한 번 실행하고, 스로틀은 호출이 계속되는 동안 일정 간격마다 최대 한 번 실행합니다. 입력하는 동안 검색하는 기능에는 디바운스를, 스크롤이나 크기 조정 핸들러에는 스로틀을 사용하세요." />

## Plan {#plan}

<BzWenben jian="chatMode.planDetail" />. <BzWenben jian="chatMode.planExplain" />.

1. AI는 필요한 코드를 읽지만 아무것도 변경하지 않습니다.
2. AI는 플랜을 채팅에 카드로 작성합니다. 카드에는 제목, 짧은 개요, 할 일 목록이 있습니다. 플랜은 Breezell이 프로젝트 밖에 보관하는 `.plan.md` 파일입니다.
3. <BzWenben jian="planCard.actions.viewPlan" />를 클릭하면 플랜을 읽고 편집할 수 있습니다. 채팅에서 변경을 요청하면 AI가 같은 플랜을 수정합니다.
4. 플랜을 실행하려면 <BzWenben jian="planCard.actions.execute" />(`Ctrl+Enter`)을 클릭합니다. 그러면 카드에 <BzWenben jian="planCard.actions.executed" />이 표시되고, 작업이 진행되면서 할 일이 하나씩 체크됩니다.

<BzLiaotian moshi="plan" gaoliang="jihua" biaoji="1" wen="설정 페이지에 다크 모드 토글을 추가해 주세요." da="플랜을 세웠습니다. 현재 테마 로직은 그대로 두고 설정 하나만 추가합니다." jihuabiaoti="설정 페이지의 다크 모드 토글" jihuazhaiyao="SettingsPage.vue에 다크 모드 스위치를 추가하고, 선택한 값을 저장한 뒤 루트 요소의 테마 클래스로 적용합니다. 사용자가 모드를 고르기 전까지는 시스템 설정을 따릅니다." />

<BzWenben jian="planCard.actions.skip" />를 클릭하면 플랜을 실행하지 않고 넘깁니다. 카드의 <BzWenben jian="planCard.actions.auto" /> 스위치는 기능 옵션의 <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" />과 같은 설정입니다. 이 스위치가 켜져 있으면 새 플랜이 클릭 없이 바로 실행됩니다.

### Agent가 Plan을 제안할 때 {#plan-switch}

Agent 모드에서 AI는 작업에 먼저 플랜이 필요하다고 판단할 수 있습니다. 그러면 작업을 멈추고 이유가 적힌 카드를 표시합니다.

<BzLiaotian moshi="agent" gaoliang="qiehuanka" biaoji="1" wen="서버와 동기화할 수 있도록 스토리지 계층을 다시 작성해 주세요." da="이 작업은 저장 형식, 모든 호출부, 오프라인 캐시에 영향을 줍니다." qiehuanka="변경이 여러 모듈과 데이터 형식에 걸쳐 있으므로, 먼저 플랜을 합의하면 위험한 재작성을 피할 수 있습니다." />

- <BzWenben jian="planSwitch.switch" />(`Ctrl+Enter`)을 누르면 대화가 Plan 모드로 넘어가고, <BzWenben jian="planSwitch.skip" />를 누르면 AI가 Agent 모드에서 계속 작업합니다.
- 왼쪽 아래의 메뉴에서 다음번 동작을 정합니다. <BzWenben jian="planSwitch.alwaysAsk" />, <BzWenben jian="planSwitch.never" />, <BzWenben jian="planSwitch.alwaysRun" /> 중에서 고를 수 있으며, 기능 옵션의 <BzWenben jian="featureOptions.contextManagement.planSwitchPref" />과 같은 설정입니다.
- <BzWenben jian="planSwitch.alwaysAsk" />로 설정하면 카드 아래의 막대가 30초씩 두 번 진행됩니다. 그동안 응답하지 않으면 전환을 건너뛰고 AI가 작업을 계속합니다.

Plan 모드에서도 AI가 같은 형태의 카드로 반대 방향의 전환, 즉 원래 있던 모드로 돌아가는 전환을 제안할 수 있습니다.

## Analyze {#analyze}

<BzWenben jian="chatMode.analyzeDetail" />. <BzWenben jian="chatMode.analyzeExplain" />.

Analyze는 무엇을 변경할지 정하기 전에 버그의 원인을 찾거나, 설계를 검토하거나, 익숙하지 않은 코드를 이해할 때 사용합니다. AI는 답할 수 있을 때까지 검색하고 읽은 다음 멈추며, 정보를 얻기 위해 MCP 도구를 사용할 수 있습니다. 수정이 필요한 부분이 있으면 직접 적용하지 않고 답변에서 수정 방법을 설명합니다.

<BzLiaotian moshi="analyze" wen="작업을 삭제한 뒤 작업 카운터에 잘못된 숫자가 표시되는 이유는 무엇인가요?" da="deleteTask()는 배열의 복사본에서 항목을 제거하지만 renderCounters()는 원래의 tasks 배열을 읽기 때문에 개수가 줄어들지 않습니다. 수정 방법: deleteTask()가 공유 tasks 배열을 업데이트하게 하고, 그 뒤에 renderCounters()를 호출하세요." />

## Agent {#agent}

<BzWenben jian="chatMode.agentDetail" />. <BzWenben jian="chatMode.agentExplain" />.

Agent가 기본 모드입니다. Agent는 필요한 컨텍스트를 수집하고, 파일을 편집하고, 명령을 실행하고, 결과를 확인한 다음 보고합니다. 작업이 크면 [Plan으로 전환](#plan-switch)을 제안할 수 있으며, MCP 도구, 브라우저, 스킬을 사용할 수 있습니다.

Windows와 macOS에서 데스크톱 제어가 켜져 있으면, 컴퓨터의 앱을 조작할 수 있는 모드는 Agent와 Entanglement뿐입니다.

## Entanglement {#entanglement}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.entanglementDetail" />: <BzWenben jian="chatMode.entanglementExplain" />

Entanglement는 Agent의 모든 기능에 명시적이고 구조화된 인과 추론을 더합니다. AI는 자신의 가설을 추적하고, 도구를 호출할 때마다 가설을 확인하거나 배제하며, 계속 진행하기 전에 멈춰서 사용자와 단계를 확인할 수 있습니다. 채팅 위의 패널에 이 상태가 진행되는 대로 표시됩니다(기능 옵션의 <BzWenben jian="featureOptions.entanglement.enable" />).

까다로운 버그, 아키텍처 결정, 리팩터링, 성능이나 보안 작업에 사용합니다. Agent보다 토큰을 더 많이 사용합니다. 자세한 동작 방식은 [Entanglement 모드](/entanglement-mode-overview)를 참고하세요.

## Teams {#teams}

<BzWenben jian="chatMode.agentTeamsDetail" />. <BzWenben jian="chatMode.agentTeamsExplain" />.

- 리더가 팀을 꾸릴 가치가 있는지 판단합니다. 간단한 요청에는 바로 답합니다.
- 큰 작업이면 리더가 작업을 나누고 병렬로 일하는 팀원을 투입한 다음, 그 결과를 모아 확인합니다.
- 팀이 시작되기 전에 Breezell이 승인을 요청합니다. 단, 기능 옵션에서 <BzWenben jian="featureOptions.toolPermissions.teams" />이 켜져 있으면 묻지 않습니다. 디자인과 버그 수정을 맡는 팀원은 각자 전용 모델로 실행할 수 있습니다(<BzWenben jian="models.teamDesignModel.title" />, <BzWenben jian="models.teamBugfixModel.title" />).
- <BzWenben jian="chatMode.agentTeamsTokenWarning" />. 또한 병렬로 일하는 팀원이 같은 파일을 작업하면 서로 방해할 수 있으므로, 각자 명확히 구분된 부분을 맡기세요.

## DarkSelene {#darkselene}

<BzWenben jian="chatMode.breezellOriginalMode" />. <BzWenben jian="chatMode.darkSeleneDetail" />.

DarkSelene은 두 단계로 작업합니다.

1. **질문을 분해합니다.** Analyze와 마찬가지로 읽기 전용입니다. AI는 요청과 코드를 살펴보고, 해야 할 일과 예상되는 결과를 정리한 작업 명세를 작성합니다.
2. **검토를 받으며 실행합니다.** 작업 명세는 Agent에 전달됩니다. Agent가 작업하는 동안 독립적인 모델 호출이 예상한 파일 밖의 읽기와 모든 편집을 검토하고, 그 결과는 증거로서 Agent에 다시 전달됩니다. 위험한 편집은 검토자 세 명이 병렬로 확인합니다.

2단계에서는 AI가 모드를 전환하거나, 플랜 카드를 작성하거나, 멈춰서 질문하지 않습니다. <BzWenben jian="chatMode.darkSeleneTokenWarning" />

## 잠긴 모드 {#locked}

Entanglement와 Teams는 친구 다섯 명이 잠금 해제를 도와주거나 요금제를 하나라도 이용하면 사용할 수 있습니다. 그전까지는 메뉴에 자물쇠가 표시되며, 마우스를 올리면 진행 상황이 표시됩니다(예: <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="2|5" />). <BzWenben jian="chatMode.entanglementUnlockHint" /> [새 사용자 초대 방법](/invite-new-users)을 참고하세요.

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 모드 고르기 {#choosing}

| 하려는 일 | 모드 |
| --- | --- |
| 질문하거나 무언가를 차근차근 생각해 보기 | Chat |
| 무엇이든 바꾸기 전에 접근 방식 합의하기 | Plan |
| 변경 없이 코드를 이해하거나 원인 찾기 | Analyze |
| 작업 완료하기: 편집, 실행, 검증 | Agent |
| 어려운 문제를 근거를 바탕으로 단계적으로 해결하기 | Entanglement |
| 큰 작업의 독립적인 여러 부분을 동시에 진행하기 | Teams |
| 요청을 먼저 분해하고 모든 변경을 검토받기 | DarkSelene |

확신이 서지 않으면 Agent를 그대로 사용하세요. 작업에 필요하면 Agent가 스스로 Plan으로 전환합니다.
