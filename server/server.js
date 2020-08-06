
// WEBSOCKET CONNECTION
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 8080 })
// THIS VARIABLE STORES EVERY CONNECTION AS A DIFFERENTLY CLIENT
//SO THAT THE SAME ACTION WILL BE PERFORMED ON ALL OF THEM
const clients = [];


wss.broadcast = function (data, sender) {
    clients.forEach(function (client) {
        if (client !== sender) {
            client.send(JSON.stringify(data))
        }
    })
}
// FUNCTION TO PUSH EVERY NEW CONNECTION INTO THE ARRAY AS A CLIENT
wss.on("connection", (connection) => {
    clients.push(connection)



    // EVERY MESSAGE RECIEVED BY THE SERVER IS PUBLISHED TO ALL CLIENTS
    connection.on("message", (message) => {
        const data = JSON.parse(message)
        wss.broadcast(data, connection)
    })
})

// TRY not sending to the sender rather update the state to show the message he sent


