import { connect } from 'react-redux'
import CreateTag from '../components/create';
import * as actions from '../actions/taskActions'
import { createNewTask } from '../common/requests'

const mapStateToProps = state => ({ list: state.list })

const mapDispatchToProps = dispatch => {
    return {
        onCreateTask: (data) => {
            
            const newTask = { name : data}

            createNewTask(newTask, (response) => {
                if (response.status && response.status < 400) 
                    dispatch(actions.addNewtask(response.data.message))
                
            }) 
        }
    }
}

const CreateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTag);

export default CreateContainer ;