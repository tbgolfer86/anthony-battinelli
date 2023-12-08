import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div className='animate__animated animate__fadeInDown'>
      <h2>Contact Me</h2>
      <div className="form-container">
        <form className='form' id="contactform" action="https://formsubmit.io/send/4d383f56-1fd7-48f9-b15e-b86eaa5a8628" method="POST">
          <div className="form-group">
            <label>Your Name:</label>
            <input name="name" id="name" type="text"></input>
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input name="email" id="email" type="email"></input>
          </div>

          <input name="_formsubmit_id" id="honeyspot" type="text"></input>

          <div className="form-group">
            <label>Send a message:</label>
            <textarea cols="50" rows="10" name="comment" id="comment"></textarea>
          </div>
          <input value="Submit" type="submit" className="form-submit-btn"></input> 
        </form>
      </div>
    </div>
  );
};