import React, { Component } from "react";
import "./navbar.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logoImage from "./../../images/codefry.png";

class Navbar extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "0px" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-white" style={{paddingBottom:"0%", paddingTop:"0%"}} href="#"><span><strong style={{color:"#F4A4A4", fontSize:"22px", fontWeight:"bold"}}><img src={logoImage} style={{width:"20%"}}></img></strong></span></a>                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link text-white navbar-item1" href="#"><span className="navbar-item">Home</span> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white no-decoration"  href="#"><span className="navbar-item">Problems</span> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white no-decoration" href="#"><span className="navbar-item">Video Meet</span> </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white no-decoration"  href="#"><span className="navbar-item">About us</span>  <span className="sr-only">(current)</span></a>
                    </li>
                    {/* PROFILE BUTTON */}
                    {/* <li className="nav-item">
                        <a className="nav-link text-white" id="navbar-item5" href="#"><i className="fas fa-user-circle"></i></a>
                    </li> */}
            {user && (
              <li>
                <a
                  className="nav-link text-white no-decoration"
                  href={"https://codeforces.com/profile/" + user.CF_username}
                  target="blank"
                >
                  <span className="navbar-item">
                    <i className="fas fa-user-circle"></i> Hi {user.CF_username}
                  </span>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            )}
            <li>
              {!user && (
                <button
                  type="button"
                  className="btn btn-info"
                  id="navbar-button"
                >
                  <a href="/users/login" style={{ textDecoration:"none" }}>
                    <span style={{ color: "#000" }}>
                      Login <i className="fab fa-google"></i>
                    </span>
                  </a>
                </button>
              )}
              {user && (
                <button
                  type="button"
                  className="btn btn-info"
                  id="navbar-button"
                >
                  <a href="/users/logout">
                    <span style={{ color: "#000" }}>Logout</span>
                  </a>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
