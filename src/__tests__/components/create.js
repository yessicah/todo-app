import React from 'react'
import { configure, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import CreateTag from '../../containers/createContainer'
configure({ adapter: new Adapter() });
const mockStore = configureStore()

test('Render Cratetag Component - Store Connect', () => {
    const list = [{ name: 'tarea 1', done: false, deleted: false, id: 1}]
    const store = mockStore({list})
	
	render( 
		<Provider store={store}>
			<CreateTag/>
		</Provider>
    ) 
	
});