import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/combineReducer';
import generateId from '../middlewares/generateId.middleware';

const enhancer = applyMiddleware(generateId);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer);

export default store;