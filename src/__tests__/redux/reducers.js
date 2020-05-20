import reducers from '../../reducers/rootReducer'

describe('Tasks Reducers', () => {
    
    it('Action SET_TASKS', () => {
        
        const list = [{name: 'tarea 1', done: false, deleted: false, id: 1 }]
        const expectedResponse = {list, user: {logged: false, name: null}}
        const action = {type: 'SET_TASKS', payload: list}

        expect(reducers({list: null}, action)).toEqual(expectedResponse)
       

    })

    it('Action ADD_NEW_TASK', () => {
        
        const list = [{name: 'tarea 2', done: false, deleted: false, id: 2 }]
        const expectedResponse = {list, user: {logged: false, name: null}}
        const action = {type: 'ADD_NEW_TASK', payload: list[0]}

        expect(reducers({list: []}, action)).toEqual(expectedResponse)


    })
})

describe('Users Reducers', () => {

    it('User reducers - Action LOGIN_USER', () => {
        
        const list = [{name: 'tarea 1', done: false, deleted: false, id: 1 }]
        const expectedResponse = {list, user: {logged: true, name: 'usuario'}}
        const action = {type: 'LOGIN_USER', payload: {name : 'usuario'}}

        expect(reducers({list}, action)).toEqual(expectedResponse)

    })

    it('User reducers - Action UNLOGGED_USER', () => {
        
        const list = {list : null}
        const expectedResponse = {list, user: {logged: false, name: null}}
        const action = {type: 'UNLOGGED_USER'}

        expect(reducers({list}, action)).toEqual(expectedResponse)
 

    })
})