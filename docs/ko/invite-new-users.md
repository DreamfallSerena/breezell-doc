---
title: 새 사용자 초대 방법
description: 도움 다섯 번으로 Entanglement와 Teams를 잠금 해제하는 단계별 튜토리얼 시리즈입니다. 편집기에 로그인하고, breezell.com에서 초대 링크를 생성하고, 친구가 도와줄 수 있도록 안내하고, 진행 상황을 확인합니다.
---

# 새 사용자 초대 방법

Entanglement와 Teams는 모든 유료 플랜에 포함되어 있습니다. 무료 플랜에서는 Breezell 사용자 다섯 명이 개인 초대 링크를 통해 도와주면 두 모드를 **영구적으로** 잠금 해제할 수 있습니다. 이 페이지에서는 로그인부터 모드 사용까지 전체 과정을 짧은 튜토리얼 시리즈로 안내합니다.

::: tip 이 페이지의 화면 안내
아래 화면은 Breezell과 breezell.com의 소스 코드를 바탕으로 HTML로 다시 만든 것이며, 일부 버튼은 직접 클릭해 볼 수 있습니다. breezell.com은 영어로만 제공되므로 이 가이드의 모든 언어에서 웹사이트 화면은 영어로 표시되고, Breezell 화면은 이 페이지의 언어를 따릅니다. 각 웹사이트 화면 상단의 막대에는 현재 주소가 표시됩니다. 화면에 나오는 이름, 이메일 주소, 링크, 코드는 예시입니다.
:::

## 튜토리얼 한눈에 보기 {#overview}

