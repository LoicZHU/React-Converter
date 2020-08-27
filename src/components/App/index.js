// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Converter from 'src/components/Converter';
import Currencies from 'src/components/Currencies';
import Conversion from 'src/components/Conversion';
import currenciesList from 'src/data/currencies';

// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    conversion: {
      conversionAmount: currenciesList[1].rate,
      conversionCurrencyName: currenciesList[1].name,
    },
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { conversionAmount, conversionCurrencyName } = this.state.conversion;

    return (
      <div className="app">
        <Converter />
        <Currencies currenciesList={currenciesList} />
        <Conversion
          conversionAmount={conversionAmount}
          conversionCurrencyName={conversionCurrencyName}
        />
      </div>
    );
  }
}

// == Export
export default App;
