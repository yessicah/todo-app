import {axios} from './axios'
import * as env from '../env'
import { showNotify } from './helpers'

export const getTasks = (cb) => {
    const params = {
        method: 'get',
        url: env.api + 
        'tasks',
    };

    axios(params).then(response => {
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export const createNewTask = (data, cb) => {
    const params = {
        method: 'post',
        url: env.api + 
        'create',
        data: data
    };

    axios(params).then(response => {
        const message = `Tarea ${response.data.message.name} guardada`
        showNotify(message)
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export const updateTask = (id, isDone, cb) => {
    const params = {
        method: 'put',
        url: `${env.api}update/${id}`,
        data : { done : String(isDone)}
    };

    axios(params).then(response => {
        showNotify(response.data.message)
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export const deleteTask = (id, cb) => {
    const params = {
        method: 'put',
        url: `${env.api}delete/${id}`,
    };

    axios(params).then(response => {
        showNotify(response.data.message)
        cb(response);
    }).catch(err => {
        cb(err);
    })
}

export const login = (data, cb) => {
    const params = {
        method: 'post',
        url: env.api + 'login',
        data: data
    };

    axios(params).then(response => {
        cb(response);
    }).catch(err => {
        cb(err);
    })
}


