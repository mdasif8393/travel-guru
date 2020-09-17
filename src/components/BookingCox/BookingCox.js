import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './BookingCox.css'
const Booking = () => {
    const history = useHistory();
    const handleBooking = () => {
        history.push('/search/coxbazar');
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


            <div className="container" style={{marginTop:"150px", marginLeft:'75px'}}>
                <div className="row">

                    <div className='col-md-4'>
                        <div style={{marginTop:'25px'}} className='-flex justify-content-between align-items-center'>
                            <h1 style={{color: 'white'}}>COX'S BAZAR</h1>
                            <small style={{color: 'white'}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</small>

                        </div>
                    </div>

                    <div className='col-md-6'>
                            <div style={{marginLeft:'90px'}} className='-flex justify-content-between align-items-center'>
                            <Form style={{backgroundColor:'#ffff', padding:'10px', borderRadius:'5px'}}>
                                <Form.Group   controlId="formGroupEmail">
                                    <Form.Label ><small>Origin</small></Form.Label>
                                    <Form.Control style={{backgroundColor:'#F2F2F2'}} type="text" placeholder="Dhaka" />
                                </Form.Group>

                                <Form.Group   controlId="formGroupEmail">
                                    <Form.Label ><small>Destination</small></Form.Label>
                                    <Form.Control style={{backgroundColor:'#F2F2F2'}} type="text" placeholder="Cox's Bazar" />
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Label ><small>From</small></Form.Label>
                                        <Form.Control style={{backgroundColor:'#F2F2F2'}} type="date"/>
                                    </Col>
                                        <Col>
                                        <Form.Label ><small>To</small></Form.Label>
                                        <Form.Control style={{backgroundColor:'#F2F2F2'}} type="date"/>
                                    </Col>
                                </Row>
                                <button onClick={handleBooking} style={{marginTop:"20px", width:'415px', height:'40px', backgroundColor:'#F9A51A', borderStyle:'none', borderRadius:'5px'}}>Start Booking</button>
                                </Form>
                                
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Booking;