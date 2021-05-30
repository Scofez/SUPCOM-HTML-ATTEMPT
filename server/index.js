const WebSocket = require("ws");
const wws = new WebSocket.Server({port: 8082});



wws.on("connection", ws => {
    console.log("new visitor connected !");

    ws.on("message", data => {
        console.log(`Visitor has sent us a new recipe: ${data}`);
        ws.send(data.toUpperCase());
    });
    ws.on("close", () => {
        console.log("Visitor has disconnected!");

    });

});