import "./App.css";
import { useState } from "react";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];

    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    const afterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDelete);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
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
