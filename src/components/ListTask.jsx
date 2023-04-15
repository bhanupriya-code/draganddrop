// import { useEffect, useState, useRef } from "react";
// import { useDrag, useDrop } from 'react-dnd';

import { useEffect, useState } from "react"
import Section from "./Section"

//15 - APRIL

const ListTask = ({tasks, setTasks}) => {

  const [todos, setTodos] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const mTodo = tasks.filter((todoTask) => todoTask.status === "todo")
    const mInProgress = tasks.filter((inProgressTask) => inProgressTask.status === "inprogress")
    const mCompleted = tasks.filter((completedTask) => completedTask.status === "completed")


    setTodos(mTodo)
    setInProgress(mInProgress)
    setCompleted(mCompleted)

  }, [tasks])

  const allStatus = ["todo", "inprogress", "completed"]


  return(
    <div className="flex gap-16 ">
      {allStatus.map((s, i) => <Section key={i} s={s} tasks={tasks} setTasks={setTasks}
      todos = {todos} inProgress = {inProgress} completed = {completed}/>)}
    </div>
  )


}

export default ListTask