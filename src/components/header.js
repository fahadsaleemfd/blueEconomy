import {withPrefix, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet";

const Header = ({ siteTitle }) => {

  return (<div>
          <Helmet>        
                <meta name="theme-color" content="#21333e"/>
                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
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
                      <script src={withPrefix('assets/js/map.js')} type="text/javascript" />


                </Helmet>
  <header id="header">
        <nav class="navbar navbar-expand navbar-fixed" style={{background:'black'}}>
               
                <div class="container">

                    <ul class="navbar-nav items">
                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>HOME</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">About <i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <Link class="nav-link" to={'/can-and-msf'}>CAN and MSF</Link>
                                    <Link class="nav-link" to={'/sponsors_and_partners'}>Sponsors/Partners</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Ideas<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <Link to={'/bestartup'} class="nav-link">Startups<i class="icon-arrow-right"></i></Link>
                                    <Link to={'/smallscale'} class="nav-link">Small Scale<i class="icon-arrow-right"></i></Link>
                                    <Link to={'/medscale'} class="nav-link">Medium Scale</Link>
                                    <Link to={'/largescale'} class="nav-link">Large Scale</Link>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Tracks<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    {/* <a class="nav-link" href="/incubation"> */}
                                    <Link class="nav-link" to={'/incubation/'}>Incubation Tracks<i class="icon-arrow-right"></i></Link>   
                                    {/* </a> */}
                                    <Link class="nav-link" to={'/funding'}>Funding Orgnizations<i class="icon-arrow-right"></i></Link>
                                    <Link class="nav-link" to={'/business'}>Business Competition<i class="icon-arrow-right"></i></Link>
                                    <Link class="nav-link" to={'/international'}>Inernational Universities</Link>
                                    <Link class="nav-link" to={'/faqs'}>FAQS<i class="icon-arrow-right"></i></Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link to={'/bechallenge'} class="nav-link">Challenge 2021</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>Ideathon</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <Link to={'/resources'}>Resources</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">News & Events<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown"> 
                                    <Link class="nav-link" to={'/news'}>News<i class="icon-arrow-right"></i></Link>
                                    <Link class="nav-link" to={'/events'}>Events<i class="icon-arrow-right"></i></Link>   
                                </li>
                            </ul>
                        </li>

                    

                        

                       
                    </ul>

                    <ul class="navbar-nav action">
                        <li class="nav-item ml-3">
                             <Link href="#" to={'/contact_us'}  class="smooth-anchor btn ml-lg-auto primary-button">CONTACT US</Link>
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
