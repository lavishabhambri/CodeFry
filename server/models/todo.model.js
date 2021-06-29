// Database Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // schema object


let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_deadline: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

// Exporting the Todo Model based on our schema
module.exports = mongoose.model('Todo', Todo);
