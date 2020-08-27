// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import
import './conversion.scss';

// component
const Conversion = ({ conversionAmount, conversionCurrencyName }) => (
  <div className="conversion">
    <div className="conversion__value">{conversionAmount}</div>
    <div className="conversion__currency">{conversionCurrencyName}</div>
  </div>
);

// props validation
Conversion.propTypes = {
  conversionAmount: PropTypes.number.isRequired,
  conversionCurrencyName: PropTypes.string.isRequired,
};

// export
export default Conversion;
