import React from 'react';
import { useState } from "react";
import '../../styles/Resume.css';

export default function Resume() {
  const [animation1, setAnimation1] = useState('animate__animated animate__rubberBand');

  return (
    <div>
      <h2 className='animate__animated animate__rubberBand'>Resume</h2>
      <div className={animation1}>
        <a className="resume" target="_blank" href="https://1drv.ms/w/s!AnB1yNkSA_167zrbLQgzs2G1e2_F?e=Bfj5Pv" rel="noreferrer"></a>
      </div>   
    </div>
  );
};