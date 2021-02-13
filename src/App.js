import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, 
  Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Breeds from "./components/Breeds";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {    
  return (
    <>   
      <Router>
        <Navbar />
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/About-us" exact component={AboutUs} />
          <Route path ="/Breeds" exact component={Breeds} />
          <Route path ="/SignUp" exact component={SignUp} />
          <Route path = "/Login" exact component={Login} />
        </Switch>
      </Router> 
    </>
  );
}

export default App;
