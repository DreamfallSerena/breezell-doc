---
title: 슈퍼 메모리
description: Breezell의 슈퍼 메모리가 대화를 메모리, 스킬, 경험, 궤적, 리소스로 정제하고 이후 요청에 다시 불러오는 방식과, Box에서 이를 정리하는 방법을 설명합니다.
---

# 슈퍼 메모리

**슈퍼 메모리**는 Breezell 자체의 장기 메모리입니다. 작업하는 동안 대화에서 남겨 둘 만한 내용(결정 사항, 선호, 작업 방식, 문제를 해결하며 얻은 교훈, 변경된 파일)을 정제하고, 그중 관련된 부분을 이후 요청에 다시 불러옵니다. 새 대화에서도 마찬가지입니다.

- 추출은 Breezell에 내장된 두 모델이 처리합니다. 사용자가 설정한 모델을 사용하지 않으며, 그 모델의 토큰도 소비하지 않습니다. 다만 요청에 불러온 메모리는 해당 요청의 컨텍스트에 포함됩니다.
- 슈퍼 메모리를 사용하려면 슈퍼 메모리가 포함된 요금제의 Breezell 계정이 필요합니다.
- 저장된 모든 내용은 Box ▸ <BzWenben jian="box.memory.group" />에서 살펴보고, 고치고, 삭제할 수 있습니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따르며, 화면 속 메모리는 예시입니다. 메모리 라이브러리에서는 행을 펼치고, 우선순위를 바꾸고, 항목을 상주로 고정해 볼 수 있습니다.
:::

## 작동 방식 {#how-it-works}

Box를 열고 왼쪽 Console 그룹에서 <BzWenben jian="box.memory.group" />를 펼칩니다. 여기에는 <BzWenben jian="box.memory.overview" />, <BzWenben jian="box.memory.library" />, <BzWenben jian="box.memory.context" />, <BzWenben jian="box.memory.maintenance" />의 네 페이지가 있습니다.

<BzHezi zu="memory" ye="box.memory.overview" gaoliang="ye" biaoji="1" />

<BzWenben jian="box.memory.overview" />는 순환 과정을 나타내는 다이어그램으로 시작하며, 실시간 수치가 함께 표시됩니다.

<BzJiyi ye="zonglan" />

1. **<BzWenben jian="box.memory.flow.conversation" />**: 사용자와 모델이 주고받는 모든 턴입니다.
2. **<BzWenben jian="box.memory.flow.extract" />**: <BzWenben jian="box.memory.flow.extractSub1" />. <BzWenben jian="box.memory.flow.extractSub2" />.
3. **<BzWenben jian="box.memory.flow.store" />**: 항목이 활성 또는 휴면 상태로 저장되는 곳입니다.
4. **<BzWenben jian="box.memory.flow.project" />**: 진입점, 명령, 의존성처럼 코드베이스에서 컴파일한 지식입니다.
5. 다시 대화로: 상주 항목은 모든 요청에 주입되고, 요청에 필요하면 관련 항목을 불러옵니다.

다이어그램 아래의 카드에는 항목 수, 상주 항목 수, 모든 항목을 전체 내용으로 불러올 때와 비교해 간결한 인덱스로 절약되는 양, 마지막으로 주입된 내용이 표시됩니다. 그 아래로는 종류별 구성, 우선순위, 항목의 최신성, 컴파일된 프로젝트 지식의 상태, 가장 많이 사용된 항목과 곧 만료될 항목이 이어집니다.

## 다섯 가지 메모리 종류 {#kinds}

슈퍼 메모리는 각 항목을 나중에 쓰일 방식에 맞는 종류로 분류합니다.

