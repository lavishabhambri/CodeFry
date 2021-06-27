import React from "react";
import Input from "../common/input";
import Form from "../common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import * as userService from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "./register.css"

class Register extends Form {
  state = {
    data: { username: "", email: "", password: "", password2: "", name: "" },
    errors: { username: "", email: "", password: "", password2: "", name: "" },
  };
  schema = {
    name: Joi.string().required().label("Full Name"),
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
    password2: Joi.string().required().label("Confirm Password"),
  };
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //const errors = { ...this.state.errors };
        toast.error("User Already Registered");
        // this.setState({ errors });
      }
    }
  };
  render() {
    const { data, errors } = this.state;
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <ToastContainer />
          <div class="register-photo">
            <div class="form-container">
              <div class="image-holder"></div>
                <form onSubmit={this.handleSubmit}>
                  <h2 class="text-center"><strong>Create</strong> an account</h2>
                  <div class="form-group">
                    <Input
                      value={data.name}
                      onChange={this.handleChange}
                      label="Name"
                      name="name"
                      type="text"
                      error={errors.name}
                    />
                  </div>
                  <div class="form-group">
                    <Input
                      name="username"
                      value={data.username}
                      label="Codeforces Handle"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.username}
                    />
                    
                  </div>
                  <div class="form-group">
                    <Input
                      value={data.email}
                      onChange={this.handleChange}
                      label="Email ID"
                      type="text"
                      name="email"
                      error={errors.email}
                    />
                  </div>
                  <div class="form-group">
                    <Input
                      value={data.password}
                      onChange={this.handleChange}
                      label="Password"
                      type="password"
                      name="password"
                      error={errors.password}
                    />
                  </div>

                  <div class="form-group">
                    <Input
                      value={data.password2}
                      onChange={this.handleChange}
                      label="Confirm Password"
                      name="password2"
                      type="password"
                      error={errors.password2}
                    />
                  </div>
                  <div class="form-group">
                    <button className="btn btn-primary btn-block" disabled={this.validate()}>
                      Register
                    </button>
                  </div>
                </form>
          </div>
      </div>
    </React.Fragment>
      
    );
  }
}

export default Register;


{/* <React.Fragment>
        <ToastContainer />
        <div className="container-fluid col-lg-4 col-md-8">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              value={data.name}
              onChange={this.handleChange}
              label="Name"
              name="name"
              type="text"
              error={errors.name}
            />
            <Input
              name="username"
              value={data.username}
              label="Codeforces Handle"
              type="text"
              onChange={this.handleChange}
              error={errors.username}
            />
            <Input
              value={data.email}
              onChange={this.handleChange}
              label="Email ID"
              type="text"
              name="email"
              error={errors.email}
            />
            <Input
              value={data.password}
              onChange={this.handleChange}
              label="Password"
              type="password"
              name="password"
              error={errors.password}
            />
            <Input
              value={data.password2}
              onChange={this.handleChange}
              label="Confirm Password"
              name="password2"
              type="password"
              error={errors.password2}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-primary" disabled={this.validate()}>
                Register
              </button>
            </div>
          </form>
        </div>
      </React.Fragment> */}