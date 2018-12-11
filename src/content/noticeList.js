import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {goToNote} from "../store/actions/actions";
import connect from "react-redux/es/connect/connect";

class List extends Component {

    goToNotes(){
        this.props.go(this.props.id);
    }

    render() {
        return (
            <div key={this.props.id} className='inline'>
                    <Link to={`/editNotice/${this.props.id}`}>
                <button onClick={this.goToNotes.bind(this)} className='Notice'>
                    <h1 className='Notice-header'>{this.props.headers}</h1>
                    <p className='Notice-text'>{this.props.txt}</p>
                </button>
            </Link>
            </div>
        );
    }
}

List.propTypes = {
    headers: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

const mapStateToProps = (state)=>({
});

const mapActionsToProps = (dispatch)=>{
    return{
        go: (id) => {dispatch(goToNote(id))}
    };
};

export default connect(mapStateToProps, mapActionsToProps)(List);