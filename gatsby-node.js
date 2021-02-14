exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions



  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug,
              type
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.type=="blog"){
    createPage({
      path: node.frontmatter.slug,
      component:require.resolve(`./src/templates/blogTemplate.js`),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  }
  else if(node.frontmatter.type=="category"){
    createPage({
      path: node.frontmatter.slug,
      component:require.resolve(`./src/templates/categoryTemplate.js`),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  }
  })
}