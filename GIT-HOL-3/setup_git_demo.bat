@echo off
setlocal enabledelayedexpansion

REM Create demo file if missing
if not exist welcome.txt (
    echo Welcome to the Git Hands-On demo!>welcome.txt
    echo Created welcome.txt
) else (
    echo welcome.txt already exists
)

REM Initialize Git repository if needed
if not exist .git (
    echo Initializing Git repository...
    git init
) else (
    echo Git repository already initialized
)

REM Stage and commit the demo file
git add welcome.txt
for /f "delims=" %%b in ('git branch --show-current 2^>nul') do set "BRANCH=%%b"
if "!BRANCH!"=="" set "BRANCH=master"

echo Committing welcome.txt on branch !BRANCH!...

REM Use a fixed message; continue if whitespace-only commit has no changes
git commit -m "Add welcome.txt" 2>nul
if errorlevel 1 (
    echo No changes to commit or commit failed.
) else (
    echo Committed changes.
)

REM If a remote URL is provided, set origin and push
if "%~1"=="" goto end

set "REMOTE_URL=%~1"

echo Adding remote origin %REMOTE_URL%...
for /f "delims=" %%r in ('git remote get-url origin 2^>nul') do set "EXISTING_ORIGIN=%%r"
if defined EXISTING_ORIGIN (
    git remote remove origin
)
git remote add origin "%REMOTE_URL%"

echo Pushing branch !BRANCH! to remote origin...
git push -u origin !BRANCH!

:end
endlocal
