import React from 'react';
import style from './ProfileMain.module.css';
import {Route} from "react-router-dom";
import ProfileFeedContainer from "./ProfileFeed/ProfileFeedContainer";



function ProfileMain(props) {
    return (
        <div className={style.profileMain}>
            <Route path='/profile'
                   render={() => (<ProfileFeedContainer />)}/>
        </div>
    );
}

export default ProfileMain;