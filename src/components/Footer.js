import React from 'react';
import '../styles/Footer.css';
import gitHub from '../images/logos/GitHub_Logo_White.png'
import gitHubRoundel from '../images/logos/github-mark-white.png'
import hackerRank from '../images/logos/HackerRank1.png'
import linkedIn from '../images/logos/LinkedIn-Blue-72-┬«@2x.png'

function Footer() {
    return (
        <footer className="section-layout" id="contact-me">
        <h2>Contact Me</h2>
        <div className="right-side-col">
            <ul>
                <li>203•249•1460</li>
                <li><a href="mailto:tbj86@outlook.com">tbj86@outlook.com</a></li>
                <li>
                    <a target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
                    <a target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHubRoundel} alt="GitHub logo"/></a>
                </li>
                <li><a target="_blank" href="https://www.hackerrank.com/tbgolfer86" rel="noreferrer"><img src={hackerRank} alt="HackerRank logo"/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/anthony-battinelli" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo"/></a></li>
            </ul>
        </div>
    </footer> 
    );
  }
  
  export default Footer;