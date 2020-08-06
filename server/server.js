// WEBSOCKET CONNECTION
const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 8080 });

// THIS VARIABLE STORES EVERY CONNECTION AS A DIFFERENTLY CLIENT
//SO THAT THE SAME ACTION WILL BE PERFORMED ON ALL OF THEM
let clients = [];

// FUNCTION TO PUSH EVERY NEW CONNECTION INTO THE ARRAY AS A CLIENT
wss.on("connection", (connection) => {
    clients.push(connection);
    broadcast({ username: "admin", message: "A User Has Joined The Chat" });

    // EVERY MESSAGE RECIEVED BY THE SERVER IS PUBLISHED TO ALL CLIENTS
    connection.on("message", (message) => {
        const data = JSON.parse(message);
        broadcast(data, connection);
    });
});

setInterval(cleanUp, 100);

wss.broadcast = function (data, sender) {
    clients.forEach(function (client) {
        if (client !== sender) {
            client.send(JSON.stringify(data))
        }
    })
}

function cleanUp() {
    const clientsLeaving = clients.filter(
        (client) => client.readyState === client.CLOSED
    );
    clients = clients.filter((client) => client.readyState !== client.CLOSED);
    clientsLeaving.forEach((client) =>
        broadcast({ username: "admin", message: "A User Has Left The Chat" }, client)
    );
}



// FUNCTION TO PUSH EVERY NEW CONNECTION INTO THE ARRAY AS A CLIENT

