@echo off
rmdir /S /Q js_locales
xcopy /E _locales js_locales\
for /f "delims=" %%i in ('dir /s /b js_locales\*.json') do call :rename %%i
goto :rename_ok
:rename
set var=%1
copy /b msg_head.js+"%var%" "%var%_"
ren "%var%_" *.js
del "%var%"
goto :eof
:rename_ok
echo "Convert message.js files, OK"

rmdir /S /Q ..\release\linker_game
xcopy /E . ..\release\linker_game\
rmdir /S /Q ..\release\linker_game\js_locales
rmdir /S /Q ..\release\linker_game\back
del ..\release\linker_game\msg_head.js
del ..\release\linker_game\makecopy.bat
del ..\release\linker_game\snapshot*.*
del ..\release\linker_game.zip

echo.
echo.
echo Next step:
echo.
echo Make sure to change version number in manifest.json.

cd ..\release
7za.exe a -tzip -mx=5 linker_game.zip linker_game
cd ..\linker_game

