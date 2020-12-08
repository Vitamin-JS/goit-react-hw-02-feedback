import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function Feedback({ options }) {
  const feedbackNames = Object.keys(options);

  return (
    <>
      <h1 className={s.title}> Please leave feedback</h1>
      <ul className={s.feedback__list}>
        {feedbackNames.map(item => (
          <li key={item}>
            <button className={s.btn}>Hello</button>
          </li>
        ))}
      </ul>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired /*Комментарий*/,
};

export default Feedback;

/* Проверить без ' '  */
