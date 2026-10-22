---
title: 대화 상자 개요
description: Breezell 채팅 패널의 전체 안내입니다. 메시지 작성과 전송, 모드, 모델, @ 및 / 메뉴, 트레이 버튼, 컨텍스트 사용량과 압축, 대기 중인 메시지, 되돌리기를 다룹니다.
---

# 대화 상자 개요

Breezell의 **Agent** 쪽에 있는 채팅 패널은 AI와 대화하는 곳입니다. 여기서 요청을 작성하고, AI의 작업 방식과 사용할 모델을 고르고, 컨텍스트를 첨부하고, 진행 상황을 지켜봅니다. 이 페이지에서는 채팅 패널의 모든 부분을 차례로 살펴봅니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 일부 화면은 실제 패널처럼 반응합니다. 모드 메뉴, Context 목록, 보낸 메시지에 마우스를 올려 보고, 스위치와 별을 클릭해 보세요.
:::

## 채팅 패널의 구성

<BzLiaotian biaotilan quanbiao wen="설정 페이지에 다크 모드 토글을 추가해 주세요." da="SettingsPage.vue에 페이지의 테마 클래스를 전환하고 선택한 값을 기억하는 토글을 추가하겠습니다. 먼저 설정이 어떻게 저장되는지 살펴보겠습니다." />

