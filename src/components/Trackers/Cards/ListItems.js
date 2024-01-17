import React from 'react';
import Item from './Item';

export default function ListItems({ items, setItems, handleChecked }) {
    
    function updateItemCheck(itemId, nextDone) {
        setItems(items.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    done: nextDone
                };
            } else {
                return item;
            }
        }));
        
        const doneItems = items.filter(item => {
            return item.done === nextDone
        })
        handleChecked(doneItems);
    }

    return (
            <>
                {items.map(item => {
                    return <Item
                                key={item.id} 
                                item={item}
                                updateCheck={updateItemCheck}
                            />
                })}
            </>
    
    );

}