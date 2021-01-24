import React from 'react';
import style from './Profile.module.css';
import ProfileMain from "./ProfileMain/ProfileMain";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import NavBarContainer from "./NavBar/NavBarContainer";

function  Profile(props) {
    return (
        <div className={style.profile}>
            <UserInfoContainer/>
            <ProfileMain  />
            <NavBarContainer/>
        </div>
    );
}

export default Profile;