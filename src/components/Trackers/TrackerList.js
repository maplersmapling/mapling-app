/*=============================================================================
File: TrackerList.js
-------------------------------------------------------------------------------
Description: returns rendered tracker item
=============================================================================*/
import React from 'react';
import Tracker from './Tracker';

export default function TrackerList({ 
    tasks, 
    onChangeTask 
}) {

    return (
        <ul>
            {tasks.map(task => {
                return (
                    <Tracker 
                        key={task.id}
                        task={task}
                        onChange={onChangeTask}
                    />
                );
            })}
        </ul>
    );
}