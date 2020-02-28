import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
  return (
    <div>
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
