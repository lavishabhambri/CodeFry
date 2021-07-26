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
          <ul
            className="navbar-nav mr-auto mt-2 mt-lg-0"
            style={{ textAlign: "right", marginRight: "20px" }}
          >
            <li className="nav-item active">
              {/* eslint-disable-next-line */}
              <a
                className="navbar-brand text-white"
                style={{
                  paddingBottom: "0%",
                  paddingTop: "0%",
                  textAlign: "left",
                }}
              >
                <span>
                  <strong
                    style={{
                      color: "#F4A4A4",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    <img src={logoImage} style={{ width: "20%" }} alt="codefry"/>
                  </strong>
                </span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white navbar-item1" href="/">
                <span className="navbar-item">Home</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white no-decoration"
                href="/users/login/solved"
              >
                <span className="navbar-item">Problems</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white no-decoration" href="/codelive">
                <span className="navbar-item">Code-Live</span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white no-decoration" target="_blank" href=" https://codefrymeet.herokuapp.com/">
                <span className="navbar-item">Meet</span>{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white no-decoration" href="/about">
                <span className="navbar-item">About</span>{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>

            <li>
              {!user && (
                <button
                  type="button"
                  className="btn btn-info"
                  id="navbar-button"
                >
                  <a href="/users/login" style={{ textDecoration: "none" }}>
                    <span style={{ color: "#000" }}>
                      Login <i className="fab fa-google"></i>
                    </span>
                  </a>
                </button>
              )}
            </li>
            <li>
              {user && (
                <li
                  class="nav-item dropdown"
                  style={{ margin: "5px auto auto 25px" }}
                >
                  <i
                    className="fas fa-user-circle nav-link"
                    style={{ fontSize: "26px", color: "#FFC947" }}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      style={{ textDecoration: "none" }}
                      class="dropdown-item todo-dropdown-items"
                      // href="/todos/create"
                    >
                      <a
                        style={{ textDecoration: "none" }}
                        target="blank"
                        href={
                          "https://codeforces.com/profile/" + user.CF_username
                        }
                      >
                        {user.CF_username}
                      </a>
                    </a>

                    <a
                      style={{ textDecoration: "none" }}
                      class="dropdown-item todo-dropdown-items"
                      href="/todos/create"
                    >
                      My Todos
                    </a>
                    {/* <a
                      style={{ textDecoration: "none" }}
                      class="dropdown-item todo-dropdown-items"
                      href="/todos"
                    >
                      My Todos
                    </a> */}
                    <div class="dropdown-divider"></div>
                    <a
                      style={{ textDecoration: "none" }}
                      class="dropdown-item todo-dropdown-items"
                      href="/users/logout"
                    >
                      Logout
                    </a>
                  </div>
                </li>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

// {user && (
//   <li>
//     <a
//       className="nav-link text-white no-decoration"
//       href={"https://codeforces.com/profile/" + user.CF_username}
//       target="blank"
//     >
//       <span className="navbar-item" style={{color:"#FFC947"}}>
//         <i className="fas fa-user-circle" style={{fontSize:"20px"}}></i>&nbsp;{user.CF_username}
//       </span>{" "}
//       <span className="sr-only">(current)</span>
//     </a>
//   </li>
// )}

// {user && (
// <button
//   type="button"
//   className="btn btn-info"
//   id="navbar-button"
// >
//   <a href="/users/logout" style={{ textDecoration: "none" }}>
//     <span style={{ color: "#000" }}>Logout</span>
//   </a>
// </button>
//
