import React from 'react';
import './projects.scss';

export default function Project(): JSX.Element {
  return (
    <div id='project' className='project'>
      <h1>My Projects</h1>
      <div className='project-items'>
        <div className='card'>
          <img src='...' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Getogether</h5>
            <p className='card-text'>
              GeTogether is a project that is loosely inspired by the Meetups
              platform and is built using the PERN stack. This is supplemented
              by a plethora of additional libararies including react-router,
              react day-picker and even Google maps!
            </p>
            <a
              className='btn btn-outline-primary'
              href='https://github.com/dan-suen/GeTogether'
            >
              Github
            </a>
          </div>
        </div>
        <div className='card'>
          <img src='...' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Marketplace</h5>
            <p className='card-text'>
              Marketplace is a full stack web application built with Express,
              PostgreSql and Node.js. The application itself simulates the
              ability to create and delete items in an online marketplace. Users
              are view items being listed and mark them as favourites or even
              inquire the owner via a messaging system.
            </p>
            <a
              className='btn btn-outline-primary'
              href='https://github.com/dan-suen/marketplace'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
