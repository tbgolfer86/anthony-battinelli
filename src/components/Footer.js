import React from 'react';
import { useState } from "react";
import '../styles/Footer.css';

import gitHub from '../images/logos/github-mark-white.png';
import linkedIn from '../images/logos/LI-In-Bug.png';
import hackerRank from '../images/logos/hackerrank.png';

export default function Footer() {
  const [animation, setAnimation] = useState('');
  const [animation1, setAnimation1] = useState('');
  const [animation2, setAnimation2] = useState('');

  return (
    <footer>
      <a className={animation} onClick={() => setAnimation('animate__animated animate__bounce animate__repeat-3')} target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHub} alt="GitHub logo" /></a>
      <a className={animation1} onClick={() => setAnimation1('animate__animated animate__bounce animate__repeat-3')} target="_blank" href="https://www.linkedin.com/in/anthony-battinelli" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo" /></a>
      <a className={animation2} onClick={() => setAnimation2('animate__animated animate__bounce animate__repeat-3')} target="_blank" href="https://www.hackerrank.com/tbgolfer86" rel="noreferrer"><img src={hackerRank} alt="HackerRank logo" /></a>
    </footer>
  );
};