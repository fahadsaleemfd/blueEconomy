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

export default class BlogList extends React.Component {
    render() {
      console.log(this.props.pathContext.numPages)
      const posts = this.props.data.allMarkdownRemark.edges
      const totalPages = this.props.data.allMarkdownRemark.edges.length
      const { currentPage, numPages } = this.props.pageContext
      const isFirst = currentPage === 1
      const isLast = currentPage === numPages
      const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
      const nextPage = (currentPage + 1).toString()
      const path = "/incubation/";



      return (
        <div>
        <Layout>
             <SEO title="Incubation Tracks" /> 
        

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
                                            <h4>{node.frontmatter.firsttitle }</h4>
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
                {/* <div class="row">
                        <div class="col-12">
                            <nav>

                            <ul class="pagination justify-content-center">
                                    {!isFirst && (
                                            <li class="page-item">
                                        
                                                <Link class="page-link" to={'/incubation/'+prevPage}>
                                                            <i class="fas fa-angle-left"></i>
                                                </Link>
                                                
                                            </li>
                                     )}
                                    <li class="page-item"><a class="page-link" href="#">{currentPage}/{numPages}</a></li>
                                    {!isLast && (
                                        <li class="page-item">
                                            <Link class="page-link" to={'/incubation/' + nextPage}>
                                                <i class="fas fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    )}

                                </ul>
                                        
                            </nav>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>



</Layout>


        </div>
      )
    }
  }

  export const Incubationquery = graphql`
  query{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/betracks/"}}, limit: 21) {
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
      totalCount
    }
  }
  
   `

