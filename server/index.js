const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const bodyParser = require('body-parser');
const todos = require('./routes/todos');
const code = require('./routes/code');
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

// Router
app.use("/users", user);
app.use('/todos', todos);
app.use('/code', code);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
