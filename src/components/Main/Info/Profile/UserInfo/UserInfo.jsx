import React from 'react';
import style from './UserInfo.module.css';
import logo from '../../../../../assets/images/icon-avatar-16.jpg'
import Preloader from "../../../../smallComponents/Preloader/Preloader";
import MyStatus from "./MyStatusComponent/MyStatus";

function UserInfo(props) {
    return (
        <div className={style.userInfo}>
            <div>
                {props.isAuth ? <img className={style.avatar}
                                     src={props.userProfileInfoMe.photos.large ? props.userProfileInfoMe.photos.large : logo}
                                     alt="avatar"/> :
                    <Preloader/>}
            </div>
            <div>
                <div className={style.userName}>{props.userProfileInfo.login}</div>
                <MyStatus status={props.status} requestStatus={props.requestStatus} setStatus={props.setStatus} userId={props.userProfileInfo.id}/>
            </div>
        </div>
    );
}

export default UserInfo;