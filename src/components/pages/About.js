import React from 'react';
import '../../styles/About.css';

export default function About() {
  return (
    <section class="section-layout" id="about-me">
            <h2>About Me</h2>
            <div class="right-side-col">
                <div class="bio">
                    <img id="avatar"/>
                    <p> I am a critical thinking full stack web developer with experience in front and back end design. My previous
                        work experience at an upscale country club as an assistant golf professional has taught me the importance of 
                        paying strong attention to detail and working in a diverse team environment. I have a passion for sports, music, 
                        pop culture, retail stock and options trading, and modern technology. I am confident in my ability to excel in a world 
                        driven by tech by utilizing a combination of strong communication, collaboration, problem-solving, 
                        analytical, and organizational skills.
                    </p>
                </div>
                <div class="icons">
                    <img src="./assets/images/logos/html-logo.webp" alt="HTML logo"/>
                    <img src="./assets/images/logos/css-logo.webp" alt="CSS logo"/>
                    <img src="./assets/images/logos/javascript-logo.webp" alt="Javascript logo"/>
                    <img src="./assets/images/logos/80-804068_javascript-node-js-logo-png.png" alt="Node.js logo"/>
                    <img src="./assets/images/logos/npm-2009.png" alt="Npm logo"/>
                    <img src="./assets/images/logos/express-js-icon.png" alt="Express.js logo"/>
                    <img src="./assets/images/logos/handlebars-js.webp" alt="Handlebars logo"/>
                    <img src="./assets/images/logos/sql-logo.png" alt="SQL logo"/>
                    <img src="./assets/images/logos/react-logo.png" alt="React logo"/>
                    <img src="./assets/images/logos/Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code logo"/>
                </div>
            </div>
        </section>
  );
}