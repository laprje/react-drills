import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state ={
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleUserChange(name) {
        this.setState({username: name})
    }
    handlePassChange(pass) {
        this.setState({password: pass})
    }

    handleChange() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render() {
        return(
            <div className ="App">
                <input onChange={e => this.handleUserChange(e.target.value)} type='text'></input>
                <input onChange={e => this.handlePassChange(e.target.value)} type="text"></input>
                <button onClick ={this.handleChange}>Login</button>
            </div>
        )
    }
}