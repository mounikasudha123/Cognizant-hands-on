#!/usr/bin/env bash
set -euo pipefail

echo "1) Check git"
if ! command -v git >/dev/null 2>&1; then
  echo "git not found. Please install Git for Windows: https://git-scm.com/download/win"
  exit 1
fi

echo "git version: $(git --version)"

echo "\n2) Configure global user (set your name and email if empty)"
current_name=$(git config --global user.name || true)
current_email=$(git config --global user.email || true)
if [ -z "$current_name" ]; then
  read -p "Enter your Git user.name: " name
  git config --global user.name "$name"
else
  echo "user.name already set: $current_name"
fi
if [ -z "$current_email" ]; then
  read -p "Enter your Git user.email: " email
  git config --global user.email "$email"
else
  echo "user.email already set: $current_email"
fi

echo "\n3) (Optional) Configure Notepad++ as Git editor"
# Default Notepad++ path on 64-bit Windows. Adjust if needed.
NPP_PATH="/c/Program Files/Notepad++/notepad++.exe"
if [ -f "$NPP_PATH" ]; then
  git config --global core.editor "\"$NPP_PATH\" -multiInst -nosession"
  echo "Set Notepad++ as Git editor: $NPP_PATH"
else
  echo "Notepad++ not found at $NPP_PATH — skip editor setup or update path in the script."
fi


echo "\n4) Initialize local repo 'GitDemo' and add welcome.txt"
if [ -d "GitDemo/.git" ]; then
  echo "GitDemo already initialized"
else
  mkdir -p GitDemo
  cp welcome.txt GitDemo/
  pushd GitDemo >/dev/null
  git init
  git add welcome.txt
  git commit -m "Initial commit: add welcome.txt"
  popd >/dev/null
  echo "Repository 'GitDemo' created with welcome.txt committed."
fi


echo "\n5) Show status and log"
pushd GitDemo >/dev/null
git status --short
git log --oneline --decorate --graph -n 5 || true
popd >/dev/null

echo "\n6) To push to a remote:
- Create a repository on GitHub or GitLab named 'GitDemo'
- Then run inside GitDemo:
  git remote add origin <REMOTE_URL>
  git push -u origin master
"

echo "Done."
