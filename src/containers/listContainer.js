import { connect } from 'react-redux'
import ListItems from '../components/list'
import { getTasks, deleteTask, updateTask } from '../common/requests'
import * as actions from '../actions/taskActions'

const mapStateToProps = state => ({ list: state.list })

const mapDispatchToProps = dispatch => {
    return {
        onLoadTasks: () => {

            getTasks((response) => {
                if ( response.status && response.status < 400)
                    dispatch(actions.setTasks(response.data))
                else
                    dispatch(actions.errorSetTasks())
                
            }) 
        },
        onUpdateTask: (item, isDone) => {

            updateTask(item, isDone, (response) => {
                if ( response.status && response.status < 400)
                    dispatch(actions.changeTaskStatus({id: item, done: isDone}))
                else
                    dispatch(actions.errorChangeTaskStatus())
                
            })
        },
        onDeleteTask: (item) => {

            deleteTask(item, (response) => {
                if ( response.status && response.status < 400)
                    dispatch(actions.deleteTask(item))
                else
                    dispatch(actions.errorDeleteTask(item))
                
            })
        }
    }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItems);

export default ListContainer ;