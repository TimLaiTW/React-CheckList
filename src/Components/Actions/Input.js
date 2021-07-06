import React, { Component } from 'react'
import styled from 'styled-components';
const StyledInput = styled.input`
        width: 99%;
        border: 1px solid var(--primary-background);
        border-radius: 5px;
        background-color: var(--secondory-background);
        cursor: pointer;
        outline: none; 
        text-align: center;
        min-height: 2.5rem;
        font-family: var(--header-font);
        font-size: 1rem
    `;
export default class Input extends Component {
    render() {
        const { name, placeholder, value, handleChange } = this.props;
        return (
            <StyledInput 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        )
    }
}