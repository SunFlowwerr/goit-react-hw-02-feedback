import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
};
