---
title: Agents Page
description: "The Agents page of Breezell (new in 1.4.58, updated in 1.4.59): new windows open on the conversations of every project. How to switch pages, the side bar and Git, grouping, adding projects, subagents, the conversation menu, carrying on other projects' conversations from here, the right side and terminals, the account bar, multi-project workspaces, the auto-approve notes, the New User Guide, and the current limits."
---

# Agents Page

The Agents page is a page of Breezell that puts **the conversations of all your projects in one place**. On the left is a side bar that lists every project and its conversations. On the right is the same editor area as in the IDE, where files, conversations and the built-in browser can sit side by side. You can see what every AI is doing and which one is waiting for you without opening each project's window first, and you can carry on with a conversation right here.

This guide describes Breezell 1.4.59 (the Agents page first arrived in 1.4.58). It covers how to switch pages, every part of the side bar, how to add projects, the conversation menu, how to work with the conversations of other projects, the right side and terminals, the account bar, multi-project workspaces, the New User Guide, and the current limits.

## Get to the page {#open}

The title bar has a switch: **Box | Agents | IDE**. Click **Box** for the page with the models, the feature options and all of Breezell's settings, **Agents** for this page, and **IDE** for the editor you know.

- New windows open on the Agents page by default.
- When you close a window and open it again, it comes back on the page it was on when it was closed (Agents, IDE or Box).
- A window opened to show files, for example when you open a file with Breezell, always opens on the IDE.
- To stop new windows from opening on the Agents page, click **More** (the three dots) at the top right of the page and clear **Show This Page When a Window Opens**. You can also open **Settings**, search for "Agents page" and clear "Open new windows on the Agents page" (the text of this setting is in English).

| Term | Meaning |
| --- | --- |
| Project | A folder (or a multi-folder workspace), on this computer, in WSL or over SSH. |
| Agent | One conversation. Every conversation in the side bar is an agent. |
| Subagent | A conversation started by another conversation. It is listed under the one that started it. |
| Right side | The editor area on the right of the page: files, conversation tabs and the built-in browser side by side. |

## The side bar {#sidebar}

At the top of the side bar are four entries:

- **New Chat** starts a new conversation in this window's project.
- **Git** opens this project's Git in the middle of the page; the number beside it is how many files have changed. See [Git](/git) for how to use it.
- **Customize** opens rules, memories and skills.
- The search button (**Search conversations**) opens a search box. Type to filter the conversations. `Esc` clears it and closes it.

Below them is the **Agents** section, which lists conversations by project:

- This window's project comes first. After it come every other project that has conversations and the projects you added yourself, most recently used first.
- Each project row shows its environment (for example `WSL: ubuntu` or `SSH: host`), when it was last used, and a **+**. The **+** (tooltip "New Agent in {project}") starts a new conversation in that project.
- Each conversation has a dot that shows its state: **Working**, **Waiting for you**, or idle (no special mark). Next to it is its age, for example "now", "5m" or "2h".
- When a project has more conversations than fit, click **Show more**.
- While the list scrolls, the entries above it and the **Agents** title stay in place; grouped by project, a project's name stays at the top of the list until the next project scrolls up.

To hide the side bar, click the button at its top left (**Toggle Side Bar**). While it is hidden, the top of the page has a button to bring it back, next to a **New Chat** button.

## Group By {#group-by}

The filter button beside the **Agents** heading (**Group By**) offers three ways to arrange the list:

- **Project**: one group per project. This is the default.
- **Time**: all conversations in one list, newest first, each marked with the project it belongs to.
- **Status**: three groups, **Working**, **Waiting for You** and **Other**, so you can see at a glance which agent is waiting for you.

## Add projects {#add}

The side bar lists projects that have conversations. To make a folder appear from the start, click the folder button beside the **Agents** heading (**Add Projects…**):

- When there is only one place to choose from, the folder chooser opens at once, and you can pick several folders together.
- When there are several places, a menu comes first. In a window on this computer it offers **Add a Windows Folder…**, and **Add a WSL Folder…** when WSL is installed. In a WSL or SSH window it offers **Add a Folder on {place}…**. Places you have used before (for example an SSH host) are listed as **Add Projects on {place}…**, where you tick its projects or type a full path. The last entry is **Connect to Another Host…**.

Projects you add stay in the side bar until you remove them.

Right-click a project row for:

- **New Agent in {project}**: the same as the **+**.
- **Open in IDE**: goes to the IDE page. For another project it shows that project's own window, opening it first if it is not open.
- **Remove from Side Bar**: takes the project off the side bar. Nothing is deleted. This window's own project cannot be removed.

## The conversation menu {#menu}

Right-click a conversation in the side bar. The menu depends on which project the conversation belongs to.

**A conversation of this window's project:**

