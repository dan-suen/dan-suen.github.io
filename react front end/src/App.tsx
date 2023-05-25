import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar';
import Front from './components/front';
import About from './components/about';
import Skill from './components/skills';
import Project from './components/projects';
import Reach from './components/reach';
import Contact from './components/contact';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Sidebar />
      <div className='other-elements'>
        <Front />
        <About />
        <Skill />
        <Project />
        <Reach />
        <Contact />
      </div>
    </div>
  );
}

export default App;
