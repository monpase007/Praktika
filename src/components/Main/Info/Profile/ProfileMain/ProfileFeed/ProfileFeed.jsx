import React, {useState} from 'react';
import style from './ProfileFeed.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import logo from "../../../../../../assets/images/icon-avatar-16.jpg";
import send from "../../../../../../assets/images/sendPost/send.svg";
import clip from "../../../../../../assets/images/sendPost/clip.svg";


function ProfileFeed(props) {
    const [photo, setPhoto] = useState(null);
    const [newTextPost, setNewTextPost] = useState('');
    let posts = props.profilePage.Posts.map(p => <Post deletePost={props.deletePost}
                                                       key={p.id}
                                                       updateTextPost={props.updatePost}
                                                       likePlusPost={props.likePlus}
                                                       likeMinusPost={props.likeMinus}
                                                       style={props.profilePage.StyleModal}
                                                       id={p.id} value={p.values}
                                                       likeCount={p.likeCount}
                                                       url={p.urlImg}
                                                       likeFlag={p.likeFlag}
                                                       dateCreate={p.dateCreate}
                                                       avatar={props.avatar}/>)

    let addPost = () => {
        if(newTextPost){
            props.addPost(newTextPost, photo);
            setPhoto(null)
            setNewTextPost('')
        }
    };
    const changeTextPost = (e) => {
        setNewTextPost(e.target.value)
    }

    function getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setPhoto(reader.result);
            console.log(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

    }

    const addPhoto = (e) => {
        getBase64(e.target.files[0])
    };


    return (
        <div className={style.profileFeed1}>
            <span className={style.addPostSpanBox}>Мои посты</span>
            <div className={style.wrapInputAndIcon}>
                <input className={style.inputPost} onChange={changeTextPost}
                       placeholder='Напишите учебный пост для одногруппников...' value={newTextPost} type="text"/>
                <div className={`${style.imgBox} ${style.imgBoxSend}`}>
                    <img onClick={addPost} className={style.imgSend} src={send} alt="" title={'Добавить пост'}/>
                </div>
                <label>
                    <div className={`${style.imgBox} ${style.imgBoxClip}`}>
                        <img className={style.imgClip} src={clip} title={'Добавить изображение'} alt=""/>
                    </div>
                    <input className={style.inputClipOut} onChange={addPhoto} type="file"/>
                </label>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    );
}


export default ProfileFeed;