| | 구성 요소 | 기능 |
| --- | --- | --- |
| 1 | 헤더 버튼 | **New Chat**(+), **Skills & Memory**(노트 아이콘), **Chat History**(시계 아이콘)입니다. Skills & Memory는 [Rules, Memories & Skills](/prompt-settings) 패널을 엽니다. |
| 2 | 입력창 | 메시지를 작성하는 곳입니다. 비어 있을 때는 <BzWenben jian="chat.input.placeholder" /> 문구가 표시됩니다. |
| 3 | 모드 | 이 메시지에서 AI가 일하는 방식입니다. 채팅만 하기, 계획, 읽기 전용 분석, 파일 편집 등이 있습니다. [모드 선택](#mode)을 참고하세요. |
| 4 | 모델 | 답변하는 모델입니다. 이름 뒤에 컨텍스트 창과 추론 강도가 표시됩니다(예: `200K Medium`). [모델 선택](#model)을 참고하세요. |
| 5 | 컨텍스트 링 | 컨텍스트 창이 얼마나 찼는지 보여 줍니다. 클릭하면 세부 정보를 보고 수동으로 압축할 수 있습니다. [컨텍스트 사용량](#context)을 참고하세요. |
| 6 | **@** | 파일, 폴더, 이전 채팅을 메시지에 추가합니다. [@로 컨텍스트 추가](#mention)를 참고하세요. |
| 7 | 보내기 | 메시지를 보냅니다. AI가 답변하는 동안에는 중지 버튼으로 바뀝니다. |
| 8 | 트레이 | 입력창 아래의 버튼 줄입니다. Breezell Browser, 첨부, 빠른 문구, 프롬프트 최적화, MCP, 스킬 버튼이 있습니다. [트레이](#tray)를 참고하세요. |

## 메시지 작성과 전송 {#send}

1. 입력창을 클릭하고 요청을 작성합니다. 원하는 작업과 위치(예: 파일이나 페이지)를 함께 적습니다.
2. `Enter`를 눌러 보냅니다. `Shift+Enter`를 누르면 보내지 않고 줄을 바꿉니다.

텍스트를 입력하면 보내기 버튼이 회색에서 흰색으로 바뀝니다.

<BzLiaotian shuru="설정 페이지에 다크 모드 토글을 추가해 주세요." />

이미지를 추가하려면 입력창에 붙여넣거나 끌어다 놓습니다. 다른 파일은 트레이의 클립 아이콘으로 추가합니다. 편집기에서 코드를 선택하고 `Ctrl+L`(macOS에서는 `Cmd+L`)을 누르면 선택한 부분이 채팅에 추가됩니다.

### AI가 답변하는 동안

보내기 버튼이 사각형이 있는 흰색 중지 버튼으로 바뀝니다. 클릭하면 답변이 중지됩니다.

그동안에도 계속 작성할 수 있습니다. 답변이 진행되는 동안 보낸 메시지는 사라지지 않습니다. 입력창 위의 <BzWenben jian="chat.queue.queued" canshu="2" /> 아래에서 대기하다가 AI가 작업을 마치면 차례로 전송됩니다.

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="README도 업데이트해 주세요|그다음 테스트를 실행해 주세요" wen="설정 페이지에 다크 모드 토글을 추가해 주세요." da="SettingsPage.vue에 페이지의 테마 클래스를 전환하는 토글을 추가하겠습니다." />

대기 중인 각 메시지에는 다음 버튼이 있습니다. <BzWenben jian="chat.queue.moveUp" />와 <BzWenben jian="chat.queue.moveDown" />(메시지가 두 개 이상일 때), <BzWenben jian="common.edit" />(입력창으로 되돌림), <BzWenben jian="chat.queue.sendNow" />(현재 답변을 중지하고 이 메시지를 보냄), <BzWenben jian="common.delete" />입니다. 끌어다 놓아 순서를 바꿀 수도 있습니다. 대기 중인 메시지를 보낼 수 없으면 그 아래에 이유가 표시됩니다. 예: <BzWenben jian="chat.queue.notSent.turnError" />

## 모드 선택 {#mode}

입력창 왼쪽 아래의 모드 캡슐을 클릭합니다. 모드에 마우스를 올리면 그 모드가 하는 일을 읽을 수 있습니다.

<BzLiaotian tanchu="moshi" moshi="agent" />

| 모드 | 요약 |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent가 기본 모드이며 대부분의 작업에 적합합니다. 선택한 모드는 다음 메시지부터 적용됩니다. 다른 모드로 메시지를 보내면 대화에 <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> 줄이 표시되어 바뀐 지점을 알려 줍니다.

Entanglement와 Teams는 친구 다섯 명이 잠금 해제를 도와주거나 요금제를 하나라도 구매하기 전까지 잠겨 있습니다. 잠긴 모드는 메뉴에 자물쇠가 표시되고, 설명에 진행 상황이 나타납니다.

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## 모델 선택 {#model}

모드 옆의 모델 이름을 클릭합니다. 모델 선택기에는 검색창, 모델 소스, 모델별 설정(컨텍스트 창, 추론 강도, Fast)이 있습니다. 사용법은 [사용자 지정 API (BYOK)](/custom-api#use-claude-in-chat)에서 단계별로 설명합니다.

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

모델 이름 뒤의 텍스트는 이 설정을 짧게 요약한 것입니다. `200K Medium`은 200K 컨텍스트 창과 Medium 추론 강도를, `1M High Fast`는 1M 창, High 강도, Fast를 뜻합니다. [Context, Reasoning, Fast](/custom-api#context-reasoning-and-fast)를 참고하세요.

## @로 컨텍스트 추가 {#mention}

입력창에 `@` 기호를 입력하거나 **@** 버튼을 클릭합니다. 입력창 바로 위에 메뉴가 열립니다.

<BzLiaotian tanchu="tiji" shuru="@" />

| 항목 | 추가되는 내용 |
| --- | --- |
| files | 워크스페이스의 파일입니다. |
| folders | 폴더 전체입니다. |
| chats | 이전 대화입니다. AI는 해당 대화 기록의 위치만 전달받고 필요할 때 읽으므로, 여러 채팅을 함께 추가해도 컨텍스트가 가득 차지 않습니다. |

카테고리를 먼저 열 필요는 없습니다. `@` 바로 뒤에 입력하면 Breezell이 파일과 폴더를 함께 검색합니다. 열려 있는 파일이 맨 위에 오고 `Recent` 표시가 붙습니다. 화살표 키와 `Enter`를 사용하거나 클릭해 선택합니다.

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

files와 folders 안에서는 메뉴 헤더의 칩으로 <BzWenben jian="inputToolbar.filterOn" />과 <BzWenben jian="inputToolbar.filterOff" />을 전환합니다(<BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />). 일치하는 항목이 없으면 Breezell은 커밋하지 않은 변경 사항이 있는 파일을 `Changed` 표시와 함께 제안합니다.

선택한 항목은 메시지 안에 태그로 들어가므로, AI는 사용자가 가리키는 파일, 폴더, 채팅이 정확히 무엇인지 알 수 있습니다.

## /로 스킬과 빠른 문구 사용 {#slash}

입력창 맨 앞에 `/`를 입력하면 [빠른 문구](#quick-phrases)와 스킬이 한 목록에 표시됩니다.

<BzLiaotian tanchu="xiegang" shuru="/" />

- 빠른 문구를 고르면 그 문구에 설정된 동작이 실행됩니다. 텍스트를 삽입하거나, 보내거나, 터미널에서 실행합니다.
- 스킬을 고르면 메시지에 추가되므로 AI가 이번 요청에 그 스킬을 사용합니다.
- 꺼져 있는 스킬은 회색으로 표시되고 행에 스위치가 있습니다. 여기서 바로 켜서 사용할 수 있습니다.

## 입력창 아래의 트레이 {#tray}

입력창 아래의 점선 트레이에는 버튼 여섯 개가 있습니다. 버튼에 마우스를 올리면 이름이 표시됩니다.

| 버튼 | 기능 |
| --- | --- |
| Breezell Browser(지구본 아이콘) | Breezell 내장 브라우저의 패널을 엽니다. |
| <BzWenben jian="inputToolbar.attach" />(클립 아이콘) | 컴퓨터의 파일을 메시지에 첨부합니다. |
| <BzWenben jian="inputToolbar.quickPhrases" /> | 저장해 둔 문구와 명령입니다. |
| <BzWenben jian="inputToolbar.optimizePrompt" />(마법 지팡이 아이콘) | 작성한 내용을 더 명확한 프롬프트로 다시 씁니다. |
| MCP | MCP 서버를 켜거나 끕니다. |
| <BzWenben jian="inputToolbar.skills" />(레이어 아이콘) | 스킬을 켜거나 끕니다. |

MCP나 스킬 버튼에 작은 초록색 점이 있으면 하나 이상이 켜져 있다는 뜻입니다. 채팅 패널이 좁으면 Breezell Browser는 **⋯**(<BzWenben jian="inputToolbar.more" />) 메뉴 안으로 이동합니다. Chat History에서 대화를 인용하면 트레이에 파란색 <BzWenben jian="inputToolbar.referenced" /> 버튼이 나타나며, 클릭하면 인용이 해제됩니다.

### Breezell Browser {#browser}

Breezell Browser는 Breezell에 내장된 브라우저입니다. 페이지는 코드 바로 옆의 편집기 탭에서 열립니다.

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- 열린 브라우저가 없으면 패널에 <BzWenben jian="browserPanel.readyToLaunch" />이 표시됩니다. <BzWenben jian="browserPanel.open" />를 클릭하거나, 입력란(<BzWenben jian="browserPanel.searchPlaceholder" />)에 링크나 검색어를 입력하고 `Enter`를 누릅니다.
- 페이지가 열려 있으면 패널에 탭으로 나열됩니다. 탭을 클릭하면 해당 탭으로 전환되고, 행의 버튼으로 음소거하거나 닫을 수 있습니다. 헤더 버튼은 모든 탭을 음소거합니다.

AI가 사용하는 브라우저 도구는 기본적으로 화면에 보이지 않게 실행됩니다. 작업 과정을 보려면 [기능 옵션](/feature-options-overview)에서 <BzWenben jian="featureOptions.codeBehavior.browserHeadless" />를 끄세요.

### 빠른 문구 {#quick-phrases}

빠른 문구는 자주 사용하는 텍스트와 명령입니다. 버튼을 누르면 자주 씀 목록이 열리며, 항목을 클릭해 사용합니다.

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

<BzWenben jian="quickPhrases.manage" />를 클릭하면 관리 화면이 열립니다. 왼쪽에는 모든 문구가, 오른쪽에는 자주 씀 목록이 표시되며, 버튼에 나타나는 것이 바로 이 목록입니다.

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- 문구의 별을 클릭하거나, 문구를 선택한 다음 가운데 화살표를 클릭하면 <BzWenben jian="quickPhrases.favorites" />에 추가됩니다. 오른쪽으로 끌어다 놓아도 됩니다. 자주 씀 목록의 **×**는 문구를 자주 씀에서만 제거합니다.
- 자주 씀 목록의 연필 아이콘으로 문구를 편집하고, 왼쪽의 휴지통 아이콘으로 문구를 삭제합니다.
- 상단의 <BzWenben jian="common.add" />를 누르면 새 문구 편집기가 열립니다.

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

모든 문구에는 이름, 내용, 동작 유형이 있습니다.

| 유형 | 문구를 선택하면 |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | 내용이 입력창에 들어가므로, 보내기 전에 수정할 수 있습니다. |
| <BzWenben jian="quickPhrases.send" /> | 내용이 바로 메시지로 전송됩니다. |
| <BzWenben jian="quickPhrases.terminal" /> | 내용이 터미널에서 명령으로 실행됩니다. 선택 사항인 <BzWenben jian="quickPhrases.workingDirectory" />로 명령을 실행할 폴더를 지정합니다. |

빠른 문구는 [`/` 메뉴](#slash)에도 표시됩니다.

### 프롬프트 최적화 {#optimize}

대략적인 요청을 작성한 다음 마법 지팡이 아이콘을 클릭합니다. Breezell이 요청을 더 명확한 프롬프트로 다시 쓰고 결과를 먼저 보여 줍니다. 아무것도 전송되지 않습니다.

<BzLiaotian tanchu="youhua" shuru="설정 페이지 다크 모드 되게 해줘" youhuawen="설정 페이지에 다크 모드 토글을 추가해 주세요. 새로 고침 후에도 유지되도록 선택한 값을 저장하고, 루트 요소의 테마 클래스를 전환하는 방식으로 적용하며, 사용자가 모드를 고르기 전까지는 시스템 설정을 따르게 해 주세요." tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" />를 누르면 새 텍스트가 입력창에 들어갑니다. 텍스트를 수정하기 전까지는 마법 지팡이를 다시 클릭하면 <BzWenben jian="promptOptimize.undo" />로 동작하여 원래 텍스트가 돌아옵니다.
- <BzWenben jian="promptOptimize.retrySame" />는 다른 버전을 작성하고, <BzWenben jian="promptOptimize.dismiss" />는 패널을 닫습니다.
- 입력창이 비어 있으면 마법 지팡이에는 <BzWenben jian="inputToolbar.optimizePromptEmpty" />만 표시됩니다.

다시 쓰기에는 채팅 모델이 사용됩니다. [기능 옵션](/feature-options-overview)에서 전용 모델(<BzWenben jian="models.promptOptimizeModel.title" />)을 지정하면 그 모델을 사용합니다.

### MCP {#mcp}

MCP 패널에는 MCP 서버가 상태와 함께 나열됩니다. 초록색은 연결됨, 빨간색은 오류, 회색은 꺼져 있거나 시작되지 않은 상태입니다.

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- 스위치로 AI가 사용할 서버를 켜거나 끕니다. 헤더에는 켜져 있는 서버 수가 표시됩니다(예: `2/3`).
- 화살표(<BzWenben jian="inputToolbar.referenceMcpServer" />)는 서버를 메시지에 추가하므로 AI가 이번 요청에 그 서버의 도구를 사용합니다.
- **+**(<BzWenben jian="mcp.addServer" />)는 `mcp.json` 파일을 엽니다. 서버는 이 파일에서 추가합니다.

### 스킬 {#skills}

스킬 버튼도 같은 방식으로 스킬을 다루며, <BzWenben jian="skills.builtinTab" />과 <BzWenben jian="skills.myTab" /> 탭이 있습니다. [채팅에서 스킬 사용하기](/prompt-settings#use-skills-in-a-chat)를 참고하세요.

::: warning 긴 대화 전에 MCP 서버와 스킬을 켜거나 끄세요
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## 컨텍스트 사용량과 압축 {#context}

**@** 옆의 링은 대화가 모델의 컨텍스트 창을 사용할수록 채워집니다. 마우스를 올리면 `47.0% - 94.2K / 200.0K context used`처럼 수치가 표시되고, 클릭하면 **Context** 패널이 열립니다.

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

막대와 목록은 사용된 토큰을 종류별로 나누어 보여 줍니다. 행에 마우스를 올리면 막대에서 해당 부분이 강조됩니다.

| 범주 | 집계 대상 |
| --- | --- |
| System prompt | 현재 모드에 대한 Breezell의 지침 |
| Tools | AI가 호출할 수 있는 도구의 설명 |
| Rules | 워크스페이스 규칙 또는 전역 규칙 |
| Memories | 요청과 함께 전송되는 메모리 |
| Skills | 켜져 있는 스킬 목록 |
| MCP | 켜져 있는 MCP 서버의 도구 |
| Subagents | 서브에이전트가 수행한 작업 |
| Conversation | 사용자의 메시지, 답변, 도구 결과 |

### 자동 압축과 수동 압축

대화가 사용 가능한 컨텍스트 창의 약 90%에 도달하면 Breezell이 자동으로 압축합니다. 이전 메시지가 요약으로 대체되고 대화는 그대로 이어집니다. 따로 할 일은 없습니다.

미리 공간을 확보하려면 Context 패널에서 <BzWenben jian="contextUsage.compress" />을 클릭합니다(<BzWenben jian="contextUsage.compressTooltip" />). 압축이 진행되는 동안 버튼에는 <BzWenben jian="contextUsage.compressing" />과 백분율이 표시됩니다. 완료되면 패널에 다음 중 하나가 표시됩니다.

| 메시지 | 의미 |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | 완료되었습니다. |
| <BzWenben jian="contextUsage.nothingToCompress" /> | 대화가 너무 짧아 압축할 수 없습니다. |
| <BzWenben jian="contextUsage.errorBusy" /> | 먼저 답변을 중지한 다음 압축하세요. |
| <BzWenben jian="contextUsage.errorNoModel" /> | 먼저 입력창 아래에서 모델을 선택하세요. |

컨텍스트 창이 더 작은 모델로 전환하면, Breezell이 대화를 새 창에 맞추는 동안 링에 <BzWenben jian="contextUsage.converting" />이 표시될 수 있습니다.

## 보낸 메시지 편집 또는 되돌리기 {#edit}

보낸 메시지에 마우스를 올립니다. 메시지 왼쪽 위에 연필 아이콘이, 오른쪽에 되돌리기 화살표가 나타납니다.

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="설정 페이지에 다크 모드 토글을 추가해 주세요." da="완료했습니다. 이제 SettingsPage.vue에 다크 모드 스위치가 있고, 선택한 값이 저장되며, 직접 바꾸기 전까지 페이지가 시스템 설정을 따릅니다." />

- **편집**: 메시지나 연필 아이콘을 클릭하고 텍스트를 수정한 다음 다시 보냅니다.
- **되돌리기**(<BzWenben jian="editor.revertToThisPoint" />): 화살표를 클릭하고 확인합니다. 이후의 메시지가 삭제되고, 그 메시지들이 변경한 파일은 해당 메시지 시점의 상태로 돌아갑니다.

<BzLiaotian huigun wen="설정 페이지에 다크 모드 토글을 추가해 주세요." da="완료했습니다. 이제 SettingsPage.vue에 다크 모드 스위치가 있고, 선택한 값이 저장되며, 직접 바꾸기 전까지 페이지가 시스템 설정을 따릅니다." />

되돌리기는 편집기에서 실행 취소할 수 없으므로, <BzWenben jian="editor.revertConfirmDo" />를 클릭하기 전에 대화 상자의 내용을 확인하세요. 이 대화에서 AI가 아직 답변하는 중이면 화살표가 흐리게 표시됩니다. 먼저 답변을 중지하세요.

## 키보드 단축키 {#shortcuts}

| 키 | 동작 |
| --- | --- |
| `Enter` | 메시지 보내기 |
| `Shift+Enter` | 줄 바꿈 |
| `@` | 멘션 메뉴 열기 |
| `/`(입력창 맨 앞에서) | 스킬과 빠른 문구 열기 |
| `↑` `↓` 다음 `Enter` | 열린 메뉴에서 이동하고 선택하기 |
| `Esc` | 열린 패널이나 메뉴 닫기 |
| `Ctrl+L` / `Cmd+L` | 편집기에서 선택한 부분을 채팅에 추가 |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | 새 채팅 시작 |

## 사용 팁

- 대부분의 작업에는 Agent 모드가 적합합니다. 먼저 계획을 세우거나 편집 없이 분석하는 등 특정 워크플로가 필요할 때만 모드를 바꾸세요.
- `@` 기호로 AI에게 정확한 위치를 알려 주세요. 위치를 길게 설명하는 것보다 파일이나 폴더를 지정하는 편이 낫습니다.
- 오래 이어지는 대화는 컨텍스트 링으로 관리하세요. 압축은 자동으로 실행되며, 직접 공간을 확보하고 싶을 때는 수동 압축을 사용할 수 있습니다.
- 반복해서 입력하는 요청은 빠른 문구로 저장하고, 프로젝트 명령은 터미널 유형으로 실행하세요.
- MCP 서버와 스킬은 대화 도중이 아니라 긴 대화를 시작하기 전에 설정하세요.
