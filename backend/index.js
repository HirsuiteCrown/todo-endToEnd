//basic express boiler plate code with express.json() middleware
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
 
app.use(express.json())

app.post("/todo",async function(req,res){
    const  createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    //now put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({}); //wait for data to come back
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    //update function takes two argument=> 1) what are your conditions 2) 
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

