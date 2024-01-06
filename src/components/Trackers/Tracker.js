/*=============================================================================
File: Tracker.js
-------------------------------------------------------------------------------
Description: renders item from list 
=============================================================================*/
import React from 'react';
import { useState } from 'react'; 

export default function Tracker({ item }) {

    /*
    const [isEditing, setIsEditing] = useState(false);
    const [updatedItem, setUpdatedItem] = useState();

    //update state with new value 
    const updateItemState = e => {

        setUpdatedItem({
            id: item.id,
            type: item.type,
            name: e.target.value
        })
    }

     update and clear form 
    const updateAndReset = (input, e) => {
        e.preventDefault();
        // call updateHandler with input
        updateHandler(input)
        setIsEditing(false)
    }*/
    return (
        <div>
            {item.name}
            {/* isEditing ?
             <form >
                <input 
                    type="text"
                    defaultValue={item.name}
                    
                />
             </form> //onSubmit={e => updateAndReset(updatedItem, e)} onChange={updateItemState}
             :
             <p onDoubleClick={() => setIsEditing(true)}>
                item.name
             </p> //double click activates editing*/}    
            {/* Button for user to delete item from list 
            <button onClick={() => deleteHandler(item.id)}>X</button>*/}
            
        </div>
    )
}