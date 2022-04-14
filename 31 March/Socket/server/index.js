const WebSocket = require('ws')

const wss = new WebSocket.Server({port:8000})

//object

var object={
    name: "Pranaya Awasthi",
    age: "22",
    company: "TnF"

}
wss.on("connection",ws=>{
    console.log("new client is added");

    ws.on('message',data=>{
        console.log(`Client sent something : ${data}`)
        ws.send(JSON.stringify(object));
    })

    ws.on("close",()=>{
        console.log("Disconneted");
    })

})