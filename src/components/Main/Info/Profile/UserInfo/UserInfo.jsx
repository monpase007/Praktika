import React, { useState} from 'react';
import style from './UserInfo.module.css';
import logo from '../../../../../assets/images/icon-avatar-16.jpg'
import Preloader from "../../../../smallComponents/Preloader/Preloader";
import MyStatus from "./MyStatusComponent/MyStatus";
import FormModalAboutMe from "./FormModalAboutMe/FormModalAboutMe";

const UserInfo = (props) => {


    const [modalIsOpen, setModalIsOpen] = useState(false)


    let updatePhoto = (e) => {
        if(e.target.files.length){
            let photo = e.target.files[0];
            props.setPhoto(photo);}
    };
    const setEditModal =(bool) => {
        setModalIsOpen(bool);
    }



    return (
        <div className={style.userInfo}>
            <div>
                {props.isAuth
                    ?<div className={style.avatarBox}>
                        <img className={style.avatar} src={props.userProfileInfoMe.photos.large || logo} alt=""/>
                        <label className={style.updateAvatarLabal}><input onChange={updatePhoto} className={style.updateAvatarBtn} type={'file'}/>Загрузить фото..</label>
                    </div>
                    :<Preloader/>}
            </div>

            <div>
                <div className={style.userName}>{props.userProfileInfo.login}</div>
                <MyStatus status={props.status} requestStatus={props.requestStatus} setStatus={props.setStatus} userId={props.userProfileInfo.id}/>
                <div className={style.aboutMe}><button onClick={()=>{setModalIsOpen(true)}} >Обо мне..</button></div>
                {modalIsOpen&&<FormModalAboutMe setUserData={props.setUserData} userProfileInfoMe={props.userProfileInfoMe} modalIsOpen={modalIsOpen} setModalIsOpen={setEditModal} StyleModal={props.StyleModal}/>}
            </div>
        </div>
    );
}

export default UserInfo;