import React from 'react';
import {
    addPostCreate,
    deletePostCreate, likePostMinusCreate, likePostPlusCreate, updatePostCreate
} from "../../../../../../Redux/ProfileReducer";
import ProfileFeed from "./ProfileFeed";

import {connect} from "react-redux";


let mapStateToProps = (state) => ({
        profilePage: state.profilePage,
        avatar: state.profilePage.userProfileInfoMe.photos.small
    });
let mapDispatchToProps = (dispatch) =>({
        addPost: (text,value,photo=null) => {
            dispatch(addPostCreate(text,value,photo));
        },
        deletePost: (id) => {
            dispatch(deletePostCreate(id));
        },
        updatePost: (id, text) => {
            dispatch(updatePostCreate(id, text));
        },
        likePlus: (id,likeFlag) => {
                dispatch(likePostPlusCreate(id));
        },
        likeMinus: (id,likeFlag) => {
                dispatch(likePostMinusCreate(id));
        }
    });

const   ProfileFeedContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);


export default ProfileFeedContainer;