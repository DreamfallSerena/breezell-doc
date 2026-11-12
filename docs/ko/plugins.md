---
title: 플러그인
description: Breezell 마켓에서 플러그인을 설치하거나 Breezell API로 직접 만드는 방법.
---

# 플러그인

Breezell 플러그인은 `vscode.breezell`을 함께 제공하는 VS Code 확장입니다. 덕분에 대화, Agent, 모델 선택기, 편집기 자체의 화면 등 Breezell과 직접 연동할 수 있습니다. 플러그인은 Breezell에 로그인한 동안에만 실행되며, 로그아웃하면 꺼집니다.

## 설치와 관리

**Box ▸ 플러그인**을 엽니다. 마켓에는 공개된 모든 플러그인이 나열되며, 검색하고, 카테고리로 걸러 내고, 오픈 소스와 클로즈드 소스를 전환하고, 페이지 단위로 넘겨 볼 수 있습니다. 각 카드에는 「설치」, 「열기」, 사용 스위치, 「제거」가 있습니다.

- **설치됨**: 플러그인마다 한 줄로 상태, 버전, 출처, 라이선스, 식별자와 「창」, 「추가한 항목」, 「권한」 카드를 보여줍니다.
- **개발**: 템플릿으로 플러그인을 만들고, 코드에서 마켓 등록까지의 단계를 안내합니다.
- **로컬 .vsix 설치**: 직접 패키징한 파일을 설치합니다. 체크섬이 공개 버전과 다른 패키지는 설치되지 않습니다.

패널이나 창을 추가하는 플러그인은 Box 사이드바의 「플러그인」 아래에도 나타납니다.

## 플러그인의 종류

| 종류 | 내용 | 예시 |
|---|---|---|
| Pack | 코드 없음: `package.json`에 선언한 스킬, AI 규칙, MCP 서버, 테마 | Starter Pack |
| Panel | Breezell 안에 자체 페이지를 열고 대화를 따라감 | Focus Player |
| AI | 사용자의 대화 모델을 쓰는 명령 | Doc Writer |
| Window | 자체 창. 편집기 없이도 열 수 있음 | Focus Timer |
| Conversation | 대화를 읽고, 메시지를 보내고, 도구 호출을 승인하며, 서브에이전트를 시작하고 메시지를 보내고 닫음 | Chat Mirror |
| Screens | Breezell 자체 화면에 버튼, 페이지, 대체 영역, 코드 펜스, 모드를 추가함 | Desk Pet |
| Companion | 입력창 위에서 AI의 움직임을 따라가는 캐릭터 | Desk Pet |
| Long-running | 끝날 때까지 대화를 이어 가며 한도와 자체 페이지를 가짐 | Goal |

종류는 조합할 수 있습니다. 하나의 플러그인이 스킬, 패널, AI 명령, 창을 함께 제공할 수 있습니다. 설정 페이지, GitHub Release에서 내려받는 데이터, 시스템에 설치하는 구성 요소를 갖춘 큰 예시는 Breezell IME를 참고하세요.

## 플러그인 만들기

Breezell에서 **Box ▸ 플러그인 ▸ 개발**을 열고 식별자와 이름을 입력한 뒤 템플릿(Pack, Panel, AI command, Window, Minimal)과 오픈/클로즈드 소스를 고르고, 폴더를 선택해 새 창에서 엽니다. **F5**를 누르면 실행됩니다.

명령줄에서 만들려면(Node.js 18 이상):

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| 명령 | 하는 일 |
|---|---|
| `npm run build` / `npm run watch` | esbuild로 `src/extension.ts`를 `dist/extension.js`로 묶습니다 |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run validate` | `package.json` 검사 |
| `npm run package:open` | 오픈 소스로 패키징: 소스와 소스 맵도 포함 |
| `npm run package:closed` | 클로즈드 소스로 패키징: 압축된 코드만, 소스와 소스 맵 없음 |
| `npm run submit -- --market` | 패키지를 마켓에 추가 |

## 플러그인이 할 수 있는 일

플러그인은 필요한 권한을 `package.json`에 선언하며, 선언하지 않은 일은 거부됩니다. 대화의 시작과 끝을 아는 것 같은 일상적인 권한은 기본으로 허용됩니다. 대화 모델 사용, 대화 읽기, 메시지 보내기, 도구 호출 승인, 코드나 입력창 읽기, 보내기 전 메시지 수정, 사용자 지정 API 키 읽기처럼 위험한 권한은 플러그인이 처음 사용할 때 물어보고, 답은 기억됩니다.

플러그인은 계정, 플랜, 할당량, 결제, 사용자 지정 API 설정, 권한 대화 상자, 도구 승인, 플러그인 관리 화면에는 접근할 수 없습니다. 사용자의 처리가 필요한 안내는 플러그인 화면 위에 표시되며, Breezell에 추가된 버튼에는 「플러그인 제공: 이름」이 표시됩니다.

### 서브에이전트

1.4.56보다 새로운 Breezell부터 플러그인은 서브에이전트도 다룰 수 있습니다. 서브에이전트는 에이전트 또는 얽힘 모드의 대화가 시작하는 별도의 대화로, 그 대화의 모드를 그대로 쓰고 일을 마치면 보고합니다. `chat.read`가 있는 플러그인은 대화의 서브에이전트를 나열하고, 어떤 대화가 서브에이전트이며 각각 무엇을 하는지 알 수 있습니다. `chat.send`가 있는 플러그인은 작업을 주어 서브에이전트를 시작하고, 메시지를 보내고, 닫을 수 있습니다. 이렇게 플러그인이 보낸 내용은 항상 플러그인의 것으로 표시되며, 사용자나 메인 에이전트의 말로 취급되지 않습니다. 플러그인이 서브에이전트를 시작하거나 닫으면 메인 에이전트에게도 알려집니다. 자세한 내용은 개발자 가이드의 [Subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md#subagents-chatread-chatsend)를 보세요.

## 게시

[BreezellCode 저장소](https://github.com/BreezellCode/BreezellCode)를 포크하고 플러그인을 패키징한 뒤(`npm run package:open` 또는 `npm run package:closed`) `npm run submit -- --market`을 실행하고 pull request를 엽니다. 마켓 검사가 돌고 관리자가 검토합니다. 클로즈드 소스 플러그인은 압축된 코드만 포함합니다.

## 전체 개발자 가이드

`package.json`, 모든 권한, API의 모든 호출, 오류, 한도, 대화, 모델과 제공자, Agent, Breezell의 화면, 창, 재시작, 번역, 보안, 게시, 레시피를 담은 전체 가이드는 저장소에 있습니다.

- [플러그인 개요](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [시작하기](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [API 참조](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [권한](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [대화와 서브에이전트](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md)
- [게시](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

템플릿으로 만든 플러그인에는 AI 스킬(`.agents/skills/breezell-plugin/`)도 함께 들어 있고 이 페이지들을 참고 자료로 쓰므로, AI 어시스턴트도 같은 가이드를 따라 개발할 수 있습니다.
