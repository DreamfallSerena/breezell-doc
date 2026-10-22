---
title: Custom API (BYOK)
description: Bring your own API key to Breezell and run Claude models through the official Anthropic API or any compatible relay.
---

# Custom API (BYOK)

BYOK means **Bring Your Own Key**. Instead of using the official Breezell quota, Breezell sends requests to a model provider with your own API key, and that provider bills you directly.

This guide walks through the whole setup with Claude models: `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5` and `claude-fable-5-1`.

::: tip About the screens on this page
There are no screenshots on this page. Every Breezell screen below is rebuilt in HTML from the Breezell source code. The text follows the language of this page, and the colors follow the light / dark switch of this site (Breezell Light / Breezell Dark).

Orange rings and numbered badges show where to click. They are not part of Breezell. Some screens are interactive: you can switch the protocol, edit the Base URL, press **Claude 1M**, toggle reasoning and drag the effort slider.
:::

## Before you start

You need three things:

1. **A Breezell account on the Custom API plan or higher.** Third-party models on your own key are a paid feature. Without the plan, the provider page shows <BzWenben jian="box.models.gate.planRequired" /> instead of the form, and if you are not signed in it shows <BzWenben jian="box.models.gate.signIn" />.
2. **A key.** Either an Anthropic API key from the Anthropic Console (it starts with `sk-ant-`), or the Base URL and key of a relay, gateway or self-hosted proxy.
3. **The protocol your relay speaks.** Ask your provider whether it offers the Anthropic Messages API (`/v1/messages`), the OpenAI Chat Completions API (`/v1/chat/completions`), or both.

## Choose your route

| Route | Use it when | Where in Breezell | Protocol |
| --- | --- | --- | --- |
| **A. Anthropic API** | You have a key from the Anthropic Console | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages (built in) |
| **B. Compatible slot + Anthropic protocol** | Your relay offers `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › a slot | Anthropic |
| **C. Compatible slot + OpenAI protocol** | Your relay only offers `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › a slot | OpenAI |

For Claude, prefer **A** or **B**. Breezell itself recommends it in the slot form: <BzWenben jian="settings.apiFormat.anthropicTip" />

## Step 1: Open Box (Breezell Settings)

Breezell Settings live on the **Box** page. Box replaces the activity bar, side bar, editor area and panel while you are in it; click **Agent** to go back to your code.

There are three ways to open it:

- Click **Box** in the switch at the left of the title bar.
- Click the gear icon at the top right and choose <BzWenben jian="box.title" />.
- Open the Command Palette and run `Breezell: Open Settings`.

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## Step 2: Go to the Models page

In the Box sidebar, open the <BzWenben jian="box.title" /> group and click <BzWenben jian="tab.models" />. This is usually the page Box opens on.

<BzHezi gaoliang="moxing" />

At the top of the page you will find four views: <BzWenben jian="box.usage.tab.models" />, <BzWenben jian="box.usage.tab.cache" />, <BzWenben jian="box.usage.tab.tokens" /> and <BzWenben jian="box.usage.tab.breezell" />. Stay on the first one.

Below it, the provider categories split the providers into four groups:

| Category | What it holds |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | The official Breezell models on your Breezell quota. No key needed. |
| <BzWenben jian="box.models.group.signin" /> | Providers you sign in to with an account, such as Codex or Copilot. |
| <BzWenben jian="box.models.group.api" /> | Official vendor APIs on your own key, Anthropic included. |
| <BzWenben jian="box.models.group.compat" /> | Up to 50 custom slots for relays, gateways and self-hosted proxies. |

## Route A: The Anthropic API

### A1. Select Anthropic

1. Click <BzWenben jian="box.models.group.api" />.
2. Type `Anthropic` in <BzWenben jian="box.models.searchProvidersPlaceholder" />.
3. Click the **Anthropic** tile. The selected provider appears below with the status <BzWenben jian="box.models.notConfigured" />.
4. Click <BzWenben jian="box.models.editConfig" /> to open its configuration.

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Paste your Anthropic key

The configuration has a single field: the API key.

1. Click the **Get your API Key** card. It opens the Anthropic Console (`console.anthropic.com/settings/keys`) in your browser.
2. Create a key and copy it. It looks like `sk-ant-api03-...`.
3. Paste it into the field. The eye icon shows or hides it.

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Breezell cleans the key before using it: it removes spaces, surrounding quotes, a leading `Bearer ` and invisible characters that often come along when you copy. The Anthropic provider has no Base URL field; Breezell always uses `https://api.anthropic.com`.

### A3. Turn on the Claude models you want

