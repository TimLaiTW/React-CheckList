import React from 'react';
import './LoginPage.css';
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import Login from './login.component';
import Signup from './singup.component';
function LoginPage() {
  return (
    <Router>
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Switch>
            <Route path='/' exact component={Login} />      
            <Route path='/sing-in' component={Login} />
            <Route path='/sing-up' component={Signup} />  
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default LoginPage;