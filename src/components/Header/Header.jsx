import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/icon-avatar-16.jpg'
function  Header(props) {
    let logout = () => {
        props.setLogout();
    }
    return (
        <div className={style.header}>
            <div className={style.logo}><img className={style.imgLogo} src="https://pkstpb.ru/images/novosti/2018/noyabr/kisspng-samsung-galaxy-a3-2016-samsung-galaxy-a3-2015-5b243c9fede1c2.1810357615291014719744.png" alt="logo"/></div>
            <div className={style.home}><NavLink className={style.home} to="/profile" >Моя страница</NavLink></div>
            <div className={style.users}><NavLink className={style.users} to="/users" >Пользователи</NavLink></div>
            <div className={style.friends}><NavLink className={style.friends} to="/qna" >Ответы на вопросы</NavLink></div>
            <div className={style.QnA}><NavLink className={style.QnA} to="/note" >Заметки</NavLink></div>
            <div className={style.authMeWrap}><NavLink className={style.authMe} to="/profile" >
                <img src={props.userProfileInfoMe.photos.small?props.userProfileInfoMe.photos.small:logo} alt="logo"/>
                <span>{props.userProfileInfoMe.fullName}</span>
            </NavLink>
                <span onClick={logout} className={style.logout}>Выйти</span>
            </div>
        </div>
    );
}

export default Header;