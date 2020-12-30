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
          console.log(data.list_section.edges)
          return (  
        <div>
            <Layout>
                <SEO title="Be Challenge 2021" />            
            </Layout>


            <section id="video" class="section-1 highlights image-center">
            <div class="container">

                <div class="row text-center intro">
                    <div class="col-12">
                        <h2>Thematic Areas</h2>
                        <p>Unveiling the Opportunities in Coastal Economy Of Pakistan</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-12 gallery">
                       
                           
                            <video width="100%"  autoPlay loop>
                                <source src={Videofile} type="video/mp4"></source>
                            </video>
                       
                    </div>
                </div>

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
            
            </div>
        )
      }}/>
)

  const Bluequery = graphql`
  {
    video_sections: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/blueeconomy/video_section/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
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