import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import 'tachyons';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Signin />
    </div>
  );
}

export default App;
