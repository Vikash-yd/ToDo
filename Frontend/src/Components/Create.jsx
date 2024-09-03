import { useState } from "react";
import axios from 'axios';

function Create(){
    const [task,setTask]=useState();
    const handleAdd=()=>{
        
        axios.post('http://localhost:8080/add', {todo:task})
        .then(result=>{
            location.reload();
        })
        .catch(err=>res.json(err))
        setTask("")

    }
    return(
        <div>
          <input type="text" name="" id="" value={task} className="create_input" onChange={(e)=>setTask(e.target.value)}/>
          <button type="button" className="create_button" onClick={handleAdd}>Add</button>  
        </div>
    )
}
export default Create;