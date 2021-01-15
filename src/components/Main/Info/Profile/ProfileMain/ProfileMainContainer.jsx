import React from 'react';
import style from './ProfileMain.module.css';
import {Route} from "react-router-dom";
import ProfileFeedContainer from "./ProfileFeed/ProfileFeedContainer";
import NoteContainer from "./Note/NoteContainer";
import {connect} from "react-redux";
import * as axios from "axios"

function ProfileMain(props) {

    return (
        <div className={style.profileMain}>
            <Route path='/profile/profileFeed'
                   render={() => (<ProfileFeedContainer />)}/>
            <Route path='/profile/note'
                   render={() => (<NoteContainer />)}/>
        </div>
    );
}

class ProfileMainContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(request => {

        })
    }

    render() {

        return <ProfileMain  />
    }
}
let mapStateToProps = () => ({

})

let mapDispatchToProps = {

}

export default connect()(ProfileMainContainer);