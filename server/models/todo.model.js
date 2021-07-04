// Database Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // schema object


let todoSchema = new Schema({
  todo_description: {
    type: String,
    required: true,
  },
  todo_deadline: {
    type: String,
    required: true,
  },
  todo_priority: {
    type: String,
    required: true,
  },
  todo_completed: {
    type: Boolean,
    default: false,
  },
});

// Exporting the Todo Model based on our schema
exports.Todo = mongoose.model("Todo", todoSchema);