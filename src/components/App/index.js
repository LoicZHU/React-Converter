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
    initialAmount: 1,
    conversion: {
      conversionAmount: Number(currenciesList[1].rate.toFixed(2)),
      conversionCurrencyName: currenciesList[1].name,
    },
  };

  // functions
  setConversion = (selectedCurrencyName, rate) => {
    this.setState({
      conversion: {
        conversionAmount: this.convertAmount(rate),
        conversionCurrencyName: selectedCurrencyName,
      },
    });
  }

  convertAmount = (rate) => {
    const { initialAmount } = this.state;
    const result = (initialAmount * rate).toFixed(2);

    return Number(result);
  }

  // render
  render() {
    const { initialAmount } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const { conversionAmount, conversionCurrencyName } = this.state.conversion;

    return (
      <div className="app">
        <Converter initialAmount={initialAmount} />
        <Currencies
          currenciesList={currenciesList}
          setConversion={this.setConversion}
        />
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
