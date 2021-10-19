import {createSelector} from "reselect";

export const getUserProfileInfo = (state) => {
    return state.profilePage.userProfileInfo;
};

export const getUserProfileInfoMe = (state) => {
    return state.profilePage.userProfileInfoMe;
};

export const getIsAuth = (state) => {
    return state.profilePage.isAuth;
};

export const getStatus = (state) => {
    return state.profilePage.status ;
};

export const getStatusOneSymbols = createSelector(getStatus, (item) => {return item[0]});