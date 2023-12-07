import React from 'react';
import { useState } from "react";
import '../styles/Project.css';

import gitHub from '../images/logos/github-mark.png';
import htmlLogo from '../images/logos/html-logo.webp'
import cssLogo from '../images/logos/css-logo.webp'
import javascriptLogo from '../images/logos/javascript-logo.webp'

export default function Project2() {
  const [animation1, setAnimation1] = useState('card animate__animated animate__rubberBand');
  
  return (
    <div className={animation1} onMouseEnter={() => setAnimation1('card animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('card')}>
      <div className="project-title github-link">
        <h3>Weather Dashboard</h3>
        <a className="animate__animated animate__pulse animate__infinite" target="_blank" href="https://github.com/tbgolfer86/Weather-Dashboard" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a className="screenshot-link2" target="_blank" href="https://tbgolfer86.github.io/Weather-Dashboard/" rel="noreferrer">
        <div className="card-summary">
          <p>A weather dashboard that dynamically updates based on a searched city.</p>
          <div className="project-icons">
            <img src={htmlLogo} alt="HTML logo"/>
            <img src={cssLogo} alt="CSS logo"/>
            <img src={javascriptLogo} alt="Javascript logo"/>
          </div>
        </div>
      </a>
    </div>
  );
};