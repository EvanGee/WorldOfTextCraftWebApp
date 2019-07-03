
const { spawn } = require('child_process');

const child = spawn('python3', ['/media/evan/New Volume/BlockChain/POAcoin/ExecApp/AppsToLaunch/WorldOfTextCraft/main.py']);

const accounts = {};

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
    console.error(`child stderr:\n${data}`);
});

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