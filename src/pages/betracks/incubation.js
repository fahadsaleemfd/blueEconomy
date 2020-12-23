import React from "react"
import { withPrefix ,Link } from "gatsby"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import bkImage from "../../dist/assets/images/about-5.jpg"
import TrustedImage from "../../dist/assets/images/logo-1.png"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

const Incubation = () => {
    
        
  return (  
        <div>
            <Layout>
                <SEO title="Be Challenge 2021" />            
            </Layout>


        <section id="blog" class="section-1 showcase blog-grid filter-section projects">
            <div class="overflow-holder">
                <div class="container">
                    <div class="row justify-content-center text-center">

                    </div>
                    <div class="row items filter-items">
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","social","technology"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-1.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Increasing creativity is possible for everyone</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>            
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["institutional","events","environment"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-2.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>John Smith</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>9 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Because market research is part of the business plan</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["environment","institutional","social"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-3.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>16 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Working from home is now a trend</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","events","innovation"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-4.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>John Smith</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>23 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Tips for having a good relationship at work</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["social","environment","events"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-5.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>David Cooper</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>30 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>David Cooper tells about the opening of the new office in Baltimore</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","institutional","technology"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-1.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Increasing creativity is possible for everyone</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","social","technology"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-1.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Increasing creativity is possible for everyone</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>            
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["institutional","events","environment"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-2.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>John Smith</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>9 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Because market research is part of the business plan</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["environment","institutional","social"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-3.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>16 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Working from home is now a trend</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","events","innovation"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-4.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>John Smith</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>23 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Tips for having a good relationship at work</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["social","environment","events"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-5.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>David Cooper</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>30 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>David Cooper tells about the opening of the new office in Baltimore</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["innovation","institutional","technology"]'>
                            <div class="row card p-0 text-center">
                                <div class="image-over">
                                    <img src="assets/images/news-1.jpg" alt="Lorem ipsum"/>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>Andrea Miller</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>2 Days Ago</a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <a href="#">
                                            <h4>Increasing creativity is possible for everyone</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1 filter-sizer"></div>
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

    }

//   const Challengesquery = graphql`
//   query challenge {
//       allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/bechallenge/"}}) {
//         edges {
//           node {
//             id
//             html
//             frontmatter {
//               title1
//               image1
//               description1
//               timeline {
//                   preparation
//                   round1
//                   round2
//                   round3
//                 }
//               Philosophy {
//                   title
//                   description
//                   image
  
//               }
//               slider {
//                   title
//                   description
//                   image
//                   link
  
//               }
//               prizes {
//                   first
//                   second
//                   third
//                   honours
//               }
//               slider2 {
//                   title
//                   description
//               }
             
//             }
            
//           }
//         }
//       }
//     }
  
//    `



  
export default Incubation