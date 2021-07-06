const express = require("express");
const mongoose = require("mongoose");
const { Todo } = require("../models/todo.model");
const _ = require("lodash");
const router = express.Router();
const { User } = require("../models/user");
const auth = require("../middleware/isAuth");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo({});
    res.send(todos);
  } catch (err) {
    throw err;
  }
});

// For a single todo
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    res.json(todo);
  } catch (err) {
    throw err;
  }
});

// For adding a todo in todo-list is  a user who is logged in
router.post("/create", auth, async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  const user = await User.findById(req.user._id);
  const todoArray = user.todos;
  todoArray.push(todo);
  user.todos = todoArray;
  try {
    const result = await user.save();
    const user_updated = await User.findById(req.user._id).populate("todos");
    console.log(user_updated.todos);
    res.send(user_updated.todos);
  } catch (ex) {
    throw(ex);
  }
});

router.get('/me',  async (req, res) => {
  return res.send("hello");
});

// For updating a todo in todo-list , here id is passed to know which object to update
// todoRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send('data is not found');
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_deadline = req.body.todo_deadline;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

module.exports = router;
