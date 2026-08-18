---
name: push
description: Push commits to remote branch
tags: [git, workflow]
---

# Push to Remote

Pushes local commits to the tracked remote branch.

## Usage

- `/push` — push to origin + current branch
- `/push <branch>` — push to origin + specified branch
- `/push <remote> <branch>` — push to specific remote and branch

## Examples

```
/push
/push main
/push origin feature/new-gallery
```

## Behavior

1. Checks branch is tracking a remote
2. Verifies local commits ahead of remote
3. Pushes with `-u` flag if branch not tracked
4. Reports success or merge conflicts
5. Never force-pushes; fails safely if collision detected

Use only after committing. Fails on unmerged changes or network issues.
