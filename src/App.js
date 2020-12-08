import React, { Component } from 'react';
import Feedback from './components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getItemName = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  handleLeaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
  };

  render() {
    return (
      <>
        <Feedback
          options={this.state}
          getItemName={this.getItemName}
          handleLeaveFeedback={this.handleLeaveFeedback}
        />
      </>
    );
  }
}

export default App;
