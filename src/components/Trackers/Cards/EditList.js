import React from 'react';
import { useState } from 'react';

export default function EditList({ tasks, updateHandler }) {

    const initialState = {
        id: '', 
        category: '',
        title: '',
        done: ''
    }
    const [updatedTask, setUpdatedTask] = useState(initialState);

    const updatedTaskState = e => {
        setUpdatedTask({
            id: tasks.id,
            category: tasks.category,
            title: e.target.value,
            done: false
        });
    }
    
    const updateList = (input, e) => {
        e.preventDefault();
        updateHandler(input);
    }
    
    return (
            <ul>
            <form onSubmit={e => updateList(updatedTask, e)}>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input 
                                value={task.title}
                                onChange={updatedTaskState}
                            />
                        </li>
                    )
                })}
            </form>
            </ul>
    );
}