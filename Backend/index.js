const express=require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const app =express();
app.use(cors());
app.use(express.json());
require('dotenv').config()
const TodoModel=require("./Models/Todo")
mongoose.connect(process.env.MONGOURL)
.then(()=>console.log("Database connected succesfully"))
.catch(err=>console.log(err));
app.post("/add",(req,res)=>{
    const todo=req.body.todo;
   
    TodoModel.create({
        task:todo
    }).then(result=>res.json(result))
    .catch(err=>res.json(err));
})
app.get("/home",(req,res)=>{
    TodoModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})
app.put("/update/:id",(req,res)=>{
const {id}=req.params;
TodoModel.findByIdAndUpdate({_id:id},{done:true})
.then(result=>res.json(result))
.catch(err=>res.json(err));
})
app.put("/delete/:id",(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
    })
app.listen(8080,()=>{
    console.log("listening");
})