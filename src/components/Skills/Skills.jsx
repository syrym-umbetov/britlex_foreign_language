import React from 'react';
import './Skills.css';

import speaking from './../../assets/skills/speaking.png';
import writing from './../../assets/skills/writing.png';
import reading from './../../assets/skills/reading.png';
import listening from './../../assets/skills/listening.png';
const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills__heading'>
        <h2>Skills</h2>
      </div>
      <div className='skills-items-container'>
        <div className='skills-items-container__speaking flex'>
          <div className='speaking__image'>
            <img src={speaking} alt='' />
          </div>
          <div className='speaking'>
            <h4>Speaking</h4>
            <p>
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only
            </p>
            <p>
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className='skills-items-container__writing flex'>
          <div className='writing__image'>
            <img src={writing} alt='' />
          </div>
          <div className='writing'>
            <h4>Writing</h4>
            <p>
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition{' '}
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className='skills-items-container__reading flex'>
          <div>
            <img src={reading} alt='' />
          </div>
          <div className='reading'>
            <h4>Reading</h4>

            <p>
              perception and response actions of the user resulting from the use
              and/or upcoming use of the product, system or service
            </p>

            <button>Learn more</button>
          </div>
        </div>
        <div className='skills-items-container__listening flex__listening'>
          <div>
            <h4>Listening</h4>

            <p>
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding{' '}
            </p>
            <button>Learn more</button>
          </div>
          <div className='listening__image'>
            <img src={listening} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
