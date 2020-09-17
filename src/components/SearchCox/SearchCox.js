import { Map } from 'google-maps-react';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import GoogleMapCox from '../GoogleMapCox/GoogleMapCox';
import GoogleMap from '../GoogleMapCox/GoogleMapCox';
import './SearchCox.css'

const SearchHotel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () =>{
        setLoggedInUser({});
    }
    return (
        <Container style={{height:'900px', width:'1440px'}}> 

            <Navbar expand="lg" style={{paddingTop:'30px'}}>
                <img  style={{height:'56px', width:'120.26px', marginLeft:"70px"}} src="https://i.ibb.co/dLbmDJR/Logo.png" alt=""/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"50px"}}>
                <Nav className="mr-auto" >
                <Nav.Link style={{marginLeft:"150px", color:'black'}} href="#home">News</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Destination</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Blog</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">Contact</Nav.Link>
                <Nav.Link style={{marginLeft:"45px", color:'black'}} href="#link">{loggedInUser.name}</Nav.Link>
                <Button onClick={handleSignOut} style={{marginLeft:"45px" , color:'black'}} variant="danger">Sign Out</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <hr/>
            <small>252 stays Sep 13-20 3 guests</small>
            <h4>Stay in Cox's Bazar</h4>
            <div className="container" style={{marginTop:"35px"}}>
                <div className="row"> 

                    <div className='col-md-6'>
                        <div className='-flex justify-content-between align-items-center'>
                            <div style={{display:'flex', marginBottom:"30px"}}>
                                <img className='hotel-room-image' src="https://i.ibb.co/gPp7K1D/Rectangle-26.png" alt=""/>
                                <div style={{marginLeft:'15px', marginTop:'8px'}}>
                                    <p>Light bright airy stylish apt & safe peaceful stay</p>
                                    <small className="small-text-color">4 guests  2 bedrooms  2 beds  2 baths</small><br/>
                                    <small className="small-text-color">Wifi Air Condition Kitchen</small><br/>
                                    <small className="small-text-color">Cancellation fexibility available</small> <br/>
                                    <small className="small-text-color"><img style={{height:'15.58px', width:'16.54px'}} src="https://i.ibb.co/r006Bxc/star-1.png" alt=""/> <span style={{color:'black'}}>4.9 (25) $34/</span>night $167 total</small>
                                </div>
                            </div>
                        </div>
                        <div className='-flex justify-content-between align-items-center'>
                            <div style={{display:'flex', marginBottom:"30px"}}>
                                <img className='hotel-room-image' src="https://i.ibb.co/R4WH0MM/Rectangle-27.png" alt=""/>
                                <div style={{marginLeft:'15px', marginTop:'8px'}}>
                                    <p>Apartment in Lost Panorama</p>
                                    <small className="small-text-color">4 guests  2 bedrooms  2 beds  2 baths</small><br/>
                                    <small className="small-text-color">Wifi Air Condition Kitchen</small><br/>
                                    <small className="small-text-color">Cancellation fexibility available</small> <br/>
                                    <small className="small-text-color"><img style={{height:'15.58px', width:'16.54px'}} src="https://i.ibb.co/r006Bxc/star-1.png" alt=""/> <span style={{color:'black'}}>4.8 (10) $52/</span>night $198 total</small>
                                </div>
                            </div>
                        </div>
                        <div className='-flex justify-content-between align-items-center'>
                            <div style={{display:'flex', marginBottom:"30px"}}>
                                <img className='hotel-room-image' src="https://i.ibb.co/3yjv4xS/Rectangle-28.png" alt=""/>
                                <div style={{marginLeft:'15px', marginTop:'8px'}}>
                                    <p>AR Lounge & Pool (r&r + b&b</p>
                                    <small className="small-text-color">4 guests  2 bedrooms  2 beds  2 baths</small><br/>
                                    <small className="small-text-color">Wifi Air Condition Kitchen</small><br/>
                                    <small className="small-text-color">Cancellation fexibility available</small> <br/>
                                    <small className="small-text-color"><img style={{height:'15.58px', width:'16.54px'}} src="https://i.ibb.co/r006Bxc/star-1.png" alt=""/> <span style={{color:'black'}}>4.9 (20) $44/</span>night $176 total</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{height: '630px', width:'450px'}} className='col-md-6'>
                        <div  className='-flex justify-content-between align-items-center'>
                            <GoogleMapCox ></GoogleMapCox>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        
    );
};

export default SearchHotel;
