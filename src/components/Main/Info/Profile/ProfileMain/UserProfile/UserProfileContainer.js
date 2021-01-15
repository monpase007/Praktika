import React from 'react';
import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import * as axios from 'axios'
class UserProfileContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(request => {
            this.props.setUserInfo(request.date);
        })
    }

    render = () => {
        return (<UserProfile/>)
    }
}

let mapStateToProps = () => ({

});
let mapDispatchToProps = {

};

export default connect()(UserProfileContainer);
