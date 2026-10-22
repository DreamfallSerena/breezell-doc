---
title: Entanglement 모드
description: Breezell의 Entanglement 모드가 추적되는 가설과 증거로 어려운 문제를 조사하는 방식, 인과 패널을 읽는 방법, 엄격 검증과 휴먼 인 더 루프 옵션을 설명합니다.
---

# Entanglement 모드

**Entanglement**는 <BzWenben jian="chatMode.breezellOriginalMode" />이며, <BzWenben jian="chatMode.entanglementDetail" />을 수행합니다. 읽기, 편집, 명령 실행 등 Agent가 할 수 있는 모든 일을 그대로 할 수 있고, 여기에 명시적이고 구조화된 인과 추론을 더합니다. AI는 가설을 세우고, 도구를 호출할 때마다 가설 하나를 확인하거나 배제하며, 원인이 증거로 뒷받침된 뒤에야 코드를 변경합니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 인과 패널의 레이블은 Breezell에서도 영어로 표시되며, 패널에 나오는 조사 내용은 예시입니다. 패널의 화살표를 클릭하면 세부 정보를 열거나 닫을 수 있습니다.
:::

## 언제 사용하나요 {#when}

원인이 분명하지 않아서 바로 답하면 추측이 될 수밖에 없을 때 Entanglement를 사용하세요.

- 원인을 알 수 없는 버그나 회귀
- 여러 파일, 모듈 또는 시스템에 걸친 문제
- 가능한 여러 설명이나 설계 가운데 하나를 골라야 하는 결정
- 결과를 반드시 검증해야 하는 성능, 보안 또는 아키텍처 작업

명확하고 범위가 제한된 편집에는 Agent가 더 빠르고 토큰도 적게 사용합니다. 또한 같은 요청이라도 Entanglement는 Agent보다 토큰을 더 많이 사용합니다.

## 조사 시작하기 {#start}

