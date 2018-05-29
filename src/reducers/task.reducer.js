import { ADD_TASK, DELETE_TASK, SORT_BY, CHECKED_TASK } from '../actionCreators/constants';

const initialState = {
    tasks: []
};

export default (tasksState = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_TASK: {
            let nextState = {...tasksState};
            const nextTask = [];
            nextTask.push({
                text: payload.text,
                priority: payload.priority,
                checkUp: payload.checkUp,
                deadline: payload.deadline,
                creationDate: payload.creationDate,
                id: payload.id
            });
            nextState.tasks = nextTask.concat(nextState.tasks);
            return nextState;
        }

        case DELETE_TASK: {
            let nextState = {...tasksState};
            const nextTask = [].concat(nextState.tasks);
            if(!nextState.tasks.length)
                return tasksState;
            nextState.tasks = nextTask.filter(task => {
                return task.id !== payload.deletedId;
            })
            return nextState;
        }

        case CHECKED_TASK: {
            let nextState = {...tasksState};
            const nextTask = [].concat(nextState.tasks);
            nextState.tasks = nextTask.map(task => {
                if(task.id === payload.checkedId) {  
                    task.checkUp = !task.checkUp;
                    return {...task};
                }
                return {...task};
            });
            return nextState;
        }
    }
    return tasksState;
}