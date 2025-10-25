import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8081});


let c = 0;
wss.on("connection",function(socket){

  c++;
  console.log("user count is :"+c);
  socket.on("message",function(e){
    console.log(e.toString());


    socket.send(e.toString()+"sent from server");
    
  })
})