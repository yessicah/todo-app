import { addNewtask, setTasks} from '../../actions/taskActions'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

describe('Tasks Actions', () => {

    it('Action ADD_NEW_TASK', () => {
        const store = mockStore({list:null})

        const newTask = { name: 'Nueva tarea', done: false, deleted: false, id: 1}
        store.dispatch(addNewtask(newTask))

        const actions = store.getActions()

        expect(actions.length).toBe(1)
        expect(actions[0].type).toBe('ADD_NEW_TASK')

    })

    it('Action SET_TASKS', () => {

        const store = mockStore({list:null})
        const tasks = [{ name: 'Nueva tarea', done: false, deleted: false, id: 1}]
        store.dispatch(setTasks(tasks))

        const actions = store.getActions()

        expect(actions.length).toBe(1)
        expect(actions[0].type).toBe('SET_TASKS')

    })

})