import React from 'react';
import './ContactUs.css';
import contactUs from './../../assets/contactus/contact-us.png';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='contact-us__image'>
        <img src={contactUs} alt='' />
      </div>
      <div className='contact-us__right'>
        <div className='right-title'>Contact Us</div>
        <div className='right-description'>
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </div>
        <div className='right-buttons'>
          <input type='text' placeholder='Enter your E-mail' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
