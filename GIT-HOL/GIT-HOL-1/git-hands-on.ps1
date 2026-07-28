# PowerShell script to perform Git hands-on steps
Set-StrictMode -Version Latest

Write-Host "1) Check git"
try {
    $ver = git --version 2>&1
    Write-Host $ver
} catch {
    Write-Host "git not found. Please install Git for Windows: https://git-scm.com/download/win"
    exit 1
}

Write-Host "`n2) Configure global user (set your name and email if empty)"
$name = git config --global user.name 2>$null
$email = git config --global user.email 2>$null
if (-not $name) {
    $name = Read-Host "Enter your Git user.name"
    git config --global user.name "$name"
} else { Write-Host "user.name already set: $name" }
if (-not $email) {
    $email = Read-Host "Enter your Git user.email"
    git config --global user.email "$email"
} else { Write-Host "user.email already set: $email" }

Write-Host "`n3) (Optional) Configure Notepad++ as Git editor"
$defaultNpp = "C:\Program Files\Notepad++\notepad++.exe"
if (Test-Path $defaultNpp) {
    git config --global core.editor "`"$defaultNpp`" -multiInst -nosession"
    Write-Host "Set Notepad++ as Git editor: $defaultNpp"
} else { Write-Host "Notepad++ not found at $defaultNpp — skip editor setup or update path in script." }

Write-Host "`n4) Initialize local repo 'GitDemo' and add welcome.txt"
$repoPath = Join-Path (Get-Location) 'GitDemo'
if (-not (Test-Path (Join-Path $repoPath '.git'))) {
    New-Item -ItemType Directory -Path $repoPath | Out-Null
    Copy-Item -Path .\welcome.txt -Destination $repoPath
    Push-Location $repoPath
    git init
    git add welcome.txt
    git commit -m "Initial commit: add welcome.txt"
    Pop-Location
    Write-Host "Repository 'GitDemo' created with welcome.txt committed."
} else { Write-Host "GitDemo already initialized" }

Write-Host "`n5) Show status and log"
Push-Location $repoPath
git status --short
git log --oneline --decorate --graph -n 5
Pop-Location

Write-Host "`n6) To push to a remote:`n- Create a repository on GitHub or GitLab named 'GitDemo'`n- Then run inside GitDemo:`n  git remote add origin <REMOTE_URL>`n  git push -u origin master"
