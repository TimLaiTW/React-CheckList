import React, { Component } from 'react'
import styled from 'styled-components';
import DeleteButton from '../Actions/DeleteButton';
import CheckBox from '../Actions/CheckBox';


// import ListForm from '../../views/listform';
// import EditMode from '../editmode';
const ListItemBlock = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--tertiary-background);
`;
const ListitemTitle = styled.div`
    color: var(--text);
    font-size: var(--secondory-font-size);
    font-family: var(--content-font);
    letter-spacing: 0.1rem;

    div {
        cursor: pointer;
    }
`;
export default class Tasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            toggle: true    
        }
    }

    changeTitle = () => {
        this.setState({toggle: !this.state.toggle})
        console.log(this.state.toggle)
    }
    
    render() {
        const { taskId, task, checked, deleteTask, editTaskCheck, editTaskName } = this.props;
        return (
            <>
            <ListItemBlock>
                <CheckBox 
                    taskId={taskId}
                    checked={checked}
                    editTaskCheck={editTaskCheck}/>
                <ListitemTitle>
                    <div onClick={this.changeTitle}>{task}</div>

                </ListitemTitle>
                <DeleteButton 
                    taskId={taskId}
                    deleteTask={deleteTask}/>
            </ListItemBlock>
        </>
        )
    }
}
