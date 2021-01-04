import React from "react"
import { Link } from "gatsby"
import bkImage from "../dist/assets/images/about-5.jpg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";
import Videofile from "../dist/assets/file.mp4"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <section class="hero p-0 odd">
            <div class="swiper-container full-slider slider-h-100 slider-h-auto">
                <div class="swiper-wrapper">

                    
                    <div class="swiper-slide slide-center">

                    <video loop autoPlay class="full-image" data-mask="40">
                            {/* <source src={data.video_sections.edges[0].node.frontmatter.video} type="video/mp4"/>
                             */}
                             Videofile
                                <source src={Videofile} type="video/mp4"/>
                            
                    </video>
                        {/* <img src="assets/images/bg-2.jpg" alt="Full Image" class="full-image" data-mask="40"/>   */}

                        <div class="slide-content row">
                            <div class="col-12 d-flex justify-content-start justify-content-md-center inner">
                                <div class="center text-left text-md-center">

                                 
                                    {/* <h2 >{data.video_sections.edges[0].node.frontmatter.title}</h2>
                                    <p>{data.video_sections.edges[0].node.frontmatter.description}</p> */}
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            </section>

<section id="about" class="section-1 highlights team image-right" style={{padding:"50px 0"}}>
        
        <div class="container">
          {/* {data.list_section.edges.map((tag,index) => ( */}
            <div>
              <div class="row">
                  <div class="col-12 col-lg-12 align-self-top text" style={{textAlign:"center"}}>
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              {/* <h2>{tag.node.frontmatter.title}</h2> */}Title

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 col-lg-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                             {/* <p>{tag.node.frontmatter.description}</p> */}

                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                             title 2
                          </div>
                      </div>
                  </div>
                 
              </div>
              <br></br><br></br><br></br>
              </div>
              {/* ))} */}
          </div>
         
      </section>

      <section id="about" class="section-1 highlights team image-right" style={{padding:"50px 0"}}>
        
        <div class="container">
          {/* {data.list_section.edges.map((tag,index) => ( */}
            <div>
              <div class="row">
                  <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                      <div class="row intro m-0">
                          <div class="col-12 p-0">
                              
                              {/* <h2>{tag.node.frontmatter.title}</h2> */}

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                             {/* <p>{tag.node.frontmatter.description}</p> */}
                          </div>
                      </div>
                  </div>
                  <div  class="col-12 col-lg-4">
                            
                              {/* <img src={tag.node.frontmatter.image} class="fit-image" />     */}
                              <img src={bkImage} class="fit-image" />  
                  </div>
              </div>
              <br></br><br></br><br></br>
              </div>
              {/* ))} */}
          </div>
         
      
        
      </section>






  </Layout>
  
)

export default IndexPage
