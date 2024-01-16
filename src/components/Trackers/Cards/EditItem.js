import React from 'react';
import { useState } from 'react';

export default function EditItem({item, onDeleteItem, onChangeItem }) {

    const [isClicked, setIsClicked] = useState(false);

    let itemContent;
    if (isClicked) {
        itemContent = (
            <>
                <input 
                    value={item.title}
                    onChange={e => {
                        onChangeItem({
                            ...item,
                            title: e.target.value
                        });
                    }}/>
                <button onClick={() => setIsClicked(false)}>
                    Save
                </button>
            </>
        );
    } else {
        itemContent = (
            <>
                {item.title}
                <button onClick={() => setIsClicked(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <div>
            {itemContent}
            <button onClick={() => onDeleteItem(item.id)}>
                X
            </button>
        </div>
    );   
}

/* 
{isEdit ? (
                <form onSubmit={e => updateAndReset(updatedItem, e)}>
                    <input 
                        type="text"
                        defaultValue={item.title}
                        onChange={updateItemState}
                    />
                    <button type="submit">
                        Change
                    </button>
                </form>
            ): (
                <>
                    <span>{item.title}
                        <button onClick={() => setIsEdit(true)}>
                            Edit item
                        </button>
                    </span>
                </>
            )}
                const updateItemState = e => {
        setUpdatedItem({
            id: item.id,
            title: e.target.value,
            done: false
        });
    }

    const updateAndReset = (input, e) => {
        e.preventDefault();
        updateHandler(input);
        setIsClicked(false);
    }
*/