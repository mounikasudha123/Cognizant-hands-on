# Simulate a merge conflict with a feature branch named GitWork
$repoPath = Split-Path -Path $MyInvocation.MyCommand.Path -Parent
Set-Location -Path $repoPath

if (-not (Test-Path .git)) {
    Write-Error "This folder is not a Git repository. Run './setup-lab.ps1' first."
    exit 1
}

$clean = (git status --porcelain)
if ($clean) {
    Write-Error "Repository is not clean. Commit or stash changes before running this script."
    exit 1
}

# Create branch and commit a change
git checkout -b GitWork
@"
<greeting>
  <message>Hello from the GitWork branch.</message>
</greeting>
"@ | Set-Content -Path hello.xml -Encoding utf8

git add hello.xml
git commit -m "Update hello.xml in GitWork branch" | Out-Null

# Switch back to master and create a conflicting change
git checkout master
@"
<greeting>
  <message>Hello from the master branch.</message>
</greeting>
"@ | Set-Content -Path hello.xml -Encoding utf8

git add hello.xml
git commit -m "Update hello.xml in master branch" | Out-Null

# Merge the branch and show conflict markers
try {
    git merge GitWork
} catch {
    Write-Host "Merge produced a conflict as expected." -ForegroundColor Yellow
}

git status

Write-Host "Resolve the conflict in hello.xml, stage it, and run 'git commit' to complete the merge." -ForegroundColor Cyan
