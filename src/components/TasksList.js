import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';

class TasksList extends Component {
    renderBody(tasks) {
        if(!tasks.length) return <p>No tasks yep</p>;
        return (
            <div>
                <ul>
                    {tasks.map(task => <li key={task.id}><Task task={task} /></li>)}
                </ul>
            </div>
        );
    }
    
    render() {
        return(
            <div>
                <button>Sort by date</button>
                <button>Sort by priority</button>
                <button>Sort by deadline</button>
                {this.renderBody(this.props.tasks)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(TasksList);