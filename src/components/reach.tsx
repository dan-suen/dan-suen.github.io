import React from 'react';
import './reach.scss';

export default function Reach(): JSX.Element {
  return (
    <div className='reach'>
      <h1>Other ways to find Me:</h1>
      <ul>
        <li>
          <a
            className='btn btn-outline-dark enter-button'
            href='https://github.com/dan-suen'
          >
            Github
          </a>
        </li>
        <li>
          <a
            className='btn btn-outline-dark enter-button'
            href='https://www.linkedin.com/in/daniel-suen-5182b6149/'
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
