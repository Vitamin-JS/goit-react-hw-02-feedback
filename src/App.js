import React, { Component } from 'react';
// import s from './App.module.css';
// import './index.css';
import Feedback from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getItemNameBtn = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  onLeaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
    console.log(this.state);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercent;

    if (this.state.good === 0) {
      positivePercent = 0;
    } else {
      positivePercent = Math.round(
        (this.state.good * 100) / this.countTotalFeedback(),
      );
    }

    return positivePercent;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            getItemNameBtn={this.getItemNameBtn}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics:">
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
