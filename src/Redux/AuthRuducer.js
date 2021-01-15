const AUTH_SET_TIMOUT = "AUTH_SET_TIMOUT";





let initialState = {


};

let UsersReducer = (state = initialState,action) => {
    switch (action.type) {
        case AUTH_SET_TIMOUT:{
            return {
                ...state,
            }
        }
        default: return state;
    }
};

export const AuthSetTimeout = (userId) => ({type: AUTH_SET_TIMOUT});

export default UsersReducer;