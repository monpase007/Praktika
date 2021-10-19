import React, { useEffect } from 'react';
import './App.css';

import Main from "./components/Main/Main";
import { BrowserRouter, HashRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainter";
import { connect, useSelector } from "react-redux";
import { initializeApp } from "./Redux/AppReducer";
import { setLogin } from "./Redux/ProfileReducer";
import { compose } from "redux";
import Preloader from "./components/smallComponents/Preloader/Preloader";

const App = (props) => {
    const isAuth = useSelector(state=>state.profilePage.isAuth)
    useEffect(() => {
        props.initializeApp();
    }, [])
    useEffect(() => {
        props.setLogin('urman7994@gmail.com', 'urafilippov', true);
    }, [isAuth])

    return (
        <div className="App">
            <HashRouter>
                <HeaderContainer />
                <Main store={props.store} />
            </HashRouter>
        </div>)

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
const mapDispatchToProps = {
    initializeApp,
    setLogin
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