| 종류 | 담는 내용 | 예시 |
| --- | --- | --- |
| <BzWenben jian="superMemory.catMemory" /> | 오래 유지되는 사실, 선호, 상시 지침, 결정 사항 | "번체 중국어로 답변하고 코드는 영어로 유지" |
| <BzWenben jian="superMemory.catSkill" /> | 같은 종류의 문제를 다시 해결할 수 있는 재사용 가능한 방법 | 손상된 localStorage 데이터를 안전하게 복구하는 방법 |
| <BzWenben jian="superMemory.catExperience" /> | 교훈: 근본 원인에 대한 추론과 검증 방법 | "여러 기능이 함께 고장 나면 공유 상태부터 수정" |
| <BzWenben jian="superMemory.catTrajectory" /> | 작업이 실제로 진행된 과정: 목표, 도구 호출, 오류와 복구 | 한 번의 수정 작업을 이룬 14단계 |
| <BzWenben jian="superMemory.catResource" /> | 변경된 구체적인 파일과 위치 | <BzWenben jian="superMemory.editAction.edit" /> test.html |

모든 대화에서 모든 종류가 만들어지지는 않습니다. 버그 수정에서는 보통 스킬, 경험, 궤적, 리소스가 생기지만 일반 메모리는 생기지 않습니다. 그 안에 오래 유지할 개인 선호가 없기 때문입니다. 덕분에 불러오기가 정확해집니다. 이후 작업에서는 방법, 교훈, 이력, 파일 기록을 각각 따로 불러올 수 있습니다.

## 우선순위와 수명 주기 {#priorities}

| 우선순위 | 수명 |
| --- | --- |
| <BzWenben jian="superMemory.p0Permanent" /> | 만료되지 않습니다. 상주 항목은 항상 P0입니다. |
| <BzWenben jian="superMemory.p190Days" /> | 다시 확인되지 않으면 30일 후에 만료됩니다. |
| <BzWenben jian="superMemory.p230Days" /> | 다시 확인되지 않으면 7일 후에 만료됩니다. 파일 편집처럼 수명이 짧은 세부 정보는 여기서 시작합니다. |

만료된 항목은 삭제되지 않고 **<BzWenben jian="superMemory.dormant" />** 상태가 됩니다. 휴면 항목은 계속 검색할 수 있고 복원할 수도 있습니다. P1 항목이 유용하다고 입증되면 Breezell은 해당 행의 **↑P0** 버튼으로 영구 항목으로 바꾸도록 제안합니다.

## 메모리 라이브러리 {#library}

<BzWenben jian="box.memory.library" />: <BzWenben jian="box.memory.libraryDesc" />

<BzJiyi ye="ku" yetou gaoliang="pchip" biaoji="1" />

- **필터**: 검색한 다음 우선순위(P0 / P1 / P2), 종류, <BzWenben jian="superMemory.active" /> 또는 <BzWenben jian="superMemory.dormant" /> 상태로 범위를 좁힙니다.
- **개수 표시줄**: 불러온 항목 수, 상주 할당량, 종류별 활성 예산을 보여 줍니다. <BzWenben jian="superMemory.batchSelect" />을 누르면 여러 항목을 체크해 한꺼번에 삭제할 수 있습니다.
- **행**: 색이 있는 점은 종류를 나타냅니다. 제목 뒤에는 우선순위 칩이 오고, 상주 항목에는 **<BzWenben jian="superMemory.residentBadge" />**, 최근 24시간 안에 생긴 항목에는 **NEW**가 붙습니다. 두 번째 줄에는 마지막 업데이트 시점, 종류, 태그 수, 출처가 표시됩니다.
- **행을 펼치면** 태그, <BzWenben jian="superMemory.l1Overview" />, <BzWenben jian="superMemory.whyRemembered" />, 확인 및 사용 횟수, 만료 시점을 볼 수 있습니다. <BzWenben jian="box.memory.showFull" />를 누르면 <BzWenben jian="superMemory.l2Full" />이 추가로 표시됩니다.
- **우선순위 칩**(1): 클릭해 <BzWenben jian="superMemory.p0Permanent" />, <BzWenben jian="superMemory.p190Days" />, <BzWenben jian="superMemory.p230Days" /> 중에서 고릅니다.
- 핀을 누르면 항목이 상주로 설정되고, 휴지통을 누르면 삭제됩니다.

Breezell은 AI에 항목마다 짧은 한 줄(L0)을 보내고, 개요나 전체 내용은 필요할 때만 불러옵니다. 개요 페이지의 <BzWenben jian="superMemory.tokenSavings" />은 여기서 나옵니다.

## 상주 메모리 {#resident}

