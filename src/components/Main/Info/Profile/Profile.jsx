import React from 'react';
import style from './Profile.module.css';
import NavBar from "./NavBar/NavBar";
import ProfileMain from "./ProfileMain/ProfileMain";
import UserInfoContainer from "./UserInfo/UserInfoContainer";

function  Profile(props) {
    return (
        <div className={style.profile}>
            <UserInfoContainer/>
            <ProfileMain  />
            <NavBar/>
        </div>
    );
}

export default Profile;