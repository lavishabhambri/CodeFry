import React from "react";
import "./about.css"
import logoImage  from "./../../images/codefry.png"

function About(){
    return(
    <div id="about">
        <div className="container about-container">
            <div className="row">
                <div className="col-md-6">
                    <img className="about-img" src={logoImage} alt="codefry" />
                </div>
                <div className="col-md-6">
                    <div className="about-heading-container">
                        <h2 className="about-heading">About Codefry</h2>
                    </div>
                    <div className="about-text-container">
                        <p className="about-text">Codefry is a web app build using the MERN stack, based upon the user’s Codeforces profile handles, helps programmers to code together and eases their tasks in the online schedule. The app is developed by Lavisha and Vaibhav.</p>
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
                <p>Codefry helps users to improve their coding skills by practising Codeforces problems by their tags. The user can also look at their solved problems by logging into their account.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4"> 
            <div className="text-center features-item">
              <div className="col-wrapper">
                <div className="icon-border"> 
                <i class="fas fa-list-ul color-l-blue"></i>
                {/* <i className="fas fa-users "></i> */}
                  {/* <i className="icon-design-pencil-rule-streamline color-l-blue"></i>  */}
                </div>
                <h5>Todo List</h5>
                <p>A personalised Todo list is available for the users to note down the deadlines of the coding contests and note the favourite problems.</p>
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
                <h5>Code editor & Codefry meet</h5>
                <p>A live code-editor is available for the users to create personalised room with other coders, run & debug codes and have video and audio calling feature.</p>
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