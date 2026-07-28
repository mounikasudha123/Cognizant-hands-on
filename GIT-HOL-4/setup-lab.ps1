# Initialize a Git repository for the conflict lab
$repoPath = Split-Path -Path $MyInvocation.MyCommand.Path -Parent
Set-Location -Path $repoPath

if (-not (Test-Path .git)) {
    git init | Out-Null
    git add .
    git commit -m "Initial commit: add hello.xml and lab files" | Out-Null
    Write-Host "Git repository initialized and initial commit created." -ForegroundColor Green
} else {
    Write-Host "Repository already initialized." -ForegroundColor Yellow
}

Write-Host "Run './simulate-conflict.ps1' next to create a branch and simulate a merge conflict." -ForegroundColor Cyan
