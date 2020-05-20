import React, { useState, useEffect } from 'react'
import { Button, List, Segment, Icon, Confirm, Checkbox } from 'semantic-ui-react'
import CreateTag from '../../containers/createContainer'

const ListItems = ({ list, onLoadTasks, onDeleteTask, onUpdateTask }) => {

    useEffect(() => onLoadTasks(), []);

    const [openConfirm, setOpenConfirm] = useState(
        false
    );

    const [currentItem, setCurrentItem] = useState(
        null
    );

    const handleConfirm = event => {
        setOpenConfirm(true);
        setCurrentItem(Number(event.target.id))
    }

    const handleConfirmClose = event => {
        setOpenConfirm(false);
    }

    const handleDelete = event => {
        setOpenConfirm(false);
        onDeleteTask(currentItem)
    }

    const handleChangeStatus = (item, isDone) => {
        onUpdateTask(item, isDone)
    }

    if(list === null )
        return false

    return (
        <Segment>
            <CreateTag/>
            <List divided verticalAlign='middle'>
                {list.map((task) => (
                    <List.Item key={task.id} className='listItem'>
                        <List.Content floated='right'>
                            <Delete id={task.id} onClickDelete={handleConfirm}/>
                        </List.Content>
                        <List.Content floated='left'>
                            <Checkbox toggle item={task.id} defaultChecked={task.done} onChange={(e, data) => handleChangeStatus(data.item, data.checked)}/>
                            <Confirm
                                open={openConfirm}
                                onCancel={handleConfirmClose}
                                onConfirm={handleDelete}
                                cancelButton='No'
                                confirmButton="Si"
                                content='¿Está seguro de eliminar esta tarea?'
                            />
                        </List.Content>
                        <List.Content>
                            <Icon size='large' name={task.done ? 'thumbs up' : 'thumbs down'}/>
                            {task.name} 
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </Segment>
    )
    
}

const Delete = ({onClickDelete, id}) => (
    <Button animated='vertical' onClick={onClickDelete} id={id}>
        <Button.Content hidden className='not-click'>Eliminar</Button.Content>
        <Button.Content visible>
            <Icon name='trash' />
        </Button.Content>
    </Button>
)

export default ListItems