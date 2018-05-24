import { ADD_TASK, DELETE_TASK, SORT_BY, CHECKED_TASK } from './constants';

export function addTask(text, priority, checkUp, deadline, creationDate, id) {
    return {
        type: ADD_TASK,
        payload: { text, priority, checkUp, deadline, creationDate, id }
    }
}

export function deleteTask(deletedId) {
    return {
        type: DELETE_TASK,
        payload: { deletedId }
    }
}

export function sortBy(sortBy) {
    return {
        type: SORT_BY,
        payload: { sortBy }
    }
}

export function checkedTask(checkedId) {
    return {
        type: CHECKED_TASK,
        payload: { checkedId }
    }
}
