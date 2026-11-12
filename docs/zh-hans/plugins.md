---
title: 插件
description: 从 Breezell 市场安装插件，或用 Breezell API 自己写一个。
---

# 插件

Breezell 插件是一种 VS Code 扩展，额外带有 `vscode.breezell`，因此能与 Breezell 本身交互：对话、Agent、模型选择器，以及编辑器自己的界面。插件只在你登录 Breezell 时运行；退出登录后就会停用。

## 安装与管理

打开 **Box ▸ 插件**。市场会列出所有已上架的插件：可以搜索、按分类筛选、切换开源与闭源，也能一页一页浏览。每张卡片都有「安装」、「打开」、启用开关与「卸载」。

- **已安装**：每个插件一行，显示状态、版本、来源、许可、标识符，以及「窗口」、「添加的内容」、「权限」三张卡片。
- **开发**：从模板创建插件，并列出从代码到上架的步骤。
- **安装本地 .vsix**：安装你自己打包的包；校验和与已上架版本不一致的包不会安装。

添加面板或窗口的插件，也会出现在 Box 侧边栏的「插件」下面。

## 插件的种类

| 种类 | 内容 | 示例 |
|---|---|---|
| Pack | 没有代码：在 `package.json` 中声明技能、AI 规则、MCP 服务器和主题 | Starter Pack |
| Panel | 在 Breezell 内打开自己的页面，并跟随对话 | Focus Player |
| AI | 使用你的对话模型的命令 | Doc Writer |
| Window | 自己的窗口，也可以不打开编辑器单独启动 | Focus Timer |
| Conversation | 读取对话、发送消息、批准工具调用，以及开启子代理、给它发消息、关闭它 | Chat Mirror |
| Screens | 在 Breezell 自己的界面上添加按钮、页面、替换区块、代码块和模式 | Desk Pet |
| Companion | 浮在输入框上、跟随 AI 动作的小伙伴 | Desk Pet |
| Long-running | 让对话持续进行到完成，有次数限制和自己的页面 | Goal |

这些种类可以组合：同一个插件可以同时提供技能、面板、AI 命令和窗口。若想看包含设置页面、从 GitHub Release 下载数据以及在系统中安装组件的较大插件，请参考 Breezell IME。

## 开发插件

在 Breezell 中打开 **Box ▸ 插件 ▸ 开发**，填入标识符和名称，选择模板（Pack、Panel、AI command、Window 或 Minimal）以及开源或闭源，再选择文件夹并在新窗口中打开。按 **F5** 即可运行。

从命令行创建（需要 Node.js 18 或更高版本）：

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| 命令 | 作用 |
|---|---|
| `npm run build` / `npm run watch` | 用 esbuild 把 `src/extension.ts` 打包成 `dist/extension.js` |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run validate` | 检查 `package.json` |
| `npm run package:open` | 以开源方式打包：源码和 source map 一并放进包内 |
| `npm run package:closed` | 以闭源方式打包：只放压缩后的代码，没有源码和 source map |
| `npm run submit -- --market` | 把包加入市场 |

## 插件能做什么

插件要在 `package.json` 中声明它需要的权限；没有声明的一律不能用。日常权限（例如知道对话何时开始、结束）默认开启。有风险的权限（例如使用你的对话模型、读取对话、发送消息、批准工具调用、读取你的代码或输入框、在消息发送前修改它、读取自定义 API 密钥）会在插件第一次用到时询问，并记住你的回答。

插件碰不到你的账号、方案、额度、计费、自定义 API 设置、权限对话框、工具批准和插件管理界面。需要你处理的提示一律显示在插件界面之上；插件加进 Breezell 的按钮会标注「来自插件：名称」。

### 子代理

从比 1.4.56 新的 Breezell 开始，插件也能操作子代理：子代理是「代理」或「纠缠」模式的对话开出的独立对话，沿用那段对话的模式，做完会向它汇报。有 `chat.read` 的插件可以列出一段对话的子代理，看出哪些对话是子代理、各自在做什么；有 `chat.send` 的插件可以用一项任务开启子代理、给它发消息、关闭它。插件这样发出的内容一律标为插件的，不会当成你或主 agent 说的话；插件开启或关闭子代理时，主 agent 也会收到通知。详见开发者指南的 [Subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md#subagents-chatread-chatsend)。

## 发布

Fork [BreezellCode 仓库](https://github.com/BreezellCode/BreezellCode)，打包插件（`npm run package:open` 或 `npm run package:closed`），运行 `npm run submit -- --market`，再开一个 pull request。市场检查会先跑，接着由维护者审核。闭源插件只包含压缩后的代码。

## 完整开发者指南

完整的指南（`package.json`、每一项权限、API 的每个调用、错误、限制、对话、模型与提供商、Agent、Breezell 的界面、窗口、重启、翻译、安全性、发布和示例）位于仓库中：

- [插件总览](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [开始开发](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [API 参考](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [权限](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [对话与子代理](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md)
- [发布](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

从模板创建的插件也会附带 AI 技能（`.agents/skills/breezell-plugin/`），并以这些页面作为参考资料，因此 AI 助手也能照着同一份指南开发。
