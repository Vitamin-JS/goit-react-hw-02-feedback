import React, { Component } from 'react';
import Feedback from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleMakeFeedback = {}

  getItemName = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  render() {
    return (
      <>
        <Feedback options={this.state} getItemName={this.getItemName} />
      </>
    );
  }
}

export default App;
