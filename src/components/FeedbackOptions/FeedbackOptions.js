import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function Feedback({ options, getItemName }) {
  const feedbackNames = Object.keys(options);

  return (
    <>
      <h1 className={s.title}> Please leave feedback</h1>
      <ul className={s.feedback__list}>
        {feedbackNames.map(item => (
          <li key={item}>
            <button className={s.btn}>{getItemName(item)}</button>
          </li>
        ))}
      </ul>
      <h2>Statistics</h2>
      <p>Good: </p>
      <p>Neutral: </p>
      <p>Bad: </p>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired /*Комментарий*/,
  getItemName: PropTypes.func,
};

export default Feedback;

/* Проверить без ' '  */
