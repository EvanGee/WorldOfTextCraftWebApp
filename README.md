This is an app I made to play a textbased adventure game that uses CryptoCurrency 
for it's database I call WorldOfTextCraft. 

It requires a couple things to run. 

It needs the python game engine, simpleMUD. 
It also needs the CryptoWorld Api. 


both can be found on my github
you have to modify this file 
/server/socket.js
and change this line 

const child = spawn('python3', ['/WorldOfTextCraft/main.py']);
to the path of the python APP.


to start the app

npm install 
npm run start

