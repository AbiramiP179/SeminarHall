import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import Bookingform from './Bookingform';
import Login from './Login';
import {About} from './About';
import Home from './Home';
import signup from './signup'
import 'tachyons';

function App() {
  return (
   
      <div className="App">
       <React.Fragment>
        <NavigationBar />
  <Router>
    
    <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/signup" component={signup} />
  <Route path="/bookings" component={Bookingform} />
</Switch>
    
  </Router>
</React.Fragment>
       
    </div>
  );
}

export default App;
