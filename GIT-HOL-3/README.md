# Git Hands-On: Demo

This hands-on demo shows how to initialize a Git repository, add a file, commit it, and optionally push to a remote repository.

Files included:
- `welcome.txt` — sample content created for the demo.
- `setup_git_demo.bat` — Windows batch script that automates the Git steps.

How to run (Windows):

1. Open PowerShell or Command Prompt in this folder.
2. Run the demo without pushing to a remote:

```powershell
.\setup_git_demo.bat
```

3. Run the demo and push to a remote repository by passing the remote URL as the first argument:

```powershell
.\setup_git_demo.bat https://github.com/youruser/yourrepo.git
```

Notes:
- The script creates `welcome.txt` if it does not exist.
- It initializes Git if the folder is not already a repository.
- It stages and commits `welcome.txt`.
- If a remote URL is provided, the script adds it as `origin` and pushes the current branch.
- Make sure Git is installed and available in your PATH before running the script.
