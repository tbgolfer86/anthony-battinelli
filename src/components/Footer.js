import React from 'react';
import { useState } from "react";
import '../styles/Footer.css';

import gitHub from '../images/logos/github_icon.png';
import linkedIn from '../images/logos/linkedinBlack.png';
import spotify from '../images/logos/spotify_iconBlack.png';

export default function Footer() {
  const [animation1, setAnimation1] = useState('');
  const [animation2, setAnimation2] = useState('');
  const [animation3, setAnimation3] = useState('');

  return (
    <footer>
      <a className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('')}
      target="_blank" href="https://github.com/tbgolfer86" rel="noreferrer"><img src={gitHub} alt="GitHub logo" /></a>
      <a className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation2('')}
      target="_blank" href="https://www.linkedin.com/in/anthony-battinelli" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo" /></a>
      <a className={animation3} onMouseEnter={() => setAnimation3('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation3('')}
      target="_blank" href="https://open.spotify.com/user/31k4tai6yc3h5gmc6ht7klgfeuoy?si=9689cc251db44cbf" rel="noreferrer"><img src={spotify} alt="Spotify logo" /></a>
    </footer>
  );
};