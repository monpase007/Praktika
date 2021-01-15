import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {validateEmpty, validateMaxLength} from "../../../Utils/validate";
import {ButtonForm, ValidateInput} from "../../../smallComponents/ValidateComponent/ValidateComponent";

let maxLength = validateMaxLength(30)

const LoginReduxForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={`${style.wrapper} ${style.login}`}><Field validate={[validateEmpty, maxLength]}
                                                                      name={'login'} component={ValidateInput}
                                                                      type={"text"}
                                                                      placeholder={'Введите логин..'}/></div>
            <div className={`${style.wrapper} ${style.password}`}><Field validate={[validateEmpty, maxLength]}
                                                                         name={'password'} component={ValidateInput}
                                                                         type={'password'}
                                                                         placeholder={'Введите пароль..'}/></div>
            <div className={`${style.wrapper} ${style.rememberMe}`}><label><Field name={'rememberMe'}
                                                                                  component={'input'}
                                                                                  type="checkbox"/><span>Запонить меня</span></label>
            </div>
            {props.captchaURL &&
            <div className={`${style.wrapper} ${style.captcha}`}>
                <img src={props.captchaURL} alt="captcha"/>
                <Field validate={[validateEmpty, maxLength]} name={'captcha'} component={ValidateInput}
                       type={'text'} placeholder={'Введите капчу..'}/>
            </div>}
            {props.error && <div className={style.sumError}>{props.error}</div>}
            <Field text={'Войти'} component={ButtonForm}/>
        </form>
    )
};

let ReduxFormName = reduxForm({form: 'login'})(LoginReduxForm)

const Login = (props) => {
    let authInSocialNetwork = (values) => {
        props.setLogin(values.login, values.password, values.rememberMe, values.captcha);
    };
    return (
        <div className={style.mainLoginWrapper}>
            <h1>Авторизация</h1>
            <ReduxFormName captchaURL={props.captchaURL} onSubmit={authInSocialNetwork}/>
        </div>
    )

};


export default Login;