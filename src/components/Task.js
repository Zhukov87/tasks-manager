import React, { Component } from 'react';
import { deleteTask } from '../actionCreators/actionCreatiors';
import { checkedTask } from '../actionCreators/actionCreatiors';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Task extends Component {

    handleDelete = (deletedId) => {
        this.props.deleteTask(deletedId);
    }

    handleChecked = (checkedId) => {
        this.props.checkedTask(checkedId);
    }
    
    render() {
        const {text, priority, deadline, checkUp, creationDate, id} = this.props.task;
        return(
            <div>
                <h3>{text}</h3>
                <div>Priority: {priority}</div>
                <div>Deadline: {deadline}</div>
                <div>CheckUp: 
                    <FormControl>
                        <Checkbox
                            checked={checkUp}
                            onChange={() => {this.handleChecked(id)}}
                            value={checkUp}
                        />
                    </FormControl>
                </div>
                <div>Creation Date: {creationDate}</div>
                <button onClick={() => this.handleDelete(id)}>Delete</button>
            </div>
        );
    }
}

export default connect(null,{ deleteTask, checkedTask })(Task);