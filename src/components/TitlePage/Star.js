import React, {Component} from 'react';
import classes from './Star.css';


class Star extends Component{
  state= {
    hidden: true
  }
  render(){
    let x = Math.random() *5;
    setTimeout(() => {
      this.setState({hidden: false})
    },this.props.y)

  return(
  <img src={this.props.src}
            className={this.state.hidden ? classes.Absolute : classes.Show}/>
)
}
}
export default Star;
