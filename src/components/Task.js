import React, { Component } from 'react';
import { deleteTask } from '../actionCreators/actionCreatiors';
import { checkedTask } from '../actionCreators/actionCreatiors';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { grey700 } from 'material-ui/styles/colors';
import { grey800 } from 'material-ui/styles/colors';

const styles = {
    task: {
        maxWidth: 540,
        borderBottom: '1px solid grey',
        borderColor: grey700,
        marginLeft: 10
    },
    textTask: {
        display: 'inline-block',
        margin: 10,
        width: 250,
        color: grey700
    },
    priorityOne: {
            display: 'inline-block',
            width: 10,
            height: 10,
            border: '1px solid grey',
            borderRadius: 10,
            background: 'grey'
    },
    priorityTwo: {
            display: 'inline-block',
            width: 10,
            height: 10,
            border: '1px solid yellow',
            borderRadius: 10,
            background: 'yellow'
        },
    priorityThree: {
            display: 'inline-block',
            width: 10,
            height: 10,
            border: '1px solid red',
            borderRadius: 10,
            background: 'red'
    },
    checkBox: {
        display: 'inline-block',
    },
    deadline: {
        display: 'inline-block',
        width: 100
    },
    creationDate: {
        display: 'inline-block',
        width: 100,
    },
    deleteButton: {
        opasity: 0.1,
        padding: 30,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 30,
        marginTop: 10,
        position: 'absolute',
        background: 'white',
        border: '1px solid white',
        color: 'white',
        '&:hover': {
            opasity: 1,
            backgroundColor: 'red',
            color: 'white',
            padding: 30,
            paddingTop: 5,
            paddingBottom: 5,
            marginLeft: 30,
            marginTop: 10,
            position: 'absolute'
        }
    }
}

class Task extends Component {

    handleDelete = (deletedId) => {
        this.props.deleteTask(deletedId);
    }

    handleChecked = (checkedId) => {
        this.props.checkedTask(checkedId);
    }

    dateToString = (deadline) => {
        const today = new Date();
        const deadlineFormatted = new Date(deadline);
        const daysLeft = Math.ceil((deadlineFormatted - today)/86400000).toString();
        if(daysLeft == 0) {
            return 'Сегодня';
        }
        if(daysLeft == 1) {
            return 'Завтра';
        }
        if(daysLeft == 2) {
            return 'Послезавтра';
        }
        if(daysLeft.slice(-1) == 1 && daysLeft != 11) {
            return daysLeft + ' день';
        }
        if(daysLeft > 4 && daysLeft < 21 || daysLeft.slice(-1) > 4 && daysLeft.slice(-1) < 10 || daysLeft.slice(-1) == 0 || daysLeft == 11) {
            return daysLeft + ' дней';
        }
        if(daysLeft == 3 || daysLeft == 4 || daysLeft.slice(-1) > 1 && daysLeft.slice(-1) < 5) {
            return daysLeft + ' дня';
        }
    }

    
    render() {
        const {text, priority, deadline, checkUp, creationDate, id} = this.props.task;
        const { classes } = this.props;
        return(
            <div className={classNames(classes.task)} >
                <div className={
                    priority == 1 ? classNames(classes.priorityOne) :
                        priority == 2 ? classNames(classes.priorityTwo) : 
                            classNames(classes.priorityThree)
                } ></div>
                <FormControl  >
                    <Checkbox
                        checked={checkUp}
                        onChange={() => {this.handleChecked(id)}}
                        value={checkUp}
                        className={classNames(classes.checkBox)}
                    />
                </FormControl>
                <h3 className={classNames(classes.textTask)} >{text}</h3>
                <div className={classNames(classes.deadline)} >{this.dateToString(deadline)}</div>
                
                <div className={classNames(classes.creationDate)} >{creationDate}</div>
                <button 
                    onClick={() => this.handleDelete(id)}
                    className={classNames(classes.deleteButton)}
                >Удалить</button>
            </div>
        );
    }
}

export default withStyles(styles)(connect(null,{ deleteTask, checkedTask })(Task));