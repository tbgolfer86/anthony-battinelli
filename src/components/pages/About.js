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
import hubspotLogo from '../../images/logos/HubSpot_Logo.png';
import apolloLogo from '../../images/logos/Apollo_Logo.png';
import microsoft365Logo from '../../images/logos/Microsoft_365_logo.png'

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
          Results-driven professional with extensive experience in AI-related cybersecurity and compliance for medium to large organizations. Skilled in website and CRM management, content creation, and application documentation, with a strong background in delivering client-facing demonstrations and ensuring team collaboration. Adept in Microsoft 365, HubSpot, and marketing platforms, with a proven ability to enhance user engagement and maintain online brand presence. <br></br> 
          &lt;/p&gt;
        </p>
        <div className="icons">
          <img className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation1('')} src={htmlLogo} alt="HTML logo"/>
          <img className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation2('')} src={cssLogo} alt="CSS logo"/>
          <img className={animation3} onMouseEnter={() => setAnimation3('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation3('')} src={javascriptLogo} alt="Javascript logo"/>
          <img className={animation4} onMouseEnter={() => setAnimation4('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation4('')} src={nodejsLogo} alt="Node.js logo"/>
          <img className={animation8} onMouseEnter={() => setAnimation8('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation8('')} src={reactLogo} alt="React logo"/>
          <img className={animation6} onMouseEnter={() => setAnimation6('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation6('')} src={microsoft365Logo} alt="Microsoft365 logo"/>
          <img className={animation9} onMouseEnter={() => setAnimation9('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation9('')} src={hubspotLogo} alt="HubSpot logo"/>
          <img className={animation10} onMouseEnter={() => setAnimation10('animate__animated animate__pulse animate__repeat-1')} onMouseLeave={() => setAnimation10('')} src={apolloLogo} alt="Apollo logo"/>
        </div> 
      </div>       
    </div>
  );
};