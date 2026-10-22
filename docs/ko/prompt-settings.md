---
title: 프롬프트 및 스킬 설정
description: Breezell에 상시 적용할 지침, 메모리, 재사용 가능한 스킬과 커밋 메시지 스타일을 프로젝트별로 또는 모든 프로젝트에 공통으로 지정합니다.
---

# 프롬프트 및 스킬 설정

Breezell은 AI에 상시 적용되는 네 가지 지침을 **Rules, Memories & Skills** 패널 하나에서 관리합니다.

| | 설명 | 사용 시점 |
| --- | --- | --- |
| **Rules** | AI가 반드시 따라야 하는 지침(예: 코딩 규칙, 답변 언어) | 모든 요청에 적용 |
| **Memories** | 날짜가 붙은 메모. 여러 대화에 걸쳐 유지할 사실과 결정 사항 | 배경 메모로 참고하며, 최신 요청이 우선 |
| **Skills** | 특정 작업을 위한 단계별 플레이북(예: 릴리스 노트 작성) | 작업이 일치하면 AI가 불러옴 |
| **Commit** | AI가 생성하는 Git 커밋 메시지의 형식 | 커밋 메시지를 생성할 때 |

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 패널의 탐색 메뉴는 직접 클릭해 볼 수 있습니다. Rules, Memories, Skills, Commit 같은 레이블은 Breezell에서도 영어로 표시됩니다.
:::

## 패널 열기

채팅 패널 상단의 **Skills & Memory** 버튼(노트 아이콘)을 클릭합니다. 이 버튼은 **New Chat**(+) 버튼과 **Chat History** 버튼 사이에 있습니다.

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" />에서도 열 수 있습니다. 이 페이지의 첫 번째 카드가 <BzWenben jian="box.mcp.openSkillsMemory" />입니다.

## 워크스페이스와 전역

패널 왼쪽에는 두 개의 그룹이 있습니다.

- <BzWenben jian="common.workspace" />: 현재 열려 있는 프로젝트에만 적용됩니다. 파일은 프로젝트의 `.breezell` 폴더에 저장되므로 커밋하여 팀과 공유할 수 있습니다. 폴더가 열려 있지 않으면 이 그룹은 회색으로 비활성화됩니다.
- <BzWenben jian="common.global" />: 이 컴퓨터의 모든 프로젝트에 적용됩니다. 파일은 홈 폴더의 `.breezell`에 저장됩니다.

왼쪽에서 범위와 종류를 선택합니다. 헤더에는 지금 편집 중인 항목이 표시되고, 하단의 경로에는 그 내용이 저장되는 파일이 표시됩니다.

<BzGuize />

패널은 페이지를 전환하거나, 편집기를 벗어나거나, 패널을 닫을 때 저장됩니다. 오른쪽 상단의 <BzWenben jian="rulesMemories.clear" />는 현재 페이지의 내용을 비웁니다. 확인을 위해 두 번 클릭해야 합니다.

## Rules

규칙은 일반 Markdown으로 작성합니다. 서로 모순되지 않는 짧고 구체적인 지침을 작성하세요. 예를 들면 다음과 같습니다.

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| 범위 | 파일 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning 워크스페이스 규칙은 전역 규칙을 대체합니다
열려 있는 프로젝트에 워크스페이스 규칙이 있으면 Breezell은 그 규칙을 보내고 전역 규칙은 제외합니다. 전역 규칙은 워크스페이스 규칙이 없는 프로젝트에서만 사용됩니다. 어떤 프로젝트에 전역 규칙의 일부도 필요하다면 해당 내용을 그 프로젝트의 워크스페이스 규칙에 복사하세요.
:::

폴더가 여러 개인 워크스페이스에서는 모든 폴더의 규칙이 사용됩니다. Breezell은 저장된 파일을 읽으므로 저장하지 않은 초안은 AI에 전달되지 않습니다.

## Memories

메모리는 날짜가 붙은 짧은 메모로, 결정 사항, 선호, 프로젝트 구성 방식 등을 기록합니다. AI도 `update_memory` 도구로 직접 여기에 메모를 추가할 수 있습니다.

Breezell은 메모리를 규칙이 아닌 메모로 취급합니다. 메모리가 최신 요청이나 현재 코드와 맞지 않으면 AI는 요청과 코드를 따르고, 대신 메모리를 업데이트하자고 제안합니다. 항상 지켜야 하는 내용은 Rules에 작성하세요.

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. <BzWenben jian="common.workspace" /> ▸ Memories(또는 <BzWenben jian="common.global" /> ▸ Memories)를 엽니다.
2. <BzWenben jian="rulesMemories.addMemory" />를 클릭합니다.
3. 메모리 하나에 사실 하나만 작성하고 `Ctrl+Enter`를 누릅니다(또는 Save를 클릭합니다).

