import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <li>{good}</li>
    <li>{neutral}</li>
    <li>{bad}</li>
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
