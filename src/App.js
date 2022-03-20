import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Apply from "./components/Apply";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import TipsDetails from "./components/TipsDetails";

function App  () {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/apply">
          <Apply></Apply>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/details/:id">
        <TipsDetails></TipsDetails>
        </Route>
       
        <Route path ="*">
<Notfound></Notfound>
        </Route>
        
      </Switch>
      </BrowserRouter>
      {/* <Home></Home> */}
      
      

    </div>
  );
};

export default App;
