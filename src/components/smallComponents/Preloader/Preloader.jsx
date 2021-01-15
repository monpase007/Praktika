import React from "react";
import style from './Preloader.module.css'
import preloader from "../../../assets/preloader/preloader.svg";

const Preloader = (props) => {
    return <div className={style.preloaderWrap}>
        <img src={preloader} alt=""/>
    </div>
}
export default Preloader;