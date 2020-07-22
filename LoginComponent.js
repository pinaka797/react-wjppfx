import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password:''
    };
  }

  render() {
    return (
      <div>
        Username<input type='text' id='name'/>
        Password<input type='password' id='password'/>
      </div>
    );
  }
}


