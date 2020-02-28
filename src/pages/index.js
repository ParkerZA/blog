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
    <section className="background">
      <div>{/* <FilmSVG /> */}</div>
      <div>
        <h2>MW Parker</h2>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to="./blogs">
          <h3>Blog</h3>
        </Link>
      </div>
    </section>
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
