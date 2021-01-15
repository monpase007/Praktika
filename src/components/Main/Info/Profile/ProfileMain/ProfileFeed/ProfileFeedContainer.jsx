import React from 'react';
import {
    addPostCreate,
    deletePostCreate, likePostMinusCreate, likePostPlusCreate, updatePostCreate
} from "../../../../../../Redux/ProfileReducer";
import ProfileFeed from "./ProfileFeed";

import {connect} from "react-redux";


let mapStateToProps = (state) => ({
        profilePage: state.profilePage
    });
let mapDispatchToProps = (dispatch) =>({
        addPost: (text,value) => {
            dispatch(addPostCreate(text,value));
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