import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedbackPercent }) {
  return (
    <>
      <h2 className={s.feedbackStyles}>Statistics</h2>
      <table className={s.resultsList}>
        <tbody>
          <tr>
            <td>Good: </td>
            <td className={s.valueStyle}>{good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td className={s.valueStyle}>{neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td className={s.valueStyle}>{bad}</td>
          </tr>
          <br></br>
          <tr>
            <td>Total: </td>
            <td className={s.valueStyle}>{total}</td>
          </tr>
          <tr>
            <td>Positive feedback: </td>
            <td className={s.valueStyle}>{positiveFeedbackPercent}</td>
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
