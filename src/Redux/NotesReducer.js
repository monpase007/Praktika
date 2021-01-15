// define constants action type

const ADD_NOTES = 'ADD-NOTES';
const DELETE_NOTES = 'DELETE-NOTES';
const UPDATE_NOTES = 'UPDATE-NOTES';
const UPDATE_NOTES_NAME = 'UPDATE-NOTES-NAME';

// define functions create obj action

export const addNotesCreate = (id) => ({type: ADD_NOTES, id: id});
export const deleteNotesCreate = (id) => ({type: DELETE_NOTES, id: id});
export const updateNotesCreate = (id, text) => ({type: UPDATE_NOTES, id: id, text: text});
export const updateNotesNameCreate = (id, text) => ({type: UPDATE_NOTES_NAME, id: id, text: text});

//bind state NotesPage
let initializeState = {
    Notes: [
        {id: 4, name: "Продукуты", values: "Купить покушать"},
        {id: 3, name: "Быстрикова экзамен", values: "Сдать Экзамен"},
        {id: 2, name: "Список задач", values: "Поотжиматься и почилить"},
        {id: 1, name: "Планы", values: "Выучить React.js"}
    ],
    NameNotesTemp: '',
    StyleModal: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(68,68,68,0.65)'
        }
    }
};

//Reducer
const NotesReducer = (state = initializeState, action) => {

    // " i " it's template variable

    let i, stateCopy;

    switch (action.type) {
        case ADD_NOTES:
            let temp = state.Notes[0].id + 1;
            return {
                ...state,
                Notes: [{id: temp, name: "Новая заметка", values: ""}, ...state.Notes],
            };
        case DELETE_NOTES:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {
                ...state,
                Notes: [...state.Notes]
            };
            stateCopy.Notes.splice(i, 1);
            return stateCopy;
        case UPDATE_NOTES:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {
                ...state,
                Notes: [...state.Notes]
            };
            stateCopy.Notes[i].values = action.text;
            return stateCopy;
        case UPDATE_NOTES_NAME:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {
                ...state,
                Notes: [...state.Notes]
            };
            stateCopy.Notes[i].name = action.text;
            return stateCopy;
        default:
            return state;
    }
};

export default NotesReducer;