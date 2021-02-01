import React, {useState} from "react";
import style from "./FormModalAboutMe.module.css"
import cn from 'classnames';
import Modal from "react-modal";
import AboutMe from "../AboutMe/AboutMe";
import AboutMeEdit from "../AboutMeEdit/AboutMeEdit";

const FormModalAboutMe = ({userProfileInfoMe,modalIsOpen,setModalIsOpen,...props}) => {

    const [editModForm, setEditModeForm] = useState(false);
    const setNewUserData = (values) => {
        props.setUserData(values,()=>{setEditModeForm(false)})
    }
    return (
        <div>
            <Modal className={cn(style.modalWindow,{[style.noScroll]: editModForm})} isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
                   onRequestClose={() => setModalIsOpen(false)} style={props.StyleModal}>
                {!editModForm
                    ?<AboutMe userProfileInfoMe={userProfileInfoMe}/>
                    :<AboutMeEdit onSubmit={setNewUserData} userProfileInfoMe={userProfileInfoMe} initialValues={userProfileInfoMe}/>
                }
                {!editModForm && <button onClick={()=>{setEditModeForm(true)}}>edit</button>}
                {editModForm && <button onClick={()=>{setEditModeForm(false)}}>cancel</button>}
                <button onClick={()=>{setModalIsOpen(false)}}>close</button>

            </Modal>
        </div>
    )
}
export default FormModalAboutMe