import React, { Fragment } from 'react';
import Table from './components/Tabel';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Table />
    </Fragment>
  </Provider>
);

export default App;
