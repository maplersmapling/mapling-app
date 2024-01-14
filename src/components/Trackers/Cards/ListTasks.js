import React from 'react';
import Task from './Task';

export default function ListTasks({ tasks, onCheck }) {

    
    return (
            <>
                {tasks.map(task => {
                    return <Task 
                                key={task.id} 
                                task={task}
                                onCheck={onCheck}
                            />
                })}
            </>
    
    );

}