import React from "react"
import { StaticQuery,Link } from "gatsby"
import bkImage from "../dist/assets/images/about-5.jpg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";
import Videofile from "../dist/assets/file.mp4"

const IndexPage = () => (

  <StaticQuery query={Homepage} render={data=>{

    console.log(data)


  return (  
  <Layout>
    <SEO title="Home" />
    <section class="hero p-0 odd">
            <div class="swiper-container full-slider slider-h-100 slider-h-auto">
                <div class="swiper-wrapper">

                    
                    <div class="swiper-slide slide-center">

                    <video loop autoPlay class="full-image" data-mask="40">
                             <source src={data.allMarkdownRemark.edges[0].node.frontmatter.video} type="video/mp4"/> */}
                            
                    </video>
                        {/* <img src="assets/images/bg-2.jpg" alt="Full Image" class="full-image" data-mask="40"/>   */}

                        <div class="slide-content row">
                            <div class="col-12 d-flex justify-content-start justify-content-md-center inner">
                                <div class="center text-left text-md-center">

                                 
                                    <h2 >{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                                    
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            </section>

<section id="about" class="section-1 highlights team image-right" style={{padding:"50px 0"}}>
        
        <div class="container">
         
            <div>
              <div class="row">
                  <div class="col-12 col-lg-12 align-self-top text" style={{textAlign:"center"}}>
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.section1title}</h2>

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 col-lg-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                            
                             <div dangerouslySetInnerHTML={{__html:data.allMarkdownRemark.edges[0].node.html}}></div>

                            
                          </div>
                      </div>
                  </div>
                 
              </div>
              <br></br><br></br><br></br>
              </div>
      
          </div>
         
      </section>

      <section id="about" class="section-1 highlights team image-right" style={{padding:"50px 0"}}>
        
        <div class="container">
        
            <div>
              <div class="row">
                  <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.section2title}</h2>

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                             <p>{data.allMarkdownRemark.edges[0].node.frontmatter.section2description}</p>
                          </div>
                      </div>
                  </div>
                  <div  class="col-12 col-lg-4">
                            
                              <img src={data.allMarkdownRemark.edges[0].node.frontmatter.section2image} class="fit-image" />    
                             
                  </div>
              </div>
              <br></br><br></br><br></br>
              </div>
              {/* ))} */}
          </div>
         
      
        
      </section>






  </Layout>
  
  )
}}/>
)
export const Homepage = graphql`
  query homepagequery{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/homepage/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            video
            section1title
            section2title
            section2description
            section2image
            image
          }
          html
          excerpt
        }
      }
      
    }
  }
  
   `
export default IndexPage
