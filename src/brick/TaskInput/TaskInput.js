import React, { useState } from 'react';
import Button from '../../UI/Button/Button';


const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const TaskInputChangeHandler = event => {
        setEnteredTask(event.target.value);
    };

    const TaskInputSubmitHandler = event => {
        event.preventDefault();
        props.onAddTask(enteredTask);
    };

    return (
        <form onSubmit={TaskInputSubmitHandler}>
            <label for="taskInput">Enter new task</label><br></br>
            <input id="taskInput" type="text" onChange={TaskInputChangeHandler}></input>
            <Button type="submit">Add new task</Button>
        </form>
    );
};

export default TaskInput;