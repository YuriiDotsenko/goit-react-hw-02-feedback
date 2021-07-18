import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackSection.css';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const FeedbackSection = ({
  handleClickOnBtn,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => (
  <Section title="Please, leave your feedback here: ">
    <FeedbackOptions
      handleClickOnBtn={handleClickOnBtn}
      options={['good', 'neutral', 'bad']}
    />
    <h2 className="Statistic__title">Statistics</h2>
    {countTotalFeedback() === 0 ? (
      <Notification message="No feedback given"></Notification>
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        percentage={countPositiveFeedbackPercentage}
      />
    )}
  </Section>
);

FeedbackSection.propTypes = {
  handleClickOnBtn: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackSection;
