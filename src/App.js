import React from 'react';
import Table from './components/Tabel';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className='container text-left table-responsive-sm'>
      <Table />
    </div>
  </Provider>
);

export default App;
