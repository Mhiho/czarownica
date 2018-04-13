import Observer from '@researchgate/react-intersection-observer';
import React, { Component } from 'react';
import classes from './Komponent.css';
import ScrollManager from 'window-scroll-manager'

const getPrintableThreshold = (ratio, range) =>
  range.reduce((prev, curr) =>
    Math.abs(curr - ratio) < Math.abs(prev - ratio) ? curr : prev);

class Komponent extends Component {
  state = {
    visibility: 'hidden',
    threshold: 0,
    css: 360,
    scroll: 0
  };
  // handleScroll() {
  //    let winHeight = window.innerHeight;
  //    // Annoying to compute doc height due to browser inconsistency
  //    let body = document.body;
  //    let html = document.documentElement;
  //    let docHeight = Math.max( body.scrollHeight, body.offsetHeight,
  //                    html.clientHeight, html.scrollHeight, html.offsetHeight );
  //    let value = document.body.scrollTop;
  //    console.log(winHeight, body, html, docHeight, value);
  //
  // }

  handleChange = ({ isIntersecting, intersectionRatio }) => {
    this.setState({
      visibility: isIntersecting ? 'visible' : 'invisible',
      threshold: getPrintableThreshold(
        intersectionRatio.toFixed(2),
      [0.00, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
       0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19,
       0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29,
       0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39,
       0.40, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49,
       0.50, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59,
       0.60, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69,
       0.70, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
       0.80, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89,
       0.90, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
       1.00]
      ),
    });
  };
componentDidMount(){
  const sm = new ScrollManager();
  window.addEventListener('window-scroll', (e) => {
    let scroll =  e.detail.scrollPosition;
  this.setState({scroll: scroll})
});
}

  render() {

    return (
      <div>

        <div className={classes.Header +` ${this.state.visibility}`}>
          {this.state.threshold * 100}%
          <div>{this.state.scroll}</div>
        </div>
        <div
          className={classes.Lody}>
          <div className={this.state.visibility}>
            <Observer
              onChange={this.handleChange}
              threshold={[0.00, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
               0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19,
               0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29,
               0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39,
               0.40, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49,
               0.50, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59,
               0.60, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69,
               0.70, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
               0.80, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89,
               0.90, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
               1.00]}
               root={null}
            >
              <div style={{  transform: `rotate(${this.state.css * this.state.threshold/10}deg)`}}className={classes.Box+ ` ${this.state.visibility}`} />
            </Observer>
          </div>
        </div>
      </div>
    );
  }
}

export default Komponent;
