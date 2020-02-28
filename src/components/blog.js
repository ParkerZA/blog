import React from "react"
import "./blog.css"

const Blog = ({ title, excerpt, date }) => (
  <div className="card-container">
    <div className="blogCard">
      <h4>{title}</h4>
      <h5>{excerpt}</h5>
      <h6>{date}</h6>
    </div>
  </div>
)

export default Blog
