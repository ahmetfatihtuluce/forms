import {useState} from 'react'

function TaskCreate({onCreate}) {


    const [title, setTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }
    
    return ( 
    
    <div className="task-create">
         <h3>Please Add a Task!</h3>
         <form className="task-form">
            <label className="task-label">Title</label>
            <input className="task-input" value={title} onChange={handleChange}  />
            <label className="task-label">Task Description</label>
            <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
            <button className="task-button" onClick={handleSubmit}>Create</button>
         </form>

    </div> );
}

export default TaskCreate;