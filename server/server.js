// WEBSOCKET CONNECTION
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 8080 })

// THIS VARIABLE STORES EVERY CONNECTION AS A DIFFERENTLY CLIENT
//SO THAT THE SAME ACTION WILL BE PERFORMED ON ALL OF THEM
const clients = [];

// FUNCTION TO PUSH EVERY NEW CONNECTION INTO THE ARRAY AS A CLIENT
wss.on("connection", (connection) => {
    clients.push(connection)

    // EVERY MESSAGE RECIEVED BY THE SERVER IS PUBLISHED TO ALL CLIENTS
    connection.on("message", (message) => {
        const data = JSON.parse(message)
        clients.forEach(client => client.send(JSON.stringify(data)))
    })
})
