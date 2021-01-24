import React, {useState} from 'react';
import style from "./Note.module.css"
import NoteItem from "./NodeItem/NoteItem";
import Background from '../../../../../../assets/images/noteBg.jpg'
import Modal from "react-modal";

const Note = (props) => {



    let Notes = props.notePage.Notes.map(n => <NoteItem updateTextNotes={props.updateNotes}
                                                        updateNameText={props.updateName}
                                                        addNote={props.addNote}
                                                        deleteNoteItem={props.deleteNotes}
                                                        notePage={props.notePage}
                                                        value={n.values} id={n.id} name={n.name}/>);
    let addNote = () => {
        props.addNote();
    };
    return (
        <div className={style.mainWrap}>
            <div className={style.bg} style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: '-600px -600px'
            }}/>
            <div className={style.header}>
                <span>Мои заметки</span>
            </div>
            <div className={style.wrap}>
                <div className={style.btnWrap}>
                    <button onClick={addNote} className={style.btn} title="Добавить заметку">&#10010; Добавить заметку</button>
                </div>
                {Notes}
            </div>
        </div>
    );
}

export default Note;