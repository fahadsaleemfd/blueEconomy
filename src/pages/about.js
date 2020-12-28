import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

const About = () => (

    <StaticQuery query={aboutquery} render={data=>{
        const queryData = data.allMarkdownRemark.edges[0].node.frontmatter

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
                                <h1 class="mb-0 title effect-static-text">About Us</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* first section start here */}

      
        <section id="about" class="section-1 highlights team image-right">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                        <div class="row intro m-0">
                            <div class="col-12 p-0">
                                
                                <h2>{queryData.title1}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5" style={{textAlign:"center"}}>
                               <p>{queryData.description1}</p>
                            </div>
                        </div>
                    </div>
                    <div  class="col-12 col-lg-4">
                       
                              
                                <img src={queryData.image1} class="fit-image" /> 
                             
                        
                    </div>
                </div>
            </div>
        </section>


        <section id="about" class="section-1 highlights team image-right" style={{background:"black"}}>
            <div class="container">
                <div class="row">
                <div  class="col-11 col-lg-4" style={{textAlign:"center"}}>
   
                       <img src={queryData.image2} class="fit-image" /> 
                    
                </div>
                
                <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                        <div class="row intro m-0">
                            <div class="col-12 p-0">
                                
                                <h2 style={{color:"white"}}>{queryData.title2}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5">
                               <p>{queryData.description2}</p>
                            </div>
                        </div>
                </div>
                   
                </div>
            </div>
        </section>



      
       

       

   

                    
                    
               </div>
        )
        
    }}/>

)

const aboutquery = graphql`
    query aboutus{
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/about/"}} 
      ) {
        edges {
          node {
            id
            frontmatter {
                title1
                description1
                image1
                link1
                date1
                title2
                description2
                image2
                link2
                date2
            
             
             
            }
           
          
          }
        }
      }
 }`
  

export default About