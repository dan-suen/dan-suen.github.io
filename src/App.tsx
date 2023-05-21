import React from 'react';
import './App.scss';
import About from './components/about';
import Contact from './components/contact';
import Front from './components/front';
import Sidebar from './components/sidebar';
import Project from './components/projects';
import Reach from './components/reach';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Sidebar />
      <div className='other-elements'>
        <Front />
        <About />
        <Project />
        <Reach />
        <Contact />
      </div>
    </div>
  );
}

export default App;
