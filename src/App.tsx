import React from 'react';
import './App.scss';
import About from './components/about';
import Contact from './components/contact';

function App(): JSX.Element {
  return (
    <div className="App">
      <About />
      <Contact />
    </div>
  );
}

export default App;
