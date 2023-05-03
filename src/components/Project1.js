import React from 'react';
import '../styles/Project.css';

import gitHub from '../images/logos/github-mark-white.png';
import htmlLogo from '../images/logos/html-logo.webp'
import cssLogo from '../images/logos/css-logo.webp'
import javascriptLogo from '../images/logos/javascript-logo.webp'

export default function Project1() {
  return (
    <div class="card">
      <div class="project-title github-link">
        <h3>Recipe Finder</h3>
        <a target="_blank" href="https://github.com/tbgolfer86/Recipe-Finder" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
      </div>
      <a class="screenshot-link1" target="_blank" href="https://tbgolfer86.github.io/Recipe-Finder/" rel="noreferrer">
        <div class="card-summary">
          <p>An app that fetches food and drink recipes by ingredient.</p>
          <div class="project-icons">
            <img src={htmlLogo} alt="HTML logo"/>
            <img src={cssLogo} alt="CSS logo"/>
            <img src={javascriptLogo} alt="Javascript logo"/>
          </div>
        </div>
      </a>   
    </div>
  );
};