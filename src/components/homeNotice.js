import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import List from "../content/noticeList";

class HomeNotice extends Component{

    showNotes(arr, index){
        return(
            <List
                key = {index}
                headers = {arr.headers}
                txt = {arr.txt}
                id = {index}
            />
        );
    }

    render()
    {
        return(
            <div>
                {this.props.note.map(this.showNotes)}
                <div>
                <Link to='/addNotice'><button className='buttonNotice add'>Добавить заметку</button></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    note: state.notes.notices
});

export default connect(mapStateToProps)(HomeNotice);