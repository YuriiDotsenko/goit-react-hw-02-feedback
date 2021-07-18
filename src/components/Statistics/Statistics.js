import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className="Stats">
    <li>
      <span>
        Good: <span>{good}</span>
      </span>
    </li>
    <li>
      <span>
        Neutral: <span>{neutral}</span>
      </span>
    </li>
    <li>
      <span>
        Bad: <span>{bad}</span>
      </span>
    </li>
    <li>
      <span>
        Total: <span>{total()}</span>
      </span>
    </li>
    <li>
      <span>
        Positive feedback: <span>{`${percentage()}%`}</span>
      </span>
    </li>
  </ul>
);

export default Statistics;
