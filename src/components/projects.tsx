import React from 'react';
import './projects.scss';

export default function Project(): JSX.Element {
  return (
    <div id="project" className="project">
      <h1>My Projects</h1>
      <a href="https://github.com/dan-suen/GeTogether">Getogether</a>
      <a href="https://github.com/dan-suen/marketplace">Marketplace</a>
    </div>
  );
}
