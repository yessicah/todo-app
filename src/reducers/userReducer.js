export const initialState = {
    name : null,
    logged : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER': 
            return ({...state, name: action.payload.name, logged: true})
        
        case 'LOGGED_USER': 
            return ({...state, name: action.payload.name, logged: true})
        
        case 'UNLOGGED_USER': 
            return ({...state, name: null, logged: false})
        
        default:
            return state
    }
}