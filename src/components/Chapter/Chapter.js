import React from 'react';
import classes from './Chapter.css';
import Observer from 'react-intersection-observer';;




const chapter = (props) =>{
  return(
    <div className={classes.WidthDiv}>
      <p className={classes.WidthP}>{props.p}</p>
    </div>
  )
}

export default chapter;
