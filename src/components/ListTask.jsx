import { useEffect, useState, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';



const ListTask = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fTodo = tasks.filter((task) => (task.status = "todo"));
    const fInProgress = tasks.filter((task) => (task.status = "inprogress"));
    const fCompleted = tasks.filter((task) => (task.status = "completed"));

    setTodo(fTodo);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];
  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todo={todo}
          inProgress={inProgress}
          completed={completed}
        />
      ))}
    </div>
  );
};
const Section = ({ status, tasks, setTasks, todo, inProgress, completed}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSelect(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  let text = "Todo";
  let bg = "bg-slate-500";
  let taskToMap = todo

  if(status === "inprogress"){
     text = "In Progress"
     bg = "bg-purple-500"
     taskToMap = inProgress
  }

  if(status === "completed"){
     text = "Completed"
     bg = "bg-green-500"
     taskToMap = completed
  }

  const addItemToSelect = (id) => {
    setTasks(prev =>{
      const mTask = prev.map(t => {
        if(t.id === id){
          return {...t, status: status}              
        }
        return t
      })

      return mTask
    })


    console.log("dropped", id)
  }

  return (
    <div ref={drop} className={`w-64 `}>
      <h2>
        <Header text={text} bg={bg} count={taskToMap.length} />
        {taskToMap.length > 0 && taskToMap.map((task) =><Task key={task.id} task={task} tasks = {tasks} setTasks={setTasks}/>)}
      </h2>
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 uppercase text-sm text-white`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  console.log(isDragging)

  const handleRemove = (id) => {
  const fTasks = tasks.filter(t => t.id !== id)
  setTasks(fTasks)
  // toast("Task Removed")
  }


  return (
    <div ref={drag} className={`relative p-4 mt-8 shawdo-md rounded-md cursor-grabbing`}>
      <p>{task.name}</p>
      <button className="absolute bottom-1 right-1 text-slate-400" onClick={() => handleRemove(task.id)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

      </button>
    </div>
  );
};

export default ListTask;
