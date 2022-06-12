import React, { useContext, useEffect, useState } from 'react'
import { getStorageUser } from '../services/helpers';
import Auth from '../services/ServiceAuth'

function Profile(props) {

    const {logout, onProfileClick} = props
    const [profile, setProfile] = useState({})

    useEffect(() => {
        const user = getStorageUser().sub
        console.log(user);

        Auth.getUserDetail(user).then((user) => {
            setProfile(user)

        })
        .catch((error) => {
            console.error(error);
        })



    }, [])




    return (
        <div className={`profile d-block`}>
            <div className="text-center"><img src={profile.avatar} width="100" className="rounded-circle"/> </div>
                <h5 className="mt-2 mb-0">{profile.email} </h5>
                <div className="px-4 mt-1">
                    <p className="fonts">{profile.username}</p>
                    <p><button id="signin-btn" onClick={logout}>Log out</button></p>
                    <p><button type="button" class="btn-close" aria-label="Close" onClick={()=>onProfileClick()}></button></p>
                    
                </div>
        </div>
    )

}

export default Profile