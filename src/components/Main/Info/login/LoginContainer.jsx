import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {authSetTimeout, setLogin} from "../../../../Redux/ProfileReducer";
import {compose} from "redux";
import withRedirectHOC from "../../../../HOC/Redirect/RedirectHOC";
import withRedirectOutLogin from "../../../../HOC/Redirect/RedirectOutLogin";

class LoginContainer extends React.Component {

    componentDidMount() {
        // this.props.authSetTimeout();
    }

    render = () => {
        return this.props.isAuth? <Redirect to={'/profile'} />: <Login {...this.props } />
    }
}

let mapStateToProps = state => ({
    isAuth: state.profilePage.isAuth,
    captchaURL: state.profilePage.captchaURL
});

let mapDispatchToProps = {
    authSetTimeout,
    setLogin
};

let containerUser = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRedirectOutLogin
)(LoginContainer);

export default containerUser