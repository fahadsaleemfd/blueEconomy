import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import { node } from "prop-types"

const Contact = () => {
    
  
        return (  
            <div>
                 <Layout>
                      <SEO title="Be Challenge 2021" />            
                 </Layout>

        <section class="section-2">
            <div class="container">
                <h2 style={{textAlign:"center"}}>CONTACT US</h2>
                <div class="row">
                    
                    
                    <div class="col-12 col-lg-6">
                         <div class="row form-group-margin">

                                <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                     <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>

                                <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                     <p>Suite# 203, 2nd Floor, Plot No 37-C, 8th Lane Off Khayaban-e-Muslim, Bukhari Commercial, Phase 6 DHA, Karachi, Pakistan</p>
                                </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                        <p>(+92)333-0202729 , (+92)300-2017020</p>
                                       
                                    </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                           <i class="fa fa-envelope" aria-hidden="true"></i>

                                    </div>

                            <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                <p>bei@cambridgeadvisorsnetwork.com</p>
                            </div>

                            </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <form>
                            <input type="hidden" name="section" value="nexgen_form"/>

                            <input type="hidden" name="reCAPTCHA"/>
                           

                            <div class="row form-group-margin">
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="name" class="form-control field-name" placeholder="Name"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="last_name" class="form-control field-email" placeholder="Last Name"/>
                                </div>
                                <br></br>
                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="email" class="form-control field-phone" placeholder="Email"/>
                                </div>
                                <div class="col-12 m-0 p-2 input-group">
                                    <textarea name="message" class="form-control field-message" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 col-12 m-0 pl-md-2">
                                    <span class="form-alert"></span>
                                </div>
                                <div class="col-12 input-group m-0 p-2">
                                    <a class="btn primary-button">SEND</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-3 odd" style={{background:"black"}}>
            <div class="container smaller">
                <div class="row intro">
                   
                </div>
                <div class="row">
                  Map will be display here  
                </div>
            </div>
        </section>

            
            </div>
        )

    }

  



  
export default Contact