import React from 'react';
import style from './Info.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import QnA from "./QnA/QnA";
import UserProfile from "./UserProfile/UserProfileContainer";
import UsersTwoContainer from "./UsersTwo/UsersTwoContainer";
import ViewUserProfileContainer from "./Profile/ViewUserProfile/ViewUserProfileContainer";
import NoteContainer from "./Profile/ProfileMain/Note/NoteContainer";
import LoginContainer from "./login/LoginContainer";

function Info(props) {
    return (
        <div className={style.info}>
            <Route exact  path='/' render={() => <Redirect to='/profile'/>}/>
            <Route path='/profile' render={() => <Profile store={props.store}/>}/>
            <Route path='/qna' render={() => <QnA/>}/>
            <Route path='/users' render={() => <UsersTwoContainer/>} />
            <Route path='/note' render={() => <NoteContainer/>}/>
            <Route path={'/userProfile'} render={()=> <UserProfile/>}/>
            <Route path={'/viewUserProfile/:userId?'} render={()=> <ViewUserProfileContainer/>}/>
            <Route path={'/login'} render={()=> <LoginContainer/>}/>
        </div>

    );
}

export default Info;