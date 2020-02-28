import React from "react"
import { graphql, Link } from "gatsby"
import Blog from "../components/blog"
import Layout from "../components/layout"

const Blogs = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <Blog
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default Blogs
export const queryTwo = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
      totalCount
    }
  }
`
