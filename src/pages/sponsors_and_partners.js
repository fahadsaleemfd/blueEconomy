import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

const Sponsors = () => (

    <StaticQuery query={sponserquery} render={data=>{
        const queryData = data.allMarkdownRemark.edges[0].node.frontmatter

        return (  
                <div>
                    <Layout>
                        <SEO title="Sponsors and Partners" />            
                   



        <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-center">
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                </nav>
                                <h1 class="mb-0 title effect-static-text">Sponsos and Partners</h1>
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
                    <div class="col-12 col-lg-12 align-self-top text" style={{textAlign:"center"}}>
                        <div class="row intro m-0">
                            <div class="col-12 p-0">
                                
                                <h2>{queryData.title1}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5" style={{textAlign:"left"}}>
                               <p>{queryData.description1}</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>


        <section id="about" class="section-1 highlights team image-right" style={{background:"black"}}>
            <div class="container">
                <div class="row">
              
                
                <div class="col-12 col-lg-12 align-self-top text" >
                        <div class="row intro m-0">
                            <div class="col-12 p-0" >
                                
                                <h2 style={{}} style={{textAlign:"center", color:"white"}}>{queryData.title2}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5">
                               <p style={{color:"white"}}>{queryData.description2}</p>
                            </div>
                        </div>
                </div>
                   
                </div>
            </div>
        </section>



      
       

       

   

        </Layout>
                    
               </div>
        )
        
    }}/>

)

const sponserquery = graphql`
    query sponser{
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/sponsers_and_partners/"}} 
      ) {
        edges {
          node {
            id
            frontmatter {
                title1
                description1
                link1
                date1
                title2
                description2
                link2
                date2
            
             
             
            }
           
          
          }
        }
      }
 }`
  

export default Sponsors