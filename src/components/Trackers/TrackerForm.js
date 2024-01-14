/*=============================================================================
File: TrackerForm.js
-------------------------------------------------------------------------------
Description: edit function for lists
=============================================================================*/
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AddIcon } from '../../icons';

export default function TrackerForm({ isEditing, setIsEditing, tasks, setTasks, updateHandler}) {
 
    const initialState = {
        id: '',
        category: '',
        title: '', 
        done: '', 
    }

    const [task, setTask] = useState(initialState);
    const [updatedTask, setUpdatedTask] = useState();
 
    const handleAddTask = e => {
        // set new input to task 
        setTask({
                id: Date.now(), 
                category: 'task',
                title: e.target.value, 
                done: false
         });
    };

    const handleSubmitTasks = e => {
        // apply task to bottom of tasks array
        e.preventDefault();
        setTasks([
            ...tasks,
            task
        ]);
        // re-initailize task
        setTask(initialState);
    };

    const updateTaskState = e => {
        // edit name of current task item
        setUpdatedTask({
            id: tasks.id,
            category: tasks.category,
            title: e.target.value,
            done: false, 
        });
    };

    const updateAndReset = (input, e) => {
        // save task to list and update save 
        e.preventDefault();
        updateHandler(input);
        setIsEditing(false);
    }

    let editContent;
    if (isEditing) {
        editContent = (
            <>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input 
                                value={task.title}
                                onChange={updateTaskState}
                            />
                        </li>      
                    )
                })}
            </ul>
            <Button onClick={e => updateAndReset(updatedTask, e)}>
                Save
            </Button>
            </>

        )
    } else {
        return setIsEditing(false);
    }

    return (
        <form onSubmit={handleSubmitTasks}>
            <input 
                type="text"
                name="task"
                value={task.title}
                placeholder="Enter task"
                onChange={handleAddTask}
            />
            <Button type="submit" onClick={() => handleAddTask(task.title)}>
                <AddIcon />
            </Button>
        </form>
    );
}
/* 
<>
            <input 
                placeholder="Add task"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddTask(title);
            }}>
                Add
            </button>
        </>
*/