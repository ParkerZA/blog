import React from "react"
import "./blog.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,

  },
});



const Blog = ({ title, excerpt, date, image, time }) => {
  return (


    <div className="card-container">
      <div className="blogCard" style={{ backgroundImage: `url(${image})` }}>
        <h4>{title}</h4>
        <h5>{excerpt}</h5>
        <h6>{date}</h6>
        <h6>{`${time} minutes`}</h6>
      </div>
    </div>
  )

}

export default Blog
