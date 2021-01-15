import React from 'react';
import style from './UserProfile.module.css'
import UserInfo from "../Profile/UserInfo/UserInfo";
import NavBar from "../Profile/NavBar/NavBar";
import ProfileFeedContainer from "../Profile/ProfileMain/ProfileFeed/ProfileFeedContainer";

const UserProfile = () => {
    return (
       <div className={style.userProfile}>
           <UserInfo/>
           <ProfileFeedContainer />
           <NavBar/>
       </div>
    )
};
export default UserProfile;