---
title: 소개
description: Code – OSS 기반 AI 코드 편집기 Breezell을 소개하고, 설치부터 AI의 도움을 받은 첫 변경까지 안내합니다.
---

# 소개

Breezell은 VS Code(Code – OSS)를 기반으로 하는 AI 코드 편집기입니다. 편집기, 확장, 키 바인딩은 익숙한 방식 그대로 동작하며, 그 옆에는 프로젝트를 읽고, 파일을 편집하고, 명령을 실행하고, 도구를 스스로 사용할 수 있는 AI가 함께합니다.

::: tip 이 페이지의 화면 안내
이 가이드의 Breezell 화면은 스크린샷이 아니라 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따르고, 색상은 이 사이트의 라이트 / 다크 전환을 따릅니다. 번호가 붙은 주황색 배지는 이 가이드를 위한 표시일 뿐입니다.
:::

## Breezell 창

<BzChuangti wen="시작할 때 설정 파일을 한 번만 불러오고 캐시해 주세요." da="완료했습니다. 이제 config.ts는 파일을 한 번만 읽고 파싱한 결과를 보관하며, index.ts는 서버가 시작되기 전에 loadConfig()를 호출합니다." />

| | 구성 요소 | 설명 |
| --- | --- | --- |
| 1 | **Box \| Agent** | 창 전체를 **Agent** 페이지(코드와 AI)와 **Box** 페이지(설정과 데이터) 사이에서 전환합니다. |
| 2 | 편집기 | 탭, 파일 탐색기, 검색, Git, 확장을 갖춘 Code – OSS 편집기입니다. |
| 3 | 채팅 | AI와 대화하는 곳입니다. 채팅은 코드 옆에 편집기 탭으로 열 수도 있습니다. |
| 4 | 모드 | 이 대화에서 AI가 어디까지 할 수 있는지를 정하며, 일반 채팅부터 자율 에이전트까지 있습니다. [모드](#modes)를 참고하세요. |
| 5 | 모델 | 답변할 모델과 그 모델의 컨텍스트, 추론, 속도 옵션입니다. |

### Agent와 Box

**Agent**는 작업하는 곳으로, 편집기와 채팅이 나란히 놓입니다.

**Box**는 관리 페이지입니다. 사이드바에는 <BzWenben jian="box.title" />(모델과 공급자, 기능 옵션, 일반 및 언어 설정, MCP와 스킬, 개인정보, 실험적 기능)과 작업을 둘러싼 데이터인 <BzWenben jian="box.review.group" />, <BzWenben jian="box.memory.group" />, <BzWenben jian="box.storage.group" />, <BzWenben jian="box.perf.group" />, <BzWenben jian="box.database.group" />, <BzWenben jian="box.vault.group" />가 있습니다. Box에 있는 동안에도 채팅은 열린 상태로 유지됩니다.

<BzHezi />

## 모드 {#modes}

채팅 입력란 왼쪽 아래의 모드 버튼이 AI가 할 수 있는 일을 정합니다. 모드마다 입력란에 고유한 색이 표시됩니다.

| 모드 | Breezell의 설명 |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement와 Teams는 친구 5명의 도움을 받거나 어떤 유료 플랜이든 이용하면 잠금 해제됩니다. Teams와 DarkSelene은 다른 모드보다 토큰을 훨씬 많이 사용합니다. 어떤 모드를 언제 쓰면 좋은지는 [모드 선택](/mode-selection)에서 설명합니다.

## 모델

Breezell은 모델을 네 종류의 공급자로 나눕니다.

- **Breezell**: Breezell 할당량으로 청구되는 공식 Breezell 모델입니다.
- **로그인**: ChatGPT(Codex), GitHub Copilot, Kimi, Grok, Gemini, DeepSeek, MiniMax, OpenRouter처럼 이미 가지고 있는 계정입니다.
- **API 공급자**: Anthropic, OpenAI, Gemini, DeepSeek처럼 본인 키로 쓰는 각 업체의 공식 API입니다.
- **OpenAI 호환**: 중계 서버, 게이트웨이, 자체 호스팅 프록시용 슬롯으로, 최대 50개까지 둘 수 있습니다.

Breezell 모델을 제외한 모든 모델은 본인의 키나 계정으로 실행됩니다. [사용자 지정 API (BYOK)](/custom-api)에서 Claude 모델을 예로 들어 그 과정을 안내합니다.

## Breezell의 다른 기능

- **슈퍼 메모리**: 대화를 넘나드는 장기 메모리로, 탐색하고 편집할 수 있는 메모리 라이브러리를 제공합니다. [슈퍼 메모리](/super-memory)를 참고하세요.
- **Breezell Mind**: 이전 기록을 작업 노트로 접어 넣어 긴 대화를 예산 안에서 유지하며, 원본 기록은 디스크에 그대로 남습니다.
- **코드 리뷰**: AI가 만든 변경을 검토하는 페이지로, 파일별 diff와 원클릭 되돌리기를 제공합니다.
- **Breezell Browser**: AI가 열고, 읽고, 조작할 수 있는 내장 브라우저입니다.
- **MCP와 스킬**: Model Context Protocol로 외부 도구를 연결하고, 여러 프로젝트에서 스킬을 재사용합니다. [프롬프트 및 스킬 설정](/prompt-settings)을 참고하세요.
- **데이터베이스**: 편집기 안에서 SQLite, MySQL, PostgreSQL, SQL Server, Oracle, MariaDB, MongoDB, Redis에 연결합니다.
- **금고**: 중계 서버 주소와 키를 시스템 키체인에 보관하고, 필요한 곳에 채워 넣습니다.
- **Image Studio**: 이미지와 동영상을 생성합니다.
- **핫 업데이트**: 새 버전을 편집기 안에서 내려받으며, 다시 설치하지 않아도 재시작하면 적용됩니다.

## 시작하기

1. 플랫폼에 맞는 Breezell을 다운로드하여 설치합니다.
2. Breezell 계정에 로그인합니다.
3. 인터페이스 언어를 선택합니다. [언어 설정](/settings-page-language-settings)을 참고하세요.
4. 모델을 고릅니다. Breezell 모델을 바로 사용하거나, [사용자 지정 API (BYOK)](/custom-api)로 본인 키를 가져와 사용합니다.
5. 프로젝트 폴더를 열고, 채팅 입력란 아래에서 모드와 모델을 선택한 다음, 원하는 작업을 설명하고 전송합니다.

> Breezell은 Code – OSS(MIT 라이선스)를 기반으로 합니다. VS Code 및 Visual Studio Code는 Microsoft Corporation의 상표입니다. Breezell은 Microsoft와 제휴 관계가 없으며 Microsoft의 보증을 받지 않았습니다.
