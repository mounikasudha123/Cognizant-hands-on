$wd = 'C:\Users\mouni\OneDrive\Desktop\Cognizant hands-on\DesignPatternsAndPrinciples\FactoryMethodPatternExample'
Set-Location $wd
$javac = 'C:\Program Files\Android\Android Studio\jbr\bin\javac.exe'
$java = 'C:\Program Files\Android\Android Studio\jbr\bin\java.exe'
Write-Host "javac exists?" (Test-Path $javac)
Write-Host "java exists?" (Test-Path $java)
& $javac -version
& $javac -d $wd Document.java DocumentFactory.java PdfDocument.java PdfDocumentFactory.java WordDocument.java WordDocumentFactory.java ExcelDocument.java ExcelDocumentFactory.java FactoryMethodTest.java
Write-Host "compile exit" $LASTEXITCODE
Get-ChildItem -Filter '*.class' -Name
& $java -cp $wd FactoryMethodTest
Write-Host "run exit" $LASTEXITCODE
