// define constants action.type
import {AuthAPI, ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_POST = 'UPDATE-POST';
const LIKE_POST_PLUS = 'LIKE-POST-PLUS';
const LIKE_POST_MINUS = 'LIKE-POST-MINUS';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_USER_INFO_ME = 'SET_USER_INFO_ME';
const OUT_AUTH = 'OUT_AUTH';
const AUTH_SET_TIMOUT = "AUTH_SET_TIMOUT";
const GET_USER_STATUS = "GET_USER_STATUS";
const CAPTCHA = "CAPTCHA";
const LOGOUT = "LOGOUT";

// define function when return obj (action)


// bind state
let initialState = {
    Posts: [
        {
            id: 1,
            values: "всее чиил",
            urlImg: 'https://images4.alphacoders.com/921/thumb-1920-921846.jpg',
            comment: ["This is coool)*)"],
            likeCount: 23,
            likeFlag: true
        }
    ],
    textUpdate: '',
    textImglink: '',
    StyleModal: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(68,68,68,0.65)'
        }
    },
    userProfileInfo: {
        id: 11412,
        login: "monpase007",
        email: "urman7994@gmail.com"
    },
    userProfileInfoMe: {
        aboutMe: '',
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 2,
        photos: {
            small: "",
            large: ""
        }
    },
    isAuth: true,
    status: '',
    captchaURL: ''
};


//Reducer
const ProfileReducer = (state = initialState, action) => {
    // template variable i

    let i, stateCopy;

    switch (action.type) {
        case ADD_POST:
            if (state.Posts.length === 0) {
                return {
                    ...state,
                    Posts: [{
                        id: 0,
                        values: action.text,
                        urlImg: action.url,
                        comment: [],
                        likeCount: 0,
                        likeFlag: false
                    }, ...state.Posts],
                    textImglink: '',
                    textUpdate: ''
                };
            } else {
                let temp = state.Posts[0].id + 1;
                debugger
                return {
                    ...state,
                    Posts: [{
                        id: temp,
                        values: action.text,
                        urlImg: action.url,
                        comment: [],
                        likeCount: 0,
                        likeFlag: false
                    }, ...state.Posts],
                    textImglink: '',
                    textUpdate: ''
                };
            }
        case DELETE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts.splice(i, 1);
            return stateCopy;
        case UPDATE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].values = action.text;
            return stateCopy;
        case LIKE_POST_PLUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].likeCount++;
            stateCopy.Posts[i].likeFlag = true;
            return stateCopy;
        case LIKE_POST_MINUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].likeCount--;
            stateCopy.Posts[i].likeFlag = false;
            return stateCopy;
        case SET_USER_INFO: {
            return {
                ...state,
                userProfileInfo: {...action.userProfileInfo},
                isAuth: true,
                captchaURL: ''
            }
        }
        case SET_USER_INFO_ME: {
            return {
                ...state,
                userProfileInfoMe: {...action.userProfileInfoMe},
                isAuth: true
            }
        }
        case OUT_AUTH: {
            return {
                ...state,
                isAuth: false
            }
        }
        case AUTH_SET_TIMOUT: {
            return {
                ...state,
                isAuth: true
            }
        }
        case GET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case CAPTCHA: {
            return {
                ...state,
                captchaURL: action.url
            }
        }
        default:
            return state;
    }

};


export const addPostCreate = (text, url) => ({type: ADD_POST, text, url});
export const deletePostCreate = (id) => ({type: DELETE_POST, id: id});

export const updatePostCreate = (id, text) => ({type: UPDATE_POST, id: id, text: text});
export const likePostPlusCreate = (id) => ({type: LIKE_POST_PLUS, id: id});
export const likePostMinusCreate = (id) => ({type: LIKE_POST_MINUS, id: id});
export const setUserInfo = (userProfileInfo) => ({type: SET_USER_INFO, userProfileInfo});
export const setUserInfoMe = (userProfileInfoMe) => ({type: SET_USER_INFO_ME, userProfileInfoMe});
export const outAuth = () => ({type: OUT_AUTH});
export const AuthSetTimeout = () => ({type: AUTH_SET_TIMOUT});
export const getUserStatus = (status) => ({type: GET_USER_STATUS, status});
export const captcha = (url) => ({type: CAPTCHA, url});
export const logout = () => ({type: LOGOUT});


export const getCaptcha = () => (dispatch) => {
    AuthAPI.captcha().then(request => {
        dispatch(captcha(request.data.url));
        dispatch(stopSubmit('login',{_error: "Введите капчу" }));
    })
}

export const setLogin = (email, password, rememberMe, captcha) => (dispatch) => {
    !captcha ?
        AuthAPI.login(email, password, rememberMe).then(request => {
            if (!request.data.resultCode) {
                dispatch(getMyProfile());
            }else {
                debugger;
                dispatch(stopSubmit('login',{_error: request.data.messages[0] }));
                request.data.resultCode === 10 && dispatch(getCaptcha());
            }
        })
        : AuthAPI.login(email, password, rememberMe, captcha).then(request => {
            if (!request.data.resultCode) {
                dispatch(getMyProfile());
            }else {
                request.data.resultCode === 10 && dispatch(getCaptcha());
                dispatch(stopSubmit('login',{_error: request.data.messages[0] }));
            }
        })
}

export const setLogout = () => (dispatch) => {
    AuthAPI.logout().then(request => {
        if (!request.data.resultCode) {
            dispatch(outAuth());
        }
    })
}

export const getMyProfile = () => (dispatch) => {
   return AuthAPI.auth().then(request => {
        if (!request.data.resultCode) {
            dispatch(setUserInfo(request.data.data))
            ProfileAPI.viewUserProfile(request.data.data.id).then(request => {
                dispatch(setUserInfoMe(request.data));
            })
        } else dispatch(outAuth());
    })
}
export const authSetTimeout = () => (dispatch) => {
    const auther = setTimeout((time) => {
        AuthAPI.auth().then(request => {
            if (request.data)
                dispatch(AuthSetTimeout());
        })
    }, 500);

};
export const requestStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(request => {
        dispatch(getUserStatus(request.data))
    })
};
export const setStatus = (status) => (dispatch) => {
    ProfileAPI.setStatus(status).then(request => {
        debugger
        if (!request.data.resultCode) {
            dispatch(getUserStatus(status))
        }
    })
};


export default ProfileReducer;