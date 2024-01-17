import React from 'react';
import EditItem from './EditItem';
import AddItem from './AddItem';

export default function EditList({ items, setItems }) {

    function deleteHandler(itemId) {
        const newItems = items.filter(item => {
            return item.id !== itemId
        })
        setItems(newItems);
    }

    function changeItemHandler(newItem) {
        setItems(items.map(item => {
            if (item.id === newItem.id) {
                return newItem;
            } else {
                return item;
            }
        }));
    }

    function additionHandler(item) {
        setItems([...items, item]);
    }


    return (
        <div>
        {items.map(item => {
            return (
                <EditItem 
                    key={item.id}
                    item={item}
                    onDeleteItem={deleteHandler}
                    onChangeItem={changeItemHandler}
                />
            )
        })}
            <AddItem 
                onAdd={additionHandler}
            />
        </div>
    );
} 