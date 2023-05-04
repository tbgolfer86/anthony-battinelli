import React from 'react';
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
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={htmlLogo} alt="HTML logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={cssLogo} alt="CSS logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={javascriptLogo} alt="Javascript logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={nodejsLogo} alt="Node.js logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={npmLogo} alt="Npm logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={expressLogo} alt="Express.js logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={handlebarsLogo} alt="Handlebars logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={reactLogo} alt="React logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={sqlLogo} alt="SQL logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={mongoDbLogo} alt="MongoDB logo"/>
          <img className='animate__animated animate__bounceIn animate__repeat-3' src={vscodeLogo} alt="VS Code logo"/>
        </div>        
    </div>
  );
};