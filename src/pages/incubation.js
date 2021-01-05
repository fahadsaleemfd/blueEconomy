import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Pagination from "../components/pagination"
import { Remarkable } from 'remarkable';
var md = new Remarkable();


const Incubation = () => (

  <StaticQuery query={Incubationquery} render={data=>{

    console.log(data.allMarkdownRemark.pageInfo)

  

    
      const totalPages =  data.allMarkdownRemark.pageInfo.pageCount
      const prevPage = data.allMarkdownRemark.pageInfo.hasPreviousPage
      const isLast  = data.allMarkdownRemark.pageInfo.currentPage === totalPages
      const path = "/incubation/"
      const nextPage = (data.allMarkdownRemark.pageInfo.currentPage + 1).toString()

      return (  
      <div>
      
        <Layout>
             <SEO title="Incubation Tracks" /> 
        

        <section id="blog" class="section-1 showcase blog-grid filter-section projects">
            <div class="overflow-holder">
              
                <div class="container">
               
                    <div class="row items filter-items">

                    {data.allMarkdownRemark.edges.map((tag,index) => (        
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","social","technology"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src={tag.node.frontmatter.image} alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                  
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">

                                        <Link to={tag.node.fields.slug}>
                                            <h4>{tag.node.frontmatter.firsttitle }</h4>
                                            {/* <p>{tag.node.frontmatter.description.substring(0,200)}</p> */}
                                            <div dangerouslySetInnerHTML={{__html:md.render(tag.node.frontmatter.description).substring(0,20)}}></div>
                                        
                                        </Link>
                
                                    </div>
                                </div>
                            </div>
                        </div> 
    
                      
                         ))}
                </div>
                    

                <Pagination
                  prevPage={prevPage} 
                  nextPage={nextPage} 
                  isFirst={1} 
                  isLast={isLast} 
                  currentPage={'1'} 
                  numPages={totalPages} 
                  path={path} />
                
                </div>
            </div>
        </section>



</Layout>


        </div>
        )
    }}/>
)

  export const Incubationquery = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/betracks/"}}
   
    )
    {
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

        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
      }
    }
  }
  
   `


   export default Incubation