| # | 튜토리얼 | 대상 | 장소 |
| --- | --- | --- | --- |
| 1 | [편집기에서 Breezell에 로그인하기](#sign-in-editor) | 본인 | Breezell과 브라우저 |
| 2 | [잠금 해제 카드 찾기](#find-card) | 본인 | breezell.com |
| 3 | [초대 링크 생성 및 복사](#generate) | 본인 | breezell.com |
| 4 | [링크 공유](#share) | 본인 | 채팅 앱 또는 이메일 |
| 5 | [친구로서 도와주기](#assist) | 친구 | breezell.com |
| 6 | [진행 상황 확인](#progress) | 본인 | breezell.com과 Breezell |
| 7 | [Entanglement와 Teams 사용하기](#use) | 본인 | Breezell |
| – | [메시지와 해결 방법](#messages) | 모두 | |

## 잠금 해제 방식 {#rules}

- **도움 다섯 번**으로 Entanglement와 Teams가 잠금 해제됩니다. 잠금 해제는 영구적이므로, 나중에 어떤 플랜을 이용하든 계정에 그대로 유지됩니다.
- **유료 플랜**을 이용하는 동안에는 도움 없이도 두 모드가 포함됩니다. 무료 플랜 이외의 모든 플랜, 일회성 결제인 Custom API 라이선스, 활성 팀의 좌석이 여기에 해당합니다. 도움을 다섯 번 받기 전에 플랜이 끝나면 두 모드는 다시 잠깁니다.
- **Breezell 계정 하나는 한 사람만 도울 수 있습니다.** 같은 사람을 두 번 도와도 두 번으로 계산되지 않습니다.
- **기기 한 대로는 한 번만 도울 수 있습니다.** 그 기기에 어떤 계정으로 로그인했는지는 관계없습니다.
- **자기 자신은 도울 수 없습니다.**
- **초대 링크는 30일 동안 유효합니다.** 새 링크를 생성하면 이전 링크는 더 이상 작동하지 않으며, 이미 받은 도움은 그대로 유지됩니다.
- **잠금 해제는 Breezell 계정에 귀속됩니다.** breezell.com과 편집기에서 같은 계정을 사용하세요.

## 튜토리얼 1: 편집기에서 Breezell에 로그인하기 {#sign-in-editor}

편집기는 로그인된 Breezell 계정으로 잠금 해제 여부를 확인합니다. 로그인하지 않은 동안에는 웹사이트의 진행 상황과 관계없이 Entanglement와 Teams가 잠긴 상태로 남고, 모드 메뉴에는 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0|5" />라고 표시됩니다. Box 사이드바 맨 아래의 계정 카드에 이미 본인 이름이 표시되어 있다면 [튜토리얼 2](#find-card)로 넘어가세요.

### 1단계: 계정 카드 열기 {#sign-in-card}

Breezell 설정 페이지인 Box를 엽니다. 제목 표시줄 왼쪽의 전환 버튼에서 **Box**를 클릭합니다(다른 방법은 [사용자 지정 API (BYOK)](/custom-api)에 나와 있습니다). 사이드바 맨 아래의 계정 카드에 <BzWenben jian="box.account.notSignedIn" /> 문구가 표시됩니다. 이 카드를 클릭합니다.

<BzHezi zu="none" zhanghu="weidenglu" zhanghugaoliang="ka" biaoji="1" />

### 2단계: 로그인 버튼 클릭 {#sign-in-button}

카드 위에 계정 패널이 열립니다. <BzWenben jian="box.account.signIn" /> 버튼을 클릭합니다. Breezell이 기본 브라우저에서 breezell.com 로그인 페이지를 엽니다.

<BzHezi zu="none" zhanghu="weidenglu" zhanghukai zhanghugaoliang="denglu" biaoji="2" />

### 3단계: 웹사이트에서 로그인 {#sign-in-website}

이 브라우저에서 아직 breezell.com에 로그인하지 않았다면 로그인 페이지가 나타납니다. 이메일과 비밀번호를 입력하고 **Sign In**을 클릭하거나, **Continue with GitHub**를 사용합니다. 아직 계정이 없다면 아래쪽의 **Sign Up**을 클릭하고 세 단계로 계정을 만듭니다([계정 만들기](#assist-register) 참고).

<BzWangzhan ye="denglu" laiyuan="bianjiqi" gaoliang="denglu" biaoji="3" />

브라우저가 이미 로그인되어 있다면 웹사이트는 이 단계를 건너뛰고 바로 확인 화면으로 이동합니다.

### 4단계: 데스크톱 로그인 확인 {#sign-in-confirm}

웹사이트에서 Breezell이 본인 계정으로 로그인해도 되는지 확인을 요청합니다. 카드에 표시된 이름과 이메일을 확인한 다음 **Sign in**을 클릭합니다. 다른 계정을 사용하려면 대신 **or sign in with another account**를 클릭합니다.

<BzWangzhan ye="zhuomian" gaoliang="queren" biaoji="4" />

그러면 브라우저가 Breezell을 열어도 되는지 묻습니다. **Open**을 선택합니다. 이 페이지는 방금 직접 Breezell에서 로그인을 시작한 경우에만 확인하세요.

### 5단계: Breezell로 돌아가기 {#sign-in-done}

페이지에 로그인이 완료되었다고 표시되며, 탭을 닫아도 됩니다.

<BzWangzhan ye="zhuomian" zhuangtai="wancheng" />

Breezell이 자동으로 진행되지 않으면 페이지의 안내에 따라 페이지에 표시된 코드를 복사하여 Breezell의 로그인 페이지에 붙여 넣습니다.

Breezell로 돌아오면 계정 카드에 이름, 플랜, 이메일이 표시됩니다. 카드를 클릭하면 플랜과 잔액을 확인할 수 있습니다.

<BzHezi zu="none" zhanghu="yidenglu" zhanghukai />

Breezell은 로그인이 완료될 때까지 최대 5분 동안 기다립니다. 그보다 오래 걸리면 <BzWenben jian="box.account.signIn" /> 버튼을 다시 클릭합니다.

## 튜토리얼 2: 잠금 해제 카드 찾기 {#find-card}

잠금 해제 카드는 breezell.com의 계정 설정에 있습니다.

1. [breezell.com](https://breezell.com)을 열고 편집기와 **같은 계정**으로 로그인합니다. 오른쪽 위의 아바타를 클릭한 다음 **Profile**을 클릭합니다.

<BzWangzhan ye="caidan" gaoliang="profile" biaoji="1" />

2. 계정 페이지의 왼쪽 사이드바에서 **Settings**를 클릭합니다. 사이드바 맨 아래에서 이름이 표시된 메뉴를 열고 **Account settings**를 클릭해도 됩니다.

<BzWangzhan ye="yonghucaidan" gaoliang="zhanghushezhi" biaoji="2" />

3. Settings에는 계정 정보, 팀, 잠금 해제 카드 **Unlock Entanglement and Teams Modes**, 로그아웃 옵션이 표시됩니다. 카드에는 지금까지 받은 도움 횟수가 표시됩니다.

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="ka" biaoji="3" />

유료 플랜을 이용 중이라면 카드에 대신 **Entanglement and Teams modes are included in your plan** 문구가 표시되며, 따로 할 일은 없습니다. [튜토리얼 7](#use)로 넘어가세요.

## 튜토리얼 3: 초대 링크 생성 및 복사 {#generate}

1. 잠금 해제 카드에서 **Generate invite link**를 클릭합니다.

<BzWangzhan ye="shezhi" :jindu="0" gaoliang="shengcheng" biaoji="1" />

2. 버튼 아래에 링크가 나타납니다. 첫 번째 버튼은 **Regenerate**로 바뀌고, 그 옆에 **Copy link** 버튼이 나타납니다. **Copy link**를 클릭하면 버튼에 잠시 **Copied**가 표시됩니다. 여기에서 직접 해 보세요.

<BzWangzhan ye="shezhi" :jindu="0" lianjie gaoliang="fuzhi" biaoji="2" />

3. 이제 클립보드에 짧은 메시지와 링크가 담겨 있습니다.

```text
"Can you help me unlock this? I'm waiting in the Breezell editor."
https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN
```

위의 토큰은 자리표시자입니다. 본인 계정에서 생성된 텍스트를 보내세요.

::: warning 한 번만 생성하고 텍스트를 보관하세요
카드에는 페이지를 떠나기 전까지만 링크가 표시됩니다. 다시 돌아오면 **Generate invite link** 버튼이 다시 표시되며, 생성하면 **새** 링크가 만들어집니다. 그러면 이미 보낸 링크는 더 이상 작동하지 않습니다. 복사한 텍스트를 보관해 두고, 다섯 명의 친구 모두에게 같은 링크를 보내세요. 링크가 30일이 지나 만료되었거나 받아서는 안 되는 사람에게 전달된 경우에만 새 링크를 생성하세요.
:::

## 튜토리얼 4: 링크 공유 {#share}

- 복사한 텍스트를 채팅 앱이나 이메일에 붙여 넣어 다섯 명에게 보냅니다.
- 친구마다 각자의 Breezell 계정이 필요합니다. 가입은 무료이며 링크에서 바로 할 수 있습니다.
- 친구는 각자 자신의 컴퓨터나 휴대폰을 사용해야 합니다. 이미 도움에 사용된 기기로는 다시 도울 수 없습니다.
- 초대 페이지에는 이름이 첫 글자와 마지막 글자만 남은 형태로 표시됩니다. 예를 들어 Alex는 **A\*\*\*x**로 표시됩니다. 친구가 알아볼 수 있도록 본인이 보낸 링크라고 알려 주세요.
- 링크를 가진 사람은 누구나 도울 수 있으므로 아는 사람에게 보내세요.
- 초대 페이지는 영어로 되어 있습니다. 친구가 자신의 언어로 따라 할 수 있도록 [튜토리얼 5](#assist) 링크를 함께 보내도 됩니다.

## 튜토리얼 5: 친구로서 도와주기 {#assist}

이 튜토리얼은 초대받은 친구를 위한 것으로, 링크를 연 뒤 친구에게 보이는 화면을 보여 줍니다.

### 1단계: 링크 열기 {#assist-open}

초대 페이지에는 초대한 사람의 이름이 표시됩니다. breezell.com에 로그인하지 않은 상태라면 먼저 로그인하거나 가입하라는 안내가 나타납니다.

<BzWangzhan ye="yaoqing" zhuangtai="weidenglu" gaoliang="zhuce" biaoji="1" />

- 아직 Breezell 계정이 없다면 **Register**를 클릭하고 2단계로 진행합니다.
- 계정이 있다면 **Sign in**을 클릭합니다. 이메일과 비밀번호 또는 GitHub로 로그인하고 3단계로 진행합니다.
- 이미 로그인되어 있다면 페이지에 바로 **Assist** 버튼이 표시됩니다. 3단계로 진행합니다.

### 2단계: 계정 만들기 {#assist-register}

**Register**를 클릭하면 **Create Account** 화면이 열립니다. 가입은 세 단계로 진행되며, 상단의 숫자로 현재 단계가 표시됩니다. 여기에서 **Next**와 **Previous**를 클릭해 각 단계를 살펴보세요.

<BzWangzhan ye="denglu" zhuangtai="zhuce" laiyuan="yaoqing" gaoliang="xiayibu" biaoji="2" />

1. **Username**: 사용자 이름을 정한 다음 **Next**를 클릭합니다.
2. **Email**과 **Verification Code**: 이메일을 입력하고 **Get Code**를 클릭합니다. 받은 이메일에 있는 코드를 입력한 다음 **Next**를 클릭합니다.
3. **Password**와 **Confirm Password**: 비밀번호는 8자 이상이어야 하며 대문자, 숫자, 특수 문자를 각각 하나 이상 포함해야 합니다. **Create Account**를 클릭합니다.

**Continue with GitHub**를 사용하면 양식을 건너뛸 수도 있습니다. 로그인하거나 가입하면 페이지에 **Success!** 메시지가 표시되고, 약 1초 뒤 초대 페이지로 돌아갑니다.

### 3단계: Assist 클릭 {#assist-click}

초대 페이지로 돌아와 **Assist**를 클릭합니다.

<BzWangzhan ye="yaoqing" gaoliang="zhuli" biaoji="3" />

### 4단계: 완료 {#assist-done}

페이지에 도움이 완료되었다고 표시되고, 초대한 사람의 새 진행 상황이 나타납니다. 여기서는 5명 중 3명입니다.

<BzWangzhan ye="yaoqing" zhuangtai="chenggong" :jindu="3" />

**View my account**를 클릭하면 본인의 계정 페이지가 열립니다. 나중에 링크를 다시 열면 페이지에 **You already completed this assist** 문구가 표시됩니다.

## 튜토리얼 6: 진행 상황 확인 {#progress}

### 웹사이트에서 {#progress-website}

잠금 해제 카드는 15초마다, 그리고 브라우저 탭으로 돌아올 때마다 자동으로 업데이트됩니다. 바로 확인하려면 카드 오른쪽 위의 새로 고침 버튼을 클릭합니다.

<BzWangzhan ye="shezhi" :jindu="3" gaoliang="jindu" biaoji="1" />

### 편집기에서 {#progress-editor}

채팅 입력창 아래의 모드 메뉴를 열고 **Entanglement** 또는 **Teams**에 마우스를 올립니다. 메뉴 옆에 <BzWenben jian="chatMode.entanglementUnlockTitle" /> 문구와 진행 상황이 표시됩니다. 여기서는 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="3|5" />입니다.

<BzLiaotian tanchu="moshi" moshi="agent" suoding :jiesuojindu="3" />

모드 메뉴를 열 때마다 Breezell이 잠금 해제 상태를 다시 확인합니다.

### 다섯 번째 도움을 받으면 {#progress-unlocked}

카드에 초록색 체크 표시와 함께 **Entanglement and Teams modes are unlocked** 문구가 표시됩니다. 진행률 표시줄과 초대 버튼은 사라집니다.

<BzWangzhan ye="shezhi" :jindu="5" />

## 튜토리얼 7: Entanglement와 Teams 사용하기 {#use}

1. Breezell에서 채팅 입력창 아래의 모드 메뉴를 엽니다. 메뉴를 열면 잠금 해제 상태가 확인되고 자물쇠가 사라집니다.
2. **Entanglement** 또는 **Teams**를 선택합니다.

<BzLiaotian tanchu="moshi" moshi="entanglement" />

각 모드의 작동 방식은 [Entanglement 모드](/entanglement-mode-overview)와 [Teams](/mode-selection#teams)를 참고하세요. 모드가 여전히 잠겨 있다면 Box 사이드바 맨 아래의 계정 카드를 확인하세요. 잠금 해제한 계정이 표시되어 있어야 합니다([튜토리얼 1](#sign-in-editor) 참고). 그런 다음 모드 메뉴를 닫았다가 다시 엽니다.

## 메시지와 해결 방법 {#messages}

### 초대 페이지에서 {#messages-invite}

| 메시지 | 의미 | 해결 방법 |
| --- | --- | --- |
| **This invite link is invalid or expired** | 링크가 불완전하거나, 30일이 지났거나, 더 새로운 링크로 대체되었습니다. | 현재 링크를 요청하세요. |
| **Each account can assist only one unlock** | 이 계정은 이미 다른 사람을 도왔습니다. | 다른 친구가 도와야 합니다. |
| **You already completed this assist** | 이 계정은 이미 이 사람을 도왔습니다. 도움은 정상적으로 계산됩니다. | 조치가 필요 없습니다. |
| **You cannot assist yourself** | 링크 소유자의 계정으로 링크를 열었습니다. | 친구에게 링크를 보내세요. |
| **This user already completed the unlock** | 초대한 사람이 이미 두 모드를 잠금 해제했습니다. | 조치가 필요 없습니다. |
| **This device has already completed an unlock assist** | 이 기기에서 이미 도움이 이루어졌습니다. 다른 계정으로 도왔을 수도 있습니다. | 다른 기기에서 도와주세요. |
| **Unable to verify this device. Refresh the page and try again.** | 페이지에서 기기를 확인하지 못했습니다. | 페이지를 새로 고친 뒤 다시 시도하거나, 다른 브라우저를 사용해 보세요. |

링크가 유효하지 않거나 만료된 경우입니다.

<BzWangzhan ye="yaoqing" zhuangtai="wuxiao" />

계정이 이미 다른 사람을 도운 경우입니다.

<BzWangzhan ye="yaoqing" zhuangtai="taren" />

기기가 이미 도움에 사용된 경우입니다. 메시지는 **Assist**를 클릭한 뒤 버튼 아래에 나타납니다.

<BzWangzhan ye="yaoqing" zhuangtai="shebei" />

### 잠금 해제 카드에서 {#messages-card}

| 메시지 | 의미 | 해결 방법 |
| --- | --- | --- |
| **Sign in to view unlock progress** | breezell.com에 로그인하지 않았습니다. | 로그인하세요. |
| **Unable to load unlock status** | 웹사이트에서 잠금 해제 상태를 읽지 못했습니다. | **Retry**를 클릭하세요. 그래도 해결되지 않으면 웹사이트에서 로그아웃한 뒤 다시 로그인하세요. |
| **Entanglement and Teams modes are included in your plan** | 유료 플랜에 두 모드가 포함되어 있습니다. | 조치가 필요 없습니다. |
| **Your Entanglement and Teams modes are unlocked. Welcome!** | Breezell 팀이 계정의 두 모드를 잠금 해제했습니다. | 조치가 필요 없습니다. |

<BzWangzhan ye="shezhi" zhuangtai="bukeyong" gaoliang="chongshi" biaoji="1" />

### 편집기에서 {#messages-editor}

| 표시되는 내용 | 원인 | 해결 방법 |
| --- | --- | --- |
| 웹사이트에는 더 많은 도움이 표시되는데도 모드 메뉴에는 <BzWenben jian="chatMode.entanglementUnlockProgress" canshu="0;5" />라고 표시됩니다 | Breezell에 로그인하지 않았거나 다른 계정으로 로그인했습니다. | 올바른 계정으로 로그인하세요([튜토리얼 1](#sign-in-editor)). |
| 모드 메뉴의 진행 상황이 웹사이트보다 늦게 반영됩니다 | Breezell은 모드 메뉴를 열 때 상태를 확인합니다. | 모드 메뉴를 닫았다가 다시 여세요. |
| 잠긴 모드를 선택하면 <BzWenben jian="chatMode.entanglementSendBlocked" /> 메시지가 표시됩니다 | 아직 모드가 잠금 해제되지 않았습니다. | 도움을 다섯 번 받거나 어떤 플랜이든 선택하세요. |
| 웹사이트에서 로그인한 뒤 아무 일도 일어나지 않습니다 | 브라우저가 Breezell을 열지 않았습니다. | 웹사이트에 표시된 코드를 Breezell의 로그인 페이지에 붙여 넣거나, <BzWenben jian="box.account.signIn" /> 버튼을 다시 클릭하세요. |

## 초대 방식을 사용하는 이유 {#why}

Breezell은 인프라, 유지 관리, 개발을 위해 지속적인 자금이 필요합니다. 친구 초대는 플랜 없이도 고급 모드를 잠금 해제하면서 Breezell의 성장을 돕는 방법입니다. 지원해 주셔서 감사합니다. 1.2.8 버전에서 달라진 점은 [1.2.8 버전 이용 방식 변경 안내](/version-1-2-8-access-update)를 참고하세요.
