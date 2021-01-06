import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import { Remarkable } from 'remarkable';
var md = new Remarkable();
const SingleFunding = ({data}) => {
        console.log(data.markdownRemark.frontmatter)
        return (  
                <div>
                    <Layout>
                        <SEO title="Be Challenge 2021" />            
                   

    <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-center">
                        <img src="assets/images/bg-wide.jpg" alt="Full Image" class="full-image" data-mask="80"/>
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 class="mb-0 title effect-static-text">{data.markdownRemark.frontmatter.title}</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </section>

        <section id="single" class="section-1 single">
            <div class="container">
                <div class="row content"> 
                    <div class="col-12 col-lg-8 p-0 text">
                        <div class="row intro">
                            <div class="col-12">
                                <h2 class="mb-0"><span>{data.markdownRemark.frontmatter.title}</span></h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 align-self-center">
                                
                                <div dangerouslySetInnerHTML={{__html:md.render(data.markdownRemark.frontmatter.description).substring(0,200)}}></div>
                                

                                <div class="mb-5 gallery">
                                        <img src={data.markdownRemark.frontmatter.image} class="fit-image" alt="Introduction Video"/>
                                    
                                </div>

                        
                            </div>
                        </div>

            
                    </div>
                    
                   
                    <aside class="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
    
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                                <h4 class="title">Tags</h4>
                                <div class="badges">
                                    <span class="badge"><a href="#">Consulting</a></span>
                                    <span class="badge"><a href="#">Audit</a></span>
                                    <span class="badge"><a href="#">Assurance</a></span>
                                    <span class="badge"><a href="#">Advisory</a></span>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </section>


        </Layout>
                    
                    
                    </div>
        )

                    }

 export const Funding_single = graphql`
  query single_funding($slug: String){
    markdownRemark(fields: { slug: { eq: $slug } }) {
                  id
                  frontmatter {
                          title
                           description
                           date
                           link
                           image
                    }
             
        
    }
  }
  
   `





  
export default SingleFunding