각 메모리는 날짜가 표시된 카드로 나타납니다. 카드에 마우스를 올리면 삭제할 수 있습니다. 왼쪽 목록의 Memories 옆 숫자는 메모리의 개수입니다.

| 범위 | 파일 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

메모리를 사용하려면 슈퍼 메모리가 포함된 요금제가 필요합니다. 요금제가 없으면 페이지에 <BzWenben jian="superMemory.proRequired" />라는 안내가 표시됩니다. AI가 스스로 수집하는 메모리는 [슈퍼 메모리](/super-memory)를 참고하세요.

## Skills

스킬은 `SKILL.md` 파일이 들어 있는 폴더입니다. Breezell은 켜져 있는 모든 스킬의 이름과 설명을 AI에 제공합니다. 작업이 어떤 설명과 일치하면 AI는 해당 스킬의 전체 지침을 불러와 따릅니다. 따라서 좋은 설명은 스킬을 **언제** 사용해야 하는지 알려 줍니다.

### 스킬 만들기

1. <BzWenben jian="common.workspace" /> ▸ Skills(또는 <BzWenben jian="common.global" /> ▸ Skills)를 열고 <BzWenben jian="skills.newSkill" />을 클릭합니다.
2. 이름을 입력합니다. 소문자와 하이픈만 사용합니다(예: `release-notes`).
3. 스킬의 용도를 한 줄로 설명합니다.
4. 지침을 작성합니다. 단계, 규칙, 기대하는 결과를 적습니다.
5. <BzWenben jian="skills.createSkill" />를 클릭합니다.

<BzGuize fenye="xinjineng" />

| 범위 | 폴더 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

스킬에는 `SKILL.md` 옆에 다른 파일(참고 자료, 스크립트)을 함께 넣을 수 있습니다. 스킬 상세 페이지에 이 파일들이 나열되며, 클릭하면 해당 파일이 열립니다.

### 스킬 가져오기

스킬 목록에 파일을 끌어다 놓습니다: <BzWenben jian="skills.dropZipPrompt" />. `.zip` 하나에 여러 스킬 폴더를 한꺼번에 담을 수 있으며, 단일 `.md` 파일은 파일 이름을 딴 스킬 하나가 됩니다.

### 채팅에서 스킬 사용하기

채팅 입력란 아래 줄에 있는 **Skills** 버튼(레이어 아이콘)을 클릭합니다.

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />: Breezell에 포함된 스킬로, `brainstorming`, `requesting-code-review` 등이 있습니다. 이 스킬들은 <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />의 **Superpowers Skills** 스위치를 따릅니다.
- <BzWenben jian="skills.myTab" />: 사용자의 워크스페이스 스킬과 전역 스킬입니다.
- 스위치로 스킬을 켜거나 끕니다. 꺼진 스킬은 AI에 제공되지 않습니다.
- 화살표 버튼(<BzWenben jian="inputToolbar.referenceSkill" />)은 스킬을 메시지에 추가하므로 AI가 이번 요청에 그 스킬을 사용합니다.

입력란에 `/`를 입력해도 스킬 메뉴가 열립니다.

스킬이나 MCP 서버를 켜고 끄면 프롬프트의 앞부분이 바뀌므로 공급자의 프롬프트 캐시를 잃을 수 있습니다. 대화 도중에 바꾸기보다는 긴 대화를 시작하기 전에 필요한 항목을 설정해 두세요.

## 커밋 메시지

Commit에서는 커밋 메시지를 생성할 때 Breezell이 Git 커밋 메시지를 작성하는 방식을 바꿀 수 있습니다.

<BzGuize fenye="commit" />

- 페이지가 비어 있으면 Breezell의 내장 Conventional Commits 프롬프트를 사용합니다.
- 페이지에 입력한 텍스트는 내장 프롬프트를 완전히 **대체합니다**. Breezell은 여전히 diff, 브랜치, 최근 커밋을 모델에 제공하므로 스타일(언어, 형식, 길이)만 설명하면 됩니다.
- <BzWenben jian="common.workspace" /> 프롬프트가 <BzWenben jian="common.global" /> 프롬프트보다 우선합니다.
- <BzWenben jian="rulesMemories.clear" />를 누르면 내장 프롬프트가 복원됩니다.

| 범위 | 파일 |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## 요약

- Rules: AI가 항상 해야 할 일입니다. 워크스페이스 규칙은 전역 규칙을 대체합니다.
- Memories: 기억해 둘 사실을 카드 하나에 하나씩 기록합니다.
- Skills: 작업이 설명과 일치하면 AI가 불러오는 플레이북입니다. 채팅 입력란 아래에서 켜거나 끌 수 있습니다.
- Commit: 내장 프롬프트를 대체하는 사용자의 커밋 메시지 스타일입니다.
