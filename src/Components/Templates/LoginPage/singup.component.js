import React, { Component } from 'react'

export default class singup extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFirstNameChange(event){
        this.setState({firstname: event.target.value});
    }
    handlelastNameChange(event){
        this.setState({lastname: event.target.value});
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }
    handleSubmit(event){
        alert('Sorry, this function is not ready yet...');
        event.preventDefault();
        //Do something here...
    }
    render() {
        return (
            <div>
                <h1 className="text-large">Sign up</h1>
                <p className="text-normal">
                    Already registered? <a href='/sing-in'>Sign in</a>
                </p>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label hidden>First name</label>
                        <input className='input-field' type='text' placeholder='First Name' value={this.state.firstname}  onChange={this.handleFirstNameChange}/>
                    </div>

                    <div className='form-group'>
                        <label hidden>Last name</label>
                        <input className='input-field' type='text' placeholder='Last Name' value={this.state.lastname}  onChange={this.handlelastNameChange}/>
                    </div>

                    <div className='form-group'>
                        <label hidden>Email Address</label>
                        <input className='input-field' type='text' placeholder='Email Address' value={this.state.email}  onChange={this.handleEmailChange}/>
                    </div>

                    <div className='form-group'>
                        <label hidden>Password</label>
                        <input className='input-field' type='password' placeholder='Password' value={this.state.password}  onChange={this.handlePasswordChange}/>
                    </div>

                    <div className='form-group'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
