---
title: 문제 해결
description: macOS의 앱 손상 경고를 포함한 Breezell 설치 및 실행 문제 해결 방법입니다.
---

# 문제 해결

Breezell 설치 및 실행 중 발생할 수 있는 일반적인 문제와 해결 방법을 안내합니다. 확인되는 사례는 계속 추가됩니다.

## macOS에 Breezell 설치

1. Breezell 다운로드 페이지에서 **macOS**를 선택합니다.
2. M1, M2, M3 또는 이후 Apple 칩을 사용하는 Mac에서는 **Apple Silicon** 버전을 다운로드합니다.
3. 다운로드한 이미지를 열고 **Breezell.app**을 **응용 프로그램**으로 드래그합니다. 복사가 끝나면 **Finder → 응용 프로그램**에서 실행합니다.

## “Breezell.app이 손상되었습니다” 또는 “확인되지 않은 개발자”

macOS는 App Store 외부에서 다운로드한 앱에 격리 속성을 추가할 수 있습니다. 이 경고가 반드시 앱 파일의 실제 손상을 의미하지는 않습니다.

![macOS Breezell 설치 및 앱 손상 경고 해결 방법](/troubleshooting/macos-installation-guide.png)

### 1. 터미널 열기

**Command(⌘) + Space**를 누르고 **터미널**을 검색하여 실행합니다. **응용 프로그램 → 유틸리티 → 터미널**에서도 열 수 있습니다.

### 2. Breezell 격리 속성 제거

다음 명령을 붙여 넣고 **Return**을 누릅니다.

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Mac 관리자 암호를 입력하고 **Return**을 다시 누릅니다. 입력 중인 암호는 표시되지 않습니다. 별도 출력 없이 끝나면 일반적으로 성공한 것입니다.

이 명령은 **Breezell.app**의 격리 속성만 제거하며 Gatekeeper나 다른 앱의 보안 검사를 변경하지 않습니다.

### 3. Breezell 다시 열기

**응용 프로그램**으로 돌아가 Breezell을 다시 실행합니다.

::: warning 보안
Breezell 공식 웹사이트에서 다운로드한 앱에만 사용하세요. 출처를 신뢰할 수 없는 앱에는 사용하지 마세요.
:::

## “No such file or directory”

Breezell을 **응용 프로그램**으로 이동하고 이름이 정확히 **Breezell.app**인지 확인하세요. 다른 위치에 있다면 `/Applications/Breezell.app`을 실제 경로로 바꾸세요.
