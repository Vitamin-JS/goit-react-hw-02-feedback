import React, { Component } from 'react';
import Feedback from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getItemNameBtn = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  handleLeaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
    console.log(this.state);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  positiveFeedbackPercent = countTotalFeedback => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Feedback
          options={this.state}
          getItemNameBtn={this.getItemNameBtn}
          handleLeaveFeedback={this.handleLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={this.countTotalFeedback()}
          positiveFeedbackPercent={this.positiveFeedbackPercent()}
        />
      </>
    );
  }
}

export default App;
