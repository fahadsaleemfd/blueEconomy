import {withPrefix, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet";


const Header = ({ siteTitle }) => {

  return (<div>
          <Helmet>        
                    
                      <meta name="theme-color" content="#21333e"/>
                      <script src={withPrefix('assets/js/vendor/jquery.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/jquery.easing.min.js.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/jquery.inview.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/popper.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/ponyfill.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/slider.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/animation.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/progress-radial.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/bricklayer.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/gallery.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/shuffle.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/cookie-notice.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/particles.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/main.js')} type="text/javascript" />


                </Helmet>
  <header class="home">
      <nav class="navbar navbar-expand top">
                <div class="container header">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link pl-0"><i class="fas fa-clock mr-2"></i>Open Hours: Mon - Sat - 9:00 - 18:00</a>
                        </li>
                    </ul>

                    <div class="ml-auto"></div>                 
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fas fa-phone-alt mr-2"></i>+1 (305) 1234-5678</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fas fa-envelope mr-2"></i>hello@example.com</a>
                        </li>
                    </ul>

                  
                    <ul class="navbar-nav icons">
                        <li class="nav-item social">
                            <a href="#" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item social">
                            <a href="#" class="nav-link"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="nav-item social">
                            <a href="#" class="nav-link pr-0"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>

                </div>
         </nav>

        <nav class="navbar navbar-expand navbar-fixed sub" style={{background:'black'}}>
                <div class="container header">

                
                    {/* <a class="navbar-brand" href="/">
                        <span class="brand">
                            <span class="featured">
                                <span class="first">Blue</span>
                            </span>
                            <span class="last">Economy</span>
                        </span>
                    </a> */}

                 
                    <div class="ml-auto"></div>


                    <ul class="navbar-nav items">
                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>HOME</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">About <i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <Link class="nav-link" to={'/about'}>CAN and MSF</Link>
                                    <a class="nav-link" href="#">Sponsors/Partners<i class="icon-arrow-right"></i></a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>Blue Economy</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Be Ideas<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <Link to={'/bestartup'}>BE Startups<i class="icon-arrow-right"></i></Link>
                                    <Link to={'/smallscale'}>Small Scale<i class="icon-arrow-right"></i></Link>
                                    <Link to={'/medscale'}>Medium Scale</Link>
                                    <Link to={'/largescale'}>Large Scale</Link>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">BE Tracks<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    {/* <a class="nav-link" href="/incubation"> */}
                                    <Link class="nav-link" to={'/incubation'}>Incubation Tracks<i class="icon-arrow-right"></i></Link>   
                                    {/* </a> */}
                                    <Link class="nav-link" to={'/funding'}>Funding Orgnizations<i class="icon-arrow-right"></i></Link>
                                    <Link class="nav-link" to={'/business'}>Business Competition<i class="icon-arrow-right"></i></Link>
                                    <Link class="nav-link" to={'/international'}>Inernational Universities</Link>
                                    <Link class="nav-link" to={'/faqs'}>FAQS<i class="icon-arrow-right"></i></Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a  href="/bechallenge" class="nav-link">BE Challenege 2021</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>Ideathon</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="/resource" class="nav-link">Resources</a>
                        </li>

                        

                       
                    </ul>

                  
                    <ul class="navbar-nav action">
                        <li class="nav-item ml-3">
   
                          <a href="#contact" class="smooth-anchor btn ml-lg-auto primary-button">CONTACT US</a>
                           
                        </li>
                    </ul>
                </div>
            </nav> 

  </header>
  </div>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
