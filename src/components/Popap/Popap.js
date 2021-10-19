import React, {useState} from 'react'
import style from './Popap.module.css'
import {useDispatch} from 'react-redux'
import closeImg from '../../assets/images/popap/close.svg'
import useEventListener from '@use-it/event-listener'
import {deletePostCreate, updatePostCreate} from "../../Redux/ProfileReducer";
import ButtonPopup from "../ButtonPopap/ButtonPopup";
import warning from '../../assets/images/popap/warining.svg'
const ESCAPE_KEYS = ['27', 'Escape'];
const Popup = ({del,data, action, titleAction,...props}) => {
    const [isWarning, setIsWarning] = useState(false);
    function handler({key}) {
        if (ESCAPE_KEYS.includes(String(key))) {
            del();
        }
    }
    useEventListener('keydown', handler);

    const dispatch = useDispatch()
    return (
        <div className={style.popupWrapper}>
            <div className={style.popupBackground} onClick={del} />
            <div className={style.popupContainer}>
                {
                    !isWarning
                        ?<>
                            <div className={style.popupHeader}>
                                <div className={style.bodyModal}>
                                    <span className={style.span}>{titleAction || 'Изменение поста'} &#9998;</span>
                                </div>
                                <span className={style.closeBtn} onClick={del} ><img src={closeImg} alt=""/></span>
                            </div>
                            {props.children}
                            <ButtonPopup title={'Сохранить'} action={ action? action: ()=>{
                                dispatch(updatePostCreate(data.id, data.text))
                                del();
                            }}/>
                            {!action && <ButtonPopup title={titleAction || 'Удалить пост'} action={action? action: ()=>{
                                setIsWarning(true);
                            }}/>}
                        </>
                        :<>
                        <div>
                            <div className={style.popupHeader}>
                                <div className={style.bodyModal}>
                                    <span className={`${style.span} ${style.spanWarning}`}><img src={warning} alt=""/>Внимание</span>
                                </div>
                                <span className={style.closeBtn} onClick={del} ><img src={closeImg} alt=""/></span>
                            </div>
                            <div className={style.warningText}>Вы точно хотите удалить пост?</div>
                            <ButtonPopup title={'Отмена'} action={()=>{
                                setIsWarning(false);
                            }}/>
                            <ButtonPopup title={titleAction || 'Удалить пост'} action={action ? action: ()=>{
                                dispatch(deletePostCreate(data.id))
                                setIsWarning(false)
                                del();
                            }}/>
                        </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Popup