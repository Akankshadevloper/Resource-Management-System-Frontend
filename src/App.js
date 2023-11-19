import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";

import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/signup" component={SignUp}></Route>
         <Route path="/login" component={Login}></Route> 
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
