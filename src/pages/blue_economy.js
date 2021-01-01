import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import Videofile from "../dist/assets/file.mp4"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import { node } from "prop-types"

const Blueeconomy = () => (
    
  <StaticQuery query={Bluequery} render={data=>{

          // const fetchData = data.allMarkdownRemark.edges
          console.log(data.video_sections.edges[0].node.frontmatter.title)

          return (  
        <div>
            <Layout>
                <SEO title="Blue Economy" />            
            
            <section class="hero p-0 odd">
            <div class="swiper-container full-slider slider-h-100 slider-h-auto">
                <div class="swiper-wrapper">

                    
                    <div class="swiper-slide slide-center">

                    <video loop autoPlay class="full-image" data-mask="40">
                            <source src={data.video_sections.edges[0].node.frontmatter.video} type="video/mp4"/>
                    </video>
                        {/* <img src="assets/images/bg-2.jpg" alt="Full Image" class="full-image" data-mask="40"/>   */}

                        <div class="slide-content row">
                            <div class="col-12 d-flex justify-content-start justify-content-md-center inner">
                                <div class="center text-left text-md-center">

                                 
                                    <h2 >{data.video_sections.edges[0].node.frontmatter.title}</h2>
                                    <p>{data.video_sections.edges[0].node.frontmatter.description}</p>
                                  
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
            {data.list_section.edges.map((tag,index) => (
              <div>
                <div class="row">
                    <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                        <div class="row intro m-0">
                            <div class="col-12 p-0">
                                
                                <h2>{tag.node.frontmatter.title}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                               <p>{tag.node.frontmatter.description}</p>
                            </div>
                        </div>
                    </div>
                    <div  class="col-12 col-lg-4">
                              
                                <img src={tag.node.frontmatter.image} class="fit-image" />    
                    </div>
                </div>
                <br></br><br></br><br></br>
                </div>
                ))}
            </div>
           
        
          
        </section>
        </Layout>
            </div>
        )
      }}/>
)

  const Bluequery = graphql`
  {
    video_sections: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/blueeconomy/video_section/"}}
    )  {
      edges {
        node {
          id
          frontmatter {
            
            title
            description
            video
        
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
    
    
    list_section: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/blueeconomy/list_section/"}}
    )  {
      edges {
        node {
          id
          frontmatter {
            
            title
            description
            image
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }


  }

 `



  
export default Blueeconomy