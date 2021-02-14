import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import  { Link} from 'gatsby'


const BlogPage = ()=>{
    const data = useStaticQuery(graphql`
    query category {
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
    <div>Category</div> 
    {
      
        allMarkdownRemark.edges.map((item, i)=>{
          
          if(item.node.frontmatter.type==="category"){
            console.log('type', item.node.frontmatter.type)
            return <Link to={item.node.frontmatter.slug} state={{slug: item.node.frontmatter.slug}} key={i}>{item.node.frontmatter.title}</Link>
          }
        })
    }
</>

    )
}

export default  BlogPage; 