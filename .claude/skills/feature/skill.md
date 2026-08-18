---
name: feature
description: Create a feature or fix branch with appropriate prefix based on request type
tags: [git, workflow, feature]
---

# Feature/Fix Branch

Creates a git branch with proper prefix (`feature/`, `fix/`, `refactor/`, `docs/`, etc.) based on request type. Branch name is a lowercase, dash-separated summary of the work.

## Usage

- `/feature "add dark mode toggle"` — creates `feature/add-dark-mode-toggle`
- `/feature "fix: memory leak in gallery"` — creates `fix/memory-leak-in-gallery`
- `/feature "refactor: extract header component"` — creates `refactor/extract-header-component`

## Behavior

1. Parses request to detect intent (feature, fix, refactor, docs, etc.)
2. Extracts summary from request
3. Converts to lowercase, replaces spaces/special chars with dashes
4. Creates branch from current branch (or main if main exists)
5. Checks out new branch
6. Reports branch name and ready to work

## Branch Prefixes

- `feature/` — new feature or enhancement
- `fix/` — bug fix
- `refactor/` — code refactoring
- `docs/` — documentation
- `test/` — tests
- `chore/` — maintenance, dependencies

Use before starting work. Branch auto-selects prefix from request context.
