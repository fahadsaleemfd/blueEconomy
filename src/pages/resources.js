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
            
        const fetchData = data.allMarkdownRemark.edges[0].node
  
        return (  
        <div>
            <Layout>
                <SEO title="Resources" />            
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
                                <h2>{fetchData.frontmatter.title}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5">
                                {fetchData.frontmatter.description}
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
                            
                            <h4>{fetchData.frontmatter.first.title}</h4>
                            <p>{fetchData.frontmatter.first.description}</p>
                            <a class='btn ml-lg-auto primary-button' target="_blank" href={fetchData.frontmatter.first.link}>Register</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            
                            <h4>{fetchData.frontmatter.second.title}</h4>
                            <p>{fetchData.frontmatter.second.description}</p>
                            <a class='btn ml-lg-auto primary-button' target="_blank" href={fetchData.frontmatter.second.link} >Register</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            
                            <h4>{fetchData.frontmatter.third.title}</h4>
                            <p>{fetchData.frontmatter.third.description}</p>
                            <a class='btn ml-lg-auto primary-button' target="_blank" href={fetchData.frontmatter.third.link} >Register</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 item">
                        <div class="card">
                            
                            <h4>{fetchData.frontmatter.fourth.title}</h4>
                            <p>{fetchData.frontmatter.fourth.description}</p>
                            <a class='btn ml-lg-auto primary-button' target="_blank" href={fetchData.frontmatter.fourth.link}>Register</a>
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/resources/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            first{
                title
                description
                link
            }
            second{
                title
                description
                link
            }
            third{
                title
                description
                link
            }
            fourth{
                title
                description
                link
            }
            
          }
         
        }
      }
    }
  }
  
   `



  
export default Resources