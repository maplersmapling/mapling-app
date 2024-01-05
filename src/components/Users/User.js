/*=============================================================================
File: User.js
-------------------------------------------------------------------------------
Description: This component will retreive the required information for each 
             user item.
=============================================================================*/
//this is the basic set up you can change to whatever you need 
import React from 'react';
// make database contain username, email, and password 
function User(object) {
    return (
        <div>
            User {/*this is just to note what component it is - is deleted later */}
            {object.user.username}
        </div>
    )
}

export default User; 