import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


export class SignUp extends Component {
        userData;
    
        constructor(props) {
            super(props);
    
            this.onChangeName = this.onChangeFirstName.bind(this);
            this.onChangeName = this.onChangeLastName.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePhone = this.onChangePassword.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    
            this.state = {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    
        // Form Values
        onChangeFirstName(e) {
            this.setState({ firstName: e.target.value })
        }

        onChangeLastName(e) {
            this.setState({ lastName: e.target.value })
        }
    
        onChangeEmail(e) {
            this.setState({ email: e.target.value })
        }
    
        onChangePassword(e) {
            this.setState({ password: e.target.value })
        }
    
    
        // React Life Cycle
        componentDidMount() {
            this.userData = JSON.parse(localStorage.getItem('user'));
    
            if (localStorage.getItem('user')) {
                this.setState({
                    firstName: this.userData.firstName,
                    lastnName: this.userData.lastName,
                    email: this.userData.email,
                    password: this.userData.password
                })
            } else {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                })
            }
        }
    
        componentWillUpdate(nextProps, nextState) {
            localStorage.setItem('user', JSON.stringify(nextState));
        }
    
        onSubmit(e) {
            e.preventDefault()

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            })

            console.log(this.state.props)
        }

    render () {

        return (

            <div className="container">
            <Form onSubmit={this.onSubmit}>
             <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" value={this.state.firstname} onChange={this.onChangeFirstName} />

            </Form.Group>
             <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastName} />

            </Form.Group>
             <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />
              <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
            </Form.Group>
            <Button type="submit" className="btn btn-primary btn-block">
             Sign up
            </Button>
           </Form>
            </div>

       )
   }
}



