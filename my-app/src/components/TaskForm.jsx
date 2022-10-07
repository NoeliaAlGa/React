import {useState, useContext} from "react"
import { TaskContext } from "../context/TaskContext"

export function TaskForm({createTask}) {

    const [title, setTitle] = useState("") /*capturamos el titulo y en el useState se pone como va a iniciar, en esta caso será un string vacio */
    const [description, setDescription] = useState("") ;

    const valor = useContext(TaskContext);
    console.log(valor);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
          title,
          description
        });
        /*Para limpiar el formulario */
        setTitle(""); 
        setDescription("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" 
         onChange={(e) => setTitle(e.target.value)} 
         /* onChange={(e) => console.log(e.target.value)} Capturamos el onchange, significa que una vez cambia se ejecuta, para guardar lo que escribimos importamos un useState*/
         value = {title}
         autoFocus/>
        <textarea 
          placeholder="Escribe la discripción de la tarea"
          onChange= {(e) => setDescription(e.target.value)}
          value = {description}>
        </textarea>
        <button>Guardar</button>
    </form>
  )
}
