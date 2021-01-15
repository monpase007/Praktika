import {followAPI, userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const UPDATE_NUMBER_ACTIVE = 'UPDATE_NUMBER_ACTIVE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_PROGRESS_FOLLOWING = 'IS_PROGRESS_FOLLOWING';


let initialState = {
    users: [
        // {id: 1, name:'Ura', uniqueUrlName: null, photos:{large:'', small:''}, status:'Духом не падешь, силой взять не смогут',followed:true},
        // {id: 2, name:'Vitya', uniqueUrlName: null, photos:{large:'', small:''}, status:'Кто не покупал акции, тот не падал',followed:true},
        // {id: 3, name:'Sega', uniqueUrlName: null, photos:{large:'', small:''}, status:'Майнкрафт моя жизнь',followed:true}
    ],
    totalCount: 49,
    sizePage: 7,
    currentPage: 1,
    isFetching: false,
    isFollowingUser: [2,3]

};

const UsersTwoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId)
                        return {...u, followed: true}
                    else return u;
                })}}
                case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId)
                        return {...u, followed: false}
                    else return u;
                })}}
        case SET_USERS:{
            return {
                ...state,
                users: [...action.users]
            }}
        case UPDATE_NUMBER_ACTIVE: {
            return {
                ...state,
                currentPage: action.number
            }}
        case SET_TOTAL_COUNT: {
            return{
                ...state,
                totalCount: action.totalCount
            }}
        case IS_FETCHING: {
            return{
                ...state,
                isFetching: action.isFetching
            }}
            case IS_PROGRESS_FOLLOWING: {
            return{
                ...state,
                isFollowingUser: action.isProgressFollowing
                    ? [...state.isFollowingUser, action.isFollowingUser]
                    : state.isFollowingUser.filter(id => id !== action.isFollowingUser)
            }}

        default: return state;
    }
};

export const followSuccessful = (userId) => ({type:FOLLOW, userId})
export const unfollowSuccessful = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const updateNumberActive = (number) => ({type:UPDATE_NUMBER_ACTIVE, number})
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount})
export const isFetchingPreloader = (isFetching) => ({type:IS_FETCHING, isFetching})
export const isProgressFollowing = (isFollowingUser, isProgressFollowing) => ({type:IS_PROGRESS_FOLLOWING, isFollowingUser, isProgressFollowing })


export const getUsers = (sizePage,currentPage) => (dispatch) => {
    dispatch(isFetchingPreloader(true));
    userAPI.getUser(sizePage, currentPage)
        .then(data => {
        dispatch(isFetchingPreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount))});
};
export const follow = (userId) => (dispatch) => {
    dispatch(isProgressFollowing(userId,true));
    followAPI.unfollow(userId).then(request => {
        if(!request.data.resultCode){
            dispatch(followSuccessful(userId));
            dispatch(isProgressFollowing(userId,false)) ;}
    })
};
export const unfollow = (userId) => (dispatch) => {
    dispatch(isProgressFollowing(userId,true));
    followAPI.unfollow(userId).then(request => {
        if(!request.data.resultCode){
            dispatch(unfollowSuccessful(userId));
            dispatch(isProgressFollowing(userId,false)) ;}
    })
};




export default UsersTwoReducer;