import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Burger Application</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
       
      </div>
    );
  }
}

export default App;
