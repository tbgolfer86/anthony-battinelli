import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div>
      <h2 className='animate__animated animate__fadeInDown'>Contact Me</h2>
      <form className='form animate__animated animate__fadeInDown' id="contactform" action="https://formsubmit.io/send/4d383f56-1fd7-48f9-b15e-b86eaa5a8628" method="POST">
        <textarea name="name" type="text" id="name" placeholder='name' rows='1'></textarea>
        <textarea name="email" type="email" id="email" placeholder='email' rows='1'></textarea>
        <textarea name="comment" id="comment" placeholder='Enter a message...' rows='7'></textarea>

        <textarea name="_formsubmit_id" type="text" id='honeyspot'></textarea>

        <input value="Submit" type="submit" id='button'></input>
      </form>
    </div>
  );
};