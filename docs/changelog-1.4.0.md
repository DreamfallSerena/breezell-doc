---
editLink: false
next: false
---

# Breezell 1.4.0 · Release Notes

**Release Time: 2026-09-26 (Pacific Time, US)**

## New

### Models & Capabilities

- Added upcoming model entries:
  - GLM-5.5 Flash
  - GLM-5.4
  - Kimi K4
  - DeepSeek V4.1 Pro
  - Muse Spark 1.4

- Image Studio now supports:
  - Hy Image 3.5
  - Qwen Image 2.1

## Interaction & Design

- Design previews now use the editor theme and project design variables instead of a fixed palette.
- Undefined CSS variables now return guidance instead of failing the request.
- Workspace `DESIGN.md` files are included in workflow instructions.
- Solution cards now open in full-panel single-card mode by default.
- Cards can be switched with tabs and arrow keys; side-by-side comparison remains available.
- Confirmed designs are saved as independent HTML files under `.breezell/design/`.
- Tool results now reference the same design specification, plan, and implementation source.

## Notifications

- Redesigned notification panel with list and detail views.
- Important notifications stay pinned at the top.
- List and detail panels scroll independently.

## Fixes

### Conversation & Agent

- New branches now copy original conversation content before creation.
- Lost branch content can be restored by line number.
- Reloaded messages release placeholder space after recovery.
- Collapsed tool and reasoning blocks no longer keep expanded height.
- Duplicate branch clicks are ignored while creation is running.
- Long conversations now load progressively with placeholders.
- Streaming code highlighting updates incrementally.
- Reopening the current conversation no longer replays switching behavior.
- Existing editor tabs are reused instead of creating duplicate views.
- Running tasks keep execution active when windows are minimized.
- Deleted or hidden selected models automatically switch to available models.
- Configuration migrations preserve user choices.

## Storage

- Deleted conversations now compact the database immediately.
- Full VACUUM migration runs for older databases.
- Vacuum logs include released storage size.
- Scheduled VACUUM waits until streaming and tool execution finish.
- Conversation deletion removes related files in `breezellTranscripts`.

## Performance

- Cached SCM changed-path calculations reduce history list redraw cost.
- Language resources are cached per language.
- UI shells only rerender when language changes.
- Navigation search, collapsed groups, and sidebar actions no longer trigger unnecessary content redraws.
- OAuth polling reuses unchanged results.
