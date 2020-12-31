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
	const scale_template = path.resolve('src/pages/single_scale.js');
	const news_and_event_template = path.resolve('src/pages/single_news_and_events.js');


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
			smallscale: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/smallscale/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			medscale: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/medscale/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}

			lgscale: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/lgscale/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			news: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/news_and_events/news/"}}
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}

			events: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/news_and_events/events/"}}
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

		result.data.smallscale.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: scale_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});

		result.data.medscale.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: scale_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});

		result.data.lgscale.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: scale_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});

		result.data.news.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: news_and_event_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});

		result.data.events.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
        component: news_and_event_template,
        context: {
          slug: node.fields.slug,
        },
			});
		});



		// pagination
		const postsPerPage = 3
		const numPages = Math.ceil(JSON.stringify(result.data.incu.edges.length / postsPerPage))
		   
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
			  path: i === 0 ? `/incubation` : `/incubation/${i + 1}`,
			  component: path.resolve("./src/pages/incubation.js"),
			  context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			  },
			})
		  })
		



	});
}
