import { createSelector } from 'reselect';

const tasksSelector = (state) => {
    return state.task.tasks;
}

const filtersSelector = (state) => {
    return state.filters.filters;
}

export const filteredTasks = createSelector(tasksSelector, filtersSelector, (tasks, filters) => {
    
    switch(filters) {
        case 'SORT_BY_DATE': {
            const sortedTask = tasks.sort(function(task1,task2){
                return new Date(task1.creationDate) - new Date(task2.creationDate);
            });
            tasks = [].concat(sortedTask);
            return {
                tasks
            }            
        }

        case 'SORT_BY_PRIORITY': {
            const sortedTask = tasks.sort((task1, task2) => {
                return task1.priority - task2.priority;
            });
            tasks = [].concat(sortedTask);
            return {
                tasks
            }            
        }

        case 'SORT_BY_DEADLINE': {
            const sortedTask = tasks.sort(function(task1,task2){
                return new Date(task1.deadline) - new Date(task2.deadline);
            });
            tasks = [].concat(sortedTask);
            return {
                tasks
            }               
        }
    }
    
    return {
        tasks
    }
});