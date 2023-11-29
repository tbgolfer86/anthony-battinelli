import React from 'react';
import { useState } from "react";
import '../styles/Project.css';

import gitHub from '../images/logos/github-mark-white.png';
import htmlLogo from '../images/logos/html-logo.webp';
import cssLogo from '../images/logos/css-logo.webp';
import javascriptLogo from '../images/logos/javascript-logo.webp';
import nodejsLogo from '../images/logos/4375017_js_logo_node_icon.png';
import npmLogo from '../images/logos/npm-2009.png';
import expressLogo from '../images/logos/express-js-icon.png';

export default function Project3() {
  const [animation1, setAnimation1] = useState('card animate__animated animate__rubberBand');
  const [animation2, setAnimation2] = useState('');
  
  return (
    <div className={animation1} onMouseEnter={() => setAnimation1('card animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('card')}>
      <div className="project-title github-link">
        <h3>Note Taker</h3>
        <a className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__pulse animate__repeat-2 animate__faster')} onMouseLeave={() => setAnimation2('')} target="_blank" href="https://github.com/tbgolfer86/Note-Taker" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a className="screenshot-link3" target="_blank" href="https://note-creator-uconn.herokuapp.com" rel="noreferrer">
        <div className="card-summary">
          <p>A note taker app that can be used to write and save notes.</p>
          <div className="project-icons">
            <img src={htmlLogo} alt="HTML logo"/>
            <img src={cssLogo} alt="CSS logo"/>
            <img src={javascriptLogo} alt="Javascript logo"/>
            <img src={nodejsLogo} alt="Node.js logo"/>
            <img src={npmLogo} alt="Npm logo"/>
            <img src={expressLogo} alt="Express.js logo"/>
          </div>
        </div>
      </a>
    </div>
  );
};