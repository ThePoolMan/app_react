import React from "react";
import { connect } from "react-redux";
import {removeNotes, saveNotes} from "../store/actions/actions";
import { Link } from 'react-router-dom';

class EditNotice extends React.Component{

    removes(){
        const arr = this.props.note;
        arr.splice(this.props.thisID,1) ;
        this.props.removeNote(arr);
    }

    saves(){
        const arr = this.props.note;
        arr[this.props.thisID] = {
            id: this.props.thisID,
            headers: this.testInputHeader.value,
            txt: this.testInputNoteText.value
        };
        this.props.saveNote(arr);
    }

    render()
    {
        const id = this.props.thisID;
        const arr = this.props.note;
        return (
            <div>
                <div><Link to='/'><button className='buttonNotice back'>Назад</button></Link></div>
                <div className='Notice child'>
                  <textarea className='Notice-header textarea' ref={(input) => this.testInputHeader = input} defaultValue={arr[id].headers}/>
                <textarea className='Notice-text textarea text' ref={(input) => this.testInputNoteText = input} defaultValue={arr[id].txt}/>
                </div>
                <div className='inline'><Link to='/'><button className='buttonNotice save' onClick={this.saves.bind(this)}>Сохранить</button></Link>
                    <Link to='/'><button className='buttonNotice remove' onClick={this.removes.bind(this)}>Удалить</button></Link></div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        thisID: state.notes.thisIndex,
        note: state.notes.notices
    };
};

const mapActionsToProps = (dispatch)=>{
    return{
        removeNote: (arr) => {dispatch(removeNotes(arr))},
        saveNote: (arr) => {dispatch(saveNotes(arr))}
    };
};

export default connect(mapStateToProps, mapActionsToProps)(EditNotice);