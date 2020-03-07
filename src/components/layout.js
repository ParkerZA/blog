/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Background from "./background"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Background>
          <div className="links">
            {/* <h3 id="home-link">Home</h3> */}

          </div>

          <main>{children}</main>

        </Background>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
