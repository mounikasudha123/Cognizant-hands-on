@echo off
setlocal
cd /d "%~dp0"

rem Try javac from PATH first
where javac >nul 2>&1
if %ERRORLEVEL%==0 (
  echo Using javac from PATH
  javac -d . *.java
  if %ERRORLEVEL%==0 (
    echo Compilation successful.
    goto :run
  ) else (
    echo Compilation failed.
    exit /b 1
  )
)

rem Fallback: try Android Studio JBR bundled javac/java using short paths
for %%I in ("C:\Program Files\Android\Android Studio\jbr\bin\javac.exe") do @set "JAVAC_SHORT=%%~sI"
for %%J in ("C:\Program Files\Android\Android Studio\jbr\bin\java.exe") do @set "JAVA_SHORT=%%~sJ"

if defined JAVAC_SHORT if exist "%JAVAC_SHORT%" (
  echo Using %JAVAC_SHORT%
  "%JAVAC_SHORT%" -d . *.java
  if %ERRORLEVEL%==0 (
    echo Compilation successful.
    set "JAVA_CMD=%JAVA_SHORT%"
    goto :run
  ) else (
    echo Compilation failed when using %JAVAC_SHORT%.
    exit /b 1
  )
) else (
  echo No javac found on PATH and default Android Studio JBR not present.
  exit /b 2
)

:run
if not defined JAVA_CMD set "JAVA_CMD=java"
%JAVA_CMD% -cp . FactoryMethodTest
exit /b %ERRORLEVEL%
