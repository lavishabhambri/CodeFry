import React, { Component } from 'react'
import "./navbar.css";
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:"0px"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-white" href="#"><span><strong style={{color:"#F4A4A4", fontSize:"22px", fontWeight:"bold"}}>Codefry&nbsp;<i className="fas fa-code"></i></strong></span></a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
                    <li>
                    <button type="button" className="btn btn-info" id="navbar-button" ><span style={{color:"#000"}}>Login <i className="fab fa-google"></i></span></button>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;