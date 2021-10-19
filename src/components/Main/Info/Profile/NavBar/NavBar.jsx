    import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
// import avatar from "../../../../../assets/images/icon-avatar-16.jpg"
import {useSelector} from "react-redux";

function NavBar({userProfileInfoMe, ...props}) {
    const users = useSelector(state=> state.userTwoPage.users)
    const avatar = 'https://image.flaticon.com/icons/png/512/64/64572.png'
    return (
        <div className={style.navBar}>
            <div className={style.headerBlock}>
                <span className={style.friends}>Друзья</span>
            </div>
            <div className={style.boxFriends}>
                {users.map((f) => <div className={style.friendsBlock}>
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