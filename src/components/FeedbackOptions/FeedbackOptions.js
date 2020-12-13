import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function Feedback({ options, getItemNameBtn, handleLeaveFeedback }) {
  const feedbackNames = Object.keys(options);

  return (
    <>
      <h1 className={s.title}> Please leave feedback</h1>
      <ul className={s.feedback__list}>
        {feedbackNames.map(item => (
          <li key={item}>
            <button onClick={() => handleLeaveFeedback(item)} className={s.btn}>
              {getItemNameBtn(item)}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  getItemName: PropTypes.func,
  handleLeaveFeedback: PropTypes.func,
};

export default Feedback;
