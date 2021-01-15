import React from 'react';
import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import * as axios from 'axios'
class UserProfileContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(request => {

        })
    }

    render = () => {
        return (<UserProfile/>)
    }
}

let mapStateToProps = (state) => ({
    userProfileInfo: state.profilePage.userProfileInfo
});
let mapDispatchToProps = {

};

export default connect()(UserProfileContainer);
