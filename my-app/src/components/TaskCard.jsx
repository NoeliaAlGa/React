import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);

  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>¨{/* el deleteTask se llamará una vez se de click en el boton*/}
          Eliminar tarea</button>
      </div>
  )
}

export default TaskCard