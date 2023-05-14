import React from 'react';
import './App.scss';
import About from './components/about';
import Contact from './components/contact';
import Front from './components/front';
import Sidebar from './components/sidebar';
import Project from './components/projects';

function App(): JSX.Element {
  return (
    <div className="App">
      <Front />
      <Sidebar />
      <About />
      <Project/>
      <Contact />
    </div>
  );
}

export default App;
