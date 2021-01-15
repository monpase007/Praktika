import React from 'react';
import style from './UserProfile.module.css'
import NavBar from "../Profile/NavBar/NavBar";
import ProfileFeedContainer from "../Profile/ProfileMain/ProfileFeed/ProfileFeedContainer";
import UserInfoContainer from "../Profile/UserInfo/UserInfoContainer";

const UserProfile = () => {
    return (
       <div className={style.userProfile}>
           <UserInfoContainer/>
           <ProfileFeedContainer />
           <NavBar/>
       </div>
    )
};
export default UserProfile;