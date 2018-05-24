import { combineReducers } from 'redux';
import task from './task.reducer';
import filters from './filters.reducer';

export default combineReducers({
    task,
    filters
});