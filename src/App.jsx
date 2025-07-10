import React, { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'


function App() {

   const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handlechange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    setTaskList([...taskList, taskInput]);
    setTaskInput('');
  };

  const deleteTask = (del) => {
  setTaskList(taskList.filter((_, index) => index !== del));
};


  return (
    <>
    <h1>ToDo App</h1>
      <div className="task">
        <input type="text" name='task' className="input" value={taskInput} onChange={handlechange} placeholder="Enter a task"/>
        <button className="add-btn" onClick={handleAddTask}>Add Task </button>
      </div>

      {taskList.map((item, index) => (
        <Todo key={index} task={item} onDelete={() => deleteTask(index)} />
      ))}
      

  </>
  )
}

export default App