As soon as the key is saved, the status changes to <BzWenben jian="box.models.configured" /> and the list shows Breezell's built-in Claude models, newest first.

Only the first five start enabled: `claude-fable-5-1`, `claude-fable-5`, `claude-opus-5`, `claude-opus-5-5` and `claude-opus-4-8`. Turn on the switch at the end of a row to add a model to the chat model picker, for example `claude-sonnet-5-5` and `claude-haiku-5-5`.

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

How to read the table:

| Column | Meaning |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | The model ID sent to the API. A green dot means the model is enabled. |
| <BzWenben jian="box.models.context" /> | The model's full context window. All Claude 5 models have 1M. |
| <BzWenben jian="box.models.capabilities" /> | Four icons: <BzWenben jian="box.models.filter.vision" />, <BzWenben jian="box.models.filter.tools" />, <BzWenben jian="box.models.filter.reasoning" />, <BzWenben jian="box.models.filter.web" />. A lit icon means the model has it. |
| <BzWenben jian="models.pricing" /> | Input / output price in USD <BzWenben jian="box.models.price" />, from Breezell's built-in catalog. Anthropic's bill is authoritative. |
| <BzWenben jian="box.mcp.colEnabled" /> | Shows or hides the model in the chat model picker. |

When the table gets narrow, Breezell drops the <BzWenben jian="box.models.context" /> column first and then <BzWenben jian="box.models.capabilities" />; their values move into the tooltip of the model name.

If Anthropic releases a model that is not in the list yet, click <BzWenben jian="box.models.fetch" />. Breezell reads `https://api.anthropic.com/v1/models` with your key and lets you add the new IDs. You can also type an ID into <BzWenben jian="box.models.addModelPlaceholder" /> and click <BzWenben jian="box.models.add" />.

