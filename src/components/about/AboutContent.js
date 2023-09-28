import React from "react";
import LoveCards from './LoveCards';

function AboutContent() {
  return (
    <div className='section-gray'>
      <h1 className='twoColumns'>nice to meet you!</h1>
      <div className='paragraphContainer' style={{marginLeft: '40%'}}>
        <p>I am an industrial designer passionate about building social equity through design! At the core of my design practice is a desire to learn about and work with a diverse range of people and problems to enable me to create more empathetic and inclusive designs.</p>
      </div>
      <h1 className='twoColumns section'>outside of the studio, i am...</h1>
      <div style={{marginLeft: '40%'}}>
        <LoveCards />
      </div>
    </div>
  )
}

export default AboutContent;