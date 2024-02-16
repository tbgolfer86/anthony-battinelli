import React from 'react';
import { useState } from "react";
import '../../styles/About.css';

import htmlLogo from '../../images/logos/html-logo.webp';
import cssLogo from '../../images/logos/css-logo.webp';
import javascriptLogo from '../../images/logos/javascript-logo.webp';
import nodejsLogo from '../../images/logos/Node.js_logo.png';
import npmLogo from '../../images/logos/npm-logo-black.png';
import expressLogo from '../../images/logos/express-js-icon.png';
import handlebarsLogo from '../../images/logos/handlebars-js.webp';
import sqlLogo from '../../images/logos/sql-logo.png';
import reactLogo from '../../images/logos/react-logo1.png';
import mongoDbLogo from '../../images/logos/MongoDB_SlateBlue.png';
import uconn from '../../images/logos/University of Connecticut favicon.png'

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

  return (
    <div>
      <h2 className='animate__animated animate__fadeInDown'>About Me</h2>
      <img className="animate__animated animate__fadeInRight avatar" src={uconn} alt="UConn Logo"/>
      <div className='about-section animate__animated animate__fadeInRight'>
        <p> 
          &lt;p&gt; <br></br>
          Passionate about sports, music, and modern culture, I stay up-to-date with the latest trends and developments. With coding experience and a love for technology, I enjoy problem-solving and exploring innovative solutions. I value a diverse team environment while utilizing a combination of strong communication, collaboration, and organizational skills. 💻 <br></br> 
          &lt;/p&gt;
        </p>
        <div className="icons">
          <img className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation1('')} src={htmlLogo} alt="HTML logo"/>
          <img className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation2('')} src={cssLogo} alt="CSS logo"/>
          <img className={animation3} onMouseEnter={() => setAnimation3('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation3('')} src={javascriptLogo} alt="Javascript logo"/>
          <img className={animation4} onMouseEnter={() => setAnimation4('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation4('')} src={nodejsLogo} alt="Node.js logo"/>
          <img className={animation5} onMouseEnter={() => setAnimation5('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation5('')} src={npmLogo} alt="Npm logo"/>
          <img className={animation6} onMouseEnter={() => setAnimation6('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation6('')} src={expressLogo} alt="Express.js logo"/>
          <img className={animation9} onMouseEnter={() => setAnimation9('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation9('')} src={sqlLogo} alt="SQL logo"/>
          <img className={animation10} onMouseEnter={() => setAnimation10('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation10('')} src={mongoDbLogo} alt="MongoDB logo"/>
          <img className={animation7} onMouseEnter={() => setAnimation7('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation7('')} src={handlebarsLogo} alt="Handlebars logo"/>
          <img className={animation8} onMouseEnter={() => setAnimation8('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation8('')} src={reactLogo} alt="React logo"/>
        </div> 
      </div>       
    </div>
  );
};