---
title: Prompt & Skill Settings
description: Give Breezell standing instructions, memories, reusable skills and a commit message style, per project or for all projects.
---

# Prompt & Skill Settings

Breezell keeps four kinds of standing instructions for the AI in one panel, **Rules, Memories & Skills**:

| | What it is | Used |
| --- | --- | --- |
| **Rules** | Instructions the AI must follow, such as coding conventions or the language of its answers | In every request |
| **Memories** | Dated notes: facts and decisions to keep across conversations | As background notes; your latest request wins |
| **Skills** | Step-by-step playbooks for a specific job, such as writing release notes | Loaded by the AI when a task matches |
| **Commit** | How AI-generated Git commit messages should look | When you generate a commit message |

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page. The navigation in the panel is interactive. Labels such as Rules, Memories, Skills and Commit are English in Breezell as well.
:::

## Open the panel

Click the **Skills & Memory** button (the notebook icon) at the top of the chat panel, between **New Chat** (+) and **Chat History**.

<BzLiaotian biaotilan gaoliang="jiyi" biaoji="1" />

You can also open it from Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.mcp" />: the first card on that page is <BzWenben jian="box.mcp.openSkillsMemory" />.

## Workspace and global

The left side of the panel has two groups:

- <BzWenben jian="common.workspace" />: only for the project that is open. The files live in the project's `.breezell` folder, so they can be committed and shared with your team. This group is greyed out when no folder is open.
- <BzWenben jian="common.global" />: for every project on this computer. The files live in `.breezell` in your home folder.

Pick the scope and the kind on the left. The header shows which one you are editing, and the path at the bottom shows the file it is stored in.

<BzGuize />

The panel saves when you switch pages, leave an editor or close it. <BzWenben jian="rulesMemories.clear" /> at the top right empties the current page; click it twice to confirm.

## Rules

Rules are plain Markdown. Write short, specific instructions that do not contradict each other, for example:

```markdown
# Project rules
- Use TypeScript strict mode. Do not add any.
- Run `pnpm test` after changing files under src/.
- Answer in Traditional Chinese; keep code and identifiers in English.
```

| Scope | File |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/breezell.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_rules.md` |

::: warning Workspace rules replace global rules
When the open project has workspace rules, Breezell sends those and leaves the global rules out. Global rules are used only in projects without workspace rules. If a project needs some of your global rules too, copy them into its workspace rules.
:::

In a workspace with several folders, the rules of every folder are used. Breezell reads the saved file, so an unsaved draft never reaches the AI.

## Memories

Memories are short, dated notes: decisions, preferences, how the project is set up. The AI can also add notes here itself with its `update_memory` tool.

Breezell treats memories as notes, not as rules. When a memory disagrees with your latest request or with the current code, the AI follows the request and the code and offers to update the memory instead. Put anything that must always hold into Rules.

<BzGuize fenye="memories" gaoliang="tianjiajiyi" biaoji="1" />

1. Open <BzWenben jian="common.workspace" /> ▸ Memories (or <BzWenben jian="common.global" /> ▸ Memories).
2. Click <BzWenben jian="rulesMemories.addMemory" />.
3. Write one fact per memory and press `Ctrl+Enter` (or click Save).

Each memory is a card with its date. Hover a card to delete it. The number beside Memories in the left list is how many there are.

| Scope | File |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/memories/workspace_memories.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_memories.md` |

Memories need a plan with Super Memory. Without one, the page shows <BzWenben jian="superMemory.proRequired" />. For memories the AI collects on its own, see [Super Memory](/super-memory).

## Skills

A skill is a folder with a `SKILL.md` file. Breezell gives the AI the name and description of every skill that is switched on; when a task matches a description, the AI loads that skill's full instructions and follows them. A good description therefore says **when** to use the skill.

### Create a skill

1. Open <BzWenben jian="common.workspace" /> ▸ Skills (or <BzWenben jian="common.global" /> ▸ Skills) and click <BzWenben jian="skills.newSkill" />.
2. Enter a name: lowercase letters and hyphens, for example `release-notes`.
3. Enter a one-line description of what the skill is for.
4. Write the instructions: steps, rules and the expected result.
5. Click <BzWenben jian="skills.createSkill" />.

<BzGuize fenye="xinjineng" />

| Scope | Folder |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/skills/<name>/SKILL.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/skills/<name>/SKILL.md` |

A skill can bundle more files (references, scripts) next to `SKILL.md`. Its detail page lists them, and a click opens the file.

### Import skills

Drag files onto the skills list: <BzWenben jian="skills.dropZipPrompt" />. A `.zip` can hold many skill folders at once; a single `.md` becomes one skill named after the file.

### Use skills in a chat

Click the **Skills** button (the layers icon) in the row under the chat input:

<BzLiaotian jinengpan gaoliang="jineng" biaoji="1" />

- <BzWenben jian="skills.builtinTab" />: the skills that come with Breezell, such as `brainstorming` or `requesting-code-review`. They follow the **Superpowers Skills** switch in <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />.
- <BzWenben jian="skills.myTab" />: your workspace and global skills.
- The switch turns a skill on or off. A skill that is off is not offered to the AI.
- The arrow button (<BzWenben jian="inputToolbar.referenceSkill" />) adds the skill to your message, so the AI uses it for this request.

You can also type `/` in the input box to open the skills menu.

Switching skills or MCP servers on or off changes the start of the prompt, which can cost you the provider's prompt cache. Set what you need before a long conversation rather than in the middle of it.

## Commit message

Commit changes how Breezell writes Git commit messages when you generate one.

<BzGuize fenye="commit" />

- An empty page uses Breezell's built-in Conventional Commits prompt.
- Text on the page **replaces** the built-in prompt completely. Breezell still gives the model the diff, the branch and recent commits, so describe only the style: language, format, length.
- The <BzWenben jian="common.workspace" /> prompt wins over the <BzWenben jian="common.global" /> one.
- <BzWenben jian="rulesMemories.clear" /> restores the built-in prompt.

| Scope | File |
| --- | --- |
| <BzWenben jian="common.workspace" /> | `{workspace}/.breezell/rules/commit_prompt.md` |
| <BzWenben jian="common.global" /> | `~/.breezell/memories/global_commit_prompt.md` |

## Summary

- Rules: what the AI must always do. Workspace rules replace global rules.
- Memories: facts to remember, one per card.
- Skills: playbooks the AI loads when a task matches their description; switch them on or off under the chat input.
- Commit: your commit message style, replacing the built-in prompt.
