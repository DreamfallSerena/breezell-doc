---
title: 기능 옵션 개요
description: Breezell 기능 옵션 페이지의 모든 스위치(전용 모델, 후속 제안, 도구 권한, 편집기 동작, 알림, 플랜 모드, 웹 검색, 파일 접근)의 기본값과 동작을 설명합니다.
---

# 기능 옵션 개요

**기능 옵션**은 Box에서 각 보조 기능이 어떤 모델로 실행될지, 그리고 에이전트가 스스로 어디까지 작업할 수 있는지를 정하는 페이지입니다. 이 페이지는 <BzWenben jian="featureOptions.group.models" />, <BzWenben jian="featureOptions.group.execution" />, <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />의 다섯 그룹으로 구성됩니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 모든 스위치와 메뉴는 Breezell의 기본값으로 시작하며, 직접 클릭해 행이 어떻게 바뀌는지 확인할 수 있습니다.
:::

## 기능 옵션 열기

1. Box를 엽니다. 제목 표시줄 전환 버튼에서 **Box** 쪽을 클릭하거나, 명령 팔레트에서 **Breezell: Open Settings**를 실행합니다.
2. 왼쪽의 <BzWenben jian="box.title" /> 그룹에서 <BzWenben jian="tab.featureOptions" />을 클릭합니다.

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

변경 사항은 바꾸는 즉시 저장되며 모든 워크스페이스에 적용됩니다. 특정 옵션으로 바로 이동하려면 Box 사이드바 상단의 검색창에 옵션 이름의 일부를 입력합니다. Breezell이 해당 행으로 스크롤하고 강조 표시합니다.

자동 완성은 이 페이지에 없습니다. 자동 완성의 스위치, 모델, 프로토콜은 별도 페이지인 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />에 있습니다.

## 모델

<BzWenben jian="featureOptions.dedicatedModels.desc" /> 이 그룹의 모델 행은 모두 같은 방식으로 동작합니다.

- 스위치 **꺼짐**(기본값): 행에 <BzWenben jian="models.analysisModel.followChat" />가 표시되고, 해당 기능은 채팅 입력창 아래에서 선택한 모델을 사용합니다.
- 스위치 **켜짐**: 행에 <BzWenben jian="models.analysisModel.custom" />이 표시되고 그 아래에 모델 선택기가 나타납니다. 채팅에서 어떤 모델을 쓰든 해당 기능은 항상 여기서 고른 모델을 사용합니다.

나중에 전용 모델이 <BzWenben jian="tab.models" />에서 삭제되거나 꺼지면, 해당 기능은 별도 알림 없이 채팅 모델로 돌아갑니다.

### 전용 모델

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| 행 | 용도 |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | 에이전트가 코드 탐색과 분석을 맡기려고 실행하는 서브에이전트 |
| <BzWenben jian="models.teamDesignModel.title" /> | Teams 모드에서 UI, 비주얼, 페이지 다듬기를 맡는 팀원 |
| <BzWenben jian="models.teamBugfixModel.title" /> | Teams 모드에서 버그를 찾고 재현하고 수정하는 팀원 |
| <BzWenben jian="models.scmModel.title" /> | 소스 제어에서 생성하는 커밋 메시지 |

