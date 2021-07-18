import React, { Component } from 'react';
import FeedbackSection from './components/FeedbackSection';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickOnBtn = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <div>
        <FeedbackSection
          handleClickOnBtn={this.handleClickOnBtn}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
}

export default App;
