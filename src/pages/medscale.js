import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql } from "gatsby"
import Pagination from "../components/pagination"

export default class Mediumscalecomp extends React.Component {

    render() {

      const posts = this.props.data.allMarkdownRemark.edges
      const totalPages = this.props.data.allMarkdownRemark.edges.length
      const { currentPage, numPages } = this.props.pageContext
      const isFirst = currentPage === 1
      const isLast = currentPage === numPages
      const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
      const nextPage = (currentPage + 1).toString()
      const path = "/medscale/";


      return (
        <div>
            <Layout>
                <SEO title="Medium Scale" />            
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

                    {posts.map(({ node }) => {
                        return (
                        
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","social","technology"]'>
                            
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src={node.frontmatter.image} alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    {/* <Link to={node.fields.slug} class="d-lg-flex align-items-center"><i class="icon-user"></i></Link> */}
                                    {/* <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a> */}
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">

                                        <Link to={node.fields.slug}>
                                            <h4>{node.frontmatter.title }</h4>
                                            <p>{node.frontmatter.description.substring(0,200)}</p>
                                        
                                        </Link>
                
                                    </div>
                                </div>
                            </div>
                        </div>  
                        
                        
                        )
                        
                        
                    })}



                    </div>
                    <Pagination prevPage={prevPage} nextPage={2} isFirst={true} isLast={false} currentPage={'1'} numPages={totalPages} path={path} />
                </div>
            </div>
        </section>
            
            
            
            
            </div>
      )
    }
  }

export const mediumScaleIndex = graphql`
  query mediumScalesQuery{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/medscale/"}} 
    limit : 2
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