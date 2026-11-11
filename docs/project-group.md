---
title: Project Group and Shared Memories
description: "Put projects that are open in separate windows into one group so the AI can work across them: building a group, the group page and the capsule above the message box, the four AI permissions, shared memories and conversations, handing a task over, merging into one window, and what happens when a window is closed."
---

# Project Group and Shared Memories

Breezell can put **several projects that are open in their own windows** into one group. Once they are grouped, the AI in one window can read the other projects' files, recall their memories, read their conversations and hand a task to their windows. You decide, one switch at a time, how much of that is allowed.

This guide describes Breezell 1.4.55 (groups first arrived in 1.4.54; the capsule and the four switches are new in 1.4.55). It covers how to make a group, where to find it, what each switch does, how memories and conversations are shared, how to merge a group into one window and split it again, how projects in other environments (WSL, SSH) behave, and what happens when a window is closed.

## What a group is {#what}

A Breezell window only reaches the folder it has open. When a project is split into a frontend and a backend, or into several repositories, the AI often sees only half of it: it can change the frontend call site but cannot read what the backend changed. A group connects windows that are already open:

- You do not have to put the projects in one folder, and you do not have to open them as one multi-root workspace.
- Group projects can live on Windows, in WSL and over SSH. One window still reaches one environment, but one group can work across environments.
- Nothing is moved or copied. A group only tells Breezell that these projects belong together.

| Term | Meaning |
| --- | --- |
| Group | A set of projects with a name. A project belongs to one group at a time. |
| Member | A project in the group. From any one window, the project of that window is "this project" and the others are the other members. |
| AI Permissions | Four switches that say what the AI of one member may do with the others: **Read Files**, **Change Files**, **Share Memories**, **Share Conversations**. |
| Capsule | The small pill above the message box that shows the group and its permissions. |
| Group page | The editor tab titled "Project Group and Shared Memories", where everything about the group is set. |

## Make a group {#make}

### Let Breezell offer it {#offer}

When a message of yours mentions another **open** project, by its name, a path, a file, an interface it serves or a port it runs on, a card appears above the message box with the title "Put these projects in one group?". The reason is shown under the title, for example *You mentioned "breezell-api".*

The card never blocks the turn. The AI answers as usual, and nothing changes until you press one of its buttons.

