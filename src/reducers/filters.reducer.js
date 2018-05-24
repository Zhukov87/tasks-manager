import { SORT_BY } from '../actionCreators/constants';

export default (filtersState = '', actions) => {
    const { type, payload } = actions;

    switch(type) {
        case SORT_BY: {
            let nextFilters = {...filtersState};
            nextFilters.filters = payload.sortBy;
            return nextFilters;
        }
    }

    return filtersState;
}

