import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import NavBar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
