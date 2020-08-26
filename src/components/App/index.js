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
  render() {
    return (
      <div className="app">
        <Converter />
        <Currencies currenciesList={currenciesList} />
        <Conversion />
      </div>
    );
  }
}

// == Export
export default App;
