$wd = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
Set-Location $wd

$javac = 'javac'
$java = 'java'

try {
    $proc = Start-Process -FilePath $javac -ArgumentList '-version' -NoNewWindow -PassThru -ErrorAction Stop
    $useJavac = $true
} catch {
    $jbrJavac = 'C:\Program Files\Android\Android Studio\jbr\bin\javac.exe'
    $jbrJava = 'C:\Program Files\Android\Android Studio\jbr\bin\java.exe'
    if (Test-Path $jbrJavac) {
        $javac = $jbrJavac
        $java = $jbrJava
    } else {
        Write-Error 'No javac found in PATH and Android Studio JBR not found. Install JDK or add javac to PATH.'
        exit 2
    }
}

& $javac -d $wd *.java
if ($LASTEXITCODE -ne 0) { Write-Error 'Compilation failed.'; exit $LASTEXITCODE }

& $java -cp $wd FactoryMethodTest
exit $LASTEXITCODE
