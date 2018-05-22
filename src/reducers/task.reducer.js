import { ADD_TASK, DELETE_TASK } from '../actionCreators/constants';

const initialState = [];

export default (tasksState = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_TASK: {
            let nextState = [].concat(tasksState);
            nextState.push({
                text: payload.text,
                priority: payload.priority,
                checkUp: payload.checkUp,
                deadline: payload.deadline,
                creationDate: payload.creationDate,
                id: payload.id
            });
            return nextState;
        }

        case DELETE_TASK: {
            let nextState = [].concat(tasksState);
            if(!nextState.length)
                return tasksState;
            return nextState.filter(task => {
                console.log('task.id', task.id);
                console.log('payload.id', payload.id);
                return task.id !== payload.id;
            })
        }
    }

    return tasksState;
}