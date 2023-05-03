import React from 'react';
import '../../styles/Work.css';
import Project1 from '../Project1';
import Project2 from '../Project2';
import Project3 from '../Project3';
import Project4 from '../Project4';
import Project5 from '../Project5';

export default function Work() {
  return (
    <div>
      <h2>Work</h2>
      <div className='projects'>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
      </div>      
    </div>
  );
};