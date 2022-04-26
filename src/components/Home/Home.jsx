import React from 'react';
import './Home.css';
import lightbulb from '../../assets/getstarted/light-bulb.png';
import map from '../../assets/getstarted/map.png';
const Home = () => {
  console.log(window.innerWidth);
  return (
    <div className='home-container'>
      <div className='heading'>
        <div className='heading__logo'>
          Brit<span>lex</span>{' '}
        </div>
        <ul className='heading__list'>
          <li>Home</li>
          <li>Skills</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contacts</li>
        </ul>
        <button className='heading__button'>
          <span>Let's Talk</span>
        </button>
      </div>
      <div className='getstarted-container'>
        <div className='getstarted__left'>
          <div className='getstarted__left-title-image'>
            <h3>Learn Any Foreign Language</h3>
            <img src={lightbulb} alt='lightbulb' />
          </div>
          <p>
            <span>
              With our teachers who write a program for each student, you will
              be able to make your first sketch after the first lesson.
            </span>
          </p>
          <button>
            <span>Get started</span>
          </button>
        </div>
        <div className='getstarted__right'>
          <img src={map} alt='map' />
        </div>
      </div>
    </div>
  );
};

export default Home;
