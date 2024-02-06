import React from 'react';
import { useState } from "react";
import '../styles/Footer.css';

import gitHub from '../images/logos/GitHub-logo.png';
import linkedIn from '../images/logos/LI-In-Bug.png';

export default function Footer() {
  const [animation1, setAnimation1] = useState('');
  const [animation2, setAnimation2] = useState('');

  return (
    <footer>
      <a className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('')}
      target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHub} alt="GitHub logo" /></a>
      <a className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation2('')}
      target="_blank" href="https://www.linkedin.com/in/anthony-battinelli" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo" /></a>
    </footer>
  );
};