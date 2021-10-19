import React from 'react';
import './styles.css';
import QuestionItem from "../QuestionItem/QuestionItem";

function MathStatistics(props) {

    return (
        <div className='qna-module'>
            {props.question.map(el => {
                return (
                    <QuestionItem question={el.text} likeCount={el.likeCount} answer={el.answer} id={el.id} isAssessment={el.isAssessment} />
                )
            })}
        </div>
    );
}

export default MathStatistics;