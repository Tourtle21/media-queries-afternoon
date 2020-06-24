import React from 'react';
import './App.css';

import Header from './Components/Header';
import GrayScale from './Components/GrayScale';
import Built from './Components/Built';

function App() {
  return (
    <div className="App">
      <Header />
      <GrayScale />
      <Built />
    </div>
  );
}

export default App;
