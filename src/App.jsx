import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Clock from "./components/Clock";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <Navbar />
     
      <div className=" bg-slate-100 w-screen h-screen flex flex-col items-center gap-16 pt-32">
 
        <CreateTask tasks={tasks} setTasks={setTasks} />      
        <Card>
          <ListTask tasks={tasks} setTasks={setTasks} />
        </Card>
      </div>
      <>
      <Clock/>
      </>
      <Footer />
    </DndProvider>
  );
}

export default App;
