import React from 'react';
import '../styles/Footer.css';
import gitHub from '../images/logos/github-mark-white.png';
import linkedIn from '../images/logos/LI-In-Bug.png';
import hackerRank from '../images/logos/hackerrank.png';

function Footer() {
    return (
        <footer>
            <div className='icons'>
                <a target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHub} alt="GitHub logo"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/anthony-battinelli" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo"/></a>
                <a target="_blank" href="https://www.hackerrank.com/tbgolfer86" rel="noreferrer"><img src={hackerRank} alt="HackerRank logo"/></a>
            </div>
        </footer> 
    );
  }
  
  export default Footer;