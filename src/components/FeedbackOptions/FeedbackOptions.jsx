import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

Event.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
