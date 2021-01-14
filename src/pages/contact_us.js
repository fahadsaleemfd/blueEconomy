import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import SimpleMap from "./map.js"
import axios from "axios"
import * as qs from "query-string"

class ContactFormPage extends React.Component {

    constructor(props) {
        super(props)
        // this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
        this.state = {name : '' , last_name: '' , email: 'email', message : 'message'}

      }

      handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
      }

      handleSubmit(event) {

        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()
        // Loop through this component's refs (the fields) and add them to the
        // formData object. What we're left with is an object of key-value pairs
        // that represent the form data we want to send to Netlify.
       
        var fd = new FormData();
        fd.append( 'name', this.state.name);
        fd.append( 'last_name', this.state.last_name);
        fd.append( 'email', this.state.email);
        fd.append( 'message', this.state.message);
       
        // Object.keys(this.domRef.current.value).map(key => (formData[key] = this.domRef.current.value))
      
        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
          url: this.props.location.pathname,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(fd),
        }
      
        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
        axios(axiosOptions)
          .then(response => {
            this.setState({
              feedbackMsg: "Form submitted successfully!",
            })
            // this.domRef.current.reset()
          })
          .catch(err =>
            console.log(err)
            // this.setState({
            //   f.",
            // })
          )
      }
  
    render() {
       
      return (
          <div>
                <StaticQuery query={contactquery} render={data=>{
                   
                return ( <div>   
                     
                <Helmet>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDI5R6l_RO_28-77Ah0uDc3p-U3qRr67Ls&callback=initMap" async defer />
                        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp)
                </Helmet>
                 <Layout>
                      <SEO title="Be Challenge 2021" />            
                      <section class="section-2">
            <div class="container">
                <h2 style={{textAlign:"center"}}>CONTACT US</h2>
                <div class="row">
                    
                    
                    <div class="col-12 col-lg-6">
                         <div class="row form-group-margin">

                                <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                     <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>

                                <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                     <p>{data.allMarkdownRemark.edges[0].node.frontmatter.address}</p>
                                </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                        <p>{data.allMarkdownRemark.edges[0].node.frontmatter.phone_number}</p>
                                       
                                    </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                           <i class="fa fa-envelope" aria-hidden="true"></i>

                                    </div>

                            <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.email}</p>
                            </div>

                            </div>
                    </div>

                    <div class="col-12 col-lg-6">
                    {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
                    <form  name="Contact Form" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
                            <input  type="hidden" name="form-name" value="Contact Form" />
                            
                            <div class="row form-group-margin">
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="name" class="form-control field-name" onChange={this.handleChange} placeholder="Name"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="last_name" onChange={this.handleChange} class="form-control field-email" placeholder="Last Name"/>
                                </div>
                                <br></br>
                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="email" name="email" onChange={this.handleChange} class="form-control field-phone" placeholder="Email"/>
                                </div>
                                <div class="col-12 m-0 p-2 input-group">
                                    <textarea name="message" class="form-control  field-message" onChange={this.handleChange} placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 col-12 m-0 pl-md-2">
                                    <span class="form-alert"></span>
                                </div>
                                <div class="col-12 input-group m-0 p-2">
                                <button class="btn primary-button" type="submit">SEND</button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-3 odd" style={{background:"black"}}>
            
                <div class="container">
                    <div class="row">
                        <SimpleMap/>
                    </div>
                </div>
                
            
        </section>


                 </Layout>  
            </div>)
         
            }}/> 
        </div> )

    
     
      }
  }
  

  
const contactquery = graphql`
    query contacts{
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/contact_us/"}} 
      ) {
        edges {
          node {
            id
            frontmatter {
                address
                phone_number
                email
                map

            }
           
          }
        }
      }
    }
    
     `


  
export default ContactFormPage