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

const Business = () => {
    

            

  
        return ( 
        <div>
            <Layout>
                <SEO title="Be Challenge 2021" />            
            </Layout>
            <section id="services" class="section-2 odd offers" style={{background:"black"}}>
            <div class="container">
                <div class="row intro">
                    <div class="col-12 col-md-9 align-self-center text-center text-md-left">
                        <span class="pre-title m-auto ml-md-0">Blue Economy Startups</span>
                        <h2 class="mb-0">Excellence in <span class="featured"><span>Blue Economy Startups</span></span></h2>
                    </div>
                   <p>A startup is an early-stage business undertaken by an entrepreneur to set up, launch and refine a scalable economic model.  Pakistan has been a growing early stage startup ecosystem in mostly the technology sectors. 

Startups play a significant role in meeting long term economic growth for industry and nations. They create job opportunities which means more employment and improves the economy, spurs innovation and injects competition. This makes the industry cluster stronger and more future looking as continuous new ideas also improve the industry through lowering costs, improving yields, enhancing efficiency, making processes cost effective and developing products and services that are appropriate for unaddressed markets. 
Therefore, Constructing a strong eco-system for nurturing grass root level startups with innovation in the country generates large-scale employment opportunities and derives sustainable economic growth. Pakistan is also entering a phase where it has the opportunity to enjoy a demographic dividend that can  boost the economy of the country.
Below, we aspire to change the marine industry into a blue economy entrepreneurship ecosystem. To kick start thoughts and ideas we have curated some blue ideas trending around the world. All the startups are contributing towards revival of the blue sector. Participating teams can learn from these business ideas which will help them in creating better business plans for their blue economy related business ideas. These startups are further subdivided on a scale of Small, Medium and Large based on size of investment needed.</p>
                </div>

                <div class="row justify-content-center items">
                    <div data-aos="fade-up" class="col-12 col-md-6 item">
                        <div class="card">
                            <i class="icon icon-organization"></i>
                            <h4>Audit & Assurance</h4>
                            <img class="fit-image" src={bkImage} /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
                            <p>Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                            <a href="#"><i class="btn-icon pulse fas fas fa-arrow-right"></i></a>
                           
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>


        
            
            
            
        </div>
        )
   
     }

//   const Businessq = graphql`
//   query businessquery{
//     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/bestartup/"}} 
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             description
//             date
//             projectLink
//             link
//             image
//           }
//           fields{
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
  
//    `



  
export default Business