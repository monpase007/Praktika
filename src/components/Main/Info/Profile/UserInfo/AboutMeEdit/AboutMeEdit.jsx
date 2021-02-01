import style from "./AboutMeEdit.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {ValidateInput, ValidateTextArea} from "../../../../../smallComponents/ValidateComponent/ValidateComponent";


const AboutMeEdit = ({userProfileInfoMe, setProfileData, pristine, submitting, ...props}) => {
    return (
        <form className={style.aboutMeBox} onSubmit={props.handleSubmit}>
            <div className={style.headerBlock}>
                <span className={style.AboutMe}>Информация обо мне</span>
            </div>
            <div className={style.dataInfoMe}>
                <div className={style.fieldBox}>
                    <span>Полное имя:</span>
                    <Field placeholder="Полное имя.." name={"fullName"} component={ValidateInput}/>
                </div>
                <div className={style.fieldBox}>
                    <span>Обо мне:</span>
                    <Field placeholder="Обо мне.." name={"aboutMe"} component={ValidateTextArea}/>
                </div>
                <div className={style.fieldBox}>
                    <span>Ищет работу:</span>
                    <Field name={"lookingForAJob"} id={'lookingForAJob'} component={ValidateInput} type={'checkbox'}/>
                </div>
                <div className={style.fieldBox}>
                    <span>Специальные навыки:</span>
                    <Field placeholder={`Твои специальные навыки..`} name={"lookingForAJobDescription"}
                           component={ValidateInput}/>
                </div>
                {Object.keys(userProfileInfoMe.contacts).map(key => {
                    return <div className={style.fieldBox}>
                        <span>{key}</span>
                        <Field key={key} placeholder={`${key}..`} name={`contacts.${key}`} component={ValidateInput}/>
                    </div>
                })}
                {props.error && props.error}
                <button disabled={pristine || submitting}>Сохранить</button>
            </div>


        </form>
    )
};
const ReduxAboutMeEditForm = reduxForm({
    form: "ProfileDataForm",
})(AboutMeEdit);
export default ReduxAboutMeEditForm