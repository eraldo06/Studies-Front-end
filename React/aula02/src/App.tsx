import TaskContainer from "./componets/TaskContainer";
import TaskItem from "./componets/TakItem";
import "./style/estilo.css";

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1 className="m-5">Task Manager</h1>
        <div id="new-task">
          <button id="btnAdd" className="btn btn-primary">Add</button>
        </div>
        <TaskContainer>
          <TaskItem titulo="tarefa 1" />
          <TaskItem titulo="tarefa 2" done={true} />
        </TaskContainer>
      </main>
    </div>
  );
}

export default App;
