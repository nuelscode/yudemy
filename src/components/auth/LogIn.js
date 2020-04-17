import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {};
  }

  // Form Values
  onValueChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ ...this.state })) &&
      this.setState({});
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      //IF USER IS FOUND, ROUTE USER TO HOME PAGE
    } else {
      // STAY IN THE LOGIN PAGE SO USER CAN LOGIN
      this.setState({
        email: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
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
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.handleSubmit}
          >
            Log in
          </Button>
        </Form>
      </div>
    );
  }
}
