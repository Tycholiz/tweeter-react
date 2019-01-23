import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header'
import Aside from './components/Aside'
import TweetContainer from './components/TweetContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Aside />
        <TweetContainer />
        {/* <div className="aside">ASIDE</div>
        <div className="main">MAIN</div> */}
      </div>
    );
  }
}

export default App;
