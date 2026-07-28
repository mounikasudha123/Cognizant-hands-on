# Git Hands-on Lab: Clean Up and Push Back to Remote Git

## Objective

Learn how to clean up a local Git branch and push changes back to a remote repository.

## Prerequisites

- A local Git repository in this folder.
- Access to the remote repository.
- The branch name: `Git-T03-HOL_002`.

## Lab Steps

1. Verify if the `master` branch is in a clean state:

```powershell
git checkout master
git status
```

2. List all available branches:

```powershell
git branch -a
```

3. Pull the remote repository to the `master` branch:

```powershell
git pull origin master
```

4. Push the changes pending from `Git-T03-HOL_002` to the remote repository:

```powershell
git checkout Git-T03-HOL_002
git push origin Git-T03-HOL_002
```

5. Observe if the changes are reflected in the remote repository.

## Notes

- If `origin` is not configured, set the remote first using:

```powershell
git remote add origin <remote-url>
```

- If the repository uses `main` instead of `master`, replace `master` with `main`.
