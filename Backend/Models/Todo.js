const mongoose=require("mongoose");
const ToDoSchema=new mongoose.Schema({
    task:{type:String,
        require:true},
        done:{
            type:Boolean,
            default:false
        }
})
const TodoModel=mongoose.model("todos",ToDoSchema);
module.exports=TodoModel;