import React, { Component } from 'react';
import nextId from 'react-id-generator';
import SaveButton from '../Actions/SaveButton';
import styled from 'styled-components';
import Input from '../Actions/Input';
const Form = styled.form`
    padding: 2rem;
`;
export default class InputForm extends Component {
    state = {
        name: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault(); 
        if (this.state.name.length > 0 && this.state.name.length < 20){
            this.props.onSubmit({
                id: nextId(),
                name: this.state.name,
                checked: false
            })
        } 
        else {
            alert("Input length should more than 1 and no longer than 20!");
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input 
                    name="name" 
                    placeholder="Enter new list"
                    value={this.state.name}
                    handleChange={this.handleChange}
                />
                <SaveButton>Save!</SaveButton>
            </Form>               
        )
    }
}