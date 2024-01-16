import React from 'react';

export default function Item({ item, updateCheck }) {

    const handleChange = e => {
        updateCheck(item.id, e.targetChecked);
    }

    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={item.done}
                    onChange={handleChange}
                />
                {item.title}
            </label>
        </div>
    );
}