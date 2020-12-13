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

  getItemNameForStat = item => {
    const itemName = Object.keys(item);
    return `${itemName.slice(0, 1).toUpperCase()}${itemName
      .slice(1)
      .toLowerCase()}`;
  };

  handleLeaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
    console.log(this.state);
  };

  countTotalFeedback = () => {
    console.log(Object.values(this.state).reduce((acc, item) => acc + item, 0));
  };

  positiveFeedbackPercent = countTotalFeedback => {
    console.log(this.state.good.value / countTotalFeedback);
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
          feedbackList={this.state}
          getItemNameForStat={this.getItemNameForStat}
          total={this.countTotalFeedback}
          positiveFeedbackPercent={this.positiveFeedbackPercent}
        />
      </>
    );
  }
}

export default App;
