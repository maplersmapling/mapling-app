import React from 'react';

export default function ListChecked({ checked }) {

    return (
        <ul>
            {checked.map(check => {
                <li key={check.id}>
                    {check.title}
                </li>
            })}
        </ul>
    )
}