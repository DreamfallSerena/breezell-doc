---
title: 自定义 API（BYOK）
description: 用你自己的 API 密钥在 Breezell 中运行 Claude 模型，既可直连 Anthropic 官方 API，也可接入任意兼容的中转站。
---

# 自定义 API（BYOK）

BYOK 即 **Bring Your Own Key**（自带密钥）。Breezell 不再使用官方额度，而是用你自己的 API 密钥向模型提供商发送请求，费用由该提供商直接向你收取。

本指南以 Claude 模型为例，完整走一遍配置流程，涉及的模型有：`claude-opus-5-5`、`claude-sonnet-5-5`、`claude-haiku-5-5` 和 `claude-fable-5-1`。

::: tip 关于本页的界面示意
本页没有使用截图。下面所有 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的：文字跟随本页语言，配色跟随本站的浅色 / 深色切换（Breezell Light / Breezell Dark）。

橙色圆圈和数字角标标出了需要点击的位置，它们并不属于 Breezell 界面本身。部分界面可以直接操作：你可以切换协议、修改基础地址、点击 **Claude 1M**、开关推理，以及拖动强度滑块。
:::

## 开始之前

你需要准备三样东西：

1. **一个 Custom API 及以上套餐的 Breezell 账号。** 用自己的密钥调用第三方模型属于付费功能。没有该套餐时，提供商页面不会显示配置表单，而是显示 <BzWenben jian="box.models.gate.planRequired" />；如果尚未登录，则显示 <BzWenben jian="box.models.gate.signIn" />。
2. **一个密钥。** 可以是在 Anthropic Console 中创建的 Anthropic API 密钥（以 `sk-ant-` 开头），也可以是中转站、网关或自建代理的基础地址（Base URL）和密钥。
3. **中转站所用的协议。** 向你的提供商确认：它提供的是 Anthropic Messages API（`/v1/messages`）、OpenAI Chat Completions API（`/v1/chat/completions`），还是两者都提供。

## 选择接入方式

| 方式 | 适用场景 | 在 Breezell 中的位置 | 协议 |
| --- | --- | --- | --- |
| **A. Anthropic API** | 你有 Anthropic Console 的密钥 | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages（内置） |
| **B. 兼容槽位 + Anthropic 协议** | 中转站提供 `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › 某个槽位 | Anthropic |
| **C. 兼容槽位 + OpenAI 协议** | 中转站只提供 `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › 某个槽位 | OpenAI |

接入 Claude 时，优先选择 **A** 或 **B**。Breezell 在槽位表单中也给出了同样的建议：<BzWenben jian="settings.apiFormat.anthropicTip" />

## 第 1 步：打开 Box（Breezell 设置）

Breezell 的设置位于 **Box** 页面。进入 Box 后，它会占据活动栏、侧边栏、编辑器区域和面板的位置；点击 **Agent** 即可回到代码。

有三种打开方式：

- 在标题栏左侧的切换按钮中点击 **Box**。
- 点击右上角的齿轮图标，选择 <BzWenben jian="box.title" />。
- 打开命令面板，运行 `Breezell: Open Settings`。

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## 第 2 步：进入模型页面

在 Box 侧栏中展开 <BzWenben jian="box.title" /> 分组，点击 <BzWenben jian="tab.models" />。Box 打开时通常默认就停在这个页面。

<BzHezi gaoliang="moxing" />

页面顶部有四个视图：<BzWenben jian="box.usage.tab.models" />、<BzWenben jian="box.usage.tab.cache" />、<BzWenben jian="box.usage.tab.tokens" /> 和 <BzWenben jian="box.usage.tab.breezell" />。停留在第一个视图即可。

视图下方的提供商分类把所有提供商分成四组：

| 分类 | 包含内容 |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Breezell 官方模型，消耗你的 Breezell 额度，无需密钥。 |
| <BzWenben jian="box.models.group.signin" /> | 通过账号登录使用的提供商，例如 Codex 或 Copilot。 |
| <BzWenben jian="box.models.group.api" /> | 使用你自己密钥的各厂商官方 API，其中包括 Anthropic。 |
| <BzWenben jian="box.models.group.compat" /> | 最多 50 个自定义槽位，用于中转站、网关和自建代理。 |

## 方式 A：Anthropic API

### A1. 选择 Anthropic

