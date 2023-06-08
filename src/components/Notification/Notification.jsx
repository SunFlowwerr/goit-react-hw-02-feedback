import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;
Event.propTypes = {
  message: PropTypes.string.isRequired,
};
