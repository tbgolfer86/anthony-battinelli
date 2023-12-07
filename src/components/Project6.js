import React from 'react';
import { useState } from "react";
import '../styles/Project.css';

import gitHub from '../images/logos/github-mark.png';
import htmlLogo from '../images/logos/html-logo.webp';
import cssLogo from '../images/logos/css-logo.webp';
import javascriptLogo from '../images/logos/javascript-logo.webp';
import nodejsLogo from '../images/logos/4375017_js_logo_node_icon.png';
import mongoDBLogo from '../images/logos/MongoDB_SpringGreen.png';
import npmLogo from '../images/logos/npm-logo-black.png';
import expressLogo from '../images/logos/express-js-icon.png';
import reactLogo from '../images/logos/react-logo.png';

export default function Project5() {
  const [animation1, setAnimation1] = useState('card animate__animated animate__rubberBand');
  
  return (
    <div className={animation1} onMouseEnter={() => setAnimation1('card animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('card')}>
      <div className="project-title github-link">
        <h3>Plant Petaler</h3>
        <a className="animate__animated animate__pulse animate__infinite" target="_blank" href="https://github.com/cellopudding/Plant-Petaler" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a className="screenshot-link6" target="_blank" href="https://plant-petaler.herokuapp.com/" rel="noreferrer">
        <div className="card-summary">
          <p>A scalable ecommerce site for plant lovers to buy indoor and outdoor plants.</p>
          <div className="project-icons">
            <img src={htmlLogo} alt="HTML logo"/>
            <img src={cssLogo} alt="CSS logo"/>
            <img src={javascriptLogo} alt="Javascript logo"/>
            <img src={nodejsLogo} alt="Node.js logo"/>
            <img src={npmLogo} alt="Npm logo"/>
            <img src={expressLogo} alt="Express.js logo"/>
            <img src={mongoDBLogo} alt="SQL logo"/>
            <img src={reactLogo} alt="React.js logo"/>
          </div>
        </div>
      </a>
    </div>
  );
};