1. 点击 <BzWenben jian="box.models.group.api" />。
2. 在 <BzWenben jian="box.models.searchProvidersPlaceholder" /> 中输入 `Anthropic`。
3. 点击 **Anthropic** 卡片。选中的提供商会显示在下方，状态为 <BzWenben jian="box.models.notConfigured" />。
4. 点击 <BzWenben jian="box.models.editConfig" />，打开它的配置。

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. 粘贴 Anthropic 密钥

配置中只有一个字段：API 密钥。

1. 点击 **Get your API Key** 卡片，浏览器会打开 Anthropic Console（`console.anthropic.com/settings/keys`）。
2. 创建一个密钥并复制，它的格式类似 `sk-ant-api03-...`。
3. 把密钥粘贴到输入框中。点击眼睛图标可以显示或隐藏密钥。

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell 在使用密钥前会先做一遍清理：去掉空格、两端的引号、开头的 `Bearer `，以及复制时经常夹带的不可见字符。Anthropic 提供商没有基础地址字段，Breezell 始终使用 `https://api.anthropic.com`。

### A3. 启用需要的 Claude 模型

密钥保存后，状态会立即变为 <BzWenben jian="box.models.configured" />，列表中按从新到旧的顺序列出 Breezell 内置的 Claude 模型。

默认只启用前五个：`claude-fable-5-1`、`claude-fable-5`、`claude-opus-5`、`claude-opus-5-5` 和 `claude-opus-4-8`。打开某一行末尾的开关，即可把该模型加入对话页的模型选择器，例如 `claude-sonnet-5-5` 和 `claude-haiku-5-5`。

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

表格各列的含义如下：

| 列 | 含义 |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | 发送给 API 的模型 ID。绿点表示该模型已启用。 |
| <BzWenben jian="box.models.context" /> | 模型的完整上下文窗口。所有 Claude 5 模型均为 1M。 |
| <BzWenben jian="box.models.capabilities" /> | 四个图标：<BzWenben jian="box.models.filter.vision" />、<BzWenben jian="box.models.filter.tools" />、<BzWenben jian="box.models.filter.reasoning" />、<BzWenben jian="box.models.filter.web" />。图标点亮表示模型具备该能力。 |
| <BzWenben jian="models.pricing" /> | 输入 / 输出价格（美元，<BzWenben jian="box.models.price" />），来自 Breezell 内置的价格目录。实际费用以 Anthropic 的账单为准。 |
| <BzWenben jian="box.mcp.colEnabled" /> | 在对话页的模型选择器中显示或隐藏该模型。 |

表格变窄时，Breezell 会先隐藏 <BzWenben jian="box.models.context" /> 列，再隐藏 <BzWenben jian="box.models.capabilities" /> 列；这两列的内容会移到模型名称的悬停提示中。

如果 Anthropic 发布了列表中还没有的新模型，点击 <BzWenben jian="box.models.fetch" />。Breezell 会用你的密钥读取 `https://api.anthropic.com/v1/models`，让你添加新的模型 ID。你也可以在 <BzWenben jian="box.models.addModelPlaceholder" /> 中直接输入 ID，然后点击 <BzWenben jian="box.models.add" />。

