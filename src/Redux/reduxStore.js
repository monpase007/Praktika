import {applyMiddleware, combineReducers, createStore} from 'redux'
import ProfileReducer from "./ProfileReducer";
import NotesReducer from "./NotesReducer";
import UsersTwoReducer from "./UserTwoReducer";
import ViewUserProfileReducer from "./ViewUserProfileReducer";
import middleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    notePage: NotesReducer,
    userTwoPage: UsersTwoReducer,
    userProfile: ViewUserProfileReducer,
    form: formReducer,
    app: AppReducer
});

let store = createStore(reducers,applyMiddleware(middleware));
window.store = store;
export default store;