- The first row is always ticked: **this project**, the window you are in.
- Under it are the other open projects Breezell recognises. The one you mentioned is already ticked, and you can tick more.
- **Group name** can be edited. It is the name shown on the group card in the project list. When the mentioned project already belongs to a group, the card asks "Add the ticked projects to the group *name*?" instead and has no name field.
- **Group them** groups the projects and leaves every window open.
- **Group and Merge into One Window** groups them and merges them right away (see [Merging into one window](#merge)). When merging is not possible, the reason is shown under the button and the button stays grey.
- **Not now** skips this time. The round close button does the same. The offer comes back the next time it applies.
- **Don't ask for these** remembers these projects and stops offering them.

If you group the projects while an answer is still being written, the AI learns about the group before its next step, and you are told that the answers given before this did not use it, so you can ask again if you need to.

### Build one in the project list {#list}

Above the Explorer there are two tabs, **Current** and **All**. Switch to **All** to see the project list with its groups. Two dashed buttons sit under the list: **Add Group** and **Add Project**.

- **Add Group** creates an empty group named "New Group" and puts its name straight into edit mode. `Enter` confirms, `Esc` cancels.
- To put a project in a group, drag its row onto a group card. Or right-click the project, choose **Move to Group** and pick a group, or **New Group…** to create one and move the project into it. An empty group shows "Drag projects here".
- To take a project out, right-click it, choose **Move to Group**, then **Remove from Group**.
- A group card reads left to right: a colour swatch, the name, a link icon (shown when the group shares memories), the number of projects and a chevron. Click the card's header to collapse or expand it. Double-click the name to rename it.
- Right-click a group's header for its menu: **Rename Group**, **New Group…**, **Add Folders to Group…**, **Share Memories** (a switch) and **Dissolve Group**.

**Add Folders to Group…** adds folders whose windows do not need to be open. Folders this window can reach are readable by the AI as well.

### Create one on the group page {#create}

When the current project is not in a group yet, the group page shows a single section, **New Group**:

- Type a **Group name** (it starts as the project's name).
- Tick the other open windows to bring in, and press **Create with Ticked Windows**. With no other window open, the page says "No other project windows are open."
- Or press **Create with This Project Only** to start with this project alone and add the others later.
- **Add Folders to Group…** adds folders whose windows need not be open.
- Below, **Other Groups** lists the groups that already exist. **Add** puts this project into one. **Dissolve Group** removes it; the button then says "Press again to dissolve" and needs a second press.

## Open the group page {#open}

Click the book button to the right of **Current** and **All** above the Explorer (marked 1). It is there from either tab whenever the window has a project open. Its tooltip shows the group's name and which permissions are on, and its look changes when the project is in a group.

<BzXiangmuliebiao gaoliang="book" biaoji="1" />

The page opens as a tab in the editor area, titled "Project Group and Shared Memories". There are three more ways in:

- Run "Project Group and Shared Memories" from the command palette.
- If you moved the Folders view out of the Explorer, its own title bar carries the same button.
- In the unfolded capsule above the message box, press **Group Page** (see [The capsule](#capsule)).

## The group page, section by section {#page}

Once the project is in a group, the page reads **Group**, **Members**, **AI Permissions**, **Group Conversations** and **Window**, with **Leave Group** and **Dissolve Group** at the bottom.

**Group** shows the name. Press the pencil (**Rename**) to change it; `Enter` confirms, `Esc` cancels.

**Members** lists every project with where it lives (Windows, WSL or SSH), whether it is a multi-folder workspace, and its state. The dot on the left shows the state:

| Dot | Label | Meaning |
| --- | --- | --- |
| Blue | This window | The project you are looking at. |
| Green | Window open | That project's window is open. |
| Yellow | Window closed, files reachable from here | The window is closed, but this window can still reach its folder. |
| Grey | Window closed | The window is closed and its files cannot be reached from here. |

An open member has **Go to Window**, which brings its window to the front. A member whose window is not open has **Open**, which opens it. Every other member has **Remove**. While a member's AI is working, a line under its name says what it is doing, for example "AI is changing code" or "AI stopped and waits for you in its window".

**Add Open Windows** lists the other open windows to tick, then **Add** brings them in. **Add Folders to Group…** adds folders that have no window.

**AI Permissions** holds the four switches. They take effect, and are saved, the moment you flip them. See [What each switch does](#permissions).

**Group Conversations** lists each other member's shared conversations, with **View**, **Attach to my next message** and **Continue here** on every conversation, and **Hand Over…** on every member whose window is open. It needs **Share Conversations** to be on; with it off the section only says what to turn on. See [Sharing conversations](#chats).

**Window** holds **Merge into One Window**, or, when the group is already merged, **Go to the Merged Window** and **Split into Separate Windows**. See [Merging into one window](#merge).

**Leave Group** takes this project out of the group. **Dissolve Group** deletes the group itself. The projects stay; they are simply ungrouped. It asks for a second press.

## The capsule above the message box {#capsule}

In a window whose project shares a group with at least one other project, a small capsule sits above the message box (marked 1). It is not shown for a group that holds only this project; that group's page is one click away in the Explorer.

<BzJiaonang gaoliang="jiaonang" biaoji="1" />

Folded, the capsule shows the group's name, "*N* projects", four small icons for the four permissions (dimmed when the permission is off; hover one to see its name and whether it is on or off) and, when another window's AI is busy, a line such as "breezell-api: AI is changing code". For a merged group it also says "merged into one window".

Press the capsule to unfold it:

- Every other member with its state and, if its AI is busy, what it is doing. **Go to Window** (or **Open** when its window is closed) is there for every member. **Conversations (*N*)** opens that member's shared conversations, and **Hand Over…** hands it a task; both appear only while **Share Conversations** is on, and **Hand Over…** only while that member's window is open.
- **AI Permissions** as four switches you can flip right there. When all four are off, the capsule says so: the group then only orders the project list and the AI of one project knows nothing of the others.
- **Group Page** opens the group page.

What the capsule shows about another window's AI is general by default ("AI is reading files", "AI is running a command"). File names, commands and conversation titles appear only while **Share Conversations** is on.

## What each switch does {#permissions}

A new group starts with **Read Files** on and the other three off.

**Read Files.** The AI can read and search the other members' files. It is told which projects are in the group and how to reach them, so you can simply talk about "the backend" and it looks there. With it off, the group only orders the project list; memories and conversations are still shared as their own switches say. Turning it off also turns **Change Files** off.

**Change Files.** The AI may also change the other members' files and run commands in their folders, under the same approvals as changes to this project, and the changes can be undone. Turning it on turns **Read Files** on as well. It applies only to projects this window reaches; for a project in another environment, the change is handed over instead (see [Projects in other environments](#environments)). Turn it on only when you are happy for the AI to touch several projects at once.

**Share Memories.** The projects recall each other's memories. See [Sharing memories](#memories). The same switch is in the right-click menu of a group's header in the project list.

**Share Conversations.** The AI of each window can read the recent conversations of the other members' windows and knows what their AI is doing. You can also browse those conversations, take one into a message and hand a task over. See [Sharing conversations](#chats). When you turn the switch off, those parts of the page and the capsule are hidden or disabled, and the AI is told once that the conversations are no longer shared.

Each switch belongs to the group, not to a window, so it applies to every member.

## Sharing memories {#memories}

With **Share Memories** on, the projects in the group recall each other's memories. When the AI in one window looks up what it already knows, it also finds memories learned in the other group projects. Each memory stays with the project that learned it: nothing is copied, and it stops being recalled elsewhere as soon as you turn the switch off or the project leaves the group.

In **Box**, under **Super Memory** and then **Memory Library**, a source filter appears once memories are shared: **All Sources**, **This Project** and **Group Projects**. A memory that came from another project is marked "From *project name*". A memory from another project cannot be pinned here; a pin belongs to the project that learned the memory.

## Sharing conversations {#chats}

With **Share Conversations** on, each member keeps a list of its recent conversations that the others can see, and the AI of the other windows is told about them. It reads one when it needs to.

You can use the same lists yourself, from the group page or from **Conversations (*N*)** in the capsule. In the capsule you pick a project first, then a conversation. For each conversation there are three choices:

- **View** opens the conversation as a read-only tab in the editor area, one tab per conversation. It shows the conversation as it was when you opened it; choose **View** again to bring it up to date. Tool calls are listed by name and input, without their results. Closing the tab never asks you to save.
- **Attach to my next message** puts a tag for that conversation in the message box. The AI reads it when it needs to.
- **Continue here** starts a new conversation in this window with that conversation attached, so you can carry on from where the other one stopped.

If a conversation can no longer be read, or is no longer among the shared ones, you are told so.

### Handing a task over {#handoff}

**Hand Over…** gives a task to another member's window. It is offered in the capsule and on the group page, for members whose window is open, and only while **Share Conversations** is on.

1. Pick the project, if you did not start from a member. Only open windows are offered.
2. Type what it should work on.
3. A notice says "Handed to *project*, working on it…" with a **Go to** *project* button for its window. The other window's AI starts working there.
4. When it ends, you get "*project* is done: *its answer*", or "*project* did not finish: *the reason*". If it needs you halfway, the notice says "*project* is waiting for you; have a look in its window."

The answer is also passed to this conversation, so the AI here can use it in your next message.

## Merging into one window {#merge}

Merging opens the group's projects as **one window with several folders**. Their own windows close, and their conversations are copied over, each title marked with the project it came from. Start it from **Merge into One Window** under **Window** on the group page, or from **Group and Merge into One Window** on the offer card. You are asked to confirm: "Merge *projects* into one window? Their windows close and their conversations are copied to the new one." If a member's AI is running, merging closes its window and stops it; you are warned first.

Afterwards, the capsule says "merged into one window", and the group page shows 'The window of group "*name*", merged' with the members and **Split into Separate Windows**, which takes the group apart and brings back the separate windows. If you open one of the member projects on its own while the merged window is open, its page says "This group is open as one window now." and offers **Go to the Merged Window**.

In a merged window the AI names a file as "*folder name*/...". Relative paths that start with no folder name, and the terminal, start in the **Focus folder**; it follows the files the AI works on, and you can pick another by clicking it.

Merging works in these cases:

- All projects are on this computer.
- All projects are in the same WSL distribution.
- All projects are on the same SSH host.
- Windows projects together with the projects of one WSL distribution. The merged window is a WSL window, and the Windows folders come in through WSL's mounted drives: file access is slower and file watching may lag. You are told which projects this applies to.

Merging does not work for any other mix of environments (for example SSH together with a local project, or two different WSL distributions), for a project that is already a multi-folder workspace, or for a group with fewer than two projects. The reason is shown under the merge button, and the group keeps working across separate windows.

## Projects in other environments {#environments}

A window reaches one environment. A group can still hold a Windows project, a WSL project and an SSH project together.

- **Reading.** For a project in another environment, that project's own window does the reading and searching for you, so its window has to be open. If it is not, you get a notice with an **Open** button instead of an empty answer.
- **Changing.** A change to a project in another environment is never run from this window. The AI is refused and the change is handed over, so it is done in that project's own window, with that window's approvals. **Hand Over…** is the way to do it yourself.
- **Merging.** Only the combinations listed in [Merging into one window](#merge).

## When a window is closed {#closed}

Closing a window never removes its project from the group. The group is kept by Breezell on this computer, and the member stays listed with a different state.

- If this window can still reach the closed project's folder, the dot turns yellow: "Window closed, files reachable from here". The AI can still read the files (and change them, when **Change Files** is on). **Hand Over…** is not offered, because it needs the other window to be open.
- If this window cannot reach the folder, the dot turns grey: "Window closed". When the AI tries to reach it, you get a notice: "*project*'s window is not open, so this window cannot reach its files." with an **Open** *project* button. You can also press **Open** on the group page or in the capsule, or **Remove** to take the project out.
- A closed window's AI no longer shows any activity in the capsule.

## Leave, remove, dissolve {#leave}

- **Remove** takes one member out of the group. The group stays.
- **Leave Group** takes this project out of the group.
- **Dissolve Group** deletes the group itself. The projects, their conversations and their files all stay; they are simply ungrouped. It needs a second press.

## Limits {#limits}

- A group is stored by Breezell on this computer only. It is not written into your project folders, not synced to your other devices and not shared with anyone else.
- A project belongs to one group at a time.
- A group does not change the projects' own settings, models or tool permissions. Tool permissions still come from Feature Options. With **External File Access** off, group projects this window reaches stay readable.
- Whether the AI can reach a member depends on its window and its environment; see [When a window is closed](#closed).

## Troubleshooting {#trouble}

| What you see | What it means | What to do |
| --- | --- | --- |
| A project is mentioned but no card appears | That project is not open, or you chose "Don't ask for these" for it before. | Open its window, or group it by hand in the project list. |
| No capsule above the message box | The project is not in a group, or the group holds only this project. | Add another project, or open the group page from the book button. |
| A member's dot is grey | The window is closed and this window cannot reach its folder. | Press **Open**. |
| The AI cannot read a project | **Read Files** is off, or the window of a project in another environment is closed. | Turn **Read Files** on, or press **Open**. |
| A change to a project in another environment is refused | Changes there are never run from this window. | Use **Hand Over…**, or make the change in that project's window. |
| The Conversations section asks you to turn something on | The group does not share conversations. | Turn **Share Conversations** on. |
| **Hand Over…** is missing for a member | Its window is not open, or **Share Conversations** is off. | Open its window, or turn the switch on. |
| The merge button is grey | Different environments, a multi-folder workspace, or fewer than two projects. | Read the reason under the button; the group still works unmerged. |
| The group card is missing from the project list | Only the **All** tab shows the groups. | Switch to **All**. |

## FAQ {#faq}

**Do the projects have to go into one folder?**
No. Grouping never moves, copies or merges your files.

**How is this different from a multi-root workspace?**
A multi-root workspace puts folders into one workspace. A group connects windows that stay separate, and it can span Windows, WSL and SSH. Merging is optional and ends up as a multi-folder window.

**Does grouping raise token usage?**
The AI can reach more files, so it may read more when your request needs it. Grouping by itself does not put other projects' contents into every turn.

**Can other people see my group?**
No. Groups live in Breezell's settings on this computer.

**How many projects can a group hold?**
There is no fixed limit. A group pays off when you treat the projects as one piece of work; two to five is usually the sweet spot.

**Does dissolving a group delete the projects?**
No. The projects, their conversations and their files all stay; they are just ungrouped.
