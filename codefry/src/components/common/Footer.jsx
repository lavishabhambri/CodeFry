import React from 'react'
import './footer.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoImage from "./../../images/codefry.png"

function Footer() {
    return (
      <div>
        <footer
          style={{ clear: "both", position: "relative", marginTop: "-1px" }}
          className="bg-dark text-center text-white"
        >
          <div className="container p-4">
            <section className="">
              <div className="row">
                <section class="mb-4">
                  {/* <span style={{color:"orange"}}></span> */}
                  <p style={{ fontSize: "15px", margin: "20" }}>
                    <span style={{ color: "orange" }}>Codefry</span> is a coding
                    application that helps all the users to practice codeforces
                    problems by their tags, look at their solved problems, mark
                    the problems in the{" "}
                    <span style={{ color: "orange" }}>
                      Codefry Todo List <i class="fas fa-clipboard"></i>
                    </span>{" "}
                    and create a coding-room with other coders using the{" "}
                    <span style={{ color: "orange" }}>
                      codelive editor <i class="fas fa-code"></i>
                    </span>{" "}
                    and use the{" "}
                    <span style={{ color: "orange" }}>
                      {" "}
                      video <i class="fas fa-video"></i>{" "}
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "orange" }}>
                      audio <i class="fas fa-volume-up"></i>{" "}
                    </span>
                    calling feature.
                  </p>
                </section>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-md-0 ">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a
                      href="http://codeforces.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://codeforces.org/s/40577/images/codeforces-telegram-square.png"
                        className="w-100 coding-sites-icon"
                        alt="codeforces"
                        a
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a
                      href="https://www.codechef.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg"
                        className="w-100 coding-sites-icon"
                        alt="codechef"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a
                      href="https://atcoder.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.atcoder.jp/assets/atcoder.png"
                        className="w-100 coding-sites-icon"
                        alt="atcoder"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a
                      href="https://leetcode.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png"
                        className="w-100 coding-sites-icon"
                        alt="leetcode"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a
                      href="https://www.topcoder.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://images.ctfassets.net/piwi0eufbb2g/6nCaCYxOpz6ody4U5cGIbd/69c23706c8f4e33aa67517616c3d4f4e/Topcoder-Generic-Banner.jpg"
                        className="w-100 coding-sites-icon"
                        alt="topcoder"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                    data-ripple-color="light"
                  >
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={logoImage}
                        className="w-100 coding-sites-icon"
                        alt="codefry"
                      />
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright, Made with <span style={{ color: "red" }}>❤️</span>
          </div>
        </footer>
      </div>
    );
}

export default Footer
