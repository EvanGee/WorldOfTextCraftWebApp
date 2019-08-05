
const { spawn, spawnSync } = require('child_process');
const log = require("../../log")

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });

const accounts = {};

const spawnApi = () => {
    childApi = spawn('node', ['../CryptoWorldAPI/App.js'])

    childApi.stderr.on('data', (data) => {
        log(data)
        console.error(`childApi stderr:\n${data}`);
    });
    
    childApi.on('exit', (data, err) => {
        log(err)
        spawnApi()
    });
    
    childApi.stdout.on('data', (msg) => {
        console.log("from childApi:" + msg)
    });
    
}
const talkToPlayers = (msg) => {

    Object.keys(accounts).forEach(element => {
        let socket = accounts[element]
        socket.emit("message", `${element}:${msg}\n`)

    });
}

const spawnGame = () => {

    child = spawn('python3', ['../WorldOfTextCraft/main.py']);

    child.on('exit', (code, err) => {
        log(err)
        console.log("game exiting due to error")
        talkToPlayers("server crashed, cuz i suck at programming, sorry mates, restarting\n")
        spawnGame()
    });
    
    child.stdout.on('data', (msg) => {
        //socket.emit("message", data)
        //socket.emit("message", data.toString())
        console.log(msg.toString())
        const lines = msg.toString().split("\n")
        lines.map((d, i) => {
            const newMessage = d.split(":")
            if (!accounts.hasOwnProperty(newMessage[0])) {
                return
            }
            const socket = accounts[newMessage[0]]
            socket.emit("message", newMessage.join(":"))
        })
    });
    
    
    child.stderr.on('data', (data) => {
        log(data)
        console.error(`child stderr:\n${data}`);
    });
}
spawnApi()
spawnGame()

module.exports = (io) => {

    io.on('connection', function (socket) {

        var id;
        socket.on('message', function (msg) {
    
            const a = msg.split(":")
            accounts[a[0]] = socket

            //if (!accounts.hasOwnProperty(a[0])) {
            //}
            
            child.stdin.write(`${a[0]}:${a[1]}\n`);
        });

        socket.on('disconnect', function (msg) {
            console.log('user disconnected');
        });
    });
}
