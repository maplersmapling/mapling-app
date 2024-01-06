/*=============================================================================
File: TrackerForm.js
-------------------------------------------------------------------------------
Description: edit function for lists
=============================================================================*/
import React from 'react';
import { useState } from 'react';

export default function TrackerForm({ items, setItems }) {
 
    const [item, setItem] = useState({
        id: '',
        type: '',
        name: ''
    }); 

    const handleChange = e => {
        
        setItem({
            id: Date.now(),
            type: items.type,
            name: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //add new items to list
        setItems([...items, item])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="item"
                value={item.name}
                placeholder="Enter task item"
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};