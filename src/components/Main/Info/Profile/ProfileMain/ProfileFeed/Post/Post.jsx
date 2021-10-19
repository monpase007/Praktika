import React, {useState} from 'react';
import style from './Post.module.css';
import Popup from "../../../../../../Popap/Popap";

function Post({id,...props}) {

    const [isEditPost, setIsEditPost] = useState(false);
        const [textPostUpdate, setTextPostUpdate] = useState(props.value);
    let data = {
        id: id,
        text:textPostUpdate
    }
    const deletePost = () => {
        props.deletePost(id);
    };

    const updatePost = (e) => {
        setTextPostUpdate( e.target.value)
    };

    const likePlus = () => {
        props.likePlusPost(id, props.likeFlag);
    };
    const likeMinus = () => {
        props.likeMinusPost(id, props.likeFlag);
    };
    const onEdit = () => {
        setIsEditPost(true);
    }
    return (
        <div className={style.posts}>
            <div className={style.user}>
                <img className={style.img}
                     src={props.avatar || 'https://static.mk.ru/upload/entities/2020/07/23/17/articles/detailPicture/91/9c/8a/7b/0fb74b1d41a574b376fbabd62d828b24.jpg'}
                     alt=""/>
                <div className={style.headerPost}>
                    <div>
                        <div className={style.name}>Филиппов Юрий</div>
                        <div className={style.date}>{props.dateCreate}</div>
                    </div>
                    <div className={style.btnsPosts}>
                        <span className={style.option} onClick={onEdit}
                           title='Редактировать пост'>&#9998;</span>
                        <span className={style.option} onClick={deletePost} title='Удалить пост'>&#10006;</span>
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.content}>
                    <div className={style.textPost}>{props.value}</div>
                    <img className={style.imgPost} src={props.url}/>
                </div>
                <div className={style.bottom}>
                    {props.likeFlag ?
                        <span className={`${style.btn} ${style.btnA} ${style.wrap}`} onClick={likeMinus}/> :
                        <span className={`${style.btn} ${style.wrap}` } onClick={likePlus}/>}
                    <span>{props.likeCount}</span>
                    <span className={`${style.comment} ${style.wrap}`}/>
                </div>
                {
                    isEditPost &&
                    <Popup title={'Изменение поста'}  del={()=>{setIsEditPost(false)}} data={data}>
                        <textarea onChange={updatePost} className={style.textArea} value={textPostUpdate}/>
                    </Popup>
                }
            </div>
        </div>
    );
}

export default Post;