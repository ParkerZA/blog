import React from "react"
import "../components/index.css"
import { graphql, Link } from "gatsby"
import Blogs from "./blogs"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="link-container">
      <Link style={{ textDecoration: "none" }} to="./blogs">
        <h3 className="blog-link hvr-sweep-to-left">Blog</h3>
      </Link>
      <h3 className="blog-link hvr-sweep-to-left">Contact</h3>
      <h3 className="blog-link hvr-sweep-to-left">GitHub</h3>
    </div>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
