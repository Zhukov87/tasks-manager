import { createStore, applyMiddleware } from 'redux';
import task from '../reducers/task.reducer';
import generateId from '../middlewares/generateId.middleware';

const enhancer = applyMiddleware(generateId);

const store = createStore(task, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer);

export default store;