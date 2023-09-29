import React from "react";
import LoveCards from './LoveCards';
import ContainerGray from '../ContainerGray';
import H1 from '../H1';

function AboutContent() {
  return (
    <ContainerGray>
      <H1 className='lg:w-2/5'>nice to meet you!</H1>
      <p className='text-sm lg:text-base lg:ml-[40%] mt-2'>I am an industrial designer passionate about building social equity through design! At the core of my design practice is a desire to learn about and work with a diverse range of people and problems to enable me to create more empathetic and inclusive designs.</p>
      <H1 className='mt-16 lg:mt-36'>outside of the studio, i am...</H1>
      <div className='lg:ml-[40%] mt-2'>
        <LoveCards />
      </div>
    </ContainerGray>
  )
}

export default AboutContent;