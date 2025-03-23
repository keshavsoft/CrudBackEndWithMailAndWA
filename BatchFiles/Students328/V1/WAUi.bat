@echo off

mkdir Data
echo {"posts":[]}> Data/inwards.json

node KCode/ForBatV10/Backend.js
node KCode/ForBatV10/Database.js
call npm run home
call npm run WA

xcopy .\publicDir\WA .\public\WA /h /i /c /k /e /r /y