// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import
import './converter.scss';

// component
const Converter = ({ initialAmount, handleChangeAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    {/* <div>{initialAmount} euro</div> */}
    <input
      type="number"
      value={initialAmount}
      onChange={(event) => handleChangeAmount(event.target.value)}
    />
    <span className="header__input-currency">
      {(initialAmount <= 1) ? ' euro' : ' euros'}
    </span>
  </header>
);

// props validation
Converter.propTypes = {
  initialAmount: PropTypes.number.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
};

// export
export default Converter;
