// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import
import './converter.scss';

// component
const Converter = ({ initialAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <div>{initialAmount} euro</div>
  </header>
);

// props validation
Converter.propTypes = {
  initialAmount: PropTypes.number.isRequired,
};

// export
export default Converter;
