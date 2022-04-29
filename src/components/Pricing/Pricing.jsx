import React from 'react';
import './Pricing.css';
import selfStudy from './../../assets/pricing/self-study.png';
import liveOnline from './../../assets/pricing/Live-online.png';
import personalTuition from './../../assets/pricing/personal-tuition.png';

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-title'>Pricing</div>
      <div className='pricing-container'>
        <div className='pricing-image'>
          <div className='selfStudy__image'>
            <img src={selfStudy} alt='' />
          </div>
          <div className='selfStudy__title'>Self-study online course</div>
          <div className='selfStudy__description'>
            Start learning English online in live classes with qualified EC
            teachers and students from all over the world.
          </div>
          <div className='selfStudy__price'>
            <span className='selfStudy__price-span'> £12.99</span> per month
          </div>
        </div>

        <div className='pricing-image'>
          <div className='selfStudy__image'>
            <img src={liveOnline} alt='' />
          </div>
          <div className='selfStudy__title'>Live online classes</div>
          <div className='selfStudy__description'>
            Interactive group classes with expert teachers. Free 7-day trial
          </div>
          <div className='selfStudy__price'>
            <span className='selfStudy__price-span'> £5.99</span> per month
          </div>
        </div>

        <div className='pricing-image'>
          <div className='selfStudy__image'>
            <img src={personalTuition} alt='' />
          </div>
          <div className='selfStudy__title'>Personal Tuition</div>
          <div className='selfStudy__description'>
            Online one-to-one English tutoring – enjoy our first session for
            only $1
          </div>
          <div className='selfStudy__price'>
            <span className='selfStudy__price-span'> £20.99</span> per month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
