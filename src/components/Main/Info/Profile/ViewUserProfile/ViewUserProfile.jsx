import React from 'react';
import style from './ViewUserProfile.module.css';
import avatar from '../../../../../assets/images/icon-avatar-16.jpg'

function ViewUserProfile(props) {
    return (<>

        <div className={style.userInfo}>
            <div className={style.avatarWrap}><img className={style.avatar}
                                                   src={props.userInfo.photos.large ? props.userInfo.photos.large : avatar}
                                                   alt="avatar"/></div>
            <div className={style.textInfo}>
                <div className={style.userName}>{props.userInfo.fullName}</div>
                <div className={style.aboutMe}>{props.userInfo.aboutMe}</div>
            </div>
        </div>
        <div className={style.feed}>
        </div>
    </>);
}

export default ViewUserProfile;