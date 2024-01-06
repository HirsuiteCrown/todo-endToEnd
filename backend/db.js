/*schema:-
Todo{
    title: string,
    description: string,
    completed: boolean
}
*/

const mongoose = require("mongoose");

// mongodb+srv://admin:71PA97k8qgfP4DxX@cluster0.hekztqe.mongodb.net/todos

mongoose.connect("mongodb+srv://admin:71PA97k8qgfP4DxX@cluster0.hekztqe.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo: todo
}