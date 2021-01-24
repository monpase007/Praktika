import React from 'react';
import ViewUserProfile from "./ViewUserProfile";
import {connect} from "react-redux";
import {setUserId, setUserData, getUserInfo} from "../../../../../Redux/ViewUserProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ViewUserProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserInfo(userId);
    }

    render = () => {
        return <ViewUserProfile {...this.props} />
    }
}
let mapStateToProps = (state) => ({
    userInfo: state.userProfile.userInfo,
    userId: state.userProfile.userId
});
let mapDispatchToProps = {
    setUserData,
    setUserId,
    getUserInfo
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)(ViewUserProfileContainer)
