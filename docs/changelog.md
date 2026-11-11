---
editLink: false
next: false
---

# Changelog

## 1.4.56 · Hot Update · 2026-11-11

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Highlights

- **Subagents are conversations of their own:** In Agent and Entanglement, work the main agent hands to a subagent is listed under the main chat in the history. Open it to watch it work in the editor area and type to correct it; the main agent no longer waits, and each subagent reports back when done.
- **Subagent model:** Subagents follow the chat's model; a model you ask for is looked for on the current gateway only, and you choose when it is not there.
- **Thinking no longer eats the reply:** Every model gets the most output its provider allows, so a long think no longer leaves the reply empty.
- **Fixes:** Computer Use approvals with nothing to press, "Breezell could not load its prompts" on the first chat after an update, and "This chat failed to load" on chat tabs after a restart.

### Subagents

- **A conversation of its own:** In Agent and Entanglement, work the main agent hands to a subagent is now a separate conversation. It is tagged "Subagent" in the chat history and listed under its main chat ("Collapse subagents" / "Expand subagents"). A working subagent has a dashed line on its left; one that is not working is dimmed.
- **Opens in the editor area:** Clicking a subagent opens its conversation in the editor area, and the side bar switches to the main chat. The top of the page shows its status (Working, Waiting for approval, Idle, Interrupted, Closed), with "Back to main chat", "Stop" and "Close subagent".
- **Correct it directly:** A subagent's page has its own message box. What you type reaches it after its current step, or right away with "Send now".
- **What it can do:** Read, edit and run commands with the same tools as the main agent (except Computer Use), starting in the main chat's focus folder. In a project group it knows what the AI in the group's other windows is doing, like the main agent, and with "Share Conversations" on it can read the group's conversations.
- **The main agent does not wait:** You can keep talking to the main agent while subagents work. Each time a subagent finishes a piece of work it reports back; an idle main agent continues by itself, a busy one sees the report at its next step. The main chat shows cards such as 'Subagent "name" finished its work', with "Open" and "Show report".
- **Message, read and close:** The main agent can message a subagent, read its conversation or close it. When you press "Close subagent" yourself, the main agent is told. A closed subagent stops, and its conversation stays in the chat history.
- **How many, and deleting:** Up to 5 subagents of one main chat work at the same time. Deleting the main chat deletes its subagents; Stop in the main chat does not stop them.
- **Withdrawing a message:** Withdrawing a message in the main chat also withdraws the subagents started after it: they stop and close, and their file changes are undone. The confirmation lists them, e.g. 'Subagent "name" (2 files)'.
- **Changes and review:** Files a subagent changes appear on the main chat's change bar, with "Discard all" and "Keep all", and go through Cross-Check. "Review" on a subagent's page shows that subagent's changes.
- **Teams mode:** Unchanged.

### Subagent model

In Box ▸ Feature Options ▸ Models ▸ Dedicated models ▸ Subagent Model, the separate model choice is now a switch.

- **On (default):** Subagents use the chat's current model. When you ask for a specific model, it is looked for on the current gateway only; if it is missing there or several match, a 'Choose a model for subagent "name"' card asks you to pick one, then "Start" (or "Don’t start"). A model you picked is used again in the same chat.
- **Off:** Every new subagent waits for you to pick its model.

### Chat

- **Thinking no longer eats the reply:** Thinking and the reply share one output limit. Many models were given about half of what they allow, so a long think used it up and the reply came back empty. Every model now gets the most output its provider allows, for example Claude, DeepSeek, GLM, Grok, Qwen, Doubao and Kimi.
  - After a reply is cut off, the next request leaves more room.
  - When a provider refuses the size, the request is sent again with the size it accepts.
  - When an OpenRouter balance only covers a shorter reply, the request is sent again at that length instead of failing.
- **Computer Use approval buttons:** Clicks, typing, key presses, drags and app launches waiting for your approval show "Apply" and "Reject". In 1.4.55 they only showed "(Awaiting user permission...)" with nothing to press, and the turn was stuck.
- **Fixed:**
  - With your own API keys, the first chat after an update could fail with "Breezell could not load its prompts".
  - "Discard all" in the main chat left a file a subagent had created on disk, while the change bar cleared, once the subagent had been done for a while. Teams members had the same problem after their team finished; fixed too.

### Editor

- **Chat tabs load right away:** When Breezell starts again, chats left open in editor tabs (subagent pages too) load directly instead of showing "This chat failed to load" and "Retry".
- **Chat tabs stay in front:** With "Auto open file on edit" on, a file the AI edits no longer opens over the chat tab you are reading.
- **Fixed:** In a WSL or remote window, a file the AI created after you pressed "Discard all" did not appear on the change bar.

## 1.4.55 · Hot Update · 2026-11-11

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Highlights

- **New User Guide:** A short tour for new users who have not connected an API of their own: Box, the official models, where to add your own key or relay, and the model menu. Open it again any time from Help ▸ "New User Guide".
- **Working style:** Breezell can pick up how you like it to work (ask less, confirm before changing files, shorter answers) from your own messages, but it changes nothing until you say yes.
- **More models:** Claude Fable 5.2 and Claude Mythos 5.2 (with Fast), new models on OpenRouter and from Meta, a plan choice for Qwen, and Seedream 5.5 for image generation.
- **Several keys and addresses for one OpenAI-compatible provider,** with the model list following the key you choose.
- **Project groups:** A capsule above the message box, four AI permissions and conversations shared inside the group. See [Project Group and Shared Memories](/project-group).
- **Fewer wasted retries in chat:** A model that uses its whole output limit thinking is asked once to think briefly, then stops with advice, instead of three billed retries. Tool calls that some models write as plain text now run.
- **Asks before risky changes:** Even with "Auto-approve edits" on, Breezell asks before touching MCP config, git hooks, shell profiles, credential files and similar. Pages in Breezell's browser and Computer Use ask before using your camera, microphone, screen or desktop.
- **Editor fixes:** The "N files changed · Next" bar no longer sticks, opening a long file with many AI changes no longer freezes the window, and memory no longer keeps growing over long sessions.

### New User Guide

- **Who sees it:** New users who have not connected an API of their own see a short guide made of bubbles you step through with "Next". It does not appear for people who already use their own API.
- **What it points out:** Box, "Official models (Breezell)", the place where you connect your own API key or a relay, and the menu under the chat box where you switch models. You can press "Skip" at any time.
- **Seeing it again:** Open Help ▸ "New User Guide".

### Working style

- **Asked before every change:** Breezell reads your own messages for how you like it to work, for example "ask less", "confirm before changing files or running commands", "keep answers short". Before it adjusts anything it asks: "Yes", "Keep as is" or "Never ask again". If you do not answer, nothing changes.
- **The "Working style" card:** In Box ▸ Super Memory ▸ Budget & Maintenance, the card shows the current preferences. "Read now" looks at your recent messages again and "Clear" removes what it learned.
- **Privacy:** Only messages you typed yourself are read, and the result stays on this computer.

### Models

- **Claude Fable 5.2 and Claude Mythos 5.2:** Both are supported, including Fast.
- **OpenRouter and Meta:** OpenRouter gains Nex N2.6, Inkling 2 Small (free) and Muse Ember. Meta gains Muse Ember 1.0.
- **Qwen "Plan":** Choose "DashScope" (pay as you go) or "Token Plan" (subscription).
- **Seedream 5.5 image generation:** In Box and in Image Studio you can pick 1K, 1.5K or 2K, use a transparent background (delivered as a PNG) and give up to 10 reference images.
- **Sign-in connections:** Gemini (Google sign-in) and Kimi Code sign-in were updated to follow their newest versions.

### Box ▸ Models (OpenAI-compatible)

- **Several keys and addresses:** One compatible provider can keep several keys ("Add key") and several request addresses ("Add address"; "Test speed" measures them). The model list follows the key you select, and each model is sent with the key that owns it.
- **Models a service no longer offers:** They are removed from the list and you are told, with "Undo". When Breezell is not sure, it asks first and you can choose "Keep".
- **Adding a model by ID:** Type a model ID in the model search box to add it directly.

### Project groups

See [Project Group and Shared Memories](/project-group) for the whole feature.

- **The capsule above the message box:** It shows the group, how many projects it holds, which permissions are on, and what the AI in the group's other windows is doing (idle, working or waiting for you). Which file or command it is working on is shown only while "Share Conversations" is on. Unfold it to see each member's state and model, then "Go to Window", see its conversations, "Hand Over…" a task, switch the permissions, or open the "Group Page".
- **Four AI permissions:** "AI Permissions" on the group page are now four switches: "Read Files", "Change Files", "Share Memories" and "Share Conversations". "Change Files" replaces "Allow AI to Change Group Projects".
- **Shared conversations:** With "Share Conversations" on, the AI in each window can read the conversations of the others. "View" opens one as a read-only tab in the editor area, and closing it no longer asks whether to save. "Attach to my next message" puts a tag in the message box.
- **A group made in the middle of a turn:** The turn under way learns about the group, and you are told that the earlier answers did not use it.
- **With "External File Access" off:** Group projects this window can reach stay readable.
- **Fixed:**
  - Asked about another group project, the AI searched this project and answered that nothing matched.
  - After merging into one window, the AI was told the project was no longer in the group.
  - A change to a group project in another environment (a WSL project, for example) ran before you approved it and could not be undone. Such projects are now only read and searched, and a change is offered to that project's window instead.
  - Without "Change Files", the AI could still change a group project by using its full path.
  - Conversations inside a project group had no titles.
- **Cross-Check:** Files the AI changes through a group project's window are checked by Cross-Check too.

### Chat

- **A reply cut while thinking:** When a model spends its whole output limit thinking and writes no reply, it is asked once to think briefly and try again. If that fails, Breezell stops and suggests lowering "Reasoning intensity" or choosing a model with a larger output limit. Before, the same request was sent three times, each one billed, ending with "the model returned an empty reply 3 times in a row".
- **Tool calls written as text:** Some models (Qwen3-Coder, or GLM through a relay) write a tool call as plain text. It now runs as usual instead of being taken for an empty reply that stopped the work.
- **Dropping files into a chat tab:** In a chat opened as an editor tab, files or folders dropped on the message box are attached to the message instead of opening as a tab or a window.
- **Code blocks:** A code block is now one card. The file name, line numbers and buttons sit in its header, and a file name that is too long is cut off.
- **After Stop:** Nothing asks for approval once you press Stop. If the connection goes silent halfway, the reply is shown as cut short instead of finished.
- **Smoother replies:** Replies from some relays now appear word by word instead of all at once, the window no longer slows down when the AI writes something very long, and an attached PDF is not uploaded again on every turn.
- **Gemini:** Native Gemini receives attached pictures, PDFs and screenshots taken by tools.
- **Tools mentioned while thinking:** A tool the model only mentions in its thinking is not run.
- **Fixed:**
  - After editing a conversation, a request to Claude could be refused.
  - With some models, the results of earlier turns were lost when tools were called one after another.

### Editor

- **"N files changed · Next" bar:** It no longer gets stuck, jumps back and forth or skips files. "Next" goes on from the file the bar shows, and after one file is left it moves on to the next one.
- **Long files:** Opening a very long file with many AI changes no longer freezes the window for seconds.
- **Memory:** Memory that kept growing over long sessions is fixed in several places.
- **Focus folder:** The focus folder label no longer covers the bar of running commands.
- **WSL and SSH focus folders:** On Windows, with a WSL or SSH folder set as the "Focus folder", every command the AI ran used to fail at once. They now run.

### Security

- **Edits that still ask:** Even with "Auto-approve edits" on, Breezell asks before changes to MCP config, git hooks, auto-run tasks, shell profiles, rules and skills, and credential files, and before deleting a whole workspace folder or a whole folder outside the workspace.
- **Project MCP servers and untrusted folders:** A project's own MCP server starts only after you allow the command it runs, and asks again if the command changes. An untrusted folder loads no project rules, skills or MCP servers.
- **Pages in Breezell's browser:** A page asks before it uses the camera, microphone, location, screen recording, clipboard or a connected device. The AI cannot see the values of HttpOnly cookies when it reads cookies.
- **Computer Use:** Clicks, typing and opening apps ask first, unless "Auto-approve desktop actions" is on (Box ▸ Feature Options ▸ Tool Permissions).
- **Memory:** Keys, passwords and similar secrets are removed from text before it is kept as a memory. Memory files with Windows line endings no longer lose entries.
- **Deleting and importing:** Deleting a skill asks first. Deleting a conversation removes only the files Breezell saved for it. When you import a conversation backup, conversations that are invalid or empty are skipped and you are told.

### Plugins

- **Uninstalling:** When you uninstall a plugin, the windows it opened close too.
- **Floating windows:** A plugin's window that floats over other apps (Activity Island, for example) was misplaced while Breezell was minimized. Fixed.
- **Slash commands:** A plugin's slash command is not sent while the plugin is not taking messages, and you are pointed to Plugins ▸ "Installed" to check.

## 1.4.54 · Hot Update · 2026-11-09

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Project groups

- **Grouping offered in chat:** When you mention another open project in a conversation (its name, a path, a file, an API route or a port it serves), "Put these projects in one group?" appears above the message box with that project ticked. Press "Group them" or "Group and Merge into One Window", or choose "Not now" or "Don't ask for these". Nothing changes until you press a button, and the AI answers as usual.
- **The group page:** "Project Group and Shared Memories" now opens as a tab in the editor area, from the button next to "Current" and "All" above the Explorer. When the Folders view was moved out of the Explorer, the same button is on its title bar, and the command palette has it too.
- **Where members are:** The tab lists each member with where it lives (Windows, WSL, SSH) and whether its window is open, closed with its files reachable from here, or closed. Closed members have an "Open" button.
- **Adding projects:** "Add Open Windows" and "Add Folders to Group…" bring projects in; a folder's window does not need to be open.
- **Managing the group:** Rename the group, "Leave Group" or "Dissolve Group" (press it twice). Without a group, create one here or join another.

### Working across a group

- **Reading group projects:** The AI knows which projects are in the group and can read their files when you talk about them. A project in another environment (a WSL project from a Windows window, for example) can be read while its window is open; when it is not, you are offered to open it.
- **Changing group projects:** With "Allow AI to Change Group Projects" on, it can also change their files and run commands in their folders. Off by default.
- **Shared conversations:** With "Share Conversations" on, "Group Projects' Conversations…" lets you "View" another project's conversation, "Continue here", or "Attach to my next message"; "Hand to a Group Project…" gives a task to another project's window and tells you when it is done.
- **One window:** "Merge into One Window" opens the group's projects as one window with several folders, Windows and WSL projects included. Their windows close and their conversations are copied over, each title marked with its project. "Split into Separate Windows" takes them apart again.

### Chat

- **Chat tabs beside code tabs:** Chat tabs can sit in the same row as code tabs: a conversation dragged from the history onto the file tabs, "Open in editor tab", and a chat tab's "New Chat" stay where you put them instead of moving to another column.
- **Conversation history fixed:** After a project had been opened in a workspace with several folders, opening the project on its own showed its conversations with their first line as the title and the time of opening as every date. Each project now keeps its conversations' titles and dates.

### WSL

- **Empty WSL window fixed:** A WSL project opened from a shortcut sometimes showed an empty window (an empty Explorer, and "No source control providers registered" in Source Control). It now connects and shows the project.

## 1.4.53 · Hot Update · 2026-11-08

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Title bar

- **The search box is back:** the middle of the title bar has the search box from before 1.4.52 again, and a click on it opens search. The notification bell and the update button are back beside it, and update progress (checking, downloading, installing) shows on the update button again. When Breezell runs as administrator, text after the workspace name says so again.
- **The capsule becomes the "Activity Island" plugin:** the capsule from 1.4.52 that grows and shrinks is no longer built into Breezell. It is now "Activity Island", an open-source plugin on the plugin market that you can install if you want it; without it, the title bar looks the way it used to.

### Activity Island plugin

- **Installing:** look for "Activity Island" under Box ▸ Plugins ▸ Market. It needs Breezell 1.4.53 or later; older versions will not install it.
- **In the title bar:** most of the time it shows the workspace name, and a click on it opens search. While the AI works, the capsule widens to show:
  - the current step, such as "Thinking", "Editing app.ts" or "Running a command";
  - the icon of the model working on it, and a clock;
  - "Waiting for you", "Done" or "Something went wrong", with "View" to open that conversation;
  - how a build or test task is going, with "View" to open its terminal when it fails.
- **When you leave Breezell:** switch to another app or minimize Breezell, and the capsule flies from the title bar to the top of the screen, floating above every app; when nothing is going on, it shows "All quiet". Come back to Breezell and it flies back into the title bar.
- **Opening the panel:** click the capsule floating at the top and it opens into a panel:
  - how many conversations are running or waiting for you, what each one is doing and how long it has been running;
  - once you allow "Read your conversations" for it, the last few lines of each reply as well;
  - click a conversation to go straight to it; click "Back to editor" to return to Breezell;
  - click anywhere outside the panel or press Esc to close it.
- **Several Breezell windows:** there is just one island at the top of the screen, covering every window, and what most needs you comes first. The panel is grouped by window; click "Go" to switch to that window.
- **Permissions:** floating above other apps and reading conversations are each asked for only when you first use them. If you do not allow floating, the island stays in the title bar; if you do not allow reading conversations, the panel only shows what the AI in each window is doing.
- **Platforms:** the island can float on Windows, macOS (including above full-screen apps) and Linux X11 sessions. In a Linux Wayland session, the island stays in the title bar and lets you know once, the first time.
- **Settings:** under "Activity Island" in Feature Options ▸ Plugins, you can turn off "Float the island at the top of the screen, above other apps, when you leave Breezell or minimize it…", and the island stays in the title bar all the time. With reduced motion on, it just moves, with no animation.

### Super Memory

- **Project groups:** in the Explorer's project list, the button next to "Current" and "All" opens "Project Group and Shared Memories". There you can make a group with "New Group…", put a project in or take it out with "Move to Group" and "Remove from Group", and use "Rename Group" and "Dissolve Group".
- **Shared memories:** when "Share Memories" is on for a group, the projects in it recall each other's memories; each memory still belongs to the project that learned it. It is off by default.
- **The Memory Library shows where memories come from:** in the "Memory Library":
  - memories from other projects in the group are marked "From *project name*";
  - a memory that turns out wrong for this project is marked "Does not apply here", without changing it in the project it came from;
  - with sharing on, you can filter by "All Sources", "This Project" or "Group Projects".
- **The same project on different systems:** a project opened on Windows, WSL, Linux or macOS, or over SSH, is recognized as the same project, and its memories go with it. This takes effect after you have opened the project once in each environment.
- **Recall by meaning (coming later):** Box ▸ Super Memory ▸ "Budget & Maintenance" has a new "Recall by meaning" card, so memories worded differently or written in another language can be found too. This feature comes with the next full Breezell install; this hot update does not download any files: the card shows "Comes with the next full Breezell install; until then recall goes by words.", and recall carries on as before.

### Removed experimental features

- **Five features removed from the "Experimental" tab in settings:**
  - "Memory Preflight", together with the "Memory Analysis" tab;
  - "Human-in-the-loop mode";
  - "Entanglement Strict Verification" and "Strict mode model";
  - "Adaptive agent strategy";
  - "Auto model routing".
- **Nothing to do:** if you had these features on, your conversations carry on as usual. If you had picked "Auto" in model selection, the model picked in the chat box is used instead.

### Plugins

- **New things plugins can do:**
  - put a page of their own in the middle of the title bar, in place of the search box; only one plugin can do this at a time;
  - show a small window that floats above other apps;
  - know which step the AI is on, which model it uses and how build or test tasks are going, but not see any message content;
  - work together across Breezell windows when it is the same plugin, for example to show one summary only in the window you used last.
