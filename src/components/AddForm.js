import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import { addTask } from '../actionCreators/actionCreatiors';
import { withStyles } from '@material-ui/core/styles';
import { grey300, blue700, grey50, grey900 } from 'material-ui/styles/colors';
import Typography from '@material-ui/core/Typography';

const styles = {
    formField: {
        maxWidth: 545,
        margin: 50,
        background: grey300
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: 800
    },
    form: {
        marginTop: 0
    },
    taskText: {
        width: 500,
        paddingLeft: 20,
        marginBottom: 20
    },
    buttonSubmit: {
        backgroundColor: blue700,
        color: grey50,
        padding: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 20
    },
    priorityInput: {
        border: 3,
        borderColor: grey900,
        marginLeft: 20,
        marginRight: 15
    },
    deadline: {
        margin: 17,
        marginBottom: 20
    }
}

class AddForm extends Component {

    state = {
        text: '',
        priority: 1,
        checkUp: false,
        deadline: "2018-06-24",
        creationDate: undefined
      };

      handleSubmit = (ev) => {
        ev.preventDefault()
        
        this.props.addTask(
            this.state.text, 
            this.state.priority,
            this.state.checkUp,
            this.state.deadline,
            this.state.createDate
        );

        this.setState({
            text: '',
            priority: 1,
            checkUp: false,
            deadline: "2018-06-24",
            creationDate: undefined
        });
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextState)
    }

    render() {
        const { classes } = this.props;
        //console.log('this.props', this.props);
        return(<div style={styles.formField} >
                    <Typography style={styles.title} variant="title" >Добавить задачу</Typography>
                    <form onSubmit={this.handleSubmit} style={styles.form} >
                        <FormControl style={styles.taskText} >
                        <TextField
                            id="text"
                            label="Text"
                            value={this.state.text}
                            onChange={(event) => {this.setState({text: event.target.value})}}
                            margin="normal"
                        />
                        </FormControl>
                        <FormControl style={styles.priorityInput} >
                            {/* <InputLabel htmlFor="Priority">Priority</InputLabel> */}
                            <Select
                                onChange={(event) => {this.setState({priority: event.target.value})}}
                                value={this.state.priority}
                            >
                                <MenuItem value={1}>Приоритет 1</MenuItem>
                                <MenuItem value={2}>Приоритет 2</MenuItem>
                                <MenuItem value={3}>Приоритет 3</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <FormControl>
                            <Checkbox
                                checked={this.state.checkUp}
                                onChange={(event) => {!this.state.checkUp ? this.setState({checkUp: true}) : this.setState({checkUp: false}) }}
                            />
                        </FormControl> */}
                        <FormControl style={styles.deadline} >
                            <TextField
                                id="deadline"
                                type="date"
                                defaultValue="2018-06-24"
                                onChange={(event) => {this.setState({deadline: event.target.value})}}
                            />
                        </FormControl>
                        <button type="submit" value="submit" style={styles.buttonSubmit} >Создать</button>
                    </form>
                </div>
        );
    }
}

export default withStyles(styles)(connect(null, { addTask })(AddForm));