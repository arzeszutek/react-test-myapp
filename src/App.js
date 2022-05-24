import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInput from './brick/TaskInput/TaskInput';
import TaskList from './brick/TaskList/TaskList';

const App = () => {

  const [tasks, setTasks] = useState([
    {value: 'First position on the list', id: 't1'},
    {value: 'Second position on the list', id: 't2'}
  ]);

  const addTaskHandler = enteredTask => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({value: enteredTask, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = taskID => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskID);
      return updatedTasks;
    });
  };

  let tasksContent = (
    <p>No tasks found, add some!</p>
  );

  if (tasks.length > 0){
    tasksContent = (
      <TaskList items={tasks} onDeleteTask={deleteTaskHandler}/>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TASK LIST</h1>
        <TaskInput onAddTask={addTaskHandler}/>
        <div>
          {tasksContent}
        </div>
      </header>
    </div>
  );
};

export default App;
