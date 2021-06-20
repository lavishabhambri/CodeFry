import "./App.css";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import http from "./services/httpService";
import NavBar from "./components/common/NavBar";
//eslint-disable-next-line
import ProtectedRoute from "./components/common/protectedRoute";
import Home from "./components/Home/Home";
import Log from "./components/Auth/login";
import Logout from "./components/Auth/logout";
import Register from "./components/Auth/register";
import NotFound from "./components/common/404";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function Start() {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user_jwt = jwtDecode(jwt);
        const USER = await http.get(
          `http://localhost:4000/users/${user_jwt._id}`
        );
        setUser({ user: USER, isAuthenticated: true });
      }
    }
    Start();
  }, []);
  return (
    <div>
      <NavBar user={user} />
      <BrowserRouter>
        <Switch>
            <Route path="/users/login" component={Log} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path='/' component={Home} />
            <Redirect from="/users" to="/users/login" />
            <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
