---
title: 언어 설정
description: Box에서 Breezell 인터페이스의 언어를 변경하고, 편집기 자체의 표시 언어도 변경합니다.
---

# 언어 설정

Breezell 인터페이스는 <BzWenben jian="general.language.en" />, <BzWenben jian="general.language.ja" />, <BzWenben jian="general.language.ko" />, <BzWenben jian="general.language.es" />, <BzWenben jian="general.language.ptBR" />, <BzWenben jian="general.language.ru" />, <BzWenben jian="general.language.zh" />, <BzWenben jian="general.language.zhTW" />의 8개 언어로 제공됩니다. Breezell을 설치할 때 언어를 선택할 수 있으며, 이후에도 언제든지 변경할 수 있습니다.

::: tip 이 페이지의 화면 안내
아래의 Breezell 화면은 Breezell 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. 화면의 텍스트는 이 페이지의 언어를 따릅니다. 이 페이지의 언어 메뉴는 직접 조작할 수 있으며, Breezell에서와 마찬가지로 해당 화면의 언어를 전환합니다.
:::

## 두 가지 언어 설정

Breezell 창은 두 개의 계층으로 이루어져 있으며, 계층마다 별도의 언어 설정이 있습니다.

| 계층 | 적용 범위 | 변경 위치 |
| --- | --- | --- |
| **Breezell 인터페이스** | Box, 채팅, 모델 및 모드 선택기, 그 밖의 Breezell 패널 | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **편집기 표시 언어** | Code – OSS에서 온 부분: 메뉴 모음, 명령 팔레트, 기본 제공 설정 편집기와 키보드 단축키 편집기 | `Configure Display Language`와 언어 팩 |

매일 사용하는 화면의 대부분은 Breezell 인터페이스이므로, 보통은 첫 번째 설정만으로 충분합니다.

## Breezell 인터페이스 언어 변경

### 1. Box 열기

제목 표시줄 왼쪽의 전환 버튼에서 **Box**를 클릭합니다. 오른쪽 위의 톱니바퀴 메뉴에서 <BzWenben jian="box.title" />을 선택하거나, 명령 팔레트에서 `Breezell: Open Settings`를 실행해도 됩니다.

<BzBiaotilan gaoliang="box" />

### 2. 일반 & 언어 열기

Box 사이드바에서 <BzWenben jian="box.title" /> 그룹을 열고 <BzWenben jian="tab.general" />를 클릭합니다.

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. 언어 선택

페이지의 첫 번째 카드는 <BzWenben jian="general.language.title" />입니다. 해당 행 오른쪽의 메뉴를 열고 언어를 선택합니다. 아래에서 직접 사용해 보세요.

<BzChangguiye gaoliang="yuyan" biaoji="3" />

선택한 뒤 어떻게 되는지는 카드 설명에 나와 있습니다. <BzWenben jian="general.language.desc" />

각 언어는 해당 언어 고유의 이름으로 표시되므로, 지금 인터페이스가 읽을 수 없는 언어로 되어 있더라도 원하는 언어를 언제든 찾을 수 있습니다.

## 편집기 표시 언어 변경

메뉴 모음, 명령 팔레트 등 Code – OSS에서 온 부분은 편집기의 표시 언어를 따릅니다. 변경하려면 다음과 같이 합니다.

1. `Ctrl+Shift+P`(macOS에서는 `Cmd+Shift+P`)를 눌러 명령 팔레트를 엽니다.
2. `Configure Display Language`를 실행합니다.
3. 사용할 언어를 선택합니다. 아직 설치되지 않은 언어라면 설치를 선택하세요. Breezell이 확장 마켓플레이스에서 언어 팩을 다운로드합니다.
4. 다시 시작하라는 메시지가 표시되면 Breezell을 다시 시작합니다.

두 설정은 서로 독립적입니다. 예를 들어 편집기는 영어로 두고, Breezell에서는 <BzWenben jian="general.language.zhTW" /> 인터페이스를 사용할 수도 있습니다.

## 일반 & 언어 페이지의 다른 항목

같은 페이지에는 카드가 두 개 더 있습니다.

- <BzWenben jian="general.dataManagement.title" />: Breezell 환경 설정(<BzWenben jian="general.tabs.settings" />)과 채팅 기록(<BzWenben jian="general.tabs.chats" />)을 가져오거나 내보내거나 초기화합니다. 설정은 `.json` 파일로 내보내고, 채팅은 각 대화의 첨부 파일과 체크포인트까지 담은 `.zip` 파일로 내보냅니다. 채팅을 가져올 때는 현재 채팅과 병합할지, 아니면 덮어쓸지 Breezell이 묻습니다. 초기화할 때는 실제로 삭제되기 전에 한 번 더 클릭해야 합니다.
- <BzWenben jian="general.tabs.ide" />: 편집기 자체의 설정, 키보드 단축키, 색상 테마를 여는 바로 가기입니다.

## 요약

1. 제목 표시줄에서 **Box**를 클릭합니다.
2. <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />를 엽니다.
3. <BzWenben jian="general.language.title" /> 카드에서 언어를 선택합니다. 즉시 적용됩니다.
4. 메뉴와 명령 팔레트도 같은 언어로 표시하려면 `Configure Display Language`를 실행하고 다시 시작합니다.
