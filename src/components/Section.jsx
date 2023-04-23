import { useDrop } from "react-dnd"
import Header from "./Header"
import Tasks from "./Tasks"



const Section = ({s, tasks, setTasks, todos, inProgress, completed}) => {

 

    const addItemToSection = (id) => {
        // console.log(`addItemToSection called with id: ${id}`);
        setTasks(prev => {
            const modifiedTasks = prev.map(t => {
                if(t.id === id){
                    return {...t, status:s}
                }
                return t
            })
            // console.log(`setTasks called with modifiedTasks: ${JSON.stringify(modifiedTasks)}`);
            return modifiedTasks
        })
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (it) => addItemToSection(it.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }));
      
    console.log("task drop")

    let text = "Todo"
    let col = "bg-slate-500"
    let tasksToMap = todos

//   const allStatus = ["todo", "inprogress", "completed"]

if(s === "inprogress"){
    text = "In Progress"
    col = "bg-purple-500"
    tasksToMap = inProgress
}

if(s === "completed"){
    text = "Done"
    col = "bg-green-500"
    tasksToMap = completed
}
// console.log(`tasksToMap: ${JSON.stringify(tasksToMap)}`);



    return(<div ref={drop} className={`classes.task w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : "" }`}>
        <Header text={text} col = {col} count = {tasksToMap.length}/>
        {tasksToMap.length > 0 && tasksToMap.map((eachT) => <Tasks key={eachT.id}  task = {eachT} tasks= {tasks} setTasks = {setTasks} />) }
        </div>)

}

export default Section