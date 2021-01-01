import {withPrefix, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet";

const Footer = ({ siteTitle }) => {

  return (
  <div>

<footer>


<section id="footer" class="odd footer offers">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3 footer-left">

              
               
            
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-phone-alt mr-2"></i>
                            (+92)333-0202729, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (+92)300-2017020
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-envelope mr-3"></i>
                            info@cambridgeadvisorsnet.com
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            Suite# 203, 2nd Floor, Plot No 37-C, 8th Lane Off Khayaban-e-Muslim, Bukhari Commercial, Phase 6 DHA, Karachi, Pakistan.
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="mt-4 btn outline-button smooth-anchor">GET IN TOUCH</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-9 p-0 footer-right">
                <div class="row items">
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                            <h4>About</h4>
                            <a href="#"><i class="icon-arrow-right"></i>The Company</a>
                            <a href="#"><i class="icon-arrow-right"></i>Institutional</a>
                            <a href="#"><i class="icon-arrow-right"></i>Social & Events</a>
                            <a href="#"><i class="icon-arrow-right"></i>Innovation</a>
                            <a href="#"><i class="icon-arrow-right"></i>Environment</a>
                            <a href="#"><i class="icon-arrow-right"></i>Technology</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                            <h4>Services</h4>
                            <a href="#"><i class="icon-arrow-right"></i>Audit & Assurance</a>
                            <a href="#"><i class="icon-arrow-right"></i>Financial Advisory</a>
                            <a href="#"><i class="icon-arrow-right"></i>Analytics M&A</a>
                            <a href="#"><i class="icon-arrow-right"></i>Middle Marketing</a>
                            <a href="#"><i class="icon-arrow-right"></i>Legal Consulting</a>
                            <a href="#"><i class="icon-arrow-right"></i>Regulatory Risk</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                            <h4>Support</h4>
                            <a href="#"><i class="icon-arrow-right"></i>Responsibility</a>
                            <a href="#"><i class="icon-arrow-right"></i>Terms of Use</a>
                            <a href="#"><i class="icon-arrow-right"></i>About Cookies</a>
                            <a href="#"><i class="icon-arrow-right"></i>Privacy Policy</a>
                            <a href="#"><i class="icon-arrow-right"></i>Accessibility</a>
                            <a href="#"><i class="icon-arrow-right"></i>Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="copyright" class="p-3 odd copyright">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-6 p-3 text-center">
                <p>Copyright 2012 - 2020 Cambridge Advisors Network | All Rights Reserved</p>
            </div>
        </div>
    </div>
</section>

</footer>





  
        </div>
    )
}



export default Footer
