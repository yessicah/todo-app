import React from 'react'
import { configure, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import Login from '../../containers/loginContainer'
configure({ adapter: new Adapter() });
const mockStore = configureStore()

test('Render Login Component - Store Connect', () => {
    const user = { name: 'tarea 1', logged : true}
    const list = [{ name: 'tarea 1', done: false, deleted: false, id: 1}]
    const store = mockStore({user, list})
	
	render( 
		<Provider store={store}>
			<Login/>
		</Provider>
    ) 
	
});
