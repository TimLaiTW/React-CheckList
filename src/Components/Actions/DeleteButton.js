import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
        display: block;
        color: red;
        cursor: pointer;
        transition: all .2s ease-in-out;
        // transform: rotateZ(0deg);
        // border-radius: 2px;
        &:hover{
            color: red;
            transform: scale(1.2)
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