상주 항목은 요청이 그 내용과 관련이 있든 없든 **모든** 요청에 주입됩니다. 아키텍처 규칙, 반드시 따라야 하는 워크플로, 확고한 선호처럼 AI가 항상 염두에 두어야 하는 내용에 사용하세요.

1. <BzWenben jian="box.memory.library" />를 열고 항목을 찾습니다.
2. 해당 행의 핀을 클릭합니다(<BzWenben jian="superMemory.residentOn" />).

<BzJiyi ye="ku" zhankai="m1" gaoliang="pin" biaoji="1" />

- 항목은 P0 우선순위가 되고 <BzWenben jian="superMemory.residentBadge" /> 배지가 붙으며, 개수 표시줄에 새 합계가 표시됩니다(예: <BzWenben jian="superMemory.residentCapacity" canshu="1|12" />).
- 최대 12개 항목을 상주로 설정할 수 있습니다. 한도에 도달하면 Breezell에 다음 안내가 표시됩니다. <BzWenben jian="superMemory.residentLimitReached" />
- 상주 항목의 우선순위를 낮추려면 먼저 핀을 다시 클릭하세요(<BzWenben jian="superMemory.residentOff" />). 항목은 이전 우선순위로 돌아갑니다.

상주 항목은 짧고 정말로 어디에나 적용되는 내용으로 유지하세요. 임시 파일 위치나 일회성 작업의 세부 정보는 여기에 두지 마세요. 모든 요청에 추가되기 때문입니다.

## 채팅 속 메모리 {#in-chat}

슈퍼 메모리가 요청에 항목을 주입하면 메시지 아래에 한 줄이 나타납니다. 클릭하면 어떤 항목이 사용되었는지 볼 수 있습니다.

<BzLiaotian zhuru="1|1|0" zhurukai zhuruwen="번체 중국어로 답변하고 코드와 식별자는 영어로 유지" gaoliang="zhuru" biaoji="1" wen="안녕하세요" da="안녕하세요! 오늘은 어떤 작업을 도와드릴까요?" />

이 예에서는 새 대화에 "안녕하세요"만 있는데도 항목 하나가 주입되었습니다. 바로 상주 메모리입니다. 관련 항목은 요청에 필요할 때 추가됩니다.

<BzLiaotian zhuru="3|1|2" zhuruwen="번체 중국어로 답변하고 코드와 식별자는 영어로 유지|안전한 JSON 파싱으로 손상된 localStorage 상태 복구|작업, 필터, 카운터가 함께 고장 나면 공유 상태부터 수정" zhurukai wen="test2.html의 독서 목록에서 새로 고침하면 책이 사라집니다. 고쳐 주세요." da="작업 관리자와 같은 문제입니다. 목록이 JSON.stringify가 아니라 String()으로 저장되고 있습니다. 파싱을 안전하게 처리하고, 손상된 값은 버리고, 모든 책에 안정적인 id를 부여하겠습니다." />

이 줄은 주입된 내용이 있을 때만 나타납니다. 검색을 끝내지 못한 경우에는 사용할 수 있는 내용으로 턴이 계속 진행되고, 이 줄에 그 사실이 표시됩니다.

## 컨텍스트 주입 {#context}

<BzWenben jian="box.memory.context" />: <BzWenben jian="box.memory.contextDesc" />

<BzJiyi ye="shangxiawen" />

| 카드 | 표시 내용 |
| --- | --- |
| <BzWenben jian="superMemory.currentTurnInjectionTitle" /> | 선택한 턴의 상태, 주입된 상주 항목과 관련 항목의 수, 그 종류와 범위, 그리고 각 항목의 세부 수준(L0 / L1 / L2)과 점수입니다. |
| <BzWenben jian="superMemory.memoryIndexPreview" /> | 다음 요청이 받게 될 간결한 인덱스입니다. 종류별로 묶여 있으며 예상 토큰 수가 함께 표시됩니다. |
| <BzWenben jian="superMemory.convTurns" /> | 현재 대화의 턴입니다. 턴을 클릭하면 그 턴의 주입 내용을 확인하고 채팅의 해당 위치로 이동합니다. |

## 예산 및 유지 관리 {#maintenance}

