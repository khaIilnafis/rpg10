import React from 'react';
import {useParams} from 'react-router-dom';

function Profile () {
    let {user} = useParams();
    return(
    <div>
        <h1>Profile's Coming Soon... </h1>
    </div>
    )
}
export default Profile;