import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Search from './components/Search/Search';

function App() {
  return (
    <Router>
      <Switch>

        <Route path = '/home'>
          <Home></Home>
        </Route>

        <Route path = '/booking'>
          <Booking></Booking>
        </Route>

        <Route path = '/login'>
          <Login></Login>
        </Route>

        <Route path = '/search'>
          <Search></Search>
        </Route>

        <Route exact path = '/'>
          <Home></Home>
        </Route>

        <Route path = '*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
