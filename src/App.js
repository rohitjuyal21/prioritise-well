import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Columns from './components/Columns';
const App = () => {
  return (
    <div className="App">
      <Columns />
      <Cards />
    </div>
  );
}

export default App;
