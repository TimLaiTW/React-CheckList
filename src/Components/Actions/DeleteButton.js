import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
        display: block;
        color: red;
        cursor: pointer;
        transition: all .2s ease-in-out;
        background: transparent;
        border: none;
        outline: none;
        font-size: 15px;
        &:hover{
            color: red;
            transform: scale(1.4)
        }
    `;
const DeleteButton = (props) => {
    return(
        <Button 
            type="button" 
            onClick={() => props.deleteTask(props.taskId)}
        >X</Button>
    );
}
export default DeleteButton;