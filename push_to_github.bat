@echo off
title Push Portfolio to GitHub
cd /d "%~dp0"
echo ========================================================
echo Pushing Portfolio to GitHub (AYOUBCODECPP/PORTOFOLIO)
echo ========================================================
echo.
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCES] Le projet a ete pousse avec succes sur GitHub !
) else (
    echo [INFO] Si une fenetre de connexion GitHub s'est ouverte, autorisez l'acces.
)
echo.
pause
