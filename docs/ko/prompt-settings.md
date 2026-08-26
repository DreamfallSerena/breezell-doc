---
title: 프롬프트 및 스킬 설정
description: 워크스페이스 또는 전역 범위에서 규칙, 메모리, 스킬 및 관련 AI 동작을 설정합니다.
---

# 프롬프트 및 스킬 설정

이 페이지에서는 Breezell이 사용할 지침, 재사용 가능한 지식 및 워크플로를 한곳에서 관리할 수 있습니다.

## 설정 열기

화살표는 오른쪽 상단 도구 모음의 **Rules, Memories & Skills** 버튼을 가리킵니다. 이 버튼은 **New Chat**(+) 버튼 바로 오른쪽에 있습니다.

![프롬프트 및 스킬 설정 버튼](/prompt-settings/prompt-and-skill-settings-button.png)

버튼을 클릭하면 설정 패널이 열립니다.

## 워크스페이스 및 전역 범위

사이드바에서는 설정을 두 가지 범위로 구분합니다.

- **Workspace:** 현재 프로젝트에만 적용됩니다. 설정 파일은 프로젝트의 **.breezell** 디렉터리에 저장되어 워크스페이스와 함께 관리할 수 있습니다.
- **Global:** 모든 워크스페이스에 적용됩니다. 모든 프로젝트에서 사용할 환경설정과 워크플로에 적합합니다.

먼저 범위를 선택한 다음 **Rules**, **Memories**, **Skills** 또는 **Commit**을 선택합니다. 페이지 제목 옆의 배지에서 현재 범위를 확인할 수 있습니다.

## 규칙

규칙은 선택한 범위에서 Breezell이 따라야 하는 사용자 지정 AI 지침입니다. 코딩 규칙, 필수 도구, 응답 형식, 프로젝트 제약 조건 등 지속적으로 적용할 지침을 작성할 수 있습니다.

![워크스페이스 규칙 설정](/prompt-settings/rules-settings.png)

Workspace 규칙은 **{workspace}/.breezell/rules/breezell.md**에 저장됩니다. 구체적이고 서로 충돌하지 않는 지침을 작성하세요. **Clear** 작업은 현재 Rules 범위의 내용을 삭제합니다.

## 메모리

메모리에는 이후 대화에서도 사용할 사실, 환경설정, 결정 사항 및 프로젝트 컨텍스트를 저장합니다. **Memories** 옆의 숫자는 해당 범위에 저장된 항목 수입니다.

![워크스페이스 메모리 편집기](/prompt-settings/memory-settings.png)

한 번에 하나의 명확한 메모리를 입력한 다음 **Save**를 선택하거나 **Ctrl+Enter**를 누릅니다. Workspace 메모리는 **{workspace}/.breezell/memories/workspace_memories.md**에 저장됩니다. 여러 프로젝트에 공통으로 적용할 정보만 Global에 저장하세요.

## 스킬

스킬은 Breezell이 특정 작업이나 워크플로를 수행하도록 하는 재사용 가능한 지침 패키지입니다. 필요한 범위의 **Skills**를 열어 생성하거나 관리할 수 있습니다.

![워크스페이스 스킬 만들기](/prompt-settings/skill-creation.png)

스킬을 만들려면:

1. 소문자와 하이픈만 사용하여 고유한 스킬 이름을 입력합니다.
2. 스킬을 언제, 어떤 목적으로 사용하는지 명확히 설명하는 짧은 설명을 입력합니다.
3. 기본 편집기에 스킬 지침, 절차, 제약 조건 및 예상 출력을 작성합니다.
4. **Create Skill**을 선택합니다.

Workspace 스킬은 `{workspace}/.breezell/skills/<name>/SKILL.md`에 저장됩니다. Breezell이 안정적으로 선택하고 적용할 수 있도록 각 스킬을 하나의 반복 가능한 역할에 집중하세요.

## 커밋 메시지

**Commit**에서는 Breezell이 Git 커밋 메시지를 생성할 때 사용하는 프롬프트를 사용자 지정할 수 있습니다.

![워크스페이스 커밋 메시지 설정](/prompt-settings/commit-message-settings.png)

- **사용자 지정 프롬프트:** 편집기에 내용이 있으면 Breezell의 기본 Conventional Commits 프롬프트를 완전히 대체합니다.
- **범위 우선순위:** Workspace 커밋 프롬프트가 Global 프롬프트보다 우선합니다. 저장소별 규칙은 Workspace에, 여러 프로젝트에서 공유할 기본 설정은 Global에 작성하세요.
- **자동 컨텍스트:** 현재 변경 사항, 브랜치 및 최근 커밋은 Breezell이 계속 모델에 컨텍스트로 제공합니다. 사용자 지정 프롬프트에는 필요한 스타일, 언어, 형식 및 제약 조건만 지정하면 됩니다.
- **기본값 복원:** **Clear**를 선택하면 사용자 지정 내용이 삭제되고 기본 프롬프트가 복원됩니다.

Workspace 커밋 프롬프트는 **{workspace}/.breezell/rules/commit_prompt.md**에 저장됩니다.
