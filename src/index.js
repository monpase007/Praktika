import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import {Provider} from "react-redux";





let renderFull = () =>{

};
renderFull();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// store.subscribe(renderFull);
serviceWorker.unregister();
