import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import NavBar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render(){
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
}

export default App;