- **Two new permission switches:** Box ▸ Plugins ▸ Installed now has:
  - "Show a small window of its own that floats above other apps; it cannot take keyboard input": you are asked the first time it is used;
  - "See what the agent is doing (its step, the file name it works on, the model, how long it has run) and how background tasks go; no message content": on by default, and you can turn it off.
- **Plugins you already installed are not affected** and need no update.

## 1.4.52 · Hot Update · 2026-11-07

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Title bar

- **The search box is now a live capsule:** the search box in the middle of the title bar is a capsule that grows to fit what it shows. At rest it holds search and the notification bell as before, and a click on it still opens search. Its words follow Breezell's display language.
- **What the AI is doing, at a glance:** while a conversation runs, the capsule shows:
  - the icon of the model working on it;
  - the current step: "Thinking", "Writing", "Editing app.ts", "Reading README.md", "Searching the code", "Running a command", "Using a tool", "Waiting on subtasks", "Condensing context" or "Reconnecting";
  - how long the turn has been running;
  - a count such as "+2" when several conversations are at work. The one you have open comes first when it is among them.
  - Steps that follow each other quickly do not flicker: each wording stays up for a moment.
- **Waiting for you:** when the AI stops for your answer or approval, the capsule says "Waiting for you" ("3 chats waiting for you" when there are several), and "View" opens that conversation. A conversation waiting on you comes before work in progress.
- **Done, or something went wrong:** a finished turn shows "Done" and how long it took ("took 1:23") for a few seconds. A turn that ended on an error shows "Something went wrong", with "View" to open the conversation. A turn you stop yourself shows nothing.
- **Build and test tasks:** a task you run, such as a build or a test run, shows "Running build" with a clock. When it ends, the capsule shows "build succeeded" with its time, or "build failed" with its exit code and "View" to open its terminal. Watch tasks that keep running in the background are not shown, and neither is a task you stop.
- **A task beside the AI:** when a task runs while the AI works, the task moves into a small dot to the right of the capsule. Hover it for the task's name; click it to open its terminal.
- **Updates and notifications in one place:**
  - Update progress (checking, downloading, installing) and the button for an available update now show in the capsule instead of an indicator of their own beside it.
  - The notification bell sits at the end of the capsule, and the notification panel grows out of the capsule and goes back into it. With reduced motion on, the panel simply appears.
  - While the debug toolbar shares the spot, the capsule stays at rest so the debug buttons stay in reach.
- **Running as administrator:** a shield after the workspace name now says so, instead of text that crowded the name out.
- **Keyboard:** Enter or Space on the bell opens the notifications instead of search, and the capsule's own buttons work with Enter and Space too.

### AI editing files

- **A path that is slightly off no longer ends in "Unable to read file":** when the AI edited a file at a path that does not exist, for example with a folder left out, it got the bare error "Unable to read file ... (Error: Unable to resolve nonexistent file ...)" and told you the file could not be opened, while the Explorer showed it; often only a restart seemed to help. Now:
  - The AI learns that the path does not exist and which files in your workspace have that name, and edits the right one.
  - When no file of that name is in your workspace, it asks you where the file is instead of guessing more folders.
  - When it meant to create a new file, it creates it instead.
- **Windows: AI edits that failed for no reason now go through:** on Windows, some AI edits and new files were refused although nothing was wrong with them. They now go through as the AI wrote them. Before:
  - the edit was treated as if its content had been cut off, and the AI kept splitting it into smaller edits that failed the same way;
  - or the call was refused for naming two different files, or the change went to a path that could not be opened.

## 1.4.51 · Hot Update · 2026-11-06

A hot update for 1.4.5, no reinstall needed: Breezell offers it on its own, or check under "Updates" at the foot of the Box sidebar.

### Chat

- **Long conversations with many screenshots keep going:** after many screenshots in one conversation, messages could stop going through, with `NGHTTP2_ENHANCE_YOUR_CALM` in the error while the diagnosis blamed the network. Now:
  - Pictures pasted earlier no longer weigh down the messages after them, so the conversation can go on.
  - When the AI needs to look at an earlier picture again, it opens it again instead of describing it from memory.
  - Pictures you attach to a message are always sent, and so are the pictures of a message you edit or send again.
- **The same for pictures the AI opened:** a picture the AI opened to look at no longer stays with the rest of the conversation; it opens it again when it needs it. When it opens several pictures at once, it sees every one of them.
- **Tables wrap to the chat's width:** tables in replies were as wide as their longest row and had to be scrolled sideways. They now wrap to the chat's width:
  - Headers break only between words, and CJK labels stay whole.
  - Paths and names in a table are not squeezed to one letter per line.
  - A table scrolls sideways only when a single word is wider than the chat.
- **A bold heading no longer runs into the paragraph above:** a bold heading on its own line in a reply, such as "(2) ..." or "(3) ...", was glued onto the end of the paragraph before it, and the space before a bold phrase in a sentence went missing ("this is **important**" read "this isimportant"). Both are fixed.
- **Bold headings sit the same while a reply streams:** while a reply was still streaming, a bold heading on its own line stood a full gap away from its text until the reply was done. It now has its final spacing while streaming, in thinking text too.
- **Smoother sash dragging in long conversations:** resizing the chat no longer gets slower as the conversation grows.

### Box

- **No more blank Box page at startup:** if you closed Breezell on the Box page, it opened next time with only the navigation on the left and nothing beside it. It now opens on the page you left.

### Interface

- **The "Breezell Modern UI" preview is a miniature of the workbench:** the preview on the "Breezell Modern UI" card in the title bar's Theme panel was three grey blocks. It is now a miniature in your theme's colours: the title bar with menus, the activity bar, the Explorer, the editor with tabs, code, the cursor and the minimap, the terminal, the Breezell chat and the status bar. On, the parts are floating rounded cards; off, they are square, flush and divided by hairlines, so the two are easy to tell apart.
- **Every sash grip is equally bright:** the three-dot grip on the sash beside the Explorer looked brighter than the others. They now all look the same; dragging is unchanged.
- **Sash highlight in your accent:** after you pick an "Accent color" in the Theme panel, hovering or dragging a sash shows a highlight line in that accent, and resetting the accent clears it. Each theme's own default sash highlight comes with the next full installer.

### WSL, SSH and remote

- **The AI can open the files Breezell saves for it in WSL and SSH windows:** Breezell saves things like long terminal output and images from MCP tools as files for the AI to read when it needs them. In WSL and SSH windows the AI could not open them. Now:
  - They are kept in the workspace's `.breezell/tool-results` folder, where the read tool, the terminal and scripts all reach them.
  - Git and search ignore that folder on their own, so it stays out of `git status`, commits and search results, and your `.gitignore` needs no change.
  - With no folder open, they stay in your home folder as before.
- **The Ports view no longer uses more memory over time:** while the Ports view was open, every update of its list took a little more memory. It no longer does.

### Models

- **OpenRouter Auto Router:** `openrouter/auto` lets OpenRouter pick the model, and each request is billed at the model it picked, so there is no list price. Image, video and audio input, tools, 2M context. Thinking starts off; turned on, it can be set to low, medium or high.
- **LiquidAI LFM3-1.7B:** on OpenRouter as `liquid/lfm-3-1.7b` and its free route `:free`. 262,144 context, up to 8,192 output tokens, tools, text input. Its reasoning is always on, with no effort levels.

## 1.4.5 · 2026-11-06

### Highlights

- **Plugins:** Install plugins from the market in Box ▸ Plugins, or write your own. A plugin can only use the permissions it declares and you allow.
- **More reliable Super Memory experiences:** Approaches that did not work are no longer saved as trusted experiences.
- **Sign-in no longer drops for no reason:** A lost network, an unreachable website, a proxy error, several open windows or a wrong computer clock no longer sign you out. A sixth device is only refused; the account is no longer blocked for 24 hours.
- **Replies start sooner:** The first word appears faster, and sending no longer makes you wait.
- **Watch the agent in the browser:** "Follow agent in browser" lets the agent work in a tab of its own. When you need to sign in or solve a captcha, it opens the page for you.
- **You choose how often to retry:** Box ▸ Performance ▸ Network & chat ▸ Retries when a chat request fails. When the connection keeps dropping, the error shows within seconds.
- **Long chats are steadier and smoother:** Chats with thousands of messages scroll without stutter. Chat history survives a crashed window, and old long chats no longer run out of memory when opened.
- **New providers and models:** Baidu ERNIE and Ant Ling; GPT Image 2.6 can make SVGs and GIFs.

### Plugins

- **Box ▸ Plugins (new):** Install plugins from the Breezell plugin market on GitHub, or install a `.vsix` you packaged yourself. Plugins run only while you are signed in to Breezell. When you sign out they are turned off, and Restart extension host stops the ones that had started. Plugins cannot reach your account, your billing or Breezell's internal settings.
  - Market: search (names and descriptions are found in any language), categories (a button opens a panel with how many plugins each one has), Open source / Closed source, sort and Refresh. A card's footer has install, Open, the on/off switch and Uninstall. Clicking the name or description opens the details, with the README, permissions, author and checksum. A download that does not match the market is not installed.
  - Installed: one row per plugin; click one for its details page. It has the state switch (Running, Off, Waiting for sign-in, Blocked), Open, an update button when there is a new version, Version, From, License and ID, Source code and View on GitHub, the Windows, What it adds and Permissions cards, and the README. Install local .vsix is on this page too.
  - Develop: Create a plugin makes a plugin folder from a template; open it and press F5 to run it. From code to market lists the steps to package and publish it, with the Developer guide.
  - Plugins that can be opened are listed under Plugins in the Box sidebar; click one to open its panel or window.
  - Plugin names, descriptions, categories and READMEs follow Breezell's display language, in English when there is no translation. Traditional and Simplified Chinese never stand in for each other.
  - Breezell plugins no longer appear in the Extensions view; they are managed in Box ▸ Plugins.
- **What plugins can do:**
  - Add skills, rules and MCP servers. Your own skill or server of the same name wins.
  - Give the agent tools, and say which modes offer them (Chat, Agent, Entanglement, Analyze, Teams); they still need your approval and get their own tool cards. A plugin can also look at the agent's tool calls before they run, and refuse them.
  - Open windows of their own, which can also start without an editor window. On a plugin's details page, the Windows card has Add to Start menu (Windows), Add to applications menu (Linux) or Add to Applications (macOS) for a shortcut. On macOS, plugin windows take ⌘Z, ⌘A and ⌘W like other windows.
  - Change Breezell's screens: buttons and menu entries, commands in the slash menu, pages of their own, replacements for some parts, their own drawing of code fences in a language, new modes, a companion floating on the chat box, and a settings card in Feature Options (Box search finds it). They can also change colours, fonts and looks, and switch them with the plugin's own settings.
  - Read your conversations, send messages in them, approve tool calls, use or switch your chat model, show their texts in Breezell's display language, and ask you to restart Breezell.
  - Input method plugins: the candidate panel can show in the code editor and in the chat box. It closes when you click elsewhere, the focus leaves or the input method is turned off, and the words offered after a commit go away by themselves; long candidates wrap instead of running out of the chat box.
  - What plugin developers can use, and the permissions for it, is in the Developer guide on the Develop page.
- **What plugins cannot touch:** Sign-in, plans, quota, billing, the Custom API settings, permission dialogs, tool approval and the plugin pages cannot be changed by a plugin, and anything waiting on you always shows above a plugin's screens. Signing out in any window, or a plugin being blocked, takes away what it added at once.
  - A plugin's buttons say "From the plugin: name". Right-click one for Hide this button or Manage plugin; Show hidden buttons on the plugin's details page brings them back. A screen a plugin replaced has Show Breezell's own view.
- **Permissions:** A plugin declares the permissions it needs, and nothing it did not declare can be used. Normal permissions (such as knowing when a conversation turn starts and ends, switching the chat model, adding buttons) are on by default. Risky ones (such as using your chat model, reading your conversations, sending messages, approving tool calls, reading your code or the chat box, changing a message before it is sent, reading your custom API keys) are asked for the first time the plugin uses them, and your answer is kept.
  - Permissions on the plugin's details page lists each permission with its kind (Automatic or Asks you first), its state (On, Off, Asks on first use) and a switch, with Turn all on and Turn all off. An installed plugin's market details have the same switches.
  - The install dialog has an unticked checkbox: "Allow all the permissions it asks for now, instead of when it first uses each".
  - Reading custom API keys works only for accounts whose plan includes Custom API.
  - Uninstalling resets a plugin's permissions to their defaults.
- **Updates and removal:**
  - When a plugin installed from the market has a new version, Breezell says so once, with Update to version (Update all for several) and View.
  - After you update or uninstall a plugin that is running, the old version keeps running until the extension host restarts. Breezell says so and offers Restart extension host. The same goes for removing and installing a plugin again in one session.
  - Uninstall is on market cards, in the details and on Installed, and asks first. The skills, rules, MCP servers and windows the plugin added go with it; its settings stay.
  - A plugin can ask to restart the plugins, the window or all of Breezell after it is installed, updated or removed; the install dialog lists this first. When a running plugin asks for a restart, you choose Restart now or Later. Restarting without asking needs your permission, happens at most once per version, waits for a reply being written to finish, and gives notice first.
- **Blocklist:** The market's maintainers can block a plugin that turns out to be harmful. A blocked plugin is turned off; one that is running stops at once and its windows close, and Breezell tells you once and offers to uninstall it. The market no longer shows it, and it cannot be installed or turned back on; Installed shows Blocked and the reason.

### Chat

- **Chat history survives a crashed window:**
  - An empty window that crashed and is opened again no longer loses its chat history. New Window after such a crash really opens a window instead of quitting.
  - After a session that did not close cleanly, Breezell says so ("The window closed unexpectedly last time…") and offers Open Conversation to reopen the conversation you were in. It is not opened by itself. A clean exit no longer triggers the notice.
  - When the disk is busy or full, the workspace's conversations no longer all open empty.
- **Old long chats behave:**
  - A long chat in the old format no longer loses messages the first time it is saved.
  - Very old long chats no longer crash the window with out-of-memory when opened.
  - A reopened chat no longer shows blank space in its latest turn.
- **A revert never empties a file:** When a revert could not find a file's backup, it used to write the file back empty. Now it says the backup is missing and leaves that file as it is; the other files are reverted as usual.
- **Deleting a chat no longer breaks its branches:** A chat branched or copied from another one can still be reverted after the original is deleted or cleaned up.
- **No more 400 from Claude 4.6 and later:** On a custom slot with the Anthropic format, Claude 4.6+ answered "This model does not support assistant message prefill" after a reply in a long chat had been cut off. That no longer happens. Replies in long chats are also no longer cut off early.
- **Only the attachments you meant:** An image waiting in the composer no longer goes along with a follow-up suggestion, a queued message, a plan's prompt or a plugin's message; a queued message open for editing no longer sends its image twice. On a model without vision, clicking a follow-up suggestion no longer does nothing.
- **Slash menu:** What you type while the slash menu is open stays in the box, so Esc no longer loses it, and Enter with no matching command sends the message: messages starting with / can be sent now. Input method candidates no longer hide under the menus that open from the box.
- **Math in chat:** Formulas draw in their proper fonts, so a norm's double bar no longer shows as two slashes. On Windows, LaTeX code blocks no longer lose their first line, and a one-line block shows.
- **Files named in chat open:**
  - In WSL and SSH remote windows and multi-folder workspaces, file cards and links in the chat no longer open as "file not found".
  - A path in a reply with `:42`, `#L42` or `#L42-L50` opens at that line.
  - Folders named in a reply: outside the workspace they open in the system's file manager, inside it they are revealed in the Explorer view. Binary files such as archives no longer open in the text editor; a menu appears whose first entry, Open, hands them to the system's app.
  - Paths copied out of the chat no longer carry invisible characters.
- **Cross-Check really off by default:** Existing installs turn Cross-Check off once. If you turn it on afterwards, it stays on.
- **Smaller chat fixes:**
  - Replies made only of invisible characters (Kimi K3.1 Pro sends some) no longer show as an empty row.
  - A turn you stopped while the model was writing no longer brings follow-up suggestions or a Cross-Check.
  - Several calls of the same tool in a row get a folded header that says what they were (for example which skills were used), not just a count.
  - The start page's suggestion creates `.breezell/rules/breezell.md` instead of the deprecated `.breezellrules`.

### Agent tools

- **Terminal commands:**
  - Commands that do not end by themselves, such as dev servers, go to the background at once instead of holding the turn.
  - Other commands no longer hang for a long time for no reason.
  - The command card has To background: the command keeps running and the turn goes on.
  - The AI always knows when a background command ends. When you stop a command, an idle AI says it saw the stop and does not run it again.
  - The done sound, voice and system notification wait for the work to really end: a turn that ends with a command still running stays quiet, and you are told once that command ends.
  - A command the AI stopped itself reads "[Stopped by the agent]" on its card instead of saying you stopped it, and the AI no longer asks you about a stop nobody made.
  - A finished terminal card no longer shows Open and Stop for the next command, and those buttons no longer make the card taller.
- **The AI's searches find what your project holds:**
  - File name searches ignore letter case. On Windows, `readme.md` used to miss `Docs/README.md`.
  - The AI's searches follow your project's `.gitignore` and the Search: Exclude setting to decide what to skip, instead of always skipping folders such as `build`, `out` and `dist` or files such as logs and images.
  - Projects without Git (SVN, Perforce, Plastic, or an unpacked copy) also get their ignore rules applied instead of being searched whole.
  - Unity, Unreal and Godot projects skip the folders their engines generate.
  - Search results for file or folder names with dates or version numbers (such as `2024-10-29-notes.md`) no longer open the wrong file.
- **Code lookups:** The AI finds functions and classes in more languages: Lua, Go types, C# structs, C++ methods defined outside their class, Ruby, Kotlin, Dart, Scala, Solidity, Elixir, OCaml and Objective-C. In a multi-folder workspace, code lookups cover every folder, not only the first.
- **The AI no longer searches without end:** When the AI keeps searching with new words without opening any file, the turn stops and says why.
- **The AI finds settings for you:** Ask where a setting is and the AI names its place in Box in your display language, or opens Box with that option marked. Available in Chat mode. Errors that send you to a setting name the right place in Box too.
- **Other:**
  - The AI no longer keeps re-sending an edit that was already applied.
  - A very long pipeline command no longer freezes the window when the turn ends.
  - New built-in skills: the HyperFrames skills and an Office documents skill. The Superpowers switch only covers its own skills.

### Memory

- **More reliable experiences:** Super Memory no longer saves approaches that did not work as trusted experiences. All of this happens on your computer.

### Teams

- **Pick each teammate's model on the approval card:** With Auto-approve Teams off, a new team waits on an approval card. Each member's row is now a model menu (Model for this teammate), set to the model that would really run. The card used to be a read-only preview that could name another model than the one that ran. Your pick survives a reload and applies whether you approve from the card, the system notification or its link. With auto-approve on, nothing changes: no card, the team starts at once.
- **Retry a teammate on another model:** A teammate's error card has a model menu beside retry (Model it retries on); the pick is that teammate's model from then on.
- **Write to a teammate directly:** The composer on a teammate's page, locked until now, sends your message to that teammate. It is read before the teammate's next step without stopping the current one, and it wakes a teammate that is idle, finished, failed or stopped.
  - Waiting messages sit in the queue bar above the composer, one per step, and can be withdrawn (Withdraw) until the teammate reads them.
  - A withdrawn message does not appear in the conversation and is not passed on to the lead.

### Network & reliability

