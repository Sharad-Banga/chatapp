import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8081 });
let arr = [];
wss.on("connection", function (socket) {
    arr.push(socket);
    socket.on("message", function (e) {
        arr.forEach(function (a) {
            a.send(e.toString());
        });
    });
});
//# sourceMappingURL=index.js.map