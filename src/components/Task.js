import React, { Component } from 'react';
import { deleteTask } from '../actionCreators/actionCreatiors';
import { connect } from 'react-redux';

class Task extends Component {

    handleDelete = (id) => {
        this.props.deleteTask(id);
    }
    
    render() {
        
        const {text, priority, deadline, checkUp, creationDate, id} = this.props.task;
        return(
            <div>
                <h3>{text}</h3>
                <div>Priority: {priority}</div>
                <div>Deadline: {deadline}</div>
                <div>CheckUp: {checkUp}</div>
                <div>Creation Date: {creationDate}</div>
                <button onClick={() => this.handleDelete(id)}>Delete</button>
            </div>
        );
    }
}

export default connect(null,{ deleteTask })(Task);