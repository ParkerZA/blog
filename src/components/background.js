import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import "./background.css"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
      {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  return (
    <div className="back-container" style={{ height: "100vh" }}>
      <BackgroundImage
        className="background"
        Tag="section"
        fixed={data.file.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        {children}
      </BackgroundImage>
    </div>
  )
}

export default BackgroundSection
