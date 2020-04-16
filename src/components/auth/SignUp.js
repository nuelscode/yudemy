import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export class SignUp extends Component {
    state = {

    }
    handleChange (e) {
        console.log(e)
    }

    handleSubmit (e) {
        console.log(e)
    }


    render () {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="firstName" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="lastName" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button> 
                </div>
            </form>
        </div>
        )
    }
}
