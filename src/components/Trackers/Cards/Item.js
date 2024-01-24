import React from 'react';

export default function Item({ item, onCheck }) {

    const handleChange = e => {
        onCheck(item.id, e.targetChecked);
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