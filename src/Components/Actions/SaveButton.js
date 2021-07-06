import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    width: 100%;
    background: var(--tertiary-background);
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    outline: none; 
    text-align: center;
    min-height: 2.5rem;
    font-family: var(--header-font);
    font-size: 15px;
    padding: 0 1rem 0 1rem
`;
const SaveButton = (props) => {
    const { type, children } = props
    return(
        <Button type={type}>{children}</Button>
    );
}
export default SaveButton;
    