import React from 'react';
import { useState } from "react";
import '../../styles/Resume.css';

export default function Resume() {
  const [animation1, setAnimation1] = useState('animate__animated animate__rubberBand');

  return (
    <div>
      <h2 className='animate__animated animate__rubberBand'>Resume</h2>
      <div className={animation1}>
        <a className="resume" target="_blank" href="https://docs.google.com/document/d/1WKeuCcx_1n9wO6h4XkL0-0THvJLYb3gm5c9wr3qV4eU/edit?usp=sharing" rel="noreferrer"></a>
      </div>   
    </div>
  );
};