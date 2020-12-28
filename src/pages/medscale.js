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

const Medscale = () => (
    
    <StaticQuery query={mediumscale} render={data=>{
            
        const fetchData = data.allMarkdownRemark.edges
  
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
                                <h1 class="mb-0 title effect-static-text">Medium Scale Startups</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section id="blog" class="section-1 showcase blog-grid filter-section projects">
            <div class="overflow-holder">
                <div class="container">
                    
                    <div class="row items filter-items">

                    {fetchData.map((tag,index) => (
                        
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","social","technology"]'>
                            
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src={tag.node.frontmatter.image} alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    {/* <Link to={node.fields.slug} class="d-lg-flex align-items-center"><i class="icon-user"></i></Link> */}
                                    {/* <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a> */}
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">

                                        <Link to={tag.node.fields.slug}>
                                            <h4>{tag.node.frontmatter.title }</h4>
                                            <p>{tag.node.frontmatter.description.substring(0,200)}</p>
                                        
                                        </Link>
                
                                    </div>
                                </div>
                            </div>
                        </div>  
                        
                        
                    ))}



                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <ul class="pagination justify-content-center">
                                    <li class="page-item">
                                        <a class="page-link" href="#" tabindex="-1">
                                            <i class="icon-arrow-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            <i class="icon-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
            
            
            
            </div>
        )
    }}/>
    )

  const mediumscale = graphql`
  query mediumscales{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/medscale/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            link
            image
            city
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



  
export default Medscale