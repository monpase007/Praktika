import React from "react";
import style from './ValidateComponent.module.css'
import warn from '../../../assets/images/warning.png'


export const ValidateInput = ({input, meta, ...props}) => {
    let condition = meta.error && meta.touched;
    return (
        <div className={style.wrapper}>
            <input className={`${style.input} ${condition ? style.error : style.notError} `}  {...input} {...props} />
            {condition?<div className={style.box}>
                <img className={style.warningImg} src={warn}/>
                <div className={style.warnMessage}>{meta.error}</div>
            </div>: <span> </span>}
        </div>
    )
};
export const ValidateTextArea = ({input, meta, ...props}) => {
    let condition = meta.error && meta.touched;
    return (
        <div className={style.wrapper}>
            <textarea
                className={`${style.textArea} ${condition ? style.error : style.notError} `}  {...input} {...props} />
            {condition ? <span className={style.box}><img className={style.warningImg} src={warn}/><div
                className={style.warnMessage}>{meta.error}</div></span> : ''}
        </div>
    )
};


export const ButtonForm = ({text, ...props}) => {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}