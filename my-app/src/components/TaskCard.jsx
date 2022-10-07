function TaskCard({task, deleteTask}) {

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