- **Replies start sooner:** The first word comes in about 0.4 s instead of about 0.65 s, and sending no longer adds two or three seconds of waiting, including the first message after a break or after launch.
- **Retries when a chat request fails, set by you:** Box ▸ Performance ▸ Network & chat has Retries when a chat request fails under First-byte timeout.
  - Default picks the count by kind of error; Off shows the error card at once; or choose a count, or Custom for 1–20 times.
  - Errors a retry cannot fix, such as being signed out or out of credit, an answer already shown, and anything after your Stop are never retried.
- **A dropped connection shows its error sooner:** When the connection keeps dropping, the error now shows in about 5 s instead of nearly 30 s.
- **Subagents and long chats cost less:** Subagents and long chats cost less to run. Subagents on Claude and Gemini also no longer read only the beginning of each file.

### Models & providers

- **New providers:**
  - Baidu ERNIE: ERNIE 5.1 (128K context, image input, tools, always thinks). ERNIE 5.5 Flash is listed ahead of its launch (text only, not priced yet).
  - Ant Ling: Ling-3.2-flash (1M, image and video input, tools; free for its first two weeks, not priced yet), Ling-3.1-flash (1M, text only), Ling-3.0-flash-VL (262K, image and video input) and Ling-3.0-flash (262K, text only). Ling 3.x thinks by default and can be switched off. Ling-3.2-flash has a context picker, 262K by default and 1M on request.
