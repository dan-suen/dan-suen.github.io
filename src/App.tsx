import React from 'react';
import './App.scss';
import About from './components/about';
import Contact from './components/contact';
import Front from './components/front';
import Sidebar from './components/sidebar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Front />
      <Sidebar />
      <About />
      <Contact />
    </div>
  );
}

export default App;
