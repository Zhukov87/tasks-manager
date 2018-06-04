import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux'; 
import { filteredTasks } from '../selectors/index.selector';
import { sortBy } from '../actionCreators/actionCreatiors';
import { viewAllTasks } from '../actionCreators/actionCreatiors';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { grey300, grey600 } from 'material-ui/styles/colors';
import { blue400 } from 'material-ui/styles/colors';
import { grey50 } from 'material-ui/styles/colors';
import classNames from 'classnames';
import { grey700 } from 'material-ui/styles/colors';


const styles = ({
    title: {
        paddingLeft: 70,
        paddingTop: 10,
        fontWeight: 800
    },
    sortedPanel: {
        maxWidth: 505,
        margin: 50,
        background: grey300,
        marginTop: 20,
        padding: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    caption: {
        width: 40,
        display: 'inline-block',
        fontSize: 15
    },
    sortByButtons: {
        background: grey300,
        borderWidth: 1,
        borderColor: grey300,
        color: grey600,
        outlineStyle: 'none',
        fontSize: 15,
        '&:hover': {
            color: blue400
          }
    },
    sortByButtonSelected: {
        background: grey300,
        borderWidth: 1,
        borderColor: grey300,
        color: blue400,
        outlineStyle: 'none',
        fontSize: 15,
        '&:hover': {
            color: blue400
          }
    },
    hideButton: {
        float: 'right',
        paddingLeft: 0,
        paddingRight: 0,
        background: grey300,
        borderWidth: 1,
        borderColor: grey300,
        fontSize: 15,
        color: grey600,
        outlineStyle: 'none',
        '&:hover': {
            color: blue400
          }
    },
    noTasks: {
        marginLeft: 70
    }
});

class TasksList extends Component {
    renderBody(tasks, classes) {
        if (!tasks.length) {
            return <p className={classNames(classes.noTasks)} >No tasks yet</p>;
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

    handleViewTasks = () => {
        this.props.viewAllTasks();
    }
    
    render() {
        const { classes, filters } = this.props;
        console.log('this.props', this.props);
        

        return(
            <div>
                <Typography variant="title" style={styles.title} >Задачи</Typography>
                <div style={styles.sortedPanel} >
                    <Typography variant="caption" className={classNames(classes.caption)} >Сорт:</Typography>
                    <button 
                        onClick={() => this.handleSort('SORT_BY_DATE')} 
                        className={
                            (filters != undefined && filters.filters == 'SORT_BY_DATE') ? 
                                classNames(classes.sortByButtonSelected) :
                                classNames(classes.sortByButtons)
                        } 
                    >
                        Sort by date
                    </button>
                    <button 
                        onClick={() => this.handleSort('SORT_BY_PRIORITY')} 
                        className={
                            (filters != undefined && filters.filters == 'SORT_BY_PRIORITY') ? 
                                classNames(classes.sortByButtonSelected) :
                                classNames(classes.sortByButtons)
                        } 
                    >
                        Sort by priority
                    </button>
                    <button 
                        onClick={() => this.handleSort('SORT_BY_DEADLINE')} 
                        className={
                            (filters != undefined && filters.filters == 'SORT_BY_DEADLINE') ? 
                                classNames(classes.sortByButtonSelected) :
                                classNames(classes.sortByButtons)
                        } 
                    >
                        Sort by deadline
                    </button>
                    <button 
                        onClick={() => this.handleViewTasks()} 
                        className={classNames(classes.hideButton)} 
                    >
                        {filters != undefined && filters.viewAllTasks ? 'Hide completed' : 'Show completed'}
                    </button>
                </div>
                {this.renderBody(this.props.tasks, classes)}
            </div>
        );
    }
}

export default withStyles(styles)(connect(filteredTasks, { sortBy, viewAllTasks })(TasksList));