import React from 'react';
import style from './ProfileFeed.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


function ProfileFeed(props) {
    let posts = props.profilePage.Posts.map(p => <Post deletePost={props.deletePost}
                                                       updateTextPost={props.updatePost}
                                                       likePlusPost={props.likePlus}
                                                       likeMinusPost={props.likeMinus}
                                                       style={props.profilePage.StyleModal}
                                                       id={p.id} value={p.values}
                                                       likeCount={p.likeCount}
                                                       url={p.urlImg}
                                                       likeFlag={p.likeFlag}/>)

    let addPost = (values) => {
        props.addPost(values.text, values.url);
        values.text = values.url = ''
    };
    return (
        <div className={style.profileFeed1}>
            {/*textarea area*/}
            <AddPostForm onSubmit={addPost}/>

            {/*Post area*/}
            <div className={style.posts}>
                {posts}
            </div>


        </div>
    );
}

const AddPostReduxForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.profileFeed}>
            <div className={style.wrapInput}>
                <Field className={style.inputPost} name={'text'} component={'textarea'} placeholder='Напишите учебный пост для одногруппников...'/>
            </div>
            <div className={style.wrapInput2}>
                <Field className={style.inputPost2} name={'url'} component={'textarea'} placeholder='Вставте ссылку на картинку...'/>
                <button className={style.btn}>Опубликовать</button>
            </div>
        </form>
    )
};
let AddPostForm = reduxForm({
    form: 'addPost'
})(AddPostReduxForm);

export default ProfileFeed;