import React, { Component } from 'react';
import { data } from '../../actions';
import _ from 'lodash';
import Chapter from '../../components/Chapter/Chapter';
import classes from './Chapter1.css';
import LeftSide from '../../components/LeftSide/LeftSide';
import Observer from '@researchgate/react-intersection-observer';
import Komponent from '../../components/Komponent';

class Chapter1 extends Component {
  constructor(props){
    super(props);
  }
  state = {
    scroll: 0,
    texts: {}
  }


componentDidMount(){
  data.on('value', snapshot => {
    this.setState({texts: snapshot.val()})
    console.log(this.state.texts);
  });
}

render(){

  return (
    <div>
    <Komponent />

    <div
    className={classes.SubContainer}>



    <LeftSide
      classe={classes.Img}
      />
      <Chapter
        key={this.state.texts['id']}
        p={this.state.texts['text']}
        className={classes.Text}
      />

      </div>

    </div>

  )
}

}

export default Chapter1;
