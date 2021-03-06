const express = require("express");
const mongoose = require("mongoose");
const { Todo } = require("../models/todo.model");
const _ = require("lodash");
const router = express.Router();
const { User } = require("../models/user");
const auth = require("../middleware/isAuth");

router.post("/create", auth, async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  const user = await User.findById(req.user._id);
  const todoArray = user.todos;
  todoArray.push(todo);
  user.todos = todoArray;
  try {
    const result = await user.save();
    res.send(result.todos);
  } catch (ex) {
    res.send(ex);
  }
});

// for fetching all the tasks of the user
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("todos");
    const myTodos = user.todos;
    return res.send(myTodos);
  } catch (err) {
    throw err;
  }
});

// For updating a todo in todo-list , here id is passed to know which object to update

router.post("/update/:id", async (req, res) => {
  try {
    const updated_todo = await Todo.findByIdAndUpdate(req.params.id, {
      $set: {
        todo_description: req.body.todo_description,
        todo_deadline: req.body.todo_deadline,
        todo_priority: req.body.todo_priority,
        todo_completed: req.body.todo_completed,
      },
    });
    res.send(updated_todo);
  } catch (err) {
    return res.send(err);
  }
});

router.get("/update/:id", async (req, res) => {
  console.log("Hello");
  try {
    await Todo.findById(req.params.id, function (err, doc) {
      if (err) {
        return res.send(err);
      } else console.log(doc);
      return res.send(doc);
    });
  } catch (err) {
    if (err) throw err;
  }
});

module.exports = router;