흔히 쓰는 구성은 채팅에는 `claude-opus-5`를 쓰고, 보조 작업에는 더 작은 모델을 지정하는 것입니다. 위 예에서는 <BzWenben jian="models.scmModel.title" />가 <BzWenben jian="models.scmModel.custom" />로 전환되어 `claude-haiku-5-5`로 실행되므로, 커밋 메시지를 더 빠르고 저렴하게 작성합니다. 메시지의 스타일은 [프롬프트 및 스킬 설정](/prompt-settings#commit-message)의 Commit 페이지에서 정합니다.

### 후속 제안

<BzWenben jian="featureOptions.followUp.desc" /> 기본적으로 꺼져 있습니다.

| 옵션 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | 꺼짐 | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 각 답변 아래에 제안 카드를 2개, 3개 또는 4개 표시합니다. |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" />은 제안을 즉시 보내고, <BzWenben jian="featureOptions.followUp.clickInsert" />는 먼저 편집할 수 있게 합니다. <BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | `claude-haiku-5-5`처럼 작고 빠른 모델이면 충분합니다. |

### 프롬프트 최적화

<BzWenben jian="featureOptions.promptOptimize.desc" /> 이 카드에는 모델 행인 <BzWenben jian="models.promptOptimizeModel.title" />만 있습니다.

### 선택 도우미

채팅 답변에서 텍스트를 선택하면 인용과 복사가 있는 작은 막대가 나타납니다. 선택 도우미는 여기에 번역과 검색을 추가합니다.

| 옵션 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | 켜짐 | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | 선택 영역 <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> 또는 <BzWenben jian="featureOptions.selectionAssist.pillAbove" />에 표시합니다. <BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | 켜짐 | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | 켜짐 | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | 켜짐 | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | 번역에 사용하는 모델입니다. |

## 실행

<BzWenben jian="featureOptions.toolPermissions.desc" /> 스위치가 꺼져 있으면 에이전트는 해당 종류의 작업 앞에서 멈추고, 채팅에서 승인하거나 거부할 때까지 기다립니다. 파일 읽기, 코드 검색, 웹 검색처럼 읽기만 하는 도구는 승인을 기다리지 않습니다.

<BzGongneng zu="execution" />

| 스위치 | 기본값 | 대상 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | 켜짐 | 파일과 폴더의 편집, 작성, 이름 변경, 삭제 |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | 꺼짐 | 터미널 명령, 그리고 에이전트가 작성해 실행하는 스크립트 |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | 켜짐 | Breezell 데이터베이스 도구로 구문을 실행하고 연결이나 데이터베이스를 만드는 작업 |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | 꺼짐 | 이미지 생성 |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | 켜짐 | 직접 추가한 MCP 서버의 도구 |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | 꺼짐 | Teams 모드에서 <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> |

::: warning 터미널 자동 승인
<BzWenben jian="featureOptions.toolPermissions.terminal" />을 켜면 에이전트는 설치, 빌드, 파일 삭제 등 스스로 판단한 명령을 묻지 않고 실행합니다. 되돌아갈 수 있는 깨끗한 Git 상태가 있는 경우처럼 안전한 프로젝트에서만 켜세요.
:::

<BzWenben jian="featureOptions.toolPermissions.edits" />을 켜도, 아래의 <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" />까지 켜지 않는 한 편집 내용은 검토할 수 있는 변경 사항으로 표시됩니다.

## 편집기

<BzGongneng zu="editor" />

### 코드 동작

| 스위치 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | 켜짐 | 편집할 때마다 그 편집으로 생긴 린트 오류를 결과와 함께 AI에 다시 보내므로, AI가 같은 턴에서 오류를 수정합니다. |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | 꺼짐 | AI의 편집이 편집기에서 수락 / 거부 단계 없이 바로 유지됩니다. |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | 꺼짐 | AI가 파일을 편집하면 해당 파일을 편집기에서 엽니다. |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | 켜짐 | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | 꺼짐 | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | 켜짐 | 편집기에서 코드를 선택하면 옆에 작은 버튼이 나타나며, 이 버튼으로 코드를 채팅에 추가하거나 편집할 수 있습니다. |

### 알림

| 옵션 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | 켜짐 | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | 꺼짐 | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | 꺼짐 | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | 꺼짐 | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | 꺼짐 | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

소리를 고르면 한 번 재생되며, 소리 스위치 중 하나를 켤 때도 마찬가지입니다. 백그라운드 스위치나 현재 대화 스위치를 하나 이상 켜기 전까지는 소리가 나지 않습니다.

## 지능

<BzGongneng zu="intelligence" />

### 컨텍스트 관리

| 옵션 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | 꺼짐 | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | 모델이 공급자의 내장 웹 검색을 사용하게 합니다. 아래를 참고하세요. |

<BzWenben jian="featureOptions.nativeWebSearch.title" />은 공급자 자체 검색을 요청에 언제 추가할지 정합니다. Breezell은 평소 자체 웹 도구로 검색하며, 이 도구를 쓰려면 로그인해야 합니다.

| 선택 | 동작 |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Breezell의 검색 도구를 사용합니다. 이 도구를 실행할 수 없을 때(예: 로그인하지 않은 경우)에만 모델이 대신 공급자 검색을 사용합니다. |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | Breezell 도구와 함께 공급자 검색이 모든 요청에 추가됩니다. |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | 공급자 검색을 사용하지 않습니다. |

내장 검색은 일부 공급자에만 있습니다. Anthropic(Claude), OpenAI, API 키를 사용하는 Gemini, xAI, Perplexity, OpenRouter, Qwen, Zhipu입니다. 다른 모델에서는 이 옵션이 아무 효과가 없습니다.

### 모드 및 스킬

| 스위치 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | 켜짐 | <BzWenben jian="featureOptions.superpowers.desc" /> 이 스킬들은 [프롬프트 및 스킬 설정](/prompt-settings#use-skills-in-a-chat)에 나열된 내장 스킬입니다. |
| <BzWenben jian="featureOptions.entanglement.enable" /> | 켜짐 | <BzWenben jian="featureOptions.entanglement.enableDesc" /> [Entanglement 모드](/entanglement-mode-overview)를 참고하세요. |

## 시스템

<BzGongneng zu="system" />

### 외부 파일 접근

| 스위치 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | 켜짐 | 도구가 열려 있는 워크스페이스 밖의 파일(예: 라이브러리 소스, 홈 폴더의 설정 파일)을 읽을 수 있습니다. |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | 켜짐 | 도구가 열려 있는 워크스페이스 밖의 파일을 변경할 수 있습니다. 에이전트가 프로젝트 안의 파일만 다루게 하려면 이 스위치를 끄세요. |

### 터미널 네트워크 속도

| 스위치 | 기본값 | 동작 |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | 켜짐 | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | 꺼짐 | Windows 전용입니다. <BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## 요약

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />에서 설정하며, 변경 사항은 즉시 저장됩니다.
- <BzWenben jian="featureOptions.group.models" />: 보조 기능은 전용 모델을 지정하기 전까지 채팅 모델을 따릅니다.
- <BzWenben jian="featureOptions.group.execution" />: 에이전트가 묻지 않고 할 수 있는 작업입니다. 터미널 명령은 기본적으로 확인을 요청합니다.
- <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />: 린트 오류 수정, 알림, 플랜 카드, 웹 검색, 슈퍼파워 스킬, 워크스페이스 밖의 파일 접근입니다.
