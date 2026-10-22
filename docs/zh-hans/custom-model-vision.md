---
title: 自定义模型视觉
description: 通过视觉代理，让只能读取文本的模型也能处理图片：由另一个能看图的模型代它读取图片。
---

# 自定义模型视觉

有些模型只能读取文本。借助**视觉代理**，这类模型同样可以处理截图和其他图片：先由另一个能看图的模型读取图片，再由 Breezell 把它写出的描述交给这个纯文本模型。

::: tip 关于本页的界面示意
下面的 Breezell 界面都是依照 Breezell 源码用 HTML 重新搭建的，界面文字跟随本页语言。视觉代理对话框中的模型菜单可以直接操作。
:::

## 什么时候需要它

Breezell 知道哪些模型无法接收图片。在 Box ▸ <BzWenben jian="tab.models" /> 中，这些模型的第一个能力图标（<BzWenben jian="box.models.filter.vision" />）呈灰色，而且只有这些模型的 **⋯** 菜单中才有 <BzWenben jian="models.visionProxy" /> 一项。

例如，在 DeepSeek 提供商中，`deepseek-v4-pro`、`deepseek-chat` 和 `deepseek-reasoner` 只能读取文本，而 Flash 模型可以自己读取图片。所有 Claude 模型都原生支持读取图片，Breezell 模型也从不需要代理。

没有设置代理时，给纯文本模型附加图片会发生什么，取决于提供商：

| 提供商 | 未设置视觉代理时 |
| --- | --- |
| 官方 API 提供商（DeepSeek、OpenAI 等） | 消息不会发送，输入框上方会出现 <BzWenben jian="chat.visionProxyHint.requiredTitle" /> 提示。 |
| OpenAI 兼容槽位 | 图片会原样发送给中转站，因为很多中转站会自带视觉模型。只有当你的中转站无法处理图片时，才需要设置代理。 |

## 工作原理

1. 你向纯文本模型发送一条带图片的消息。
2. Breezell 先把图片发送给你选择的识图模型，要求它准确转录所有可见文字，并描述与你的请求相关的布局、控件、状态、颜色和错误，同时不编造它看不到的细节。
3. 在发给纯文本模型的请求中，这段描述会取代图片，模型随后照常作答。

在 Breezell 运行期间，每张图片对每个识图模型只描述一次，之后会复用这段描述，因此同一张截图不会被重复分析。识图请求的费用由识图模型所属的提供商收取。

## 设置视觉代理

本例为 `deepseek-v4-pro`（纯文本模型）设置代理 `claude-sonnet-5-5`。

### 1. 打开模型菜单

1. 打开 Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.models" />，选择 <BzWenben jian="box.models.group.api" />，然后选中 **DeepSeek**。
2. 如果 `deepseek-v4-pro` 还没有启用，请打开它的开关。它的 <BzWenben jian="box.models.filter.vision" /> 图标呈灰色。
3. 点击该行末尾的 **⋯**，选择 <BzWenben jian="models.visionProxy" />。

<BzMoxingye fenlei="api" tigongshang="deepseek" moxing="deepseek" yipeizhi caidan caidanhang="deepseek-v4-pro" caidangaoliang="shijue" gaoliang="gengduo" biaoji="1" :dakai="['deepseek-v4-pro']" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### 2. 选择识图模型

<BzWenben jian="models.visionProxy" /> 对话框的标题下方会显示你正在配置的模型。

1. 打开 <BzWenben jian="models.visionProxyModel" />。这个列表看起来和对话页的模型选择器一样，同样带有搜索和提供商分组，但只列出能读取图片的模型。
2. 选择一个模型，例如 `claude-sonnet-5-5`。
3. 点击 <BzWenben jian="common.save" />。

你可以在下面试一试这个菜单：

<BzShijuedaili zhankai gaoliang="xuanze" biaoji="2" />

任何能读取图片的模型都可以使用。`claude-sonnet-5-5` 能为内容繁杂的截图给出详细描述；对于简单的图片，`claude-haiku-5-5` 更快也更便宜。

### 3. 发送图片

在对话输入框下方选择 `deepseek-v4-pro`，把图片粘贴或拖入输入框，然后发送消息。

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian />

现在，这个纯文本模型就能针对图片作答了：

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" wentupian wen="为什么我启动应用时会出现这个错误？" da="截图显示：Error: Cannot find module './config.json'（位于 loadConfig，src/config.ts 第 4 行）。应用会在编译后的文件旁边查找 config.json，但构建过程没有复制它。请把 config.json 加入构建时复制的文件，或者改用相对于项目根目录的路径来加载它。" />

## Breezell 要求设置视觉代理时

如果你在官方提供商上给纯文本模型附加图片，而该模型还没有设置代理，Breezell 不会发送这张图片，并会在输入框上方显示以下提示：

<BzLiaotian moxing="deepseek-v4-pro" houzhui="200K High" tupian tishi="xuyao" gaoliang="tishi" biaoji="1" />

点击 <BzWenben jian="chat.visionProxyHint.configureAction" /> 打开 Box，按上文的步骤设置代理，然后重新发送。

你还可能看到：

| 提示或错误 | 含义 | 处理方法 |
| --- | --- | --- |
| <BzWenben jian="chat.visionProxyHint.invalidTitle" /> | 被选作代理的模型同样无法读取图片。 | 重新打开对话框，选择一个能读取图片的模型。 |
| `The configured vision proxy (…) could not analyze the image.` | 识图请求失败，例如代理模型的提供商尚未配置，或者拒绝了该请求。 | 检查代理模型的提供商，或者改选其他代理。 |

如果你没有设置代理就继续对话，之前的图片会从后续消息中略去，以便对话能够继续进行。

## 更改或移除代理

再次从模型的 **⋯** 菜单中打开 <BzWenben jian="models.visionProxy" />。选择另一个模型，或者选择列表顶部的 <BzWenben jian="models.visionProxyNotConfigured" /> 来移除代理，然后点击 <BzWenben jian="common.save" />。设置了代理后，该行的 **⋯** 按钮上会显示一个小圆点。

## 小结

1. Box ▸ <BzWenben jian="tab.models" />：找到纯文本模型（<BzWenben jian="box.models.filter.vision" /> 图标呈灰色）。
2. **⋯** ▸ <BzWenben jian="models.visionProxy" />。
3. 在 <BzWenben jian="models.visionProxyModel" /> 中选择一个能读取图片的模型，然后保存。
4. 照常向纯文本模型发送图片。
