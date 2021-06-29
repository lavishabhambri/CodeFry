const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const bodyParser = require('body-parser');
const todoRoutes = express.Router();

require('dotenv').config({
  path: './config/config.env'
})

// Database schema
let Todo = require('./models/todo.model');

let mongoDB = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/users', user);


mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect to mongoDB"));

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const port = process.env.PORT || 4000;

// For the list of Todos
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

// For a single todo
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

// For adding a todo in todo-list
todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()       // For saving to DB
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

// For updating a todo in todo-list , here id is passed to know which object to update
todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_deadline = req.body.todo_deadline;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Router
app.use('/todos', todoRoutes);


app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
