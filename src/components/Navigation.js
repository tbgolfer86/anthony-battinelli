import React from 'react';
import '../styles/Navigation.css';
import banner from '../images/aurora-1197753_1280.jpg'

function Navigation() {
    return (
        <nav>
            <div className='navbar'>
                <a href="#about-me">About Me</a>
                <a href="#work">Work</a>
                <a target="_blank" href="https://docs.google.com/document/d/1WKeuCcx_1n9wO6h4XkL0-0THvJLYb3gm5c9wr3qV4eU/edit?usp=sharing" rel="noreferrer">Resume</a>
                <a href="#contact-me">Contact Me</a>
            </div>
            <img src={banner} alt="Northern lights"/>
        </nav>
    );
  }
  
  export default Navigation;