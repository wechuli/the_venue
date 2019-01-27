import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/layout/Header';
import Index from './components/featured/Index';


class App extends Component {
  render() {
    return (
      <div style={{height:'1500px'}}>
      <Header/>
      <Index/>
   
  
      </div>
    );
  }
}

export default App;
