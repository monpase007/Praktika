import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setLogout} from "../../Redux/ProfileReducer";

class HeaderContainer extends React.Component{

    render = () => {

            return <Header { ...this.props }/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.profilePage.isAuth,
    userProfileInfoMe: state.profilePage.userProfileInfoMe
})

let mapDispatchToProps = {
    setLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);