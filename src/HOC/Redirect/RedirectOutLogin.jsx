import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state)=>({
    isAuth: state.profilePage.isAuth
});

const withRedirectOutLogin = (Component) => {

    const ComponentContainer =(props)=>{
        return props.isAuth ?<Redirect to={'/profile'}/>
            : <Component {...props} />
    };
    return connect(mapStateToProps)(ComponentContainer);
};

export default withRedirectOutLogin;