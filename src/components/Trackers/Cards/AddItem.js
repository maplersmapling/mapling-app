import React from 'react';
import { useState } from 'react';

export default function AddItem({ onAdd }) {

    const initialState = {
        id: '',
        title: '',
        done: ''
    };

    const [item, setItem] = useState(initialState);

    const handleChange = e => {
        setItem({
            id: Date.now(), // new id number
            title: e.target.value, 
            done: false
        });
    }

    const handleSubmit = (input, e) => {
        e.preventDefault();
        onAdd(input); // add new item to end of list
        setItem(initialState); // reset item
    }

    return (

        <div>
            <input 
                type="text"
                name="item"
                value={item.title}
                placeholder="Enter a new task!"
                onChange={handleChange}
            />
            <button onClick={e => handleSubmit(item, e)}>Add</button>
        </div>
    );
}