import React from 'react';
import './front.scss';

export default function Front(): JSX.Element {
  return (
    <div id='front' className='front'>
      <h1>Welcome!</h1>
      <a className='btn btn-outline-dark enter-button' href='#about'>
        Learn More
      </a>
    </div>
  );
}
