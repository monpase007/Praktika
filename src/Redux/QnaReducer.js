import {v4 as uuidv4} from 'uuid';

let initialState = {
    qna: {
        maths: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Что такое TCP/IP',
                answer: [
                    {
                        id: uuidv4(),
                        user: 'Анастасия',
                        url: 'https://image.flaticon.com/icons/png/512/64/64572.png',
                        text: 'Это нужно задавать в разделе "Сети"'
                    },
                    {
                        id: uuidv4(),
                        user: 'Анастасия',
                        url: 'https://image.flaticon.com/icons/png/512/64/64572.png',
                        text: 'Это протокол в администрировании сетей'
                    },
                    {
                        id: uuidv4(),
                        user: 'Олег',
                        url: 'https://image.flaticon.com/icons/png/512/64/64572.png',
                        text: 'Сетевая модель передачи данных, представленных в цифровом виде'
                    },
                    {
                        id: uuidv4(),
                        user: 'Алибек',
                        url: 'https://image.flaticon.com/icons/png/512/64/64572.png',
                        text: 'Такое не знать, себя не уважать, это модель описывает способ передачи данных от источника информации к получателю'
                    },
                ]
            },
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как выглядит формула диффиринцирования?? ',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            },
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Эмпирическое распределение на выборке, что это такое?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            },
        ],
        algebra: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
        network: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
        tips: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
        tv: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
        graphics: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
        obj: [
            {
                id: uuidv4(),
                likeCount: 1,
                isAssessment: false,
                text: 'Всем привет, как задавать здесь вопрос?',
                answer: [
                    {id: uuidv4(), text: 'Ну ты че, такие вопросы не задают уважающие себя люди, давай не тупи'}
                ]
            }
        ],
    }
};

const ADD_QUESTION = "ADD_QUESTION";
const ADD_ANSWER = "ADD_ANSWER";
const PLUS_LIKE = "PLUS_LIKE";
const MINUS_LIKE = "MINUS_LIKE";

export const addQuestion = (text, subjectName, date) => ({type: ADD_QUESTION});
export const addAnswer = (text, subjectName, id, date) => ({type: ADD_ANSWER});
export const plusLike = (subjectName, id, status) => ({type: PLUS_LIKE, status, id, subjectName});
export const minusLike = (subjectName, id, status) => ({type: MINUS_LIKE, status, id, subjectName});

const QnaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION: {
            return {
                ...state,
                qna: {...state.qna, [action.subjectName]: action.question.concat(state.qna[action.subjectName])}
            }
        }
        case PLUS_LIKE: {
            return {
                ...state,
                qna: {
                    ...state.qna, [action.subjectName]: state.qna[action.subjectName].map(el => {
                        if (action.id === el.id && !el.isAssessment) {
                            el.likeCount++
                            el.isAssessment = true;
                        }
                        return el
                    })
                }
            }
        }
        case MINUS_LIKE: {
            return {
                ...state,
                qna: {
                    ...state.qna, [action.subjectName]: state.qna[action.subjectName].map(el => {
                        if (action.id === el.id && !!el.isAssessment) {
                            el.likeCount--;
                            el.isAssessment = false;
                        }
                        return el
                    })
                }
            }
        }
        case ADD_ANSWER: {
            return {
                ...state,
                qna: {
                    ...state.qna, [action.subjectName]: state.qna[action.subjectName].map(el => {
                        if (action.id === el.id) el.answer = el.answer.concat(action.text)
                        return el
                    })
                }
            }
        }
        default:
            return state;
    }

};


export default QnaReducer;