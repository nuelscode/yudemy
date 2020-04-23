import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export class SignUp extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  // Form Values
  onValueChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      //IF USER IS FOUND, ROUTE USER TO HOME PAGE
    } else {
      // STAY IN THE LOGIN PAGE SO USER CAN LOGIN
      this.setState({});
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // On submit, i am storing the user details in the local storage
    // And this user details is found in the local state
    // The Proper thing to do is to send the data to the signup API
    localStorage.setItem("user", JSON.stringify({ ...this.state }));
  }

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastname}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onValueChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.onSubmit}
          >
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
}


