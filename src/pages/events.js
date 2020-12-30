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

const Eventspage = () => (

    <StaticQuery query={Eventquery} render={data=>{
        console.log(data)


        return (  
        <div>
            <Layout>
                <SEO title="Events" />            
            </Layout>

        <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-center">
                        {/* <img src="assets/images/bg-wide.jpg" alt="Full Image" class="full-image" data-mask="80"/> */}
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 class="mb-0 title effect-static-text">Events</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section id="result" class="section-1 offers">
            <div class="container">
            <div class="row items">
            {data.allMarkdownRemark.edges.map((tag,index) => (

                <div class="col-12 col-md-4 item">
                    <div class="card">
                        <div class="col-12">
                            <img src={tag.node.frontmatter.image} alt="Logo" class="logo" class="fit-image"/>
                            <h4>{tag.node.frontmatter.title}</h4>
                            <p>{tag.node.frontmatter.description.substring(0,100)}</p>
                            <Link to={tag.node.fields.slug}>Read more</Link>
                        </div>
                    </div>
                </div>
             
             ))}
              
            </div>
            
            </div>
        </section>

            </div>
        )
    }}/>
)

const Eventquery = graphql`
  query eventindex{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/news_and_events/events/"}} 
    ) {
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
          
        }
      }
    }
  }
  
   `

  



  
export default Eventspage