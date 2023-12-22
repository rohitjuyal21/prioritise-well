import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Columns from './components/Columns';
import MobileVersion from './components/MobileVersion';
const App = () => {
  return (
    <div className="App">
      <Columns />
      <Cards />
      <MobileVersion />
    </div>
  );
}

export default App;
