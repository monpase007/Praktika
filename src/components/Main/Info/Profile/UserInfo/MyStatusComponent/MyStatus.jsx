import React from 'react';
import style from './MyStatus.module.css'

class  MyStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };
    componentDidMount() {
        this.props.requestStatus(this.props.userId);
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    };
    deActivateEditMode = (e) =>{
        this.setState({
            editMode: false
        })
    };
    setTimoutDeActivate = () => {
        setTimeout(this.deActivateEditMode, 100);

    }
    saveStatus = () =>{
        this.props.setStatus(this.state.status);
        this.deActivateEditMode();
    };
    onStatusChange =(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div className={style.statusText}>
                        <span onClick={this.activateEditMode} >{this.props.status || 'Учиться! Учиться! И еще раз - Учиться!'}</span>
                    </div>
                    : <div className={style.statusInputBox}>
                        <textarea className={style.statusInput} onBlur={this.setTimoutDeActivate}  value={this.state.status} autoFocus={true}  onChange={this.onStatusChange} type="text"/>
                        <button className={style.btn} onClick={this.saveStatus}>Сохранить</button>
                    </div>
                }
            </div>
        )
    }
};

export default MyStatus;