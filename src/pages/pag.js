// import React from 'react'
// import { withPrefix ,Link } from "gatsby"
// const BlogList = (props) => {

//      console.log(props)
//     const { currentPage, numPages } = props.pageContext
//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
//     const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
//     const nextPage = (currentPage + 1).toString()
//     console.log("previous page " + prevPage)
//     console.log("Current Page " + currentPage)
//     console.log("Next Page " + nextPage)


//     return (
//            <div>
//              {!isFirst && (
//                   <Link to={'/pag/'+ prevPage} rel="prev">
//                     ← Previous Page
//                   </Link>
//               )}

//               {!isLast && (
//                    <Link to={'/pag/'+ nextPage} rel="next">
//                     Next Page →
//                   </Link>
//                )}
//         </div>
//     )
    
// }


// export const Incubationquersss = graphql`
// query desk ($skip: Int!, $limit: Int!){
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/betracks/"}}
//   limit: $limit
//   skip: $skip
//   ) {
//     edges {
//       node {
//         id
//         frontmatter {
//           firsttitle
//           description
//           date
//           projectLink
//           link
//           image
//         }
//       }
//     }
//   }
// }

//  `

// export default BlogList