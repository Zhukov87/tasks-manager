import { ADD_TASK, DELETE_TASK, CHANGE_PRIORITY, MARK_AS_DONE } from './constants';

export function addTask(text, priority, checkUp, deadline, creationDate, id) {
    return {
        type: ADD_TASK,
        payload: { text, priority, checkUp, deadline, creationDate, id }
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: { id }
    }
}

export function changePriority(id, priority) {
    return {
        type: CHANGE_PRIORITY,
        payload: { id, priority }
    }
}

export function markAsDone(id) {
    return {
        type: MARK_AS_DONE,
        payload: { id }
    }
}