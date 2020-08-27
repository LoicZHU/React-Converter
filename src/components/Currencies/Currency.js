// import npm
import React from 'react';
import PropTypes from 'prop-types';

// component
const Currency = ({ name, rate, setConversion }) => (
  <li
    className="currency"
    onClick={() => setConversion(name, rate)}
  >
    {name}
  </li>
);

// props validation
Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  setConversion: PropTypes.func.isRequired,
};

// export
export default Currency;
