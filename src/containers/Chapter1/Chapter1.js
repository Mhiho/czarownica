import React, { Component } from 'react';
import { data } from '../../actions';
import _ from 'lodash';
import Chapter from '../../components/Chapter/Chapter';
import classes from './Chapter1.css';
import Observer from '@researchgate/react-intersection-observer';
import Komponent from '../../components/Komponent';
import ScrollManager from 'window-scroll-manager';
import TitlePage from '../../components/TitlePage/TitlePage';


class Chapter1 extends Component {
  constructor(props){
    super(props);
  }
  state = {
    scroll: 0,
    texts: []
  }


componentDidMount(){
  data.on('value', snapshot => {
    this.setState({texts: snapshot.val()})
    console.log(this.state.texts);
  });
  const sm = new ScrollManager();
  window.addEventListener('window-scroll', (e) => {
    let scroll =  e.detail.scrollPosition;
  this.setState({scroll: scroll})
});
}

render(){
  let renderText = this.state.texts.map((p,id)=>{
    return (
    <Chapter
      key={id}
      p={p}
      className={classes.Text}
    />
  )
  })
  return (
    <div>
      <TitlePage />
      <div className={classes.SubContainer}>
        <div className={classes.Wraper}>
          <div
          style={{  transform: `rotate(${this.state.scroll * 0.3}deg)`}}
          className={classes.Img}
          />
            <div
            style={{  transform: `rotate(${-this.state.scroll * 0.3}deg)`}}
            className={classes.Img2}
            />
        </div>
      </div>
        <div className={classes.SubContainer2}>
      {renderText}
        </div>

  </div>

  )
}

}

export default Chapter1;
