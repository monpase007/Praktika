import React, {useState} from 'react';
import style from './NoteItem.module.css';
import Modal from "react-modal";


Modal.setAppElement('#root');


function NoteItem(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let id = props.id;

    /* логика для текстэрия в модальном окне*/
    let updateNotes = (e) => {
        let textNode = e.target.value;
        props.updateTextNotes(id, textNode);
    }
    let updateName = (e) => {
        let name = e.target.value;
        props.updateNameText(id,name);
    }
    /* логика для добавления заметки*/
    let addNotes = () => {
        props.addNote();
        props.value !== "" || props.value === "" ? setModalIsOpen(true) : setModalIsOpen(false);
    };
    let deleteNotes = () => {
        props.deleteNoteItem(id);
    };

    return (
        <div className={style.notes}>

            {/*Модальное окно для заметок*/}
            <div></div>
            <Modal className={style.modalWindow} isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
                   onRequestClose={() => setModalIsOpen(false)} style={props.notePage.StyleModal}>
                <a onClick={() => setModalIsOpen(false)} className={style.close}>&#10006;</a>
                <input onChange={updateName} className={style.nameNoteModal}  value={props.name}/>
                <div className={style.bodyModalNote}>
                    <textarea onChange={updateNotes} className={style.textArea} value={props.value}
                              name="notes"/>
                </div>
                <div className={style.footerModalNote}>
                    <button onClick={() => setModalIsOpen(false)} className={style.btn}>Close</button>

                </div>
            </Modal>

            {/*Непосредственно заметки*/}

            <div className={style.note}>
                <a onClick={() => setModalIsOpen(true)} className={style.linkModal}>
                    <span className={style.circleNote}>&bull;</span>
                    <span className={style.nameNote}>{props.name}</span>
                </a>
                <button className={style.btnNote} onClick={addNotes} title="Добавить заметку">&#10010;</button>
                <button className={style.btnNote} onClick={() => setModalIsOpen(true)}
                        title="Изменить заметку">&#9998;</button>
                <button className={style.btnNote} onClick={deleteNotes} title="Удалить заметку">&#10006;</button>
            </div>

        </div>
    );
}

export default NoteItem;