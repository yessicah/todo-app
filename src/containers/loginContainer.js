import { connect } from 'react-redux'
import Login from '../components/login'
import { login } from '../common/requests'
import * as actions from '../actions/userActions'

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (data) => {

            login(data, (response) => {
                if ( response.status && response.status < 400) { 
                    dispatch(actions.loginUser(response.data.user))
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', response.data.user.name)
                } else {
                    dispatch(actions.errorLogin())
                }
           })
        },
        validateSession: () => {
            const name = localStorage.getItem('user')
            const token = localStorage.getItem('token')

            if(name && token)
                dispatch(actions.loggeduser(name))
        },
        onLogout: () => {
            dispatch(actions.unloggedUser())
            localStorage.clear()
        }
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer