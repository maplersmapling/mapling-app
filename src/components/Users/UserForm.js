/*=============================================================================
File: UserForm.js
-------------------------------------------------------------------------------
Description: This component will register and save new users information. 
=============================================================================*/
import { React, useState } from 'react';


function UserForm({ users, setUsers }) {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            id: Date.now(), //will be changed later
            username: e.target.value, // all these assignments arent right, 
            email: e.target.value,    // i just put them here for now
            password: e.target.value
        })
        console.log('change')
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
        setUsers([...users, user])
    }

    return (
        <div> User Form
            <form>
                <input />
                <button>add</button>
            </form>
        </div>
    )
}

export default UserForm;