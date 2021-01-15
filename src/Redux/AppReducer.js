import {getMyProfile} from "./ProfileReducer";

const INITIALIZED = "INITIALIZED";

let initialState = {
    initialized: false
};


const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }

};

export const initialize = () => ({type: INITIALIZED});

export const initializeApp = () => (dispatch) =>{
    dispatch(getMyProfile()).then(()=>{
        dispatch(initialize());
    })
};

export default ProfileReducer;