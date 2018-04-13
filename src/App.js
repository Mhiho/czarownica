import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Chapter1 from './containers/Chapter1/Chapter1';

class App extends Component {
  render() {
    return (
    <div>
      <Layout>
      <div className={classes.Container}>
        <Chapter1
        />
      </div>
      </Layout>
    </div>
    );
  }
}

export default App;
