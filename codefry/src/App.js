import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import NavBar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from "./services/httpService";
import { usersEndPoint } from "./config.json";
import jwtDecode from "jwt-decode";
import Log from "./components/Auth/login.jsx";
import Register from "./components/Auth/register.jsx"
import NotFound from './components/common/404';
import Logout from "./components/Auth/logout.jsx";
import DisplaySolvedProblems from "./components/UserStatus/usersolvedproblems";
import About from "./components/About/about.jsx";

class App extends React.Component {
  state = {};
  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user_jwt = jwtDecode(jwt);
      const user = await http.get(`${usersEndPoint}${user_jwt._id}`);
      this.setState({ user: user.data });
    } catch (ex) {}
  }
  render(){
    const { user } = this.state;
    return (
      <BrowserRouter>
        <NavBar user={user}/>
        <Switch>
            <Route exact path="/users/login" component={Log} />
            <Route exact path="/users/register" component={Register} />
            <Route exact path="/users/logout" component={Logout} />
            <Route exact path="/about" component={About} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
            <Route exact path="/users/login/solved" render={() => <DisplaySolvedProblems user={user} />}/>
            <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;