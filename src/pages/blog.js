import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import  { Link} from 'gatsby'


const BlogPage = ()=>{
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date
                type
              }
            }
          }
        }
      }
  `)
  const {allMarkdownRemark} = data;
    return (
    <>
    <div>Blog </div>
    {

        allMarkdownRemark.edges.map((item, i)=>{
          if(item.node.frontmatter.type==="blog"){
            return <Link to={item.node.frontmatter.slug} state={{slug: item.node.frontmatter.slug}} key={i}>{item.node.frontmatter.title}</Link>
          }
        })
    }
</>

    )
}

export default  BlogPage; 