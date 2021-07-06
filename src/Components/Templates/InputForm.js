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
        title: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault(); 
        if (this.state.title.length > 0 && this.state.title.length < 20){
            this.props.onSubmit({
                id: nextId(),
                title: this.state.title,
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
                    name="title" 
                    placeholder="Enter new list"
                    value={this.state.title}
                    handleChange={this.handleChange}
                />
                <SaveButton>Save!</SaveButton>
            </Form>               
        )
    }
}