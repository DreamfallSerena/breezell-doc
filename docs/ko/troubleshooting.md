---
title: 문제 해결
description: macOS, Windows, Linux에 맞는 Breezell 다운로드를 고르고, macOS의 “Breezell.app이 손상되었습니다” 및 “확인되지 않은 개발자” 경고를 해결하는 방법입니다.
---

# 문제 해결

이 페이지에서는 설치와 실행 중에 자주 발생하는 문제의 해결 방법을 모았습니다. 새로운 사례가 확인되면 계속 추가합니다.

::: tip 이 페이지의 화면 안내
아래의 다운로드 페이지는 영어로 제공되는 breezell.com의 소스 코드를 바탕으로 HTML로 다시 만든 것입니다. macOS 대화 상자와 터미널(Terminal) 창은 Mac에서 실제로 보게 될 화면을 나타내도록 그린 것입니다.
:::

## 알맞은 다운로드 선택 {#download}

[breezell.com/download](https://breezell.com/download)에서 다운로드 페이지를 엽니다. 페이지 맨 위에는 사용 중인 컴퓨터에 맞는 빌드가 추천되고, 그 아래에서 플랫폼을 선택하면 모든 빌드를 볼 수 있습니다. 여기서 탭을 클릭해 빌드를 비교해 보세요.

<BzXiazai gaoliang="fenye" biaoji="1" />

| 플랫폼 | 빌드 | 대상 |
| --- | --- | --- |
| macOS | Apple Silicon | M1, M2, M3, M4 또는 그 이후 칩을 탑재한 Mac |
| macOS | Intel | 이전 Intel 기반 Mac |
| macOS | Universal | 두 종류의 Mac을 모두 지원하는 레거시 빌드 |
| Windows | x64 · System / ARM64 · System | 컴퓨터의 모든 사용자용으로 설치되며, 관리자 권한이 필요합니다 |
| Windows | x64 · User / ARM64 · User | 현재 사용자용으로만 설치되며, 관리자 권한이 필요하지 않습니다 |
| Linux | .deb | Ubuntu, Debian 및 파생 배포판(x64, ARM64, ARM32) |
| Linux | .rpm | Fedora, RHEL, CentOS 및 파생 배포판(x64, ARM64, ARM32) |

Mac의 칩을 확인하려면 Apple 메뉴 ▸ **이 Mac에 관하여**(About This Mac)를 선택합니다. 이전 릴리스는 다운로드 페이지 맨 아래의 **View past versions**에서 확인할 수 있습니다.

## macOS에 Breezell 설치 {#install-macos}

1. 다운로드 페이지에서 사용 중인 Mac에 맞는 빌드를 다운로드합니다.
2. 다운로드한 이미지를 열고 **Breezell.app**을 **응용 프로그램**(Applications)으로 드래그합니다. 복사가 끝날 때까지 기다립니다.
3. **Finder ▸ 응용 프로그램**에서 Breezell을 실행합니다.

## “Breezell.app이 손상되었습니다” 또는 “확인되지 않은 개발자” {#damaged}

macOS는 App Store 외부에서 다운로드한 앱에 격리 속성(quarantine)을 추가합니다. 일부 Mac에서는 이 때문에 앱이 손상되지 않았는데도 macOS가 다음과 같은 경고를 표시하며 Breezell을 열지 않습니다.

<BzXiazai ye="jinggao" />

**휴지통으로 이동**(Move to Trash)이 아니라 **취소**(Cancel)를 클릭하고, 아래 단계를 한 번만 따라 하세요. 다운로드 페이지에서 macOS를 선택해도 같은 단계가 표시됩니다.

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. 터미널 열기 {#open-terminal}

**Command (⌘) + Space**를 눌러 Spotlight를 열고 **터미널**을 입력한 다음 **Return** 키를 누릅니다. **응용 프로그램 ▸ 유틸리티 ▸ 터미널**(Applications ▸ Utilities ▸ Terminal)에서도 찾을 수 있습니다.

### 2. Breezell의 격리 속성 제거 {#remove-quarantine}

다음 명령을 붙여넣고 **Return** 키를 누릅니다.

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

터미널에서 Mac 관리자 암호를 묻습니다. 암호를 입력하고 **Return** 키를 누릅니다. 입력하는 동안 문자는 화면에 표시되지 않습니다.

<BzXiazai ye="zhongduan" />

아무것도 출력되지 않으면 대개 명령이 성공한 것입니다. 이 명령은 **Breezell.app**의 격리 속성만 제거하며, Gatekeeper와 다른 앱에 대한 보안 검사는 그대로 유지됩니다.

### 3. Breezell 다시 열기 {#reopen}

**응용 프로그램**으로 돌아가 Breezell을 실행합니다.

::: warning 보안
공식 웹사이트에서 다운로드한 Breezell에만 이 방법을 사용하세요. 출처를 신뢰할 수 없는 앱의 격리 속성은 제거하지 마세요.
:::

## “No such file or directory” {#no-such-file}

명령이 `/Applications/Breezell.app`에서 앱을 찾지 못했다는 뜻입니다. Breezell을 **응용 프로그램**으로 옮기고 이름이 정확히 **Breezell.app**인지 확인하세요. 다른 위치에 두고 있다면 명령의 `/Applications/Breezell.app`을 실제 경로로 바꾸세요.

## 그래도 해결되지 않나요? {#contact}

[알려진 문제](/known-issues)를 확인하거나, 운영 체제, Breezell 버전, 표시되는 메시지 원문을 함께 적어 [문의 페이지](https://breezell.com/contact)로 연락해 주세요.
