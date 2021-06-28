import React from "react";
import "./about.css"
import logoImage  from "./../../images/codefry.png"

function About(){
    return(
    <div id="about">
        <div className="container about-container">
            <div className="row">
                <div className="col-md-6">
                    <img className="about-img" src={logoImage} alt="codefry-image" />
                </div>
                <div className="col-md-6">
                    <div className="about-heading-container">
                        <h2 className="about-heading">About Codefry</h2>
                    </div>
                    <div className="about-text-container">
                        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis enim cumque quo repellat soluta quidem odit! Labore, ut? Aliquid alias nulla modi quam, rem animi eum cumque commodi voluptas.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            
        <section id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title text-left feature-title">Features</h3>
            <div className="titleHR"><span></span></div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4"> 
            <div className="text-center features-item">
              <div className="col-wrapper">
                <div className="icon-border"> 
                    <i className="fas fa-code color-l-purple"></i>
                  {/* <i className="icon-design-graphic-tablet-streamline-tablet color-l-orange"></i>  */}
                </div>
                <h5>Coding Skills</h5>
                <p>Nulla vitae libero pharetra augue. Etiam porta malesuada magna mollis euismod consectetur sem urdom tempus porttitor.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4"> 
            <div className="text-center features-item">
              <div className="col-wrapper">
                <div className="icon-border"> 
                <i className="fas fa-users color-l-blue"></i>
                  {/* <i className="icon-design-pencil-rule-streamline color-l-blue"></i>  */}
                </div>
                <h5>Multiple Users</h5>
                <p>Nulla vitae libero pharetra augue. Etiam porta malesuada magna mollis euismod consectetur sem urdom tempus porttitor.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4"> 
            <div className="text-center features-item">
              <div className="col-wrapper">
                <div className="icon-border"> 
                <i class="fas fa-video color-l-yellow"></i>
                  {/* <i className="icon-speech-streamline-talk-user color-l-yellow"></i>  */}
                </div>
                <h5>Live Code editor</h5>
                <p>Nulla vitae libero pharetra augue. Etiam porta malesuada magna mollis euismod consectetur sem urdom tempus porttitor.</p>
              </div>
            </div>
          </div>
        </div> 
          
      </div>
      </section>
        </div>
    </div>
        
    )
}

export default About;