import React from "react"
import SEO from "../components/seo"
import bkImage from "../dist/assets/images/about-5.jpg"
import { StaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Remarkable } from 'remarkable';
var md = new Remarkable();

const Idea = () => (
    
  

    <StaticQuery query={ideathonQuery} render={data=>{
        console.log(data)
        console.log(data.allMarkdownRemark.edges[0].node.frontmatter.Section2.dsecription1)
        console.log(md.render(data.allMarkdownRemark.edges[0].node.frontmatter.Section2.dsecription1));

           
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
                        <h4>Competition opens</h4>
                        <p>January 15 Who can compete: any individual,Pakistani age 15 and above</p>
                        {/* <p>{allData.timeline.preparation}</p> */}
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>02</span></div>
                        <h4>Last Date to Submit an Idea</h4>
                        <p>Fill in the online form February 15</p>
                        {/* <p>{allData.timeline.round1}</p> */}
                    </div>
                    <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>03</span></div>
                        <h4>Announcement of Winners</h4>
                    </div>
                   
                    {/* <div class="col-12 col-md-6 col-lg-2 item">
                        <div class="step"><span>05</span></div>
                        <h4>Continuity formalization</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div> */}
                </div>
            </div>
        </section>

    {/* Section 4  */}
        {/* Winner Prizes */}
        <section class="section-2 offers" style={{background:"#eef4ed"}}>
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2>IDEATHON PRIZES</h2>
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                            Prize winning ideas will be given a cash prize and an opportunity to participate in a longer Blue Economy Challenge
                            Best Idea in the Theme: will be invited to present their ideas on our ideathon showcase Certificates of Participation: for all participants.

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
                                 {/* Rs.{allData.prizes.first} */}
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
                                 {/* Rs. {allData.prizes.third} */}
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
                                 {/* Rs. {allData.prizes.second}  */}
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
                              
                              <h2>RULES AND REGULATIONS</h2>

                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12 col-lg-12 p-0 pr-md-5" style={{textAlign:"justify"}}>
                            
                          By registering at or submitting an entry, the applicants represent and warrant the following:
(a)	Applicants will not submit content that is copyrighted, protected by trade secret or otherwise subject to third party intellectual property rights or other proprietary rights, including privacy and publicity rights, unless the individual is the owner of such rights or has permission from the rightful owner to post the content and participate in the Ideathon;
(b)	Applicants will not submit content that is unlawful, obscene, defamatory, threatening, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability or is otherwise inappropriate;
(c)	Applicants will not publish falsehoods or misrepresentations that could damage the reputation of organizers;
(d)	Applicants will not post advertisements or solicitations of business;
(e)	Organization will not be obligated to pay any compensation to, or permit any participation by, any third party in connection with the use, reproduction, modification, publication, display or other exploitation of any of the content that is submitted;
(f)	The content submitted by applicants does not contain any viruses, Trojan horses, worms or other disabling devices or malicious code; and
(g)	Participants will not attempt, create, or use any unauthorized access toorganizers or other digital communication or data storage systems.
(h)	SBP reserves the right to initiate any legal action and/or alert authorities in the case of any property damage or theft or any other violation of law or violation of this Agreement.

 {/* <div dangerouslySetInnerHTML={{__html:data.allMarkdownRemark.edges[0].node.html}}></div> */}

                            
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
                        <h2>Intellectual Property</h2>
                        <p class="text-max-800 mb-4" style={{textAlign:"left"}}>
                        Organizers asserts no ownership, through the Blue-A-Thon, in any intellectual property that may result from participation in the event. Notwithstanding the foregoing, Participant may be subject to general Intellectual Property rules in Pakistan. Nothing in this Agreement will be construed to supersede or interfere with other obligations to Participant/ Organizers.
By registering and presenting or submitting an entry (regardless of the form or medium of such content), Participant grants Organizers a worldwide, perpetual, irrevocable, non-exclusive, royalty-free license to discuss, publicize, demonstrate, and otherwise display content derived from or relating to such entry for promotional and marketing purposes Participant will not receive any compensation for this use of such entry.
If the participant is member of a team, that team is wholly responsible for determining ownership of any intellectual property rights developed during this period. Participant agrees that organizers will not be responsible for any disputes regarding intellectual property. Participant agrees that there is no obligation of confidentiality on the part of Ideathon staff or other Participants regarding submissions or ideas generated at the. Participant agrees and acknowledges that any idea, conversation or submission may be considered a public disclosure under local laws.

</p>
                       
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
           
          }
          html
          excerpt
        }
      }
      
    }
  }
  
   `



  
export default Idea