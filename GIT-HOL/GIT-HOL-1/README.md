Git Hands-on: Steps to run locally

This folder contains scripts and a sample file to implement the Git lab from the attachments.

Files:
- git-hands-on.sh — Bash script for Git Bash / WSL
- git-hands-on.ps1 — PowerShell script for Windows PowerShell
- welcome.txt — sample file to add to the repo

Quick overview of actions performed by the scripts:
1. Check that `git` is installed.
2. Configure `user.name` and `user.email` (global) if not already set.
3. (Optional) Add Notepad++ to PATH and configure it as Git editor.
4. Initialize a local repository (`GitDemo`), add `welcome.txt` and commit.
5. Show basic Git status and log.
6. Instructions to create a remote GitHub/GitLab repo and push.

How to run (Git Bash):

Open Git Bash in this folder and run:

```bash
bash git-hands-on.sh
```

How to run (PowerShell):

Open PowerShell in this folder and run:

```powershell
.\
 git-hands-on.ps1
```

Adjust the Notepad++ path inside the scripts to match your machine before running.
