import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Pagination from "../../components/pagination"

export default class Funding_lists extends React.Component {

    render() {

      const posts = this.props.data.allMarkdownRemark.edges
      const totalPages = this.props.data.allMarkdownRemark.edges.length
      const { currentPage, numPages } = this.props.pageContext
      const isFirst = currentPage === 1
      const isLast = currentPage === numPages
      const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
      const nextPage = (currentPage + 1).toString()
      const path = "/funding/";



      return (
        <div>
            <Layout>
                <SEO title="Funding Orgnization" />            
            </Layout>


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
                    <Pagination prevPage={prevPage} nextPage={nextPage} isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPages={numPages} path={path}/>
                </div>
            </div>
        </section>
            
            
            
            
            </div>
          )
        }
      }

export const fundingsquery = graphql`
  query fundingqueries($skip: Int, $limit: Int){
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/fundings/"}}
    limit: $limit
    skip: $skip
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



  
