import React from 'react';
import ViewUserProfile from "./ViewUserProfile";
import {connect} from "react-redux";
import * as axios from "axios"
import {setUserId, setUserData, getUserInfo} from "../../../../../Redux/ViewUserProfileReducer";
import {withRouter} from "react-router-dom";

class ViewUserProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserInfo(userId);
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+this.props.userId).then(request => {
    //         this.props.setUserData(request.data);
    //     })
    // }

    render = () => {
        return <ViewUserProfile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.userProfile.userInfo,
    userId: state.userProfile.userId
})
let mapDispatchToProps = {
    setUserData,
    setUserId,
    getUserInfo
};

let WithRouterContainerComponent = withRouter(ViewUserProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterContainerComponent);