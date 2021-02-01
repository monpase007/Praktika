import React from 'react';
import './App.css';

import Main from "./components/Main/Main";
import {BrowserRouter, HashRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainter";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import {compose} from "redux";
import Preloader from "./components/smallComponents/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return ( !this.props.initialized? <Preloader/>
        : <div className="App">
                <HashRouter>
                    <HeaderContainer/>
                    <Main store={this.props.store}/>
                </HashRouter>
            </div>)
    }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
});
const mapDispatchToProps = {
    initializeApp
};

export default compose(connect(mapStateToProps,mapDispatchToProps))(App);
