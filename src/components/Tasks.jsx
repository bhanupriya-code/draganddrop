import { useDrag } from "react-dnd";
import toast from "react-hot-toast";

const Tasks = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }));

//   console.log(isDragging)


  const handleRemove = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
    toast("Task Removed");
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md cursor-grabbing ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      {task.name}
      <button
        className="absolute bottom-1 right-1 text-slate-400"
        onClick={() => handleRemove(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Tasks;
