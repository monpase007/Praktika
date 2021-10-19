import React, {useState} from 'react';
import './styles.css';
import moment from 'moment';
import {useDispatch} from "react-redux";
import {minusLike, plusLike} from "../../../../../Redux/QnaReducer";
import arrow from '../../../../../assets/shevron.svg'

moment.lang('ru');
const QuestionItem = (props) => {
    const {question, likeCount, answer, id,isAssessment} = props
    const [isAnswer, setIsAnswer] = useState(false)
    // let date = new Date();
    // date.getDate();
    // const todayDate = date.toISOString().split('T')[0];
    const date = moment().format('DD.MM.YYYY');
    const dispatch = useDispatch()
    const editLikeCollBack = (status) => () => {
        if (status === 'plus')
            dispatch(plusLike('maths', id, status))
        else dispatch(minusLike('maths', id, status))
    }
    moment.lang('ru')
    return (
        <div className='question-item' style={{height: `${isAnswer ? answer.length * 110 + 210 : 200}px`}}>
            <div className='question-like'>
                <div className='upArrow' onClick={editLikeCollBack('plus')}/>
                <div className={`body ${isAssessment? 'likeOne': ''}`}>like {likeCount}</div>
                <div className='downArrow' onClick={editLikeCollBack('minus')}/>
            </div>
            <div className='question-text-box'>
                <div className='question-text'>
                    {question}
                    <div className='userNameD'>
                        Филиппов Юрий
                    </div>
                </div>
                {isAnswer && answer.map((el,index) => {
                    return (
                        <>
                            <div key={el.id} className='answer'>
                                {el.text}
                                <div>
                                    <div className='box-img'>
                                        <img className='img' src={el.url} alt=""/>
                                        <div className='nameUser'>{el.user}</div>
                                        <div className='dateAnswer'>{moment('2021/05/11').format('DD.MM.YYYY')}</div>
                                    </div>

                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
            <div className='question-date'>
                {moment(`2021/05/${10}`).format('DD.MM.YYYY')}
            </div>

            <div className='question-answer' onClick={() => {
                setIsAnswer(prev => !prev)
            }}>
                {/*<img className='img' src={arrow} alt="arrow" onClick={() => {*/}
                {/*    setIsAnswer(true)*/}
                {/*}}/>*/}
                Ответов: {answer.length}
            </div>
            <div className='question-answer-you' >
                Ответить
            </div>

        </div>
    );
}

export default QuestionItem;