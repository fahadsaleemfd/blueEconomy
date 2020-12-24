const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  	const incubation_template = path.resolve('src/pages/single_incubation.js');
	const funding_templete = path.resolve('src/pages/single_funding.js');
	const business_templete = path.resolve('src/pages/single_business.js');
    const international_templete = path.resolve('src/pages/single_international.js');


  return graphql(`
		{
			incu: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/betracks/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			funding: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/fundings/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			business: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/business/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			international: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/international/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.funding.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: funding_templete,
        context: {
                  slug: node.fields.slug,
                },
			});
		});
		// Create blog pages
		result.data.incu.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: incubation_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});

// 
		result.data.business.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: business_templete,
        context: {
          slug: node.fields.slug,
        },
			});
		});


		result.data.international.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: international_templete,
        context: {
          slug: node.fields.slug,
        },
			});
		});



	});
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const res = await graphql(`
//     query {
//       allMarkdownRemark (filter: {fileAbsolutePath: {regex: "posts/fundings/"}}){
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/pages/single_funding.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }