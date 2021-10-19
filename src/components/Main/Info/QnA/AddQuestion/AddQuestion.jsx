import React, {useState} from 'react';
import './styles.css';

import AddQuestionModal from "../AddQuestionModal/AddQuestionModal";
function AddQuestion (props) {
    const [isAdding, setIsAdding] = useState(false)

    return (
        <>
            <div className='add-question' onClick={()=>{setIsAdding(true)}}>
                &#10010; Добавить вопрос
            </div>
            {isAdding && <AddQuestionModal out={()=>{setIsAdding(false)}} />}
        </>

    );
}

export default AddQuestion;