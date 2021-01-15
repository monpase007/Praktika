// define constants action.type
import * as axios from "axios";
import {AuthAPI, ProfileAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_ID = 'SET_USER_ID';


// define function when return obj (action)




// bind state
let initialState = {
    userInfo: {
        aboutMe: 'я крутой чувак',
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    userId: '',

};


const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            debugger;
            return {
                ...state,
                userInfo: {...action.userInfo}
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                userId: {...action.userId}
            }
        }
        default: return state;
    }
};

export const setUserData = (userInfo) => ({type: SET_USER_DATA, userInfo});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});

export const getUserInfo = (userId) => (dispatch) => {
    dispatch(setUserId(userId));
    ProfileAPI.viewUserProfile(userId).then(request => {
       dispatch(setUserData(request.data));
    })
}

export default ProfileReducer;