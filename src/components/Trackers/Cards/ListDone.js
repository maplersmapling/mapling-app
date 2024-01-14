import React from 'react';

export default function ListDone({ tasks }) {

    return (
        <ul>
            {tasks.map(done => {
                <li key={done.id}>
                    {done.title}
                </li>
            })}
        </ul>
    )
}