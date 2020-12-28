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

const Resources = () => (
    
    <StaticQuery query={Resourcesq} render={data=>{
        console.log(data)
            
        // const fetchData = data.allMarkdownRemark.edges
  
        return (  
        <div>
            <Layout>
                <SEO title="Be Challenge 2021" />            
            </Layout>

            <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div class="swiper-wrapper">

                  
                    <div class="swiper-slide slide-center">

                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">

                        
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                </nav>
                                <h1 class="mb-0 title effect-static-text">Resources</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section id="about" class="section-1 highlights team image-right">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12 align-self-top text">
                        <div class="row intro m-0">
                            <div class="col-12  p-0">
                                <h2><span class="featured"></span></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5">
                                {/* {fetchData.description} */}
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>


        <section id="features" class="section-3 features offers">
            <div class="container">
                <div class="row justify-content-center items">

                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            <i class="icon featured icon-people"></i>
                            <h4>Human Capital</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia nauris lacus tellus.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            <i class="icon featured icon-people"></i>
                            <h4>Human Capital</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia nauris lacus tellus.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            <i class="icon featured icon-people"></i>
                            <h4>Human Capital</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia nauris lacus tellus.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            <i class="icon featured icon-people"></i>
                            <h4>Human Capital</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia nauris lacus tellus.</p>
                        </div>
                    </div>
                   
                
                </div>
            </div>
        </section>
            
            
            
            
            </div>
        )
    }}/>
    )

  const Resourcesq = graphql`
  query resourcesquery{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/business/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            
          }
         
        }
      }
    }
  }
  
   `



  
export default Resources