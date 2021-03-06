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
import Pagination from "../components/pagination"

export default class International extends React.Component {

    render() {
      console.log( this.props.pageContext)
      const posts = this.props.data.allMarkdownRemark.edges
      const totalPages = this.props.data.allMarkdownRemark.edges.length
      const { currentPage, numPages } = this.props.pageContext
      const isFirst = currentPage === 1
      const isLast = currentPage === numPages
      const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
      const nextPage = (currentPage + 1).toString()
      const path = "/international/";



      return (
        <div>
            <Layout>
                <SEO title="International Universities" />            
         


        <section id="blog" class="section-1 showcase blog-grid filter-section projects">
            <div class="overflow-holder">
                <div class="container">
                    
                    <div class="row items filter-items">

                    {posts.map(({ node }) => {
                        return( 
                        
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
                    <Pagination prevPage={prevPage} nextPage={2} isFirst={true} isLast={isLast} currentPage={'1'} numPages={numPages} path={path} />
                </div>
            </div>
        </section>
            
        </Layout>
            
            
            </div>
   
)
}
}

  export const Internationalq = graphql`
  query Internationalindex{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/international/"}} 
    limit : 21
    ) {
      edges {
        node {
          id
          frontmatter {
            firsttitle
            description
            date
            projectLink
            link
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
      pageInfo {
        pageCount
        totalCount
      }
    }
  }
  
   `
