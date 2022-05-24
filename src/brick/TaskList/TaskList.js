import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Button from '../../UI/Button/Button';

const TaskList = props => {
    return (
        <ul>
            {props.items.map(task => (
                <TaskItem
                    key = {task.id}
                    id = {task.id}
                    
                >
                    {task.value+'      '}
                    <Button id = {task.id}
                    onDelete={props.onDeleteTask}
                    >Usuń wpis</Button>
                </TaskItem>
            ))}
        </ul>
    );
};

export default TaskList;

