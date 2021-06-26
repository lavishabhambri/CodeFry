import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import NavBar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from "./components/Auth/login.jsx";
import Register from "./components/Auth/register.jsx"
import NotFound from './components/common/404';
import Logout from "./components/Auth/logout.jsx";
class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/users/login" component={Log} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
