import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // getItemName = {}
  // handleMakeFeedback = {}

  render() {
    return (
      <>
        <Feedback options={this.state} />
      </>
    );
  }
}
export default App;
