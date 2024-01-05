/*=============================================================================
File: index.js for Users component
-------------------------------------------------------------------------------
Description: The parent component for Users. Any request to users will go to 
             this file first. Includes all necessary information for users.
=============================================================================*/
import React from 'react';
import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

// this array is temporary, just for testing if components are working correctly
// look on the TodoList-ex google doc in the MaplingWebsiteInfo to see how everything works
const initialState = [
    {id: 1, username: "winditupp", email: "mya@mail.com", password: "ilovechris"},
    {id: 2, username: "SuckMaBow", email: "chris@mail.com", password: "ilovemya"},
]

function Users() {

    const [userList, setUserList] = useState(initialState);

    return (
        <div>
            Users
            <UserForm users={userList} setUsers={setUserList}/>
            <UserList users={userList}/> 
        </div>

    );
}

export default Users; 