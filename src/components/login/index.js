import React, { useState, useEffect } from 'react'
import { Header, Image, Modal, Button, Form, Segment } from 'semantic-ui-react' 
import { ToastContainer } from "react-toastify"
import List from '../../containers/listContainer'
import avatar from '../../assets/avatar-icon.png'
import tasksImage from '../../assets/tasks-image.png'

const HeaderLogin = ({ user, closeSession }) => (
    <Header as='h2' className='header-app'>
        <Image rounded src={avatar} />
        <span className='user-name'>{user}</span>
        <Button onClick={closeSession} className='logout-button' floated='right' icon='log out' title='Cerrar Sesión'/>
    </Header>
)
 
const Login = ({ user, onLogin, validateSession, onLogout }) => {

    const [data, setData] = useState({
        user: null,
        password: null

    }); 

    useEffect(() => validateSession(), []);

    const handleChange = (e, { name, value }) => setData({ ...data, [name]: value })
    const handleSubmit = () => onLogin(data)
    const handleCloseSession = () => onLogout()

    return(
        <Segment>
            <ToastContainer autoClose={ 3000 } />
            {user.logged && <HeaderLogin user={user.name} closeSession={handleCloseSession}/>}
            <Modal open={!user.logged}>
                <Modal.Header>Inicio de Sesión</Modal.Header>
                <Modal.Content image>
                <Image
                    wrapped
                    size='medium'
                    src={tasksImage}
                />
                <Modal.Description>
                    <Header>Bienvenido TODO List App</Header>
                    <Form  onSubmit={handleSubmit}>
                        <Form.Input
                        fluid
                        label='Usuario'
                        placeholder='Escriba su usuario'
                        name='user'
                        required
                        onChange={handleChange}
                        />
                        <Form.Input
                        fluid
                        type='password'
                        label='Contraseña'
                        name='password'
                        placeholder='Escriba su contraseña'
                        required
                        onChange={handleChange}
                        />
                        <Button type='submit' id='login-button'>Entrar</Button>
                    </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
            {user.logged && <List/>}
        </Segment>
    )
}

export default Login