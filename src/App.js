import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import {useEffect, useContext} from 'react';
import TasksContext from './Context/Task'




function App() {
  
  const {fetchTasks} = useContext(TasksContext);
   useEffect(()=>{
    fetchTasks();
    
   },[fetchTasks])
  

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Tasks</h1>
      <TaskList/>
    </div>
  );
}

export default App;
