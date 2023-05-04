import React from 'react';
import '../styles/Project.css';

import gitHub from '../images/logos/github-mark-white.png';
import htmlLogo from '../images/logos/html-logo.webp';
import cssLogo from '../images/logos/css-logo.webp';
import javascriptLogo from '../images/logos/javascript-logo.webp';
import nodejsLogo from '../images/logos/80-804068_javascript-node-js-logo-png.png';
import sqlLogo from '../images/logos/sql-logo.png';
import npmLogo from '../images/logos/npm-2009.png';
import expressLogo from '../images/logos/express-js-icon.png';
import handlebarsLogo from '../images/logos/handlebars-js.webp';

export default function Project5() {
  return (
    <div className="card">
      <div className="project-title github-link">
        <h3>Scorecards</h3>
        <a target="_blank" href="https://github.com/sampaul10/scorecard-app" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a className="screenshot-link5" target="_blank" href="https://sam-scorecard-app.herokuapp.com" rel="noreferrer">
        <div className="card-summary">
          <p>An app that saves your hole-by-hole scores on the golf course.</p>
          <div className="project-icons">
            <img src={htmlLogo} alt="HTML logo"/>
            <img src={cssLogo} alt="CSS logo"/>
            <img src={javascriptLogo} alt="Javascript logo"/>
            <img src={nodejsLogo} alt="Node.js logo"/>
            <img src={sqlLogo} alt="SQL logo"/>
            <img src={npmLogo} alt="Npm logo"/>
            <img src={expressLogo} alt="Express.js logo"/>
            <img src={handlebarsLogo} alt="Handlebars logo"/>
          </div>
        </div>
      </a>
    </div>
  );
};