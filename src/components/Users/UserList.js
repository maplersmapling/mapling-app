/*=============================================================================
File: UserList.js
-------------------------------------------------------------------------------
Description: This component will retreive user item from the entire database. 
=============================================================================*/
import React from 'react';
import User from './User';

function UserList({ users }) {
    
    return (
        <div>
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </div>
    );
};

export default UserList;