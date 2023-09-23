import React from "react";
import LoveCards from './LoveCards';

function AboutContent() {
  return (
    <div className='section-gray'>
      <h1 className='twoColumns'>why design?</h1>
      <div className='paragraphContainer' style={{marginLeft: '40%'}}>
        <p><b>At the core of my design practice is a desire to learn about and work with a diverse range of people and problems.</b> I strive to center marginalized demographics in the projects that I undertake to build more empathetic and inclusive designs.</p>
        <p><b>It has long been a personal aspiration of mine to bring my experience in UI/UX design to the gaming industry!</b> I have observed and experienced the gaming industry's recent strides toward increased inclusivity, and I remain hopeful that despite its history of male dominance and hostility toward others, it will continue to evolve towards a more inclusive future. I hope to use my creative skill set to be a part of this change, designing experiences that may make the joys of gaming (fun! sense of community and social connection! challenge and achievement!) more accessible for all.</p>
      </div>
      <h1 className='twoColumns section'>outside of the studio, i am...</h1>
      <div style={{marginLeft: '40%'}}>
        <LoveCards />
      </div>
    </div>
  )
}

export default AboutContent;