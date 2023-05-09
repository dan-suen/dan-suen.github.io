import React, { useState } from 'react';
import './sidebar.scss';

export default function Siderbar(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="sidebar">
      <button onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </button>
      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <nav className="side-menu">
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#reach">How to Reach Me</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
