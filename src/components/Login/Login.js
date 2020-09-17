import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    //Google login
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then (res  => {
            const {displayName, photoURL, email} = res.user;
            const googleSignInUser = {
                isSignedIn : true,
                name : displayName,
                email: email,
                photo: photoURL
            };
            setLoggedInUser(googleSignInUser);
            history.replace(from);
          })
          .catch(err =>{
            console.log(err)
        });
    }

    //Facebook login
    const handleFacebookSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;
            const facebookSignInUser = {
                isSignedIn : true,
                name : displayName,
                email: email,
                photo: photoURL
            };
            console.log(facebookSignInUser);
            setLoggedInUser(facebookSignInUser);
            history.replace(from);
        })
        .catch(err =>{
            console.log(err)
        });
        // .then(function(result) {
           
        //     var token = result.credential.accessToken;
        //     var user = result.user;
        //     setLoggedInUser(user);
        //     history.replace(from);
        //     console.log('fb user after sign in', user);
        //   }).catch(function(error) {
        //       console.log(error);
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     var email = error.email;
        //     var credential = error.credential;
        //   });
    }


    //Sign Out 
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res =>{
            const signedOutUser = {
                isSignedIn : false,
                name : '',
                photo : '',
                email : ''
            }
            setLoggedInUser(signedOutUser);
        })
        .catch(error =>{

        })
    }


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

            <Button onClick={handleGoogleSignIn}>Google Sign In </Button>  <br/>
            <Button onClick={handleFacebookSignIn}>Facebook Sign In</Button> <br/>
            <Button onClick={handleSignOut}>Sign Out</Button> <br/>


        </Container>
    );
};

export default Login;