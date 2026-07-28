# Git Hands-On: Demo

This small demo reproduces the steps from the hands-on screenshot: creating a file, initializing a Git repository, adding and committing the file, and optionally pushing to a remote.

Files added:
- `welcome.txt` — demo content to add to the repository.
- `setup_git_demo.bat` — Windows batch script that automates the steps.

How to run (Windows):

1. Open PowerShell or Command Prompt in this folder.
2. To run the demo without pushing to remote:

```powershell
.\setup_git_demo.bat
```

3. To run the demo and push to a remote repository, pass the remote URL as the first argument:

```powershell
.\setup_git_demo.bat https://github.com/youruser/yourrepo.git
```

Notes:
- The script will create `welcome.txt`, run `git init` (if needed), add and commit the file.
- If you provide a remote URL the script will attempt to add it as `origin` and push `master`.
- Make sure Git is installed and available in your PATH before running the script.
