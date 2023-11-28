import React from 'react';
import './reach.scss';

export default function Reach(): JSX.Element {
  return (
    <div className='reach'>
      <h1>Other ways to find Me:</h1>
      <div>
        <a
          className='btn btn-outline-dark enter-button'
          href='https://github.com/dan-suen'
        >
          Github
        </a>
      </div>
      <div>
        <a
          className='btn btn-outline-dark enter-button'
          href='https://www.linkedin.com/in/daniel-suen-5182b6149/'
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a
          className='btn btn-outline-dark enter-button'
          href='mailto:danielsuen200791357@gmail.com'
        >
          Email : danielsuen200791357@gmail.com
        </a>
      </div>
      <div className='btn btn-outline-dark enter-button'>
        Phone : 416 804 8855
      </div>
    </div>
  );
}
