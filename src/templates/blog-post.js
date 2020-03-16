import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "./blog-post.css"

export default ({ data }) => {

    const post = data.markdownRemark;
    return (
        <Layout>
            <div className="blog-header">
                <Img className="logo-image" fluid={data.file.childImageSharp.fluid} objectFit="cover"
                />
            </div>
            <div className="blog-layout-container">

                <div className="blog-layout">
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($ slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
        }
    }

    file(relativePath:{eq: "twitter_profile_image.png"}) {
        childImageSharp{
          fluid(fit: COVER, rotate: 30, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
}



`


