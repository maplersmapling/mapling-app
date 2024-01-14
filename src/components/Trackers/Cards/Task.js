import React from 'react';

export default function Task({ task, onCheck }) {

    const handleChange = e => {
        onCheck(task.id, e.targetChecked);
    }

    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={task.done}
                    onChange={handleChange}
                />
                {task.title}
            </label>
        </div>
    );
}