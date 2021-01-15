const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const CHANGE_NUMBER = 'CHANGE_NUMBER';
const IS_FETCHING_PRELOADER = 'IS_FETCHING_PRELOADER';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCountUsers = (count) => ({type: SET_COUNT_USERS, count});
export const changeNumber = (number) => ({type: CHANGE_NUMBER, number});
export const isFetchingPreload = (isFetching) => ({type: IS_FETCHING_PRELOADER, isFetching});

let initialState = {
    users: [
        // {id: 1, name: 'Uriy', photos: {small: null, large: null}, status: 'Я крутой', followed:true }
    ],
    totalCount: 0,
    pageNumber: 1,
    pageSize: 10,
    isFetching: false

};

let UsersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: state.users.map(e =>{
                if(action.userId === e.id){
                    return { ...e, followed: true}
                }
                return e;
            })
        };
        case UNFOLLOW: return  {
            ...state,
            users: state.users.map(e => {
                if(action.userId === e.id){
                    return { ...e, followed: false}
                }
                return e;
            })
        };
        case SET_USERS: return  {
            ...state,
            users: [...action.users]
        };
        case SET_COUNT_USERS: return  {
            ...state,
            totalCount: action.count
        };
        case CHANGE_NUMBER: return  {
            ...state,
            pageNumber: action.number
        };
        case IS_FETCHING_PRELOADER: return  {
            ...state,
            isFetching: action.isFetching
        };
        default: return state;
    }
};

export default UsersReducer;