---
name: commit
description: Stage changes and create a git commit with a clear message
tags: [git, workflow]
---

# Commit Changes

Stages specified files and creates a commit with a descriptive message.

## Usage

- `/commit` — interactive mode; shows git status and asks for files to stage and commit message
- `/commit <message>` — stage all tracked changes and commit with message
- `/commit <files> -- <message>` — stage specific files and commit

## Examples

```
/commit "fix: auth middleware token expiry check"
/commit app/page.tsx lib/utils.ts -- "refactor: extract header component"
```

## Behavior

1. Shows current git status
2. Lists staged and unstaged changes
3. Stages files (tracked changes or specified paths)
4. Creates commit with your message
5. Appends co-author trailer
6. Verifies success with final git status

Never commits without explicit message. Fails if pre-commit hooks reject.
