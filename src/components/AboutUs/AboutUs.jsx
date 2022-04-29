import React from 'react';
import './AboutUs.css';
import aboutUs from './../../assets/aboutus/about-us.png';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-container'>
        <p className='about-us__title'>About Us</p>

        <p className='about-us__paragraph'>
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </p>
        <div className='about-us-container__amount'>
          <div className='about-us__amount'>
            <h4>800</h4>
            <p>Pupils</p>
          </div>
          <div className='about-us__amount'>
            <h4>18</h4>
            <p>Teachers</p>
          </div>
          <div className='about-us__amount'>
            <h4>6</h4>
            <p>Foreign languages</p>
          </div>
        </div>
      </div>
      <div className='about-us-image'>
        <img src={aboutUs} alt='' />
      </div>
    </div>
  );
};

export default AboutUs;
