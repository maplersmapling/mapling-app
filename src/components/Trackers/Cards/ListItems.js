import React from 'react';
import Item from './Item';

export default function ListItems({ items, setItems, handleCheck }) {
    
    function updateCheck(itemId, nextDone) {
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
        
        const doneItem = items.map(item => {
            if (item.id === itemId) {
                return item;
            } else {
                return null;
            }
        })
        handleCheck(doneItem);
    }

    return (
            <>
                {items.map(item => {
                    return <Item
                                key={item.id} 
                                item={item}
                                onCheck={updateCheck}
                            />
                })}
            </>
    
    );

}