import { createSelector } from 'reselect';
import { viewAllTasks } from '../actionCreators/actionCreatiors';

const tasksSelector = (state) => {
    return state.task.tasks;
}

const filtersSelector = (state) => {
    console.log('state.filters', state.filters);
    return state.filters;
}

const filteredCheckedTasksSelector = createSelector(tasksSelector, filtersSelector, (tasks, filters) => {
    if(filters.viewAllTasks) {
        return tasks;
    }
    
    return tasks.filter((task) => {
        if(task.checkUp == false) {
            return task;
        }
    });
});

export const filteredTasks = createSelector(filteredCheckedTasksSelector, filtersSelector, (tasks, filters) => {
    const activeFilter = filters.filters;

    const sortFunctions = {
        SORT_BY_DATE: (task1,task2) => new Date(task1.creationDate) - new Date(task2.creationDate),
        SORT_BY_PRIORITY: (task1, task2) => task1.priority - task2.priority,
        SORT_BY_DEADLINE: (task1,task2) => new Date(task1.deadline) - new Date(task2.deadline)
    }

    if(activeFilter != '') {
        const filteredTasks = tasks.sort(sortFunctions[activeFilter]);
        tasks = [].concat(filteredTasks);
        return {
            tasks
        }
    }

    return {
        tasks
    }

});