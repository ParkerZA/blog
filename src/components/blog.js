import React from "react"
import "./blog.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,

  },
});



const Blog = ({ title, excerpt, date, image }) => {
  const classes = useStyles();
  return (


    <div className="card-container">
      <div className="blogCard">
        <h4>{title}</h4>
        <h5>{excerpt}</h5>
        <h6>{date}</h6>
        <img src={image} className="thumbnail hvr-shrink" />
      </div>
    </div>
  )

}

export default Blog
