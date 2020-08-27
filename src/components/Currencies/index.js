// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import
import './currencies.scss';
import Currency from './Currency';

// component
const Currencies = ({ currenciesList, setConversion }) => (
  <div className="currencies">
    <h2 className="currencies__title">Currencies</h2>
    <ul>
      {currenciesList.map((currency) => (
        <Currency
          key={currency.name}
          {...currency}
          setConversion={setConversion}
        />
      ))}
    </ul>
  </div>
);

// props validation
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  setConversion: PropTypes.func.isRequired,
};

// export
export default Currencies;
