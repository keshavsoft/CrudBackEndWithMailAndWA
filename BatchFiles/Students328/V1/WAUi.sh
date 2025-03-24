mkdir Data
echo '{"posts":[]}'> ./Data/inwards.json

node KCode/ForBatV10/Backend.js
node KCode/ForBatV10/Database.js
npm run home
npm run WA

mkdir ./public/WA
cp -r  ./publicDir/WA/* ./public/WA