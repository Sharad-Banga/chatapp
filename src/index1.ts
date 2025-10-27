import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8081});

let allSockets = [];


wss.on("connection",function(socket){

  socket.on("message",function(message){
    //@ts-ignore
    const p  = JSON.parse(message );

    if(p.type == "join"){
      allSockets.push({
        socket,
        room : p.payload.roomId
      })
    }


    if(p.type == "chat"){
      let currentRoom = null;
      for(let i =0; i<allSockets.length ; i++){
          if(allSockets[i]?.socket == socket){
            currentRoom = allSockets[i]?.room;
          }
      }

      for(let i=0 ; i<allSockets.length ; i++){
          if(allSockets[i]?.room == currentRoom){
            allSockets[i]?.socket.send(p.payload.message.toString());
          }
      }









    }






  })
})