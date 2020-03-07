import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const navStyle = {
  height: "5vh",
  backgroundColor: "white"
}

const linksStyle = {
  listStyle: "none",
}

const Header = ({ siteTitle }) => (
  <header className="navbar"  >
    <ul className="links" style={{ color: "white" }} >
      <li>Home</li>
      <li>Blog</li>
      <li>Contact</li>
      <li>GitHub</li>
    </ul>
  </header >
)


export default Header
