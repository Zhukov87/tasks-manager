import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux'; 
import { filteredTasks } from '../selectors/index.selector';
import { sortBy } from '../actionCreators/actionCreatiors';

class TasksList extends Component {
    renderBody(tasks) {
        //console.log('tasks', tasks)
        if (!tasks.length) {
            return <p>No tasks yet</p>;
        }
        return (
            <div>
                <ul>
                    {tasks.map(task => <li key={task.id}><Task task={task} /></li>)}
                </ul>
            </div>
        );
    }

    handleSort = (sortBy) => {
        this.props.sortBy(sortBy);
    }
    
    render() {
        console.log('this.props TaskList', this.props);
        return(
            <div>
                <button onClick={() => this.handleSort('SORT_BY_DATE')} >Sort by date</button>
                <button onClick={() => this.handleSort('SORT_BY_PRIORITY')} >Sort by priority</button>
                <button onClick={() => this.handleSort('SORT_BY_DEADLINE')} >Sort by deadline</button>
                {this.renderBody(this.props.tasks)}
            </div>
        );
    }
}

export default connect(filteredTasks, { sortBy })(TasksList);