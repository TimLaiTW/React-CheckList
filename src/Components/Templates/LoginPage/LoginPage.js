import React, { useState } from 'react';
import './LoginPage.css';
import Login from './login.component';
import Signup from './signup.component';
export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.state = {
      switchToSignup: false,
    }
    this.handleSwitchToSignup = this.handleSwitchToSignup.bind(this);
  }

  handleSwitchToSignup = () => {
    this.setState({switchToSignup: !this.state.switchToSignup});
  }
  render (){
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          {this.state.switchToSignup ?  
            <Signup switchingToSignup={this.handleSwitchToSignup}/>:
            <Login switchingToSignup={this.handleSwitchToSignup}/>
          }
      </div>
    </div>
    );
  }
}
