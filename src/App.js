import React, { Component } from 'react';

import Header from './components/Header'
import Aside from './components/Aside'
import TweetContainer from './components/TweetContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Aside />
        <div className="main">
          <TweetContainer className="tweetContainer" />
        </div>
      </div>
    );
  }
}

export default App;
