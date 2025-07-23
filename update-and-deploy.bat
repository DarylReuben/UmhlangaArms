@echo off

echo --- Commit History ---
git log --oneline --decorate --graph --all

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
    set /p hash="Enter the commit hash to revert to: "
    git reset --hard %hash%
    git push --force
    goto :eof
)

echo Invalid choice. Exiting. 