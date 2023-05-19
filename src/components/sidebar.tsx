import React, { useState } from 'react';
import './sidebar.scss';

export default function Sidebar(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='sidebar card'>
      <button className='card-header' onClick={toggleMenu}>
        <span className='three-lines-icon'></span>
      </button>
      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <nav>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <a href='#about'>About Me</a>
            </li>
            <li className='list-group-item'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='list-group-item'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='list-group-item'>
              <a href='#reach'>How to Reach Me</a>
            </li>
            <li className='list-group-item'>
              <a href='#contact'>Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
