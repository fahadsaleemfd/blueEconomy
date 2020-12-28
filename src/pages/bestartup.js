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

const Bestartup = () => (
    
  <StaticQuery query={Bestartupq} render={data=>{
            
    const queryData = data.allMarkdownRemark.edges[0].node.frontmatter

 
  
        return ( 
        <div>
            <Layout>
                <SEO title="Small Scale" />            
            </Layout>

            <section id="services" class="section-2 odd offers" style={{background:"black"}}>
            <div class="container">
                <div class="row intro">
                    <div class="col-12 col-md-12 align-self-center text-center text-md-left">
                 
                      <h2 class="mb-0">{queryData.title}</h2>
                       <p>{queryData.description}</p>
                    </div>
                   
                </div>
                <div class="row justify-content-center items">


                  {/* small sacle */}
                    <div class="col-12 col-md-6 item">
                        <div class="card">
                            <i class="icon icon-organization"></i>
                            <h4>{queryData.smallscale.title}</h4>
                            <p>{queryData.smallscale.description}</p>
                  
                            <img src={queryData.smallscale.image} class="fit-image" /> 
                            <a href="#"><i class="btn-icon pulse fas fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 item">
                    <div class="card">
                            <i class="icon icon-organization"></i>
                            <h4>{queryData.medscale.title}</h4>
                            <p>{queryData.medscale.description}</p>
                  
                            <img src={queryData.medscale.image} class="fit-image" /> 
                            <a href="#"><i class="btn-icon pulse fas fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div  class="col-12 col-md-6 item">
                    <div class="card">
                            <i class="icon icon-organization"></i>
                            <h4>{queryData.lgscale.title}</h4>
                            <p>{queryData.lgscale.description}</p>
                  
                            <img src={queryData.lgscale.image} class="fit-image" /> 
                            <a href="#"><i class="btn-icon pulse fas fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    
                  
                 
                </div>
            </div>
        </section>



        
            
            
            
        </div>
        )
      }}/>
     )

  const Bestartupq = graphql`
  query Bestartups{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/bestartup/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            smallscale{
              title
              description
              image
            }
            medscale{
              title
              description
              image              
            }
            lgscale{
              title
              description
              image              
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }`

export default Bestartup