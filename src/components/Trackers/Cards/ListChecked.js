import React from 'react';

export default function ListChecked({ completed }) {

    return (
        <ul>
            {completed.map(complete => {
                return (
                    <li key={complete.id}>
                        {complete.title}
                    </li>
                );
            })}
        </ul>
    );
}