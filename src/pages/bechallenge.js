import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import TrustedImage from "../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

const Challenge = () => (
    <StaticQuery query={Challengesquery} render={data=>{
        const allData = data.allMarkdownRemark.edges[0].node.frontmatter
        
  return (  
  <div>
        <Layout>
                <SEO title="Challenge 2021" />
       

        <section id="funfacts" className="section-2 highlights image-right counter funfacts featured">
            <div classNameName="container">
                <div className="row">
                    <div className="col-12 col-md-6 pr-md-5 align-self-center text-center text-md-left text items">
                        <div   className="row intro mb-4">
                            <div className="col-12 p-0">
                                <span className="pre-title m-auto m-md-0">About {allData.title1}</span>
                                <h2><span className="featured"><span>{allData.title1}</span></span> Challenge</h2>
                                <div dangerouslySetInnerHTML={{__html:data.allMarkdownRemark.edges[0].node.html}}></div>
                            </div>
                        </div>
                                              
                        <div className="buttons">
                            <div className="d-sm-inline-flex mb-5 mb-md-0">
                                <a href="#contact" className="smooth-anchor mx-auto mt-4 btn primary-button">Register</a>
                                <a href="#" className="mx-auto ml-sm-4 mt-4 btn outline-button">Mentor Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-0 image">
                        <img src={allData.image1} className="fit-image" alt="Fit Image"/>
                    </div>
                </div>
            </div>
        </section>
{/* Second Section Start From Here */}

        <section id="process" class="section-4 process offers">
            <div class="container full">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2><span class="featured"><span>Key</span></span> Milestones</h2>
                    </div>
                </div>
                <div class="row justify-content-center text-center items">
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>01</span></div>
                        <h4>Preparations</h4>
                        <p>{allData.timeline.preparation}</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>02</span></div>
                        <h4>Round 1</h4>
                        <p>{allData.timeline.round1}</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>03</span></div>
                        <h4>Round 2</h4>
                        <p>{allData.timeline.round2}</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>04</span></div>
                        <h4>Round 3: Top 10 Shortlist</h4>
                        <p>{allData.timeline.round3}</p>
                    </div>
                    {/* <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>05</span></div>
                        <h4>Continuity formalization</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div> */}
                </div>
            </div>
        </section>
{/* Winner Prizes */}
        <section class="section-2 offers">
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2>Winner Prizes</h2>
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
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
                                 Rs.{allData.prizes.first}
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
                                 Rs. {allData.prizes.second} 
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
                                 Rs. {allData.prizes.third}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row justify-content-center items">
               <div class="col-12 col-md-6 col-lg-3 item">
                        <div class="card">
                            <i class="icon icon-chart"></i>
                            <h4>Honorable Mention(10 Prizes)</h4>
                            <div class="buttons">
                                <div class="d-sm-inline-flex">
                                Rs. {allData.prizes.honours}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
         </div>
          
        </section>

        <section id="services" class="section-2 odd offers" style={{background:"black"}}>
            <div class="container">
                <div class="row intro">
                    <div class="col-12 col-md-9 align-self-center text-center text-md-left">
                        {/* <span class="pre-title m-auto ml-md-0">Our business areas</span> */}
                        {/* <h2 class="mb-0">Excellence in <span class="featured"><span>Services</span></span></h2> */}
                    </div>
                    <div class="col-12 col-md-3 align-self-end">
                        {/* <a href="#contact" class="smooth-anchor btn mx-auto mr-md-0 ml-md-auto outline-button">GET IN TOUCH</a> */}
                    </div>
                </div>
                <div class="row justify-content-center items">

                        {allData.slider2.map(tag => (
                            <div data-aos="" class="col-12 col-md-6 item">
                                <div class="card">
                                    <i class="icon icon-organization"></i>
                                    <h4>{tag.title}</h4>
                                    <p dangerouslySetInnerHTML={{__html:tag.description}} ></p>
                                    <a href="#"><i class="btn-icon pulse fas fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </section>

        
        </Layout>

            </div>
        )
    }}/>
  )

  const Challengesquery = graphql`
  query challenge {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/bechallenge/"}}) {
        edges {
          node {
            id
            html
            frontmatter {
              title1
              image1
              description1
              timeline {
                  preparation
                  round1
                  round2
                  round3
                }
              Philosophy {
                  title
                  description
                  image
  
              }
              slider {
                  title
                  description
                  image
                  link
  
              }
              prizes {
                  first
                  second
                  third
                  honours
              }
              slider2 {
                  title
                  description
              }
             
            }
            
          }
        }
      }
    }
  
   `



  
export default Challenge