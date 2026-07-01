@echo off
setlocal
cd /d "C:\Users\mouni\OneDrive\Desktop\Cognizant hands-on\DesignPatternsAndPrinciples\FactoryMethodPatternExample"
set JAVAC="C:\Program Files\Android\Android Studio\jbr\bin\javac.exe"
set JAVA="C:\Program Files\Android\Android Studio\jbr\bin\java.exe"
%JAVAC% -version
%JAVAC% -d . Document.java DocumentFactory.java PdfDocument.java PdfDocumentFactory.java WordDocument.java WordDocumentFactory.java ExcelDocument.java ExcelDocumentFactory.java FactoryMethodTest.java
echo EXIT=%ERRORLEVEL%
dir /b *.class
%JAVA% -cp . FactoryMethodTest
echo RUNEXIT=%ERRORLEVEL%
