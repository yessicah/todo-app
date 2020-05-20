import * as types from './taskTypes'

export const addNewtask = (data) => ({
    type: types.ADD_NEW_TASK,
    payload: data,
});

export const setTasks = (data) => ({
    type: types.SET_TASKS,
    payload: data,
});

export const errorSetTasks = () => ({
    type: types.ERROR_SET_TASKS
});

export const changeTaskStatus = (data) => ({
    type: types.CHANGE_TASK_STATUS,
    payload: data,
});

export const errorChangeTaskStatus = () => ({
    type: types.ERROR_CHANGE_TASK_STATUS
});

export const deleteTask = (item) => ({
    type: types.DELETE_TASK,
    payload: item,
});

export const errorDeleteTask = () => ({
    type: types.ERROR_DELETE_TASK
});