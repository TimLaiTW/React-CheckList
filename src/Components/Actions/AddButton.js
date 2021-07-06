import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
    padding: 2rem;
`;
const Btn = styled.div`
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        border: 1px solid var(--tertiary-background);
        border-radius: 5px;
        color: var(--text);
        font-size: 1.2rem;
        height: 40px;
        width: 150px;
        font-family: var(--content-font);
        padding: 10px;
        transition: all .2s ease-in-out;
        text-align: center;
        &:hover{
            transform: scale(1.2);
            background-color: var(--tertiary-background);
        }
    `;
const AddButton = (props) => {
    return(
        <Div>
            <Btn onClick={() => props.startAddingTask()}>
                {props.children}
            </Btn>
        </Div>
    );
}
export default AddButton;