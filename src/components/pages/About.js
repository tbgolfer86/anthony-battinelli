import React from 'react';
import { useState } from "react";
import '../../styles/About.css';

import htmlLogo from '../../images/logos/html-logo.webp';
import cssLogo from '../../images/logos/css-logo.webp';
import javascriptLogo from '../../images/logos/javascript-logo.webp';
import nodejsLogo from '../../images/logos/80-804068_javascript-node-js-logo-png.png';
import npmLogo from '../../images/logos/npm-2009.png';
import expressLogo from '../../images/logos/express-js-icon.png';
import handlebarsLogo from '../../images/logos/handlebars-js.webp';
import sqlLogo from '../../images/logos/sql-logo.png';
import reactLogo from '../../images/logos/react-logo.png';
import vscodeLogo from '../../images/logos/Visual_Studio_Code_1.35_icon.svg.png';
import mongoDbLogo from '../../images/logos/MongoDB_SlateBlue.png';

export default function About() {
  const [animation1, setAnimation1] = useState('');
  const [animation2, setAnimation2] = useState('');
  const [animation3, setAnimation3] = useState('');
  const [animation4, setAnimation4] = useState('');
  const [animation5, setAnimation5] = useState('');
  const [animation6, setAnimation6] = useState('');
  const [animation7, setAnimation7] = useState('');
  const [animation8, setAnimation8] = useState('');
  const [animation9, setAnimation9] = useState('');
  const [animation10, setAnimation10] = useState('');
  const [animation11, setAnimation11] = useState('');

  return (
    <div>
      <h2>About Me</h2>
        <div>
          <img id="avatar"/>
          <p> I am a critical thinking full stack web developer with experience in front and back end design. My previous
                work experience at an upscale country club as an assistant golf professional has taught me the importance of 
                paying strong attention to detail and working in a diverse team environment. I have a passion for sports, music, 
                pop culture, retail stock and options trading, and modern technology. I am confident in my ability to excel in a world 
                driven by tech by utilizing a combination of strong communication, collaboration, problem-solving, 
                analytical, and organizational skills.
          </p>
        </div>
        <div className="icons">
          <img className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation1('')} src={htmlLogo} alt="HTML logo"/>
          <img className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation2('')} src={cssLogo} alt="CSS logo"/>
          <img className={animation3} onMouseEnter={() => setAnimation3('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation3('')} src={javascriptLogo} alt="Javascript logo"/>
          <img className={animation4} onMouseEnter={() => setAnimation4('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation4('')} src={nodejsLogo} alt="Node.js logo"/>
          <img className={animation5} onMouseEnter={() => setAnimation5('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation5('')} src={npmLogo} alt="Npm logo"/>
          <img className={animation6} onMouseEnter={() => setAnimation6('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation6('')} src={expressLogo} alt="Express.js logo"/>
          <img className={animation7} onMouseEnter={() => setAnimation7('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation7('')} src={handlebarsLogo} alt="Handlebars logo"/>
          <img className={animation8} onMouseEnter={() => setAnimation8('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation8('')} src={reactLogo} alt="React logo"/>
          <img className={animation9} onMouseEnter={() => setAnimation9('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation9('')} src={sqlLogo} alt="SQL logo"/>
          <img className={animation10} onMouseEnter={() => setAnimation10('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation10('')} src={mongoDbLogo} alt="MongoDB logo"/>
          <img className={animation11} onMouseEnter={() => setAnimation11('animate__animated animate__headShake animate__infinite')} onMouseLeave={() => setAnimation11('')} src={vscodeLogo} alt="VS Code logo"/>
        </div>        
    </div>
  );
};