Route A is done. Continue with [Use Claude in chat](#use-claude-in-chat).

## Route B: A compatible slot with the Anthropic protocol

Use this route for a relay, an API gateway or a self-hosted proxy that serves Claude through the Anthropic Messages API.

### B1. Open a compatible slot

1. Click <BzWenben jian="box.models.group.compat" />.
2. Click the slot tile. Slot 1 is always there; a new slot shows <BzWenben jian="settings.noEndpoint" /> under its name.
3. To keep several relays apart, click <BzWenben jian="box.models.addCompat" /> for each one. Breezell has 50 slots, and each slot is an independent channel with its own address, key, protocol and models.
4. Click <BzWenben jian="box.models.editConfig" />.

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. Fill in the slot

The form is the same for every slot. Try it below: change the Base URL or the protocol and watch <BzWenben jian="settings.requestUrl" /> update, exactly as it does in Breezell.

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />: a name of up to 30 characters, such as `Claude Relay`. It becomes the tile title on the Models page and the group name in the chat model picker.
- <BzWenben jian="settings.baseUrl" />: the address your provider gives you. It must start with `http://` or `https://`, for example `https://relay.example.com` or `http://127.0.0.1:8080`.

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />: the relay's key. It is masked; the eye icon reveals it.

**<BzWenben jian="settings.sectionProtocol" />**

Choose **Anthropic**. The three buttons decide the request format:

| Button | Request format | Use for Claude? |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | Only when the relay has no `/v1/messages` (Route C). |
| Responses | OpenAI Responses | No. Meant for GPT models. |
| **Anthropic** | Anthropic Messages | **Yes.** Breezell recommends it for Claude. |

Then check <BzWenben jian="settings.endpointPreset" />. With the Anthropic protocol there are two presets:

| Preset | Path | Use it for |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | Almost every relay. Keep this one. |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Volcengine Agent Plan only. |

### B3. Check the request URL

<BzWenben jian="settings.requestUrl" /> under the preset is the exact address Breezell will call. Breezell joins the Base URL and the preset path and removes a duplicated part, so both common styles of Base URL work:

| Base URL you enter | Preset | Request URL |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

Compare the result with your provider's documentation. If the provider puts its API under an unusual path, enter the Base URL so that the request URL ends exactly where the provider says.

### B4. Custom headers and Claude 1M (optional)

<BzWenben jian="settings.customHeaders" /> adds HTTP headers to every request of this slot. Leave it as `{}` unless your provider asks for something.

The value must be valid JSON: double quotes for keys and values, no comments, no trailing commas.

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

The **Claude 1M** button fills in exactly this header. Use it when your relay needs the beta header to accept prompts larger than 200K. Breezell's chat still starts each Claude model at 200K; you switch to 1M per model in the chat model picker (see [Context, reasoning and Fast](#context-reasoning-and-fast)).

Under the headers you will see the <BzWenben jian="settings.accountPool" /> card. An account pool rotates several keys or routes on one slot. You do not need it for a first setup.

### B5. Add Claude models

A new slot has no models. Add them in one of two ways.

**Fetch the list.** Click <BzWenben jian="box.models.fetch" />. Breezell asks the relay which models it has, then shows them in a checklist. Tick the Claude models and click <BzWenben jian="box.models.addSelected" />.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**Type the ID.** Type the model ID into <BzWenben jian="box.models.addModelPlaceholder" /> and click <BzWenben jian="box.models.add" />. Use the ID exactly as the relay names it, for example `claude-opus-5-5`. This is the way to go when the relay has no model list.

### B6. Check the slot

Click <BzWenben jian="box.models.health.checkSlot" /> to send a short request to this slot. A failed model gets a <BzWenben jian="box.models.health.ribbonFail" /> badge and a slow one <BzWenben jian="box.models.health.ribbonTimeout" />; a slot that cannot be reached at all is marked <BzWenben jian="box.models.health.ribbonDown" /> on its tile.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

For a closer look, click <BzWenben jian="box.models.checkConnectivity" /> above the slot tiles. It checks several slots and models at once, and <BzWenben jian="box.models.health.checkStreaming" /> tells you whether a relay streams replies piece by piece (<BzWenben jian="box.models.health.stream.streaming" />), holds back the thinking (<BzWenben jian="box.models.health.stream.heldThinking" />) or sends everything at the end (<BzWenben jian="box.models.health.stream.buffered" />).

## Route C: A compatible slot with the OpenAI protocol

Some relays serve Claude only through the OpenAI Chat Completions format. Set the slot up as in Route B, with these differences:

1. In <BzWenben jian="settings.sectionProtocol" />, choose **OpenAI**.
2. Keep the preset <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" /> (`/v1/chat/completions`).
3. Add the models under the IDs the relay uses. Many relays use `claude-opus-5-5`; some prefix the vendor, such as `anthropic/claude-opus-5-5`.

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell recognizes Claude models by name, so `anthropic/claude-opus-5-5` or `claude-opus-5.5` get the same limits as `claude-opus-5-5`. Note what the form itself says: <BzWenben jian="settings.apiFormat.openaiTip3" /> On the OpenAI protocol Breezell also cannot offer **Fast** for Claude Opus. If your relay also offers `/v1/messages`, switch the slot to **Anthropic**.

## Manage your Claude models

### The row menu

Every model row has a **⋯** button. For a Claude model on a compatible slot it offers <BzWenben jian="box.models.pin" />, <BzWenben jian="box.models.advanced" /> and <BzWenben jian="box.models.remove" />. Hover a row to reveal the copy icon next to the model name.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### Set the price

Breezell knows the list prices of Anthropic's own API, but not your relay's. On a compatible slot the price column shows <BzWenben jian="box.models.editPrice" />. Click it and enter your relay's prices in USD per 1M tokens: input, output, cache hit, and the 5-minute and 1-hour cache writes that Claude uses. The <BzWenben jian="box.usage.tab.tokens" /> view then shows costs as well as tokens. Without a price, Breezell still counts tokens, just not money.

### Advanced settings

Breezell recognizes every Claude model ID in this guide and fills in its limits for you, so most people never open this dialog. Open it when the relay renames a model (for example `my-claude`), when Breezell shows the model as not recognized, or when the relay enforces smaller limits.

Turn on <BzWenben jian="models.enableCustomSettings" /> first; until then every card stays grey and read-only.

<BzGaoji />

The values Breezell uses for Claude 5 models:

| Setting | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| Context window (short / long) | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | Off | Off | Off | **On** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | Off | **On** | Off | Off |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

The table shows a compatible slot with the Anthropic protocol. On the Anthropic provider (Route A) the system message is `separated` instead; both work with Claude. **Fast** is offered only on the Anthropic provider and on slots with the Anthropic protocol.

Fields that accept token counts take a `k` or `m` suffix: `128k` becomes `128000`, `1m` becomes `1000000`. Do not set a context or output size larger than your relay allows, or requests will fail.

On a slot with the **OpenAI** protocol, <BzWenben jian="models.systemMessage" /> offers `system-role` or `developer-role`, and <BzWenben jian="models.toolFormat" /> offers `OpenAI Style` or `None (XML)`. Keep `OpenAI Style` for Claude so that tool calls work.

## Use Claude in chat {#use-claude-in-chat}

### Pick the model

The chat stays open next to Box; click **Agent** in the title bar if you also want your editor back. Under the chat input box, click the model name to open the model picker.

- The <BzWenben jian="box.models.group.api" /> tab lists the Claude models you enabled on the Anthropic provider (Route A), with their list price.
- Switch to **OpenAI-Compatible** at the bottom of the picker to see the compatible slots (Routes B and C). Each slot is a group titled with its nickname.

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context, reasoning and Fast {#context-reasoning-and-fast}

Hover a model in the picker to open its options. This panel is interactive: try it.

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**: `200K` (marked <BzWenben jian="inputToolbar.contextDefault" />) or `1M`. Breezell starts every Claude model at 200K and only sends the larger budget after you pick `1M`.
- **Reasoning**: Claude Fable, Opus and Sonnet 5.x always reason, so the switch is locked on. `claude-haiku-5-5` lets you turn it off for quick answers.
- **Effort**: `Low`, `Medium`, `High`, `Extra High` and `Max`, from **Faster** to **Smarter**. The slider turns purple at `Max`.
- **Fast**: only on `claude-opus-5-5` (and Opus 5 / Opus 4.8). It costs 2× and answers about 2.5× faster.

Your choice shows next to the model name under the input box, for example `claude-opus-5-5 200K Medium` or `claude-opus-5-5 1M High Fast`. It is remembered per model.

### Send a message

Type a message and send it. If everything is set up, the reply comes back through your own key.

<BzLiaotian moxing="claude-opus-5-5" wen="Hello! Which model are you?" da="Hello! I'm Claude Opus 5.5, running in Breezell through your own API key. What are we building today?" />

You have finished the BYOK setup.

## Which Claude model to use

| Model ID | Context | Price in / out (per 1M tokens) | Default effort | Reasoning off | Fast | Good for |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | No | No | The hardest problems and long refactors |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | No | Yes (2×) | Everyday agent work: the default pick |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | No | No | Balanced speed and cost |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | Yes | No | Quick questions and small edits |

Prices are the list prices in Breezell's built-in catalog for the Anthropic API. A relay sets its own prices. `claude-haiku-5-5` prompts longer than 100K tokens are billed at 5× the rate.

## Troubleshooting

| What you see | What it means | What to do |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | Your plan does not include custom providers. | Upgrade to the Custom API plan or higher. |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | The slot has no Base URL yet. | Fill in <BzWenben jian="settings.baseUrl" />. |
| <BzWenben jian="box.models.fetchNeedsKey" /> | The key field is empty. | Paste the key. |
| <BzWenben jian="box.models.fetchAuthFailed" /> | The provider returned 401 / 403. | Copy the key again, check that it belongs to this provider, and check its plan and IP allowlist. |
| <BzWenben jian="box.models.fetchFailed" /> … | The relay has no model list, or the address is wrong. | Check <BzWenben jian="settings.requestUrl" />, or add the model IDs by hand. |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | Every model the relay returned is already in the slot. | Nothing to do. |
| <BzWenben jian="box.models.health.errTimeout" /> | The request timed out. | Check the address, your proxy and the network route. |
| <BzWenben jian="box.models.health.errConnect" /> | The host could not be reached. | Check the address, DNS and proxy. |
| <BzWenben jian="box.models.health.errHttp" /> | The relay answered with an HTTP error. | Most often a wrong path or a wrong protocol: compare <BzWenben jian="settings.requestUrl" /> and the protocol with the provider's documentation. |
| The request URL contains `/v1/v1` or misses `/v1` | The Base URL and the preset do not fit together. | Correct the Base URL until <BzWenben jian="settings.requestUrl" /> is right. |
| The reply appears all at once after a long wait | The relay buffers the stream. | Run <BzWenben jian="box.models.health.checkStreaming" />. On <BzWenben jian="box.models.health.stream.heldThinking" />, a lower effort shortens the wait. |
| Requests over 200K fail | The relay needs the 1M beta header, or has no 1M context. | Press **Claude 1M** in <BzWenben jian="settings.customHeaders" />, or keep the model at `200K`. |
| The model list is still empty after fetching | The list was not loaded. | Restart Breezell and fetch again, or add the IDs by hand. |

## FAQ

**Can I use the official Anthropic key and a relay at the same time?**
Yes. Route A and every compatible slot are independent. The chat model picker shows them side by side, and you can switch per conversation.

**Can I store several relays and keys?**
Yes. Use one slot per relay (up to 50). To rotate several keys on the same relay, use the <BzWenben jian="settings.accountPool" /> of that slot. <BzWenben jian="box.vault.group" /> in the Box sidebar keeps relay addresses and keys in your system keychain and can fill a slot for you.

**Who bills me?**
The provider whose key you use. Breezell does not charge your Breezell quota for these requests. The <BzWenben jian="box.usage.tab.tokens" /> view shows how many tokens you used; set prices on compatible slots to see the cost too.
