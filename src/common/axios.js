import axios from 'axios'
import { showNotify } from './helpers'

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token')

    if ( token !== null ) {
        config.headers.Authorization = `Bearer ${token}`
    }else{
        //execption login route verify token
        if(config.url.indexOf("login") < 0){
            showNotify('Debes iniciar sesión', true)
            setTimeout(function(){window.location.reload()}, 1000)
            return false
        } 
    }
        return config;
    },function(err) {
    return Promise.reject(err);
});


axios.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.response.status === 401){
        showNotify(error.response.data.message, true)
        localStorage.clear()
    }
    return error;
});

export {
    axios
}