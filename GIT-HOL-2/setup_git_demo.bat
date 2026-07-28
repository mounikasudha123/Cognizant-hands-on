@echo off
REM setup_git_demo.bat [remote-url]
REM Automates creating welcome.txt, initializing git, committing, and optionally pushing.

echo Creating welcome.txt...
( 
  echo welcome to the version control
  echo.
  echo This file is part of the Git hands-on demo.
  echo.
  echo - Created by setup_git_demo.bat
) > welcome.txt

echo.
echo Listing files:
dir /b

echo.
if not exist .git (
  echo Initializing git repository...
  git init
) else (
  echo Repository already initialized.
)

echo.
echo Current git status:
git status --porcelain

echo.
echo Adding welcome.txt to the index...
git add welcome.txt

echo.
echo Committing...
git commit -m "Add welcome.txt" 2>nul || (echo Nothing to commit or commit failed.)

echo.
echo Status after commit:
git status --short

if "%~1"=="" (
  echo.
  echo No remote URL provided. To push to a remote run:
  echo    setup_git_demo.bat https://github.com/youruser/yourrepo.git
) else (
  echo.
  echo Adding remote origin %1
  git remote add origin %1 2>nul || echo remote origin already exists
  git branch -M master
  echo Pushing to origin master...
  git push -u origin master
)

echo.
echo Demo completed.
pause