- **Open on the Right** opens it as a tab on the right side.
- **Reference conversation** puts it in the current message box. The AI reads it when it needs to.
- **Rename**, **Pin to top** (**Unpin** when it is pinned) and **Favorite** (**Unfavorite** when it is a favorite).
- **Export chat**. This is offered only for this window's conversations.
- **Delete**.

**A conversation of another project:**

- **Open on the Right** and **Reference conversation**.
- **Continue in Its Window** goes on in that project's own window.
- **Rename**, **Pin to top**, **Favorite** and **Delete**, all done in that project.
- There is no **Export chat**.

## Subagents {#subagents}

A subagent is a conversation started by another conversation. Subagents are listed under the conversation that started them, indented one level, in the order they started.

- A conversation that has subagents has a button on its row. Click it to **Fold Subagents**. While they are folded, the row shows how many there are, and clicking again (**Show Subagents**) unfolds them. The page remembers what you chose.
- Click a subagent to open it as a tab on the right side.

## Conversations of other projects {#other}

Click another project's conversation in the side bar and the main area shows it. You can read what it did. To carry on, just write in the message box here. The conversation goes on in that project, and the page shows its progress live.

Everything you do here happens in that project:

- Sending a message and editing an earlier one.
- Approving or refusing what the AI wants to do, and **Stop**.
- **Keep all** and **Discard all** on its change bar.
- Attached files, code selections, pictures and pasted text are sent with the message.
- The plan card, the mode switch card, a subagent's **Start**, interaction designs, the model choice for image generation, and the buttons of team cards.
- Command cards show live output, with **To background** and **Stop**; **Open** opens that command's terminal on the right, where you can type.
- Queued messages are sent when the reply ends; context usage, **Manual compress**, **Revert to this point** and checkpoints work.

If that project has no open window, Breezell opens one in the background without showing it. It closes by itself after it has been idle for a while: nothing is running, nobody is looking at it and no file is unsaved. To see its window, right-click the project and choose **Open in IDE**.

File links in its replies open that project's files at the right line.

To work in the project's own window instead, right-click the conversation and choose **Continue in Its Window**.

## The right side {#right}

The right side is the Agents page's own editor area. Files, conversation tabs and the built-in browser can be open side by side, as in the IDE, but files opened here are not added to the IDE's tabs, and the IDE's tabs do not show here.

- Drag a conversation from the side bar to the right side to see it side by side, or use **Open on the Right** in its menu.
- The button at the top of the page (**Show Right Panel** / **Hide Right Panel**) hides it and brings it back.
- Drag the edge of the side bar to change its width, and double-click the edge to reset it. The edge of the right side can be dragged to resize it too.
- Terminals opened on this page (`Ctrl+J`, `` Ctrl+` ``, **Toggle Panel** in the title bar, **New Terminal**, or **Open** on a command card) open on the right, in the project of the conversation you are looking at; a WSL project gets a WSL terminal. On the IDE, this window's terminals are back in the IDE's panel.
- On this page, `Ctrl+Alt+B` opens and closes the right side.

## The account bar {#account}

At the bottom of the side bar is the account bar:

- Your avatar, name, plan and balance (a team member does not see the balance). Click it to open the account panel.
- The gear (**Settings**) opens Breezell's settings.
- The **More** (three dots) menu has **Manage plan**, **Updates**, **Send Feedback** and **Sign out**.
- When you are signed out, it shows **Sign in** and "Sign in to your Breezell account". Click it to start signing in.

## Multi-project workspaces {#workspaces}

When you have merged several projects into one window (see [Project Group and Shared Memories](/project-group)), this window's project row reads "Multi-Project Workspace" and lists the projects in it beside the name.

A conversation brought in from a member project shows that project as a small colored tag in front of its title, instead of "[name]" in the title.

## Auto-approve notes {#auto-approve}

Even with auto-approve on, some actions still stop and ask you, and the card now says why, for example: "Auto-approve is on, but this command may delete a whole folder, or what it deletes cannot be known in advance, so it needs your confirmation." This happens for:

- A command that may delete a whole folder, or whose delete target cannot be known in advance.
- A change to the AI's rules, skills, memories or MCP settings.
- A change to files that run on their own (git config and hooks, workspace settings and tasks, shell profiles).
- A change to SSH keys or SSH config.
- Deleting a workspace, the home folder, or a whole folder outside the workspace.

These confirmations appear in the same way when you work on another project's conversation from the Agents page.

## New User Guide {#tour}

The first time you use Breezell, the New User Guide starts on this page: **New Chat**, switching models, **Git**, **Customize**, moving between Box, Agents and IDE, then Box for the official models and how to add your own API. When it ends you are back on the page you were on. To see it again, open "New User Guide" from the Help menu.

## Limits {#limits}

- In another project's conversation the **Try again** button of a failed reply is not available.
- From a window on this computer, file links of an SSH project cannot be opened.
- With **Status** grouping, other projects' agents are sorted into **Working** or **Waiting for you** only while that project's window is open (also in the background); otherwise they are listed under **Other**.
