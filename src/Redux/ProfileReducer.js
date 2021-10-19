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
const SET_UPDATE_PHOTO = "SET_UPDATE_PHOTO";

// define function when return obj (action)


// bind state
let initialState = {
    Posts: [
        {
            id: 1,
            values: "Всем привет",
            urlImg: 'https://techrocks.ru/wp-content/uploads/2019/03/content_0e5a9923.jpg',
            comment: ["This is coool)*)"],
            dateCreate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            likeCount: 23,
            likeFlag: true
        }
    ],
    StyleModal: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
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
            let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            if (state.Posts.length === 0) {
                return {
                    ...state,
                    Posts: [{
                        id: 0,
                        values: action.text,
                        urlImg: action.url,
                        dateCreate: utc,
                        comment: [],
                        likeCount: 0,
                        likeFlag: false
                    }, ...state.Posts],
                    textImglink: '',
                    textUpdate: ''
                };
            } else {
                let temp = state.Posts[0].id + 1;
                return {
                    ...state,
                    Posts: [{
                        id: temp,
                        values: action.text,
                        urlImg: action.url,
                        dateCreate: utc,
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
        case SET_UPDATE_PHOTO: {
            return {
                ...state,
                userProfileInfoMe: {...state.userProfileInfoMe, photos: action.photos }
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
export const setUpdatePhoto = (photos) => ({type: SET_UPDATE_PHOTO, photos});
export const logout = () => ({type: LOGOUT});

export const setUserData = (UserData,setEditModForm) => (dispatch) => {
    ProfileAPI.setDataUser(UserData).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getMyProfile());
            setEditModForm();

        }else {

                dispatch(stopSubmit('ProfileDataForm',{_error : 'все ссылки должны быть валидными'}))

        }
    })
};

export const setPhoto = (photoFile) => (dispatch) => {
    ProfileAPI.setPhotoFile(photoFile).then(response => {
        dispatch(setUpdatePhoto(response.data.data.photos))
    })
}
export const getCaptcha = () => (dispatch) => {
    AuthAPI.captcha().then(response => {
        dispatch(captcha(response.data.url));
        dispatch(stopSubmit('login',{_error: "Введите капчу" }));
    })
}

export const setLogin = (email, password, rememberMe, captcha) => (dispatch) => {
    !captcha ?
        AuthAPI.login(email, password, rememberMe).then(response => {
            if (!response.data.resultCode) {
                dispatch(getMyProfile());
            }else {
                dispatch(stopSubmit('login',{_error: response.data.messages[0] }));
                response.data.resultCode === 10 && dispatch(getCaptcha());
            }
        })
        : AuthAPI.login(email, password, rememberMe, captcha).then(response => {
            if (!response.data.resultCode) {
                dispatch(getMyProfile());
            }else {
                response.data.resultCode === 10 && dispatch(getCaptcha());
                dispatch(stopSubmit('login',{_error: response.data.messages[0] }));
            }
        })
}

export const setLogout = () => (dispatch) => {
    AuthAPI.logout().then(response => {
        if (!response.data.resultCode) {
            dispatch(outAuth());
        }
    })
}

export const getMyProfile = () => (dispatch) => {
   return AuthAPI.auth().then(response => {
        if (!response.data.resultCode) {
            dispatch(setUserInfo(response.data.data))
            ProfileAPI.viewUserProfile(response.data.data.id).then(response => {
                dispatch(setUserInfoMe(response.data));
            })
        } else dispatch(outAuth());
    })
}
export const requestStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(getUserStatus(response.data))
    })
};
export const setStatus = (status) => (dispatch) => {
    ProfileAPI.setStatus(status).then(response => {
        if (!response.data.resultCode) {
            dispatch(getUserStatus(status))
        }
    })
};


export default ProfileReducer;