方式 A 到此完成。接下来请阅读[在对话中使用 Claude](#use-claude-in-chat)。

## 方式 B：使用 Anthropic 协议的兼容槽位

如果你的中转站、API 网关或自建代理通过 Anthropic Messages API 提供 Claude，请使用这种方式。

### B1. 打开一个兼容槽位

1. 点击 <BzWenben jian="box.models.group.compat" />。
2. 点击槽位卡片。Slot 1 始终存在；新槽位的名称下方会显示 <BzWenben jian="settings.noEndpoint" />。
3. 如果想把多个中转站分开管理，每个中转站各点击一次 <BzWenben jian="box.models.addCompat" />。Breezell 共有 50 个槽位，每个槽位都是独立的通道，拥有各自的地址、密钥、协议和模型。
4. 点击 <BzWenben jian="box.models.editConfig" />。

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. 填写槽位

所有槽位的表单都一样。你可以在下面直接试一试：修改基础地址或协议，<BzWenben jian="settings.requestUrl" /> 会随之更新，与 Breezell 中的表现完全一致。

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />：不超过 30 个字符的名称，例如 `Claude Relay`。它会成为模型页面上的卡片标题，以及对话页模型选择器中的分组名。
- <BzWenben jian="settings.baseUrl" />：提供商给你的地址，必须以 `http://` 或 `https://` 开头，例如 `https://relay.example.com` 或 `http://127.0.0.1:8080`。

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />：中转站的密钥。输入后会以掩码显示，点击眼睛图标即可查看。

**<BzWenben jian="settings.sectionProtocol" />**

选择 **Anthropic**。这三个按钮决定请求格式：

| 按钮 | 请求格式 | 适合 Claude 吗？ |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | 仅当中转站没有 `/v1/messages` 时使用（方式 C）。 |
| Responses | OpenAI Responses | 不适合。它面向 GPT 模型。 |
| **Anthropic** | Anthropic Messages | **适合。** Breezell 推荐 Claude 使用此项。 |

然后检查 <BzWenben jian="settings.endpointPreset" />。使用 Anthropic 协议时有两个预设：

| 预设 | 路径 | 适用场景 |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | 几乎所有中转站，保持此项即可。 |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | 仅用于火山引擎 Agent Plan。 |

### B3. 检查请求地址

预设下方的 <BzWenben jian="settings.requestUrl" /> 就是 Breezell 实际调用的完整地址。Breezell 会把基础地址和预设路径拼接起来，并去掉重复的部分，因此两种常见的基础地址写法都能正常使用：

| 填写的基础地址 | 预设 | 请求地址 |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

请将结果与提供商的文档对照。如果提供商把 API 放在不常见的路径下，请调整基础地址，让请求地址的结尾与提供商文档中写的完全一致。

### B4. 自定义请求头与 Claude 1M（可选）

<BzWenben jian="settings.customHeaders" /> 会为这个槽位的每个请求附加 HTTP 请求头。除非提供商有要求，否则保持 `{}` 即可。

请求头的值必须是合法的 JSON：键和值都要用双引号，不能有注释，也不能有尾随逗号。

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

点击 **Claude 1M** 按钮，填入的正是这个请求头。如果你的中转站需要这个 beta 请求头才能接受超过 200K 的提示，就使用它。不过，Breezell 对话中的每个 Claude 模型仍默认从 200K 开始；要切换到 1M，需要在对话页的模型选择器中按模型分别设置（参见[上下文、推理与 Fast](#context-reasoning-and-fast)）。

在请求头下方，你会看到 <BzWenben jian="settings.accountPool" /> 卡片。账号池可以在同一个槽位上轮换多个密钥或线路。首次配置时用不到它。

### B5. 添加 Claude 模型

新槽位中没有任何模型，可以用下面两种方式之一添加。

**拉取列表。** 点击 <BzWenben jian="box.models.fetch" />。Breezell 会向中转站查询它提供哪些模型，并以勾选列表的形式显示出来。勾选需要的 Claude 模型，然后点击 <BzWenben jian="box.models.addSelected" />。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**手动输入 ID。** 在 <BzWenben jian="box.models.addModelPlaceholder" /> 中输入模型 ID，然后点击 <BzWenben jian="box.models.add" />。ID 必须与中转站的命名完全一致，例如 `claude-opus-5-5`。如果中转站不提供模型列表，就用这种方式。

### B6. 检测槽位

点击 <BzWenben jian="box.models.health.checkSlot" />，向这个槽位发送一条简短的请求。失败的模型会带上 <BzWenben jian="box.models.health.ribbonFail" /> 标记，响应太慢的模型会带上 <BzWenben jian="box.models.health.ribbonTimeout" /> 标记；完全无法连接的槽位会在卡片上标记为 <BzWenben jian="box.models.health.ribbonDown" />。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

如需更细致的检查，点击槽位卡片上方的 <BzWenben jian="box.models.checkConnectivity" />。它可以同时检测多个槽位和模型，其中 <BzWenben jian="box.models.health.checkStreaming" /> 会告诉你中转站是逐段推送回复（<BzWenben jian="box.models.health.stream.streaming" />）、压住了思考过程（<BzWenben jian="box.models.health.stream.heldThinking" />），还是到最后才一次性发出全部内容（<BzWenben jian="box.models.health.stream.buffered" />）。

## 方式 C：使用 OpenAI 协议的兼容槽位

有些中转站只通过 OpenAI Chat Completions 格式提供 Claude。这时按方式 B 配置槽位即可，区别只有以下几点：

1. 在 <BzWenben jian="settings.sectionProtocol" /> 中选择 **OpenAI**。
2. 保持预设 <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" />（`/v1/chat/completions`）。
3. 按中转站使用的 ID 添加模型。很多中转站使用 `claude-opus-5-5`，也有一些会加上厂商前缀，例如 `anthropic/claude-opus-5-5`。

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell 按名称识别 Claude 模型，因此 `anthropic/claude-opus-5-5` 或 `claude-opus-5.5` 会获得与 `claude-opus-5-5` 相同的限制参数。请留意表单本身的提示：<BzWenben jian="settings.apiFormat.openaiTip3" />。此外，在 OpenAI 协议下，Breezell 也无法为 Claude Opus 提供 **Fast**。如果你的中转站同时提供 `/v1/messages`，请把槽位切换为 **Anthropic**。

## 管理 Claude 模型

### 行菜单

每个模型行都有一个 **⋯** 按钮。对于兼容槽位上的 Claude 模型，菜单中提供 <BzWenben jian="box.models.pin" />、<BzWenben jian="box.models.advanced" /> 和 <BzWenben jian="box.models.remove" />。将鼠标悬停在某一行上，模型名称旁会出现复制图标。

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 设置价格

Breezell 知道 Anthropic 官方 API 的标价，但不知道你所用中转站的价格。在兼容槽位上，价格列会显示 <BzWenben jian="box.models.editPrice" />。点击它，按每百万 token 的美元价填写中转站的价格：输入、输出、缓存命中，以及 Claude 会用到的 5 分钟和 1 小时缓存创建。之后，<BzWenben jian="box.usage.tab.tokens" /> 视图除了 token 数，还会显示费用。不填价格时，Breezell 仍会统计 token，只是不计算金额。

### 高级设置

Breezell 能识别本指南中出现的所有 Claude 模型 ID，并自动填好它们的限制参数，所以大多数人根本不需要打开这个对话框。只有在以下情况下才需要打开它：中转站给模型改了名（例如 `my-claude`）、Breezell 显示无法识别该模型，或者中转站强制使用更小的限制。

请先打开 <BzWenben jian="models.enableCustomSettings" />；在此之前，所有卡片都呈灰色且为只读状态。

<BzGaoji />

Breezell 对 Claude 5 模型使用的值如下：

| 设置项 | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| 上下文窗口（短档 / 长档） | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | 关 | 关 | 关 | **开** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | 关 | **开** | 关 | 关 |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

上表对应的是使用 Anthropic 协议的兼容槽位。在 Anthropic 提供商（方式 A）上，系统消息改为 `separated`；两种方式都适用于 Claude。**Fast** 只在 Anthropic 提供商和使用 Anthropic 协议的槽位上提供。

填写 token 数的字段支持 `k` 或 `m` 后缀：`128k` 会转换为 `128000`，`1m` 会转换为 `1000000`。上下文或输出大小不要超过中转站允许的上限，否则请求会失败。

在使用 **OpenAI** 协议的槽位上，<BzWenben jian="models.systemMessage" /> 可选 `system-role` 或 `developer-role`，<BzWenben jian="models.toolFormat" /> 可选 `OpenAI Style` 或 `None (XML)`。对于 Claude，请保持 `OpenAI Style`，这样工具调用才能正常工作。

## 在对话中使用 Claude {#use-claude-in-chat}

### 选择模型

对话会一直显示在 Box 旁边；如果还想把编辑器也调回来，点击标题栏中的 **Agent**。在对话输入框下方点击模型名称，即可打开模型选择器。

- <BzWenben jian="box.models.group.api" /> 分页列出你在 Anthropic 提供商上启用的 Claude 模型（方式 A），并附上标价。
- 切换到选择器底部的 **OpenAI-Compatible**，可以看到各个兼容槽位（方式 B 和 C）。每个槽位是一个分组，分组标题就是它的昵称。

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### 上下文、推理与 Fast {#context-reasoning-and-fast}

将鼠标悬停在选择器中的某个模型上，即可打开它的选项。下面这个面板可以直接操作，不妨试一试。

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**：`200K`（标为 <BzWenben jian="inputToolbar.contextDefault" />）或 `1M`。Breezell 中每个 Claude 模型都默认从 200K 开始，只有你选择 `1M` 之后，才会按更大的上下文预算发送请求。
- **Reasoning**：Claude Fable、Opus 和 Sonnet 5.x 始终开启推理，因此这个开关锁定为开启。`claude-haiku-5-5` 允许关闭推理，以便快速作答。
- **Effort**：`Low`、`Medium`、`High`、`Extra High` 和 `Max`，从 **Faster** 到 **Smarter**。滑块拖到 `Max` 时会变成紫色。
- **Fast**：仅 `claude-opus-5-5`（以及 Opus 5 / Opus 4.8）支持。费用为 2 倍，响应速度约快 2.5 倍。

你的选择会显示在输入框下方的模型名称旁边，例如 `claude-opus-5-5 200K Medium` 或 `claude-opus-5-5 1M High Fast`。每个模型会分别记住自己的设置。

### 发送消息

输入一条消息并发送。如果一切配置正确，回复就会经由你自己的密钥返回。

<BzLiaotian moxing="claude-opus-5-5" wen="你好！你是哪个模型？" da="你好！我是 Claude Opus 5.5，正通过你自己的 API 密钥在 Breezell 中运行。今天我们来做点什么？" />

至此，BYOK 配置全部完成。

## 该选哪个 Claude 模型

| 模型 ID | 上下文 | 输入 / 输出价格（每百万 token） | 默认强度 | 可关闭推理 | Fast | 适用场景 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | 否 | 否 | 最棘手的问题和大规模重构 |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | 否 | 是（2×） | 日常 Agent 工作，默认首选 |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | 否 | 否 | 兼顾速度与成本 |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | 是 | 否 | 快速提问和小幅修改 |

以上价格是 Breezell 内置目录中 Anthropic API 的标价，中转站会自行定价。`claude-haiku-5-5` 的提示超过 100K token 时，按 5 倍费率计费。

## 故障排查

| 你看到的现象 | 原因 | 处理方法 |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | 你的套餐不包含自定义提供商。 | 升级到 Custom API 及以上套餐。 |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | 槽位还没有填写基础地址。 | 填写 <BzWenben jian="settings.baseUrl" />。 |
| <BzWenben jian="box.models.fetchNeedsKey" /> | 密钥字段为空。 | 粘贴密钥。 |
| <BzWenben jian="box.models.fetchAuthFailed" /> | 提供商返回了 401 / 403。 | 重新复制密钥，确认它属于这个提供商，并检查对应的套餐和 IP 白名单。 |
| <BzWenben jian="box.models.fetchFailed" /> … | 中转站没有模型列表，或者地址有误。 | 检查 <BzWenben jian="settings.requestUrl" />，或手动添加模型 ID。 |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | 中转站返回的所有模型都已经在槽位中。 | 无需处理。 |
| <BzWenben jian="box.models.health.errTimeout" /> | 请求超时。 | 检查地址、代理和网络线路。 |
| <BzWenben jian="box.models.health.errConnect" /> | 无法连接到主机。 | 检查地址、DNS 和代理。 |
| <BzWenben jian="box.models.health.errHttp" /> | 中转站返回了 HTTP 错误。 | 最常见的原因是路径或协议不对：将 <BzWenben jian="settings.requestUrl" /> 和协议与提供商的文档逐一对照。 |
| 请求地址中出现 `/v1/v1`，或者缺少 `/v1` | 基础地址与预设不匹配。 | 修改基础地址，直到 <BzWenben jian="settings.requestUrl" /> 正确为止。 |
| 等待很久之后，回复才一次性全部出现 | 中转站缓冲了流式输出。 | 运行 <BzWenben jian="box.models.health.checkStreaming" />。如果结果是 <BzWenben jian="box.models.health.stream.heldThinking" />，调低推理强度可以缩短等待时间。 |
| 超过 200K 的请求失败 | 中转站需要 1M beta 请求头，或者不支持 1M 上下文。 | 在 <BzWenben jian="settings.customHeaders" /> 中点击 **Claude 1M**，或者让模型保持在 `200K`。 |
| 拉取之后模型列表仍然为空 | 列表没有加载出来。 | 重启 Breezell 后重新拉取，或者手动添加 ID。 |

## 常见问题

**可以同时使用 Anthropic 官方密钥和中转站吗？**
可以。方式 A 和每个兼容槽位都彼此独立。对话页的模型选择器会把它们并列显示，你可以在每个对话中分别切换。

**可以保存多个中转站和密钥吗？**
可以。每个中转站使用一个槽位（最多 50 个）。如果要在同一个中转站上轮换多个密钥，请使用该槽位的 <BzWenben jian="settings.accountPool" />。Box 侧栏中的 <BzWenben jian="box.vault.group" /> 会把中转站地址和密钥保存在系统钥匙串中，还能帮你自动填写槽位。

**费用由谁收取？**
由你所用密钥对应的提供商收取。这些请求不会消耗你的 Breezell 额度。<BzWenben jian="box.usage.tab.tokens" /> 视图会显示你用了多少 token；在兼容槽位上设置价格后，还能看到对应的费用。
