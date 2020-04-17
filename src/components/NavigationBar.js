import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


const Styles = styled.div `
navbar {
    background-color: #000
}

.navbar-brand, .navbar-nav, .navbar-link {
    color: #666;

    &:hover {
        color: white
    }
}
`;


export const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Yudemy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"  variant="primary">
                    <Nav.Item><Nav.Link href="/categories">Categories</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/business">Yudemy for Business</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/teach">Teach on Yudemy</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login"><Button variant="secondary">Log in</Button></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/signup"><Button variant="primary">Sign Up</Button></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)