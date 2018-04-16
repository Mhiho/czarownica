import React, {Component} from 'react';
import classes from './TitlePage.css'
import Star from './Star';
import Title from './Title';

class TitlePage extends Component{
  state= {
    hidden: true
  }



  render(){
    let x = Math.random() *5;
    setTimeout(() => {
      this.setState({hidden: false})
    },this.props.y)
    return (
      <div className={classes.Cover}>
          <Star src={require("../../assets/img/starsBlank.svg")}  y={0}/>
          <Star src={require("../../assets/img/starsproto1.svg")}  y={Math.random()*1000000}/>
          <Star src={require("../../assets/img/starsproto2.svg")}  y={Math.random()*1000000}/>
          <Star src={require("../../assets/img/starsproto2.svg")} y={Math.random()*1000000}/>
          <Star src={require("../../assets/img/starsproto3.svg")}  y={Math.random()*1000000}/>
          <Star src={require("../../assets/img/starsproto4.svg")}  y={Math.random()*600000}/>
          <Star src={require("../../assets/img/starsproto5.svg")}  y={Math.random()*900000}/>
          <Star src={require("../../assets/img/starsproto6.svg")}  y={Math.random()*1100000}/>
          <Star src={require("../../assets/img/starsproto7.svg")}  y={Math.random()*100000}/>
          <Star src={require("../../assets/img/starsproto8.svg")}  y={Math.random()*1000000}/>
          <Star src={require("../../assets/img/starsproto9.svg")}  y={Math.random()*1600000}/>
          <Star src={require("../../assets/img/starsproto10.svg")}  y={Math.random()*1500000}/>
          <Star src={require("../../assets/img/starsproto11.svg")}  y={Math.random()*1800000}/>
          <Star src={require("../../assets/img/starsproto12.svg")}  y={Math.random()*1900000}/>
          <Star src={require("../../assets/img/starsproto13.svg")}  y={Math.random()*2000000}/>
          <Star src={require("../../assets/img/starsproto14.svg")}  y={20000}/>
          <img src={require("../../assets/img/protogirl.svg")} className={classes.Girl} />
          <Title />
          </div>
        )
      }
}


export default TitlePage;
