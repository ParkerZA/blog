import React from "react"
import { graphql, Link } from "gatsby"
import Blog from "../components/blog"
import Layout from "../components/layout"
import "./blogs.css"

const Blogs = ({ data }) => {
  console.log(data)
  const { node } = data.allMarkdownRemark.edges[2];
  return (
    <Layout>
      <div className="blogs-container">

        <Link to="/goals">
          <Blog
            title={"Climbing Mountains"}
            excerpt={"Or: Achieving your goals"}
            date={"03/02/2020"}
            image={"https://www.climbing.com/.image/t_share/MTQ3NjY3NzM1NjQ2NTc4Mjg1/yosemite_el_capitan.jpg"}
            time={node.timeToRead}
          />
        </Link>

      </div>
    </Layout>
  )
}

export default Blogs
export const queryTwo = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          timeToRead
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
