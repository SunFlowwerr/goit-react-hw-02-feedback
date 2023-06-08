import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.list}>
    <li>Good feetbacks: {good}</li>
    <li>Neutral feetbacks: {neutral}</li>
    <li>Bad feetbacks: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedbackes: {positivePercentage}%</li>
  </ul>
);

Event.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
