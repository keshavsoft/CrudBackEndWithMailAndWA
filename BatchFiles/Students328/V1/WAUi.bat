@echo off

mkdir Data
echo {"posts":[]}> .\Data\inwards.json

call npm run home
call npm run WA

xcopy .\publicDir\WA .\public\WA /h /i /c /k /e /r /y