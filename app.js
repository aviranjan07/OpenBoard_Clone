const express = require("express"); //access
const socket = require("socket.io");

const app = express(); //initialized and server ready

app.use(express.static("public"));

let port = 4000;
let server = app.listen(port, () => {
    console.log("listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("made scoket connection");
})