import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ handleClickOnBtn, options }) => (
  <div className="btn__Container">
    {options.map((option, index) => (
      <button
        key={index}
        type="button"
        onClick={() => handleClickOnBtn(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  handleClickOnBtn: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
