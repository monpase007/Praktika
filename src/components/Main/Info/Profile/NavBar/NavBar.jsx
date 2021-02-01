import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import avatar from "../../../../../assets/images/icon-avatar-16.jpg"

function NavBar({userProfileInfoMe, ...props}) {
    return (
        <div className={style.navBar}>
            <div className={style.headerBlock}>
                <span className={style.friends}>Друзья</span>
            </div>
            <div className={style.boxFriends}>
                {props.friends.map((f) => <div className={style.friendsBlock}>
                    <NavLink to={`/viewUserProfile/${f.id}`}>
                        <img className={style.imgFriends} src={f.photos.small ? f.photos.small : avatar} alt=""/>
                    </NavLink>
                    <NavLink className={style.navLink} to={`/viewUserProfile/${f.id}`}>
                        <div className={style.nameFriend} title={f.name}>{f.name}</div>
                    </NavLink>
                </div>)}
            </div>
        </div>
    );
}

export default NavBar;