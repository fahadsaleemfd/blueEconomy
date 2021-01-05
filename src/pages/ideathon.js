import React from "react"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import { StaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Remarkable } from 'remarkable';
var md = new Remarkable();

const Idea = () => (
    
  

    <StaticQuery query={ideathonQuery} render={data=>{
               
        return (
        <Layout>
                <SEO title="Ideathon" />  
{/* Section 1  */}
    <section id="about" class="section-1 highlights team image-right">
        <div class="container">
            <div>
              <div class="row">
                  <div class="col-12 col-lg-8 align-self-top text">
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.Section1.title}</h2>
                               
                              <div dangerouslySetInnerHTML={{__html:md.render(data.allMarkdownRemark.edges[0].node.frontmatter.Section1.description)}}></div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                          
                          </div>
                      </div>
                  </div>
                  <div  class="col-12 col-lg-4" style={{background:"red"}}>  
                             
                  </div>
                </div>
              </div>
          </div>
      </section>
 {/* Section 1 end here */}

{/* Section 2   stert here*/}
        <section class="section-2 offers" style={{background:"#eef4ed"}}>
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                         <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.Section2.title}</h2>
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                           <div class="col-12 align-self-center" dangerouslySetInnerHTML={{__html:md.render(data.allMarkdownRemark.edges[0].node.frontmatter.Section2.description)}}>
                            </div>

                            </div>
                        </div>
                    </div>
                   </div>
        
                <div class="row justify-content-center items">
            </div>
         </div>
    </section>

        {/* Section 3  */}
    <section id="process" class="section-4 process offers">
            <div class="container full">
                <div class="row text-center intro">
                <div class="col-12 p-0">
                                
                                <h2>PROCESS</h2>

                            </div>
                </div>
                <div class="row justify-content-center text-center items">
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>01</span></div>
                        <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.process.title1}</h4>
                        <p>{data.allMarkdownRemark.edges[0].node.frontmatter.process.description1}</p>
                    
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>02</span></div>
                        <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.process.title2}</h4>
                        <p>{data.allMarkdownRemark.edges[0].node.frontmatter.process.description2}</p>
                   
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>03</span></div>
                        <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.process.title3}</h4>
                        <p>{data.allMarkdownRemark.edges[0].node.frontmatter.process.description3}</p>
                    </div>
                   
                 
                </div>
            </div>
        </section>

    {/* Section 4  */}
        {/* Winner Prizes */}
        <section class="section-2 offers" style={{background:"#eef4ed"}}>
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.ideathonprizes.title}</h2>
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                            
                                {data.allMarkdownRemark.edges[0].node.frontmatter.ideathonprizes.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center items">
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="card">
                            <i class="icon icon-organization"></i>
                            <h4>First Prize</h4>

                         
                            <div class="buttons">
                                <div class="d-sm-inline-flex">
                                 {data.allMarkdownRemark.edges[0].node.frontmatter.ideathonprizes.prizes.first}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="card">
                            <i class="icon icon-chart"></i>
                            <h4>Runner Up</h4>
                            <div class="buttons">
                                <div class="d-sm-inline-flex">
                                {data.allMarkdownRemark.edges[0].node.frontmatter.ideathonprizes.prizes.runnerup}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="card">
                            <i class="icon icon-briefcase"></i>
                            <h4>2nd Runner Up</h4>

                            <div class="buttons">
                                <div class="d-sm-inline-flex">
                                {data.allMarkdownRemark.edges[0].node.frontmatter.ideathonprizes.prizes.secondrunnerup}
                                </div>
                            </div>
                        </div>
                    </div>
                  

                </div>
                <div class="row justify-content-center items">
           
            </div>
         </div>
          
        </section>
{/* Section 5 */}
        <section id="about" class="section-1 highlights team image-right" style={{padding:"50px 0"}}>
        
        <div class="container">
         
            <div>
              <div class="row">
                  <div class="col-12 col-lg-12 align-self-top text" style={{textAlign:"center"}}>
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.rulesAndRegulations.title}</h2>

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 col-lg-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                            
                          <div class="col-12 align-self-center" dangerouslySetInnerHTML={{__html:md.render(data.allMarkdownRemark.edges[0].node.frontmatter.rulesAndRegulations.description)}}>
                            </div>

                            
                          </div>
                      </div>
                  </div>
                 
              </div>
              <br></br><br></br><br></br>
              </div>
      
          </div>
         
      </section>
{/* Section 6  */}
      <section class="section-4 offers" style={{background:"#eef4ed"}}>
            <div class="container full-grid">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.section6.title}</h2>
                        <div style={{textAlign:"left"}} class="col-12 text-max-800 mb-4" dangerouslySetInnerHTML={{__html:md.render(data.allMarkdownRemark.edges[0].node.frontmatter.section6.description)}}>
                            </div>
                    </div>
                </div>
              
            </div>
        </section>



        </Layout>
        )
   
        
    }}/>
    )
export const ideathonQuery = graphql`
  query ideathonQueryIndex{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/ideathon/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            Section1{
                description
                title
                image
            }
            Section2{
                title
                description
                
            }
            process{
                title1
                description1
                title2
                description2
                title3
                description3
                

                
            }
            ideathonprizes{
                title
                description
                prizes{
                    first
                    runnerup
                    secondrunnerup

                }
            }
            rulesAndRegulations{
                title
                description
            }
            section6{
                title
                description
            }
           
          }
          html
          excerpt
        }
      }
      
    }
  }
  
   `



  
export default Idea