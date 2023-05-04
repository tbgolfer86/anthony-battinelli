import React from 'react';
import {  } from 'react-animations';
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


export default function Project4() {
  return (
    <div className="card">
      <div className="project-title github-link">
        <h3>Tech Blog</h3>
        <a target="_blank" href="https://github.com/tbgolfer86/Tech-Blog" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a className="screenshot-link4" target="_blank" href="https://uconn-tech-blog.herokuapp.com" rel="noreferrer">
        <div className="card-summary">
          <p>A CMS-style blog site where devs can publish blog posts and comment on other devs' posts.</p>
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