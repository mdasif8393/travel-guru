import React from 'react';
import { Button, Card, CardDeck, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const history = useHistory();
    const handleCoxBazarBooking = () => {
        history.push('/booking');
    }
    return (
        <Container className="container-background-image" style={{height:'900px', width:'1440px'}}>
            <Navbar   expand="lg" style={{paddingTop:'30px'}}>
                <img  style={{height:'56px', width:'120.26px', marginLeft:"70px"}} src="https://i.ibb.co/dLbmDJR/Logo.png" alt=""/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"50px"}}>
            <Form inline>
                <FormControl  type="text" placeholder="Search your Destination.." className="mr-sm-2" />
                </Form>

                <Nav className="mr-auto" >
                <Nav.Link style={{marginLeft:"45px", color:'white'}} href="#home">News</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'white'}} href="#link">Destination</Nav.Link>
                <Nav.Link style={{marginLeft:"45px" , color:'white'}} href="#link">Blog</Nav.Link>
                <Nav.Link style={{marginLeft:"45px" , color:'white'}} href="#link">Contact</Nav.Link>
                <Button style={{marginLeft:"45px" }} variant="warning">Login</Button>{' '}
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>

            <div className="container" style={{marginTop:"150px"}}>
                <div className="row">

                    <div className='col-md-3'>
                        <div className='-flex justify-content-between align-items-center'>
                            <h1 style={{color: 'white'}}>COX'S BAZAR</h1>
                            <p style={{color: 'white'}}>Cox's Bazar is a city, fishing port tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for it's long natural sandy beach and in it...</p>
                            <Button onClick={handleCoxBazarBooking} style={{marginLeft:"45px" }} variant="warning">Booking</Button>{' '}
                        </div>
                    </div>

                    <div className='col-md-3' onClick={handleCoxBazarBooking}>
                        <div className='-flex justify-content-between align-items-center'>
                            <div style={{height:'416px', width:'245px'}} className='coxbazar-background-image'>
                                <h3 style={{color: 'white', paddingTop:'350px', paddingLeft:'10px'}}>COX'S BAZAR</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='-flex justify-content-between align-items-center'>
                        <div style={{height:'416px', width:'245px'}} className='sreemangal-background-image'>
                                <h3 style={{color: 'white', paddingTop:'350px', paddingLeft:'10px'}}>SREEMANGAL</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='-flex justify-content-between align-items-center'>
                        <div style={{height:'416px', width:'245px'}} className='sundarbans-background-image'>
                                <h3 style={{color: 'white', paddingTop:'350px', paddingLeft:'10px'}}>SUNDARBANS</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button style={{borderRadius:'50%' , borderStyle:'none', marginLeft:'45%', marginTop:'50px', marginRight:'20px'}}>o</button>
            <button style={{borderRadius:'50%' , borderStyle:'none'}}>o</button>
        </Container>
    );
};

export default Home;