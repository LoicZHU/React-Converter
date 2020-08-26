// import npm
import React from 'react';
import PropTypes from 'prop-types';

// component
const Currency = ({ name }) => (
  <li className="currency">
    {name}
  </li>
);

// props validation
Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

// export
export default Currency;
