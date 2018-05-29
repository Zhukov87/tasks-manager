import { SORT_BY, VIEW_ALL_TASKS } from '../actionCreators/constants';

const defaultFilters = {
    filters: '',
    viewAllTasks: true
}

export default (filtersState = defaultFilters, actions) => {
    const { type, payload } = actions;

    switch(type) {
        case SORT_BY: {
            let nextFilters = {...filtersState};
            nextFilters.filters = payload.sortBy;
            return nextFilters;
        }
        case VIEW_ALL_TASKS: {
            let nextFilters = {...filtersState};
            nextFilters.viewAllTasks = !nextFilters.viewAllTasks;
            return nextFilters;
        }
    }

    return filtersState;
}