<BzWenben jian="box.memory.maintenance" />: <BzWenben jian="box.memory.maintenanceDesc" />

<BzJiyi ye="weihu" />

- <BzWenben jian="box.memory.budgetTitle" />: <BzWenben jian="box.memory.budgetDesc" />
- <BzWenben jian="box.memory.runLifecycle" />: <BzWenben jian="box.memory.runLifecycleDesc" />
- <BzWenben jian="box.memory.purge" />: <BzWenben jian="box.memory.purgeDesc" />
- <BzWenben jian="box.memory.archiveExport" /> / <BzWenben jian="box.memory.archiveImport" />: 메모리 뱅크 전체를 `.zip` 파일로 다른 컴퓨터에 옮깁니다. <BzWenben jian="box.memory.archiveImportDesc" />

## 예시: 한 번의 수정을 다른 앱에서 재사용하기 {#example}

위 화면의 항목은 다음과 같이 만들어졌습니다.

1. **수정 작업.** `test.html`의 작은 작업 관리자에서는 작업 추가, 삭제, 완료, 필터링, 저장이 제대로 동작하지 않았습니다. Breezell은 이 오류들의 원인을 하나의 공유 상태 모델에서 찾아 수정하고, 브라우저에서 전체 워크플로를 확인했습니다. 슈퍼 메모리는 먼저 `test.html`의 편집된 부분을 **P2 리소스**로, 수정 과정을 **P2 궤적**으로 기록했습니다.
2. **교훈.** "이번 작업에서 무엇을 배웠나요?"라는 질문에 AI는 재사용할 수 있는 교훈을 꼽았습니다. 증상을 하나씩 고치는 대신 공유 상태의 소유자를 수정할 것, 항목은 안정적인 id로 다룰 것, 저장된 데이터는 검증해야 하는 경계로 취급할 것입니다. 슈퍼 메모리는 **P1 스킬**(localStorage 데이터를 안전하게 저장하고 불러오는 방법)과 **P1 경험**(공유 상태를 먼저 진단한 다음 처음부터 끝까지 검증)을 저장했습니다. 더 길거나 가치가 큰 수정에서는 묻지 않아도 이런 교훈을 기록합니다.
3. **재사용.** 첫 번째 대화는 삭제되었습니다. 새 대화에서 다른 앱인 `test2.html`의 독서 목록에 같은 계열의 버그가 있었습니다. Breezell은 스킬과 리소스 기록을 불러와, 이전 패치를 복사하는 대신 새 `books` 데이터에 그 방법을 적용하고 결과를 검증했습니다.

대화를 삭제해도 슈퍼 메모리가 그 대화에서 추출한 내용은 삭제되지 않으며, 한 앱에서 배운 방법이 다른 앱에서도 그대로 쓰였습니다.

## 일일 사용량을 모두 쓴 경우 {#quota}

슈퍼 메모리에는 일일 사용량이 있습니다. 사용량을 모두 쓰면 모든 슈퍼 메모리 페이지에 <BzWenben jian="box.memory.quotaPausedTitle" />라는 안내가 표시됩니다. 사용량이 갱신될 때까지 채팅에서 새 항목이 자동으로 생성되지 않습니다. 기존 항목은 계속 보고 삭제할 수 있으며, [Rules, Memories & Skills](/prompt-settings)에서 직접 작성하는 규칙과 메모리는 영향을 받지 않습니다.

슈퍼 메모리가 포함된 요금제가 없으면 페이지에 다음과 같이 표시됩니다.

<BzJiyi ye="suoding" />

## 요약

- 슈퍼 메모리는 사용자 모델의 토큰을 쓰지 않고 대화를 메모리, 스킬, 경험, 궤적, 리소스로 정제합니다.
- 관련 항목은 이후 요청에 불러오고, 상주 항목(최대 12개, 항상 P0)은 모든 요청에 들어갑니다.
- P1은 30일, P2는 7일 동안 유지되며 그 안에 다시 확인되지 않으면 만료됩니다. 만료된 항목은 휴면 상태가 되며 복원할 수 있습니다.
- Box ▸ <BzWenben jian="box.memory.group" />에는 개요, 라이브러리, 컨텍스트 주입 화면, 유지 관리가 있습니다.
