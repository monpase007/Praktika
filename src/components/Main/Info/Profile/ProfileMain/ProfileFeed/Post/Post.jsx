import React, {useState} from 'react';
import style from './Post.module.css';
import Modal from "react-modal";

Modal.setAppElement = function (s) {
};
Modal.setAppElement('#root');

function Post(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    let id = props.id;

    let deletePost = () => {
        props.deletePost(id);
    };

    let updatePost = (e) => {
        let text = e.target.value;
        props.updateTextPost(id, text);
    };

    let likePlus = () => {
        props.likePlusPost(id, props.likeFlag);
    };
    let likeMinus = () => {
        props.likeMinusPost(id, props.likeFlag);
    };
    let ref = React.createRef();
    let ViewComment = () => {
        ref.current.preventDefault();
        this.className.toggle(style.commentBlockView)
    };
    return (
        <div className={style.posts}>
            {/*Модальное окно*/}
            <Modal className={style.modalWindow} isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
                   onRequestClose={() => setModalIsOpen(false)} style={props.style}>
                <a onClick={() => setModalIsOpen(false)} className={style.close}>&#10006;</a>
                <div className={style.bodyModal}>
                    <span className={style.span}>Изменение поста &#9998;</span>
                    <textarea onChange={updatePost} className={style.textArea} value={props.value}/>
                </div>
                <div className={style.footerModalNote}>

                </div>
            </Modal>
            <div className={style.user}>
                <img className={style.img}
                     src="https://sun7-7.userapi.com/impf/c845419/v845419980/19601a/fYUtyCJnvO4.jpg?size=200x0&quality=90&sign=ef7740b6c1729cf94818347692822a20&ava=1"
                     alt="аватарка"/>
                <div className={style.headerPost}>
                    <div>
                        <div className={style.name}>monpase007</div>
                        <div className={style.date}>25 ноя 2020г.</div>
                    </div>
                    <div className={style.btnsPosts}>
                        <span className={style.option} onClick={() => setModalIsOpen(true)}
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
                <div ref={ref}  className={style.commentBlockDontView}>
                    <div className={style.comments}>

                    </div>
                    <div  className={style.commentWrapInput}>
                        <textarea className={style.textAreaComment} type="text" placeholder="Оставить комментарий.."/>
                        <span onClick={ViewComment} className={style.btnSentComment} type="button"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Post;