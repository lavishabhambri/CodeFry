const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const bodyParser = require('body-parser');
const todos = require('./routes/todos');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

require('dotenv').config({
  path: './config/config.env'
})


let mongoDB = process.env.MONGO_URI;


mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect to mongoDB"));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 4000;

// Drawing board part
io.on('connection', (socket)=>{
  console.log("User Online");

  socket.on('canvas-data', (data)=>{
    socket.broadcast.emit('canvas-data', data);
  })
})


// http.listen(port, ()=>{
//   console.log("Started");
// })



// Router
app.use("/users", user);
app.use('/todos', todos);


app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
