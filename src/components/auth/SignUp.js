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
            <Form>
             <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" />

            </Form.Group>
             <Form.Group controlId="formBasicLastName">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" />

            </Form.Group>
             <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="secondary" type="submit">
             Sign up
            </Button>
           </Form>

            </div>
       )
   }
}



/* export class SignUp extends Component {
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
 */