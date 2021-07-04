import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import Input from "../common/input";
import Form from "../common/form";
import { login } from "../../services/authService";
import "./login.css"


class Log extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {
      email: "",
      passowrd: "",
    },
  };
  schema = {
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = async () => {
    // call the server;
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/users/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Invalid Email Or Password");
      }
    }
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    const { data, errors } = this.state;
    return (
    <div className="login-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form onSubmit={this.handleSubmit}>
            <h2 className="text-center"><strong>Login</strong> in your account</h2>
            <div className="form-group">
            <Input
              name="email"
              value={data.email}
              label="Email ID"
              onChange={this.handleChange}
              error={errors.email}
              placeholderValue="Email"
            />
          </div>
              
          <div className="form-group">
            <Input
              name="password"
              value={data.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
              type="password"
              placeholderValue="Password"
            />
          </div>

            <div className="form-group">
            <button
                className="btn btn-success btn-block"
                disabled={this.validate()}
                style={{marginBottom:"25px"}}
            >
              Login
          </button>
          </div>
          New User? <Link to="/users/register">Register Here</Link>
        </form>
      </div>
      <ToastContainer />
    </div>

        // <div className="container col-lg-3 col-md-6 border rounded mt-3">
        //   <h1 className="p-3">Login</h1>
        //
        //   <form onSubmit={this.handleSubmit}>
        //     <Input
        //       name="email"
        //       value={data.email}
        //       label="Email ID"
        //       onChange={this.handleChange}
        //       error={errors.email}
        //     />
        //     <Input
        //       name="password"
        //       value={data.password}
        //       label="Password"
        //       onChange={this.handleChange}
        //       error={errors.password}
        //       type="password"
        //     />
        //     <div className="text-center">
        //       <button
        //         className="btn btn-primary m-3"
        //         disabled={this.validate()}>
        //         Login
        //       </button>
        //     </div>
        //   </form>
        // </div>

        // <div className="container col-lg-3 col-md-6 border rounder mt-1 p-3 text-center">
        //   New User? <Link to="/users/register">Register Here</Link>
        // </div>
    );
  }
}

export default Log;
