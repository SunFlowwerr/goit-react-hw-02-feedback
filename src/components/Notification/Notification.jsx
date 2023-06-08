import PropTypes from 'prop-types';
// import css from './Notification.module.css';

export const Notification = ({ message }) => <p>{message}</p>;
Event.propTypes = {
  message: PropTypes.string.isRequired,
};
