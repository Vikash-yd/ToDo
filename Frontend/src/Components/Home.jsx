import React,{useEffect, useState} from 'react'
import Create from './Create';
import axios from "axios"; 
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
function Home(){
   const [todos,setTodos]=useState([]);
   useEffect(()=>{
    axios.get("http://localhost:8080/home")
    .then(res=>setTodos(res.data))
    .catch(err=>console.log(err))
   

   },[])
   const handleEditDone=(id)=>{
    axios.put("http://localhost:8080/update/"+id)
    .then(result=>{
        location.reload();
    })
    .catch(err=>console.log(err))
   
   }
   const handleDelete=(id)=>{
    axios.put("http://localhost:8080/delete/"+id)
    .then(result=>{
        location.reload();
    })
    .catch(err=>console.log(err))
   
   }
   
return(
   <div className='home'>
       <h2>ToDo List</h2>
       <Create/>
       {
           todos.length===0
           ?
          <div> <h2>No record</h2></div>
           :
           todos.map(todo=>(
               <div className="task" key={todo._id}>
                <div className="checkbox">
                    {todo.done?
                    <IoMdCheckmarkCircle className="icon"/>:
                    <FaRegCheckCircle className="icon" onClick={()=>handleEditDone(todo._id)}/>
}
                <p className={todo.done ? "line_through":""}>{todo.task}</p>
                </div>
                <div>
                    <span>< MdDeleteOutline className="icon2"  onClick={()=>handleDelete(todo._id)}/></span>
                </div>
                </div>
           ))
       }
   </div>
)   

}
export default Home;