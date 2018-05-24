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

class AddForm extends Component {

    state = {
        text: '',
        priority: 1,
        checkUp: false,
        deadline: "2018-05-24",
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
            deadline: "2018-05-24",
            creationDate: undefined
        });
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextState)
    }

    render() {
        return(
                <form onSubmit={this.handleSubmit} >
                    <FormControl>
                    <TextField
                        id="text"
                        label="Text"
                        value={this.state.text}
                        onChange={(event) => {this.setState({text: event.target.value})}}
                        margin="normal"
                    />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="Priority">Priority</InputLabel>
                        <Select
                            onChange={(event) => {this.setState({priority: event.target.value})}}
                            value={this.state.priority}
                        >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Checkbox
                            checked={this.state.checkUp}
                            onChange={(event) => {!this.state.checkUp ? this.setState({checkUp: true}) : this.setState({checkUp: false}) }}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            id="deadline"
                            label="Deadline"
                            type="date"
                            defaultValue="2018-05-24"
                            onChange={(event) => {this.setState({deadline: event.target.value})}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <button type="submit" value="submit" >Submit</button>
                </form>
        );
    }
}

export default connect(null, { addTask })(AddForm);