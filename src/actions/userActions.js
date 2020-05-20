import * as types from './userTypes'

export const loginUser = (user) => ({
    type: types.LOGIN_USER,
    payload: user,
});

export const errorLogin = () => ({
    type: types.LOGIN_ERROR
});

export const loggeduser = (name) => ({
    type: types.LOGGED_USER,
    payload: {name},
});

export const unloggedUser = () => ({
    type: types.UNLOGGED_USER
});