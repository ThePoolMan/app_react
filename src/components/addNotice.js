import React, {Component} from "react";
import { connect } from "react-redux";
import { addNotes} from "../store/actions/actions";
import { Link } from 'react-router-dom';

class AddNotice extends Component{

    addNote(){
        const arr = this.props.note;
        let check = 0;
        for (let i = 0; i < arr.length; i++)
        {
            if(arr[i].headers === this.testInputHeader.value) {
                check = 1;
            }
        }
        if(check === 0) {
            const temp = {
                id: this.props.note.length,
                headers: this.testInputHeader.value,
                txt: this.testInputNoteText.value
            };
            arr.push(temp);
            this.props.add(arr);
        }
        else alert('Заметка с таким именем существует!');
    };

    render()
    {
        return(
            <div>
                <Link to='/'><button className='buttonNotice back'>Назад</button></Link>
                <div className='Notice child'>
                    <textarea className='Notice-header textarea' ref={(input) => this.testInputHeader = input} defaultValue='Заголовок'/>
                    <textarea className='Notice-text textarea text' ref={(input) => this.testInputNoteText = input} defaultValue='Текст заметки'/>
                </div>
                <Link to='/'><button className='buttonNotice save' onClick={this.addNote.bind(this)}>Сохранить</button></Link>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        note: state.notes.notices
    };
};

const mapActionsToProps = (dispatch)=>{
    return{
        add: (arr) => {dispatch(addNotes(arr))}
    };
};

export default connect(mapStateToProps, mapActionsToProps)(AddNotice);




