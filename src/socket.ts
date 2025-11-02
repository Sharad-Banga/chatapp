import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8081});


let arr = [];

wss.on("connection",function(socket){


  socket.on("message",function(message){

    //@ts-ignore
    const parsedMessage = JSON.parse(message);
    
    if(parsedMessage.type == "join"){
        arr.push({
          socket,
          room_id : parsedMessage.payload.room_id
        })

        console.log(arr);
        
    }

    if(parsedMessage.type = "chat"){

      let currentRoom ;
      
      for(let i=0; i<arr.length ; i++){
        if(arr[i]?.socket == socket){
          currentRoom = arr[i]?.room_id;
        }
      }

      for(let i=0; i<arr.length ; i++){
        if(arr[i]?.room_id == currentRoom){
          arr[i]?.socket.send(parsedMessage.payload.message+"ssssss");
        }
      }
    }


  })


})