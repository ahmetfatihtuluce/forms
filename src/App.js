import "./App.css";
import { useEffect, useState } from "react";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import axios from 'axios';


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {

   const response = await axios.post('http://localhost:3001/tasks',{
      title,
      taskDesc
    });
    console.log(response);
    const createdTasks = [...tasks,response.data];

    setTasks(createdTasks);
  };
  
    const fetchTasks = async ()=>{
      const response = await axios.get('http://localhost:3001/tasks');
      setTasks(response.data);
    }
   useEffect(()=>{
    fetchTasks();
    
   },[])
  
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterDelete = tasks.filter((task) => {
      return task.id !== id;  
    });
    setTasks(afterDelete);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {title:updatedTitle, taskDesc:updatedTaskDesc});
    const updatedTask = tasks.map((task)=>{
      if(task.id===id){
        return {id,title:updatedTitle, taskDesc:updatedTaskDesc}
      }
      else{
        return task;
      }
      
    })

    setTasks(updatedTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
