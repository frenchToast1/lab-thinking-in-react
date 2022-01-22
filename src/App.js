import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from '../data.json';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
