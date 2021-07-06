import React from 'react';
import NewButton from '../Actions/NewButton';
import styled from 'styled-components';
const Div = styled.div`
    padding: 2rem;
`;
const AddButton = (props) => {
    return(
        <Div>
            <NewButton startAddingTask={props.startAddingTask}>
                {props.children}
            </NewButton>
        </Div>
    );
}
export default AddButton;