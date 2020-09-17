import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [newUser,setNewUser] = useState(false);

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
    }


    //sign in with email and password
    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber =  /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...loggedInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if(newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                updateUserName(loggedInUser.name);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
              });
        }

        if(!newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log('sign in user info', res.user);
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
              });
        }
        e.preventDefault();
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name,
            })
            .then(function() {
            console.log("User name updated successfully");
            })
            .catch(function(error) {
            console.log(error);
            });
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
      
        <div className = 'container' style={{height:'591px', width:'570px', border:'1px solid lightgrey', textAlign:'center'}}> 
            <h1>Sign In / Sign UP form</h1>
            <form onSubmit = {handleSubmit}>
                {
                    newUser && <input style={{height:'40px', width:'461px'}} className ='form-group' type="text" onBlur={handleBlur} name="name" placeholder="Name" />
                }
                <br/>
                <input style={{height:'40px', width:'461px'}} className ='form-group' type="text" onBlur={handleBlur} name="email" placeholder = "Email" required/> <br/>
                <input style={{height:'40px', width:'461px'}} className ='form-group' type="password" onBlur={handleBlur} name="password" placeholder = "Password" required/> <br/>
                <input style={{height:'40px', width:'461px', backgroundColor:'#F9A51A', border:'none'}} className ='form-group' type="submit" value="Submit"/>
                
            </form>
            <p>Don't have an account?<Link style={{color: '#F9A51A'}} onClick={()=>setNewUser(!newUser)}>Create an account</Link></p>
            <hr/>
            <p onClick={handleFacebookSignIn} style={{border:'1px solid lightgrey', width:'350px', height:'51px', borderRadius:'15px', padding:'5px', marginLeft:'80px'}}><img style ={{hight:'37px', width:'37px'}} src="https://i.ibb.co/LhZWFmd/fb.png" alt=""/>
            Continue with Facebook
            </p>
            <p onClick={handleGoogleSignIn} style={{border:'1px solid lightgrey', width:'350px', height:'51px', borderRadius:'15px', padding:'5px', marginLeft:'80px'}}><img style ={{hight:'37px', width:'37px'}} src="https://i.ibb.co/VTBHT1n/google.png" alt=""/>
            Continue with Google
            </p>
            <p style={{color:'red',}}>{loggedInUser.error}</p>
        {
            loggedInUser.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged in'} successfully</p>
        }
        </div>
        </Container>
    );
};

export default Login;