import React from "react";
import style from './ButtonPopup.module.css'

const ButtonPopup = ({title,action,...props}) => {
    return(
        <div className={style.btnBox}>
            <button className={style.btn} onClick={action}>{title}</button>
        </div>
    )
}
export default ButtonPopup