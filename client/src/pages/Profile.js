import React from 'react';
import {useParams} from 'react-router-dom';

function Profile () {
    let {user} = useParams();
    console.log(user);
    return(
    <div>
        <h1>Profile {user} </h1>
    </div>
    )
}
export default Profile;