import React, { useState } from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

const CreateTag = ({onCreateTask}) => {

    const [newTask, setNewtask] = useState();

    const changeInput = event => setNewtask(event.target.value);

    const addTask = () => {
        if(newTask)
            onCreateTask(newTask)
    }
    
    return (
        <Input type='text' placeholder='Escriba la nueva tarea' action>
            <input onChange={changeInput} size='50'/>
            <Button animated='vertical' onClick={addTask}>
                <Button.Content hidden>Agregar tarea</Button.Content>
                <Button.Content visible>
                    <Icon name='plus' />
                </Button.Content>
            </Button>
        </Input>
    )   
}

export default CreateTag
