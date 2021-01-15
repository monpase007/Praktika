import React from 'react';
import UserInfo from "./UserInfo";

import {connect} from "react-redux";
import {getMyProfile, requestStatus, setStatus, setUserInfo, setUserInfoMe} from "../../../../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import withRedirectHOC from "../../../../../HOC/Redirect/RedirectHOC";
import {compose} from "redux";
import {
    getIsAuth,
    getStatus,
    getStatusOneSymbols,
    getUserProfileInfo,
    getUserProfileInfoMe
} from "../../../../Utils/Selector";


class UserInfoContainer extends React.Component {


    render() {
        return (<UserInfo {...this.props} />)
    }
}

let mapStateToProps = (state) => ({
    userProfileInfo: getUserProfileInfo(state),
    userProfileInfoMe: getUserProfileInfoMe(state),
    isAuth: getIsAuth(state),
    status: getStatus(state),
    oneSymbol: getStatusOneSymbols(state)

});
let mapDispatchToProps = {
    setUserInfo,
    setUserInfoMe,
    getMyProfile,
    requestStatus,
    setStatus
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps,),
    withRedirectHOC
)(UserInfoContainer);