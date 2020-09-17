import React, { createContext, useState } from 'react';
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
import BookingCox from './components/BookingCox/BookingCox';
import Login from './components/Login/Login';
import SearchCox from './components/SearchCox/SearchCox';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>

          <Route path = '/home'>
            <Home></Home>
          </Route>

          <Route path = '/booking/coxbazar'>
            <BookingCox></BookingCox>
          </Route>

          <Route path = '/login'>
            <Login></Login>
          </Route>
        
          <PrivateRoute path = '/search/coxbazar'>
            <SearchCox></SearchCox>
          </PrivateRoute>

          <Route exact path = '/'>
            <Home></Home>
          </Route>

          <Route path = '*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
