import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import toast  from 'react-hot-toast';
import classes from './CreateTask.module.css'


const CreateTask = ({tasks, setTasks}) => {

    const [task, setTask] = useState({
        id: "",
        name : "",
        status: "todo",
        
    })


    const submitHandler = (e) => {
        e.preventDefault()

        if(task.name.length < 1){
            return toast.error("Task cant be empty")
        }
         if(task.name.length > 100){
            return toast.error("Task length exceeded")
        }

        setTasks((prev) => {
            const list = [...prev, task]
            // localStorage.setItem("task", JSON.stringify(list))
            return list;
        })

        setTask({
            id: "",
            name : "",
            status: "todo",          
        })
    }

    return(
        <form onSubmit={submitHandler}>
           <input type="text" onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value})} value={task.name}  className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-30 px-1" />
           <button className= {classes.button} >Add</button>
        </form>
    )

}

export default CreateTask