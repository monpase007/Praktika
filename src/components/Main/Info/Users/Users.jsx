import React from 'react';
import style from './Users.module.css'
import userPhoto from '../../../../images/item/user_avatar.jpg'
import preloader from '../../../../images/preloader.svg'
import {NavLink} from "react-router-dom";
const Users = (props) => {
    let countPage = Math.ceil(props.totalCount / props.pageSize)
    let arrCount = [];
    for (let i = 1; i <= countPage; i++) {
        arrCount.push(i);
    }
    return (
        <>

            <div className={style.pageNumberWrap}>
                {arrCount.map(p => {
                    return props.pageNumber === p ? (<span onClick={() => {
                            props.onPageChange(p)
                        }} className={style.activeNum}>{p}</span>) :
                        (<span onClick={() => {
                            props.onPageChange(p)
                        }} className={style.pageNumber}>{p}</span>)
                })}
            </div>
            {props.isFathing?
                <div>
                    <img src={preloader} alt="preloader"/>
                </div> :
                <div>
                    <div>
                        {props.users.map(e => {
                            return <div className={style.usersWrap}>
                                <div className={style.imgAndButtonWrap}>
                                    <NavLink to={`/profile/profileFeed/${e.id}`}>
                                        {e.photos.small !== null ? <img className={style.userImg} src={e.photos.small}/> :
                                            <img className={style.userImg} src={userPhoto}/>}
                                    </NavLink>
                                    {e.followed ? <button onClick={() => {
                                            props.unfollow(e.id)
                                        }}>Отписаться</button> :
                                        <button onClick={() => {
                                            props.follow(e.id)
                                        }}>Подписаться</button>}
                                </div>
                                <div className={style.nameWrap}>
                                    <NavLink to={`/profile/profileFeed`}><span className={style.userName}>{e.name}</span></NavLink>
                                </div>
                                <div className={style.statusWrap}>
                                    <span className={style.userStatus}>{e.status}</span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            }


        </>

    )
}

export default Users;