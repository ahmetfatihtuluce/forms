import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(task.id, title, taskDesc);
    }
    else{
        onCreate(title, taskDesc);
    }
    
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-edit">
          <h3>Please Edit The Task!</h3>
          <form className="task-form">
            <label className="task-label">Edit Title</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Edit Task Description</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button update-button" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add a Task!</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Task Description</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
