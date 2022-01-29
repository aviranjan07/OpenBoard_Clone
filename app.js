const express = require("express"); //access
const socket = require("socket.io");

const app = express(); //initialized and server ready

let port = 5000;
let server = app.listen(port, () => {
    console.log("listening to port" + port);
})