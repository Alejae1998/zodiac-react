import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
