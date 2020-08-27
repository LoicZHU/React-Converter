/* eslint-disable react/destructuring-assignment */
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
      conversionRate: Number(currenciesList[1].rate.toFixed(2)),
      conversionCurrencyName: currenciesList[1].name,
    },
  };

  // lifecycle
  componentDidMount() {
    this.setPageTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line max-len
    if (prevState.conversion.conversionCurrencyName !== this.state.conversion.conversionCurrencyName) {
      this.setPageTitle();
    }
  }

  // functions
  setConversion = (selectedCurrencyName, rate) => {
    this.setState({
      conversion: {
        conversionRate: rate,
        conversionCurrencyName: selectedCurrencyName,
      },
    });
  }

  convertAmount = (rate) => {
    const { initialAmount } = this.state;
    const result = (initialAmount * rate).toFixed(2);

    return Number(result);
  }

  handleChangeAmount = (newAmount) => {
    this.setState({
      initialAmount: Number(newAmount),
    });
  }

  setPageTitle = () => {
    document.title = `From Euro to ${this.state.conversion.conversionCurrencyName}`;
  }

  // render
  render() {
    const { initialAmount } = this.state;
    const { conversionRate, conversionCurrencyName } = this.state.conversion;
    const convertedAmount = this.convertAmount(conversionRate);

    return (
      <div className="app">
        <Converter initialAmount={initialAmount} handleChangeAmount={this.handleChangeAmount} />
        <Currencies
          currenciesList={currenciesList}
          setConversion={this.setConversion}
        />
        <Conversion
          convertedAmount={convertedAmount}
          conversionCurrencyName={conversionCurrencyName}
        />
      </div>
    );
  }
}

// == Export
export default App;
