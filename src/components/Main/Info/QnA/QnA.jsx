import React from 'react';
import style from './QnA.module.css';
import {NavLink, Redirect, Route, Router} from "react-router-dom";
import MathStatistics from "./MathStatistics/MathStatistics";
import AdminNetwork from "./AdminNetwork/AdminNetwork";
import Algem from "./Algem/Algem";
import TIPS from "./TIPS/TIPS";
import TV from "./TV/TV";
import Graphics from "./Graphics/Graphics";
import OBJ from "./OBJ/OBJ";
import AddQuestion from "./AddQuestion/AddQuestion";
import {useSelector} from "react-redux";


function QnA() {

    const qna = useSelector(state=> state.QnaReducer.qna)


    return (
        <div className={style.bodyQnA}>
            <div className={style.wrapWrapHeader}>
                <div className={style.wrapHeader}>
                    <div className={style.header}>
                        <div className={style.text}>
                            <h1>QnA</h1>
                            <h3>Задай вопрос и получи ответ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.QnA}>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/maths'>Матстат</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/network'>Сети</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/algebra'>Алгем</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/tips'>ТИПС</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/tv'>Теорвер</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/graphics'>Графика</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/obj'>ОБЖ</NavLink>
            </div>
            <AddQuestion/>
            <Route exact path='/qna/' render={() => <Redirect to={'/qna/maths'}/>}/>
            <Route path='/qna/maths' render={() => <MathStatistics question={qna.maths}/>}/>
            <Route path='/qna/network' render={() => <AdminNetwork question={qna.network}/>}/>
            <Route path='/qna/algebra' render={() => <Algem question={qna.algebra}/>}/>
            <Route path='/qna/tips' render={() => <TIPS question={qna.tips}/>}/>
            <Route path='/qna/tv' render={() => <TV question={qna.tv}/>}/>
            <Route path='/qna/graphics' render={() => <Graphics question={qna.graphics}/>}/>
            <Route path='/qna/obj' render={() => <OBJ question={qna.obj}/>}/>
        </div>
    );
}

export default QnA;