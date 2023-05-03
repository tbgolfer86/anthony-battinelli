import React from 'react';
import '../styles/Navigation.css';
import banner from '../images/aurora-1197753_1280.jpg'

function Navigation() {
    return (
        <div>
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a target="_blank" href="https://docs.google.com/document/d/1WKeuCcx_1n9wO6h4XkL0-0THvJLYb3gm5c9wr3qV4eU/edit?usp=sharing" rel="noreferrer">Resume</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
        </ul>
        <img src={banner} alt="Northern lights"/>
        </div>
    );
  }
  
  export default Navigation;