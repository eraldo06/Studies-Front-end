import {useState, useEffect} from "react";
import TaskContainer from "./componets/TaskContainer";
import TaskItem from "./componets/TakItem";
import "./style/estilo.css";
import "bootstrap/dist/css/bootstrap.min.css"

// interface da tarefa
interface Tarefa{
    titulo: string;
    done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([{
    titulo: "tarefa",
    done: false,
  }]);

  const [tituloTarefa, setTituloTarefa] = useState<string>("");


// tarefa
  function adicionarTarefa(){
    if(tarefas.length<=40){
      setTarefas([...tarefas, {
        titulo: tituloTarefa,
        done: false
      }])
    }
   
  }

  // concluir uma tarefa
  function concluirTarefa(posi:number){
    const novaLista = [...tarefas];
    novaLista[posi].done = true;
    setTarefas(novaLista);
  }

  // remover tarefa
  function removerTarefa(posi:number){
    const nova2Lista = [...tarefas];
    nova2Lista[posi].done = false;
    setTarefas(nova2Lista);
  }

  // alerta de tarefa
  // useEffect(()=>{alert('LIMITE')})
  

  return (
    <div className="App">
      <main className="container">
        <h1 className="m-5">Task Manager</h1>
        <div id="new-task">
          <input type="text" onChange={(event)=> setTituloTarefa(event.target.value) } value={tituloTarefa}/>
          <button id="btnAdd" className="btn btn-primary" onClick={adicionarTarefa}>Add</button>
        </div>
        <TaskContainer>
        {tarefas.map((tarefa: Tarefa, posi:number)=>{
          return<TaskItem 
          titulo={tarefa.titulo} 
          done={tarefa.done} 
          concluirTarefa={()=>concluirTarefa(posi)}
          removerTarefa={()=>removerTarefa(posi)}
          />
        })}
        </TaskContainer>

       
       
      </main>
    </div>
  );
}

export default App;
