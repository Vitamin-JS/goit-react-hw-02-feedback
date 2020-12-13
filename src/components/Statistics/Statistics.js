import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

//   Исправить рендер отзывов  Имя: значение, посмотреть в других репозиториях !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function Statistics({
  feedbackList,
  total,
  positiveFeedbackPercent,
  getItemNameBtn,
}) {
  const feedbackArray = Object.entries(feedbackList);
  console.log(feedbackArray);

  const feedbackNames = Object.keys(feedbackArray);
  console.log(feedbackNames);

  const feedbackValues = Object.values(feedbackArray);
  console.log(feedbackValues);

  return (
    <>
      <h2>Statistics</h2>
      <ul>
        {feedbackArray.map(item => (
          <li key={item}>
            <p className={s.feedbackStyles}>
              {feedbackNames}
              {':'}
              {feedbackValues}
            </p>
          </li>
        ))}

        <li>
          <p className={s.feedbackStyles}>Total: {total}</p>
        </li>

        <li>
          <p className={s.feebbackStyles}>
            Positive feedback: {positiveFeedbackPercent}%
          </p>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  feedbackList: PropTypes.object,
  total: PropTypes.func,
  positiveFeedbackPercent: PropTypes.func,
  getItemNameForStat: PropTypes.func,
  getItemNameBtn: PropTypes.string,
};

export default Statistics;
