import style from "./AboutMe.module.css";
import React from "react";

const AboutMe = ({userProfileInfoMe, ...props}) => {
    return (
        <div className={style.aboutMeBox}>
            <div className={style.headerBlock}>
                <span className={style.AboutMe}>Информация обо мне</span>
            </div>
            <div className={style.dataInfoMe}>
                <div className={style.itemAboutMe}>
                    <span className={style.textAboutMe}>Полное имя:</span>
                    <span className={style.textAboutMe}>{userProfileInfoMe.fullName}</span>
                </div>
                <div className={style.itemAboutMe}>
                    <span className={style.textAboutMe}>Ищет работу:</span>
                    <span className={style.textAboutMe}>{userProfileInfoMe.lookingForAJob?'Да':'Нет'}</span>
                </div>
                <div className={style.itemAboutMe}>
                    <span className={style.textAboutMe}>Специальные навыки: </span>
                    <span className={style.textAboutMe}>{userProfileInfoMe.lookingForAJobDescription? userProfileInfoMe.lookingForAJobDescription: 'Данные отсутствуют' }</span>
                </div>
                <div className={style.itemAboutMe}>
                    <span className={style.textAboutMe}>Контактные данные:</span>
                </div>
                {Object.keys(userProfileInfoMe.contacts).map(key => {
                    return userProfileInfoMe.contacts[key]
                        ? <div key={key} className={style.itemAboutMe}>
                            <span className={style.textAboutMe}>{key}:</span>
                            <a href={userProfileInfoMe.contacts[key]} target={"_blank"} className={style.textAboutMe}>{userProfileInfoMe.contacts[key]}</a>
                        </div>
                        : <div key={key} className={style.itemAboutMe}>
                            <span className={style.textAboutMe}>{key}:</span>
                            <span className={style.contactIsNull}>Данные отсутствуют</span>
                        </div>
                })}
            </div>
        </div>

    )
}
export default AboutMe