- **New models:**
  - LongCat-2.5 GA replaces LongCat-2.5-Preview and 2.0: 1M context, 128K output, image input.
  - Tencent Hy4 GA (TokenHub, OpenCode Go, OpenRouter) is the first Hy model that reads images; hy4-preview stays text only.
  - OpenRouter: GLM-5.3-FlashX-Legal (Z.ai's legal-domain model), Ricursive Ripple-65B Preview (text only) and the stealth model Crouton Alpha (image, video and audio input, free).
  - Reflection Beam 1.0 (OpenRouter, Vercel, OpenCode, Together): 1M, text only, always reasons.
  - OpenCode Go follows its lineup of 2026-11-03: Claude Haiku 5.5, Gemini 4 Argon, MiniMax M3.1 Flash, Step 5 Preview, a free Reflection Beam and the stealth model Iceman Contributor are added; Grok 4.6, Kimi K2.6, DeepSeek V4 Flash and other withdrawn entries are removed, and models you typed in yourself keep working.
  - Listed ahead of access: Gemini 4 Carbon (Gemini API and Breezell; Google offers it to selected partners only, so most keys get a 404), and DeepSeek Flash Cyber's `cyber-personal-v3` and `cyber-enterprise-v4` (they need a Cyber Key issued after a real-name review).
- **DeepSeek:**
  - The list keeps only what the official API serves, `deepseek-flash` (V4.1 Flash) and `deepseek-v4-pro`, plus V4.1 Pro ahead of its launch. Names the official list no longer has leave the default list; models you added yourself stay.
  - The retired `deepseek-chat` and `deepseek-reasoner` are removed; features set to them move to another DeepSeek model by themselves.

### Images & video

- **GPT Image 2.6:** `gpt-image-2.6-sunburst` and `gpt-image-2.6-flare` join OpenAI, OpenRouter and Image Studio, with everything 2.5 has (frames up to 3:1, 1K / 2K / 4K, xhigh and max quality, transparent backgrounds).
  - Complexity (Low, Medium, High; High by default): set in Box, and the AI can set it when it draws in chat.
  - SVG output (new images only, one at a time) and GIF: 2–16 frames (GIF frames), 20–2000 ms each (Frame time), about 512 × 512 per frame, not with a mask. Neither takes a transparent background.
  - The ChatGPT sign-in can make GIFs too, but OpenAI has not opened this to every account yet, so some are refused; Box says so.
  - Image Studio offers the formats a model takes, SVG and GIF included. SVGs show in the gallery, copying an SVG or GIF copies a PNG of it, and the save dialog offers .svg.
- **Image mode understands "try again":** Saying "this one is no good" after an image used to bring back an unrelated new one. Now a message with no image of its own edits the image before it. A message that asks for more than a drawing, such as "this is no good, look online for references", turns image mode off and goes to the chat model.
- **Edit this goes to the chat model:** Edit this or Edit regions on an image card in a normal chat no longer switches the chat to image mode. The image goes into the composer and the chat model takes your instruction: it can look things up first, then draw with the image as its reference. When the chat is already in image mode, or the chat model cannot do it, image mode still takes the edit.
  - The card no longer shows the long prompt written for the image model; its details list the image files only.
  - An image drawn by Breezell shows Breezell once, in the model row.
- **Any model can have its own image recognition model:** In Box ▸ Models, a model's Advanced settings ▸ Images has the Model reads images itself switch and the Image recognition model picker, applied at once. With it off, attached images are read by the chosen model instead. Box shows the model as text-only, with Vision Proxy in its menu.
  - While a vision proxy is set, the Vision Proxy dialog has Remove vision proxy. It used to be hard to find how to turn one off.
- **Image Studio:**
  - Each API profile's image API and video API can take its own network route: Direct, System proxy, Global proxy or Custom proxy (HTTP / HTTPS / SOCKS5, with a username and password, or pasted as a URL); System proxy stays the default. Fetching the model list uses that route too, and a failure says why.
  - Add models by ID; they stay when the list is fetched again.
  - MiniMax H3 works through relays.
  - Riverflow V2.6 Pro: in Box ▸ Models ▸ Image generation under OpenRouter, and in Image Studio (1K / 2K / 4K, up to ten reference images).
  - Gemini Omni 1.1 Flash (a video model on OpenRouter): Image Studio has a video preset for it (360p–4K, 16:9 or 9:16, 3–10 s, first and last frame, with sound).
- **Seedream 5.0 Lite draws in Box:** Through a relay it failed in Box while Image Studio drew. In Image Studio, Seedream 5.0 Lite and Pro sizes and reference counts now follow the official specs: Lite offers 2K / 3K / 4K and 14 reference images, Pro 1K / 1.5K / 2K and 10 reference images.
- **Box image edits work with more relays.**

### Built-in browser & Computer Use

- **Follow agent in browser (new, off by default):** Turn on Follow agent in browser in Feature Options ▸ Code Behavior, or click the eye button in the browser toolbar. The agent then works in a tab of its own marked "Agent" that you can watch live, and never touches your tabs. Reading a page does not bring the browser to the front.
- **Pages you need to see open for you:** With Headless browser on (the default), a sign-in, a captcha or a finished page used to stay off-screen, and the agent had no way to show it to you. Now, for a page you asked to see, a page you have to act in yourself (sign-in, captcha, QR code, confirming a payment), or the result at the end, it opens the Browser tab. Its own checks still run off-screen.
- **Cloudflare checks no longer loop:** The built-in browser no longer gets stuck repeating Cloudflare's human check.
- **Computer Use (Windows):**
  - It can capture the window in front or one display, zoom into part of it, click with modifier keys held, triple-click and hover, and wait for a window or control to appear or go away. Clicks on buttons, checkboxes and expanding menus are more reliable.
  - It never types into a password field.
  - Opening an app that already runs switches to its window (also from the tray), or lists its windows when it has several (two QQ accounts, for example).
  - Windows are recognized when QQ or WeChat is in front.
  - Claude models use Anthropic's own computer tool: Box ▸ Experimental ▸ Computer Use (Windows) ▸ Claude's own computer tool.
  - The new command Breezell: Run Computer Use Evaluation tests a model on nine desktop tasks and checks each result.

### Box

- **Data Cleanup:**
  - The space it can free is now what the files really take on disk.
  - A cleanup of the current workspace no longer deletes files other workspaces still need.
  - When the cleanup can free more than Cleanup reminder is set to (off, 200 MB, 500 MB by default, 1 GB), a card appears at the bottom left. Clean up now runs the safe cleanup and shows it to the end; Not now keeps the card away in every window for 7 days, unless as much again piles up. It stands in one column with the hot update card, so they never overlap.
  - New things it can clean: checkpoint backups nothing uses any more (counted with Expired checkpoints); Storage of deleted projects, the data left by workspaces whose folder is gone, which deletes their conversations too, so it is never preselected, asks first with every project listed, and is never run by scheduled maintenance or the reminder; and more Space left by deleted content.
- **Database ▸ Data Browser redesigned:** The page is one surface, and Box's navigation folds to its icon rail while it is open.
  - The navigator on the left can be resized by dragging or folded with Collapse navigator, and both are remembered. It lists every connection with its status; the open connection can be disconnected, renamed, sent to the chat or deleted; below it are its tables with row counts, a search, sorting, and new table and SQL console.
  - A database overview lists every table with its rows, columns and primary key, with a filter, sorting and Group by first letter. Some server databases show estimated row counts.
  - The table view has a WHERE filter (Enter runs it), Shown columns and the total row count, with the row number and key pinned on the left.
  - Row detail docks beside the grid: every field in full, JSON laid out, Previous / Next, edit (or double-click), Copy as JSON and delete. Delete table moved to the Structure tab, and scanning the workspace to the new-connection form.
  - Buttons and scrollbars that appeared only on hover are gone.
- **Model monitor ▸ Breezell:** It shows the status of the lines for your plan (for example "Breezell Pro/Pro+"). Each row shows the last 90 minutes, one bar a minute, and 24H / 7D / 30D switch the availability figure, with their average in the headline. It updates when the tab opens and on Check again. If your plan has no monitors yet, the tab says so. The other tabs check from your computer as before.
- **Models page:**
  - The category row (Breezell, sign-in accounts, API providers, OpenAI-compatible, image generation) stays pinned at the top, and only what is under it scrolls.
  - OpenAI-compatible slots can be searched by name, URL or model ("opus 4.8" finds `claude-opus-4-8`). The slot the current chat uses is marked In use and comes first; the others follow by when they were last used.
  - In a narrow Box the name gives way first, then a badge that no longer fits drops out whole, and In use shrinks to its check mark. Tooltips show only where text is cut.
  - The fetched-models list's close button says Close; a click outside the list or Esc closes it (unless models are ticked in it).
- **Performance ▸ Network & chat:** The diagnosis card and recent requests show the nickname you gave an OpenAI-compatible slot instead of names like "OpenAI-Compatible 9".
- **Rules & Skills & Memory:** The panel named Skills & Memory, whose first tab is Rules, is now Rules & Skills & Memory everywhere: the Box tab (MCP & Rules & Skills & Memory), its entry card and the title-bar button.
- **Sidebar:** The plan beside the account name is a coloured word instead of a framed pill, and the Updates icon at the foot loses its tile but keeps its colour.

### Account & sign-in

- **Sign-in no longer drops for no reason:** Some people were signed out with nothing wrong with their account, or could not sign in at all. Now:
  - A lost network, an unreachable website, a challenge page, a proxy error, several open windows, two Breezell installs on one computer and a wrong computer clock no longer sign you out. You are signed out only when Breezell really ends your sign-in.
  - Windows agree on your sign-in, so no window shows you signed in when the sign-in is gone.
  - When your only way online is a proxy set in Box, sign-in uses that proxy too.
  - When you enter a sign-in code, Breezell tells apart a code that did not work, too many attempts from this network, and Breezell being unreachable.
  - When you are signed out, it says why: "This device was signed out" or "Your sign-in has ended".
- **Breezell models no longer keep failing after the sign-in expires:** Every message used to fail after the sign-in expired, until you signed in again; now Breezell carries on by itself.
- **A sixth device is only refused:** A sixth device used to block the whole account for 24 hours and sign out the other five. Now only the new device is refused: it stays on the sign-in page and says why, and the other five carry on. A device that wakes from sleep with every slot taken stays signed in, says it is waiting, and carries on by itself when a slot frees up. The account page explains this. A closed editor also no longer holds a device slot for hours.
- **Sign-in kept encrypted:** Your sign-in is stored encrypted on your computer.
- **Stop is billed for what was produced:** On Breezell's own models, Stop or a broken-off request is billed only for what was produced, not for the whole answer.

### Remote development

- **Remote-SSH:**
  - Security fix: port forwarding listens on this computer only, so other computers on the local network cannot reach it.
  - Connect to Host lists the hosts in your SSH config and takes `user@host:port`.
  - cmd, PowerShell and Git Bash are told apart on Windows hosts.
  - ProxyJump and PEM keys with a passphrase work; the install script's problems on macOS and on minimal Linux systems are fixed.
  - A workspace with no folders no longer shows an error.
- **Remote-WSL:** Install script fixes, Alpine support, and the reason shown when the script fails; a workspace with no folders no longer shows an error.
- **Plugins in remote windows:** Installed shows one row per plugin, and an update no longer leaves the old version running on the other side.

### Performance

- **Smoother scrolling in long chats:** Chats with thousands of messages scroll without stutter.
- **Box rests while it is closed:** A closed Box no longer uses resources in the background.
- **Memory recall uses less memory:** Memory recall takes about 40% less memory.
- **Saving huge chats uses less memory:** Saving a very large old chat uses much less memory.

### Interface

- **New mark on the empty chat page:** The modern and classic empty pages show a large RSI with BREEZELL running through its middle. It does not move.
- **One size for the turn's action bar:** Request ID, the duration, Review, Git and the tool count on the right are now the size of the copy and branch buttons on the left.
- **Quick Phrases redesigned:** The popover has a title, an add button and Manage; each of your Favorites is a row with its type icon, its name and a one-line preview (terminal commands in monospace). The manage dialog is restyled and works as before; the form saves on Enter in the name or Ctrl/Cmd+Enter in the content.
- **Auto in the modern interface:** The Auto route switch draws correctly. The Auto model menu is no longer covered by the chat history side bar beside it, and no longer runs past the window's right edge.
- **Deleted lines wrap in inline diffs:** With word wrap on (Alt+Z), a long deleted line in an edit's red area stayed one line, cut off at the edge. It now wraps like the editor's other lines.
- **Other:**
  - The delete tool's card strikes through the deleted file's name; a code block's file header has its name and icon at matching sizes.
  - The shimmering wait text no longer shows a double image on analysis cards.
  - The model hint on the Teams approval card's member rows uses Breezell's own tooltip instead of the system's white one.

### Install & updates

- **More reliable Windows updates:** A failed download shows an error right away, and an old installer is no longer installed by mistake.
- **System requirements:** From this version on, macOS 13 or later is required, and builds are 64-bit only. There is no Linux ARM32 (armhf) editor any more, and the download page no longer recommends an x64 package to ARM32 computers; connecting to an ARM32 host over SSH still works.
- **Linux packages:** The deb and rpm package dependencies are updated for the new version.
- **Electron 45.2.2:** The built-in Chromium is updated to version 156, and dependencies are updated, including security fixes.

## 1.4.4 · 2026-10-27

### Highlights

- **Cross-Check:** An independent second look before the agent says it's done (off by default).
- **Finished turns fold away:** A finished chat turn folds into one "Worked for 2m 10s" row, with the reply below it.
- **Long conversations stay on course:** They keep their direction after their context is folded, and folding costs less.
- **Memory recall by context:** It works in any language, and the AI can search your memories step by step.
- **Image generation in one place:** Set up once in Box ▸ Models ▸ Image generation and used everywhere; Image Studio is rebuilt.
- **Network recovery:** Requests recover by themselves after a VPN drops or comes back, and slow models no longer time out at about two minutes.
- **Hot updates stay:** Hot updates no longer disappear on their own after normal use.

### Chat

- **Finished turns fold away:** When a turn is over, everything the agent did on the way (thoughts, searches, tool and edit cards, the text between them) folds into one row that says how long it worked and what it did, e.g. "Worked for 2m 10s · 12 files, 3 searches, 2 edits". Click it to open the turn as it was. The final reply stays outside the fold, and so do errors and images the turn produced. A turn you stopped, a turn that ended on an error, and a plain answer don't fold. Turns in your history fold the same way.
- **Cross-Check (new, off by default):** Turn it on in Feature Options ▸ Cross-Check ("Model self-improvement"). Before the agent's final answer on a larger change (two or more files, 30 or more lines in one file, or an approved plan), a separate model call with no tools checks the work against your request: the diffs, new compiler errors, the commands and their exit codes. It writes an acceptance checklist and marks each item pass, fail or unknown. Only what it finds missing goes back to the agent, which checks each item in the code, fixes what is really missing and answers once.
  - The result is a card under the turn. It opens to the checklist, with Check again and Fill the gaps.
  - Skip on the wait line goes on without it. Stop or a new message after the answer only ends the check.
  - It uses the chat's model unless you choose a dedicated one in Box ▸ Cross-Check. Files that may hold secrets (`.env`, keys, credentials) are named, but their contents are never sent.
  - A slow check is no longer cut off after 90 seconds: it is watched, and fails only when its API is found to be down.
- **Editing and resending a message no longer brings back changes you already handled:** Before, resending put back every file from the earlier checkpoint. After Keep All, Accept/Reject came back for changes you had already accepted. A hunk you had accepted became pending again. Changes you had rejected came back. Now a resend only restores the files the AI edited after that message. What you did yourself since then stays, including your own typing in files the AI didn't touch afterwards.
- **Keep All and Accept all clear everything:** Keep All now also accepts pending changes in every file the conversation edited. Code Review's Accept all commits files whose steps were all decided. A step marked accepted no longer leaves Accept/Reject buttons in the editor.
- **Long conversations stay on course after folding (context compaction):**
  - A fold no longer leaves the AI working on an old task: the summary records how each earlier request ended, and your newest request is restated right after it.
  - Your own earlier messages go along with the summary word for word.
  - The summary is written in fixed sections: Goal, your intent in your words, Decisions, Technical notes, Status, Next.
  - When possible, the summary is written on the request the agent just sent, which the provider still has cached. It's mostly billed as cache reads and comes back faster.
  - At most 15,000 tokens of recent conversation are kept word for word beside the summary (it used to be 20% of the window, up to about 192k on 1M models), so a fold frees much more room.
  - A single turn that grows past the window (hundreds of tool results) can now be folded in the middle, instead of being sent over the limit and failing as an "upstream" error.
- **Background analyses: stop or rerun one at a time:**
  - Stop on one analysis (its card or its report page) stops only that one. The round goes on with what it had found.
  - Retry reruns a failed, stopped or interrupted analysis under the same card.
  - The lead now gets each round once, with how every analysis ended (completed, failed with its error, or stopped).
  - Analyses cut off by a restart come back as Interrupted, and the next message is told what they had found.
  - The report page follows new output until you scroll up (Jump to latest), shows a status line (steps, duration, tokens, model), and has Copy report.
  - Subagents no longer stop the round by asking you a question.
- **Teams work in rounds:** The lead's follow-up starts a new round with its own tasks, so a report from the previous round is no longer taken for the new one. The lead's Stop now stops the teammates without reverting their files or dissolving the team. Stop on a teammate's own page marks it stopped and tells the lead. The next message wakes it.
- **DarkSelene rides out API trouble and resumes where it stopped:**
  - Each analysis call is sent again after a dropped connection, a timeout, 408/429/5xx or an empty reply, for about two minutes. The page and the chat card show the reconnect.
  - A stopped session shows why in red on its chat card, with Continue analysis (keeps the finished stages) and Analyse again.
  - If the execution turn ends on an error, it pauses with its reviews kept: Continue execution (or Try again) picks it up, End and summarize writes up what was done.
  - Slow calls are no longer cut off at 3 or 15 minutes and resent: a silent call is watched and fails only when its API is found to be down.
- **Entanglement mode:** The model now decides what proves a fix (diagnostics, a test, or your confirmation) instead of word lists guessing from your message. Saying "still broken" no longer silently undoes the last change; the model decides whether to keep, adjust or undo it. Explanations and acknowledgements no longer get re-asked for a causal trace, and switching into Entanglement no longer forces a trace as the first step.
- **Smaller chat fixes:**
  - A finished reply no longer jumps up when its copy/retry bar appears.
  - The edit card's header drops the extra "N changes" count; the file name and +X/−Y remain.
  - When the agent continues after a reply (a Cross-Check, a recovery, the next routed sub-task), the "Deciding next step" line now shows instead of a blank.
  - A tool call the provider aborts mid-way (seen with `gpt-6-astra` through relays: "Tool arguments stopped making progress…") is now closed as failed and written again, instead of ending the turn as a network error.

### Chat history & composer

- **Redesigned chat history panel:** New Agent button, search with a select toggle, Agents / Teams / Favorites tabs, date groups with sticky headers, and two-line rows (title and time, then the first prompt and turn count, or the team's members). A streaming chat no longer makes the list redraw every frame.
- **The history side bar can be resized:** Drag it between 200 and 600 px (default 260; it was fixed at 220, which cut "New Agent" short). Narrow widths rearrange the buttons instead of truncating them.
- **Composer tags look calmer:** Files, skills, terminal, quotes, problems and the rest share one neutral chip, with each kind's color on its icon only. Skill chips read `/name` like the slash menu. Attachment thumbnails get a neutral frame, a round remove badge and a hover preview.
- **Skills from other agents:** Skills installed by `npx skills` and other agents are now found in `.agents/skills` and `.claude/skills` (in each workspace folder and in your home folder) and in `~/.config/agents/skills`. Breezell's own `.breezell/skills` still win a name clash. The Rules panel lists them with the folder they came from. The Skills dot in the tray now shows right after a restart.
- **Mode picker:** New Agent and Entanglement icons, no gradient on the labels, and a neutral mode-switch card.

### Agent tools

- **run_script reports what it really did:**
  - After a script edits files, it lists the errors those edits introduced (`path:line` message), even after a failure or timeout. It used to return a meaningless "0 errors".
  - It also lists the other files an edit reaches.
  - A script that never edits runs read-only without asking for approval.
  - Up to 1,000 bridged calls, and calls past the limit are reported instead of silently swallowed.
  - Exact text can be passed as data instead of escaped JavaScript, and `edit_file` takes `dry_run`.
  - Edits to the same file run in order.
  - The card says why a run failed (label, line, message) and shows "N failed" for calls that threw.
- **Code navigation that finds things:**
  - `grep_search` rows are grouped under the function, method or class they sit in.
  - After an edit, the receipt lists "Other files this change reaches": callers of a changed, removed or renamed declaration, with TypeScript errors.
  - `find_symbol` now indexes 4,000 symbols per file (was 500) and files up to 2M characters, waits briefly for a cold index, understands kind names loosely, and matches abbreviations like "calcTot".
  - `lsp` references come grouped by file, and `call_hierarchy` takes depth 1–3.
- **Terminal and search fixes:**
  - Output lines longer than the agent terminal's width no longer come back broken, with the next line glued on.
  - `grep_search` works on CRLF files and with folder globs on absolute paths (e.g. `docs/**`).
  - On PowerShell, the `&&` / `||` and `exit` rewrites no longer change text inside strings: `git commit -m "Stop on Ctrl+C; exit cleanly"` is committed as written.
  - On Linux and macOS, `/mnt/d/…` paths are no longer mistaken for drive D:.
- **MCP output no longer swells the context:** An MCP result over 20,000 characters is saved to a file with a preview, like long terminal output. MCP images are saved as files, and only the newest three of the current turn are sent to the model. Before, every MCP image of a thread was resent with every later request.

### Memory

- **Recall by context, in any language:** Memories are now chosen by a small local model that reads your request, the conversation before it and the open file. Keywords and fixed word lists are gone. It works in any language, including Thai, Hindi, Korean and accented Latin text, and it follows a conversation: a short follow-up that names nothing still finds the memory the conversation is about. Older and sleeping memories get a fair chance, and a sleeping memory wakes when a turn clearly needs it. On a test set it never trained on (10 languages), turns that needed a memory got one 62% of the time, up from 41%.
- **The AI can look memories up step by step:** `memories_recall` now lists an index (kind, priority, state, date, how it matched), opens full records with what links them, and lets the AI narrow a result: by exact text, date, kind, priority, or another wording of the query. It no longer needs a Super Memory plan, and old memories are no longer pushed down by their age when searched. The chat card shows every record that was opened.
- **Clearer memory state:** The chat shows when memory recall is running, when a turn used no memories, and when the relevant memories are already earlier in this conversation. Recall no longer stalls the window on large libraries. A memory that a later one shows to be wrong is kept, marked no longer valid with a link to what replaced it, and never given. Tool names no longer appear in what you see of a memory.
- **Cloud telemetry:** If cloud telemetry is on, the numbers recall decides on are sent too: no text, and memories only as salted hashes. The consent text says so in every language, so you'll be asked to agree again.

### Models & providers

- **New models:**
  - GPT-6.1 Terra (OpenAI, Azure Foundry, Codex sign-in, OpenRouter, and Breezell): the fast, cheaper GPT-6 tier with a 1.05M window. Thinking can be turned off.
  - Kimi K3.1 Pro and K3.1 Pro Highspeed (Moonshot, AIHubMix, Kimi Code, OpenRouter, OpenCode Go, and Breezell), with their own prices.
  - AMD Radeon Cloud: Gemma-4-31B-IT, MiniCPM-V-4.7-35B-A3B and MiniCPM-V-4.7-1B. Qwen3.8-27B gets a 262K window. MiMo-V2.6-Flash drops the audio input and thinking switch its endpoint no longer accepts.
- **Fixes:**
  - DeepSeek V3.1 / V3.2 and the original Qwen3-235B-A22B on Baseten, DeepInfra, Together AI, Fireworks, OpenRouter and Hugging Face showed an invented Low→Max effort slider. They now have the thinking on/off switch their hosts support.
  - The prompt optimizer works with GPT-6.1 Sol (it asked for thinking off, which OpenAI rejects).
  - Codex sign-in plans use the official names (Pro 100 / 200 / 500, Business, Business Premium, Enterprise, Edu…) instead of raw ids like SELF_SERVE_BUSINESS_PROLITE. GPT-5.5, GPT-5.4 and GPT-5.4-mini, which ChatGPT retired, are gone from the Codex list.
  - Turning Fast on for a model that lost Fast no longer fails every message: it is served at the standard tier.
  - Breezell models show Ultrafast when the service offers it, with its price.
  - The price tooltip shows each Breezell model's long-context price and every digit ($26.25, not $26.3).
  - Account sign-ins identify as the current client versions (Antigravity 2.26.0, Kimi Code CLI 2.3.1, DeepSeek Harness 0.2.1-rc.3, Grok Build 1.0.67, Copilot Chat 0.71.0).

### Images

- **One place for image models: Box ▸ Models ▸ Image generation:** Image models from the providers you set up in Models are listed there, one tile per provider, with a default model and its own parameters. Add more from each provider's catalog. Chat's `generate_image`, the composer's image mode and Image Studio all draw with this list.
- **Better image cards in chat:** The `generate_image` card shows the model it will draw with, and you can switch it there. Images open in a viewer (zoom, download, copy, open in an editor tab). The AI is only offered image generation when an image model can actually draw, so no more cards that end in "Try again later".
- **Edit several places at once:** "Edit this" on an image opens "Mark regions to edit": mark up to six places, each numbered in its own color with its own instructions and an optional target. The dialog now shows the image on the left and the places on the right. The same works in Image Studio.
- **Image Studio rebuilt:** The node canvas is replaced by a composer and pages: Home (composer and recent work), a create page with progress, Stop and the results, the library, a viewer, and settings. It uses your theme's colors, tooltips match the editor, every Box image model and API profile model is offered with the parameters it takes, and every result is kept in the gallery.
- **Breezell image models:** Breezell's own image models appear as one entry, Breezell. A Breezell chat model always draws with them.

### Network & reliability

- **Back on track after a VPN change:** When a VPN or proxy client dropped and came back, requests could keep waiting on a dead connection for minutes. Now a failed request makes the next one open a fresh connection and re-read the system proxy.
- **Slow answers no longer fail at about two minutes:** On Breezell's models, a model that thinks for minutes before its first word, or an image that takes more than two minutes, used to fail with a 524 error. The connection is now kept open, and how long to wait is up to the editor.
- **First-byte timeout you can set, and that learns:** Box ▸ Network & chat ▸ First-byte timeout: 40 (default), 60, 90, 120 or 180 seconds, or 20–240. Within that limit, the wait now adapts to each model's own recent first bytes, so a request that hangs is retried sooner (checked every 2 s instead of 10). The network health list shows why each request was retried (e.g. "retry #1 after no first byte") and its first-byte wait.
- **HTTP/2 for chat requests:** Chat requests now use HTTP/2 by default, directly and through HTTP, HTTPS and SOCKS proxies. Switch back to HTTP/1.1 in Box ▸ Network & chat. A server that closes an HTTP/2 connection before answering gets the request again.
- **Retry rules in one place:** Every provider follows the same retry rules. Never after your Stop, a quota that ran out, a rejected request, or text you can already see. A stream cut off with "terminated" is retried as a dropped connection. A "451" in an error's text is no longer taken for a region block.

### Updates

- **Hot updates no longer disappear:** Clicking the icon again, opening a file with Breezell, or a sign-in link while Breezell was running counted as a failed start. Two of those made Breezell drop a working hot update and go back to the installed version for good. These no longer count. Only real crashes do.
- **Updates in Box:** Box has an Updates entry at the foot of its sidebar showing the running version. It lights up when a hot update is offered or ready.
  - A new hot update appears on a card in the bottom-left corner. Update now downloads and installs it, then restarts after a 10-second countdown (Cancel, Restart now). The countdown waits while a conversation is running in any window.
  - Repair forgets failed starts, re-downloads the latest package and restarts into it.
  - Import package installs a package file you already have, if its SHA-256 matches the published one.
  - If a hot update can't start, the next window says so once and offers Repair and restart.
  - Downloads resume after a dropped connection, and installs wait out an antivirus scan holding the folder.

### Interface

- **Box redesign:** A branching sidebar. Account and space switcher cards (plan, days left, balance). A new Models page: tab bar, category switch, smaller provider tiles, one-line model rows with icon-only capabilities and row actions in a menu. Smaller stat cards and gauges, and tidier toolbars when the model configuration is open.
- **Box ▸ Usage ▸ Breezell usage:** See what Breezell's own models cost you, request by request, with filters, totals and a per-request price breakdown.
- **Editor tabs:** Git colors stay readable on tabs (neutral backgrounds instead of the accent tint). The focused group's active tab gets a short accent line, and Breezell Dark's "added" green is brighter.
- **Icons:** The codicons are updated (101 new icons). 24 existing ones, such as close, sync and lightbulb, are slightly redrawn.

### Under the hood

- Electron 43.8.4.
- Upstream VS Code's memory-leak fixes since 1.135 are ported: closed editors, terminals, tree views, notebooks and extension objects no longer hold on to memory.
- The app is now bundled with esbuild, as upstream VS Code 1.144 does.
- Optional TypeScript 7 native preview: the `js/ts.experimental.useTsgo` setting and its commands are back.
- AI SDK and provider packages updated to their latest patch releases.
- Built-in prompts are delivered from Breezell's servers. The privacy page now states exactly what reaches Breezell's servers.

## 1.4.37 · Hot Update · 2026-10-21

### Chat

- **New DarkSelene mode:** Pick DarkSelene ("Takes your question apart before anything is built") in the mode menu under the input box. Before anything is changed, it thinks a hard or easily misread question all the way through. It uses a very large number of tokens, so use it with care.
  - Step one · understand before building: Take the question apart, Investigate the code, Challenge, Verify, Derive possibilities. Before investigating, it writes a Foresight: what the answer or the finished change should look like, and what would prove it wrong. The investigation checks only those points. When the code confirms the foresight right away, Challenge and Verify are skipped.
  - Settle with evidence: every question the code or your request can answer is answered by DarkSelene itself. Only what you alone can decide is asked under Your view. Answer the questions one by one, or press Go with the recommendations.
  - Step two · execute and review: the task it prepared is sent as your message and carried out by the Agent. Every unexpected read and every edit the Agent makes is checked against the evidence by independent reviewers (Read reviews, Code reviews), and their findings go back to the Agent before it continues.
  - The final DarkSelene summary keeps only what the reviews and checks actually confirmed.
- **The AI now hears when a background command finishes:** A command that ran longer than the wait and moved to the background used to stay unreported until you sent another message. Now:
  - Its terminal card updates with the result as soon as the command ends.
  - While the AI is still replying, its next step receives the result and deals with it in the same turn: it fixes a failure, or goes on with the work that was waiting for it.
  - When the AI has already finished replying, a new turn starts by itself about 1.5 seconds after the command ends and reports the result in a sentence or two. Several commands that end close together start only one turn.
  - No turn starts for a command you stopped yourself (the stop dot or Ctrl+C), while the AI is waiting for your approval or your answer, or right after you pressed Stop.
- **Editing a sent message and sending it again now withdraws the original:** Fixing a typo used to replace only the text. The files the AI had changed because of the typo and the memories taken from that turn stayed, so the AI often kept going in the wrong direction. Now an edited resend first withdraws the original message and everything after it:
  - Files the AI changed since then go back to how they were; files it created are deleted.
  - Memories taken from that part of the chat, Entanglement's causal record and clarifications, the plan file and the working notes all return to how they were before the message.
  - The AI only learns that you withdrew a message, never what it said.
  - Usually the edited message is sent at once. A "Withdraw and resend?" confirmation appears only in these cases:
    - You also edited files by hand after the message. Choose Keep my edited files to keep them, or Revert all and resend.
    - The AI ran commands whose effects cannot be undone automatically, such as git commit or npm install. The commands are listed.
    - The chat has no checkpoint to go back to. Resend anyway withdraws only the conversation.
  - An attachment that cannot be sent (for example a PDF the selected model does not accept) is caught before anything is withdrawn, so a message is never withdrawn and then fails to send.
- **Revert to this point keeps what you edited before sending:** Files used to go back to how they were at the end of the previous turn, so edits made that turn and sending this message were lost as well. Each file now goes back to how it was right before the AI touched it. If you send a message after a revert, the AI is also told that the chat was rolled back.
- **A new chat's temporary title no longer includes the second line:** Until the model names the chat, the temporary title now uses only the first line of your first message.

### Models

- **DeepSeek V4 Flash reads images directly:** The official `deepseek-v4-flash` and the `-0731` snapshots on relays were treated as text-only, so images went through the vision proxy (and could not be sent at all without one). Images now go straight to the model. A plain `deepseek-v4` name without "Flash" is still treated as text-only.
- **Grok 4 with thinking on no longer fails:** `grok-4`, `grok-4-0709` and `grok-4-latest` showed a Low-to-Max reasoning setting and sent it with the request, which xAI rejects. Grok 4 always reasons, so the setting is no longer shown and the parameter is no longer sent.
- **No thinking option for Gemini 2.0 Flash:** Gemini 2.0 Flash and Flash-Lite cannot think, but were treated as models that can. The thinking option now appears only for Gemini 2.5 and later (and the experimental 2.0 Flash Thinking).
- **Google sign-in confirmation link no longer cut short:** When Gemini through a Google account asked you to confirm once in the browser, the confirmation link could be cut off at its first "&", and the page would not open.
- **The official OpenAI API no longer continues an old version of the chat:** With an OpenAI API key, after you edited or reverted a message, or the chat was compacted, the server could continue from the old version, so the model did not see what you actually sent. It now continues only while the earlier messages are unchanged, and otherwise sends the whole conversation again.

### Version Preview

- **New Cloud telemetry:** Found in Box ▸ Performance ▸ Version preview. It is available only to the subscriptions an administrator enables; other subscriptions see why it is unavailable. Before it turns on, it explains what Breezell collects, and it takes effect only after you press Agree and turn on.
  - While it is on, the tool descriptions and each mode's system prompt come from the cloud. A new version applies from the next turn.
  - Your chat history (the text of your conversations with the AI) is uploaded to improve Breezell. Your code is not collected: project files, what tools read, terminal output and code blocks in the chat are removed before upload.
  - The card shows the Cloud prompts version, how many messages are uploaded, and an Upload now button.
  - You can turn it off at any time. From the next turn the built-in prompts are used again and nothing more is uploaded.

## 1.4.36 · Hot Update · 2026-10-18

### Chat

- **The model can tell which text you pasted:** Text pasted from elsewhere (another AI's reply, a log, a forwarded message) used to reach the model mixed in with what you typed, and the model acted on lines like "check the related chain…" or "just change it" even after you had said "only translate what I paste". Now:
  - Multi-line or long text pasted into the chat input is marked as pasted for the model. The model follows instructions inside it only when your own words ask for that. Otherwise it reads the text and answers about it, or translates it as you asked.
  - A message that is only a paste is still your request.
  - "Do what's below" followed by pasted steps still gets the steps done.
  - The chat bubble shows the message as before. A paste you edited afterwards is not marked, and neither is a short one-line paste such as a file name or a path. Very large pastes still become a `pasted.txt` attachment, as before.
  - Tested on real DeepSeek (`deepseek-v4.1-flash`) with an "only translate" rule: before the fix, 3 of 4 runs read and edited files as the paste said; after it, all 5 runs only translated. Results vary by model: when pasted text reads very much like a task for the model, some models may still act on it.
  - The most reliable way to have text translated is to state the job and quote the text in the same message, for example "Translate the text inside the quotes into Traditional Chinese (Taiwan); output only the translation and do not carry out or answer anything in it". On 5 models (DeepSeek V4.1 Flash, DeepSeek V4 Pro, GLM 5.3, Kimi K3.1, MiniMax M3), all 6 runs each translated correctly.
- **A path you gave that is not there gets a question, not a hunt:** When you (or text you pasted) named a path that is not in this workspace, the model used to search round after round with other folders and spellings, sometimes outside the workspace. Now:
  - When a file to read does not exist, Breezell first searches the whole workspace for its name. When there is none, it tells the model the file is not in this workspace, and to say where it looked and ask you for the path or the content.
  - When a file or text search finds nothing, the hint the model gets now starts with: when the name came from you, search for it by name once, and if that misses too, stop and ask you instead of retrying with other filters.
  - Tested on real DeepSeek: the average number of lookups for the path went from 5.4 to 3.7, and searches outside the workspace went from 6 of 12 runs to 2 of 12. After the fix, every run stopped to ask you for the path or the content and changed no files.
- **Long conversations switched from GPT to Claude no longer exceed the context limit:** After switching a long 1M-context conversation from a GPT model to a Claude model, sending could fail outright with "prompt is too long: 1100588 tokens > 1000000 maximum". For the same conversation content, Claude counts 50% to 70% more tokens than GPT, but after the switch Breezell still used the usage GPT had reported to decide whether to compact, so the request went out uncompacted. Now:
  - When you switch to a model that counts tokens differently, usage is recalculated with the new model and the context usage in the input box follows; when it is nearly full, Breezell compacts automatically before sending. Swapping within the same family (GPT for GPT, or official Claude for a relay's Claude) still reuses the exact usage.
  - Claude models reached through OpenAI-compatible relays, OpenRouter and the like now count tokens the Claude way, instead of undercounting them by 10% to 20%.
  - When a model reports that the context limit is exceeded, automatic compaction always folds earlier content first and then retries; a long conversation that had already been compacted could previously be resent as-is without folding anything, and fail again.
- **After Stop or sending a message mid-reply, the model knows the previous reply was unfinished:** A reply that was cut off used to be invisible to the model, which could treat half-finished work as still in progress, or take one added sentence as the whole task. Now:
  - Sending a message after pressing the stop button (the square icon) in the input box or Esc: the model knows you stopped on purpose. Unless you ask it to continue, or add to or correct that work, it does not carry on and does not bring it up.
  - Pressing "Send now" in the queue while a reply is still running: if the new message adds to or corrects the work just done (for example "also make the phone number read-only" or "continue"), the model finishes that work with the change included; if it is something else, it only does the new thing and says in at most one sentence that the previous reply was unfinished.
  - A new request that merely mentions the same file or page is not taken as a cue to continue the old work.

### Memory

- **Memory files no longer show up in searches:** The memory files (`.breezell/memories/workspace_memories.md` in the project and `global_memories.md` in your home folder) are notes about how things stood when they were written. Searches of the code used to return them alongside the code, and the model could take a long-outdated entry for the current specification and undo what you had most recently asked for. Now:
  - Text search, symbol lookup and file-name search no longer return these two memory files, even when asked to include ignored files. The rules files in the same folder (`global_rules.md`, `global_skills.md` and so on) and other files under `.breezell/` are searched as before and are not treated as dated notes.
  - When the model opens a memory file directly, it is told that the entries are dated notes that may be out of date. Your latest request and the current code win: the model points out a disagreement and asks whether to update that entry.
  - The model writes memories as "how things stand as of this date", with their conditions, not as permanent rules. When its own change makes an entry wrong, it updates or deletes that entry in the same turn.
- **Memories from a conversation are no longer injected back into it:** The relevant memories in "Injected N memories (… resident · … relevant)" no longer include memories extracted from the current conversation. The conversation already holds that content, in order; injected again as memories it read like standing rules, could pull the model back to an earlier request, and took slots from memories of other conversations. Other conversations still use these memories, and memories you saved yourself are unaffected. When a memory and the code disagree, the model now mentions it instead of changing code you did not ask about.

### Editor

- **"Next →" in the N files changed bar did nothing:** After the AI edits files, the bottom of the editor shows "9 files changed" and "Next →". If the first file in that list no longer opened (deleted or renamed later, or a change left over from an earlier session), "Next →" did nothing: because the file you had open was not in the list, every click retried that same file, so the button never worked. Now:
  - A file that does not open is skipped, and the jump lands on the next changed file that opens. The same goes for the bar's left and right arrows (previous/next file) and the shortcuts Ctrl+Alt+Shift+→ / ← (Mac: Ctrl+Option+→ / ←).
  - When none of the listed files opens, a notification says why.
  - The buttons work when the focus is not in an editor (for example, right after clicking another panel).
  - Changes left in a remote workspace (SSH, WSL) no longer come back as local paths that cannot be opened after Breezell restarts.

### Models

- **MiniMax M3.1 Flash added:** `MiniMax-M3.1-Flash` is available under both MiniMax (API key) and MiniMax Account (sign in with a MiniMax account), first in the MiniMax model list.
  - 1M context and image input.
  - The model always thinks; thinking cannot be turned off. Reasoning effort is Low, Medium, High, Extra High or Max, and the default is High. When no effort is given, MiniMax uses Max, which is slower and uses more of your quota.
  - Both API Format choices, OpenAI and Anthropic, work. MiniMax recommends Anthropic.
  - The same model through a relay or OpenRouter (for example `minimax/minimax-m3.1-flash`) gets these settings too, instead of M3's "thinking can be turned off" settings, which this model rejects.
  - MiniMax does not list a pay-as-you-go price for this model yet; it needs an M Plan key.

### Entanglement Mode

- **"Human-in-the-loop mode" no longer gets stuck on models that cannot be given a forced tool:** With "Human-in-the-loop mode" under "Entanglement mode strict verification" enabled, Breezell asks the model to check requirements with you through the question panel. Some models cannot: GLM ignores the request and answers in plain text, and that reply was then discarded as an error (AI_ToolChoiceViolationError) while the error card blamed the network; Kimi and DeepSeek V4 with thinking enabled refuse the request outright (HTTP 400). The check never completed, and every later message failed the same way. Now:
  - When the model answers in text instead of using the question panel, that reply is kept.
  - When the model refuses, the request is resent without forcing a tool.
  - Breezell remembers that model and no longer asks it to use the question panel.
  - The model asks you in the reply instead, and the row reads "This model cannot use the question panel, so it asked in its reply; your next message is the answer"; after you answer it reads "Understanding checked with you in the chat", the check is done and the tools unlock.
  - The error card correctly states that the model did not call the required tool, instead of calling it a network problem.

## 1.4.35 · Hot Update · 2026-10-18

### Chat

- **Agent mode no longer switches to Entanglement mode:** With the adaptive strategy enabled, tasks that Agent mode judged as "strict" (a message describing a bug, or a pasted update note describing fixes, for example) used to run in Entanglement mode, showing the LOCATE / VERIFY / FIX investigation panel, the completion criterion, and the "this kind of symptom is settled by your confirmation" strict verification. Agent mode now always runs as Agent with the full toolset; the Entanglement investigation panel and strict verification appear only when you select Entanglement mode yourself.
- **Scrolling up no longer goes blank or jumps to the bottom:** In a conversation containing a very long message, scrolling up near that message could suddenly turn the view blank, and scrolling up once more threw the whole list back to the bottom — and it happened again every time the conversation was reopened. The cause was that a long message was first rendered at full height and collapsed a moment later, so the conversation list re-laid-out back and forth. A long message now appears at its collapsed height from the start, and scrolling up stops where you scrolled to.
- **Patience with relays that hold back replies:** Some relays withhold a model's entire thinking process and release it only once thinking has finished, leaving the chat completely still for anywhere from ten seconds to several minutes. Models marked by "Streaming Check" now:
  - send at the reasoning effort you configured and are never turned down automatically;
  - wait for the reply instead of deciding it timed out, aborting and retrying after a long silence;
  - while waiting, verify the API every 5 seconds and send a short "hello" every 20 seconds to confirm the model still responds — checking faster when a check fails and returning to the normal cadence once it succeeds;
  - show "Model is thinking — this relay holds back the thinking process · 32s · API OK (confirmed 3s ago)", so you know it is still working;
  - stop only when a check confirms the API really is not responding, showing "API confirmed unresponsive", with no automatic retry; expand it to see the number of checks and the last error.
- **Copying conversation text:** Text copied from a conversation and pasted elsewhere keeps the layout you saw on screen and no longer drags along `**`, `#`, `-` and other Markdown symbols. "Quote" still keeps Markdown, and paragraphs and list items now break lines correctly.

### Models & Connectivity

- **New "Streaming Check":** Under Box ▸ Models ▸ OpenAI-compatible ▸ Connectivity, select models and press "Streaming Check". The model answers a short reasoning question and then counts from 1 to 120 while Breezell records when each chunk arrives and classifies the result:
  - Streaming normal: content arrives chunk by chunk.
  - Thinking held back: the answer streams chunk by chunk, but the thinking process is withheld by the relay, so the chat goes quiet first and then shows everything at once.
  - Fully buffered: the entire reply arrives only at the end.
  - Inconclusive: the reply is too short.
  Models rated "thinking held back" or "fully buffered" are marked and use the waiting behavior above in chat; the mark clears once a re-check comes back normal, a check fails, or the endpoint changes. Each model uses roughly 300 output tokens, plus reasoning tokens for reasoning models.
- **Select first, then check:** The connectivity page no longer checks every model automatically when it opens. Select the providers and models to check (select all and clear all are available), then choose "Connection Check Only", "Check Selected" or "Streaming Check"; items you leave unchecked keep their previous results.
- **New OpenRouter models:**
  - DeepSeek V4.1 Flash 1017 (`deepseek/deepseek-v4.1-flash-1017`): 1M context, text and images, reasoning effort low / high / max, reasoning can be turned off.
  - Xing4.0 29B A4B Free (`xingchen-agi/xing4.0-29b-a4b:free`): 262K context, text only, supports tool calling, reasoning can be toggled.

### Interface

- **Separator when the main sidebar sits on the right:** In the Classic UI with the main sidebar on the right, the editor and the bottom panel were missing a separator line on their right edge; and if the secondary sidebar was hidden at the same time, the left edge of the window gained an extra gap and a line. Both are fixed.
- **Box sidebar menu now fully visible:** When the Box sidebar is collapsed to an icon rail, the menu popped up from a group showed only a thin strip. The menu now displays fully inside the window and follows its position when you scroll or resize the window; the space switcher and account menu behave the same way.

### Tools

- **More accurate tool calls:**
  - Web search now honors the result count, search depth and topic the model specifies instead of ignoring them.
  - List and boolean parameters declare their types, so strict providers no longer receive parameters treated as text, and a parameter whose description merely mentions "optional" is no longer mistaken for optional.
  - Text search gains whole-word matching, a per-file result cap, and the ability to search files excluded by ignore rules; file search can target a folder; code navigation can take a line number to land on the exact spot the model wants.
- **The background browser says so:** When a model opens a page in the headless browser (a window in the background that you cannot see), it now says the page was loaded in the background instead of claiming it opened it for you, and tells you how to watch: open the "Browser" tab and navigate again, or turn off "Headless Browser" in Settings ▸ Features.

## 1.4.34 · Hot Update · 2026-10-17

- **Thinking no longer leaks into replies:** When using an OpenAI-compatible service (such as DeepSeek behind a self-hosted gateway), if the model name was not in the built-in list, reasoning was disabled in model settings, or reasoning extraction was set to `native`, the model's thinking process could appear at the start of the reply along with `<think>` tags. Thinking now always stays in the thinking pane, leaving only the answer in the reply.
- **Human-in-the-loop only applies in Entanglement mode:** Previously, when both strict mode and human-in-the-loop interaction were enabled in Agent mode, tasks classified as strict by the adaptive strategy would also require answering confirmation questions first and lock tools. Now this confirmation only happens when you explicitly select Entanglement mode.
- **Clearer `@` symbol:** The `@` button in the input box, the `@` menu header, and shortcut hints on the empty state page now use the UI font with bold weight so they no longer look thin or squashed.
- **Smoother switch to Classic UI:** When switching from the Modern UI back to the Classic UI, the input box no longer fades out from the Modern UI's background color.

## 1.4.33 · Hot Update · 2026-10-15

- **Video attachments:** A video dropped into the chat is always sent and is no longer blocked when the model is missing from a support list (for example, `kimi-k3`). Whether the model can understand video is up to the model and its provider. Since the Anthropic and OpenAI Responses formats cannot carry video, the model is informed that the video was not attached while the request still goes through.
- **Steadier tool calls:** When a model writes tool calls as text, a string parameter no longer converts `true`, `null`, or `123` into a boolean or number, and replacing Python code no longer rewrites `True` and `None` inside strings into `true` and `null`.
- **Stop and errors:** Pressing Stop or hitting an error mid-thought preserves the thinking time to one decimal place (instead of showing `0.1s` or truncating to whole seconds), and the saved reply no longer retains internal markup.
- **Mode switch card:** After Skip, Cancel, or the countdown, the chat waits for the previous run to finish before continuing so the two never overlap. Sending a queued message while the card waits lets your new message take over.
- **Agent Teams:** Every teammate starts from the same first message, which carries your original request (never a system notice in its place), includes the task ID, and asks for the same verification that the finish check expects. Stopping or dissolving a teammate now cleans up completely.
- **Tool list:** The retired `create_team` tool no longer appears in Agent, Entanglement, Analyze, or Plan modes, preventing models from calling a dead entry point.
- **File verification:** Once a verified file is overwritten in full or modified by a script, the earlier check is invalidated and the file must be verified again.
- **Adaptive strategy:** A triage request that times out is always canceled instead of keeping the model busy in the background.

## 1.4.32 · Hot Update · 2026-10-15

- **Teams:** A teammate's report card no longer shows rows of "x" when the lead's reply has been paged out of memory; the same fix covers the Analyze report, commit-message generation, and competitive-mode summaries.
- **New model:** Meta Muse Spark Open (open weights, 1M context, reasoning effort `low`–`xhigh`) on OpenRouter, Fireworks, Groq, and any OpenAI-compatible endpoint.

## 1.4.31 · Hot Update · 2026-10-15

- The check interval box on the version page no longer shows up/down arrows; type the number of seconds directly.
- Faster file edits, lint checks, and checkpoints, with steadier tool runs: a single tool call now follows the same path as several, a failed plan update no longer stops the turn, and tools waiting for approval in parallel now show it.
- More reliable replies through relay services: when a relay ends a reply without indicating completion, Breezell keeps a complete reply, retries one that never started, and shows what the relay sent last.
- Full releases can now replace hot updates newer than their own version number.

## 1.4.3 · 2026-10-15

### New Features
- **Meta Muse Wonder model:** Supports up to 1 million tokens of context and accepts video and audio inputs, with adjustable inference strength across 6 tiers from lowest to highest.
- **Muse Code account login:** Authorize via a Meta account to access Muse Wonder; login works with custom HTTP proxies.
- **GPT-6.1 Sol adds 500K context:** When routed through Codex and Breezell, context window options now include 272K, 500K, or 1M; the default remains 272K.
- **Hot Update:** Future patches can be downloaded directly inside the editor without reinstalling the full installer. Download progress is displayed and takes effect after restart. WSL/SSH remote windows remain usable during hot updates.
- **Right-click menu for chat input box:** Supports Undo, Redo, Cut, Copy, Paste, and Select All.
- **Quota exhausted alert:** When your Breezell account runs out of quota, a prompt with a "Recharge" button appears above the input box and disappears automatically after recharging—no more delayed error messages after sending requests.

### Improvements
- **Gemini 4 Argon:** Aligned with the officially released API; now available on OpenRouter and Vertex.
- **DeepSeek:** Defaults to the Responses format, requiring only an API key in settings.
- **Gemini with Google Account:** Requests within the same conversation share session state, improving cache hit rates and reducing costs.
- **Breezell alias models:** Selected inference strength persists properly (e.g., "minimal" will no longer switch to "medium" automatically) and maps to the corresponding model tier.
- **Inference models:** Large prompts over Responses WebSocket no longer time out after 60 seconds, and automatically fall back to HTTP retry when the connection is unresponsive.
- **Code Review**
- **Plan Mode:**
  - **Tool permissions:** Terminal and editor tools remain available for all actions except plain questions, removing the "This conversation has no permission to run commands" error.
  - **Human confirmation:** If confirmation from the previous turn is pending, the next message prompts for confirmation first instead of locking the conversation into permanent read-only mode.
- **Traditional Chinese:** Update notifications, the About window, WSL path warnings, diff buttons, Image Studio error messages, the DeepSeek login page, and country/language names in word translation now render properly in Traditional Chinese.

### Fixes
- File diff for newly created files no longer shows a spurious extra deleted blank line (previously showed `+4 −1`).
- Single-line files now show the correct line diff `+1 / −1` (previously `+2 / −2`).
- After scrolling long conversations, edited file paths and line numbers persist, and Code Review steps no longer revert to the loading state.
- Off-screen to-do items retain their content, preventing blank gaps in conversations and scroll jumps when scrolling up.
- Chat scrolling and clicks now work properly on touchscreens and remote touch tools.
- After refreshing the model list, custom model IDs are no longer marked as expired and removed.
- Grok login failures now indicate which network route and host failed to connect.
- Fixed routing and billing for Fast and Ultrafast speed profiles.
- Uninstalling a hot update no longer deletes files inside the installation directory (preventing "Cannot find package" startup failures).

## 1.4.2 · 2026-10-10

### New Features
- **Desktop control:** Inspect the screen, click, and type on Windows; macOS uses a native Swift helper for the same capabilities. Supports launching applications by name, and window snapshots now capture overlay popups and modal layers. Fully supported in Entanglement mode. Linux is currently not supported and planned for future release.
- **Model monitoring in Box:** A new dedicated page that checks configured or authenticated providers only when opened, displaying status history via a 90-day color bar.
- **Automatic model selection (experimental):** Deconstructs and cross-checks tasks with a dedicated analysis page. Network and conversation pages now provide layer-by-layer visibility into the active model routing, with automatic route diagnostics for stalled requests.
- **Direct account sign-in:** Added direct sign-in for DeepSeek, MiniMax, and OpenRouter, as well as desktop client sign-in for Gemini.
- **Image Studio:** Generate images and videos via OpenRouter.
- **New models:** Added Claude Haiku 5.5 (with optional thinking toggle), Claude Opus 5.5, Mistral Large 4, Nano Banana 2.1, Fledge Alpha, Ling 3.1 Flash, Apodex 1.1 Mini, Aion 3.5 / Mini, Pareto 26.10 Preview, and Glyph Cluster. Ultrafast mode is now available for GPT-6.1 Sol and GPT-6 Astra, including on Codex. Step 5 Preview now supports video input.
- **Entanglement mode improvements:** Introduces strict verification and adaptive modes. You can now ask questions during active tasks with responses preserved in session state. The causal engine now enforces a "fail-first, pass-after-fix" reproduction gate.
- **Conversations:** One-click translation for reasoning steps. Web links now display site favicons. File links feature streamlined path hints with built-in image previews. Images can be zoomed with the scroll wheel and panned by dragging. Added the ability to branch from any message turn.
- **Agent:** View and terminate agent background tasks. Search recent conversations by title. Re-enable disabled Skills directly from the slash menu. Workspaces with multiple root folders now load Skills and rules across every folder.
- **Terminal:** The status bar now displays real-time command upload and download throughput across Windows, local proxy, and macOS environments.
- **Other updates:** Copilot displays brand icons for each model. Active plan to-do items can now be renamed or appended. Updated Superpowers skills to v6.4.2. Box usage tracking now records background requests. The model configuration page has been redesigned with a sidebar alongside adjustable list and detail panes.

### Fixes
- Fixed an issue where copying messages caused off-screen responses to turn into a long string of "x"s.
- Resolved an issue where failed concurrent edits on the same file repeatedly spawned identical "Edit attempted" status lines.
- Stopping context compression midway now cleanly halts the process without persisting incomplete compressed artifacts.
- Stalled tool calls are now treated as failures and prompt for smaller, subdivided payloads instead of retrying identically.
- Edits are no longer falsely flagged as stale when the model has already read the corresponding range or loosely matched the current text.
- Fixed truncated responses where Google account streaming chunks split across multiple network reads dropped subsequent fragments.
- Pressing Enter repeatedly while a message is actively transmitting no longer queues duplicate sends.
- Prevented inactive Skill files from being injected into the system prompt when all Skills are toggled off.
- Fixed an issue where a hanging tool call in the built-in browser froze the entire conversation session.
- Corrected HTTP proxy requests emitting redundant `:443` port suffixes in the `Host` header; loopback addresses now reliably bypass proxies.
- Resolved an issue where scrolling up in completed conversations unexpectedly snapped the view back to the bottom.
- Fixed layout collisions in the Linux title bar and Image Studio where padding was missing for left-aligned window controls.
- Fixed unconfirmed file edits being silently discarded when a tool executed a full file overwrite.
- Fixed a failure when opening legacy conversations on Windows, and resolved two outdated TypeScript type errors in the settings package.

### Improvements
- **Long conversations:** Reduced lag, latency spikes, and frame stutter during extended sessions.
- **Performance diagnostics:** Enabling monitoring now surfaces hot-path execution times, in-memory message body counts, and whether disk storage was queried during initialization.
- **Runtime:** Upgraded Electron to version 43.7.9.
- **Pricing & catalog:** Model pricing has been synced with upstream provider rates. Hosted Qwen and Grok offerings now strictly adhere to official context window tiers. The Gemini (Google) model catalog is filtered to display only conversation models actually accessible by the account.
- **Terminal:** Removed redundant command echoes, added detection for themed shell prompts, and now reports the exit code upon command completion. Command cards remain compact until terminal output is generated.
- **UI & design:** Unified design styling between the model selector and the settings model overlay. The conversation input box and its bottom tray are now consolidated into a single card.

## 1.4.1 · 2026-10-01

### New Features
- **Memory pre-analysis (experimental) in Box:** Relevant memories are selected before each reply. The memory analysis page shows streaming progress. The model slot is named **MemoryPreflight**.
- Export memory packs directly from Box.
- Desktop sign-in now confirms in the browser before returning to the editor.
- **Performance monitoring toggle in Box:** Performance monitoring can be switched on or off. Metrics group windows by remote server, and leftover extension hosts are cleaned up.
- Terminal buffers are cleaned up automatically.
- Quote earlier conversations into the current session, marked with a golden robot icon, and cleared together with the input tray.
- AI browser operations now run in hidden windows by default; page snapshots switch to reading the accessibility tree, configurable in Box feature options.
- Added support for AMD model provider, **GPT-6.1 Sol**, and **Gemini 4 Argon**.

### Fixes
- **Keep All / Reject All** only applies to the current conversation. Committed renames and new files settle properly, allowing the action bar to clear.
- Tool steps hold at the loading row until results arrive, then transition to the completed state.
- Streaming code fences now close according to CommonMark specifications. Thinking effort sent to Gemini is restricted to tiers actually supported by Code Assist.
- Memory analysis no longer fails when encountering an empty `{}`. Search planning is more accurate and consumes fewer tokens.
- Script cards now only display the count of modified files (for example, "1 edited") instead of relisting every filename.
- Clear error details are provided when subscription validation fails. Subprocesses stopped early terminate immediately without lingering.
- Resolved layout jitter and twitching issues on the conversation page.
- Various minor bug fixes and stability improvements.

### Improvements
- Diffs in Code Review are now mounted on demand, layout measurements are batched, and memory retrieval is noticeably faster.

## 1.4.0 · 2026-09-26

### New Features

#### Models & Capabilities
- **Preconfigured models:** GLM-5.5 Flash, GLM-5.4, Kimi K4, DeepSeek V4.1 Pro, and Muse Spark 1.4.
- **Image Studio:** Added support for Hy Image 3.5 and Qwen Image 2.1.

#### Interaction & Design
- Design previews now use the editor's current theme and the project's own design variables instead of applying a fixed color palette. Undefined CSS variables now return guidance instead of failing the request. If the workspace contains `DESIGN.md`, its rules are included in the workflow prompt.
- Design proposal cards now default to a full-panel, one-at-a-time view. Switch between proposals with tabs or the arrow keys; side-by-side comparison is still available in one click.
- Confirmed proposals are saved as standalone HTML files under `.breezell/design/`. Tool results now point the specification, plan, and implementation back to the same file so the implementation stays aligned with the selected design.

#### Notifications
- The notification panel now uses a list on the left and details on the right.
- All important notifications stay pinned at the top instead of showing only the first one.
- The list and detail panes scroll independently.

### Fixes

#### Conversation & Agent
- Creating a branch now copies the source conversation body first. Older branches that already lost their body can recover it by line number.
- Reloaded messages release their placeholder height after the body returns. Collapsed tool and reasoning blocks no longer keep the height they had while expanded. The branch button ignores repeated clicks until branching finishes.
- Long conversations now open as one continuous list: bodies that have not yet scrolled into view keep placeholders and load on demand. Removed the “archived messages” notice and the old tail-only window. Line height remains valid after remounting, and streaming syntax highlighting now updates incrementally instead of flashing the whole code block.
- Opening the currently selected conversation again no longer replays the switch transition, preventing the conversation from being shortened or losing content outside the tail. If a local Git snapshot does not cover files from that conversation, the pending diff count in history is preserved.
- Conversation bodies are released only by the view that is currently displaying them. If a conversation is already open in an editor tab, opening it again returns to that tab instead of pulling a second copy into the sidebar, preventing the two views from unmounting each other's on-screen content.
- While a window is minimized, Breezell disables background throttling and prevents app suspension for active runs. Normal behavior resumes when the run ends, the window reloads, or the window closes.
- If the selected model is deleted or hidden, the model chip automatically switches to another visible model. If every model is disabled, Breezell prompts you to enable one first.
- External file read/write permissions were temporarily defaulted off and that `false` value was persisted, so later default changes could not affect already-saved settings. Upgrading now re-enables both permissions and records a migration marker, while preserving choices users make afterward.
- The commit dialog is now mounted at the workbench layer. Branch operations started from editor tabs are no longer clipped by the sidebar.

#### Storage
- Deleting a conversation now immediately compacts the database so space that previously only moved to SQLite's freelist is returned to disk. Older databases run one full `VACUUM`, and logs record the measured amount of storage reclaimed.
- Scheduled full `VACUUM` operations now wait for the history-write queue and run only when no conversation is streaming or executing tools.
- Deleting a conversation also removes its raw transcript from `breezellTranscripts`. Multi-workspace cleanup keeps the same grace period used for disk files for conversations that are still active in other windows.

### Improvements
- The uncommitted-path set in History is now computed once when changes occur and cached until SCM state, path restoration, or the diff range changes. With about 1,000 dirty files, a redraw that previously took roughly 25 ms is reduced; with about 10,000 files, the previous roughly 265 ms redraw cost is substantially reduced.
- Language functions in Settings are now cached per language instead of being recreated on every render, avoiding whole-page cache invalidation. The Box shell rerenders only when the language changes. Navigation search, collapsing groups, or collapsing the sidebar no longer redraws the content page. OAuth polling reuses the previous result when the state has not changed.

## 1.3.9 · 2026-09-22

### New Features
- **Preconfigured models:** Claude Opus 5.5, GPT 6 Sol, GPT 6 Terra, GPT 6 Luna, Gemini 4 Pro, Qwen4 Max, Qwen4 Plus, Qwen4 Flash, and Qwen4 27B.
- **China Telecom Xingchen:** Xing4.0-29B.
- **Xiaomi:** MiMo-V2.6 Pro, Pro UltraSpeed, and Flash. Also MiMo-V2.5 and V2.5 Pro.
- **Tongyi:** Qwen3.8-2.4T-A95B, Qwen-Doc-Turbo, and Qwen-Long.
- Sign in to Gemini with a Google account (Antigravity Code Assist).
- Image generation now includes **Hy Image 3.5** and **Qwen Image 2.1**.
- When Super Memory is used up, a notice card appears above the input box.
- Editor notifications can show images and links; documents open on click.
- Conversation export and import now have a progress panel and can be canceled mid-way.
- Grok shows your current subscription tier.
- In Box, broken compatible services and models get a badge and can be retested individually.

### Fixes
- Canceling generation no longer wipes the reply that already streamed.
- Streaming output no longer jitters line height; tool cards stay clickable.
- Right-clicking the title bar no longer crashes the window.
- Abnormal values or looping data no longer leave the sidebar blank.
- Chat sidebar failed to load because of a CSS comment syntax error.
- Backslashes in Windows paths are preserved; if a file read fails, Breezell retries with forward slashes.
- Looking up a Git commit no longer walks the entire history.

### Improvements
- Long conversations scroll more stably.
- Editor performance is faster.

## 1.3.8 · 2026-09-19

More models in one editor, cleaner switching mid-conversation, and a tighter Plan loop — same thread, same context.

### New Features
- **Providers & models:** StepFun and AiMass are now first-class providers. Qwen 3.8 lands with the 27B and Omni-Flash variants. Zhipu GLM-5.3-FlashX is in the list.
- **Doubao Seed 2.1:** Pro 0915 and Evolving are available.
- **Official protocol wiring:** OpenCode, Zhipu, Kimi, and DeepSeek now follow each vendor’s official plan tiers and protocol formats (Chat / Responses / Anthropic).
- **OpenRouter:** New slugs appear in the model list. Free models show a FREE ribbon; retired models are stamped Unavailable.
- **Model picker in chat:** Switching models opens an in-panel picker with Models and Compatible tabs.
- **Models page:** Jump back to top, or jump to the latest additions.

### Fixes
- **Paste image:** Images are sent to the model as pixels. Breezell no longer looks for image.png in the repo.
- **Composer:** Line breaks are preserved. Shift+Enter is hinted in the input.
- **Plan / Todo:** Task status in .plan.md stays in sync as work moves. Resuming an old plan pulls todos with it. update_todo_list no longer re-marks items while a plan is executing.
- **Codebase Exploring:** Fold groups rebuilt.
- **Edit cards:** Completed cards collapse by default — controlled from the box feature toggle.
- **Citation pills:** Styling matches the editor selection helper.
- **Account pool:** Rotation is per request, not pinned to a single conversation.
- **Built-in browser:** Tabs are isolated per workbench window.
- **Explorer:** Project folders named dev or run are no longer hidden.
- **PDF preview:** Scroll, zoom, and drag work.
- **Video preview:** Duplicate selectors removed. Send to chat is available.
- **Minimize hang:** The unresponsive dialog waits 15 seconds before appearing, so fewer false alarms.
- **Context windows:** Qwen 3.8-27B can switch 256K / 1M. Short-context windows and list prices follow the official tables.
- **Thinking intensity:** Official tier names aligned across providers, including DeepSeek.
- **Compatible slots:** Shared config-column width. Capability tags sit under the token line.
- **Admin:** Model-management table header stays pinned. Fetching the model list is fixed. Reference price and long-cache fields line up.
- **Sidebar:** The overflow panel on the top activity bar no longer paints outside the sidebar.

### Improvements
- Retired GPT-5.3-Codex-Spark removed from the catalog.
- Conversation body color matches tool-card filenames.
- Electron updated to 43.7.3.

## 1.3.7 · 2026-09-17

### Improvements
- Dropped the on-device full-repo vector index. Search now uses grep.
- Background jobs and indexing no longer stall the conversation you are in.
- Usage rankings align with the cards and can switch by period. Sub-Agent usage is billed under the parent conversation.
- Conversation tags no longer interfere with each other. Cloning a chat no longer blows out the layout. The model stays attached to that conversation.

### Fixes
- Deleted chat history is no longer restored automatically.
- Terminal cards near the input no longer yank the page down and bounce it back.
- Plan cards and the chat layout no longer push each other apart. Todo cards render correctly.
- Built-in SSH works again. It no longer goes through Microsoft Remote-SSH.
- The selection search assistant no longer covers highlights. Consecutive tool-call counts stay visible.
- Opening **More** on a conversation page no longer crashes.
- Clicking a branch no longer overflows the stack.
- On the conversation page, OpenAI-compatible and API providers make the current model obvious when you pick one.
- Plan mode is fixed.

## 1.3.6 · 2026-09-15

### New Features
- **Atlas local code search:** Semantic search and index cards. Excluded directories are remembered. Questions about how code relates prefer Atlas.
- **Plan mode blueprints:** Click **Start** on the blueprint card to begin. Execution still uses todos.
- **Selection assistant:** Search selected text in the built-in browser, an external browser, or Bing. Queued messages can be reordered by dragging.
- **Oversized paste or drop:** Huge pastes no longer blow up the composer. They land as a file chip; the model reads them as a file.
- **PDF attachments:** Sakana, Mistral, Gateway, xAI, Kimi, Qwen-Doc, and similar channels can attach PDFs.
- **Completion sounds:** When a turn finishes, Breezell can ring or speak. Error speech is off by default. Pick a voice in Box.
- **Open Browser** in the editor. The tab-strip scrollbar is gone; the middle mouse wheel pans left and right.
- **Usage:** Cache and Token in separate columns. Cache reads and writes bill at official usage rates. Sub-Agents roll up under the parent session. The OpenAI-compatible account pool has its own page.
- **Models and providers:** Volcengine Ark can pull the model list with AK/SK, including Agent Plan (OpenAI / Anthropic) presets. Added AIHubMix and Sakana Fugu (Max / Ultra v2). Azure Foundry and Vertex Gemini are filled in. DeepSeek V4.1 Flash and Kimi K2.8 Preview join the roster.

### Fixes
- **Code Review** re-diffs against each edit's own pre-edit snapshot, so sessions no longer mix.
- Dragging chat tabs no longer crashes the window. Terminal cards don't interfere with each other.
- The selection assistant no longer covers highlights. Consecutive send count is visible. **Quote** no longer looks like a full page. Reasoning stays visible on empty replies.
- The Box usage tab is no longer squashed. Rankings fill the width. Provider cards can switch time ranges.
- Official model lists and list prices come through correctly. Ordinary plan lists still render as todos. Blueprint nodes stay consistent in files, cards, and **Start** bubbles.
- Background Agent work and index writes no longer stall the conversation you are looking at.
- Vue tool errors are reported correctly.

### Improvements
- Agent work style is tighter: retry on failure, use draft files, and follow along when state changes.
- Electron upgraded to 43.7.0.
- Box toggles are searchable. The dashboard keeps painting. Cleanup drops unused blueprints and terminal logs.

## 1.3.5 · 2026-09-09

### Fixes
- Opening a new window after 1.3.4 could render a black frame and stay blank. The window now paints on first show.

## 1.3.4 · 2026-09-09

### New Features
- **Prompt rewrite:** The wand in the dashed input tray rewrites the draft in the composer. Preview first, then replace. It never auto-sends.
- **Feature usage accounting:** Tokens for send message, follow-up suggestions, and prompt rewrite now land in Box → Feature usage, separate from conversation usage.
- **Rollback confirm:** Rolling back from a user bubble asks for confirmation in the input tray first, so you don't drop a branch by accident.
- **Copy / branch from the turn bar:** Copy is plain text. Branching from a turn opens a new chat; the editor conversation stays in the editor.
- **Editor branch menu:** Sidebar **Open in Editor** now opens a dedicated chat column instead of crowding the file tab strip.
- **Image 2.5 Studio:** Image workflows are upgraded; branches can be managed from the editor.
- **Database auto-approve:** Creating a database connection can go through Auto.
- **Memory write tool:** `update_memory` is the only path that writes user memory (workspace / global; add / replace / delete). Other notes on disk are no longer mutated ad hoc.
- **Native tokenization:** Local token counts follow each model's tokenizer.
- **GitHub-style Review diffs:** Code Review now uses git-diff-view.
- **Chat backup zip:** Export as a zip archive. Legacy JSON still imports.
- **Command palette jump:** Opening a file jumps to that file's latest hunk.
- **Compatible API pricing:** OpenAI-compatible rows can set a custom $/1M rate.
- **Box network route:** On the Models page: Direct, System proxy, Global, or Custom.
- **Mode menu opens upward:** The mode picker above the composer prefers opening up.

### Fixes
- Changing the model on one chat no longer changes the global default or other conversations.
- Light-theme Codex usage: removed hard-to-read colored capsules (for example `5d`). Usage is now plain text on the tray.
- **Stop** ends the turn immediately. Canceled edits are not written back to disk. Cards no longer vanish.
- `edit_file` flicker: clean files refresh by etag. Full-file rewrites shrink to the changed range. An open editor no longer reloads the whole page.
- Packaged MCP servers failed to start (Ajv constructor error). Remote PATH / cwd / env and error reporting are fixed as well.
- **WSL:** The install lock is released after the service is up, so later windows and **Open Folder** no longer time out.
- **Grok API key:** All traffic goes through the Responses API. Streaming no longer arrives in late chunks.
- Error cards now follow the provider that actually failed.
- Invalid URIs on the Review page no longer crash the whole page.
- Home-directory (`~/`) paths in replies are clickable.
- Vault cards: removed the hover lift that made cards "float."
- Light-theme **Quote** / **Copy** icons use the button foreground color and no longer wash out.
- Collapsed-rail avatars stay square.
- The usage filter dropdown anchors to the left of the button and no longer covers the Box sidebar.
- Segmented tabs wrap in narrow panels.
- Title-bar ellipsis regex: the full-width period is now a `\u` escape.

### Improvements
- Composer scrollbar overlays content like the chat list. No extra gutter on the right.
- Search / exec timeouts: stuck `rg` processes now have a hard timeout so the window doesn't freeze.
- Context overflow: budget, uv hints, and empty landing cards match the current chat shell.
- History-bar long jumps teleport a slice instead of expanding the entire tail.
- Rollback confirm panel is wider; the confirm action shows ⏎.
- Review diffs tokenize visible lines only. Paging is faster.
- Box Models page: the title sticks to the top. Each provider row shows status and route.
- Context-ring bubble uses the same background as the input tray.
- Skills and Memory copy is localized. Delete controls use a neutral color.

## 1.3.3 · 2026-09-07

### New Features

#### Box workbench
- The title bar now switches between **Box** and **Agent** in one click. Box is a standalone management surface that brings together models and providers, account and usage, Super Memory, Code Review, the MCP marketplace, the database browser, data cleanup, and Settings.
- **Models:** Provider config sits next to the model list. Add or remove OpenAI-compatible endpoints. Choose a network path per provider — including official Breezell models — Direct, System proxy, Global proxy, or a custom proxy. Probe and test connectivity in one click.
- **Vault:** Encrypts relay endpoints and account credentials, then fills them in where you need them. No more copying keys around.
- **Code completion (FIM):** Completions can use their own connection and each vendor’s native FIM protocol. Major vendors ship as presets.
- **Data cleanup:** Inspect local data stats, compact the database, and run integrity checks. Every maintenance pass is logged.
- **Database browser:** Rebuilt, with multiple connections and clearer grouped navigation.
- **MCP marketplace:** Organized by category, with a redesigned page.
- Privacy notes now use a card layout and cover more of the details.

#### Breezell Mind
- Conversations keep a running working notebook. When a long thread hits the budget line, older history is folded down to the notes and the essentials.
- **Quote this conversation** is lighter: quoting another thread only carries the latest turn plus the files involved. Full history is read on demand.
- Context compression now prepares and refreshes a background handoff document. The raw record stays on disk. You get a warning if compression has run too many times.

#### Conversation
- After a turn finishes, you get a few “what you can do next” suggestions — click to continue.
- A conversation can open as an editor tab, side by side with the code.
- `@` mentions for files and symbols are as fast as Quick Open. `/` opens the Skills menu.
- Model menu: **Breezell Max Plus** toggle.
- Agent system prompt rewritten: clearer about what each turn is for. After real work lands, you get a short wrap-up. Comment language follows yours.
- File paths in messages render as clickable file chips and stay consistent across renders.

#### Models
- Added **GPT-6 Astra**, **Claude Fable 5.1**, **Gemini 3.8 Flash**, **Muse Spark 1.3**, and **OpenCode Go Omen Alpha**.
- Models without built-in web search now fall back to the provider’s native search.
- Claude Sonnet 5 pricing updated to the latest official rates.

#### Editor
- Edit Markdown in place and toggle preview without leaving the file.
- Diff view adds a **Diff View** submenu for comparison modes. Custom editors can show diffs.
- When opening a file, you can choose among editor types.
- Feature options in Settings redesigned. Git commit-message generation has its own model card.
- Account panel restyled as a membership card: plan badge, balance, expiry, and Super Memory quota at a glance. The account button shows your avatar.

### Fixes
- An unclosed `<` in a stream no longer freezes the rest of the text. Reasoning-pane code renders as plain text; code fences without a language still highlight.
- Empty model replies trigger an automatic retry instead of silently ending the turn. Streams the upstream later marks empty are kept.
- Token counts after context compression now match what is actually sent.
- Changing the conversation model no longer overwrites the models chosen for Apply and Git commit messages.
- Reasoning auto-scroll no longer detaches on its own; streaming code blocks no longer flash white.
- Analyze sub-agents no longer spuriously ask you to switch to Agent mode.
- The built-in browser no longer types keystrokes into the AI input when incognito is turned off.
- Poolside Laguna requests that include a screenshot no longer fail the whole call; they now go through the vision proxy.
- Attachment token estimates before send are accurate. Emergency compression can fold the current turn.
- Error cards name the provider that actually failed.
- Terminal extension commands no longer wait out the full shell-integration timeout before they run.
- Plan-execution bubbles keep their corner radius. User-message shadows no longer cover the text below.
- Model hover settings align to the row they belong to.
- The code-index page in Settings no longer rescans the whole workspace on every open. Build artifacts are excluded from indexing.
- **Linux:** Restored the 8 KiB Node buffer pool to avoid regressions in some workloads.

### Improvements
- `repo_map` no longer freezes the UI for tens of seconds. Line-level diffs for streaming edits and conversation persistence both leave the UI thread.
- Explore tools have timeouts — a dead network will not pin the Agent for five minutes. Failed explores collapse to one quiet gray “tried” line.
- Sidebar is lighter: MCP marketplace and Super Memory live in Box. History is paginated and grouped. Account badge placement tweaked.
- Runtime upgraded to **Electron 43.6** (Chromium 150 / Node 24).
- Installers ship only the binaries for the current platform, so packages are smaller.

## 1.3.2 · 2026-09-01

### Fixes

- Fixed an issue where the entire chat history could disappear after switching workspaces, changing WSL / remote paths, or losing local state.
- Fixed freezes and unresponsive windows in long conversations, as well as UI lockups during large-scale file changes or `git checkout`.
- Fixed local file links in chat appearing as blocked and becoming unclickable.
- Fixed built-in browser zoom resetting to 100% after a refresh, and model dropdowns or mode popovers being obscured by web content.
- Fixed queue actions such as Edit, Send Now, and Delete being unavailable on touch devices.
- Fixed shared browser deadlocks and new Agent drafts being mixed across conversations.
- Fixed conversation workspace identity changing unexpectedly, which could cause memory to leak across projects.
- Fixed model group collapse states not persisting across restarts.
- Fixed long conversations incorrectly reporting a “Network Error” after around 50 seconds when the actual issue was a full context window.
- Fixed switching the chat model overwriting separately configured models for Apply and Git commit messages.
- Fixed reasoning output getting stuck while scrolling, and white flashes in streaming code blocks.
- Fixed Code Index scanning build artifacts, which caused slower indexing and unnecessary disk usage. Opening Settings no longer repeatedly triggers “Scanning workspace.”
- Fixed Agent incorrectly insisting that code comments must be in English and refusing explicit requests to use Chinese.
- Fixed the web exploration tool idling for around five minutes without making progress.
- Fixed clipped corners on plan execution cards and pinned popover shadows overlapping the first line of replies.
- Fixed remote server version mismatches when connecting to remote development environments from source builds.

### Improvements

- Long-conversation processing no longer blocks the interface, allowing replies to appear progressively as they are generated.
- When the context window is close to full, Breezell now explains the situation earlier. Older results are moved to local storage and reloaded only when needed.
- Improved responsiveness for code blocks and Diffs in long responses. Syntax highlighting for large files no longer locks up the window.
- Chat history is now grouped into Today, Yesterday, and Earlier, with Agent and Teams conversations separated.
- Provider headers in the model list now stay pinned while scrolling. The currently focused conversation no longer jitters with the input area.
- Code Index now respects `.gitignore` and focuses on source files instead of build artifacts.
- Inspecting repository structure no longer causes stalls lasting more than ten seconds.
- Sending messages in extremely long conversations is now more responsive.
- The model settings popover now aligns with the currently selected row.
- Git commit message generation can now use a separately selected model.
- GPT-5.6 reasoning levels, including Pro, are now visible and selectable.
- Added Hunyuan HY4, Kimi K3 / Video, Qwen3.8 Flash, GLM-5.3 Flash, and a range of new video models.
- Image Studio now supports Grok Imagine image generation 2.0 and video generation 1.5.
- After long-conversation compression, Breezell now keeps a handoff summary so the conversation can continue smoothly, while the complete local history remains searchable by keyword.

## 1.3.1 · 2026-08-26

### Fixes

- Fixed an issue where **chat history could disappear after the workspace identity changed**.
- Fixed an issue in **Breezell Settings** where incorrectly mounted dropdown components could cause unexpected behavior.
- Fixed incorrect **zoom behavior in the built-in browser**.
- Fixed chat layout sizing so the **conversation area is no longer compressed by the page height**.
- Fixed an issue where **edit tool rendering could cause a crash**.
- Fixed **system notifications incorrectly stretching to full width** when using the new Breezell UI.
- Corrected the **bottom input area's alignment** so its left and right spacing now matches the surrounding chat panel.

### Improvements

- Improved overall **performance and responsiveness**.
- Enhanced **model engine capabilities and reliability**.

## 1.3.0 · 2026-08-25

### New Features

- Added an **all-new interface layout**, available under **Breezell Settings > Appearance**.
- Added **SiliconFlow**, **OpenCode Go**, and **Meta** as model providers, along with per-model API format selection for **Chat Completions**, **Responses**, and **Anthropic Messages**.
- **OpenRouter** now supports selectable API formats. **Claude** and **OpenAI** use their native APIs by default.
- Added support for **Gemini 3.7 Flash** and **Dots Studio dots3-note Preview**.
- Chat now supports **video attachments**, with video preview directly inside the workspace.
- Added **Teams worktree isolation**: teammates can edit code in independent Git worktrees, and idle teammates can be automatically spun back up when needed.
- **MCP servers** now run inside the workspace extension host. Closing the project window also terminates their child processes.
- Redesigned **Advanced Model Settings**, including default thinking settings and pass-through support for **reasoning effort**.
- Added a new **input tray**, consolidating quick commands and tool popovers into a cleaner interaction flow.
- **Unsent drafts** are now preserved in chat history, and teammates can now be assigned labels.
- Added two new themes: **Breezell Warm** and **Breezell Paper**. Theme palettes have also been expanded, and the launch screen now follows the editor's active color scheme.
- Added a **folder picker** in the **All** list as a fallback when folders cannot be dragged from the Explorer.
- Added an **About** window that displays the installed Breezell version.
- Code completion now takes **recent edits** and **language-specific comments** into account for more relevant suggestions.

### Fixes

- When using **ds4** or other text-only models through an **OpenAI-Compatible** provider, images can now be sent directly if vision support is configured on the provider. A separate vision proxy no longer needs to be configured in the IDE.
- Official text-only models such as **DeepSeek** still block image attachments when no vision model is configured, preventing invalid requests.
- Switching modes while a response is still streaming no longer immediately displays a **"Switched to ..."** notification. The notification now appears only after the current response finishes.
- **Edit cards** now jump to the correct location on the first click.
- **Context usage** now reflects the context actually used by the request, fixing inflated or inconsistent usage readings.
- The MCP server list now refreshes after the extension host restarts, and server names are now emphasized in the input tray.
- Fixed synchronization issues across **Git, Command Palette, History, and Explorer**, including cases where pending diffs disappeared after a commit.
- Fixed chat notifications not appearing while the Breezell window is minimized.
- Fixed **WSL / Remote URI handling** and **REH cache validation**.
- Fixed white flashes when the browser webview is recreated and cases where the native webview intercepted splitter dragging.
- **GLM [1m]** is no longer incorrectly routed through **Chat Completions**.
- Improved default theme behavior after installation and corrected **red/green diff contrast**.

### Improvements

- Refined the **chat interface**, **Mermaid rendering**, **theme controls**, **Settings rows**, and terminal approval copy.
- Improved interactions across the **input tray** and tool popovers.
- Improved **Plan mode switching behavior**: Breezell will still ask questions when clarification is needed, and relevant cards will no longer be hidden.
- Added adjustable font sizing for **Ask Question** options.
- Improved **memory recall reliability**, with clearer messaging while recall is in progress.
- Code completion suggestions now better match the **language of the current file**.

## 1.2.9 · 2026-08-24

### Fixes

- Fixed cases where some conversations could not be loaded correctly.
- Fixed incorrect output formatting in Entanglement mode.
- Improved stability and fixed cases where Breezell windows could crash or terminate unexpectedly.
- Fixed blank pages when opening websites in the built-in browser.
- Fixed trailing tags being exposed at the end of Analyze mode responses.
- Fixed custom context window settings for Codex models not being applied or displayed correctly.
- Fixed incorrect quota displays when using Grok direct login.
- Fixed automatic compression not being triggered after switching the context window.

## 1.2.8 · 2026-08-16

### New Features

- Reworked Agent, Entanglement, and Teams modes for more reliable workflows.
- Added OpenCode Go and Meta integrations, along with per-model API protocol selection.
- Image Studio now supports Seedance 2.5. DeepSeek models can now hand off images for vision recognition.
- Added GLM-5.3 and Grok 4.6, and improved compatibility with DeepSeek-specific model formats.
- Initial setup now lets users choose their interface language during installation.
- Redesigned the empty conversation page with feature cards and left/right navigation.

### Improvements

- Teams now provides more detailed task-progress reporting.
- Long conversations now automatically prune stale or invalid context to reduce context bloat and unnecessary overhead.
- Improved memory-retrieval accuracy, and waiting-state prompts now update dynamically as tasks progress.
- Terminal sessions are now grouped by purpose. Silent commands remain active until their execution budget is exhausted instead of stopping prematurely.
- Improved Git-status refresh and synchronization after review, rollback, and submission actions.
- Mode-switch separators now remain visible, making it easier to review where a mode changed during a conversation.

### Fixes

- Fixed Teams conversations freezing or becoming stuck in an idle state, as well as diffs remaining visible after submission.
- Fixed chat notifications not being delivered when the Breezell window is minimized.
- Fixed normal conversations being interrupted after an image-recognition handoff completes, and browser emulation views occasionally becoming stuck.
- Fixed inaccurate terminal output, issues with chained PowerShell commands, and background commands repeatedly looping.
- Fixed the Source Control commit input disappearing or becoming invalid after refresh.
- Fixed queued messages not being sent when pressing Enter, as well as Analyze tasks stopping unexpectedly or repeatedly restarting.
- Fixed issues with Grok subscription-based conversations, hidden reasoning becoming stuck, and invalid paths causing exceptions.
- Fixed rollback operations unintentionally affecting unrelated changes, MCP tools resolving to the wrong path, and Linux packaging issues.
- Fixed various other bugs and stability issues.

## 1.2.7 · 2026-07-29

### New Features

- Improved understanding and navigation efficiency for large codebases.
- Added optional answer-quality insights, presenting this turn’s evaluation across answer quality, requirement understanding, and verification confidence.
- Cache statistics details now support pagination, linked filtering, and multiple languages.

### Fixes

#### Source Control and Agent Runtime

- Fixed the commit-message input becoming empty or invalid after refreshing a source-control repository, switching views, or rebuilding components.
- Fixed Agent reasoning stalls, incorrect terminal-state detection, lost background-command exit codes, and tasks ending prematurely.
- Fixed queue-message editing, tool-call feedback, task-list restoration, and continuous-turn state issues.

#### Chat and Remote Environments

- Fixed original conversations being truncated prematurely when editing and resending messages. Messages are now replaced atomically after validation completes.
- Fixed remote-path issues in WSL and Remote SSH environments, and improved host startup, password retries, and server caching.

#### Rendering, Models, and State

- Fixed KaTeX block-formula parsing, code-block themes, Chinese font rendering, and file-icon alignment.
- Fixed some models incorrectly displaying empty responses, exposing error stacks, or issuing abnormal provider network requests.
- Fixed deleted content reappearing in Super Memory and browser-panel states reverting unexpectedly.

### Improvements

#### Agent Search and Execution

- Optimized Agent search, tool invocation, task execution, and termination logic to reduce redundant conclusions, unnecessary waiting, and abnormal interruptions.
- Optimized result limits, execution timeouts, and streaming status for large-scale code searches to reduce resource consumption from oversized result sets.

#### Chat Experience

- Improved chat completion status, the bottom toolbar, scroll positioning, and long-conversation loading.

#### Settings and Usage

- Refactored model-account and OAuth sign-in cards, unifying the visual hierarchy and interaction patterns across the Settings page.
- Improved Codex usage, model metadata, and related status indicators.

## 1.2.6 · 2026-07-27

### Added

#### Session-Level Chat Git

- AI-generated code changes from the same session can now be submitted together.
- Added simultaneous detection and processing for multiple Git repositories.
- Chat tasks and code review status now synchronize automatically after submission.

#### Providers, Models, and Capabilities

- Added the **Poolside Platform** provider with access to **Poolside Laguna** through an OpenAI-compatible configuration.
- Added model configurations for **Qwen3.8**, **Opus 5**, and **Pangu**.
- Enhanced **LongCat** with inference replay, preserving reasoning context after tool calls.

#### Remote Workspace Security

- Added a security warning when accessing the Linux root directory `/` in a remote environment.
- Linux virtual file system paths such as `/proc`, `/sys`, and `/dev` are now excluded automatically.

### Improvements

#### Code Review

- Redesigned the **Accept/Reject** action bar for individual code blocks.
- Updated **Keep All** to follow the current theme’s accent color.
- Reduced the height of inline action bars for a more compact code area.
- Review action bars now collapse and reset automatically after a successful Git commit.

#### Model Selector

- After a key is entered for the first time, only five recommended models are enabled by default to reduce list redundancy.
- OpenAI-compatible provider capabilities now adapt to the selected API format.

#### Code Submission and SCM Refresh

- Git status in the Activity Bar now refreshes automatically after files are saved.
- Chat Git submissions are now uniformly treated as **Keep All Changes**, automatically completing the corresponding code review steps.

#### Interface

- Removed the unread indicator from notification titles.
- Improved hover-menu switching for OpenAI-compatible model groups.
- Fixed the vertical alignment of tool-count text.
- Enabled the Kimi Mono icon style in the light theme.

### Fixes

#### WSL and Remote Git

- Fixed a WSL extension host startup crash.
- Fixed inconsistent WSL server proxy configuration.
- Git status checks and AI-generated commit messages in WSL and SSH environments now run through a remote-aware execution channel.
- Prevented Git commands for remote workspaces from running against local paths.
- Fixed an issue where the Agent automatically closed Git repositories after modifying files.
- Fixed incorrect relative-path display in remote URIs.

#### Remote SSH

- Fixed Remote SSH password-expiration handling. Saved passwords are now cleared when rejected by the server, and users are prompted to re-enter the password during the same connection attempt.
- Prevented Remote SSH from downloading REH server packages with mismatched commit hashes, avoiding version mismatch errors and remote host startup failures.

#### Chat Rendering

- Added Trusted Types support for Mermaid charts.
- Improved Mermaid tag sanitization to prevent unsafe or malformed tags from causing rendering failures.

#### Rules and Memory

- Fixed empty content being saved after an editor lost focus.
- Fixed the resource manager not refreshing promptly after changes to the `.breezell` configuration.

#### Remote Tree View

- Stopped meaningless tree-view errors from being emitted repeatedly when SSH Hosts configuration is missing.

## 1.2.5 · 2026-07-22

### Added

- Added provider and model integrations for **Tencent Hunyuan HY3** and **TokenHub**.
- Added **Gemini 3.6 Flash** and **Gemini 3.5 Flash-Lite**, both now officially generally available.
- Added project badges to chat histories in multi-root workspaces.
- Expanded capability support for compatible provider channels.
- Added interface translations for Japanese, Spanish, Portuguese, and additional languages.
- Updated the OpenAI protocol guidance with two clearer recommendations:
  - OpenAI-compatible endpoints use the OpenAI protocol by default.
  - The Responses API is recommended for GPT models.

### Fixes

- Fixed an issue where newly created todos remained stuck at **Waiting for Confirmation**.
- Fixed multi-stage plans requiring users to manually click **Continue** after every batch.
- Fixed the duration, Review, Git, and tool action bars remaining highlighted and clickable after reverting to a checkpoint.
- Fixed entitlement gating in the drawing panel not synchronizing correctly, and improved unclear restriction messages.
- Fixed blank canvases not receiving a default node when opened for the first time.
- Fixed Chat mode sessions leaking or becoming mixed across multiple windows.
- Fixed model selection falling back to an unavailable model after the currently selected model was deleted.
- Fixed single-file staging not working correctly in Chat Git.
- Fixed commit and refresh issues in multi-repository workspaces.
- Fixed chat histories being lost after adding a folder to the workspace.
- Fixed missing Activity Bar icons in WSL and SSH environments.
- Fixed project list flickering in the Explorer.
- Fixed concurrent Git status checks in the repository view overloading the extension host.
- Fixed malformed `****` output disrupting OpenAI reasoning streams.
- Fixed the styling of the close button on edit bubbles.

### Improvements

- Simplified the startup cards on the Welcome page with dashed tiles and unified Code Review icons.
- Updated secondary Super Memory text to use italic styling.
- Consolidated provider cards on the Settings page.
- Improved the title layout of network configuration dialogs.
- Improved localization for the empty model selector and made it possible to open Settings directly from the selector.
- Ensured the background directory’s `supportsFast` capability is correctly passed through the request pipeline.
- Corrected pricing information for **Qwen 3.7**.

## 1.2.4 · 2026-07-20

### New Features

#### Models and Providers

- Integrated **Grok 4.5**, including adjustable inference strength and a Fast channel; **Claude Sonnet 5** is available with both **200K** and **1M** context options.
- Added **Kimi K3** through both Moonshot API and Kimi Code channels, with **256K** and **1M** context options, plus full support for **Kimi K2.7 Code**.
- Added the **StreamLake** provider with Kuaishou's complete KAT-Coder model family, built-in Coding Plan presets, and pay-as-you-go endpoint presets.
- Added OAuth sign-in for Grok accounts.
- Redesigned Fast channels from a global toggle into independent **provider + model** configuration, so Copilot, Codex, Claude, and other providers use their official channel semantics.
- OpenAI-compatible configurations can now be pinned so frequently used channels remain at the top.
- Added support for time-limited model trials and discounts, with promotion badges in the model selector.
- Updated the model directory with current flagship models, including Claude Fable 5, Claude Sonnet 5, Nemotron 3 Ultra, DeepSeek V4, GLM-5.2, and MiniMax M3, while removing outdated entries.

#### Usage, Appearance, and Interface

- Upgraded the Usage Center with multilingual usage and reset-time display for Codex, Kimi, and Copilot in Simplified Chinese, Traditional Chinese, Korean, and Russian. Settings and chat-sidebar data now synchronize in real time, and Copilot usage shows Chat, Completions, and Premium Requests separately.
- Welcome-page titles can now be customized globally or per mode, including font size and font weight. Added the **Elegant** style for quick-access shortcuts.
- Added Japanese, Spanish, and Brazilian Portuguese interface languages.
- Redesigned the notification center to follow the product language, refreshed the Super Memory card layout, and softened the chat input and message bubble visuals.

#### Browser, Chat, and Workspace

- The built-in browser now supports muting all tabs or individual tabs, with real-time synchronization between its panel tab list and the browser.
- Chat messages can now include up to **10 images**; images are automatically resized and included in context accounting. Added turn-duration display, one-click rollback within messages, and options to open links in the external or built-in browser.
- The chat commit dialog now supports multi-repository workspaces: generate commit information per repository, submit independently, initialize repositories directly from the dialog, and preserve commit/push progress across restarts.
- Added project grouping in the resource manager and more timely collaboration-status updates across multiple windows.
- Added persistent memory, which automatically distills conversation history into reusable experience with multilingual deduplication.

#### Diagnostics and Productivity

- Added cache visualization with per-turn cache notifications and workspace daily reports comparing today and yesterday, including session/workspace filters, estimated savings, and cache-miss analysis.
- Added interactive design cards that can generate HTML design drafts directly in chat and apply them after confirmation.
- Provider network settings now support one-click parallel speed tests across direct connection, system proxy, global proxy, and custom routes. Recommended routes are labeled automatically, and routing badges update in real time on the Settings page.
- Upgraded the PDF viewer core with a new toolbar. Attachments are metered by page, automatically hidden when context is constrained, and limited by each model's volume and page limits.

### Improvements

- Redesigned the backend command experience: status-bar entries stay visible until commands truly finish, while concurrent commands collapse into an expandable summary.
- Expanded advanced-feature authorization and compatibility for mainstream extensions such as Python and Pylance, and improved remote-development compatibility.
- Improved installation and update reliability on domestic networks.
- Made automatic context compression smarter by triggering it dynamically according to available context, reducing unnecessary compression.
- Built-in skills are now enabled on demand and default to lightweight mode.
- Agents now complete multi-stage plans without pausing mid-process for confirmation, with more restrained responses focused on outcomes.
- Deeply optimized the request pipeline to reduce the cost of long conversations.
- Redesigned error prompts with quieter banners, detail drawers, and clearer mixed Chinese-English rendering.
- Restored the title-bar layout toggle, reorganized quick access on empty chat pages, and prevented provider icons from triggering system alerts.

### Fixes

- Resolved lag and abnormal memory usage in long conversations, significantly accelerating historical-session opening and improving extended-response smoothness.
- Disabled or offline MCP servers no longer expose tools to models, preventing accidental calls; MCP connections also remain stable after toggling, and configuration read errors no longer clear saved settings.
- Fixed incorrect bolding of selected Settings navigation icons, crashes in certain Linux environments, and several other interface issues.
- Fixed past-session loading issues that could cause interface crashes or unbounded storage growth.
- Fixed false-positive “context compressed” states: real compression is now explicitly visible, and long-conversation understanding drift and cross-session memory interference have been addressed.
- Deleting an active model or channel configuration now automatically selects an available option instead of leaving selection boxes blank.
- Switching between Plan and Analysis tabs now preserves state without reloading content.
- Fixed occasional white screens in the drawing panel, stale entries after background command termination, Settings-page scrollbar issues, and other minor details.
- Improved parameter compatibility across models, including instruction editing, streaming interruption detection, thinking-budget limits, and document alignment.

## 1.2.1 · 2026-07-08

We are excited to announce the release of Breezell v1.2.1. This update brings a wide range of improvements across source control, background commands, terminal workflows, Skills, model support, image task handling, UI polish, and long-running AI interactions. It also includes many stability fixes for streaming output, editor state synchronization, session persistence, multi-window behavior, and authentication.

### New

- The Source Control view now supports expandable commit details and browsing of related files, making change tracking clearer and more intuitive.
- Background command and terminal collaboration has been improved, with support for multi-task status display and clearer feedback when users manually interrupt a task.
- The Skills panel now works together with the Superpowers master toggle, creating a more unified configuration path.
- The conversation home page now includes quick access shortcuts for frequently used capabilities, reducing the time needed to reach common features.
- Brand visuals and interface identifiers have been updated across startup screens and Team Mode.
- Expanded support and parameter adaptation for the latest generation of mainstream AI models.
- Image settings have been upgraded, including status tracking for asynchronous video-style tasks.
- Added the first phase of batch script execution, designed for multi-step automation scenarios.

### Fixes

- Fixed issues where AI conversation streaming could become stuck, produce abnormal formatting, or fail to recover smoothly after long-running tasks were interrupted.
- Fixed repeated application of code editing tools, abnormal navigation behavior, and editor state desynchronization after rejecting changes.
- Fixed delayed refresh issues in context usage statistics, progress rings, and hint messages.
- Fixed version update notifications getting stuck and several untranslated text strings.
- Fixed usability and display issues across Super Memory, code review, and related tool flows.
- Fixed session persistence issues and reduced lag in the history list when handling large threads or large pasted content.
- Fixed overlay panels such as MCP and Skills being blocked during conversations.
- Fixed occasional stream interruptions during long research-style outputs.
- Fixed task completion reminders not triggering when the window was out of focus.
- Fixed settings being overwritten across multiple windows and batch operation bars disappearing unexpectedly.
- Fixed authentication sessions requiring users to log in again or showing inconsistent states in certain scenarios.

### Improvements

- Upgraded the core runtime and AI dependencies to improve overall stability and compatibility.
- Optimized prompt caching and tool-calling strategies to reduce repeated overhead and improve response consistency.
- Improved streaming rendering and UI update logic, making long conversations and high-load outputs smoother.
- Optimized the LLM request timeout mechanism so long generation tasks are less likely to be interrupted incorrectly while progress is still being made.

## 1.2.0 · 2026-07-06

Breezell v1.2.0 introduces new AI tools, smarter agent workflows, interface upgrades, stability fixes, and performance improvements across long conversations, tool execution, terminal output, memory isolation, and remote development.

### AI Tools and Intelligent Capabilities

- Added the new **Agent Research** tool, with support for real-time progress tracking and result display.
- Added **batch script execution** in Code Mode as the first phase of multi-step automation support.
- Added a unified browser tool entry point, consolidating previously separate browser actions into a simpler workflow.

### Conversation and Interface

- Added a **Message Rail** to the chat area, making it easier to browse and jump between conversation messages.
- Added quick access cards for **Super Memory** and **Code Review** on the chat home page.
- Added a quick toggle panel for **MCP servers** in the input area, allowing users to enable or disable MCP without opening Settings.
- Introduced a new brand identity, with unified visual updates across the launch page, welcome page, and Teams Mode.
- Redesigned the provider management interface in Settings, now supporting list-based browsing and detailed drill-down views.
- Added custom theme accent colors, available in both light and dark mode.
- Upgraded image settings to v2, with support for polling and tracking asynchronous video tasks.
- Added health check reports for OpenAI-compatible providers, making it easier to diagnose connection and configuration issues.

### Stability

- Fixed lag when loading long conversation histories and slow responses when pasting large blocks of content.
- Fixed occasional UI freezes during AI streaming output, especially when the terminal produced large amounts of output.
- Fixed cases where the **Keep All / Undo All** action bar could disappear unexpectedly.
- Fixed settings being overwritten when multiple windows were open at the same time.
- Fixed issues where **Super Memory** could not be used properly in certain modes.
- Fixed incorrect timeout interruptions during AI generation, so slow but healthy generations are no longer stopped too early.
- Fixed refresh token failures that could cause users to log in repeatedly.
- Fixed tool execution results losing their correct pairing when users interrupted with a new message.
- Fixed silent compression of tool results causing the AI to rerun the same task repeatedly.
- Fixed inaccurate terminal exit code display and cases where terminal output could not be fully restored.
- Fixed Remote SSH connections losing hostname casing and port information.

### Performance and Experience Improvements

- Improved overall response speed by streamlining the AI tool surface and reducing system overhead for each conversation turn.
- Optimized search and reading strategies with a “locate first, then read in windows” approach, reducing unnecessary full-document reads.
- Added workspace-level memory isolation, preventing memory recall from different projects from interfering with each other.

## 1.1.9 · 2026-06-26

### New Models

- Added support for multiple new large language models, as well as AI image and video generation models, giving you more model options.

### New Features

- Agents now support Deep Research, making complex questions easier to explore in greater depth.
- The chat sidebar now supports one-click jump to the latest message and one-click message copying.
- Service provider management now supports a list layout, and the MCP Market interface has been refreshed.

### Experience Improvements

- Refined light/dark themes, terminal UI, and multiple interface details for a cleaner visual experience.

### Performance & Stability

- Upgraded the underlying runtime engine for smoother startup and operation.
- Agents are now smarter and more stable, reducing repetitive and ineffective actions.
- Fixed issues related to login, terminal, remote connections, and multiple interface areas.

## 1.1.8 · Bugfix · 2026-06-09

- Added new validation for intensity adjustment
- Optimized repeated dialogues and automatic intelligent context
- Fixed scrolling issues on the conversation page
- Fixed unstable compression

## 1.1.7 · 2026-06-07

- Fixed the optimization model being overly verbose
- Fixed an abnormal issue with file tagging in the optimization review
- Fixed several bugs

## 1.1.6 · 2026-06-06

### Added

- **Code Review Panel**: Standalone review view, line-number diff, large-file Myers diff, rollback/revert, select reference/copy, send to chat
- **Appearance Settings**: Activity Bar width/location, Side Bar position, editor tab style
- **Breezell Browser**: Redesigned panel UI, address/search bar, incognito mode, auto-close browser when the last tab is closed
- **Database Panel**: Workspace SQLite discovery; full CRUD for MongoDB/Oracle; connection renaming
- **Chat Enhancements**: Reference recent 3 rounds of history, chat attachments, rich-text quote/copy, manual context compression, condensing progress
- **New Providers**: GitHub Copilot, Kimi Code (device OAuth); Codex usage/icon optimization
- **Super Memory**: Time-aware UI (FreshBadge, recall cards)
- **Models/Providers**: MiniMax M3, Opus 4.8, glm-5.1; OpenAI-Compatible config page redesign
- **Notification Center**: Left sidebar tabs + larger split layout
- **Error Display**: Structured error cards, expandable raw error details, permanent errors skip retry
- **Others**: Russian translation, context usage ring/tray

### Fixes

- **Agent/Tools**: Always fresh file reading, file tools synchronized with disk
- **Code Review/Rendition**: GFM tables, Explore spacing, streaming markdown/mermaid long-session OOM
- **Remote/Terminal**: Full toolchain for SSH, Windows terminal reflow, terminal ID confusion, tab close deadlock
- **UI Tweaks**: Activity Bar width adjustment reduces panel jitter, notification panel height, Super Memory retention days wording, etc.

### Optimizations

- **Performance**: Significantly improved cache hit rate, startup/splash LCP, long-conversation memory management
- **Dependencies/Base**: Electron 39.8 → 42.3.3

## 1.1.5 · 2026-05-24

### New Features

- **Chat quoting and copying**: After selecting text in a chat, quickly convert it into a Markdown quote or copy it directly, while preserving lists, code blocks, and file name tags
- **Automatic notification for background commands**: Notifications are automatically sent when long-running terminal tasks complete, eliminating the need to repeatedly check progress
- **Mathematical formula rendering**: LaTeX math rendering is now properly supported in chats, including $x^2$ and $...$
- **Error display redesign**: Error messages are shown in expandable cards, with one-click copy of the full error content
- **Full SSH remote development support**: All tool invocations on remote SSH hosts are now fully supported
- **Streaming stutter diagnosis**: When a streaming response stalls, detailed diagnostics indicate whether it's upstream latency, network buffering, etc.
- **Model context usage bar**: In the model selector, clearly see the token usage for the current session, displayed by category
- **"Default Model" label**: The model selector now clearly identifies the default model
- **Long-term memory panel upgrade**: New time tags such as "Just Now," "Today," and "This Week," frosted-glass style, plus memory recall cards
- **Display plan title during streaming**: When the model generates a plan, the plan title appears during streaming output
- **Permanent errors automatically skip retries**: For permanent errors such as authentication failures, no more meaningless automatic retries
- **New model support**: Added support for models such as Gemini 3.5 and Qwen 3.7
- **Russian language interface support**
- **Chat tool cards can be expanded**: Tool outputs such as search results and file readings support collapsing/expanding

### Fixes

- Streaming response timeout increased from 120s to 180s, with an intermediate UI prompt for slower-inference models
- Fixed dropdown menu layering issue on the settings page (third-party provider dropdowns no longer obscured)
- Fixed the "[object Object]" error display issue
- Fixed the non-working error drawer copy button
- Fixed the file path prompt box freezing (no longer remains after scrolling away)
- Optimized chat text selection color scheme, fixing previously broken style variables
- Fixed model selector wheel penetration (scrolling the model menu no longer scrolls the chat area below)
- Schema compatibility fix for thinking mode (improved inference parameter compatibility under the Claude protocol)
- Optimized multi-file streaming preview (real-time "N changes" indicators no longer lag)
- Numerous UI detail fixes (scrolling, spacing, alignment, animations, tooltips)

### Optimizations

- **Underlying technology stack upgrade**: Electron upgraded to 42.2.0, including Chromium 148, Node.js 24, V8 14.8
- **Memory management optimization**: Large chat-history data is automatically written to disk and inference records organized as needed, keeping long conversations lightweight
- **Enhanced Mermaid chart rendering**: Improved cache management with proactive SVG cleanup on unloading, preventing memory accumulation during long chats

## 1.1.4 · 2026-04-26

### New Features

- **DeepSeek V4 series models**: Added DeepSeek V4 items in the model list/configuration, selectable directly
- **OpenAI-Compatible "Slot" card interface**: Redesigned the card-style UI for OpenAI-Compatible configuration areas

### Fixes

- Sidebars and settings no longer "hang": After model switching and rule/memory operations, they refresh promptly without needing a restart
- Fixed file links in chat being unopenable or incorrectly parsed
- More reliable terminal tools: Commands now run through the system terminal service
- Fixed chat-area jumping and erratic height when "Thinking / Streaming Content / Terminal Tool Cards" appeared or switched states, and fixed a crash caused by a variable reference error
- Updated PDF preview and related tool usage/display behaviors
- Corrected persistence and handling of large-volume tool results to reduce anomalies or state loss
- Updated LLM error reporting and chat-area interface resources

### Optimizations

- Selection of model panels in the input box
- Increased stability of terminal tools

## 1.1.3-v2 · 2026-04-23

### New Features

- Support for GPT-5.5 model, added to all provider lists
- Added Kimi K2.6 model, available on all major providers (OpenRouter, Together AI, Fireworks, DeepInfra, etc.)
- Math formulas can now be displayed in chat (KaTeX rendering)
- Flowcharts can now be displayed in chat (chart rendering)
- Added web search tool with control over search depth and topic parameters
- Terminal tool upgraded to PTY mode for a more realistic experience
- Added code symbol index with jump-to-definition support
- Added dependency analysis tool (cycle detection, dependency tracking: which files are affected by a change, the dependency chain between file A and B, whether circular dependencies exist)
- Skills now support dragging and compressing files/folders
- Added an IDE update status indicator to the title bar
- Major revamp of the multi-Slot panel: search, sorting, health checks, and batch cleaning of invalid APIs

### Fixes

- Long chats no longer freeze: Fixed the interface freezing with too many messages
- Scrolling no longer snaps back to the bottom when viewing chat history
- Fixed terminal subprocess leakage (no more memory spikes or crashes from residual processes)
- Fixed file path display (links no longer corrupted into false paths by ellipsis)
- Fixed super memory blanking (AI thinking tags no longer leak, causing blank memory display)
- Fixed terminal command folding (failed commands no longer swallowed by subsequent successful ones)
- Fixed the style of the plan to-do floating reminder (double-layer background issue)
- Fixed chat jumping when expanding the file list
- AI no longer repeatedly asks "continue?" and instead executes autonomously (self-testing required)
- Aligned the scroll bar in the Skills content box
- Fixed cases where command execution recognized exit 0 but the actual build failed

### Performance Optimization

- Significantly optimized chat rendering
- Added memo to Markdown rendering to avoid re-parsing the same content
- Memory optimization: tightened the persistence threshold for tool results to prevent spikes in long conversations
- Token counter upgrade
- Added an LRU upper limit to message cache
- New splash screen and onboarding flow design

## 1.1.1 · 2026-04-11

### New Features

- The chat history panel now has a "New Conversation" button for more convenient operation
- Database functionality significantly enhanced: support for Redis and MariaDB, new cell editing confirmation, table-count badges, and the ability to open the database panel directly from chat
- AI conversation supports switching between Plan/Agent modes for a smoother workflow

### Fixes and Optimizations

- Fixed repeated code completion (Tab completion)
- Fixed page jumping when focusing on the file browser window
- Fixed false disconnection reports when minimizing the window
- Fixed multiple bugs such as image indexing, IPC memory leakage, and LLM timeouts in chat
- Fixed the white screen caused by React packaging, and optimized package size
- Fixed several issues such as empty panels and undo in the CSS checker
- Upgraded to TypeScript 6.0 and Electron 41.2.0 for more stable overall performance
- Comprehensive UI polishing: unified tool card backgrounds and borders, aligned editor tab icons, fixed diff code block scrolling, etc.

## 1.1.0 · 2026-04-09

### New Features

- **Free code completion**: All users can now use AI code completion for free without additional configuration
- **Significantly upgraded built-in browser**: Supports device simulation (mobile/tablet preview), dynamic tab titles and icons, zoom control, optimized CSS inspector, and real-time recording of animation/transition events
- **Smarter conversation memory**: New automatic de-duplication and merging mechanism so the AI recalls previous content more accurately and avoids duplicate storage
- **Sidebar toggle button**: A quick sidebar toggle button added to the title bar
- **Task list optimization**: Supports task merging, priority sorting, and new transition animations
- **Redesigned team dashboard**: Brand-new dark theme design and faster page loading
- **Lazy loading of conversation messages**: Long histories are no longer loaded all at once, resulting in faster opening
- **API cache mechanism**: Added Responses API cache to reduce duplicate requests and save tokens

### Improvements

- Editor backend upgrade: Electron upgraded to 41.2.0, TypeScript to 6.0, for more stable and smooth operation
- Redesigned AI tool invocation interface: unified card styles for file operations, MCP tools, etc.
- Code diff optimization: fixed scrolling in collapsed state, horizontal scrollbars, and background color display
- System notification optimization: avoid duplicate pushes, no disconnection reports when minimizing
- Terminal command detection optimization: more accurately identify whether commands have run
- Improved startup performance: optimized startup flow and conversation list rendering
- Prevent background memory overflow: automatically clean up accumulated memory during long-term operation

### Fixes

- Fixed queued messages possibly being sent to the wrong thread when switching conversation threads
- Fixed deleting an image attachment possibly deleting other file attachments
- Fixed the background process continuing to run after an AI response timeout
- Fixed the TrustedHTML compatibility issue causing blank pages
- Fixed clicking links in the built-in browser failing to open new pages correctly
- Fixed option buttons occasionally not appearing when asking AI questions
- Fixed misaligned editor tab icons

## 1.0.9 · 2026-04-03

### New Features

- **Built-in browser automation**: Integrated CDP browser tools (screenshot, click, input, navigation, DOM snapshot, console log); the AI Agent can directly operate browser pages
- **Device viewport simulation**: The built-in browser supports simulating different device resolutions (mobile/tablet/desktop), with a scrollable device list
- **Browser tab management**: Dynamic tab title/icon, zoom control, multi-tab switching, quick open of the input-box browser panel
- **Multi-tool parallel invocation**: Supports the AI returning multiple tool invocations for parallel execution at once
- **Title bar sidebar toggle button**
- **Entanglement panel switching**: Supports independent panel switching with automatic alignment when adjusting the sidebar

### Fixes

- Terminal command completion detection: Enabled OSC 633;D protocol, fixed ANSI cleaning, accelerated heuristic judgment
- Teammate system notification suppression: Sub-threads no longer send irrelevant notifications to the OS
- Entanglement mode override: User-selected entanglement mode is no longer silently overridden by schedule mode
- Intent leakage: Intent labels in entanglement causal mode no longer leak to displayed text

### Optimizations

- Startup performance: Chat O(n) optimization, diff statistics persistence
- Terminal tool UI: Title bar/bottom bar inner-margin optimization, "Open in Browser" button corner-radius correction
- Browser panel positioning: Use floating-ui to eliminate jitter/offset when opening