1. 입력창 아래의 모드 메뉴에서 **Entanglement**를 선택합니다. 자물쇠가 표시되면 [잠긴 모드](/mode-selection#locked)를 참고하세요.
2. 증상, 기대한 결과, 제한 사항(건드리면 안 되는 파일, 반드시 통과해야 하는 테스트)을 설명합니다.
3. 메시지를 보냅니다. 대화 위에 인과 패널이 나타나 조사 과정을 따라갑니다.

<BzLiaotian moshi="entanglement" jiuchan="verify" gaoliang="mianban" biaoji="1" yinguo="카운터 미갱신" yinguowen="카운터가 읽는 배열은 deleteTask()가 변경하는 배열과 다릅니다.|Root cause: deleteTask()가 tasks 배열의 복사본을 필터링합니다|Predict: 수정 후에는 Active 필터 개수도 하나 줄어듭니다" wen="작업을 삭제한 뒤에도 카운터에 이전 숫자가 그대로 표시됩니다. 원인을 찾아서 고쳐 주세요." da="deleteTask()가 변경하는 배열이 renderCounters()가 읽는 배열과 같은지 확인하고 있습니다." />

답변에서는 조사가 업데이트될 때마다 **Tracing Causal Pathways** 줄이 표시됩니다. 이 줄을 클릭하면 해당 업데이트의 바탕이 된 추론을 읽을 수 있습니다. 조사가 끝나면 이 줄에 **Causal Trace Complete**가 표시됩니다.

## 인과 패널 읽기 {#panel}

패널의 맨 윗줄에는 조사가 현재 어디까지 진행되었는지 표시됩니다.

<BzJiuchan jieduan="verify" gaoliang="jieduan" biaoji="1" />

| 부분 | 의미 |
| --- | --- |
| **Locate → Verify → Fix** | 진행 단계입니다. 원인을 찾고, 그 원인을 입증한 다음, 코드를 변경합니다. 체크 표시는 끝난 단계를, 깜박이는 점은 현재 단계를 나타냅니다. 증거가 현재 설명을 뒤집으면 첫 단계가 주황색으로 바뀌고 **Relocate**로 표시됩니다. |
| 상태 | 원인이 밝혀지지 않은 동안에는 **Investigating**, 아직 확인하지 않은 변경을 한 뒤에는 **Modified · unverified**, 확인에 성공한 뒤에는 **Verified**, 작업이 끝나면 **Resolved**가 표시됩니다. |
| **Confidence** | Low, Medium, High 중 하나이며 신호 막대로 표시됩니다. 지금까지 수집한 증거를 바탕으로 정해집니다. |

그 아래 줄은 몇 초마다 현재 상태를 번갈아 보여 줍니다. 현재 평가, 검증 중인 가설, 최근 발견 내용이 차례로 표시되며, 마우스를 올리면 멈춥니다.

### 세부 정보 {#details}

오른쪽의 화살표를 클릭하면 세부 정보가 열립니다.

<BzJiuchan jieduan="verify" zhankai />

| 섹션 | 내용 |
| --- | --- |
| Completion contract | 작업이 무엇인지(**Target**), 언제 완료로 보는지(**Done**)를 나타냅니다. |
| Root cause | 현재의 설명입니다. 원인이 어떻게 증상으로 이어지는지 보여 주는 **Mechanism**과, 그 원인이 없었다면 어떻게 되었을지 보여 주는 **Counterfactual**이 함께 표시됩니다. |
| Hypotheses | 각 가설이 ID, 상태(testing, confirmed, rejected)와 함께 표시됩니다. testing 상태인 가설에는 **Kill** 기준, 즉 그 가설을 배제하게 될 관찰이 있습니다. rejected 상태인 가설은 얻은 **Lesson**을 남긴 채 **Resolved** 아래에 나열됩니다. |
| Evidence | 최근 발견 내용이 턴별(t2, t3…)로 가중치와 함께 표시됩니다. 위쪽 이중 화살표는 직접 관찰, 위쪽 화살표는 뒷받침, 물결은 검증되지 않은 추론, 아래쪽 화살표는 반대 증거를 나타냅니다. 배지에는 그 증거를 만든 도구의 이름이 표시됩니다. |
| Open prediction | 설명이 맞다면 AI가 보게 될 것으로 예상하는 결과로, 아직 확인을 기다리고 있습니다. |
| Fix | 변경 내용과 그 변경을 검증할 방법(**Verify**)입니다. |
| Causal graph | 원인에서 증상까지 이어지는 연결 고리입니다. |

수정이 적용되고 검증되면 패널에 그 결과가 표시됩니다.

<BzJiuchan jieduan="resolved" zhankai />

패널을 숨기려면 <BzWenben jian="featureOptions.entanglement.enable" />를 끄세요(Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />). 조사 자체에는 영향을 주지 않습니다.

## 엄격 검증(실험적 기능) {#strict}

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.experimental" />에는 더 엄격한 변형인 **<BzWenben jian="experimental.entanglementStrict.title" />** 옵션이 있습니다.

- <BzWenben jian="experimental.entanglementStrict.desc" />
- <BzWenben jian="experimental.entanglementStrict.note" />
- <BzWenben jian="experimental.entanglementStrict.cost" />

이 옵션을 켜면 패널에 **<BzWenben jian="causalGate.title" />** 행이 추가됩니다. <BzWenben jian="causalGate.reproduce" /> → <BzWenben jian="causalGate.fix" /> → <BzWenben jian="causalGate.pass" /> 순서로 진행되며, 버그를 재현하는 데 사용한 명령과 확신도의 근거가 함께 표시됩니다.

<BzJiuchan jieduan="fix" yange gaoliang="yange" biaoji="1" />

수정 전에 실패했던 명령이 수정 후에 똑같이 실행되어 통과하면 이 행에 <BzWenben jian="causalGate.proven" />가 표시됩니다. <BzWenben jian="experimental.entanglementStrict.model" />에서 채팅과 다른 모델을 지정해 엄격 모드를 실행할 수 있습니다.

### 휴먼 인 더 루프 {#human-in-the-loop}

엄격 검증을 켜면 **<BzWenben jian="experimental.humanLoop.title" />** 옵션도 켤 수 있습니다. <BzWenben jian="experimental.humanLoop.desc" />

사용자가 확인하기 전까지 AI는 읽기만 합니다. 다음 메시지가 확인된 작업을 이어 가는 내용이면("여전히 실패해요", "계속해 주세요") 다시 묻지 않고 작업을 계속하며, 새 요청이면 먼저 사용자에게 확인합니다.

## 팁 {#tips}

- 증상을 정확하게 알려 주세요. 무엇을 했는지, 무엇을 보았는지, 무엇을 기대했는지를 적습니다. 문제를 재현하는 명령이 있다면 가장 좋은 출발점이 됩니다.
- 수정을 요청하기 전에 AI가 Verify 단계를 마치게 하세요. 원인이 확인되면 변경이 더 작고 안전해집니다.
- 중요한 변경을 믿고 사용하기 전에 패널의 결론과 검증 결과를 확인하세요. 패널은 사용자의 판단을 돕지만, 사용자의 검토를 대신하지는 않습니다.
- 관련 없는 새 문제는 새 대화에서 시작하세요. 그래야 이전 조사가 새 조사와 섞이지 않습니다.

Entanglement와 다른 모드의 비교는 [모드 선택](/mode-selection#entanglement)을 참고하세요.
