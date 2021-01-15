import React from 'react';
import style from './UsersTwo.module.css';
import avatar from '../../../../assets/images/icon-avatar-16.jpg'
import Preloader from "../../../smallComponents/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../../api/api";
const UsersTwo = (props) => {

    let countPage = Math.ceil(props.totalCount / props.sizePage);
    let arrPageNumber = [] ,arrPageNumberSmall = [];
    for (let i = 1; i <= countPage; i++) {
        arrPageNumber.push(i);
    }
    //описание логики скукоживания нумерации  страницы
    let cur = props.currentPage;
    if(arrPageNumber.length > 6){

        for (let i = 1; i <= 3; i++) {
            arrPageNumberSmall.push(i);
        }
        arrPageNumberSmall.push('...');
        for (let i = 1; i <= countPage; i++) {
            if(i !== 1 && i !== 2 && i !== 3 && i !==  countPage-2 && i !==  countPage-1 && i !==  countPage && (i === cur || i=== cur-1 || i === cur+1) )
            arrPageNumberSmall.push(i);
        }
        arrPageNumberSmall.push('...');
        for (let i = countPage-2; i <= countPage; i++) {
            arrPageNumberSmall.push(i);
        }
    }
    return (
        <>
            {props.isFetching?
                <Preloader/> :
                <>
                    <div className={style.number}>
                        {arrPageNumberSmall.map(e => {
                            if(e ==='...') return <span className={style.numberPage}>...</span>
                            if(cur === e)
                                return  <span onClick={()=>{props.updateCurrentPage(e)}} className={`${style.numberPage} ${style.activeNumber}`}>{e}</span>
                            else return <span onClick={()=>{props.updateCurrentPage(e)}} className={style.numberPage}>{e}</span>
                        })}
                    </div>
                    {props.users.map(u => {
                        return <div className={style.user}>
                            <NavLink to={`/viewUserProfile/${u.id}`} className={style.avatarWrap}>
                                {<img className={style.avatar} src={u.photos.small ? u.photos.small : avatar} alt="ava"/>}
                            </NavLink>
                            <div className={style.userInfo}>
                                <NavLink to={`/viewUserProfile/${u.id}`} className={style.name}>{u.name}</NavLink>
                                <div className={style.userStatus}>{u.status ? `Статус: ${u.status}` : null}</div>
                                {u.followed?
                                    <button disabled={props.isFollowingUser.some(id => id === u.id)}
                                        className={style.btn} onClick={e => {
                                    props.isProgressFollowing(u.id,true);
                                    followAPI.unfollow(u.id).then(request => {
                                        if(!request.data.resultCode){
                                            debugger
                                            props.unfollowSuccessful(u.id);
                                            props.isProgressFollowing(u.id,false);}
                                    })}}>Отписаться</button>:
                                    <button disabled={props.isFollowingUser.some(id => id === u.id)}
                                            className={style.btn} onClick={e => {
                                        props.isProgressFollowing(u.id,true);
                                        followAPI.follow(u.id).then(request => {
                                        if(!request.data.resultCode){
                                            props.followSuccessful(u.id);
                                            props.isProgressFollowing(u.id,false);}
                                    })
                                }}>Подписаться</button>}
                            </div>
                        </div>
                    })}
            </>}
        </>
    )
}

export default UsersTwo;