import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedbackPercent }) {
  return (
    <>
      <h2 className={s.feedbackStyles}>Statistics</h2>
      <table className={s.table}>
        <tbody>
          <tr className={s.valueStyle}>
            <td>Good: </td>
            <td>{good}</td>
          </tr>
          <tr className={s.valueStyle}>
            <td>Neutral: </td>
            <td>{neutral}</td>
          </tr>
          <tr className={s.valueStyle}>
            <td>Bad: </td>
            <td>{bad}</td>
          </tr>

          <tr className={s.valueStyle}>
            <td>Total: </td>
            <td>{total}</td>
          </tr>
          <tr className={s.valueStyle}>
            <td>Positive feedback: </td>
            <td>{positiveFeedbackPercent}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positiveFeedbackPercent: PropTypes.number,
};

export default Statistics;
