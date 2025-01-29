import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div className='animate__animated animate__fadeInDown'>
      <h2>Contact Me</h2>
      <div className="form-container">
        {/* <form className='form' id="contactform" action="https://formsubmit.io/send/4d383f56-1fd7-48f9-b15e-b86eaa5a8628" method="POST">
          <div className="form-group">
            <label>Your Name:</label>
            <input name="name" type="text" id="name"></input>
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input name="email" type="email" id="email"></input>
          </div>
          <div className="form-group">
            <label>Send a message:</label>
            <textarea name="comment" id="comment" cols="50" rows="10"></textarea>
          </div>

          <input name="_formsubmit_id" type="text" style={{display: "none"}}></input>

          <input value="Submit" type="submit" className="form-submit-btn"></input> 
        </form> */}
        <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAY6RHYZUQk1GUFNIRTY2M1VCMVVHUTdCVlFUS1FRMC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>      </div>
    </div>
  );
};