import React from 'react'
import './footer.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoImage from "./../../images/codefry.png"

function Footer() {
    return (
        <div>
            <footer style={{clear:"both", position:"relative" ,marginTop:"-1px"}} className="bg-dark text-center text-white">

                <div className="container p-4">
                    <section className="">
                        <div className="row">
                        <section class="mb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                            </section>
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-md-0 ">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >
                                    <a href="http://codeforces.com" target="_blank">
                                    <img
                                        src="https://codeforces.org/s/40577/images/codeforces-telegram-square.png"
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >

                                    <a href="https://www.codechef.com/" target="_blank">
                                    <img
                                        src="https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg"
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >

                                    <a href="https://atcoder.jp/"  target="_blank">
                                    <img
                                        src="https://img.atcoder.jp/assets/atcoder.png"
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >

                                    <a href="https://leetcode.com/"  target="_blank">
                                    <img
                                        src="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png"
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >

                                    <a href="https://www.topcoder.com/"  target="_blank">
                                    <img
                                        src="https://images.ctfassets.net/piwi0eufbb2g/6nCaCYxOpz6ody4U5cGIbd/69c23706c8f4e33aa67517616c3d4f4e/Topcoder-Generic-Banner.jpg"
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded footer-image"
                                    data-ripple-color="light"
                                >

                                    <a href="" target="_blank">
                                    <img
                                        src={logoImage}
                                        className="w-100 coding-sites-icon"
                                    />
                                        <div
                                            className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2021 Copyright, Made with <span style={{color:"red"}}>❤️</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer
