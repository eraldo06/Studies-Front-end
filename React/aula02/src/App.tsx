import {useState} from "react";
import TaskContainer from "./componets/TaskContainer";
import TaskItem from "./componets/TakItem";
import "./style/estilo.css";
import "bootstrap/dist/css/bootstrap.min.css"

interface Tarefa{
    titulo: string;
    done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([{
    titulo: "tarefa",
    done: false,
  }]);

  function adicionarTarefa(){
    setTarefas([...tarefas, {
      titulo: 'tarefa 2',
      done: false
    }])
  }

  return (
    <div className="App">
      <main className="container">
        <h1 className="m-5">Task Manager</h1>
        <div id="new-task">
          <button id="btnAdd" className="btn btn-primary" onClick={adicionarTarefa}>Add</button>
        </div>
        <TaskContainer>
        {tarefas.map((tarefa: Tarefa)=>{
          return<TaskItem titulo={tarefa.titulo} done={tarefa.done}/>
        })}
        </TaskContainer>
       
      </main>
    </div>
  );
}

export default App;
