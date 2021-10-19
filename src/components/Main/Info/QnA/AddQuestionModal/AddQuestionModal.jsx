import React, {useState} from 'react';
import './styles.css';
import { useHistory, useLocation,useRouteMatch  } from "react-router-dom";
import Popup from "../../../../Popap/Popap";
import {useDispatch} from "react-redux";
import {addQuestion} from "../../../../../Redux/QnaReducer";
function AddQuestionModal (props) {
    const dispatch = useDispatch()
    const [textQuestion,setTextQuestion] = useState()
    const location = useLocation()
    const pathSwitch = (path) => {
        switch (path) {
            case 'qna/maths': return 'maths'
            case 'qna/network': return 'network'
            case 'qna/algebra': return 'algem'
            case 'qna/tips': return 'tips'
            case 'qna/tv': return 'teorver'
            case 'qna/graphics': return 'graphics'
            case 'qna/obj': return 'obj'
        }
    }

    const addQuestionFunc = () => {
        dispatch(addQuestion(textQuestion,pathSwitch(location.pathname)))
    }

    return (
        <div className='add-question-modal'>
           <Popup del={props.out} action={addQuestionFunc} titleAction={'Добавление вопроса'}>
               <div >
                   <textarea className='add-question-textarea' placeholder={'введите вопрос'}/>
               </div>
           </Popup>
        </div>
    );
}

export default AddQuestionModal;