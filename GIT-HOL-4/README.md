# Git Conflict Resolution Lab

This folder contains a simple Git lab for practicing merge conflict resolution with a `hello.xml` file.

## Objective

- Implement conflict resolution when multiple users update the `master` branch and generate a merge conflict.
- Learn how to resolve conflicts using Git merge tools and manual edits.

## Files

- `hello.xml` - sample XML file used to create a branch conflict.
- `.gitignore` - ignores backup and temporary files.
- `setup-lab.ps1` - initializes the Git repository and creates the first commit.
- `simulate-conflict.ps1` - creates a conflicting branch and performs a merge that results in a conflict.

## Usage

1. Open PowerShell in this folder.
2. Run `.uild\setup-lab.ps1` to initialize the repository and create the initial commit.
3. Run `.uild\simulate-conflict.ps1` to create the `GitWork` branch, commit a conflicting change, and merge it into `master`.
4. Use `git status` and a merge tool such as `git mergetool` or `git difftool` to resolve the conflict in `hello.xml`.
5. After resolving, stage the file and run `git commit`.
6. Use `git branch -d GitWork` when the merge is complete.

## Recommended commands

```powershell
git status
git log --oneline --graph --decorate --all
git diff
git diff --cached
git mergetool
```

## Manual steps

1. Verify `master` is clean.
2. Create branch `GitWork`.
3. Modify `hello.xml` in `GitWork` and commit.
4. Switch to `master`, modify `hello.xml` differently, and commit.
5. Merge `GitWork` into `master`.
6. Resolve the conflict in `hello.xml`.
7. Complete the merge and delete the branch.
