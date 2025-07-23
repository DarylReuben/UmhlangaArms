@echo off

REM Get the current commit hash
for /f "delims=" %%a in ('git rev-parse HEAD') do set currenthash=%%a

REM Build a numbered commit list
setlocal enabledelayedexpansion
set i=0
(for /f "delims=" %%a in ('git log --oneline') do (
    set /a i=!i!+1
    set "commitline[!i!]=%%a"
    for /f "tokens=1,*" %%h in ("%%a") do (
        set "commitnum[!i!]=%%h"
        echo !i!. %%a
    )
    if "!i!"=="1" set latesthash=%%a
)) > commitlist.txt

REM Display commit list and highlight current HEAD
set /a count=!i!
set currentnum=
for /l %%j in (1,1,!count!) do (
    set "line=!commitline[%%j]!"
    for /f "tokens=1,2*" %%k in ("!line!") do (
        if "%%l"=="%currenthash:~0,7%" (
            echo * Currently checked out: %%j. !line!
            set currentnum=%%j
        ) else (
            echo   %%j. !line!
        )
    )
)

echo.
echo What would you like to do?
echo 1. Update and deploy current changes
echo 2. Revert to a previous commit and deploy
echo.
set /p choice="Enter 1 or 2: "

if "%choice%"=="1" (
    set msg=
    :getmsg
    set /p msg="Enter commit message: "
    if "%msg%"=="" goto getmsg
    git add .
    git diff --cached --quiet
    if %errorlevel%==0 (
        echo No changes to commit.
        goto :eof
    )
    git commit -m "%msg%"
    git push
    goto :eof
)

if "%choice%"=="2" (
    set /p num="Enter the number of the version to revert to: "
    set hash=
    for /l %%j in (1,1,!count!) do (
        if "%%j"=="%num%" set hash=!commitnum[%%j]!
    )
    if "%hash%"=="" (
        echo Invalid selection.
        goto :eof
    )
    git reset --hard %hash%
    git push --force
    goto :eof
)

echo Invalid choice. Exiting. 