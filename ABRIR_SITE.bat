@echo off
setlocal
cd /d "%~dp0"
set PORT=8765
where py >nul 2>&1
if %errorlevel%==0 (
  start "AuroraServer" /min py -m http.server %PORT% --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:%PORT%/"
  exit /b
)
where python >nul 2>&1
if %errorlevel%==0 (
  start "AuroraServer" /min python -m http.server %PORT% --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:%PORT%/"
  exit /b
)
start "" "%~dp0index.html"
