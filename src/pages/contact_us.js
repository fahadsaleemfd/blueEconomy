import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import SimpleMap from "./map.js"
const axios = require('axios').default;

const Contact = () => (

   
    <StaticQuery query={contactquery} render={data=>{
            console.log(data)
        // const fetchData = data.allMarkdownRemark.edges
        const submitForm = (e) => {
            e.preventDefault()
            let myForm = document.getElementById('contact');
            let formData = new FormData(myForm)
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
              }).then(() => console.log('Form successfully submitted')).catch((error) =>
                alert(error))
            
            

        }
        return (  
            <div>
                <Helmet>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDI5R6l_RO_28-77Ah0uDc3p-U3qRr67Ls&callback=initMap" async defer />
                        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp)
                </Helmet>
                 <Layout>
                      <SEO title="Be Challenge 2021" />            
               


                      <form name="Contact Form" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="Contact Form" />
                            <div>
                                <label>Your Email:</label>
                                <input type="email" name="email" />
                            </div>
                            <div>
                                <label>Message:</label>
                                <textarea name="message" />
                            </div>
                            <button type="submit">Send</button>
                      </form>

        </Layout>  
            </div>
        )

    }}/>

    )

  
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


  
export default Contact