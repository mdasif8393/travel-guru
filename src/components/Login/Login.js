import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    return (
        <Container style={{height:'900px', width:'1440px'}}> 

            <Navbar expand="lg" style={{paddingTop:'30px'}}>
                <img  style={{height:'56px', width:'120.26px', marginLeft:"70px"}} src="https://i.ibb.co/dLbmDJR/Logo.png" alt=""/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"50px"}}>
            

                <Nav className="mr-auto" >
                <Nav.Link style={{marginLeft:"200px", color:'black'}} href="#home">News</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Destination</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Blog</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Contact</Nav.Link>
                <Button style={{marginLeft:"45px" , color:'black'}} variant="warning">Login</Button>{' '}
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>

            
        </Container>
    );
};

export default Login;