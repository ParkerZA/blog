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
}

`


