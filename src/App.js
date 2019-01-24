import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header'
import Aside from './components/Aside'
import TweetContainer from './components/TweetContainer'
library.add(faHeart);

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
