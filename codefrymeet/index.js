const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});



const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

let broadcasters = {};

app.use("/peerjs", peerServer);
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});



io.sockets.on("error", e => console.log(e));

io.on("connection", (socket) => {

  socket.on("join-room", (roomId, userId, userName) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message, userName);
    });
    socket.on('disconnect',()=>{
      socket.to(roomId).broadcast.emit('user-disconnected',userId)
    })
  });
});


const port = process.env.PORT || 3030;

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
