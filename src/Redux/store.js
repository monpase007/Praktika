import ProfileReducer from "./ProfileReducer";
import NotesReducer from "./NotesReducer";


let store = {
    _state: {
        NotesPage: {
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
        },
        ProfilePage: {
            Posts: [
                {id: 1,  values: "всее чиил",urlImg:'https://images4.alphacoders.com/921/thumb-1920-921846.jpg',  likeCount: 23}
            ],
            textUpdate: '',
            textImglink:'',
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
        }
    },
    dispatch (action) {

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage,action);
        this._state.NotesPage = NotesReducer(this._state.NotesPage,action);
        this._reRender();
    },

    getState(){
        return this._state;
    },
    _reRender: "",
    subscribe(renderAll) {
       this._reRender = renderAll;
    }
};

export default store;