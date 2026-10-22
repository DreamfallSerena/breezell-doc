---
title: Custom Model Vision
description: Let a text-only model work with images through a Vision Proxy, a second model that reads the image for it.
---

# Custom Model Vision

Some models can only read text. With a **Vision Proxy**, such a model can still work with screenshots and other images: a second model that can see reads the image first, and Breezell hands its written description to the text-only model.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page. The model menu in the Vision Proxy dialog is interactive.
:::

## When you need it

Breezell knows which models cannot accept images. In Box ▸ <BzWenben jian="tab.models" />, the first capability icon (<BzWenben jian="box.models.filter.vision" />) of those models is grey, and only those models get the <BzWenben jian="models.visionProxy" /> entry in their **⋯** menu.

For example, on the DeepSeek provider, `deepseek-v4-pro`, `deepseek-chat` and `deepseek-reasoner` are text-only, while the Flash models read images themselves. Every Claude model reads images natively, and the Breezell models never need a proxy.

What happens when you attach an image to a text-only model without a proxy depends on the provider:

| Provider | Without a Vision Proxy |
| --- | --- |
| Official API providers (DeepSeek, OpenAI, …) | The message is not sent. A <BzWenben jian="chat.visionProxyHint.requiredTitle" /> notice appears above the input box. |
| OpenAI-compatible slots | The image is sent to the relay as it is, because many relays attach their own vision model. Set a proxy only if your relay cannot handle images. |

## How it works

1. You send a message with an image to the text-only model.
2. Breezell first sends the image to the image-recognition model you chose. It asks that model to transcribe all visible text exactly and to describe the layout, controls, states, colors and errors that matter for your request, without inventing details it cannot see.
3. The description takes the place of the image in the request to your text-only model, which then answers as usual.

While Breezell is running, each image is described once per recognition model and the description is reused, so the same screenshot is not analyzed twice. The recognition request is billed by the provider of the recognition model.

## Set up a Vision Proxy

This example gives `deepseek-v4-pro` (text-only) a proxy: `claude-sonnet-5-5`.

### 1. Open the model's menu

1. Open Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />, choose <BzWenben jian="box.models.group.api" /> and select **DeepSeek**.
2. Turn on `deepseek-v4-pro` if it is not enabled yet. Its <BzWenben jian="box.models.filter.vision" /> icon is grey.
3. Click **⋯** at the end of its row and choose <BzWenben jian="models.visionProxy" />.

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. Choose the image-recognition model

The <BzWenben jian="models.visionProxy" /> dialog shows the model you are configuring under its title.

1. Open <BzWenben jian="models.visionProxyModel" />. The list looks like the chat model picker, with search and provider groups, but it only offers models that can read images.
2. Choose a model, for example `claude-sonnet-5-5`.
3. Click <BzWenben jian="common.save" />.

Try the menu here:

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

Any model that reads images works. `claude-sonnet-5-5` gives detailed descriptions of busy screenshots; `claude-haiku-5-5` is faster and cheaper for simple images.

### 3. Send an image

Select `deepseek-v4-pro` under the chat input, paste or drag an image into the input box, and send your message.

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

The text-only model now answers about the image:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="Why does this error appear when I start the app?" da="The screenshot shows: Error: Cannot find module './config.json' (at loadConfig, src/config.ts line 4). The app looks for config.json next to the compiled file, but the build does not copy it. Add config.json to the files copied by the build, or load it with a path relative to the project root." />

## When Breezell asks for a Vision Proxy

If you attach an image for a text-only model on an official provider and the model has no proxy yet, Breezell does not send the image and shows this notice above the input box:

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

Click <BzWenben jian="chat.visionProxyHint.configureAction" /> to open Box and set a proxy as described above, then send again.

You may also see:

| Notice or error | What it means | What to do |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | The model chosen as proxy cannot read images either. | Open the dialog again and choose a model that reads images. |
| `The configured vision proxy (…) could not analyze the image.` | The recognition request failed, for example because the proxy's provider is not configured or rejected the request. | Check the proxy model's provider, or choose another proxy. |

If you continue the conversation without setting a proxy, the earlier image is left out of later messages so that the chat can go on.

## Change or remove the proxy

Open <BzWenben jian="models.visionProxy" /> from the model's **⋯** menu again. Choose another model, or choose <BzWenben jian="models.visionProxyNotConfigured" /> at the top of the list to remove the proxy, then click <BzWenben jian="common.save" />. When a proxy is set, the **⋯** button of that row shows a small dot.

## Summary

1. Box ▸ <BzWenben jian="tab.models" />: find the text-only model (grey <BzWenben jian="box.models.filter.vision" /> icon).
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />.
3. Choose a model that reads images in <BzWenben jian="models.visionProxyModel" /> and save.
4. Send images to the text-only model as usual.
