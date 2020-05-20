const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TASKS': 
            return action.payload
        
        case 'ADD_NEW_TASK': 
            return [...state, action.payload]

        case 'CHANGE_TASK_STATUS': {
            const index = state.findIndex(task => task.id === action.payload.id)
            const newState = [ ...state ];
            newState[index] = { ...state[index], done: !newState[index].done };
            return newState;
        }
        case 'DELETE_TASK':{

            const index = state.findIndex(task => task.id === action.payload)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        }
        default:
            return state
    }
}